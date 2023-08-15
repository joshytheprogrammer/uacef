<template>
  <div class="flex justify-center items-center mx-auto mt-8 bg-red-700 w-fit px-8 py-4">
    <div class="text-white text-center">
      <p>{{ errorMessage }}</p>
      <a @click="refresh" class="text-blue-500 cursor-pointer mt-2">Refresh</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  errorMessage: String,
});

const refresh = () => {
  location.reload(); // Refresh the page
};
</script>
