<template>
    <div class="flex-col justify-between ">
      <div class="w-full">
        <ul class="">
          <li v-for="(item, idx) in menu_list" :key="idx" class="">
            <router-link :to="item.link" class="flex content-center cursor-pointer py-3 text-blue-600 hover:text-black dark:text-white dark:text-slate-300 dark:hover:text-white">
              <div class="m-2">
                <img v-if="item.img_type == 'file'" :src="item.img" class="rounded-circle img-xl" :alt="item.text">
                <v-icon v-if="item.img_type == 'svg'" :name="item.img" size="24" />
              </div>
              <div class="m-2">
                {{ item.text }}
              </div>
            </router-link>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
import {authRefreshToken} from "@/api/user"
// import Axios from "axios";
import {useI18n} from 'vue-i18n'

export default {
  name: 'MainMenu',
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },  
  data() {
    return {
      menu_list: [],
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
        // console.log(res_f)
        this.profile.id = res_f.data.id;
        this.profile.first_name = res_f.data.first_name;
        this.profile.last_name = res_f.data.last_name;        
        this.profile.photo_50 = res_f.data.photo_50;      
        this.menu_list = ([
        {
          link: '/',
          text: this.t('leftbar.feed'),
          img: 'news',
          img_type: 'svg',
        },
        {
          link: '/id' + res_f.data.id,
          text: this.t('leftbar.profile'),
          img: res_f.data.photo_50,
          img_type: 'file',
        },
        {
          link: '/friends/' + res_f.data.id,
          text: this.t('leftbar.friends'),
          img: 'friends',
          img_type: 'svg',
        },
        {
          link: '/chat',
          text: this.t('leftbar.chat'),
          img: 'chat',
          img_type: 'svg',
        },
        {
          link: '/settings',
          text: this.t('leftbar.settings'),
          img: 'settings',
          img_type: 'svg',
        },
        ]);      
    })
    }
  },  
}
</script>