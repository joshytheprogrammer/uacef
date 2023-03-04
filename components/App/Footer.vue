<template>
  <div class="w-full bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16 flex flex-col lg:flex-row items-start justify-between">
    <div class="max-w-md">
      <NuxtLink class="flex items-center pb-4" to="/#">
        <img class="w-16 pr-4" src="~/assets/img/uacef-logo.png" alt="UACEF Logo">
        <span class="text-5xl text-purple-900 font-bold">UACEF</span>
      </NuxtLink>
      <p class="py-8 text-sm leading-7 lg:pb-12 md:w-full">
        After initial changes of days, the forum finally settled for 26th - 28th December every year. Several seasoned ministers have mounted the podium to speak on our lives and the land which have given rise to thousands of souls been worn yearly into the kingdom. Speakers like Rev. Prof Most Madugba(International president, Ministers prayer network), Rev Dr. Charles Osueke(former GS Assemblies of God international), Bishop E.O.Ikeakor(Bishop Amichi Diocese Anglican communion), Witness Ken Paul Obieke, Rev Dr Emma Ifeadike etc
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
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/">Home</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/about">About us</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/">Causes</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/">Gallery</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between">
      <h3 class="text-3xl font-semibold pb-4 text-purple-900">Contact us</h3>
      <ul class="py-8">
        <li class="pb-8 ">
          <Icon class="pr-1 text-purple-900" name="material-symbols:phone-in-talk" size="1.25em" />
          <span class="pr-4">+234 345 678 901 </span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-purple-900"  name="material-symbols:mail-rounded" size="1.25em" />
          <span class="pr-4">contact@ourcharity.com</span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-purple-900"  name="material-symbols:location-on" size="1.25em" />
          <span class="pr-4">No 45-46, b3, 56832, Los Angeles, CA</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>