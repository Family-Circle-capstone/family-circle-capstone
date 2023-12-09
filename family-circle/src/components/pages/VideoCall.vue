<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import EndCallButton from '../buttons/video_call/EndCall.vue';
import VolumePanel from '../buttons/video_call/VolumePanel.vue';
// import LocalCamera from '../cameras/LocalCamera.vue';
// import RemoteCamera from '../cameras/RemoteCamera.vue';

let storedContacts = ref([]);
let relation = ref('');
let name = ref('');

onMounted(() => {
    let route = useRoute();
    storedContacts.value = JSON.parse(localStorage.getItem('contacts')) || [];
    let contactIndex = route.params.contactIndex;
    if (storedContacts.value.length > contactIndex) {
        relation.value = storedContacts.value[contactIndex].relation;
        name.value = storedContacts.value[contactIndex].name;
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
        <div class="row-start-1 row-end-2 col-start-3 col-end-4 bg-lightgrey">
            <h1>Local</h1>
        </div>
        <!-- Remote User's Camera -->
        <div class="row-start-2 row-end-4 col-start-1 col-end-3 bg-darkgrey">
            <h1>Remote</h1>
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
