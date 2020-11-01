import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue'

Vue.use(VueRouter)

import { firebase } from '@firebase/app'
import '@firebase/auth'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
   {
    path: '/register',
    name: 'register',
    component: Register
  },
   {
    path: '/secret',
    name: 'secret',
    component: Secret,
    meta: {requiresAuth: true}
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  // ToDo
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
})

export default router
