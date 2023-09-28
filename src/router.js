import { createRouter, createWebHistory } from 'vue-router';
import MainComponent from './components/MainComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';

const routes = [
    { path: '/', component: MainComponent },
    { path: '/projects', component: ProjectsComponent },
    // Aggiungi altre rotte qui, se necessario
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
