<script>
import DeleteContactModal from "../../modals/admin/DeleteContact.vue";
import EditContactModal from "../../modals/admin/EditContact.vue";

export default {
  components: {EditContactModal, DeleteContactModal},
  props: ['index'],
  data() {
    return {
      contact: {}
    }
  },
  created() {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    this.contact = contacts[this.index];
  }
}
</script>

<template>
  <div class="admin-contact-card">
    <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
      <!-- contact buttons -->
      <div class="">
        <!-- edit button -->
        <EditContactModal/>
        <!-- delete button -->
        <DeleteContactModal/>
      </div>
      <!-- contact one info -->
      <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" :src="contact.img_src" alt="profile-pic"/>
      <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">{{ contact.name }}</div>
      <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">{{ contact.relation }}</div>
    </div>
  </div>
</template>
