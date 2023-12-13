<script setup>
import SaveButton from '../buttons/admin/Save.vue'
import CancelButton from '../buttons/admin/Cancel.vue'
import ContactCard from "../contacts/admin/ContactCard.vue";
import AddContactCard from "../contacts/admin/AddContactCard.vue";
import UpdatePinModal from "../modals/admin/UpdatePin.vue";
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
      <contact-card :index="0"/>
      <!-- contact two container -->
      <contact-card :index="1"/>
      <!-- contact three container -->
      <contact-card :index="2"/>
      <!-- contact four container -->
      <contact-card :index="3"/>
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
