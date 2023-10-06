<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.Name') }}</h5>
        </div>
        <form class="flex-1 p-6" @submit.prevent="change_name">
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('settings.firstname') }}</span>
              <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="text" :placeholder="user.firstname" v-model="user.firstname" >
            </label>
          </div> 
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('settings.lastname') }}</span>
              <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="text" :placeholder="user.lastname" v-model="user.lastname" >
            </label>
          </div> 
          <Button type="submit" class="mt-4" variant="purple">{{ $t('settings.change_name') }}</Button>
        </form>
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.Avatar') }}</h5>
        </div>
        <div class="flex-1 p-6" @submit.prevent="change_name">
          <div class="mt-4">
            <label class="block text-sm text-gray-700 dark:text-gray-400">
              <span>{{ $t('settings.file') }}</span>
              <input class="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
                  type="file" id="file" ref="file" v-on:change="handleFileUpload()" >
            </label>
          </div> 
          <Button v-on:click="submitFile()" class="mt-4" variant="purple">{{ $t('settings.submit') }}</Button>
        </div>        
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.account') }}</h5>
        </div>
        <div class="flex-1 p-6">
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">Avatar</label>
            <div class="">
              <div class="flex items-stretch justify-start relative">
                <label class="inline-flex">
                  <a class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3"
                      disabled="false">
                    <span class="inline-flex justify-center items-center w-6 h-6">
                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                      <path fill="currentColor" d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"></path>
                    </svg>
                    </span>
                    <span class="px-2">Upload</span>
                  </a>
                  <input type="file" class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1">
                </label>
              </div>
            </div>
            <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Max 500kb</div>
          </div>
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">Name</label>
            <div class="">
              <div class="relative">
                <input name="username" autocomplete="username" required="" type="text"
                        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                <span class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor"
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
            </svg>
          </span>
              </div>
            </div>
            <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Required. Your name</div>
          </div>
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">E-mail</label>
            <div class="">
              <div class="relative">
                <input name="email" autocomplete="email" required="" type="email"
                        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                <span
                    class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor" d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20"></path>
            </svg>
          </span>
              </div>
            </div>
            <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Required. Your e-mail</div>
          </div>
        </div>
      </div>
    </SettingsCard>
  </main>
</template>

<script>
import SettingsMenu from '@/components/SettingsMenu.vue'
import SettingsCard from '@/ui/SettingsCard.vue'
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
  props: ['user'],
  data() {
    return {
      file: ''
    }
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
      axios.post( import.meta.env.VITE_DOMAIN_API + 'account/avatar', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    },    
  },
}
</script>