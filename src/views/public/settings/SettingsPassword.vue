<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.password') }}</h5>
        </div>
        <form class="flex-1 p-6" @submit.prevent="change_pass">
          <Input v-model:modelValue="form_user.oldpassword" type="password" :label="$t('settings.current_password')" />   
          <hr class="my-6 -mx-6 dark:border-slate-800 border-t border-gray-100">          
          <Input v-model:modelValue="form_user.password" type="password" :label="$t('settings.new_password')" />
          <Input v-model:modelValue="form_user.repassword" type="password" :label="$t('auth.password_confirm')" />
          <div v-if="form_alert">
            {{ err_info }}
          </div>
          <div class="mb-6 last:mb-0 mt-4">
            <Button type="submit" variant="purple">{{ $t('settings.change_password') }}</Button>
          </div>                
        </form>
      </div>
    </SettingsCard>
  </main>
</template>

<script>
import {changePass} from "@/api/user"
import Input from '@/ui/Input.vue'
import {useI18n} from 'vue-i18n'
import SettingsCard from '@/components/settings/SettingsCard.vue'
import NotFound from '@/components/NotFound.vue'

import Button from '@/ui/button/Button.vue'

export default {
  components: {
    SettingsCard,
    NotFound,
    Button,
    Input,
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
      form_user: {
        oldpassword: '********',
        password: '********',
        repassword: '********',
      },
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
      changePass(
        this.form_user
      ).then((res) => {
        if (res.status == 8) {
          this.form_alert = true;
          this.err_info = this.t('settings.user_not_found');
        }
        if (res.status == 5) {
          this.form_alert = true;
          this.err_info = this.t('settings.the_pass_was_entered_incorrectly');
        }
        if (res.status == 9) {
          this.form_alert = true;
          this.err_info = this.t('settings.not_valid');
        }
        if (res.status == 1) {
          localStorage.setItem('token', res.access_token);
          this.$router.push('/settings/password')
        }
      })         
    }    
  },
}
</script>