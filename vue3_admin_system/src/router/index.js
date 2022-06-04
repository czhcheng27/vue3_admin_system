import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Login from './../components/Login.vue'
import Test from './../components/Test.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: 'Home'
        },
        component: Home,
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: 'Welcome'
                },
                component: Welcome,
            },
            {
                name: 'login',
                path: '/login',
                meta: {
                    title: 'Login'
                },
                component: Login,
            },
            {
                name: 'test',
                path: '/test',
                meta: {
                    title: 'Test'
                },
                component: Test,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router