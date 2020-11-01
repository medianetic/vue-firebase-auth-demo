<template>
    <div>
         <div v-if="error" id="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            Register
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>

            <div class="password mt-1">
                <input type="password" v-model="password" placeholder="password">
            </div>

            <button class="btn btn-primary mt-1" type="submit">Register</button>
        
        </form>
    </div>
</template>


<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'

export default {
  name: 'Register', 
  methods: {
      async pressed() {
          try{
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password);
                this.$router.replace({name:"secret"})
          }catch(err) {
                console.log(err)
          }
      }
  },
  data() {
      return {
          email: '',
          password: '',
          error: ''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>