import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from './plugins/elementui.js'


createApp(App)
    .use(ElementUI)
    .mount('#app')
