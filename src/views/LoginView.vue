<template>
    <div id="userLogin">
        <div id="slogan">
            <h2>
                Project Collaboration Made Easy
            </h2>
        </div>
        <h1 id="appTitle">
            Synergy
        </h1>
        <div id="formCont">
            <v-form id="loginForm" v-model="formValidity">

                <v-text-field
                    v-model="email"
                    label="Email"
                    required
                >

                </v-text-field>

                <v-text-field
                    v-model="password"
                    :append-icon="showText ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showText ? 'text' : 'password'"
                    label="Password"
                    @click:append="showText = !showText"
                    @keydown.enter="handleUserLogin"
                    required>
                </v-text-field>

                <div id="loginError">
                    <h2>Invalid Credentials Submitted. Please Try again</h2>
                </div>

                <v-btn id="loginButton"
                
                :disabled="!formValid"
                color="primary"
                @click="handleUserLogin">
                    Log-in
                </v-btn>

            </v-form>
        </div>
        <div id="footer">
            <PageFooter/>
        </div>
    </div>

</template>

<script>
import {useMainStore} from '@/stores/main'
import {mapActions} from 'pinia'
import cookies from 'vue-cookies'
import router from '../router'
import PageFooter from '../components/PageFooter.vue'

    export default {
        name: "LoginView",
        components: {
            PageFooter
                
        },
        computed: {
            sessionCookie() {
                return cookies.get('session')
            }
        },

        beforeMount() {
            if (this.sessionCookie != undefined) {
                if (this.sessionCookie.token != undefined) {
                    router.push('/Dashboard')
                }
            }
        },
        data:() =>({
             
                email: '',
                // TODO: Add email rules
                password: '',
                // TODO: Add password rules

                formValidity: false,
                showText: false
            

        }),
        methods: {
            
            ...mapActions(useMainStore, ['userLogin']),
            handleUserLogin(){
                this.userLogin(this.email, this.password)
            }

            },
            hiddenMessage() {
                document.getElementById('loginError').style.display = "none";
            },

            EnterButtonSubmits() {
                this.userLogin(this.email, this.password);
            }
        }
    
</script>

<style lang="scss" scoped>

    #userLogin {
        width: 100%;
        height: 100 vh;
        display: grid;
        grid-template-rows: 15vh 10vh 30vh 30vh 15vh;
        align-items: center;
        justify-items: center;
        background-color: beige;
        overflow: hidden;
    

    #appTitle {
        color: rgb(48, 40, 158);
        font-size: 3em;
        z-index: 2;
    }

    #slogan {
        display: grid;
        justify-items: center;
        z-index: 2;

        h2 {
            color : rgb(48, 40, 158)
        }
    }

    #formCont {
        grid-row: 3;
        width : 85%;
        height: 55%;
        min-height: 250px;
        padding: 4vh 4vh 4vh 4vh;
        border-radius: 35px;
        background-color: bisque;
        align-self: start;

        #loginForm{
            width: 100%;
            height: 100%;
            display: grid;

            #loginButton {
                justify-self: center;
                padding: 0 10vw 0 10vw;
            }

            #loginError {
                display: none;
            }
        } 
        #loginError {
            h2{
                color: red;
            }
        }
    }

    #footer{
        grid-row: 5;
        position: relative;
        bottom: -2vh
    }
}

</style>