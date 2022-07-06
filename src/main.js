import { createApp } from 'vue'
import App from './App.vue'

import createRouter from '@/router/index.js'
import { createWebHistory } from 'vue-router' // from 官网

import '@/assets/style/reset.css'

const app = createApp(App)
app.use(createRouter(createWebHistory()))
app.mount('#app')

// app.component()
// app.directive()
