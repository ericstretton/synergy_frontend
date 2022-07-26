<template>
    <v-container>
        <h1>{{projectObjectInfo.name}}</h1>
        <h2>description: {{projectObjectInfo.description}}</h2>
        <h2>Completion ETA: {{projectObjectInfo.estimated_completion_date}}</h2>
        <h2>Project Id: {{projectObjectInfo.project_id}}</h2>
        <h2>Project Manager: {{projectObjectInfo.project_manager}}</h2>
        <h2>Start Date: {{projectObjectInfo.start_date}}</h2>
        <h2>Status : {{projectObjectInfo.status}}</h2>

    </v-container>
</template>

<script>

import {useMainStore} from '@/stores/main.js'
import {mapState} from 'pinia';
import {mapActions} from 'pinia';

    export default {
        name: "ProjectDisplay",
        data: ()=> ({
            project: this.projectObjectInfo[0],
            userInfo: {},

        }),
        beforeMount() { 
            this.viewProjectInfo();
        },
        computed: {
            ...mapState(useMainStore, ['projectObjectInfo', 'userInfo'])
        },
        methods: {
            ...mapActions(useMainStore, ['viewProjectInfo'])
        }
    }
</script>

<style lang="scss" scoped>

</style>