<script setup>
  import ContactCard from '../contacts/home/ContactCard.vue';
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // Use a ref to store the recognized command
  const voiceCommand = ref('');

  // Listen for the custom voiceCommand event
  onMounted(() => {
    document.addEventListener('voiceCommand', handleVoiceCommand);
  });

  let contacts = JSON.parse(localStorage.getItem('contacts'));

  const handleVoiceCommand = (event) => {
    voiceCommand.value = event.detail;
    
    console.log('Heard command:', voiceCommand.value);

    // Check if the command starts with "circle call"
    if (voiceCommand.value.startsWith('circle call')) {
      // Extract the contact name from the command
      const contactNameInput = voiceCommand.value.replace('circle call', '').trim().toLowerCase();

      console.log('Contact name input:', contactNameInput);

      // Find the contact in the contacts array by checking both first and full names
      const contactIndex = contacts.findIndex(
        c => c.name.toLowerCase().includes(contactNameInput)
      );

      // If the contact is found, log the index and navigate to the video call route
      if (contactIndex !== -1) {
        console.log('Contact found at index:', contactIndex);
        router.push(`/video-call/${contactIndex}`);
      } else {
        console.log('Contact not found.');
      }
    } else {
      console.log('Invalid command format.');
    }
  };
</script>

<template>
  <div class="mx-auto">
    <!-- contacts container -->
    <div class="grid grid-cols-3 place-items-center max-h-screen">
      <!-- contact one button -->
      <contact-card :index="0"/>
      <div><!--grid spacing--></div>
      <!-- contact two button -->
      <contact-card :index="1"/>

      <div><!--grid spacing--></div>
      <!-- logo -->
      <div>
        <img src="../../assets/logo.svg" class="mx-auto object-scale-down h-40" alt="logo">
      </div>
      <div><!--grid spacing--></div>
      <!-- contact three button -->
      <contact-card :index="2"/>

      <!-- admin button -->
      <div class="pt-8 flex items-end justify-center">
          <router-link to="/admin">
            <img src="../../assets/home/gear.svg" alt="settings">
          </router-link>
      </div>
      <!-- contact four button -->
      <div class="w-[300px] h-[300px] relative">
      </div>
    </div>
  </div>
</template>
