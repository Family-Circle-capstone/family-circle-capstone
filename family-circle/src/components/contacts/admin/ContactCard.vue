<script setup>
import { ref, onMounted, watch } from "vue";
import DeleteContactModal from "../../modals/admin/DeleteContact.vue";
import EditContactModal from "../../modals/admin/EditContact.vue";

const props = defineProps(['index', 'contact']);
const contact = ref(props.contact);

// Watch for changes in the contact prop and update the local ref
watch(() => props.contact, (newContact) => {
  contact.value = newContact;
});

// Fetch the contact data when the component is mounted
onMounted(fetchContact);

function fetchContact() {
  console.log(contact.value); // This should reflect the changes in the contact prop
}
</script>


<template>
  <div class="admin-contact-card">
    <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
      <!-- contact buttons -->
      <div class="">
        <!-- edit button -->
        <EditContactModal :index="index" :contact="contact"/>
        <!-- delete button -->
        <DeleteContactModal :contact="contact" />
      </div>
      <!-- contact one info -->
      <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" :src="contact.img_src" alt="profile-pic"/>
      <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Roboto-Serif']">{{ contact.name }}</div>
      <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-sans">{{ contact.relation }}</div>
    </div>
  </div>
</template>