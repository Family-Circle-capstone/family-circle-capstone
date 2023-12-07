<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isModalOpen = ref(false)
const modal = ref(null)

onClickOutside(modal, () => (isModalOpen.value = false));
</script>


<template>
    <Teleport to="#modal">
        <Transition name="modal">
            <div class="modal-bg" v-if="isModalOpen">
                <div class="modal" ref="modal">
                    <button @click="isModalOpen = false" class="close-btn">x</button>
                    Click outside this modal to close it
                </div>
            </div>
        </Transition>
    </Teleport>
</template>