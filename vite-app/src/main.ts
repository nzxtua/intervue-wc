import { createApp } from 'vue'
import App from './App.vue'

import { i18n } from './i18n/i18nInit'

import './style.css'
import './tilewind.css'

createApp(App).use(i18n).mount('#app')
