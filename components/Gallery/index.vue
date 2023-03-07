<template>
  <div class="md:columns-2 lg:columns-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <figure class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl inline-block border-2 border-solid border-gray-400 hover:border-purple-900" v-for="item in images" :key="item.id">
      <img class="rounded-xl " :src="item.link" :alt="item.alt">
    </figure>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          {
            id: 0,
            alt: 'img-1',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-15_pxcryi.jpg'
          },
        ]
      }
    }
  }
</script>