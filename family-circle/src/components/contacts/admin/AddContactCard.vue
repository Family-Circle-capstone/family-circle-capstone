<script>
import AddContactModal from "../../modals/admin/AddContact.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {AddContactModal}
})
</script>

<template>
    <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- button container -->
        <div class="w-[95px] h-[98px] left-[26px] top-[30px] absolute">
          <!-- add button -->
          <AddContactModal/>
        </div>
        <!-- add text -->
        <div class="w-[169px] h-[41px] left-[133px] top-[55px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Add Contact</div>
      </div>
</template>
