<script>
import AddContact from "../../buttons/admin/AddContact.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {AddContact}
})
</script>

<template>
    <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- button container -->
        <div class="w-[95px] h-[98px] left-[26px] top-[30px] absolute">
          <!-- add button -->
          <button type="button" class="absolute inset-y-4 left-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center me-2">
            <AddContact/>
          </button>
        </div>
        <!-- add text -->
        <div class="w-[169px] h-[41px] left-[133px] top-[55px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Add Contact</div>
      </div>
</template>
