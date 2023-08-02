<template>
  <div class="w-full bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16 flex flex-col md:flex-row items-start justify-between">
    <div class="max-w-md">
      <NuxtLink class="flex items-center pb-4" to="/">
        <img class="w-20 pr-4" src="~/assets/img/uacef-logo.png" alt="UACEF Logo">
        <span class="text-3xl text-purple-900 font-bold">UACEF</span>
      </NuxtLink>
      <p class="py-8 text-sm leading-7 lg:pb-12 md:w-full">
        After several changes, the forum finally settled for 26th - 28th December as the date for the annual city wide crusade. Several seasoned ministers have mounted the podium to speak on our lives and the land which have given rise to thousands of souls being worn yearly into the kingdom. Speakers like Rev. Prof Moses Madugba(International president, Ministers prayer network), Rev Dr. Charles Osueke(former GS Assemblies of God international), Bishop E.O.Ikeakor(Bishop Amichi Diocese Anglican communion), Witness Ken Paul Obieke, Rev Dr Emma Ifeadike, Evangelist Chinedu Nwejinaka etc
      </p>
      <p class="py-1 text-sm leading-7">
        This website was designed and built by <a class="hover:underline hover:text-purple-900 font-medium" href="https://joshytheprogrammer.com">joshytheprogrammer</a>
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
    <div class="flex flex-col justify-between sm:px-4">
      <h3 class="text-3xl font-semibold pb-4 text-purple-900">Useful Links</h3>
      <ul class="py-8">
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/">Home</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/about">About us</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/causes">Causes</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/gallery">Gallery</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/clips">Our Videos</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-purple-900 font-medium" to="/contact">Contact</NuxtLink>
        </li>
        <li class="pb-8">
          <a href="https://admin.uacef.org/" class="hover:underline hover:text-purple-900 font-medium" >Admin</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between">
      <h3 class="text-3xl font-semibold pb-4 text-purple-900">Contact us</h3>
      <ul class="py-8">
        <li class="pb-8 ">
          <Icon class="pr-1 text-purple-900" name="material-symbols:phone-in-talk" size="1.25em" />
          <span class="pr-4 w-80 block">+234 803 051 2882 || +234 803 349 4892 || +234 803 313 6009 || +234 803 407 0589 || +234 803 713 1181</span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-purple-900"  name="material-symbols:mail-rounded" size="1.25em" />
          <span class="pr-4">united.acef@gmail.com</span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-purple-900"  name="material-symbols:location-on" size="1.25em" />
          <span class="pr-4 w-80 block">Akokwa Unity Centre, No 10 Uga - Orlu Road, Akokwa, Ideato North LGA, Imo State</span>
        </li>
      </ul>
    </div>
  </div>
</template>
