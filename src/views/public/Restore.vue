<template>
<div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
  <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800" >
    <div class="flex flex-col overflow-y-auto md:flex-row">
      <div class="h-32 md:h-auto md:w-1/2">
        <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="https://windmill-dashboard-react.vercel.app/static/media/forgot-password-office.ac5c499b.jpeg" alt="Office">
        <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src="https://windmill-dashboard-react.vercel.app/static/media/forgot-password-office-dark.6db046dc.jpeg" alt="Office">
      </div>
      <main class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full" bis_skin_checked="1">
          <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Forgot password</h1>
          <label class="block text-sm text-gray-700 dark:text-gray-400">
            <span>Email</span>
            <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1" type="text" placeholder="Jane Doe">
          </label>
          <a class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple w-full mt-4" type="button" href="/login">Recover password</a>
        </div>
      </main>
    </div>
  </div>
</div>

<Auth>
  <template #body>
    <h1 class="mb-2">{{ $t('auth.recovery') }}</h1>
    <p class="mb-0">
      <span>{{ $t('auth.no_account') }} </span>
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
                <span >{{ $t('auth.back_to') }} </span>
                <router-link to="/login" class="">entrance</router-link>
            </p>
        </div>
      <!-- Button -->
      <div class="d-grid">
          <button type="submit" class="btn btn-lg btn-primary">{{ $t('auth.reset_password') }}</button>
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
          <!-- Title -->

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
    name:'RestorePage',
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
        localStorage.setItem('token', res.data.access_token);
        if(res.data.status == 7){
            this.form_alert = true;
            this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if(res.data.status == 4) {
            this.form_alert = true;
            this.err_info = this.t('err.user_not_found');
        }
        if(res.data.status == 16) {
            this.form_alert = true;
            this.err_info = this.t('err.unknown_error');
        }

        if(res.data.status == 1) {
            this.$router.push('/')
        }
      })
    }
  },
  }
  </script>