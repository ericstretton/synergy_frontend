<template>
    <div>
        <NavBanner/>
        <CompanyDisplay/>
        <div class="text-center">
            <v-bottom-sheet
            v-model="companyEdit"
            persistent
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="green"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Edit Company
                </v-btn>
            </template>
            <v-sheet
                class="text-center"
                height="70vh"
            >
                <v-btn
                class="mt-6"
                text
                color="error"
                @click="companyEdit = !companyEdit"
                >
                Exit
                </v-btn>
                <div class="py-3">
                This is a bottom sheet using the persistent prop
                </div>
            </v-sheet>
            </v-bottom-sheet>
        </div>
        <UserInfo/>
        <div class="text-center">
            <v-bottom-sheet
            v-model="userEdit"
            persistent
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="green"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Edit User
                </v-btn>
            </template>
            <v-sheet
                class="text-center"
                height="70vh"
            >
                <v-btn
                class="mt-6"
                text
                color="error"
                @click="userEdit = !userEdit"
                >
                Exit
                </v-btn>
                <div class="py-3">
                This is a bottom sheet using the persistent prop
                </div>
            </v-sheet>
            </v-bottom-sheet>
        </div>
        <PageFooter/>
    </div>
</template>

<script>
import CompanyDisplay from '../components/company/CompanyDisplay.vue'
import NavBanner from '../components/NavBanner.vue'
import PageFooter from '../components/PageFooter.vue'
import UserInfo from '../components/user/UserInfo.vue'



    export default {
        name: "UserView",
        components: {
            PageFooter,
            UserInfo,
            CompanyDisplay,
            NavBanner
        },
        data: () => ({
            companyEdit: false,
            userEdit: false,

        }),
        
    }
</script>

<style lang="scss" scoped>

</style>