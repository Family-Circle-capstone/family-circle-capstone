<script setup>
  let contacts = [
    { name: 'Ben Sbanotto', relation: 'grandson', img_src: new URL('./assets/profiles/ben.jpg', import.meta.url).href},
    { name: 'Baylee Bowen', relation: 'daughter', img_src: new URL('./assets/profiles/baylee.jpg', import.meta.url).href},
    { name: 'Alex Leeper', relation: 'nephew', img_src: new URL('./assets/profiles/alex.jpg', import.meta.url).href}
  ]

  localStorage.setItem('contacts', JSON.stringify(contacts));
</script>

<template>
  <router-view>
  </router-view>
</template>
