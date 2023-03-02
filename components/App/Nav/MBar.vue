<template>
  <div class="w-full px-4 sm:px-8 md:px-12 lg:px-28 py-4 text-black flex flex-col items-center justify-between">
    <div class="w-full items-center flex justify-between">
      <div class="w-fit" >
        <NuxtLink class="flex items-center" to="/#">
          <img class="w-20 pr-4" src="~/assets/img/uacef-logo.png" alt="UACEF Logo">
          <span class="text-xl text-violet-900 font-semibold">UACEF</span>
        </NuxtLink>
      </div>
      <div v-if="!isOpen" @click="toggleMenu" class="menu">
        <Icon name="material-symbols:segment-rounded" size="2.25em" />
      </div>
      <div v-else @click="toggleMenu" class="menu">
        <Icon name="material-symbols:close" size="2.25em" />
      </div>
    </div>
    <div v-if="isOpen" class="text-base flex flex-col items-center justify-between">
      <NuxtLink class="py-4 no-underline hover:underline hover:decoration-4 decoration-violet-900 underline-offset-[16px] font-medium hover:text-violet-900 hover:ease hover:duration-100 hover:delay-75" to="/#">Home</NuxtLink>
      <NuxtLink class="py-4 no-underline hover:underline hover:decoration-4 decoration-violet-900 underline-offset-[16px] font-medium hover:text-violet-900 hover:ease hover:duration-100 hover:delay-75" to="/#">About</NuxtLink>
      <NuxtLink class="py-4 no-underline hover:underline hover:decoration-4 decoration-violet-900 underline-offset-[16px] font-medium hover:text-violet-900 hover:ease hover:duration-100 hover:delay-75" to="/#">Causes</NuxtLink>
      <NuxtLink class="py-4 no-underline hover:underline hover:decoration-4 decoration-violet-900 underline-offset-[16px] font-medium hover:text-violet-900 hover:ease hover:duration-100 hover:delay-75" to="/#">Gallery</NuxtLink>
      <NuxtLink class="py-4 no-underline hover:underline hover:decoration-4 decoration-violet-900 underline-offset-[16px] font-medium hover:text-violet-900 hover:ease hover:duration-100 hover:delay-75" to="/#">Contact</NuxtLink>
    </div>
  </div>
</template>

<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>