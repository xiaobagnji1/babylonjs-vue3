<template>
 <div class="menu-demo">
    <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
        />
      </a-menu-item>
      <a-menu-item  v-for="item in routerlink" :key="item.id">
        <router-link :to="item.link">{{item.name}}</router-link>
      </a-menu-item>
       <a-menu-item @click="router.push('/')">返回</a-menu-item>
    </a-menu>
  </div>
  <router-view />
</template>

<script setup>
import {  useRouter } from "vue-router"

const routerlink=reactive([{id:1,name:'line',link:'line'},{id:2,name:'pie',link:'pie'},{id:3,name:'bar',link:'bar'},{id:4,name:'sunburst',link:'sunburst'}])
const router=useRouter()


</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
