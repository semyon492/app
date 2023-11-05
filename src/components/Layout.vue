<template>
  <NotificationGroup group="foo">
    <div
      class="z-40 fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white dark:bg-gray-700 rounded-lg shadow-md"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-blue-500">
              <svg viewBox="0 0 24 24" width="24" height="24" class="w-6 h-6 text-white fill-current">
                <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-blue-500">{{ notification.title }}</span>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>      
  <div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <header>
      <Navigation :user="user"/>
    </header>
    <RouterView :user="user"/>
    <footer>
      <Footer/>
    </footer>

  </div>
</template>

<script>
import {authRefreshToken} from "@/api/user"
import Navigation from '@/components/head/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PublicLayout',
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      loop_count: {
        type: Number,
        default: 0
      },
      user: {
        id: 0,
        first_name: '',
        last_name: '',
        photo: '',
        is_connected: false,
        is_admin: false,
        access_token: '',
      },
      access_token: null,      
    }
  },
  watch: {
    async access_token(new_access_token, old_access_token ) {
      // console.log(old_access_token)
      // if(old_access_token !== null )
        await this.userCheck()
    },
  },
  async mounted() {
    await this.userCheck()
    this.loop(0);
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
    loop(count){
      // count = this.loop_count
      // count++;
      // this.loop_count = 
      count++;
        
        // this.access_token = localStorage.getItem('token');
        // setTimeout(this.loop(count), 3000);
        setTimeout(() => {
          console.log(count);
          this.access_token = localStorage.getItem('token');
          return this.loop(count)
        }, 5000);
    },
  },
}
</script>