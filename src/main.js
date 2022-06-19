import { createApp } from 'vue'
import App from './App.vue'

// Style
const style = import('./assets/scss/main.scss')

const app = createApp(App)

app.use(style)

app.mount('#app')
