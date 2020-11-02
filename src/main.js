import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import firebase from "firebase";
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Makes axios accessible throughout the app
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

// Enter your firebase config data here


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
      }).$mount('#app')
  }
})



