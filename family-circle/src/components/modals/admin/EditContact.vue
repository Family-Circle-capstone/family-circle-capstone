<script setup>
import EditContactButton from "../../buttons/admin/EditContact.vue";
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isModalOpen = ref(false)
const modal = ref(null)

onClickOutside(modal, () => (isModalOpen.value = false));
</script>

<template>
  <button @click="isModalOpen = true" type="button" class="absolute top-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
    <EditContactButton/>
  </button>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="isModalOpen">
      <div class="modal text-black">
        <button @click="isModalOpen = false" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-darkgrey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="p-4 text-3xl text-center text-darkblue font-['Roboto-Serif']">Edit Contact</div>
        <form class="p-2">
          <div class="w-[150px] h-[150px] mx-auto rounded-[50px]">
            <button class="w-[150px] h-[150px] bg-white rounded-[75px] border-4 border-lightblue" @click="handleCircleClick" ref="circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3949ab" class="mx-auto h-20 w-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
            </button>
          </div>
          <div class="pt-4 md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4 font-san">
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border rounded w-full py-2 px-8 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text">
          </div>
          <!-- <div class="md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Last Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text">
          </div> -->
          <div class="md:w-1/3">
            <label class="block text-darkblue font-san md:text-right mb-1 md:mb-0 pr-4">
              Relation
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="relation" type="text">
          </div>
          <div class="md:w-1/3">
            <label class="block text-darkblue font-san md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="text">
          </div>
          <div class="p-6 flex items-center justify-between">
            <button class="mx-auto bg-lightblue hover:bg-darkblue text-white font-bold font-san py-2 px-4 rounded" type="submit">
              Save Changes
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