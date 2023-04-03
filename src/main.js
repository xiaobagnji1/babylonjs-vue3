import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import pages from 'virtual:generated-pages'
import App from './App.vue'
import './assets'

import { createPinia } from 'pinia'
import  utils  from '~/util/index.js'



const app = createApp(App)
app.config.warnHandler = () => null
app.use(
  createRouter({
    history: createWebHashHistory(),
    routes: setupLayouts(pages),
  })
)



app.config.globalProperties.$utils = utils
app.use(createPinia())

app.mount(`#app`)

