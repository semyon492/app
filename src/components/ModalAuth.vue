<template>
  <button @click="showModal = true"
          class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center">
    <div class="flex items-center">
        <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
            <svg class="transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
        </span>
      <span class="px-2 transition-colors lg:hidden">{{ $t('auth.signin') }}</span>
    </div>
  </button>
  <Teleport to="body">
    <Modal size="md" :show="showModal" :title="title" @close="showModal = false">
      <template #body>
        <form v-if="type == 'login'" class="w-full" @submit.prevent="login">
          <!-- <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">{{ $t('auth.signin') }}</h1> -->
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
            <router-link class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/restore">
              {{ $t('auth.forgot_your_password') }}
            </router-link>
          </p>
          <p class="mt-1">
            <a @click="type = 'register'"
               class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
               href="#">{{ $t('auth.signup') }}</a>
          </p>
        </form>
        <form v-if="type == 'register'" class="w-full" @submit.prevent="login">
          <!-- <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">{{ $t('auth.signup') }}</h1> -->
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
              <span>{{ $t('auth.first_name') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green mt-1"
                  type="text" placeholder="Jane" v-model="form_add_user.firstname" required>
            </label>
          </div>
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
              <span>{{ $t('auth.last_name') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green mt-1"
                  type="text" placeholder="Doe" v-model="form_add_user.lastname" required>
            </label>
          </div>
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('auth.birthday') }}</span>
              <input
                  class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="date" v-model="form_add_user.birthday" required>
            </label>
          </div>
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400">{{ $t('auth.gender') }}</label>
            <div class="mt-2">
              <label class="block text-sm text-gray-700 dark:text-gray-400 inline-flex items-center">
                <input
                    class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
                    type="radio" name="sex" value="sex1" v-model="form_add_user.sex1" required>
                <span class="ml-2">{{ $t('auth.male') }}</span>
              </label>
              <label class="block text-sm text-gray-700 dark:text-gray-400 inline-flex items-center ml-6">
                <input
                    class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
                    type="radio" name="sex" value="sex2" v-model="form_add_user.sex2" required>
                <span class="ml-2">{{ $t('auth.female') }}</span>
              </label>
            </div>
          </div>
          <label class="block text-sm text-gray-700 dark:text-gray-400">
            <span>{{ $t('auth.email') }}</span>
            <input
                class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                type="email" placeholder="john@doe.com" v-model="form_add_user.email" required>
            <span class="text-xs">{{ $t('auth.email_privacy') }}</span>
          </label>
          <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
            <span>{{ $t('auth.password') }}</span>
            <input
                class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                type="password" placeholder="***************" v-model="form_add_user.password" required>
            <span class="text-xs">{{ $t('auth.password_info') }}</span>
          </label>
          <label class="block text-sm text-gray-700 dark:text-gray-400 mt-4">
            <span>{{ $t('auth.password_confirm') }}</span>
            <input
                class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                type="password" placeholder="***************" v-model="form_add_user.repassword" required>
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
            <a @click="type = 'login'" class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
               href="#">{{ $t('auth.you_already_have_an_account') }} {{ $t('auth.signin') }}</a>
          </p>
        </form>

      </template>
    </Modal>
  </Teleport>

</template>

<script>
import Modal from '../ui/modal/Modal.vue'
import {useI18n} from 'vue-i18n'
import Axios from "axios";

export default {
  name: 'ModalLang',
  props: {
    user: null,
    modal_name: String,
    type: 'login'
  },
  components: {
    Modal,
  },
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      showModalLang: false,
      showModal: false,
      link_type: this.list,
      name: import.meta.env.VITE_APP_NAME,
      form_user: {
        email: '',
        password: ''
      },
      form_add_user: {
        firstname: '',
        lastname: '',
        birthday: '',
        sex1: '',
        sex2: '',
        email: '',
        password: '',
        repassword: ''
      },
      access_token: null,
      form_alert: false,
      err_info: '',
      title: 'default'
    }
  },
  watch: {
    async type(newType) {
      if (newType == 'login') {
        this.title = this.t('auth.signin')
        // this.title = 'login'
      } else {
        this.title = this.t('auth.signup')
        // this.title = 'register'
      }
      // this.title =
    },
  },
  async mounted() {
    if (this.type == 'login') {
      this.title = this.t('auth.signin')
      // this.title = 'login'
    } else {
      this.title = this.t('auth.signup')
      // this.title = 'register'
    }
  },
  methods: {
    login() {
      Axios.post(import.meta.env.VITE_DOMAIN_API + "authorize", this.form_user)
          .then(res => {

            if (res.data.status == 7) {
              this.form_alert = true;
              this.err_info = this.t('err.Incorrect_email_or_password_entered');
            }
            if (res.data.status == 9) {
              this.form_alert = true;
              this.err_info = this.t('err.Incorrect_email_or_password_entered');
            }
            if (res.data.status == 5) {
              this.form_alert = true;
              this.err_info = this.t('err.Incorrect_email_or_password_entered');
            }
            if (res.data.status == 4) {
              this.form_alert = true;
              this.err_info = this.t('err.user_not_found');
            }
            if (res.data.status == 8) {
              this.form_alert = true;
              this.err_info = this.t('err.user_not_found');
            }
            if (res.data.status == 16) {
              this.form_alert = true;
              this.err_info = this.t('err.unknown_error');
            }
            setTimeout(() => {
              this.form_alert = false;
              this.err_info = "";
            }, 3000);

            if (res.data.status == 1) {
              // console.log(res.data.access_token);
              // console.log(res.data.data.access_token);
              localStorage.setItem('token', res.data.access_token);
              this.user.is_connected = true;

              //   this.$router.push('/')
            }
          })
    },
    register() {
      Axios.post(import.meta.env.VITE_DOMAIN_API + "account/register", this.form_add_user)
          .then(res => {
            if (res.data.status == 4) {
              this.form_alert = true;
              this.err_info = this.t('auth.the_mail_was_entered_incorrectly');
            }
            if (res.data.status == 5) {
              this.form_alert = true;
              this.err_info = this.t('auth.the_mail_was_entered_incorrectly');
            }
            if (res.data.status == 20) {
              this.form_alert = true;
              this.err_info = this.t('err.unknown_error');
            }

            if (res.data.status == 1) {
              console.log(res.data.data.access_token);
              localStorage.setItem('token', res.data.data.access_token);
              this.$router.push('/')
            }
          })
    }
  },
}
</script>

<style lang="scss">

</style>