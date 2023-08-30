import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import PostList from './pages/PostList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            components: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            components: ProjectList
        },
    ]
});

export { router }