import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../views/Welcome.vue'
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
                component: () => import('../views/Welcome.vue'),
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
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            title: 'Login'
        },
        component: () => import('../views/Login.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router