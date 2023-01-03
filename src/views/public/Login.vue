<template>
    <div class="login">
        <div class="logo_login_register">
            <router-link to="/">LOGO</router-link>
        </div>
        <form class="login_form" @submit.prevent="login">
            <div>
                <label for="email">Email :</label>
                <input type="email" name="email" id="email" v-model="user.email" required>
            </div>
            <div>
                <label for="password">Mot de passe :</label>
                <input type="password" name="password" id="password" v-model="user.password" required>
            </div>
            <button type="submit" class="connexion_btn">Connexion</button>
            <div v-if="form_alert" id="form_alert">
                <p ref="err_alert">{{ err_info }}</p>
            </div>
        </form>
        <router-link to="/register" class="register_login_btn">Register</router-link>
    </div>
</template>

<script>
import Axios from "axios";
import config from "/config";

export default {
    name:'Login',
    data(){
        return{
            user : {
                email:'',
                password:''
            },
            form_alert : false,
            err_info: '',
        }
    },
    methods: {
        login(){
            Axios.post(config.domain + "authorize", this.user)
            .then(res => {
                localStorage.setItem('token', res.data.access_token);
                if(res.data.status == 7){
                    this.form_alert = true;
                    this.err_info = "Неверно введена почта или пароль";
                }
                if(res.data.status == 4) {
                    this.form_alert = true;
                    this.err_info = "Пользователь не найден";
                }
                if(res.data.status == 16) {
                    this.form_alert = true;
                    this.err_info = "Неизвестная ошибка";
                }

                if(res.data.status == 1) {
                    this.$router.push('/')
                }
            })
        }
    },
}
</script>

<style>
.login{
    width: 100%;
    height:100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:50px;
}

.logo_login_register{
    margin-top:-200px;
}

.logo_login_register a{
    text-decoration: none;
    font-size: 3rem;
    font-weight: 600;
    color:var(--first)
}

.login_link_home{
    position: absolute;
    left: 50%;
    top:15px;
    transform: translateX(-50%);

    width:100px;
}

.login_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    gap:35px;
}

.login_form div{
    position: relative;
}

.login_form div label{
    position: absolute;
    left:calc(-100% - 15px);
    text-align: right;
    width: 100%;

    font-size: 20px;
}

.login_form div input{
    border:none;
    background: var(--first);
    color: var(--second);
    font-size: 16px;
    padding:4px 25px;
    text-align: center;
    border-radius:5px;
}

.login_form div input:focus{
    outline: none;
}

.connexion_btn{
    color:var(--second);
    background: var(--first);
    padding:10px 40px;
    border:none;
    border-radius:5px;
    font-size:20px;

    cursor: pointer;
}

.register_login_btn{
    text-decoration: none;
    color:var(--second);
    background: var(--first);
    padding:10px 40px;
    border:none;
    border-radius:5px;
    font-size:12px;

    position: absolute;
    right:50px;
    bottom:50px;

    cursor: pointer;
}
</style>