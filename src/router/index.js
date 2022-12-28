import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: 'Login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/account/Login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;