<script setup>

import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="mx-auto">
    <!-- contacts container -->
    <div class="grid grid-cols-3">
      <!-- contact one button -->
      <button class="w-[300px] h-[300px] relative">
        <span class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></span>
        <span class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></span>
        <span class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">Ben Sbanotto</span>
        <span class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">Grandson</span>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full border border-lightblue" src="../../assets/profiles/ben.jpg" alt="profile-pic"/>
      </button>
      <div><!--grid spacing--></div>
      <!-- contact two button -->
      <button class="w-[300px] h-[300px] relative">
        <span class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></span>
        <span class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></span>
        <span class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">Baylee Bowen</span>
        <span class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">Daughter</span>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full border border-lightblue" src="../../assets/profiles/baylee.jpg" alt="profile-pic"/>
      </button>
      <div><!--grid spacing--></div>
      <!-- logo -->
      <div>
        <img src="../../assets/logo.svg" class="mx-auto object-scale-down h-40" alt="logo">
      </div>
      <div><!--grid spacing--></div>
      <!-- contact three button -->
      <button class="w-[300px] h-[300px] relative">
        <span class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></span>
        <span class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></span>
        <span class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">Alex Leeper</span>
        <span class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">Nephew</span>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full border border-lightblue" src="../../assets/profiles/alex.jpg" alt="profile-pic"/>
      </button>
      <!-- admin button -->
      <div class="pt-8 flex items-end">
        <a href="Admin.vue" class="mx-auto">
          <img src="../../assets/home/gear.svg" alt="settings">
        </a>
      </div>
      <!-- contact four button -->
      <div class="w-[300px] h-[300px] relative">
      </div>
    </div>
  </div>
</template>
