import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/public/Home.vue'

import Settings from '@/views/public/settings/Settings.vue'
import SettingsPassword from '@/views/public/settings/SettingsPassword.vue'
import SettingsPrivacy from '@/views/public/settings/SettingsPrivacy.vue'
import SettingsEmail from '@/views/public/settings/SettingsEmail.vue'
import SettingsNotifications from '@/views/public/settings/SettingsNotifications.vue'
import SettingsDeleteAcc from '@/views/public/settings/SettingsDeleteAcc.vue'

import Profile from '@/views/public/Profile.vue'
import EditProfile from '@/views/public/EditProfile.vue'
import Friends from '@/views/public/friends/Friends.vue'
import FriendsOnline from '@/views/public/friends/FriendsOnline.vue'
import FriendsRequests from '@/views/public/friends/FriendsRequests.vue'

import Search from '@/views/public/Search.vue'
import Albums from '@/views/public/Albums.vue'
import Chat from '@/views/public/Chat.vue'
import Login from '@/views/public/Login.vue'
import Register from '@/views/public/Register.vue'
import Restore from '@/views/public/Restore.vue'
import Rules from '@/views/public/Rules.vue'

import NotFound from '@/components/NotFound.vue'

import HomeAdmin from '@/views/admin/Home.vue'
import AdminTests from '@/views/admin/Tests.vue'
import AdminSettings from '@/views/admin/Settings.vue'
import AdminUsers from '@/views/admin/Settings.vue'
import AdminGroups from '@/views/admin/Settings.vue'

const routes = [
    {
        path: '/',
        name: 'public',
        component: () => import('@/components/Layout.vue'),
        children: [
            { path: ':afterUser(.*)', component: Settings },
            
            {path: 'home/:id(\\d+)', name: 'home3', component: Home, props: true},
            // {path:'/', redirect:'/home/1'},
            {path: '', name: 'home', component: Home, props: true},
            // {path: '/', name: 'home2', component: Home, props: true},
            {path: 'privacy-and-terms', name: 'rules', component: Rules, props: true},
            {path: 'settings', name: 'settings', component: Settings, props: true},
            {path: 'settings/delete', name: 'delete', component: SettingsDeleteAcc, props: true},
            {path: 'settings/password', name: 'password', component: SettingsPassword, props: true},
            {path: 'settings/privacy', name: 'privacy', component: SettingsPrivacy, props: true},
            {path: 'settings/email', name: 'email', component: SettingsEmail, props: true},
            {path: 'settings/notifications', name: 'notifications', component: SettingsNotifications, props: true},
            {path: 'id:id(\\d+)', name: 'profile', component: Profile, props: true},           

            {path: 'edit', name: 'edit_profile', component: EditProfile, props: true},
            {path: 'friends/:id(\\d+)', name: 'friends', component: Friends, props: true},
            {path: 'friends/online/:id(\\d+)', name: 'friendsOnline', component: FriendsOnline, props: true},
            {path: 'friends/requests/:id(\\d+)', name: 'FriendsRequests', component: FriendsRequests, props: true},

            {path: 'albums/:id(\\d+)', name: 'albums', component: Albums, props: true},
            {path: 'chat', name: 'chat', component: Chat, props: true},

            // {path: '/search/:id(\\d+)/:page(\\d+)/:query', name: 'search', component: Search, props: true},
            // {path: '/search/:id(\\d+)/:query', name: 'search', component: Search, props: true},
            // {path: '/search/:page(\\d+)/:query', name: 'search', component: Search, props: true},
            {path: 'search/:query', name: 'search_query', component: Search, props: true},
            // {path: '/search/:name', name: 'search', component: Search, props: true},

            {path: 'search/', name: 'search', component: Search, props: true},

            {path: 'login', name: 'login', component: Login, props: true},
            {path: 'register', name: 'register', component: Register, props: true},
            {path: 'restore', name: 'restore', component: Restore, props: true},
            // {path:'/:pathMatch(.*)*', redirect: '/home/1'}
            { path: ':pathMatch(.*)*', name: 'NotFound', component: NotFound },
        ]
    },

    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/components/admin/Layout.vue'),
        children: [
            {path: '', name: 'admin_home', component: HomeAdmin, props: true},
            // {path: '/', name: 'admin_home2', component: HomeAdmin, props: true},
            // {path: '/admin', name: 'admin_home3', component: HomeAdmin, props: true},
            {path: 'admin', name: 'admin_home3', component: HomeAdmin, props: true},
            {path: 'settings', name: 'admin_settings', component: AdminSettings, props: true},
            {path: 'tests', name: 'admin_tests', component: AdminTests, props: true},
            {path: 'users', name: 'admin_users', component: AdminUsers, props: true},
            {path: 'groups', name: 'admin_groups', component: AdminGroups, props: true},

            { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    // if (to.matched[0].name === "admin") {
    //     await Axios.post(import.meta.env.VITE_DOMAIN_API + "me",
    //         localStorage.getItem('token'),
    //         {
    //             headers: {
    //                 'content-type': 'text/json',
    //                 'Authorization': 'Bearer ' + localStorage.getItem('token')
    //             }
    //         }).then(res => res.data)
    //         .then(data => {
    //             console.log(data.roles)
    //             if (!data.roles.includes('ROLE_ADMIN')) {
    //                 router.push('/')
    //             }
    //         })
    // }
    next();
})

export default router
        