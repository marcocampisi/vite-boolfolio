<script>
import AppHeader from './components/AppHeader.vue';
import MainComponent from './components/MainComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
    components: {
    AppHeader,
    MainComponent,
    ProjectsComponent
}
};
</script>

<template>
    <div>
        <AppHeader></AppHeader>
        <MainComponent></MainComponent>
    </div>
</template>

<style scoped></style>