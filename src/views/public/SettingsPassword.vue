<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="flex flex-wrap">
      <div class="w-full max-w-full px-3 mt-6 shrink-0 md:w-2/12 md:flex-0 md:mt-0">
        <Menu :user="user"/>
      </div>
      <div class="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
        <div class="flex flex-wrap">
          <div class="w-full max-w-full px-3 mt-6 shrink-0 md:w-2/12 md:flex-0 md:mt-0">
            <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
              <div class="dark:bg-slate-900">
                <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
                  <b class="font-black">{{ $t('settings.profile_settings') }}</b>
                </div>
              </div>
              <div>
                <SettingsMenu/>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
            <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
              <div class="p-6">
                <h5 class="text-2xl">{{ $t('settings.password') }}</h5>
              </div>
              <div class="flex-1 p-6" @submit.prevent="change_pass">
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
                <div class="mb-6 last:mb-0">
                  <Button type="submit" variant="purple">{{ $t('settings.change_password') }}</Button>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SettingsMenu from '@/components/SettingsMenu.vue'
import Menu from '@/components/Menu.vue'
import Main from '@/components/Main.vue'

import Button from '@/ui/button/Button.vue'
import Modal from '@/ui/modal/Modal.vue'

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    Menu,
    Main,
    Button,
    Modal
  },
  props: ['user'],
  data() {
    return {}
  },
  async mounted() {
  },
  methods: {
    change_pass() {
      Axios.post(config.domain + "account/change_pass", this.user)
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
            // console.log(res.data.data.access_token);
            localStorage.setItem('token', res.data.access_token);
            this.$router.push('/')
          }
        })
    }    
  },
}
</script>