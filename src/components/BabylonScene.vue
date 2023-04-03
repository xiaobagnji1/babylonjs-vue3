<template>
  <canvas ref="bjsCanvas" width="800" height="800" />
</template>

<script setup>
import { createScene } from '~/scenes/MyFirstScene'
const bjsCanvas = ref(null)

const emit = defineEmits(['fps'])
onMounted(() => {
  if (bjsCanvas.value) {
    const fpsCallback = fps => {
      emit('fps', fps)
    }
    createScene(bjsCanvas.value, fpsCallback)
  }
})
</script>
