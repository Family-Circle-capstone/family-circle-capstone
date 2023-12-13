<script setup>
import { reactive, provide } from 'vue';

let contacts = [
  { name: 'Ben Sbanotto', relation: 'grandson', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/ben.jpg', import.meta.url).href},
  {},
  { name: 'Alex Leeper', relation: 'nephew', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/alex.jpg', import.meta.url).href},
  {}
]

// Ensure that contacts array always has four elements
contacts = contacts.concat(Array(4 - contacts.length).fill({}));

// Make the contacts array reactive and provide it for injection in child components
const reactiveContacts = reactive(contacts);
provide('contacts', reactiveContacts);

localStorage.setItem('contacts', JSON.stringify(contacts));
localStorage.setItem('pin', '1234');
</script>

<template>
  <router-view>
  </router-view>
</template>

<!-- let contacts = [
{ name: 'Ben Sbanotto', relation: 'grandson', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/ben.jpg', import.meta.url).href},
{},
{ name: 'Alex Leeper', relation: 'nephew', email: 'alixvox@gmail.com', img_src: new URL('./assets/profiles/alex.jpg', import.meta.url).href},
{}
] -->