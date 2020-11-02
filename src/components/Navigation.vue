<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="home">Home</router-link> 
                     </li>
                    <li v-if="loggedIn" class="nav-item ml-1">
                       <router-link to="secret">Secret</router-link>
                    </li>
                </ul>
                <div>
                    <router-link v-if="!loggedIn" to="login">Login | </router-link>
                    <span class="logout" @click="signOut" v-if="loggedIn">Logout</span> 
                    <router-link v-if="!loggedIn" to="register">Register</router-link>  
                 </div>
            </div>
        </nav>
    </div>
</template>


<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
import { store } from "./../store.js";

export default {
    name: 'Register', 
    data() {
        return {
            loggedIn: false,
        }
    },
    mounted() {
       firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                store.setUserLoggedIn(true);
                this.loggedIn = true;
            } else {
                // No user is signed in.
                this.loggedIn = false;
                store.setUserLoggedIn(false);
            }
        });
        this.loggedIn = store.state.userLoggedIn;
    },
   
    methods: {
        async signOut() {
            try {
                await firebase.auth().signOut();
                this.$router.replace({name:"home"})
            } catch (error) {
                console.log(error)
            }
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .logout {
        cursor: pointer;
        color: #007bff;
        &:hover {
            text-decoration: underline;
        }
    }
</style>