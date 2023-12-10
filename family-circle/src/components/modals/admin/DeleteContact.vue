<script setup>
import DeleteContactButton from "../../buttons/admin/DeleteContact.vue";
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isModalOpen = ref(false)
const modal = ref(null)
let storedContacts = ref([]);
let name = ref('');


onClickOutside(modal, () => (isModalOpen.value = false));
</script>

<template>
  <button @click="isModalOpen = true" type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
    <DeleteContactButton/>
  </button>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="isModalOpen">
      <div class="modal text-black">
        <button @click="isModalOpen = false" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-darkgrey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="p-2 text-3xl text-center text-darkblue font-['Arial']">Delete Contact</div>
        <div>
          <p>Are you sure you want to delete </p>
          <p class="text-darkblue">{{ contact }}</p>
          <p>?</p>
        </div>
        <div class="p-6 flex items-center justify-between">
          <button class="mx-auto bg-lightred hover:bg-darkred text-white font-bold font-['Arial'] py-2 px-4 rounded" type="submit">
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