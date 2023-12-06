<script setup>
import Home from './components/pages/Home.vue'
import Admin from './components/pages/Admin.vue'

let contacts = [
  { name: 'Ben Sbanotto', relation: 'nephew', img_src: './'},
  { name: 'Baylee Bowen', relation: 'daughter', img_src: './'},
  { name: 'Alex Leeper', relation: 'grandson', img_src: './'}
]

localStorage.setItem('contacts', JSON.stringify(contacts));

let storedContacts = JSON.parse(localStorage.getItem('contacts'));
console.log(storedContacts);
</script>

<template>
  <router-view>
  </router-view>
  <!-- <Home /> -->
</template>

