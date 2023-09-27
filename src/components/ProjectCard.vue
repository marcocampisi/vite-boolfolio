<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    }
}
</script>


<template >
    <div class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>{{ project.date }}</p>
    </div>
</template>

<style scoped>
.project-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}
</style>