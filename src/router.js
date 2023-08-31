import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/archive/:slug',
            name: 'single-project',
            component: SingleProject
        }
    ]
});

export { router }