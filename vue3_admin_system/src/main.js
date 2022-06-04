import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import config from './config';
import request from './utils/request';


console.log('environment => ', import.meta.env);

const app = createApp(App);

// axios.get(config.mockApi + '/login').then((res) => {
//     console.log('res', res);
// })

app.config.globalProperties.$request = request
console.log('app', app);

app.use(router).use(ElementPlus).mount('#app')
