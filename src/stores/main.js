import {defineStore} from 'pinia';
import axios from 'axios';
import cookies from 'vue-cookies';
import router from '../router'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            userInfo: {},
            userObjectInfo: {},
            companyObjectInfo: {},
            projectObjectInfo: {},
            taskObjectInfo: {}
        }
    },

    actions :{
// Log in Action

        userLogin(email, password){
            axios.request({
                headers:{
                    'Content-Type' : 'application/json'
                },
                url: process.env.VUE_APP_API_URL + "user_session",
                method: 'POST',
                data: {
                    email,
                    password
                },
            }).then((response) => {
                let token = response.data[1];
                let cookie = token;
                cookies.set('sessionToken', cookie);
                this.userInfo = response.data;
                router.push('/Project')

            }).catch((error) => {
                console.log(error.response.data);
                document.getElementById('loginError').style.display = 'block';
            })
        },


        // View User Information
        viewUserInfo(){
            axios.request({
                headers:{
                    'token' : this.userInfo.sessionToken,
                    'Content-Type' : 'application/json'
                },
                url: process.env.VUE_APP_API_URL+ "user",
                method: 'GET',
                params: {
                    'user_id' : this.userInfo.id
                }
                
            }).then((response) => {
                console.log(response);
                this.userObjectInfo = response.data
            }).catch((error) => {
                console.log(error);
            })
        },
        // View Company Information
        viewCompanyInfo(){
            axios.request({
                headers:{
                    'Content-Type' : 'application/json',
                    'token' : this.userInfo.sessionToken
                },
                url: process.env.VUE_APP_API_URL+ "company",
                method: 'GET',

            }).then((response) => {
                console.log(response);
                this.companyObjectInfo = response.data[0]
            }).catch((error) => {
                console.log(error);
            })
        },
        // View Project Information
        viewProjectInfo() {
            axios.request({
                headers: {
                    'Content-Type' : 'application/json',
                    'token' : this.userInfo.sessionToken
                },
                url: process.env.VUE_APP_API_URL+ "project",
                method: 'GET',

            }).then((response) => {
                console.log(response);
                this.projectObjectInfo = response.data[0]
            }).catch((error) => {
                console.log(error);
            })
        },


        // View Task Information
        viewTaskInfo() {
            axios.request({
                headers: {
                    'Content-Type' : 'application/json',
                    'token' : this.userInfo.sessionToken
                },
                url: process.env.VUE_APP_API_URL+ "task",
                method: "GET"
            }).then((response) => {
                console.log(response)
                this.taskObjectInfo = response.data
            }).catch((error) => {
                console.log(error);
            })
        }

    },

    getters :{

    }

})