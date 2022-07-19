import {defineStore} from 'pinia';
import axios from 'axios';
import cookies from 'vue-cookies';
import router from '../router'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            userInfo: undefined,

        }
    },

    actions :{
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
                let token = response.data.sessionToken;
                let userId = response.data.userId;
                let cookie = [token, userId];
                cookies.set('session', cookie)
                this.$state.commit('userInfo', response.data[0]);
                router.push('/Dashboard')

            }).catch((error) => {
                console.log(error.response.data);
                document.getElementById('loginError').style.display = 'block';
            })
        }
    },

    getters :{

    }

})