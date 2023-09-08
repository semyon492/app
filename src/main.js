import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import i18n from "./plugins/i18n.js";

createApp(App).use(router).use(i18n).mount('#app')
