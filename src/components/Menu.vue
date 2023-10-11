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
import imgMostRecent from '@/assets/images/mostRecent.png'
import imgPp from '@/assets/images/pp.jpg'
import imgFriends from '@/assets/images/friends.png'

import Axios from "axios";
import {useI18n} from 'vue-i18n'

// import Tooltip from '../components/Tooltip.vue'
// import ModalLang from '../components/ModalLang.vue'

export default {
  name: 'MainMenu',
  props: ['user'],
  components: {
    // ModalLang,
    // Tooltip
  },
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      infoTiles: [],
      modal_name: 'modalLang1',
      list: 'a',
    }
  },
  async mounted() {
    if(this.user.id == 0){
      await Axios.post(import.meta.env.VITE_DOMAIN_API + "account/getinfo", {
        access_token: localStorage.getItem('token')
      })
      .then(res => {
        this.user.first_name = res.data.data.first_name;
        this.user.last_name = res.data.data.last_name;
        this.user.id = res.data.data.user_id;
      })
    }
    this.infoTiles = ([
      {
        link: '/',
        text: this.t('leftbar.feed'),
        img: imgMostRecent,
      },
      {
        link: '/id' + this.user.id,
        text: this.t('leftbar.profile'),
        img: this.user.photo_50,
      },
      {
        link: '/friends/' + this.user.id,
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
  },
}
</script>