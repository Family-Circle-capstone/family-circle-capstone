<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="mx-auto">
    <div>
      <img src="../../assets/admin/logo.svg" alt="logo" class="mx-auto pb-8 w-[252.50px] h-[123px]">
    </div>
    <div class="grid grid-cols-2 gap-8 pb-8">
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <img class="ml-auto pr-5 h-[34px] top-[35px] relative" src="../../assets/admin/edit.svg" alt="save">
        <img class="ml-auto pr-5 h-[34px] top-[50px] relative" src="../../assets/admin/delete.svg" alt="delete">
        <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" src="../../assets/profiles/ben.jpg" alt="profile-pic"/>
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Ben</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">Grandson</div>
        <div class="w-[34px] h-[34px] left-[313px] top-[30px] absolute"></div>
        <div class="w-[30px] h-[34.29px] left-[315px] top-[94px] absolute"></div>
      </div>
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <img class="ml-auto pr-5 h-[34px] top-[35px] relative" src="../../assets/admin/edit.svg" alt="save">
        <img class="ml-auto pr-5 h-[34px] top-[50px] relative" src="../../assets/admin/delete.svg" alt="delete">
        <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" src="../../assets/profiles/baylee.jpg" alt="profile-pic" />
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Baylee</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">Daughter</div>
        <div class="w-[34px] h-[34px] left-[313px] top-[30px] absolute"></div>
        <div class="w-[30px] h-[34.29px] left-[315px] top-[94px] absolute"></div>
      </div>
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <img class="ml-auto pr-5 h-[34px] top-[35px] relative" src="../../assets/admin/edit.svg" alt="save">
        <img class="ml-auto pr-5 h-[34px] top-[50px] relative" src="../../assets/admin/delete.svg" alt="delete">
        <img class="object-cover w-[95px] h-[98px] left-[26px] top-[30px] absolute border border-lightblue" src="../../assets/profiles/alex.jpg" alt="profile-pic" />
        <div class="w-[169px] h-[41px] left-[133px] top-[42px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Alex</div>
        <div class="w-[169px] h-[41px] left-[133px] top-[70px] pt-2 text-left absolute text-lightblue text-xl font-normal font-['Arial']">Nephew</div>
        <div class="w-[34px] h-[34px] left-[313px] top-[30px] absolute"></div>
        <div class="w-[30px] h-[34.29px] left-[315px] top-[94px] absolute"></div>
      </div>
      <div class="w-[368px] h-[157px] relative rounded-lg border border-black">
        <img class="w-[95px] h-[98px] left-[26px] top-[30px] absolute" src="../../assets/admin/add.svg" alt="add-contact" />
        <div class="w-[169px] h-[41px] left-[133px] top-[55px] pt-1 text-left absolute text-darkblue text-[25px] font-normal font-['Arial']">Add Contact</div>
      </div>
    </div>
    <div class="grid grid-rows-3 gap-4 pt-8">
      <div class="space-x-10">
        <button class="w-[210px] h-[51px] bg-darkgreen rounded-lg">
          <img class="object-contain h-15 w-15" src="../../assets/admin/save.svg" alt="save" />
          <span class="w-[120.24px] text-center font-bold font-['Arial']">Save Changes</span>
        </button>
        <button class="w-[210px] h-[51px] bg-lightblue rounded-lg">
          <img class="object-contain h-15 w-15" src="../../assets/admin/key.svg" alt="pin" />
          <span class="w-[120.24px] text-center font-bold font-['Arial']">Update PIN</span>
        </button>
        <button class="w-[210px] h-[51px] bg-darkgrey rounded-lg">
          <img class="object-contain h-15 w-15" src="../../assets/admin/cancel.svg" alt="cancel" />
          <span class="w-[120.24px] text-center font-bold font-['Arial']">Cancel Changes</span>
        </button>
      </div>
    </div>
  </div>
</template>
