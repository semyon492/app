<template>
  <div v-if="(!user.is_connected)" class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
               :src="imgSignIn" alt="Office">
          <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
               :src="imgSignInDark" alt="Office">
        </div>
        <main class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <form class="w-full" @submit.prevent="login">
            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">{{ $t('auth.signin') }}</h1>
            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('auth.email') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="email" placeholder="john@doe.com" v-model="form_user.email" required>
            </label>
            <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
              <span>{{ $t('auth.password') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="password" placeholder="***************" v-model="form_user.password" required>
            </label>
            <div v-if="form_alert">
              {{ err_info }}
            </div>
            <button
                class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple w-full mt-4"
                type="submit">
              {{ $t('auth.signin') }}
            </button>
            <p class="mt-4">
              <router-link class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                           to="/restore">{{ $t('auth.forgot_your_password') }}
              </router-link>
            </p>
            <p class="mt-1">
              <router-link class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                           to="/register">{{ $t('auth.signup') }}
              </router-link>
            </p>
          </form>
        </main>
      </div>
    </div>
  </div>
  <div v-if="(user.is_connected)">
    <NotFound/>
  </div>
</template>

<script>
import NotFound from '@/components/NotFound.vue'
import {authRefreshToken, authorize} from "@/api/user"
import {useI18n} from 'vue-i18n'

import imgSignIn from "@/assets/images/login.jpeg";
import imgSignInDark from "@/assets/images/login-dark.jpeg";

export default {
  name: 'LoginPage',
  components: {
    NotFound,
  },
  props: ['user'],
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      form_user: {
        email: '',
        password: ''
      },
      access_token: null,
      form_alert: false,
      err_info: '',
      imgSignIn:imgSignIn,
      imgSignInDark:imgSignInDark
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Login';
      }
    },
  },
  methods: {
    login() {
      authorize(
        this.form_user
      ).then((res) => {
        if (res.status == 7) {
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if (res.status == 9) {
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if (res.status == 5) {
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if (res.status == 4) {
          this.form_alert = true;
          this.err_info = this.t('err.user_not_found');
        }
        if (res.status == 8) {
          this.form_alert = true;
          this.err_info = this.t('err.user_not_found');
        }
        if (res.status == 16) {
          this.form_alert = true;
          this.err_info = this.t('err.unknown_error');
        }
        setTimeout(() => {
          this.form_alert = false;
          this.err_info = "";
        }, 3000);

        if (res.status == 1) {
          localStorage.setItem('token', res.access_token);
          this.access_token = res.access_token
          this.user.is_connected = true;

          authRefreshToken({
            access_token: this.access_token,
          }).then((res2) => {
            if (res2.status !== 20) {
              this.user.id = res2.data.id;
              this.user.first_name = res2.data.first_name;
              this.user.last_name = res2.data.last_name;          
              this.user.photo_50 = res2.data.photo_50;
              this.user.photo = res2.data.photo_50;
              if (res2.roles == 'ROLE_ADMIN') {
                this.user.is_admin = true;
              }            
            }
          }) 
          this.$router.push('/')
        }
      }) 
    }
  },
}
</script>

<style>
.logo_login_register a {
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
  color: var(--first)
}

.login_form div {
  position: relative;
}

.login_form div label {
  position: absolute;
  left: calc(-100% - 15px);
  text-align: right;
  width: 100%;

  font-size: 20px;
}

.login_form div input {
  border: none;
  background: var(--first);
  color: var(--second);
  font-size: 16px;
  padding: 4px 25px;
  text-align: center;
  border-radius: 5px;
}

.login_form div input:focus {
  outline: none;
}
</style>