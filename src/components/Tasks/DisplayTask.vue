<template>
    <v-container>
        <v-subheader>
            <h1>Your Current Tasks</h1>
        </v-subheader>
                
        <v-card
        class="mx-auto my-8"
        width="33%"
        v-for="object in taskObjectInfo" 
        :key="object.task_id +object.user_id">
        
            <v-card-title
            >{{object.name}} </v-card-title>
            
            <v-card-title
            >{{object.id}} </v-card-title>

            <v-card-subtitle 
            class="pb-0">
            {{object.status_id}}
            </v-card-subtitle>

            <v-card-subtitle 
            class="pb-0">
            {{object.project_id}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div><p
            >{{object.description}}
            </p></div>
            </v-card-text>
            
        </v-card>
    </v-container>
</template>

<script>

import {useMainStore} from '@/stores/main.js'
import {mapState} from 'pinia';
import {mapActions} from 'pinia';

export default {
    name: "DisplayTask",
    data: () => ({
        task: this.taskObjectInfo,
        userInfo: {}
    }),
    beforeMount() {
        this.viewTaskInfo();
    },
    computed: {
        ...mapState(useMainStore, ['taskObjectInfo', 'userInfo'])
    },
    methods: {
        ...mapActions(useMainStore, ['viewTaskInfo'])
    }
}
</script>

<style lang="scss" scoped>

</style>