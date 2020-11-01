<template>
  <div id="app">
    <div id="nav">
      <div v-if="!this.loggedIn">
        <router-link to="login">Login</router-link> | 
      </div>
      <router-link to="secret">Secret</router-link> | 
      <div v-if="!this.loggedIn">
        <router-link to="register">Register</router-link> 
      </div>
      <div v-if="this.loggedIn">
        <span>| </span>
        <span class="logout" @click="signOut">Logout</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  
  import { firebase } from '@firebase/app'
  import '@firebase/auth'
  import { store } from "./store.js";

  export default {
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
        },
     methods: {
            async signOut() {
                try {
                    await firebase.auth().signOut();
                    this.$router.replace({name:"login"})
                } catch (error) {
                    console.log(error)
                }
                
            }
    },

   
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logout { 
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
