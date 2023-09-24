<script>
import Axios from "axios"

import ModalAuth from '../components/ModalAuth.vue'

export default {
  name: 'NavBarMenu',
  props: ['user'],
  components: {
    ModalAuth
  },
  data() {
    return {
      access_token: null,

      show: false,
      showOnSvg: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
      showOffSvg: 'M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z',
      showOnList: 'max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800 block',
      showOffList: 'max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800 hidden',

      menu1: false,
      menu1On: 'text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700',
      menu1Off: 'text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700 lg:hidden',
    }
  },
  watch: {
    async access_token(new_access_token) {
      await this.userCheck()
    },
    user(new_user) {
      // this.userCheck()
      // console.warn(this.user);
      // console.warn(new_user);
    }

  },
  async mounted() {
    this.access_token = localStorage.getItem('token');
  },
  methods: {
    async userCheck() {
      if (!!localStorage.getItem('token')) {
        this.user.is_connected = true;
        this.user.access_token = localStorage.getItem('token');
        this.access_token = localStorage.getItem('token');
      }
      await Axios.post(import.meta.env.VITE_DOMAIN_API + "account/getinfo", {
        access_token: localStorage.getItem('token')
      })
      .then(res => {
        if (res.data.status !== 20) {
          this.user.firstname = res.data.data.firstname;
          this.user.lastname = res.data.data.lastname;
          if (res.data.roles === 'ROLE_ADMIN') {
            this.user.is_admin = true;
          }
        } else {
          localStorage.removeItem('token')
          this.user.is_connected = false;
          this.user.is_admin = false;
          this.access_token = null;
        }
      })
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.token = '';
      localStorage.setItem('token', null);
      this.user.is_connected = false;
      this.user.is_admin = false;
      this.access_token = null;
    }
  },
};
</script>

<template>
  <div class="flex-none items-stretch flex h-14 lg:hidden" @click="show = !show">
    <div
        class="flex text-blue-600 hover:text-black py-2 px-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
      <span class="inline-flex justify-center items-center w-6 h-6">
        <svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
          <path fill="currentColor" :d="show ? showOnSvg : showOffSvg"></path>
        </svg>
      </span>
    </div>
  </div>
  <div :class="show ? showOnList : showOffList">
    <slot name="menu">
      <div v-if="user.is_connected"
           class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black lg:py-2 lg:px-3">
        <div class="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0"
             @click="menu1 = !menu1">
          <div class="w-6 h-6 mr-3 inline-flex">
            <img
              src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93"
              alt="John Doe" class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800">
          </div>
          <span class="px-2 transition-colors">{{ user.firstname }}</span>
          <span class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
          </span>
        </div>
        <div :class="menu1 ? menu1On : menu1Off" @click="menu1 = !menu1">
          <router-link to="/profile"
            class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
            <div class="flex items-center">
              <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                  <path fill="currentColor"
                        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                </svg>
              </span>
              <span class="px-2 transition-colors">{{ $t('leftbar.profile') }}</span>
            </div>
          </router-link>
          <router-link to="/settings"
            class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
            <div class="flex items-center">
              <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                  <path fill="currentColor"
                    d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"></path>
                </svg>
              </span>
              <span class="px-2 transition-colors">{{ $t('leftbar.settings') }}</span>
            </div>
          </router-link>
          <router-link to="/chat"
            class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
            <div class="flex items-center">
              <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                  <path fill="currentColor"
                    d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
                </svg>
              </span>
              <span class="px-2 transition-colors">{{ $t('leftbar.chat') }}</span>
            </div>
          </router-link>
          <!-- <hr class="hidden lg:block lg:my-0.5 dark:border-slate-700 border-t border-gray-100"> -->
        </div>
      </div>
      <router-link v-if="user.is_connected" @click="logout"
        class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center"
        to="/">
        <div class="flex items-center">
          <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor"
                d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
            </svg>
          </span>
          <span class="px-2 transition-colors lg:hidden">{{ $t('header.logout') }}</span>
        </div>
      </router-link>
      <ModalAuth v-if="user.is_connected !== true" modal_name="modal_name" type="login" :user="user"/>
    </slot>
  </div>
</template>

<style>
.max-h-screen-menu {
  max-height: calc(100vh - 3.5rem);
  height: max-content;
}
</style>