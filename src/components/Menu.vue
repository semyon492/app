<template>
    <div class="flex-col justify-between ">
      <div class="w-full">
        <ul class="">
          <li v-for="(info, idx) in infoTiles" :key="idx" class="">
            <router-link :to="info.link" class="flex content-center cursor-pointer py-3 text-blue-600 hover:text-black dark:text-white dark:text-slate-300 dark:hover:text-white">
              <div class="m-2">
                <img :src="info.img" class="rounded-circle img-xl" :alt="info.text">
              </div>
              <div class="m-2">
                {{ info.text }}
              </div>
            </router-link>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
import {authRefreshToken} from "@/api/user"
import imgMostRecent from '@/assets/images/mostRecent.png'
import imgFriends from '@/assets/images/friends.png'

// import Axios from "axios";
import {useI18n} from 'vue-i18n'

export default {
  name: 'MainMenu',
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },  
  components: {
    // ModalLang,
    // Tooltip
  },
  data() {
    return {
      infoTiles: [],
      modal_name: 'modalLang1',
      list: 'a',
      profile: {
        id: 0,
        first_name: 'Name',
        last_name: 'Surname',
        photo: '',
        is_connected: false,
        is_admin: false,
        access_token: '',
      },
    }
  },
  async mounted() {
    this.updateMenu()
  },
  methods: { 
    updateMenu(){
      authRefreshToken({
        access_token: localStorage.getItem('token')
      }).then((res_f) => {
        console.log(res_f)
        this.profile.id = res_f.data.id;
        this.profile.first_name = res_f.data.first_name;
        this.profile.last_name = res_f.data.last_name;        
        this.profile.photo_50 = res_f.data.photo_50;      
        this.infoTiles = ([
        {
          link: '/',
          text: this.t('leftbar.feed'),
          img: imgMostRecent,
        },
        {
          link: '/id' + res_f.data.id,
          text: this.t('leftbar.profile'),
          img: res_f.data.photo_50,
        },
        {
          link: '/friends/' + res_f.data.id,
          text: this.t('leftbar.friends'),
          img: imgFriends,
        },
        {
          link: '/chat',
          text: this.t('leftbar.chat'),
          img: imgMostRecent,
        },
        {
          link: '/settings',
          text: this.t('leftbar.settings'),
          img: imgMostRecent,
        },
        ]);      
    })
    }
  },  
}
</script>