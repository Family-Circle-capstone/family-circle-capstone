<script setup>
import EditContactButton from '../buttons/admin/EditContact.vue'
import DeleteContactButton from '../buttons/admin/DeleteContact.vue'
import AddContactButton from '../buttons/admin/AddContact.vue'
import SaveButton from '../buttons/admin/Save.vue'
import ChangePinButton from '../buttons/admin/UpdatePin.vue'
import CancelButton from '../buttons/admin/Cancel.vue'
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
            <EditContactButton/>
          </button>
          <!-- delete button -->
          <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <DeleteContactButton/>
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
            <EditContactButton/>
          </button>
          <!-- delete button -->
          <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <DeleteContactButton/>
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
            <EditContactButton/>
          </button>
          <!-- delete button -->
          <button type="button" class="absolute bottom-6 right-2 text-white bg-lightblue hover:bg-darkblue font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
            <DeleteContactButton/>
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
            <AddContactButton/>
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
        <button type="submit">
          <SaveButton/>
        </button>
        <!-- update pin button -->
        <button type="button">
          <ChangePinButton/>
        </button>
        <!-- cancel button -->
        <button type="button">
          <CancelButton/>
        </button>
      </div>
    </div>
  </div>
</template>
