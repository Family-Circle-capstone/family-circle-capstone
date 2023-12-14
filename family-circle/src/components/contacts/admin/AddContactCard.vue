<script setup>
import {onMounted} from 'vue';
import AddContactModal from "../../modals/admin/AddContact.vue";

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
});

</script>

<template>
    <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- button container -->
        <div class="w-[95px] h-[98px] left-[26px] top-[30px] absolute">
          <!-- add button -->
          <AddContactModal :index="index"/>
        </div>
        <!-- add text -->
        <div class="w-[169px] h-[41px] left-[133px] top-[55px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Roboto-Serif']">Add Contact</div>
      </div>
</template>
