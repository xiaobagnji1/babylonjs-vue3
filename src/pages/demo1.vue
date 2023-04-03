<template>
  <canvas ref="bjsCanvas" width="800" height="800" />
</template>

<script setup>
import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
} from '@babylonjs/core'
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
  var scene = new Scene(engine)

  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero())

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true)

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7

  // Our built-in 'sphere' shape.
  var sphere = MeshBuilder.CreateSphere(
    'sphere',
    { diameter: 2, segments: 32 },
    scene
  )

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1

  // Our built-in 'ground' shape.
  var ground = MeshBuilder.CreateGround(
    'ground',
    { width: 6, height: 6 },
    scene
  )

  let groundMaterial = new StandardMaterial('Ground Material', scene)
  ground.material = groundMaterial
  ground.material.diffuseColor = Color3.Red()


  engine.runRenderLoop(() => {
    scene.render()
  })
  // return scene
}
</script>
