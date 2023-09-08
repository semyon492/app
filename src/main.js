import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/images/mostRecent.png'
import './assets/images/pp.jpg'
import './assets/images/friends.png'

// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

createApp(App).use(router).mount('#app')
