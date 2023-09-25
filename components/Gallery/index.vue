<template>
  <div class="md:columns-2 lg:columns-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <figure class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl inline-block border-2 border-solid border-gray-400 hover:border-purple-900" v-for="item in images" :key="item.id">
      <img class="rounded-xl w-full" :src="item.link" :alt="'img - '+item.id">
    </figure>
  </div>
</template>

<script setup>
import { getDocs, collection, where, query } from 'firebase/firestore';

const nuxtApp = useNuxtApp();
const db = nuxtApp.$firestore;
const images = ref([]); // Define images as a reactive ref array
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const q = query(collection(db, 'gallery'), where("active", "==", true))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // Push each document data into the images array
      images.value.push({
        id: doc.id,
        link: doc.data().imgLink,
        alt: 'UACEF_img_' + doc.data().id
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