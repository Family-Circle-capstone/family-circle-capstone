<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import TwilioVideo from 'twilio-video';
import EndCallButton from '../buttons/video_call/EndCall.vue';
import VolumePanel from '../buttons/video_call/VolumePanel.vue';

let storedContacts = ref([]);
let relation = ref('');
let name = ref('');
const localVideoRef = ref(null);
const remoteVideoRef = ref(null);
const route = useRoute();
const roomName = route.params.contactIndex;
let room = ref(null);

async function fetchAccessToken(roomName) {
    const response = await fetch('/join-room', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomName }),
    });
    const { token } = await response.json();
    return token;
}

async function connectToRoom(token) {
    try {
        room = await TwilioVideo.connect(token, {
            room: roomName,
        });
        setupRoomEventListeners();
        if (room.value) {
            handleConnectedParticipant(room.localParticipant);
            room.participants.forEach(handleConnectedParticipant);
        }
    } catch (error) {
        console.error('Failed to connect to Twilio Room:', error);
    }
}

function setupRoomEventListeners() {
    if (room) {
        room.on("participantConnected", handleConnectedParticipant);
        room.on("participantDisconnected", handleDisconnectedParticipant);
        window.addEventListener("pagehide", () => room.disconnect());
        window.addEventListener("beforeunload", () => room.disconnect());
    }
}

function handleConnectedParticipant(participant) {
    if (participant) {
        participant.tracks.forEach((trackPublication) => {
            if (trackPublication.track) {
                displayTrack(trackPublication.track, participant)
            }
        });
        participant.on("trackPublished", (trackPublication) => {
            if (trackPublication.track) {
                displayTrack(trackPublication.track, participant)
            }
        });
    }
}

function displayTrack(track, participant) {
    if (track.kind === "video") {
        const videoElement = track.attach();
        if (participant === room.localParticipant) {
            localVideoRef.value.appendChild(videoElement);
        } else {
            remoteVideoRef.value.appendChild(videoElement);
        }
    }
}

function handleDisconnectedParticipant(participant) {
    participant.removeAllListeners();
    const participantDiv = document.getElementById(participant.identity);
    if (participantDiv) {
        participantDiv.remove();
    }
}

onMounted(() => {
    const initializeRoom = async () => {
        storedContacts.value = JSON.parse(localStorage.getItem('contacts')) || [];
        if (storedContacts.value.length > roomName) {
            relation.value = storedContacts.value[roomName].relation;
            name.value = storedContacts.value[roomName].name;
        }
        const token = await fetchAccessToken(roomName);
        await connectToRoom(token);
    };
    initializeRoom();
});

onUnmounted(() => {
    if (room) {
        room.disconnect();
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
