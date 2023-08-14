<template>
  <div class="flex justify-center items-center text-purple-900">
    <div class="lds-ring animate-spin">
      <div class="origin-center transform scale-75 border-purple-900 animate-pulse"></div>
      <div class="origin-center transform scale-75 border-purple-900 animate-pulse"></div>
      <div class="origin-center transform scale-75 border-purple-900 animate-pulse"></div>
      <div class="origin-center transform scale-75 border-purple-900 animate-pulse"></div>
    </div>
  </div>
</template>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid transparent;
  border-radius: 50%;
  border-color: currentColor transparent transparent transparent;
}
</style>
