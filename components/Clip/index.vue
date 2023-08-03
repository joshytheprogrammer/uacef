<template>
  <div class="md:columns-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <iframe v-for="item in videos" :key="item.id" :src="'https://www.youtube.com/embed/'+item.vidID" class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl border-2 border-solid border-gray-400" width="480" height="360" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        videos: [
          {
            id: (Math.floor(Math.random() * 10) + Math.random()),
            vidID: 'vjFO0Y-jWDs'
          },
          {
            id: (Math.floor(Math.random() * 10) + Math.random()),
            vidID: 'ubJlMMGw2Wo'
          },
        ]
      }
    }
  }
</script>