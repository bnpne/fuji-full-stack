import {createApp} from 'vue'

// Styles
import './styles/globals.scss'

// App Entry Point
import app from './App.vue'

// Router
import router from '@/config/Router'

// Create App
const a = createApp(app)

// Use Router and Mount
a.use(router)
a.mount('#app')
