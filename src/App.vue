<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        }
    },
    created() {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
                this.projects = response.data.projects;
                console.log(this.projects)
            })
            .catch(error => {
                console.error('Errore nella chiamata Axios:', error)
            })
    }
}
</script>

<template>
    <div>
        <h1>Lista dei Progetti</h1>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <p>{{ project.date }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
