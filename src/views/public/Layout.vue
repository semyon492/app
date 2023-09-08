<template>
    <div id="content1">
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
import config from "/config"
import "bootstrap/dist/css/bootstrap.min.css"

export default{
    name:'PublicLayout',
    components: {
        Navigation,
        Footer
    },
    data() {
        return {
            user : {
                firstname: '',
                lastname: '',
                is_connected: false,
                is_admin: false,
                access_token :  '',
            },
        }
  },    
    async mounted() {
    this.user.is_connected = false;
    if (!!localStorage.getItem('token')){
      this.user.is_connected = true;
      this.user.access_token = localStorage.getItem('token');
    }     
    await Axios.post(config.domain + "account/getinfo", {
                access_token: localStorage.getItem('token')
        })
        .then(res => {
            if(res.data.status !== 20 ){
                this.user.firstname = res.data.data.firstname;
                this.user.lastname = res.data.data.lastname;
                if(res.data.roles == 'ROLE_ADMIN'){
                    this.user.is_admin = true;
                }                 
            }else{
              localStorage.removeItem('token')
              this.user.is_connected = false;
              this.user.is_admin = false;
            }

        })
  },
  methods: {
    logout(){
            localStorage.removeItem('token')
            this.user.is_connected = false;
            this.user.is_admin = false;
        }
  },
}
</script>