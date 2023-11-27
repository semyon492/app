<template>
  <NotificationView :user="user"/>  
  <div class="h-screen bg-gray-100 dark:bg-[#18191a] dark:text-slate-100">
    <nav v-if="$route.name != 'chat'" class="bg-white dark:dark:bg-[#242526] h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-[#3a3b3c]">
      <div class="flex items-center justify-between w-full md:w-max px-4 py-2">
          <router-link to="/" class="mr-2 hidden md:inline-block">
            <svg width="16" height="16" viewBox="0 0 1024 1024" class="inline-block">
              <path
                d="M877.387 523.945c-1.663 198.958-163.571 360.868-362.532 362.531-198.991 1.661-360.885-166.07-362.526-362.531-0.697-83.354-130.015-83.42-129.318 0 1.064 127.401 49.851 247.752 136.97 340.531 86.427 92.047 208.144 143.457 333.116 150.77 127.267 7.454 251.374-40.885 347.279-122.774 96.086-82.04 150.659-201.304 164.166-325.296 1.565-14.352 2.04-28.805 2.16-43.23 0.697-83.421-128.618-83.355-129.315-0.001z"
                fill="#4A5699"/><path
              d="M152.329 500.646c1.662-198.965 163.563-360.875 362.526-362.537 83.354-0.697 83.419-130.013 0-129.317-129.524 1.081-252.396 51.567-345.385 141.68C75.465 241.564 24.097 370.538 23.011 500.646c-0.697 83.421 128.62 83.349 129.318 0z"
              fill="#C45FA0"/><path
              d="M400.998 617.112c-54.167-72.265-46.168-154.096 21.221-212.268 63.03-54.412 156.255-33.802 209.578 32.46 22.13 27.497 68.54 22.901 91.441 0 26.914-26.917 22.073-64.009 0-91.44-89.215-110.859-259.653-132.629-373.618-47.204-118.817 89.062-151.202 262.422-60.284 383.718 21.095 28.142 55.432 42.548 88.465 23.196 27.799-16.282 44.387-60.192 23.197-88.462z"
              fill="#E5594F"/><path
              d="M628.723 433.281c30.673 40.924 38.604 71.548 34.179 119.265 0.715-5.845 0.408-4.79-0.924 3.173-1.3 6.769-3.259 13.386-5.207 19.983-4.113 13.896-2.982 9.9-9.75 22.736-11.978 22.716-23.474 34.203-45.271 51.746-27.499 22.131-22.904 68.538 0 91.441 26.914 26.913 64.011 22.075 91.439 0 110.85-89.224 132.613-259.649 47.193-373.614-21.092-28.142-55.431-42.546-88.466-23.196-27.799 16.287-44.384 60.193-23.193 88.466z"
              fill="#F39A2B"/>
            </svg>            
              <!-- <img src="./images/fb-logo.png" alt="logo" class="w-24 sm:w-20 lg:w-10 h-auto"> -->
          </router-link>
          <router-link to="/" class="inline-block md:hidden">
            {{ name }}
              <!-- <img src="./images/fb-logo-mb.png" alt="" class="w-32 h-auto"> -->
          </router-link>
          <div class="flex items-center justify-between space-x-1">
            <router-link to="/search/" class="relative bg-gray-100 dark:bg-[#3a3b3c] px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                <!-- <i class='bx bx-search-alt-2 text-xl xl:mr-2 dark:text-[#b8bbbf]'></i> -->
                <s-icon name="search"  class='bx bx-search-alt-2 text-xl xl:mr-2 dark:text-[#b8bbbf]'/>
                <input type="text" placeholder="Search" class="outline-none bg-transparent hidden xl:inline-block">
            </router-link>
            <div class="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-[#3a3b3c] rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-[#b8bbbf]">
                <s-icon name="messages" class="inline-block" size="20"/>
            </div>
            <div @click="logout" v-if="user.is_connected" class="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-[#3a3b3c] rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-[#b8bbbf]" id="dark-mode-toggle-mb">
              <s-icon name="logout" class="inline-block" size="20"/>
            </div>
          </div>
      </div>
      <ul class="flex w-full lg:w-max items-center justify-center" v-if="user.is_connected">
          <li class="w-1/5 md:w-max text-center">
              <router-link :to="{ name: 'home' }" v-slot="{ href, route, navigate, isActive, isExactActive }">
                <div 
                  :class="[
                    
                    ($route.name == 'home') && 'router-link-active text-blue-500 border-b-4 border-blue-500',
                    'w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-[#3a3b3c] dark:text-[#b8bbbf] relative',
                  ]"
                >
                  <i class='bx bxs-home'></i>
                  <s-icon name="home"  size="30"/>
                </div>
              </router-link>
          </li>
          <li class="w-1/5 md:w-max text-center">
              <router-link  :to="'/friends/' + user.id" v-slot="{ href, route, navigate, isActive, isExactActive }">
                <div 
                  :class="[
                    isActive && 'router-link-active text-blue-500 border-b-4 border-blue-500',
                    'w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-[#3a3b3c] dark:text-[#b8bbbf] relative',
                  ]"
                >
                  <s-icon name="people" size="30" />
                  <span class="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">9+</span>
                </div>
              </router-link>
          </li>
          <li class="w-1/5 md:w-max text-center">
              <router-link :to="'/chat/'" v-slot="{ href, route, navigate, isActive, isExactActive }">
                <div 
                  :class="[
                    isActive && 'router-link-active text-blue-500 border-b-4 border-blue-500',
                    'w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-[#3a3b3c] dark:text-[#b8bbbf] relative',
                  ]"
                >
                  <s-icon name="messages"  size="30"/>
                </div>
              </router-link>
          </li>
          <!-- <li class="w-1/5 md:w-max text-center">
              <a href="#" class="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-[#3a3b3c] dark:text-[#b8bbbf] relative">
                <v-icon name="video"  size="30"/>
              </a>
          </li>
          <li class="w-1/5 md:w-max text-center hidden md:inline-block">
              <a href="#" class="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-[#3a3b3c] dark:text-[#b8bbbf] relative">
                <v-icon name="video"  size="30"/>
                  <span class="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">9+</span>
              </a>
          </li> -->
          <li @click="menu = !menu" class="w-1/5 md:w-max text-center inline-block md:hidden">
              <a href="#" class="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-[#3a3b3c] dark:text-[#b8bbbf] relative">
                <s-icon name="menu"  size="30"/>
              </a>
          </li>

          <div v-if="menu == 2" class="'text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-[#242526] dark:border-slate-700" @click="menu1 = !menu1">
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

        <div v-if="menu" @click="menu = !menu" class="origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 right-0" style="">
          <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700">
            <div class="font-medium text-slate-800 dark:text-slate-100">{{ user.first_name }}</div>
            <!-- <div class="text-xs text-slate-500 dark:text-slate-400 italic">Administrator</div> -->
          </div>
          <ul>
            <li>
              <router-link :to="'/id' + user.id" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3">Profile</router-link>
            </li>
            <li>
              <a href="/signin" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3">Sign Out</a>
            </li>
          </ul>          
          <ul>
            <li>
              <router-link to="/settings/account" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3">Settings</router-link>
            </li>
            <li>
              <a href="" @click="logout" v-if="user.is_connected" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3">Sign Out</a>
            </li>
          </ul>
        </div>

      </ul>
      <ul class="hidden md:flex mx-4 items-center justify-center">
          <li v-if="user.is_connected" class="h-full hidden xl:flex">
              <a @click="menu = !menu" class="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-[#3a3b3c] mx-1">
                  <img :src="user.photo_50" :alt="user.first_name" class="rounded-full h-7 w-7">
                  <span class="mx-2 font-semibold dark:text-[#b8bbbf]">{{ user.first_name }}</span>
              </a>
          </li>
          <li v-if="user.is_connected">
              <div class="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-[#3a3b3c] dark:text-[#b8bbbf] rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                <s-icon name="messages" class="inline-block" size="20"/>
              </div>
          </li>
          <li v-if="user.is_connected">
              <div @click="notify = !notify" class="text-xl grid place-items-center bg-gray-200 dark:bg-[#3a3b3c] dark:text-[#b8bbbf] rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                <s-icon name="notify" class="inline-block" size="20"/>
                <span class="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">9</span>
              </div>
              <div v-if="notify" class="origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 right-0" style="">
                <div class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-4">Notifications</div>
                <ul>
                  <li @click="notify = false" class="border-b border-slate-200 dark:border-slate-700 last:border-0">
                    <a aria-current="page" href="/#0" class="router-link-active router-link-exact-active block py-2 px-4 hover:bg-slate-50 dark:hover:bg-slate-700/20">
                      <span class="block text-sm mb-2">📣 <span class="font-medium text-slate-800 dark:text-slate-100">Edit your information in a swipe</span> 
                      Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                      </span>
                      <span class="block text-xs font-medium text-slate-400 dark:text-slate-500">Feb 12, 2021</span>
                    </a>
                </li>
                <li @click="notify = false" class="border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <a aria-current="page" href="/#0" class="router-link-active router-link-exact-active block py-2 px-4 hover:bg-slate-50 dark:hover:bg-slate-700/20">
                    <span class="block text-sm mb-2">📣 <span class="font-medium text-slate-800 dark:text-slate-100">Edit your information in a swipe</span> 
                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                    </span>
                    <span class="block text-xs font-medium text-slate-400 dark:text-slate-500">Feb 9, 2021</span>
                  </a>
                </li>
              </ul>
            </div>              
          </li>
          <li @click="theme">
              <div class="text-xl grid place-items-center bg-gray-200 dark:bg-[#3a3b3c] dark:text-[#b8bbbf] rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                <s-icon name="theme" class="inline-block" size="20"/>
              </div>
          </li>
          <li @click="logout" v-if="user.is_connected">
              <div class="text-xl grid place-items-center bg-gray-200 dark:bg-[#3a3b3c] dark:text-[#b8bbbf] rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative" id="dark-mode-toggle">
                <s-icon name="logout" class="inline-block" size="20"/>
              </div>
          </li>
          <!-- <li v-if="!user.is_connected">
              <div class="text-xl grid place-items-center bg-gray-200 dark:bg-[#3a3b3c] dark:text-[#b8bbbf] rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative" id="dark-mode-toggle">
                <v-icon name="login" class="inline-block" size="20"/>
              </div>
          </li> -->
          <ModalAuth v-if="user.is_connected !== true" modal_name="modal_name" type="login" :user="user"/>

      </ul>
      
    </nav>      
    <!-- <header v-if="user == '1'"> -->
      <!-- <Navigation :user="user"/> -->
    <!-- </header> -->
    <div :class="[
      $route.name != 'chat' && 'w-full pt-32 lg:pt-16'
      ]">
      <RouterView :user="user"/>
    </div>
    
    <footer v-if="$route.name != 'chat'">
      <Footer/>
    </footer>

  </div>
