<script setup>
  import ContactCard from '../contacts/home/ContactCard.vue';
  import EnterPinModal from "../modals/home/EnterPin.vue";
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

      // Split the input into first and last names
      const [inputFirstName, inputLastName] = contactNameInput.split(' ');

      // Find the contact in the contacts array with priority to full name, then first name, then last name
      const contactIndex = contacts.findIndex((c) => {
        const lowercasedFullName = c.name.toLowerCase();
        const [contactFirstName, contactLastName] = c.name.split(' ').map(name => name.toLowerCase());

        console.group(`Testing contact: ${c.name}`);
        console.log(`Input vs. Full name: ${contactNameInput} vs. ${lowercasedFullName}:`, lowercasedFullName === contactNameInput);
        console.log(`Input first name vs. Contact first name: ${inputFirstName} vs. ${contactFirstName}:`, contactFirstName.includes(inputFirstName));
        console.log(`Input last name vs. Contact last name: ${inputLastName} vs. ${contactLastName}:`, contactLastName.includes(inputLastName));
        console.groupEnd();

        return (
          lowercasedFullName === contactNameInput ||
          contactFirstName.includes(inputFirstName) ||
          contactLastName.includes(inputLastName)
        );
      });

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

  // Computed property to determine the component type and additional properties
  const getComponentInfo = (contact) => {
    if (contact.name) {
      return { type: ContactCard };
    } else {
      return { type: 'empty', width: '300px', height: '300px' };
    }
  };
</script>

<template>
  <div class="mx-auto">
    <!-- contacts container -->
    <div class="grid grid-cols-3 place-items-center max-h-screen">
      <!-- contact one button -->
      <component :is="getComponentInfo(contacts[0]).type" :index="0" :style="getComponentInfo(contacts[0])" />
      <div><!--grid spacing--></div>
      <!-- contact two button -->
      <component :is="getComponentInfo(contacts[1]).type" :index="1" :style="getComponentInfo(contacts[1])" />
      <div><!--grid spacing--></div>
      <!-- logo -->
      <div>
        <img src="../../assets/logo.svg" class="mx-auto object-scale-down h-40" alt="logo">
      </div>
      <div><!--grid spacing--></div>
      <!-- contact three button -->
      <component :is="getComponentInfo(contacts[2]).type" :index="2" :style="getComponentInfo(contacts[2])" />
      <!-- admin button -->
      <div class="pt-8 flex items-end justify-center">
        <EnterPinModal/>
      </div>
      <!-- contact four button -->
      <component :is="getComponentInfo(contacts[3]).type" :index="3" :style="getComponentInfo(contacts[3])" />
    </div>
  </div>
</template>