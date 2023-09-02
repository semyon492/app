<template>
<div class="container">
    <div class="row justify-content-center align-items-center vh-100 py-5">
      <!-- Main content START -->
      <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
        <!-- Sign up START -->
        <div class="card card-body rounded-3 p-4 p-sm-5">
          <div class="text-center">
            <!-- Title -->
            <h1 class="mb-2">Регистрация</h1>
            <span class="d-block">
                <span >У вас уже есть аккаунт? </span>
                <router-link to="/login" class="">Войти</router-link>
            </span>
          </div>
          <!-- Form START -->
          <form class="mt-4" @submit.prevent="register" autocomplete="off">

            <div class="mb-3 input-group">
              <span class="input-group-text">Имя и фамилия</span>
              <input type="text" aria-label="First name" class="form-control" id="firstname" v-model="user.firstname" required>
              <input type="text" aria-label="Last name" class="form-control" id="lastname" v-model="user.lastname" required>
            </div>        
            
            <div class="mb-3 input-group">
              <span class="input-group-text">День рождения</span>
              <input type="date" class="form-control" id="birthday" v-model="user.birthday" required>
            </div>  

            <div class="form-check form-check-inline">
              <label for="exampleSex" class="form-label">Пол</label>
            </div>            
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="sex" id="sex1" value="sex1" v-model="user.sex1" required>
              <label class="form-check-label" for="sex1">Мужской</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="sex" id="sex2" value="sex2" v-model="user.sex2" required>
              <label class="form-check-label" for="sex2">Женский</label>
            </div>

            <!-- Email -->
            <div class="mb-3 input-group-lg">
              <input type="email" class="form-control" placeholder="Введите адрес электронной почты" name="email" id="email" v-model="user.email" required>
              <div class="form-desc">Мы никогда не поделимся вашей электронной почтой с кем-либо еще.</div>
            </div>
            <!-- New password -->
            <div class="mb-3  input-group-lg">
              <input class="form-control fakepassword" placeholder="Введите новый пароль" type="password" name="password" id="password" v-model="user.password" required>
              <!-- <span class="input-group-text p-0">
                <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
              </span> -->
            </div>           
            <!-- Confirm password -->
            <div class="mb-3 input-group-lg">
              <input class="form-control" type="password" placeholder="Подтвердите пароль" name="repassword" id="repassword" v-model="user.repassword" required>
            </div>
            <div class="d-flex mt-1">
                <!-- Password message notification -->
                <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="form_alert" id="form_alert">
                  <div>
                    {{ err_info }}
                  </div>
                </div> 
              </div>  
            <!-- Button -->
            <div class="d-grid">
                <button type="submit" class="btn btn-lg btn-primary">Регистрация</button>
            </div>
            <!-- Copyright -->
            <p class="mb-0 mt-3 text-center">
                <span>©2023 </span>
                <router-link to="/">{{ name }}.</router-link>
                <span>Все права защищены</span>
            </p>
          </form>
          <!-- Form END -->
        </div>
        <!-- Sign up END -->
      </div>
    </div> <!-- Row END -->
  </div>    
</template>

<script>
import Axios from "axios";
import config from "/config";

export default {
    name:'Register',
    data() {
        return {
          name:config.title,
          user:{
            firstname: '',
            lastname: '',
            birthday: '',
            sex1: '',
            sex2: '',
            email: '',
            password:'',
            repassword:''
          }
        }
    },
    methods: {
        register(){
            Axios.post(config.domain + "account/register", this.user)
            .then(res => {
              if(res.data.status == 4){
                    this.form_alert = true;
                    this.err_info = "Неверно введена почта";
                }
                if(res.data.status == 5){
                    this.form_alert = true;
                    this.err_info = "Неверно введен пароль";
                }
                if(res.data.status == 20){
                    this.form_alert = true;
                    this.err_info = "Неизвестная ошибка";
                }

              if(res.data.status == 1) {
                  console.log(res.data.data.access_token);
                  localStorage.setItem('token', res.data.data.access_token);
                    this.$router.push('/')
                }
            })
        }
    },
}
</script>

<style>
.form-desc{
  font-size: .800em;
  margin-top: 0.25rem;
  color: #6c757d;
}
</style>