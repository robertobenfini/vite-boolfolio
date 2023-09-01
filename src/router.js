import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import ContactUs from './pages/ContactUs.vue';

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
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        },
        {
            path: '/archive/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router }