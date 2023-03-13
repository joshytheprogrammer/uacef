<template>
  <div class=" px-4 sm:px-8 md:px-12 lg:px-28 pb-24">
    <div class="w-full md:flex flex-wrap justify-between">
      <div class="rounded-t-2xl bg-white transition-all hover:shadow-md w-full mb-6 sm:w-fit md:w-[49%] lg:w-[32.7%]" v-for="item in data" :key="item.id">
        <img class="w-full rounded-t-2xl object-fill" :src="item.imgLink" :alt="item.name">
        <div class="p-6">
          <h3 class="text-xl font-semibold"> {{ item.name }} </h3>
          <p class="text-slate-500 mt-6 text-sm leading-7"> {{ item.desc }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>