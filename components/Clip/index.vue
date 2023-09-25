<template>
  <div class="md:columns-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <iframe v-for="item in videos" :key="item.id" :src="'https://www.youtube.com/embed/'+item.vidID" class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl border-2 border-solid border-gray-400" width="480" height="360" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
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
</script>