<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import EndCallButton from '../EndCallButton.vue';
    import VolumePanel from '../VolumePanel.vue';

    let storedContacts = ref([]);
    let relation = ref('');
    let name = ref('');

    onMounted(() => {
        let route = useRoute(); // Get the current route object
        storedContacts.value = JSON.parse(localStorage.getItem('contacts')) || [];
        let contactIndex = route.params.contactIndex; // Get the contact index from the route parameters
        if (storedContacts.value.length > contactIndex) {
            relation.value = storedContacts.value[contactIndex].relation;
            name.value = storedContacts.value[contactIndex].name;
        }
    });
</script>

<template>
    <div class="grid grid-rows-4 grid-cols-2 gap-4 w-[80rem] h-screen">
        <button class="row-start-1 row-end-3 col-start-0 col-end-1 bg-lightblue">
            <VolumePanel/>
        </button>
        <h1 class="row-start-1 row-end-2 col-start-1 col-end-3 bg-darkblue">
            You are speaking to your {{ relation }}, {{ name }}.
        </h1>
        <div class="row-start-2 row-end-5 col-start-1 col-end-3 bg-darkgrey">
            Video
        </div>
        <button class="row-start-4 row-end-5 col-start-0 col-end-1 bg-darkred">
            <EndCallButton/>
        </button>
    </div>
</template>