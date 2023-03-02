<template>
  <div class="app">
    <AppNavStrip />
    <AppNavMBar v-if="isMobile" />
    <AppNavBar v-else />
    <NuxtLayout>
      <NuxtPage class="mt-24" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

const device = useMobileStore()

// Call the checkWidth ACTION
device.checkWidth();

let isMobile = ref(device.getDevice);
</script>