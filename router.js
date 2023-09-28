import VueRouter from 'vue-router';
import MainComponent from './src/components/MainComponent.vue';
import ProjectsComponent from './src/components/ProjectsComponent.vue';

const routes = [
    { path: '/', component: MainComponent},
    { path: '/projects', component: ProjectsComponent},
    { path: '/project/:id', component: ProjectDetails}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;