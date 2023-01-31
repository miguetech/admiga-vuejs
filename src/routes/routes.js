import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Policies from '../pages/Policies.vue';


const routes = [
    {path:"/",component:Dashboard},
    
    {path:"/politicas",component:Policies},
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;