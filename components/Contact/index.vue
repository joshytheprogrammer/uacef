<template>
  <div class="lg:flex flex-col md:flex-row justify-between items-center w-full h-fit bg-no-repeat lg:bg-fixed text-neutral-800 px-4 sm:px-8 md:px-12 py-16 lg:px-28 lg:py-24">
    <div class="lg:w-1/2">
      <h2 class="text-2xl pb-4">Get in touch with us</h2>
      <p class="text-slate-500 text-sm pb-4 leading-7 ">We’d love to hear from you and answer any questions you might have. Your feedback is very important to us. Please leave us a message with all your inquiries, observations, suggestions, or complaints.</p>
      <ul class="flex w-full pb-8 text-purple-900">
        <li class="pr-4">
          <Icon name="cib:facebook" />
        </li>
        <li class="pr-4">
          <Icon name="cib:instagram" />
        </li>
        <li class="pr-4">
          <Icon name="cib:twitter" />
        </li>
        <li class="pr-4">
          <Icon name="cib:pinterest" />
        </li>
      </ul>
      <ul class="py-8">
        <li class="pb-8 ">
          <Icon class="pr-1 text-purple-900" name="material-symbols:phone-in-talk" size="1.25em" />
          <span class="pr-4">+234 803 051 2882 </span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-purple-900"  name="material-symbols:mail-rounded" size="1.25em" />
          <span class="pr-4">united.acef@gmail.com</span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-purple-900"  name="material-symbols:location-on" size="1.25em" />
          <span class="pr-4 inline-block">Akokwa Unity Centre, No 10 Uga - Orlu Road, Akokwa, Ideato North LGA, Imo State</span>
        </li>
      </ul>
    </div>
    <div class="bg-purple-300 lg:w-1/2 h-full md:p-4">
      <form class="w-full p-4">
        <div class="form-group pb-4">
          <input class=" w-full h-10 p-2 outline-0" type="text" placeholder="Name">
        </div>
        <div class="form-group pb-4">
          <input class=" w-full h-10 p-2 outline-0" type="text" placeholder="Email">
        </div>
        <div class="form-group pb-4">
          <textarea class=" w-full h-56 p-2 outline-0 " placeholder="Messages"></textarea>
        </div>
        <button type="submit" class="bg-purple-900 text-white px-12 py-4 rounded-full">Submit</button>
      </form>
    </div>
  </div>
</template>