</template>

<script>
import {authRefreshToken} from "@/api/user"
// import Navigation from '@/components/head/Navigation.vue'
import Footer from '@/components/Footer.vue'

import sIcon from '@/ui/s-icon.vue'

import NotificationView from '@/components/notify/NotificationView.vue'
import ModalAuth from '@/components/modals/ModalAuth.vue'

export default {
  name: 'PublicLayout',
  components: {
    // Navigation,
    Footer,
    NotificationView,
    sIcon,
    ModalAuth,
  },
  data() {
    return {
      user: {
        id: 0,
        first_name: '',
        last_name: '',
        photo: '',
        is_connected: false,
        is_admin: false,
        access_token: '',
      },
      name: import.meta.env.VITE_APP_NAME,
      access_token: null,     
      menu: false,
      notify: false,
      centerMenu: {
        home: true,

      }
    }
  },
  watch: {
    async access_token(new_access_token, old_access_token ) {
      // console.log(old_access_token)
      // if(old_access_token !== null )
      if(old_access_token !== new_access_token )
        await this.userCheck()
    },
  },
  async mounted() {
    await this.userCheck()
  },
  methods: {
    async userCheck() {
      if(localStorage.getItem('token') == null){
        localStorage.removeItem('token')
        this.user.is_connected = false;
        this.user.is_admin = false;
        this.access_token = null;
        this.user.first_name = null;
        this.user.last_name = null;
      }

      if (!!localStorage.getItem('token')) {
        this.user.is_connected = true;
        this.user.access_token = localStorage.getItem('token');
        this.access_token = localStorage.getItem('token');
        authRefreshToken({}).then((res) => {
          if (res.status !== 20) {
            this.user.first_name = res.data.first_name;
            this.user.last_name = res.data.last_name;
            this.user.id = res.data.id;
            this.user.photo_50 = res.data.photo_50;
            if (res.roles == 'ROLE_ADMIN') {
              this.user.is_admin = true;
            }
          } else {
            localStorage.removeItem('token')
            this.user.is_connected = false;
            this.user.is_admin = false;
            this.access_token = null;
          }
        })
      } else {
        this.user.is_connected = false;
        this.user.is_admin = false;
        this.access_token = null;
      }
    },
    logout() {
      localStorage.removeItem('token')
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
    },  
    activeMenu(item) {

    },
    checkActiveMenu(item) {

    },
  },
}
</script>

<style>
</style>