<template>
    <div>
        
        <h1>Register</h1>


        <div v-if="error" id="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">

             <div class="col-md-6 offset-md-3">
           
                <div class="email form-group">
                    <input class="form-control" type="email" v-model="email" placeholder="email">
                </div>

                <div class="password mt-1 form-group">
                    <input class="form-control" type="password" v-model="password" placeholder="password">
                </div>

                <button class="btn btn-primary mt-1" type="submit">Register</button>

            </div>
        
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