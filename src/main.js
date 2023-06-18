import './assets/main.less'
import DropdownMenu from '@innologica/vue-dropdown-menu'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
