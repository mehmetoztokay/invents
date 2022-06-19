import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Style
const style = import('./assets/scss/main.scss')

const app = createApp(App)

app.use(router)
app.use(style)

app.mount('#app')
