<script setup>

import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="mx-auto">
    <div class="grid grid-cols-3">
      <div class="w-[300px] h-[300px] relative">
        <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></div>
        <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></div>
        <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">Ben Sbanotto</div>
        <div class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">Grandson</div>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="../../assets/profiles/ben.jpg" alt="profile-pic"/>
      </div>
      <div><!--grid spacing--></div>
      <div class="w-[300px] h-[300px] relative">
        <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></div>
        <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></div>
        <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">Baylee Bowen</div>
        <div class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">Daughter</div>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="../../assets/profiles/baylee.jpg" alt="profile-pic"/>
      </div>
      <div><!--grid spacing--></div>
      <div>
        <img src="../../assets/logo.svg" class="mx-auto object-scale-down h-40" alt="logo">
      </div>
      <div><!--grid spacing--></div>
      <div class="w-[300px] h-[300px] relative">
        <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></div>
        <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></div>
        <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">Alex Leeper</div>
        <div class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">Nephew</div>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="../../assets/profiles/alex.jpg" alt="profile-pic"/>
      </div>
      <div class="pt-8 flex items-end">
        <a href="/family-circle/src/components/pages/Admin.vue" class="mx-auto">
          <img src="../../assets/home/gear.svg" alt="settings">
        </a>
      </div>
      <div class="w-[300px] h-[300px] relative">
      </div>
    </div>
  </div>
</template>
