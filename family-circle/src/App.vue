<script setup>
  let contacts = [
    { name: 'Ben Sbanotto', relation: 'nephew', img_src: './'},
    { name: 'Baylee Bowen', relation: 'daughter', img_src: './'},
    { name: 'Alex Leeper', relation: 'grandson', img_src: './'}
  ]

  localStorage.setItem('contacts', JSON.stringify(contacts));
</script>

<template>
  <router-view>
  </router-view>
</template>
