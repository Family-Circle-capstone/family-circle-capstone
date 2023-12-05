<script setup>
  import ContactCard from '../ContactCard.vue';
</script>

<template>
  <div class="mx-auto">
    <!-- contacts container -->
    <div class="grid grid-cols-3 place-items-center max-h-screen">
      <!-- contact one button -->
      <contact-card name="Ben Sbanotto" relation="grandson" img_src="../src/assets/profiles/ben.jpg"/>
      <div><!--grid spacing--></div>
      <!-- contact two button -->
      <contact-card class="" name="Baylee Bowen" relation="daughter" img_src="../src/assets/profiles/baylee.jpg"/>

      <div><!--grid spacing--></div>
      <!-- logo -->
      <div>
        <img src="../../assets/logo.svg" class="mx-auto object-scale-down h-40" alt="logo">
      </div>
      <div><!--grid spacing--></div>
      <!-- contact three button -->
      <contact-card name="Alex Leeper" relation="nephew" img_src="../src/assets/profiles/alex.jpg"/>

      <!-- admin button -->
      <div class="pt-8 flex items-end justify-center">
        <!-- <a href="Admin.vue" class="mx-auto"> -->
          <router-link to="/admin">
            <img src="../../assets/home/gear.svg" alt="settings">
          </router-link>
          
        <!-- </a> -->
      </div>
      <!-- contact four button -->
      <div class="w-[300px] h-[300px] relative">
      </div>
    </div>
  </div>
</template>
