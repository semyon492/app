<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
              <div class="p-6">
                <h5 class="text-2xl">{{ $t('settings.password') }}</h5>
              </div>
              <form class="flex-1 p-6" @submit.prevent="change_pass">
                <div class="mt-4">
                  <label class="block text-sm text-gray-700 dark:text-gray-400">
                    <span>{{ $t('settings.current_password') }}</span>
                    <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                        type="password" placeholder="********" v-model="user.oldpassword" >
                        <span class="text-xs">{{ $t('settings.required_your_current_password') }}</span>
                  </label>
                </div>      
                <hr class="my-6 -mx-6 dark:border-slate-800 border-t border-gray-100">          
                <div class="mt-4">
                  <label class="block text-sm text-gray-700 dark:text-gray-400">
                    <span>{{ $t('settings.new_password') }}</span>
                    <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                        type="password" placeholder="********" v-model="user.password" >
                        <span class="text-xs">{{ $t('settings.required_new_password') }}</span>
                  </label>
                </div>
                <div class="mt-4">
                  <label class="block text-sm text-gray-700 dark:text-gray-400">
                    <span>{{ $t('auth.password_confirm') }}</span>
                    <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                        type="password" placeholder="********" v-model="user.repassword" >
                        <span class="text-xs">{{ $t('settings.required_new_password_one_more_time') }}</span>
                  </label>                    
                </div>
                <div v-if="form_alert">
                  {{ err_info }}
                </div>
                <div class="mb-6 last:mb-0">
                  <Button type="submit" variant="purple">{{ $t('settings.change_password') }}</Button>
                </div>                
              </form>
            </div>
    </SettingsCard>
  </main>
</template>

<script>
import Axios from "axios";
import {useI18n} from 'vue-i18n'
import SettingsMenu from '@/components/settings/SettingsMenu.vue'
import SettingsCard from '@/components/settings/SettingsCard.vue'
import Main from '@/components/Main.vue'

import Button from '@/ui/button/Button.vue'
import Modal from '@/ui/modal/Modal.vue'

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    SettingsCard,
    Main,
    Button,
    Modal
  },
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  props: ['user'],
  data() {
    return {
      form_alert: false,
      err_info: null,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Settings';
      }
    },
  },
  async mounted() {
    this.user.access_token = localStorage.getItem('token')
  },
  methods: {
    change_pass() {
      Axios.post(import.meta.env.VITE_DOMAIN_API + "account/change_pass", this.user)
        .then(res => {
          if (res.data.status == 8) {
            this.form_alert = true;
            this.err_info = this.t('settings.user_not_found');
          }
          if (res.data.status == 5) {
            this.form_alert = true;
            this.err_info = this.t('settings.the_pass_was_entered_incorrectly');
          }
          if (res.data.status == 9) {
            this.form_alert = true;
            this.err_info = this.t('settings.not_valid');
          }
          if (res.data.status == 1) {
            localStorage.setItem('token', res.data.access_token);
            this.$router.push('/settings/password')
          }
        })
    }    
  },
}
</script>