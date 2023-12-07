<script setup>
  import AdminContactCard from '../AdminContactCard.vue';
  import AddContactCard from '../AddContactCard.vue';
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
      <!-- contact one -->
      <admin-contact-card :index="0"/>
      <!-- contact two  -->
      <admin-contact-card :index="1"/>
      <!-- contact three -->
      <admin-contact-card :index="2"/>
      <!-- contact four -->
      <add-contact-card/>
    </div>
    <!-- admin buttons container -->
    <div class="grid grid-rows-3 gap-4 pt-8">
      <div class="space-x-10">
        <!-- save button -->
        <button type="button" class="text-white bg-darkgreen hover:bg-lightgreen rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
          <img class="pr-3 object-fill h-10 w-10" src="../../assets/admin/save.svg" alt="save" />
          <span class="font-bold font-['Arial']">Save Changes</span>
        </button>
        <!-- update pin button -->
        <button type="button" class="text-white bg-darkblue hover:bg-lightblue rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
          <img class="pr-3 object-fill h-10 w-10" src="../../assets/admin/key.svg" alt="pin" />
          <span class="font-bold font-['Arial']">Update PIN</span>
        </button>
        <!-- cancel button -->
        <router-link :to="`/`" class="text-white bg-darkgrey hover:bg-lightgrey rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
          <img class="pr-3 object-fill h-10 w-10" src="../../assets/admin/cancel.svg" alt="cancel" />
          <span class="font-bold font-['Arial']">Cancel Changes</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
