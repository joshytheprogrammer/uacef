<template>
  <div class="md:columns-2 lg:columns-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <figure class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl inline-block border-2 border-solid border-gray-400 hover:border-purple-900" v-for="item in images" :key="item.id">
      <img class="grayscale hover:grayscale-0 rounded-xl " :src="item.link" :alt="item.alt">
    </figure>
  </div>
</template>

<script setup>
let images = ref([])
images = [
  {
    id: 0,
    alt: 'img-1',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-15_pxcryi.jpg'
  },
  {
    id: 1,
    alt: 'img-2',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-09_r4qh5c.jpg'
  },
  {
    id: 3,
    alt: 'img-4',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-58_hhp75h.jpg'
  },
  {
    id: 4,
    alt: 'img-5',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-46_dyaens.jpg'
  },
  {
    id: 5,
    alt: 'img-6',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-53_gwik4r.jpg'
  },
  {
    id: 6,
    alt: 'img-7',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-43_gpwjcm.jpg'
  },
  {
    id: 7,
    alt: 'img-8',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832845/uacef/photo_2023-03-03_09-36-39_mvp7xl.jpg'
  },
  {
    id: 8,
    alt: 'img-9',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832845/uacef/photo_2023-03-03_09-36-27_yf1dph.jpg'
  },
]
</script>