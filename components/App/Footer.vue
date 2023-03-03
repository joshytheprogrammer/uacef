<template>
  <div class="w-full bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-32 flex flex-col lg:flex-row items-start justify-between">
    <div class="max-w-md">
      <NuxtLink class="flex items-center pb-4" to="/#">
        <img class="w-16 pr-4" src="~/assets/img/uacef-logo.png" alt="UACEF Logo">
        <span class="text-5xl text-purple-900 font-bold">UACEF</span>
      </NuxtLink>
      <p class="py-8 leading-7 lg:pb-12 md:w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae culpa unde minima inventore repellat exercitationem eos impedit omnis quibusdam voluptate cum ullam, cumque, libero a deserunt odio saepe, adipisci ut ipsam? Quas autem ipsam illo ratione. Facilis dignissimos hic labore, impedit ea similique, magni, saepe natus distinctio voluptatibus exercitationem at? Iste porro hic quos voluptatibus error delectus praesentium officia?
      </p>
      <ul class="flex w-full pb-8">
        <li class="pr-4">
          <Icon name="cib:facebook" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:instagram" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:twitter" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:pinterest" size="1.25em" />
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between">
      <h3 class="text-3xl font-semibold pb-4 text-purple-900">Useful Links</h3>
      <ul class="py-8">
        <li class="pb-4">
          <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
        </li>
        <li class="pb-4">
          <NuxtLink class="hover:underline" to="/">About us</NuxtLink>
        </li>
        <li class="pb-4">
          <NuxtLink class="hover:underline" to="/">Causes</NuxtLink>
        </li>
        <li class="pb-4">
          <NuxtLink class="hover:underline" to="/">Gallery</NuxtLink>
        </li>
        <li class="pb-4">
          <NuxtLink class="hover:underline" to="/">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="">
      <h3>Contact Info</h3>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>