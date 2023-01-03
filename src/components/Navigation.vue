<template>
        <!-- <nav class="navigation">
        <div class="logo">
            <h1>LOGO</h1>
        </div>
        <div class="links">
            <router-link to="/" id="home_link">Home</router-link>
            <router-link to="/admin/post" v -if="is_admin">Poster</router-link>
            <router-link to="/admin/list" v -if="is_admin">List</router-link>
            <button class="logout" @click="logout" v -if="is_connected">Log out</button>
            <router-link to="/login" v -else>Login</router-link>
        </div>
    </nav> -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <router-link to="/" id="home_link" class="navbar-brand">Logo</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                <router-link to="/" id="home_link" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" v-if="is_admin">
                <router-link to="/admin/post" class="nav-link">Poster</router-link>
            </li>
            <li class="nav-item" v-if="is_connected">
                <router-link @click="logout" class="nav-link">Log out</router-link>
            </li>
            <li class="nav-item" v-else>
                <router-link to="/login" class="nav-link">Login</router-link>
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
        }
    },
    async mounted() {
        console.log(!!(localStorage.getItem('token')), 'test');
        if(!!(localStorage.getItem('token'))){
            this.is_connected = true;
        }
        await Axios.post(config.domain + "me",
        localStorage.getItem('token'), 
        {
            headers: {
                'content-type': 'text/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => res.data)
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