<template>
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
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import Axios from "axios"
// import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'PublicLayout',
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        is_connected: false,
        is_admin: false,
        access_token: '',
      },
      access_token: null,
    }
  },
  watch: {
    async access_token(new_access_token) {
      await this.userCheck()
    },
  },
  async mounted() {
    await this.userCheck()

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   localStorage.theme = 'dark'
    //   // localStorage.setItem('theme', 'dark');
    //   document.documentElement.classList.add('dark')      
    // } else {      
    //   document.documentElement.classList.remove('dark')
    //   localStorage.theme = 'light'
    //   // localStorage.setItem('theme', 'light');
    // }
  },
  methods: {
    async userCheck() {
      if(localStorage.getItem('token') == null){
        localStorage.removeItem('token')
      }

      if (!!localStorage.getItem('token')) {
        this.user.is_connected = true;
        this.user.access_token = localStorage.getItem('token');
        this.access_token = localStorage.getItem('token');
        await Axios.post(import.meta.env.VITE_DOMAIN_API + "account/getinfo", {
          access_token: localStorage.getItem('token')
        })
        .then(res => {
          if (res.data.status !== 20) {
            this.user.firstname = res.data.data.firstname;
            this.user.lastname = res.data.data.lastname;
            if (res.data.roles == 'ROLE_ADMIN') {
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
      // this.user.firstname = null;
      // this.user.lastname = null;
    }
  },
}
</script>