<template>
  <div class="menu">
    <ul>
      <template v-for="item in listMenu" :key="item">
        <li  @click="hrefPage(item.path)"><icon-align-left /><span class="pl-10px">{{ item.name }}</span></li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const listMenu = ref()
listMenu.value = [
  {
    name: 'demo1',
    path: '/demo1',
  },
  {
    name: 'demo2',
    path: '/demo2',
  },
   {
    name: 'demo3',
    path: '/demo3',
  },
    {
    name: 'test',
    path: '/test',
  },
]
const router = useRouter()
function hrefPage(path) {
  router.push({
    path: path,
  })

}



</script>
<style scoped>
.menu ul {
  @apply m-20px;
}
.menu ul li {
  @apply mt-10px cursor-pointer;
}
</style>
