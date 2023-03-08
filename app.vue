<template>
  <div class="app">
    <AppNavStrip />
    <AppNavBar v-show="!isMobile" />
    <AppNavMBar v-show="isMobile" />
    <NuxtLayout>
      <NuxtPage class="mt-24 md:mt-0" />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

const device = useMobileStore()

// Call the checkWidth ACTION
device.checkWidth();

let isMobile = ref(device.getDevice);
</script>