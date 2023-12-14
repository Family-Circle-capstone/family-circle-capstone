<script setup>
import { ref, watchEffect, inject } from 'vue';
import SaveButton from '../buttons/admin/Save.vue'
import CancelButton from '../buttons/admin/Cancel.vue'
import ContactCard from "../contacts/admin/ContactCard.vue";
import AddContactCard from "../contacts/admin/AddContactCard.vue";
import UpdatePinModal from "../modals/admin/UpdatePin.vue";

// Inject the contacts array from the parent component
const contacts = inject('contacts');

const getComponentType = (contact) => contact.name ? ContactCard : AddContactCard;

// Key to force re-render
let key = ref(0);

// Update key to force re-render
const updateKey = () => {
  key.value++;
};
</script>

<template>
  <!-- page container -->
  <div class="mx-auto">
    <!-- logo -->
    <div>
      <img src="../../assets/admin/logo.svg" alt="logo" class="mx-auto pb-8 w-[252.50px] h-[123px]">
    </div>
    <!-- grid container -->
    <div class="grid grid-cols-2 gap-8 pb-8">
      <component v-for="(contact, index) in contacts" :is="getComponentType(contact)" :key="index" :index="index" :contact="contact" @deleted="updateKey" @added="updateKey" @edited="updateKey" />
    </div>
    <!-- admin buttons container -->
    <div class="grid grid-rows-3 gap-4 pt-8">
      <div class="space-x-10">
        <!-- save button -->
        <button type="submit">
          <SaveButton/>
        </button>
        <!-- update pin button -->
        <UpdatePinModal/>
        <!-- cancel button -->
        <button type="reset">
          <CancelButton/>
        </button>
      </div>
    </div>
  </div>
</template>