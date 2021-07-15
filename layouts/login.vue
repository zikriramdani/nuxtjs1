<template>
    <div class="height-100">
        <v-app >
            <v-main>
                <nuxt/> 
            </v-main>
        </v-app>
    </div>
</template>

<script>
    export default {
        middleware: 'unauthenticated'
    };
</script>