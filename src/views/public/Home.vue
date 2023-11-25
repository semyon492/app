<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="">
        <div class="grid grid-cols-11 md:gap-x-12 px-3 sm:px-7 md:px-10 relative ">
          <div class="col-span-11 md:col-span-3 relative order-1 ">
            <MainMenu />
          </div>
          <div class="col-span-11 md:col-span-5 shrink-0 order-3 md:order-2 ">
            <div>
              <ModalWall modal_name="modal_wall" :user="user" :profile_id="user.id"/>
              <div class="w-full text-center text-xl font-semibold pt-[20vh] flex-col " v-if="wall_num == 0">
                <div>{{ $t('profile.no_post_found') }}</div>
              </div>
              <div class="mb-4"></div>
              <Walls :user="user" :walls="walls" @remove="remove"/>
            </div>
          </div>
          <div class="col-span-11 md:col-span-3 relative order-2 md:order-3 ">
            <div class="bg-white shadow-post dark:bg-[#242526] rounded-lg py-4 px-5 md:fixed w-full md:w-[25%] mr-12 mb-4 md:mb-0 ">
              <div class="flex items-center justify-between text-[#8e8e8e] dark:text-[] font-semibold mb-2 ">
                Suggestion to you
                <button class="text-[#262626] dark:text-[#bbbbbb] text-xs font-semibold ">See all</button>
              </div>
              <div class="flex items-center  py-1.5 ">
                <div class="flex items-center gap-x-1.5 " role="button">
                  <img :src="demo_ava" alt="avatar" class="w-9 h-9 object-cover rounded-full  ">
                  <div bis_skin_checked="1">
                    <div class="font-semibold text-sm flex items-center gap-x-0.5 ">
                      <span>Flower</span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="text-[17px] text-white rounded-full bg-sky-500 " height="1em" width="1em">
                        <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                      </svg>
                    </div>
                    <div class="text-[12px] text-[#8e8e8e] ">Nhìn đời rơi lệ :)))</div>
                  </div>
                </div>
                <button class="text-sky-600 ml-auto text-[13px] font-semibold ">Follow</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
import Axios from "axios";
import MainMenu from '@/components/head/Menu.vue'
import Main from '@/components/Main.vue'

import ModalWall from '@/components/modals/ModalWall.vue'
import Walls from '@/components/walls/Walls.vue'

export default {
  name: 'Home',
  components: {
    MainMenu,
    Main,
    ModalWall,
    Walls
  },
  props: ['user'],
  data() {
    return {
      demo_ava: 'https://api.rapigram.ru/images/no_ava.gif',
      wall_num: 0,
      walls: []
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Feed';
      }
    },
  },
  async mounted() {    
    if(!this.user.is_connected){
      document.title = import.meta.env.VITE_APP_NAME
    }else{
      document.title = 'Feed | ' + import.meta.env.VITE_APP_NAME
      await this.get_feed()
    }
  },
  methods: {
    async get_feed(){
      await Axios.post(import.meta.env.VITE_DOMAIN_API + "feed/all", {
        access_token: localStorage.getItem('token'),        
        page: 1,
      })
      .then(res => {
        if (res.data.status == 1) {
          this.walls = res.data.data.walls;
          // this.wall_num = res.data.data.wall_num;
        } else {
        }
      })
    },    
    remove(index){
      //update walls
      // this.walls.splice(this.index);
      // console.log(index)
    }
  },
}
</script>
<style scoped>
.posts{
  height: auto; 
  overflow: auto;
}
</style>