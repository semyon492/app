<template>
  <NotificationView />
  <div class="bg-gray-50 dark:bg-[#242526] dark:text-slate-100">
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
import Navigation from '@/components/admin/Navigation.vue'
import Footer from '@/components/Footer.vue'

import NotificationView from '@/components/notify/NotificationView.vue'

export default {
  name: 'PublicLayout',
  components: {
    Navigation,
    Footer,
    NotificationView,
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
      access_token: null,
    }
  },
  watch: {
    async access_token(new_access_token, old_access_token ) {
      // console.log(old_access_token)
      if(old_access_token !== null )
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
    }
  },
}
</script>