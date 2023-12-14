<template>
<router-link :to="`/video-call/${index}`" class="contact-card">
    <div class="w-[300px] h-[300px] relative">
        <span class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-darkblue"></span>
        <span class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-lightblue"></span>
        <span class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-lightblue text-[40px] font-normal font-['Arial']">{{ contact.name }}</span>
        <span class="pt-2 w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-darkblue text-3xl font-extralight font-['Arial']">{{ contact.relation }}</span>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full border border-lightblue" :src="contact.img_src" alt="profile-pic"/>
    </div>
</router-link>
</template>

<script>
export default {
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
