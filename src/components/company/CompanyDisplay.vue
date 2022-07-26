<template>
    <v-container>
        
        <v-container>
            <v-subheader>
                <h1>Company Information</h1>
            </v-subheader>
            <h3>Company Id: {{companyObjectInfo.companyId}}</h3>
            <h3>Name: {{companyObjectInfo.name}}</h3>
            <h3>Address: {{companyObjectInfo.address}}</h3>
            <h3>Email: {{companyObjectInfo.email}}</h3>
            <h3>Owner: {{companyObjectInfo.org_owner}}</h3>
            <h3>Project Id: {{companyObjectInfo.project_id}}</h3>
            <h3>Phone Number: {{companyObjectInfo.phoneNum}}</h3>
            <div>
                <h3>Company Picture:</h3>
                <v-img width="25%" :src="companyObjectInfo.pictureURL"></v-img>
            </div>
            
        </v-container>
        
    </v-container>
</template>

<script>

import {useMainStore} from '@/stores/main.js'
import {mapState} from 'pinia';
import {mapActions} from 'pinia';

    export default {
        name: 'CompanyDisplay',
        data: () => ({
            company: this.companyObjectInfo[0],
            userInfo: {}
        }),
        beforeMount() {
            this.viewCompanyInfo();
        },
        computed: {
            ...mapState(useMainStore, ['companyObjectInfo', 'userInfo'])
        },
        methods: {
            ...mapActions(useMainStore, ['viewCompanyInfo'])
        }
    }
</script>

<style lang="scss" scoped>

</style>