import {createRouter,createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Users from './pages/Users.vue';
import Posts from './pages/Posts.vue';
import Login from './pages/Login.vue'

const routes=[
    {path:'/',name:"home",component:Home},
    {path:'/users',name:"users",component:Users},
    {path:'/posts',name:"posts",component:Posts},
    {path:'/login',name:"login",component:Login}
    

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
