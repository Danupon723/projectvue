import { createRouter, createWebHistory } from 'vue-router'
import login from './login.vue'
import regis from './register.vue'

import dashbord from './admin/dasbord.vue'
import navbar from './admin/navbar.vue'
import demo from './demo.vue'
import adminIndex from './admin/index.vue'



const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: regis,
  },
  {
    path: '/demo',
    name: 'demo',
    component: demo,
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminIndex,
  },
  // {
  //   path:'/admin' ,
  //   component:adminIndex,
  //   meta: {requiresAuth:true} ,
  //   children:[
  //     {
  //       path:'',
  //       redirect:'/adminIndex'
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
