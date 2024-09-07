import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupI18n } from './locales'

import App from './App.vue'
import router from './router'
import './index.css'

const i18n = setupI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en'
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')

