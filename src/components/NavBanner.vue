<template>
    <v-banner
        id="appBanner"
        color="secondary"
        outlined
        rounded
        single-line
        sticky
        >
        <v-btn
        elevation="2"
        raised
        text
        tile
        >DashBoard</v-btn>

        <v-btn
        elevation="2"
        raised
        text
        tile
        >Projects</v-btn>

        <v-btn
        elevation="2"
        raised
        text
        tile
        >Tasks</v-btn>

        <v-avatar color="indigo">
            <v-icon dark>
                mdi-account-circle
            </v-icon>
            
        </v-avatar>
        
    </v-banner>
</template>

<script>
    export default {
        name: "NavBanner",

    }
</script>

<style lang="scss" scoped>

</style>