<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
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
      <!-- contact one container -->
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- contact buttons -->
        <div class="">
          <!-- edit button -->
          <button type="button" class="absolute top-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <span class="sr-only">Edit Contact</span>
          </button>
          <!-- delete button -->
          <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <span class="sr-only">Delete Contact</span>
          </button>
        </div>
        <!-- contact one info -->
        <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" src="../../assets/profiles/ben.jpg" alt="profile-pic"/>
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Ben</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">Grandson</div>
      </div>
      <!-- contact two container -->
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- contact buttons -->
        <div class="">
          <!-- edit button -->
          <button type="button" class="absolute top-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <span class="sr-only">Edit Contact</span>
          </button>
          <!-- delete button -->
          <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <span class="sr-only">Delete Contact</span>
          </button>
        </div>
        <!-- contact two info -->
        <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" src="../../assets/profiles/baylee.jpg" alt="profile-pic" />
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Baylee</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">Daughter</div>
      </div>
      <!-- contact three container -->
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- button container -->
        <div class="">
          <!-- edit button -->
          <button type="button" class="absolute top-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <span class="sr-only">Edit Contact</span>
          </button>
          <!-- delete button -->
          <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <span class="sr-only">Delete Contact</span>
          </button>
        </div>
        <!-- contact three info -->
        <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" src="../../assets/profiles/alex.jpg" alt="profile-pic" />
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Alex</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">Nephew</div>
      </div>
      <!-- contact four container -->
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <!-- button container -->
        <div class="w-[95px] h-[98px] left-[26px] top-[30px] absolute">
          <!-- add button -->
          <button type="button" class="absolute inset-y-4 left-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-12 h-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span class="sr-only">Add Contact</span>
          </button>
        </div>
        <!-- add text -->
        <div class="w-[169px] h-[41px] left-[133px] top-[55px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Add Contact</div>
      </div>
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
        <button type="button" class="text-white bg-darkgrey hover:bg-lightgrey rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
          <img class="pr-3 object-fill h-10 w-10" src="../../assets/admin/cancel.svg" alt="cancel" />
          <span class="font-bold font-['Arial']">Cancel Changes</span>
        </button>
      </div>
    </div>
  </div>
</template>
