<script>
import AppHeader from './components/AppHeader.vue';
import MainComponent from './components/MainComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
    components: {
        AppHeader,
        MainComponent,
        ProjectsComponent
    },
    props: {
        router: Object,
    },
};
</script>

<template>
    <div id="app">
        <AppHeader :router="router"></AppHeader>
        <router-view>
            
        </router-view>
    </div>
</template>

<style scoped></style>