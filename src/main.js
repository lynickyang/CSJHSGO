
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/all.scss'
import * as bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'

const pinia =createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
