<template>
    <div>
        <NavBanner/>
        <DisplayTask/>
        <PageFooter/>
    </div>
</template>

<script>
import NavBanner from '../components/NavBanner.vue'
import PageFooter from '../components/PageFooter.vue'
import DisplayTask from '../components/Tasks/DisplayTask.vue'

    export default {
        name: "TaskView",
        components: { NavBanner, PageFooter, DisplayTask },
        
    }
</script>

<style lang="scss" scoped>

</style>