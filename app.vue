<template>
  <div class="app">
    <AppNavStrip />
    <AppNavBar v-show="!isMobile" />
    <AppNavMBar v-show="isMobile" />
    <NuxtLayout>
      <NuxtPage />
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