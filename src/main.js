import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from './plugins/elementui.js'


createApp(App)
    .use(ElementUI)
    .use(router)
    .mount('#app')
