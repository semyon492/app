<template>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <!-- Main content START -->
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <!-- Sign in START -->
          <div class="card card-body text-center p-4 p-sm-5">
            <!-- Title -->
            <h1 class="mb-2">Восстановление</h1>
            <p class="mb-0">
              <span>Нет аккаунта? </span>
              <router-link to="/register" class="">Зарегистрироваться</router-link>
          </p>
            <!-- Form START -->
            <form class="mt-sm-4" @submit.prevent="login">
              <!-- Email -->
              <div class="mb-3 input-group-lg">
                <input type="email" name="email" id="email" v-model="user.email" class="form-control" placeholder="Введите адрес электронной почты" required>
              </div>
              <!-- New password -->
              <div class="mb-3 position-relative">
                <div class="d-flex mt-1">
                  <!-- Message notification -->
                  <div class="ms-auto" v-if="form_alert" id="form_alert">
                    <i class="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" 
                    data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." 
                    data-bs-original-title="" title="" ref="err_alert">{{ err_info }}</i>
                  </div>
                </div>
              </div>
                <div class="mb-3">
                    <p>
                        <span >Вернуться к </span>
                        <router-link to="/login" class="">входу</router-link>
                    </p>
                </div>
              <!-- Button -->
              <div class="d-grid">
                  <button type="submit" class="btn btn-lg btn-primary">Сбросить пароль</button>
              </div>
              <!-- Copyright -->
              <p class="mb-0 mt-3">
                  <span>©2023 </span>
                  <router-link to="/">{{ name }}.</router-link>
                  <span >Все права защищены</span>
              </p>
            </form>
            <!-- Form END -->
          </div>
          <!-- Sign in START -->
        </div>
      </div> <!-- Row END -->
    </div>    
  </template>
  
  <script>
  import Axios from "axios";
  import config from "/config";
  
  export default {
      name:'Restore',
      data(){
          return{
            name:config.title,
            user : {
                email:'',
                password:''
            },
            form_alert : false,
            err_info: ''
              
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