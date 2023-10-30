import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'

import './index.scss'


const app = createApp(App)

app.use(createMetaManager())


app.mount('#app')
