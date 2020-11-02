<template>
    <div>
        <h1>Login</h1>

        <!-- ToDo: Only show form if not already logged in !-->
        <div v-if="!this.loggedIn">
          <form @submit.prevent="pressed">

              <div class="col-md-6 offset-md-3">

                <div class="login form-group">
                  <input type="email" class="form-control" placeholder="login" v-model="email">
                </div>

                <div class="password form-group">
                  <input type="password" class="form-control" placeholder="password" v-model="password">
                </div>

                <button class="mt-2 btn btn-primary" type="submit">Login</button>
              
              </div>

              <div v-if="error" id="error" class="error">{{error.message}}</div>
              <p class="mt-1">Need an account? Click here to <router-link to="/register">register</router-link></p>
          </form>
        </div>

        <div v-else>
            <h1>You are already loggedin</h1>
        </div>


    </div>
</template>


<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
import { store } from "../store.js";

export default {
  name: 'Login',
  data() {
    return { 
      email: '',
      password: '',
      error: '',
      loggedIn: false,
    }
  },

  mounted() {
      this.loggedIn = store.state.userLoggedIn
  },
  
  methods: {
    async pressed() {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace({name: "secret"});
      } catch (error) {
         console.log(error)
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>