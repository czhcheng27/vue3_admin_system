import { createApp } from 'vue'
import App from './App.vue'

console.log('environment => ', import.meta.env);

createApp(App).mount('#app')
