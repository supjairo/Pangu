import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import 'ss.common.css/index.css'
import 'animate.css';
import Parallax from 'parallax-js'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.config.globalProperties.$Parallax = Parallax
app.use(router)

app.mount('#app')
