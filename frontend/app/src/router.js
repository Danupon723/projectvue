import {createRouter,createWebHistory} from 'vue-router'
import login from './login.vue'
import register from './register.vue'

const routes =  [
    {
        path:'/',
        name:'login',
        component:login
    },
    {
        path:'/register',
        name:'register',
        component:register
    },
]


const router = createRouter({
    history:createWebHistory(),
    routes
})
    export default router