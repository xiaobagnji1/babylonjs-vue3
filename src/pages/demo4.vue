<template>
  <canvas ref="bjsCanvas" width="800" height="800" />
</template>

<script setup>
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  SceneLoader,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Tools

} from 'babylonjs'
// import { createScene } from '~/scenes/MyFirstScene'
const bjsCanvas = ref(null)

onMounted(() => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value)
  }
})

const createScene = function (canvas) {
  const engine = new Engine(canvas)

  //这将创建一个基本的巴比伦场景对象（非网格）
  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new Scene(engine)

  const camera = new ArcRotateCamera(
    'camera',
    Tools.ToRadians(90),
    Tools.ToRadians(65),
    Vector3.Zero(),
    scene
  )
  camera.attachControl(canvas, true)

  const light = new HemisphericLight('light', new Vector3(1, 1, 0),scene)




    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'ground' shape.

  engine.runRenderLoop(() => {
    scene.render()
  })

  // return scene
}


</script>
