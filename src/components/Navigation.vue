<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <router-link to="/" id="home_link" class="navbar-brand">{{ name}}</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/" id="home_link" :class="['nav-link']">Главная</router-link>
            </li>
            <li class="nav-item" v-if="is_admin">
                <router-link to="/admin/post" :class="['nav-link']">Poster</router-link>
            </li>
            <li class="nav-item" v-if="is_connected">
                <!-- <router-link @click="logout" :class="['nav-link']">Выход</router-link> -->
                <a aria-current="page" href="/" @click="logout" class="nav-link" id="home_link">Выход</a>
            </li>
            <li class="nav-item" v-if="is_connected !== true">
                <router-link to="/login" :class="['nav-link']">Вход</router-link>
            </li>

        </ul>
        </div>
    </div>
    </nav>    
</template>

<script>
import Axios from "axios";
import config from "/config";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
    name:'Home',
    data() {
        return {
            is_connected:false,
            is_admin:false,
            name:config.title,
            access_token : {
                access_token: ''
            }
        }
    },
    async mounted() {
         this.is_connected = false;
        if (!!localStorage.getItem('token')){
            this.is_connected = true;
            this.access_token.access_token = localStorage.getItem('token');
        }     
        await Axios.post(config.domain + "account/getinfo", this.access_token)
        .then(res => res.data)
        .then(data => {
            if(data.roles == 'ROLE_ADMIN'){
                this.is_admin = true;
            }
        })
    },
    methods: {
        logout(){
            localStorage.removeItem('token')
            this.is_connected = false;
            this.is_admin = false;
        }
    }
}
</script>

<style>
.navigation{
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
 
.logo{
    height: 100%;
    width: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.links{
    height:100%;
    display: flex;
    align-items: center;
}

.links a, .logout{
    text-decoration: none;
    text-transform: uppercase;
    color: var(--first);
    
    display: flex;
    align-items: center;

    height:100%;
    padding:0 50px;
    
    font-size: 15px;
    font-weight: 600;
}

.logout{
    background: none;
    border: none;
    cursor: pointer;
}

.navigation .router-link-exact-active, .links a:hover,
.logout:hover{
    color: var(--second) !important;
    background: var(--blue) !important;
}
</style>