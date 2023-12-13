<script setup>
import { ref, onMounted, onUnmounted, markRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TwilioVideo from 'twilio-video';
import EndCallButton from '../buttons/video_call/EndCall.vue';
import VolumeUpButton from '../buttons/video_call/VolumeUp.vue';
import VolumeDownButton from '../buttons/video_call/VolumeDown.vue';

let storedContacts = ref([]);
let relation = ref('');
let name = ref('');
let email = ref('');
const localVideoRef = ref(null);
const remoteVideoRef = ref(null);
const route = useRoute();
const router = useRouter();
const roomName = route.params.contactIndex;
let room = ref(null);

onMounted(() => {
  const initializeRoom = async () => {
    storedContacts.value = JSON.parse(localStorage.getItem('contacts')) || [];
    if (storedContacts.value.length > roomName) {
      relation.value = storedContacts.value[roomName].relation;
      name.value = storedContacts.value[roomName].name;
      email.value = storedContacts.value[roomName].email;
    }
    const token = await fetchAccessToken(roomName, email.value);
    await connectToRoom(token);
  };
  initializeRoom();
});

async function fetchAccessToken(roomName, email) {
  const response = await fetch('/join-room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ roomName, email }),
  });
  const { token } = await response.json();
  return token;
}

async function connectToRoom(token) {
  try {
    let connectedRoom = await TwilioVideo.connect(token, {
      room: roomName,
      video: { width: 640 }
    });
    connectedRoom = markRaw(connectedRoom);
    room.value = connectedRoom;
    setupRoomEventListeners();
    if (room.value) {
      console.log(`Connected to room: ${room.value.name}, as ${room.value.localParticipant.identity}`);
      handleConnectedParticipant(room.value.localParticipant);
      room.value.participants.forEach(handleConnectedParticipant);
    }
  } catch (error) {
    console.error('Failed to connect to Twilio Room:', error);
  }
}

function setupRoomEventListeners() {
  if (room.value) {
    room.value.on("participantConnected", handleConnectedParticipant);
    room.value.on("participantDisconnected", handleDisconnectedParticipant);
    window.addEventListener("pagehide", () => room.value.disconnect());
    window.addEventListener("beforeunload", () => {
      room.value.disconnect();
      leaveRoom();
    });
  }
}

function handleConnectedParticipant(participant) {
  console.log(`Participant connected: ${participant.identity}`);
  if (participant) {
    participant.tracks.forEach((trackPublication) => {
      console.log(`Published track for ${participant.identity}:`, trackPublication);
      if (trackPublication.track) {
        console.log(`Displaying track for ${participant.identity}`);
        displayTrack(trackPublication.track, participant)
      } else {
        trackPublication.on('subscribed', (track) => {
          displayTrack(track, participant)
        });
      }
    });
    participant.on("trackPublished", (trackPublication) => {
      console.log(`New track published by ${participant.identity}:`, trackPublication);
      trackPublication.on('subscribed', (track) => {
        console.log(`Displaying new track for ${participant.identity}`);
        displayTrack(track, participant);
      })
    });
    console.log(`Participant connected: ${participant.identity}`);
  }
}

function displayTrack(track, participant) {
  console.log(`Attempting to display ${track.kind} track for ${participant.identity}:`);
  const element = track.attach();
  console.log(`${track.kind} element for ${participant.identity}:`, element);
  if (track.kind === "video") {

    if (participant.identity === room.value.localParticipant.identity) {
      console.log('Appending to local video ref:', localVideoRef.value);
      localVideoRef.value.appendChild(element);
    } else {
      console.log('Appending to remote video ref:', remoteVideoRef.value);
      remoteVideoRef.value.appendChild(element);
    }
  } else if (track.kind === "audio" && participant.identity !== room.value.localParticipant.identity) {
    // Appending remote audio element to the body
    document.body.appendChild(element);
  }
}

function handleDisconnectedParticipant(participant) {
  participant.removeAllListeners();
  const participantDiv = document.getElementById(participant.identity);
  if (participantDiv) {
    participantDiv.remove();
  }
}

function leaveRoom() {
  console.log(`Leaving room: ${roomName}`);
  fetch('/leave-room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ roomName }),
  })
  .then(response => response.json())
  .then(data => console.log('Room left:', data))
  .catch(error => console.error('Error leaving room:', error));
  router.push('/');
}

onUnmounted(() => {
  if (room.value) {
    room.value.disconnect();
  }
});

</script>

<template>
  <div class="mx-auto">
    <!-- Video Text -->
    <div class="mx-auto pb-5 text-[40px] font-normal font-['Arial']">
          <span class="text-black">
            You’re speaking to your
          </span>
      <span class="text-darkgreen font-bold">
            {{ relation }}
          </span>
      <span class="text-black">, </span>
      <span class="text-darkblue font-bold">
            {{ name }}
          </span>
      <span class="text-black">.</span>
    </div>
    <div class="mx-auto">
      <div>
        <!-- Remote Video Screen -->
        <div ref="remoteVideoRef" class="mx-auto h-[595px] w-[445px] bg-lightgrey border border-black">
          <!-- remote video will be attached here -->
          <div class="absolute h-[600px] w-[445px]">
            <!-- Local Video Screen -->
            <div ref="localVideoRef" class="absolute bottom-5 left-4 w-[200px] h-[150px] bg-lightgrey border border-black">
              <!-- local video will be attached here -->
            </div>
            <!-- End Call Button -->
            <button class="absolute bottom-5 right-5">
              <EndCallButton @endCall="leaveRoom" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
