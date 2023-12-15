<script setup>
import DeleteContactButton from "../../buttons/admin/DeleteContact.vue";
import { ref, inject } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps(['contact']);
const emit = defineEmits(['deleted']);

const isModalOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isModalOpen.value = false));

// Inject the contacts array from the parent component
const contacts = inject('contacts');

const handleDelete = () => {
  if (props.contact && props.contact.name) {
    const index = contacts.findIndex(contact => contact.name === props.contact.name);
    if (index !== -1) {
      contacts[index] = {};
    }
  }

  localStorage.setItem('contacts', JSON.stringify(contacts));

  isModalOpen.value = false;

  // Emit the 'deleted' event
  emit('deleted');
};
</script>

<template>
  <button @click="isModalOpen = true" type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover.bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
    <DeleteContactButton/>
  </button>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="isModalOpen">
      <div class="modal text-black">
        <button @click="isModalOpen = false" class="p-2 close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#969696" class="w-6 h-6 fill-darkgrey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="p-4 text-3xl text-center text-darkblue font-['Roboto-Serif']">Delete Contact</div>
        <div v-if="props.contact && props.contact.name" class="text-center">
          <p>Are you sure you want to delete </p>
          <p><span class="text-darkblue font-bold">{{ props.contact.name }}</span>?</p>
        </div>
        <div class="p-6 flex items-center justify-between">
          <button @click="handleDelete" class="mx-auto bg-lightred hover:bg-darkred text-white font-bold font-sans py-2 px-4 rounded" type="submit">
            Delete
          </button>
        </div>
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
