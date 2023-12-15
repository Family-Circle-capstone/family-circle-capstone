<script setup>
import EditContactButton from "../../buttons/admin/EditContact.vue";
import { ref, inject, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  contact: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['edited']);

const isModalOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isModalOpen.value = false));

const contacts = inject('contacts');

const name = ref(props.contact.name);
const relation = ref(props.contact.relation);
const email = ref(props.contact.email);
const img_src = ref(props.contact.img_src);
const file = ref(null);
const circle = ref(null);


const updateCircleBackground = () => {
  circle.value.style.backgroundImage = `url(${img_src.value})`;
};

watch(() => isModalOpen, (newValue) => {
  if (newValue && img_src.value) {
    setTimeout(updateCircleBackground, 0);
  }
});


watch(() => props.contact, (newContact) => {
  name.value = newContact.name;
  relation.value = newContact.relation;
  email.value = newContact.email;
  img_src.value = newContact.img_src;
});

const handleCircleClick = () => {
  file.value.click();
  circle.value.style.backgroundImage = `url(${img_src.value})`;
};

let newContact = ref({
  name: name.value,
  relation: relation.value,
  email: email.value,
  img_src: img_src.value
});

const handleFileChange = () => {
  if (file.value.files[0]) {
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 150;
        canvas.height = 150;

        let width = img.width;
        let height = img.height;
        if (height > width) {
          height = height * (150 / width);
          width = 150;
        } else {
          width = width * (150 / height);
          height = 150;
        }

        let x = (150 - width) / 2;
        let y = (150 - height) / 2;

        ctx.drawImage(img, x, y, width, height);

        let quality = 0.8;
        let dataUrl = canvas.toDataURL('image/jpeg', quality);

        while (dataUrl.length / 1024 > 1024 && quality > 0) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        img_src.value = dataUrl;
        circle.value.style.backgroundImage = `url(${dataUrl})`;
      };
    };

    reader.readAsDataURL(file.value.files[0]);
  }
};

const handleEdit = () => {
  newContact.value.name = name.value;
  newContact.value.relation = relation.value;
  newContact.value.email = email.value;
  newContact.value.img_src = img_src.value;

  if (props.index !== undefined) {
    contacts[props.index] = newContact.value;
  }

  const normalContacts = contacts ? JSON.parse(JSON.stringify(contacts)) : [];

  localStorage.setItem('contacts', JSON.stringify(normalContacts));

  isModalOpen.value = false;

  img_src.value = '';

  emit('edited');
};
</script>



<template>
  <button @click="isModalOpen = true" type="button" class="absolute top-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
    <EditContactButton/>
  </button>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="isModalOpen">
      <div class="modal text-black">
        <button @click="isModalOpen = false" class="p-2 close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#969696" class="w-6 h-6 fill-darkgrey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="p-4 text-3xl text-center text-darkblue font-['Roboto-Serif']">Edit Contact</div>
        <form @submit.prevent="handleEdit" class="p-2 ">
          <div class="w-[150px] h-[150px] mx-auto rounded-[50px]">
            <div class="w-[150px] h-[150px] bg-white rounded-[75px] border-8 border-lightblue hover:border-darkblue" @click="handleCircleClick" ref="circle">
            </div>
          </div>
          <!-- image stuff -->
          <div class="md:w-2/3">
            <input @change="handleFileChange" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" accept="image/*" ref="file" style="display: none;">
          </div>
          <!-- end image stuff -->
          <div class="pt-4 md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input v-model="name" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" maxlength="14">
          </div>
          <div class="md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Relation
            </label>
          </div>
          <div class="md:w-2/3">
            <input v-model="relation" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="relation" type="text" maxlength="14">
          </div>
          <div class="md:w-1/3">
            <label class="block text-darkblue md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input v-model="email" class="bg-white appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text">
          </div>
          <div class="p-6 flex items-center justify-between">
            <button class="mx-auto bg-lightblue hover:bg-darkblue text-white font-bold font-['Arial'] py-2 px-4 rounded" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  background: white;
  padding: 50px 100px;
  border-radius: 25px;
}
.modal .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>