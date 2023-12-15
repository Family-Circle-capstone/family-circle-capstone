<template>
  <router-link to="/" class="end-call-button">
    <div class="mx-auto" @click="$emit('endCall')">
      <div class="flex justify-center w-[200px] h-[150px] bg-lightred border border-black">
        <img class="object-fill w-[70px]" src="../../../assets/video_call/phone.svg" alt="end call button">
      </div>
    </div>
  </router-link>
</template>
