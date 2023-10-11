<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
               src="https://windmill-dashboard-react.vercel.app/static/media/create-account-office.41b2c6a1.jpeg"
               alt="Office">
          <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
               src="https://windmill-dashboard-react.vercel.app/static/media/create-account-office-dark.d34c7b50.jpeg"
               alt="Office">
        </div>
        <main class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <form class="w-full" @submit.prevent="register" autocomplete="off">
            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">{{ $t('auth.signup') }}</h1>

            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
                <span>{{ $t('auth.first_name') }}</span>
                <input
                    class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green mt-1"
                    type="text" placeholder="Jane" v-model="user.first_name" required>
              </label>
            </div>

            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
                <span>{{ $t('auth.last_name') }}</span>
                <input
                    class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green mt-1"
                    type="text" placeholder="Doe" v-model="user.last_name" required>
              </label>
            </div>

            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400">
                <span>{{ $t('auth.birthday') }}</span>
                <input
                    class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                    type="date" v-model="user.birthday" required>
              </label>
            </div>

            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400">{{ $t('auth.gender') }}</label>
              <div class="mt-2">
                <label class="block text-sm text-gray-700 dark:text-gray-400 inline-flex items-center">
                  <input
                      class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
                      type="radio" name="sex" value="sex1" v-model="user.sex1" required>
                  <span class="ml-2">{{ $t('auth.male') }}</span>
                </label>
                <label class="block text-sm text-gray-700 dark:text-gray-400 inline-flex items-center ml-6">
                  <input
                      class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
                      type="radio" name="sex" value="sex2" v-model="user.sex2" required>
                  <span class="ml-2">{{ $t('auth.female') }}</span>
                </label>
              </div>
            </div>

            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('auth.email') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="email" placeholder="john@doe.com" v-model="user.email" required>
              <span class="text-xs">{{ $t('auth.email_privacy') }}</span>
            </label>
            <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
              <span>{{ $t('auth.password') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="password" placeholder="***************" v-model="user.password" required>
              <span class="text-xs">{{ $t('auth.password_info') }}</span>
            </label>
            <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
              <span>{{ $t('auth.password_confirm') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="password" placeholder="***************" v-model="user.re_password" required>
            </label>
            <label class="block text-sm text-gray-700 dark:text-gray-400 inline-flex items-center mt-6">
              <input
                  class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
                  type="checkbox">
              <span class="ml-2">{{ $t('auth.i_agree_to_the') }} <span class="underline">{{
                  $t('auth.privacy_policy')
                }}</span></span>
            </label>
            <div v-if="form_alert">
              {{ err_info }}
            </div>
            <button type="submit"
                    class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple w-full mt-4">
              {{ $t('auth.signup') }}
            </button>
            <p class="mt-4">
              <router-link class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/login">
                {{ $t('auth.you_already_have_an_account') }} {{ $t('auth.signin') }}
              </router-link>
            </p>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import {useI18n} from 'vue-i18n'
// import Auth from '../../components/Auth.vue'

export default {
  name: 'RegisterPage',
  components: {
    // Auth
  },
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      name: import.meta.env.VITE_APP_NAME,
      user: {
        first_name: '',
        last_name: '',
        birthday: '',
        sex1: '',
        sex2: '',
        email: '',
        password: '',
        re_password: ''
      },
      form_alert: false
    }
  },
  methods: {
    register() {
      Axios.post(import.meta.env.VITE_DOMAIN_API + "account/register", this.user)
        .then(res => {
          if (res.data.status == 4) {
            this.form_alert = true;
            this.err_info = this.t('auth.the_mail_was_entered_incorrectly');
          }
          if (res.data.status == 5) {
            this.form_alert = true;
            this.err_info = this.t('auth.the_password_was_entered_incorrectly');
          }
          if (res.data.status == 20) {
            this.form_alert = true;
            this.err_info = this.t('err.unknown_error');
          }

          if (res.data.status == 1) {
            // console.log(res.data.data.access_token);
            localStorage.setItem('token', res.data.data.access_token);
            this.$router.push('/')
          }
        })
    }
  },
}
</script>

<style>
.form-desc {
  font-size: .800em;
  margin-top: 0.25rem;
  color: #6c757d;
}
</style>