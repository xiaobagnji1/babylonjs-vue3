<template>
  <router-view />
</template>

<script setup>


const theme = localStorage.getItem('theme')

if (theme) {
  document.body.setAttribute('arco-theme', theme)
}
// key	167887b5a9ae24b2b91fd1d2b1308071
// const current=getCurrentInstance()
// console.log(current)

// onMounted(()=>{
//   console.log(this);
// })
</script>
