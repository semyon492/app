<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.Name') }}</h5>
        </div>
        <form class="flex-1 p-6" @submit.prevent="change_name">
          <v-input v-model:modelValue="user.first_name" type="text" :label="$t('settings.first_name')" />
          <v-input v-model:modelValue="user.last_name" type="text" :label="$t('settings.last_name')" />
          <v-button type="submit" class="mt-4">{{ $t('settings.change_name') }}</v-button>
        </form>
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.Avatar') }}</h5>
        </div>
        <div class="flex-1 p-6">
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('settings.file') }}</span>
              <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="file" id="file" ref="file" v-on:change="handleFileUpload()" >
            </label>
          </div> 
          <v-button v-on:click="submitFile()" type="submit" class="mt-4" >{{ $t('settings.submit') }}</v-button>
        </div>        
      </div>
    </SettingsCard>
  </main>
</template>

<script>
import SettingsMenu from '@/components/settings/SettingsMenu.vue'
import SettingsCard from '@/components/settings/SettingsCard.vue'
import NotFound from '@/components/NotFound.vue'

import Axios from "axios";

export default {
 components: {
   SettingsCard,
    NotFound,
  },
  props: ['user'],
  data() {
    return {
      file: ''
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
  },
  methods: {
    change_name(){
      Axios.post(import.meta.env.VITE_DOMAIN_API + "account/change_name", this.user)
        .then(res => {
          if (res.data.status == 8) {
            this.form_alert = true;
            this.err_info = this.t('settings.user_not_found');
          }
          if (res.data.status == 5) {
            this.form_alert = true;
            this.err_info = this.t('settings.the_name_entered_incorrectly');
          }
          if (res.data.status == 9) {
            this.form_alert = true;
            this.err_info = this.t('settings.not_valid');
          }
          if (res.data.status == 1) {
            // localStorage.setItem('token', res.data.access_token);
            // this.$router.push('/settings/password')
          }
        })
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('access_token', localStorage.getItem('token'));
      // formData.append('file', this.file);
      Axios.post( import.meta.env.VITE_DOMAIN_API + 'account/change_avatar', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(res => {
          this.user.photo_50 = res.data.photo;
      })
      .catch(function(){
        console.log('FAILURE!!');//todo update
      });
    },    
  },
}
</script>