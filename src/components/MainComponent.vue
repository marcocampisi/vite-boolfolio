<script>
import ProjectsComponent from './ProjectsComponent.vue';

export default {
    name: 'MainComponent',
    components: { ProjectsComponent }
};
</script>

<template>
    <AppHeader />
    <div>
        <h1>MainComponent</h1>
        <router-view>
            <ProjectsComponent />
        </router-view>
    </div>
</template>

<style scoped></style>