<template>
  <div class="columns-4 columns-{24.5%} gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24">
    <figure v-for="item in images" :key="item.id">
      <img :src="item.link" :alt="item.alt" loading="lazy">
    </figure>
  </div>
</template>

<script setup>
let images = ref([])
images = [
  {
    id: 0,
    alt: 'img-1',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662190088/masterpiece/MODO7364_hn0pra.jpg'
  },
  {
    id: 1,
    alt: 'img-2',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662457782/masterpiece/MODO7289_zxypmq.jpg'
  },
  {
    id: 2,
    alt: 'img-3',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662543202/masterpiece/MODO7289_qqhhe6_1f1e80.jpg'
  },
  {
    id: 3,
    alt: 'img-4',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662987910/masterpiece/bg-img-3_wigjxc.jpg'
  },
  {
    id: 4,
    alt: 'img-5',
    link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1662995051/masterpiece/MODO6257_envthv.jpg'
  },
]
</script>