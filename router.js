import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './src/App.vue';
import ProjectCard from './src/components/ProjectCard.vue';

const routes = [
    { path: '/', component: App},
    { path: '/project/:id', component: ProjectDetails}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;