<script setup>
import { ref, onMounted, onUnmounted, markRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TwilioVideo from 'twilio-video';
import EndCallButton from '../buttons/video_call/EndCall.vue';
import VolumePanel from '../buttons/video_call/VolumePanel.vue';

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

// Import speech recognition related functionality
import { watch, ref as refSpeech, onMounted as onMountedSpeech, onUnmounted as onUnmountedSpeech } from 'vue';
const voiceCommand = refSpeech('');

onMountedSpeech(() => {
// Add event listener for the 'voiceCommand' event
document.addEventListener('voiceCommand', handleVoiceCommand);
});

onUnmountedSpeech(() => {
// Remove event listener when the component is unmounted
document.removeEventListener('voiceCommand', handleVoiceCommand);
});

// Function to handle the voice command for ending the call
const handleVoiceCommand = (event) => {
const command = event.detail.toLowerCase();
console.log('Heard command:', command);

// Check if the command is "end circle call"
if (command === 'circle end call') {
    // Simulate a click on the EndCallButton
    handleEndCallButtonClick();
}
};

// Function to simulate the click on the EndCallButton
const handleEndCallButtonClick = () => {
// Log for debugging
console.log('End Call Button Clicked!');
// Perform actions you want to do when the call ends
  // Disconnect from the Twilio room
  if (room.value) {
    room.value.disconnect();
  }

  // Navigate back to the home route
  router.push('/');
};

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
        window.addEventListener("beforeunload", () => room.value.disconnect());
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

onUnmounted(() => {
    if (room.value) {
        room.value.disconnect();
    }
});

</script>

<template>
    <div class="grid grid-rows-3 grid-cols-3 gap-4 w-[40rem] h-screen">
        <!-- Text Section -->
        <h1 class="row-start-1 row-end-2 col-start-1 col-end-3 bg-darkblue">
            You are speaking to your {{ relation }}, {{ name }}.
        </h1>
        <!-- Local User's Camera -->
        <div ref="localVideoRef" class="row-start-1 row-end-2 col-start-3 col-end-4 bg-lightgrey">
            <!-- Local video will be attached here -->
        </div>
        <!-- Remote User's Camera -->
        <div ref="remoteVideoRef" class="row-start-2 row-end-4 col-start-1 col-end-3 bg-darkgrey">
            <!-- Remote video will be attached here -->
        </div>
        <!-- Volume Buttons -->
        <button class="row-start-2 row-end-3 col-start-3 col-end-4 bg-lightblue">
            <VolumePanel/>
        </button>
        <!-- End Call Button -->
        <button class="row-start-3 row-end-4 col-start-3 col-end-4 bg-darkred">
            <EndCallButton/>
        </button>
    </div>
</template>
