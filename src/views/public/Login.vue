<template>
<Auth>
  <template #body>
    <!-- Title -->
    <h1 class="mb-2">{{ $t('auth.signin') }}</h1>
    <p class="mb-0">
      <span>{{ $t('auth.not_account') }} </span>
      <router-link to="/register" class="">{{ $t('auth.signup') }}</router-link>
    </p>
    <!-- Form START -->
    <form class="mt-sm-4" @submit.prevent="login">
      <!-- Email -->
      <div class="mb-3 input-group-lg">
        <input type="email" name="email" id="email" v-model="user.email" class="form-control" :placeholder="$t('auth.set_email')" required>
      </div>
      <!-- New password -->
      <div class="mb-3 position-relative">
        <!-- Password -->
        <div class="input-group input-group-lg">
          <input type="password" class="form-control fakepassword" placeholder="$t('auth.set_pass')" name="password" id="password" v-model="user.password" required>
          <!-- <span class="input-group-text p-0">
            <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
          </span> -->
        </div>
        <div class="d-flex mt-1">
          <!-- Password message notification -->
          <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="form_alert" id="form_alert">
            <div>
              {{ err_info }}
            </div>
          </div> 
        </div>             
      </div>
      <!-- Remember me -->
      <div class="mb-3 d-sm-flex justify-content-between">
        <div>
          <input type="checkbox" class="form-check-input" id="rememberCheck">
          <label class="form-check-label" for="rememberCheck">
              <span>{{ $t('auth.remember_me') }}</span></label>
        </div>
          <router-link to="/restore">{{ $t('auth.forgot_your_password') }}</router-link>
      </div>
      <!-- Button -->
      <div class="d-grid">
          <button type="submit" class="btn btn-lg btn-primary">
              <span>{{ $t('auth.signin') }}</span>
          </button>
      </div>
      <!-- Copyright -->
      <p class="mb-0 mt-3">
          <span>©2023 </span>
          <router-link to="/">{{ name }}.</router-link>
          <span >{{ $t('footer.author') }}</span>
      </p>
    </form>
  </template>
</Auth>

  <div class="container">
    <div class="row justify-content-center align-items-center vh-100 py-5">
      <!-- Main content START -->
      <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
        <!-- Sign in START -->
        <div class="card card-body text-center p-4 p-sm-5">

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
import { useI18n } from 'vue-i18n'

import Auth from '../../components/Auth.vue'

export default {
  name:'Login',
  components: {
    Auth
  },
  setup() {
    // use global scope
    const { t, locale } = useI18n()
    return { t, locale }
  },
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
        
        if(res.data.status == 7){
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if(res.data.status == 9){
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }   
        if(res.data.status == 5){
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }                                
        if(res.data.status == 4) {
          this.form_alert = true;
          this.err_info = this.t('err.user_not_found');
        }
        if(res.data.status == 8) {
          this.form_alert = true;
          this.err_info = this.t('err.user_not_found');
        }                
        if(res.data.status == 16) {
          this.form_alert = true;
          this.err_info = this.t('err.unknown_error');
        }
        setTimeout(() => {
          this.form_alert = false;
          this.err_info = "";
        }, 3000);                

        if(res.data.status == 1) {
          // console.log(res.data.access_token);
          // console.log(res.data.data.access_token);
          localStorage.setItem('token', res.data.access_token);
            this.$router.push('/')
        }
      })
    }
  },
}
</script>

<style>
.logo_login_register a{
    text-decoration: none;
    font-size: 3rem;
    font-weight: 600;
    color:var(--first)
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
</style>