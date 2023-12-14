<script setup>
import { ref, watchEffect } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useRouter } from 'vue-router';

const isModalOpen = ref(false)
const modal = ref(null)
const enteredPin = ref('')
const router = useRouter()

onClickOutside(modal, () => (isModalOpen.value = false));

let correctPin = ref(localStorage.getItem('pin'))
watchEffect(() => {
  correctPin.value = localStorage.getItem('pin')
});

const checkPinAndNavigate = () => {
  if (enteredPin.value === correctPin.value) {
    console.log('Navigating to /admin');
    router.push('/admin');
  } else {
    alert('Incorrect PIN');
  }
};

</script>

<template>
  <button @click="isModalOpen = true">
    <img src="../../../assets/home/gear.svg" alt="settings">
  </button>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="isModalOpen">
      <div class="modal text-black">
        <button @click="isModalOpen = false" class="p-2 close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#969696" class="w-6 h-6 fill-darkgrey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="p-4 text-3xl text-center text-darkblue font-['Roboto-Serif']">Administrator PIN</div>
        <form class="p-2">
          <!-- Bind the enteredPin ref to the input field -->
          <input v-model="enteredPin" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="pin" type="password" pattern="[0-9]{4}" maxlength="4">
          <div class="pt-8 flex items-center justify-between">
            <button @click="checkPinAndNavigate" class="mx-auto bg-lightblue hover:bg-darkblue text-white font-bold font-san py-2 px-4 rounded" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>
