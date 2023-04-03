<template>
  <div>
    <label>{{ fpsInfo }}</label>
    <BabylonScene @fps="fpsReceived" />
  </div>
</template>

<script setup>
// import BabylonScene from './components/BabylonScene.vue'
const fpsInfo = ref(null)

const fpsReceived = fps => {
  fpsInfo.value = fps
}
</script>

<style>
body {
  padding: 10px;
}

label {
  display: block;
}
</style>
