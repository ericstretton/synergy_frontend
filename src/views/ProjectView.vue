<template>
    <div>
        <NavBanner/>
        <ProjectDisplay/>
        <PageFooter/>

    </div>
</template>

<script>
import NavBanner from '../components/NavBanner.vue'
import PageFooter from '../components/PageFooter.vue'
import ProjectDisplay from '../components/projects/ProjectDisplay.vue'

    export default {
        name: 'ProjectView',
        components: { 
            ProjectDisplay,
            PageFooter,
                NavBanner 
            },
        

    }
</script>

<style lang="scss" scoped>

</style>