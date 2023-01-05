import { createRouter, createWebHistory } from 'vue-router'
import Axios from "axios";

import Home from '@/views/public/Home.vue'
import Login from '@/views/public/Login.vue'
import Article from '@/views/public/ArticleHome.vue'
import Register from '@/views/public/Register.vue'
import Restore from '@/views/public/Restore.vue'
import Rules from '@/views/public/Rules.vue'
import PublicLayout from '@/views/public/Layout.vue'

import AdminLayout from '@/views/admin/Layout.vue'
import Post from '@/views/admin/Post.vue'
import List from '@/views/admin/List.vue'
import Edit from '@/views/admin/Edit.vue'

import config from "/config"

const routes = [
    {
        path:'/',
        name:'public',
        component: PublicLayout,
        children : [
            {path:'home/:id(\\d+)',name:'home',component:Home, props:true},
            {path:'article/:id(\\d+)',name:'article', component:Article, props:true},
            // {path:'/', redirect:'/home/1'},
            {path:'/',name:'home',component:Home, props:true},
            {path:'/privacy-and-terms',name:'rules',component:Rules, props:true},
            // {path:'/:pathMatch(.*)*', redirect: '/home/1'}
        ]
    },
    {path:'/login',name:'login',component:Login},
    {path:'/register',name:'register',component:Register},
    {path:'/restore',name:'restore',component:Restore},
    {
        path:'/admin',
        name:'admin',
        component:AdminLayout,
        children:[
            {path:'post', name:'post', component:Post},
            {path:'list', name:'list', component:List},
            {path:'edit/:id(\\d+)',name:'edit',component:Edit, props:true}
        ]
    }
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach( async (to, from, next) => {
    if(to.matched[0].name == "admin"){
        console.log("JESUISEXECUTE")
        await Axios.post(config.domain + "me",
        localStorage.getItem('token'), 
        {
            headers: {
                'content-type': 'text/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => res.data)
        .then(data => {
            console.log(data.roles)
            if(!data.roles.includes('ROLE_ADMIN')){
                router.push('/')
            }
        })
    }
    next();
})

export default router
        