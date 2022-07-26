<template>
    
    <v-container>
        
        <v-container>
            <v-subheader>
                <h1>User Information</h1>
            </v-subheader>
            <h3>User Id: {{userObjectInfo.userId}}</h3>
            <h3>Title: {{userObjectInfo.title}}</h3>
            <h3>Authorization: {{userObjectInfo.authorization}}</h3>
            <h3>Email: {{userObjectInfo.email}}</h3>
            <h3>First Name: {{userObjectInfo.firstName}}</h3>
            <h3>Last Name: {{userObjectInfo.lastName}}</h3>
            <div>
                <h3>Profile Picture:</h3>
                <v-img width="25%" :src="userObjectInfo.pictureURL"></v-img>
            </div>
            <h3>Start Date: {{userObjectInfo.employee_start_date}}</h3>
        </v-container>
        
    </v-container>
</template>

<script>

import {useMainStore} from '@/stores/main.js'
import {mapState} from 'pinia';
import {mapActions} from 'pinia';

    export default {
        name: 'UserInfo',

        data: ()=> ({
            user: this.userObjectInfo,
            userInfo: {},
            
        }),
        beforeMount() {
            this.viewUserInfo();
        },
        computed: {
            ...mapState(useMainStore, ['userObjectInfo', "userInfo"])
        },
        methods: {
            ...mapActions(useMainStore, ['viewUserInfo'])
        }
    }
</script>

<style lang="scss" scoped>



</style>