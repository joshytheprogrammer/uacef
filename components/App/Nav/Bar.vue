<template>
  <div class="w-full bg-white px-8 md:px-12 lg:px-28 py-4 text-neutral-800 flex items-center justify-between">
    <div class="w-fit" >
      <NuxtLink class="flex items-center" to="/">
        <img class="w-24 pr-4" src="~/assets/img/uacef-logo.png" alt="UACEF Logo">
        <span class="text-4xl text-purple-900 font-bold">UACEF</span>
      </NuxtLink>
    </div>
    <div class="text-base">
      <NuxtLink class="pl-8 no-underline hover:underline hover:decoration-4 decoration-purple-900 underline-offset-[16px] font-medium hover:text-purple-900 hover:ease hover:duration-100 hover:delay-75" to="/">Home</NuxtLink>
      <NuxtLink class="pl-8 no-underline hover:underline hover:decoration-4 decoration-purple-900 underline-offset-[16px] font-medium hover:text-purple-900 hover:ease hover:duration-100 hover:delay-75" to="/about">About</NuxtLink>
      <NuxtLink class="pl-8 no-underline hover:underline hover:decoration-4 decoration-purple-900 underline-offset-[16px] font-medium hover:text-purple-900 hover:ease hover:duration-100 hover:delay-75" to="/causes">Causes</NuxtLink>
      <NuxtLink class="pl-8 no-underline hover:underline hover:decoration-4 decoration-purple-900 underline-offset-[16px] font-medium hover:text-purple-900 hover:ease hover:duration-100 hover:delay-75" to="/gallery">Gallery</NuxtLink>
      <NuxtLink class="pl-8 no-underline hover:underline hover:decoration-4 decoration-purple-900 underline-offset-[16px] font-medium hover:text-purple-900 hover:ease hover:duration-100 hover:delay-75" to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply text-purple-900 underline;
}
</style>