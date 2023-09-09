<template>
          <div class="absolute">
            <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
              <div id="left-bar-top" class="w-full">
                <ul class="nav flex-column">
                  <li v-for="(info, idx) in infoTiles" :key="idx" :to="info.link" class="nav-item d-flex align-items-center gap-2 px-3 py-1">
                    <router-link :to="info.link" class="nav-link d-flex align-items-center py-0">
                        <div class="">
                          <img :src="info.img" class="rounded-circle img-xl" :alt="info.text">
                        </div>
                        <div class="">
                          {{ info.text }}
                        </div>
                    </router-link>
                  </li>
                </ul>

              </div>
              <div id="footer" class="w-full hidden 2xl:block">
                <div class="text-muted text-xs pl-1 mb-14">
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">{{ $t('footer.privacy') }}</router-link>·
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">{{ $t('footer.terms') }}</router-link>·
                    <ModalLang />
                  <a>{{ name }} © 2023</a>
                </div>
              </div>
            </div>
          </div>       
</template>

<script>
import config from "/config";

import imgMostRecent from '@/assets/images/mostRecent.png'
import imgPp from '@/assets/images/pp.jpg'
import imgFriends from '@/assets/images/friends.png'

import { useI18n } from 'vue-i18n'

import Tooltip from '../components/Tooltip.vue'
import ModalLang from '../components/ModalLang.vue'

export default {
    name:'Menu',
    props: ['user'],
    components: {
        ModalLang,
        Tooltip
    },    
    setup() {
        // use global scope
        const { t, locale } = useI18n()
        return { t, locale }
    },
    data() {
        return {      
            infoTiles : [], 
            name: config.title,      
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