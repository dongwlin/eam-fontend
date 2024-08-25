import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
