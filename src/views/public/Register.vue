<template>
<Auth>
  <template #body>       
    <div class="text-center">
      <!-- Title -->
      <h1 class="mb-2">{{ $t('auth.signup') }}</h1>
      <span class="d-block">
          <span >{{ $t('auth.you_already_have_an_account') }} </span>
          <router-link to="/login" class="">{{ $t('auth.signin') }}</router-link>
      </span>
    </div>
    <!-- Form START -->
    <form class="mt-4" @submit.prevent="register" autocomplete="off">

      <div class="mb-3 input-group">
        <span class="input-group-text">{{ $t('auth.name_and_surname') }}</span>
        <input type="text" aria-label="{{ $t('auth.first_name') }}" class="form-control" id="firstname" v-model="user.firstname" required>
        <input type="text" aria-label="{{ $t('auth.last_name') }}" class="form-control" id="lastname" v-model="user.lastname" required>
      </div>        
      
      <div class="mb-3 input-group">
        <span class="input-group-text">{{ $t('auth.birthday') }}</span>
        <input type="date" class="form-control" id="birthday" v-model="user.birthday" required>
      </div>  

      <div class="form-check form-check-inline">
        <label for="exampleSex" class="form-label">{{ $t('auth.gender') }}</label>
      </div>            
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="sex" id="sex1" value="sex1" v-model="user.sex1" required>
        <label class="form-check-label" for="sex1">{{ $t('auth.male') }}</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="sex" id="sex2" value="sex2" v-model="user.sex2" required>
        <label class="form-check-label" for="sex2">{{ $t('auth.female') }}</label>
      </div>

      <!-- Email -->
      <div class="mb-3 input-group-lg">
        <input type="email" class="form-control" :placeholder="$t('auth.set_email')" name="email" id="email" v-model="user.email" required>
        <div class="form-desc">{{ $t('auth.email_privacy') }}</div>
      </div>
      <!-- New password -->
      <div class="mb-3  input-group-lg">
        <input class="form-control fakepassword" :placeholder="$t('auth.enter_a_new_password')" type="password" name="password" id="password" v-model="user.password" required>
        <!-- <span class="input-group-text p-0">
          <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
        </span> -->
      </div>           
      <!-- Confirm password -->
      <div class="mb-3 input-group-lg">
        <input class="form-control" type="password" :placeholder="$t('auth.confirm_your_password')" name="repassword" id="repassword" v-model="user.repassword" required>
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
          <button type="submit" class="btn btn-lg btn-primary">{{ $t('auth.signup') }}</button>
      </div>
      <!-- Copyright -->
      <p class="mb-0 mt-3 text-center">
          <span>©2023 </span>
          <router-link to="/">{{ name }}.</router-link>
          <span>{{ $t('footer.author') }}</span>
      </p>
    </form>
  </template>
</Auth>  
</template>

<script>
import Axios from "axios";
import config from "/config";

import { useI18n } from 'vue-i18n'
import Auth from '../../components/Auth.vue'

export default {
  name:'Register',
  components: {
    Auth
  },
  setup() {
    // use global scope
    const { t, locale } = useI18n()
    return { t, locale }
  },  
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
            this.err_info = this.t('auth.the_mail_was_entered_incorrectly');
          }
          if(res.data.status == 5){
            this.form_alert = true;
            this.err_info = this.t('auth.the_mail_was_entered_incorrectly');
          }
          if(res.data.status == 20){
            this.form_alert = true;
            this.err_info = this.t('err.unknown_error');
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