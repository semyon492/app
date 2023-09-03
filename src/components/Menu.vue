<template>
          <div class="absolute">
            <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
              <div id="left-bar-top" class="w-full">
                <ul>
                    <li v-for="(info, idx) in infoTiles" :key="idx" :to="info.link" class="d-flex align-items-center gap-2 px-3 py-2">
                        <router-link :to="info.link" >              
                            <img :src="info.img" class="rounded-full w-9" :alt="info.text">
                            <span class="text-myGray-800 font-bold text-tiny">{{ info.text }}</span>
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
            img: 'https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png',
        },
        {
            link: '/profile',
            text: this.user.firstname + ' ' + this.user.lastname,
            img: 'https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg',
        },
        {
            link: '/chat',
            text: 'Chat',
            img: 'https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png',
        },
        {
            link: '/settings',
            text: 'Настройки',
            img: 'https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png',
        },

        ]);
    },    
}
</script>

<style>
</style>