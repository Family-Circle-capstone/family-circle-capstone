<script setup>
import ContactCard from '../contacts/home/ContactCard.vue';
import EnterPinModal from "../modals/home/EnterPin.vue";

let contacts = JSON.parse(localStorage.getItem('contacts'));

// Computed property to determine the component type and additional properties
const getComponentInfo = (contact) => {
  if (contact.name) {
    return { type: ContactCard };
  } else {
    return { type: 'empty', width: '300px', height: '300px' }; // Set the desired width and height
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
      <div class="w-[300px] h-[300px] relative">
        <component :is="getComponentInfo(contacts[3]).type" :index="3" :style="getComponentInfo(contacts[3])" />
      </div>
    </div>
  </div>
</template>
