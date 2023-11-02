<template>
  <router-link to="/"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class=""><path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path></svg>
    </div>      
  </router-link>
  <router-link :to="'/friends/' + user.id"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class=""><path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z"></path></svg>
    </div>      
  </router-link>
  <router-link to="/chat"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg class=""  fill="none" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    </div>      
  </router-link>
  <router-link to="/chat"  v-if="user.is_connected" class="md:hidden flex text-blue-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <div class="flex flex-col justify-items-center justify-center content-center items-center px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent">
      <svg class=""  width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  
        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </svg>
    </div>      
  </router-link>  

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
      <router-link
        class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center"
        to="/search/">
        <div class="flex items-center">
          <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
            <svg class="inline-block"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
              <path stroke="none" d="M0 0h24v24H0z"/>  
              <circle cx="10" cy="10" r="7" />  
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>            
          </span>
          <span class="px-2 transition-colors lg:hidden">{{ $t('header.logout') }}</span>
        </div>
      </router-link>
      <div v-if="user.is_connected"
           class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black lg:py-2 lg:px-3">
        <div class="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0"
             @click="menu1 = !menu1">
          <div class="w-6 h-6 mr-3 inline-flex">
            <img
              :src="user.photo_50"
              :alt="user.first_name" class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800">
          </div>
          <span class="px-2 transition-colors">{{ user.first_name }}</span>
          <span class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
          </span>
        </div>
        <div :class="menu1 ? menu1On : menu1Off" @click="menu1 = !menu1">
          <router-link :to="'/id' + user.id"
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
      <div @click="theme"
        class="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center">
        <div class="flex items-center">
          <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
              <path fill="currentColor" d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"></path>
            </svg>
          </span>
          <span class="px-2 transition-colors lg:hidden">{{ $t('header.light_dark') }}</span>
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

<script>
// import {authRefreshToken} from "@/api/user"
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
  },
  async mounted() {
    this.access_token = localStorage.getItem('token');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }    
  },
  methods: {
    async userCheck() {
      if (!!localStorage.getItem('token')) {
        this.user.is_connected = true;
        this.user.access_token = localStorage.getItem('token');
        this.access_token = localStorage.getItem('token');
      }
      // authRefreshToken({}).then((res) => {
      //   if (res.status !== 20) {
      //     this.user.first_name = res.data.first_name;
      //     this.user.last_name = res.data.last_name;
      //     this.user.id = res.data.id;
      //     this.user.photo_50 = res.data.photo_50;
      //     if (res.roles == 'ROLE_ADMIN') {
      //       this.user.is_admin = true;
      //     }
      //   } else {
      //     localStorage.removeItem('token')
      //     this.user.is_connected = false;
      //     this.user.is_admin = false;
      //     this.access_token = null;
      //   }
      // })
    },
    logout() {
      localStorage.removeItem('token')
      // localStorage.token = '';
      // localStorage.setItem('token', null);
      this.user.is_connected = false;
      this.user.is_admin = false;
      this.access_token = null;
      this.user.first_name = null;
      this.user.last_name = null;
      this.user.id = null;
    },
    theme(){
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'      
        // localStorage.setItem('theme', 'light');    
      } else {      
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')   

      }

        // localStorage.setItem('theme', 'dark');
        // localStorage.setItem('theme', 'light');    
    },    
  },

};
</script>

<style>
.max-h-screen-menu {
  max-height: calc(100vh - 3.5rem);
  height: max-content;
}
</style>