import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Style
import './assets/scss/main.scss'

// Use Vuex
import store from './store'

// Calendar
import 'v-calendar/dist/style.css'

const app = createApp(App)

import VCalendar from 'v-calendar'
app.use(VCalendar, {})

app.use(router)
app.use(store)

app.mount('#app')
