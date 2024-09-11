import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './locales'
// import i18n from './locales'

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')

