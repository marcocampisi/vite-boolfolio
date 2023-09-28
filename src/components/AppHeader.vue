<script>
import { useRouter } from 'vue-router';

export default {
    name: 'AppHeader',

    setup() {
        const router = useRouter();

        return {
            router
        };
    }
};
</script>

<template>
    <header>
        <nav class="w-full flex justify-center py-4">
            <ul class="flex justify-center">
                <router-link to="/" class="mx-4 font-bold cursor-pointer">Home</router-link>
                <router-link to="/projects" class="mx-4 font-bold cursor-pointer">Progetti</router-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>
