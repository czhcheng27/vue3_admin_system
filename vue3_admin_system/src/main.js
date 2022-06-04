import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import config from './config';


console.log('environment => ', import.meta.env);

const app = createApp(App);

axios.get(config.mockApi + '/login').then((res) => {
    console.log('res', res);
})

app.use(router).use(ElementPlus).mount('#app')
