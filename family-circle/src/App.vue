<script setup>
  let contacts = [
    { name: 'Ben Sbanotto', relation: 'grandson', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/ben.jpg', import.meta.url).href},
    { name: 'Baylee Bowen', relation: 'daughter', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/baylee.jpg', import.meta.url).href},
    { name: 'Alex Leeper', relation: 'nephew', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/alex.jpg', import.meta.url).href}
  ]

  localStorage.setItem('contacts', JSON.stringify(contacts));
  localStorage.setItem('pin', '1234');
</script>

<template>
  <router-view>
  </router-view>
</template>
