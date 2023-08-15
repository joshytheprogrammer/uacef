<template>
  <section>
    <AppLoader v-if="isLoading" />
    <AppError v-else-if="error" :errorMessage="error" />
    <div v-else class="md:columns-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <iframe v-for="item in videos" :key="item.id" :src="'https://www.youtube.com/embed/'+item.vidID" class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl border-2 border-solid border-gray-400" width="480" height="360" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  </section>
  
</template>

<script setup>
import { getDocs, collection } from 'firebase/firestore';

const nuxtApp = useNuxtApp();
const db = nuxtApp.$firestore;
const videos = ref([]); // Define images as a reactive ref array
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'clip'));
    querySnapshot.forEach((doc) => {
      // Push each document data into the images array
      videos.value.push({
        id: doc.id,
        videoID: doc.data().videoID,
      });
    });
    isLoading.value = false; // Set loading state to false
  } catch (e) {
    isLoading.value = false; // Set loading state to false
    error.value = 'Error fetching data'; // Set the error message
    console.error('Error fetching data:', e);
  }
});

// const videos = [
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'vjFO0Y-jWDs'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'ubJlMMGw2Wo'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: '62-CLiV3Dq0'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: '1Ia0h8ZqRSM'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'GecV9AUzZ1M'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'HXNH6O5e9Xs'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'dXEngk41laA'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'NKjmOHmo7lw'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'qdf7pyvzuWU'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'LZRyRH0vy8Y'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: '9alQqAmPISg'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'o15VBTKyTcs'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'aCzfZ64uyQw'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'o4h2CZgpfy4'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: '5p8eghZJgKo'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'HxvO5W7huMY'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'VBdBW2zF4Js'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'sW5_SbcA6fE'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: '9PRcoTUxVGk'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: '4VOtS4OBQxs'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'ZyAlE4U7CxA'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'dImo86d3RZ4'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'nARkgybU-uQ'
//   },
//   {
//     id: (Math.floor(Math.random() * 10) + Math.random()),
//     vidID: 'LFt7cvZwh88'
//   },
// ];
</script>