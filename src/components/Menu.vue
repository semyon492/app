<template>
    <div class="flex-col justify-between ">
      <div class="w-full">
        <ul class="">
          <li v-for="(info, idx) in infoTiles" :key="idx" :to="info.link"
              class="">
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
    this.infoTiles = ([
      {
        link: '/',
        text: this.t('leftbar.feed'),
        img: imgMostRecent,
      },
      {
        link: '/profile',
        text: this.t('leftbar.profile'),
        img: imgPp,
      },
      {
        link: '/',
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