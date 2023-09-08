<template>
          <div class="absolute">
            <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
              <div id="left-bar-top" class="w-full">
                <ul class="nav flex-column">
                  <li v-for="(info, idx) in infoTiles" :key="idx" :to="info.link" class="nav-item d-flex align-items-center gap-2 px-3 py-2">
                    <router-link :to="info.link" class="nav-link d-flex align-items-center">
                        <div class="">
                          <img :src="info.img" class="rounded-full w-9" :alt="info.text">
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
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Privacy</router-link>·
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Terms</router-link>·
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Adversiting</router-link>·
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Ad Choices</router-link>·
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Cookies</router-link>·<br>
                  <router-link to="/privacy-and-terms" class="cursor-pointer">More</router-link>·
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

export default {
    name:'Menu',
    props: ['user'],
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
            text: 'Feed',
            img: imgMostRecent,
        },       
        {
            link: '/profile',
            text: 'Profile',
            img: imgPp,
        },
        {
            link: '/',
            text: 'Friends',
            img: imgFriends,
        },         
        {
            link: '/chat',
            text: 'Chat',
            img: imgMostRecent,
        },
        {
            link: '/settings',
            text: 'Настройки',
            img: imgMostRecent,
        },

        ]);
    },    
}
</script>