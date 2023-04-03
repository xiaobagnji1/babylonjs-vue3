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
    -Math.PI / 2,
    Math.PI / 2.5,
    30,
    new Vector3(0, 0, 0)
  )
  camera.attachControl(canvas, true)

  const light = new HemisphericLight('light', new Vector3(1, 1, 0))

  getModel(scene)
  engine.runRenderLoop(() => {
    scene.render()
  })

  // return scene
}

const getModel = async scene => {
  /**
   * @description:
   *@param meshNames — an array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
    @param rootUrl —  文件路径
    @param sceneFilename —文件名称
   * @return {*}
   */
  const result = await SceneLoader.ImportMeshAsync(
    '',
    'https://assets.babylonjs.com/meshes/',
    'both_houses_scene.babylon'
  )

  const house1 = scene.getMeshByName('detached_house')
  house1.position.y = 2
  const house2 = result.meshes[2]
  house2.position.y = 1
}
</script>
