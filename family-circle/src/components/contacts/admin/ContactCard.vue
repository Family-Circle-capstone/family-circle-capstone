<template>
    <div class="admin-contact-card">
        <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
            <!-- contact buttons -->
          <div class="">
            <!-- edit button -->
            <button type="button" class="absolute top-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
              <EditContactButton/>
            </button>
            <!-- delete button -->
            <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
              <DeleteContactButton/>
            </button>
          </div>
            <!-- contact one info -->
            <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" :src="contact.img_src" alt="profile-pic"/>
            <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">{{ contact.name }}</div>
            <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">{{ contact.relation }}</div>
        </div>
        </div>
    </template>

    <script>
    import DeleteContactButton from "../../buttons/admin/DeleteContact.vue";
    import EditContactButton from "../../buttons/admin/EditContact.vue";

    export default {
      components: {EditContactButton, DeleteContactButton},
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
    