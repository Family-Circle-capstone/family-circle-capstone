<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="mx-auto">
    <div>
      <img src="../../assets/admin/logo.svg" alt="logo" class="mx-auto pb-8 w-[252.50px] h-[123px]">
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="w-[368px] h-[157px] relative">
        <img class="w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-indigo-800" src="https://via.placeholder.com/95x98" alt="profile-pic"/>
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] absolute text-blue-950 text-[25px] font-normal font-['Roboto Serif']">Ben Sbanotto</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] absolute text-indigo-800 text-xl font-normal font-['Inter']">grandson</div>
        <div class="w-[34px] h-[34px] left-[313px] top-[30px] absolute"></div>
        <div class="w-[30px] h-[34.29px] left-[315px] top-[94px] absolute"></div>
      </div>
      <div class="w-[368px] h-[157px] relative">
        <img class="w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-indigo-800" src="https://via.placeholder.com/95x98" alt="profile-pic" />
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] absolute text-blue-950 text-[25px] font-normal font-['Roboto Serif']">Baylee Bowen</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] absolute text-indigo-800 text-xl font-normal font-['Inter']">daughter</div>
        <div class="w-[34px] h-[34px] left-[313px] top-[30px] absolute"></div>
        <div class="w-[30px] h-[34.29px] left-[315px] top-[94px] absolute"></div>
      </div>
      <div class="w-[368px] h-[157px] relative">
        <img class="w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-indigo-800" src="https://via.placeholder.com/95x98" alt="profile-pic" />
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] absolute text-blue-950 text-[25px] font-normal font-['Roboto Serif']">Alex Leeper</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] absolute text-indigo-800 text-xl font-normal font-['Inter']">nephew</div>
        <div class="w-[34px] h-[34px] left-[313px] top-[30px] absolute"></div>
        <div class="w-[30px] h-[34.29px] left-[315px] top-[94px] absolute"></div>
      </div>
      <div class="w-[300px] h-[300px] relative">
      </div>
    </div>
  </div>
</template>
