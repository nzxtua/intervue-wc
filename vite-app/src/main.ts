import { createApp } from 'vue'
import App from './App.vue'

import { i18nInit } from './i18n/i18nInit'

import './style.css'
import './tailwind.css'

// Register web components for local usage in the app.
import { registerWebComponents } from './web-components'
registerWebComponents()

createApp(App).use(i18nInit()).mount('#app')
