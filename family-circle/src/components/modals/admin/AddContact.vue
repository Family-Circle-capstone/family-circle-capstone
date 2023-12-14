<script setup>
import AddContactButton from "../../buttons/admin/AddContact.vue";
import { ref, inject } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['added']);

const isModalOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isModalOpen.value = false));

// Inject the contacts array from the parent component
const contacts = inject('contacts');

// Refs for form inputs
const name = ref('');
const relation = ref('');
const email = ref('');
const file = ref(null);

// Create a new contact object
let newContact = {
  name: name.value,
  relation: relation.value,
  email: email.value,
  img_src: '' // Keep the image URL empty for now
};

// Ref for the circle div
const circle = ref(null);

// Handle circle click
const handleCircleClick = () => {
  // Trigger the file input click event
  file.value.click();
};

// Handle file input change
const handleFileChange = () => {
  if (file.value.files[0]) {
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set the canvas dimensions to match the circle
        canvas.width = 150;
        canvas.height = 150;

        // Calculate the dimensions for the image
        let width = img.width;
        let height = img.height;
        if (height > width) {
          height = height * (150 / width);
          width = 150;
        } else {
          width = width * (150 / height);
          height = 150;
        }

        // Calculate the position for the image
        let x = (150 - width) / 2;
        let y = (150 - height) / 2;

        // Draw the image onto the canvas
        ctx.drawImage(img, x, y, width, height);

        // Get a compressed version of the image
        let quality = 0.8;
        let dataUrl = canvas.toDataURL('image/jpeg', quality);

        // Check the size of the dataUrl string
        while (dataUrl.length / 1024 > 1024 && quality > 0) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        // Add the compressed image to the new contact
        newContact.img_src = dataUrl;

        // Set the background image of the circle div
        circle.value.style.backgroundImage = `url(${dataUrl})`;
      };
    };

    reader.readAsDataURL(file.value.files[0]);
  }
};


const handleAdd = () => {
  // Update newContact with the latest values
  newContact.name = name.value;
  newContact.relation = relation.value;
  newContact.email = email.value;

  // Add the new contact to the contacts array at the specific index
  if (props.index !== undefined) {
    contacts[props.index] = newContact;
  }

  // Convert the reactive contacts array to a normal array before storing in localStorage
  const normalContacts = contacts ? JSON.parse(JSON.stringify(contacts)) : [];

  // Update localStorage
  localStorage.setItem('contacts', JSON.stringify(normalContacts));

  isModalOpen.value = false;

  // Emit the 'added' event
  emit('added');
};
</script>

<template>
  <button @click="isModalOpen = true" type="button" class="absolute inset-y-4 left-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center me-2">
    <AddContactButton/>
  </button>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="isModalOpen">
      <div class="modal text-black">
        <button @click="isModalOpen = false" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-darkgrey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="p-2 text-3xl text-center text-darkblue font-['Arial']">Add New Contact</div>
        <form @submit.prevent="handleAdd" class="p-2 ">
          <div class="w-[150px] h-[150px] mx-auto rounded-[50px]" >
            <div class="w-[150px] h-[150px] bg-white rounded-[75px] border-2 border-lightblue" @click="handleCircleClick" ref="circle"></div>
          </div>
          <!-- image stuff -->
          <div class="md:w-2/3">
            <input @change="handleFileChange" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" accept="image/*" ref="file" style="display: none;">
          </div>
          <!-- end image stuff -->
          <div class="md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input v-model="name" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text">
          </div>
          <div class="md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Relation
            </label>
          </div>
          <div class="md:w-2/3">
            <input v-model="relation" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="relation" type="text">
          </div>
          <div class="md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input v-model="email" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text">
          </div>
          <div class="p-6 flex items-center justify-between">
            <button class="mx-auto bg-lightblue hover:bg-darkblue text-white font-bold font-['Arial'] py-2 px-4 rounded" type="submit">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  background: white;
  padding: 50px 100px;
  border-radius: 25px;
}
.modal .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>