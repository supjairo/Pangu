import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import 'ss.common.css/index.css'
import 'animate.css';
import Parallax from 'parallax-js'
import {install} from '@icon-park/vue-next/es/all';

const app = createApp(App)
install(app)
app.use(createPinia())
app.config.globalProperties.$Parallax = Parallax
app.use(router)


app.mount('#app')

