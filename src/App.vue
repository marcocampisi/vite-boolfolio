<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: ProjectCard,
    data() {
        return {
            projects: []
        };
    },
    created() {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
            this.projects = response.data.projects;
            console.log(this.projects);
        })
            .catch(error => {
            console.error('Errore nella chiamata Axios:', error);
        });
    },
    components: { ProjectCard }
}
</script>

<template>
    <div>
        <h1>Lista dei Progetti</h1>
        <div v-for="project in projects" :key="project.id">
            <ProjectCard :project="project"></ProjectCard>
        </div>
    </div>
</template>

<style scoped></style>
