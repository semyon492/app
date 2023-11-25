<template>
  <main >
    <div class="min-h-screen w-[98.5vw] overflow-x-hidden pb-7 ">
      <Jumbotron :profile="profile" :id="id" />
      <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4 ">
        <div class="w-full sm:grid grid-cols-5 gap-x-4 ">
          <div class="col-span-2">
            <div class="mb-4 ">
              <div v-if="edit == false" class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post ">
                <div class="text-2xl font-extrabold dark:text-[#e4e6eb] ">{{ $t('profile.intro') }}</div>
                <div class="text-center mt-4 px-[20%] text-[15px] flex items-center justify-center gap-x-1 false ">
                  {{ profile.bio }}
                  <div class="hidden">
                    <div style="fill: rgb(247, 247, 247); height: 25px; width: 25px;">
                      <svg viewBox="0 0 32 32">
                        <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
                          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animate>
                        </circle>
                        <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
                          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animate>
                        </circle>
                        <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
                          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animate>
                        </circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <button v-if="profile.owner && user.is_connected" @click="edit = true" class="mt-3 py-2 w-full bg-[#afb1b5]/30 hover:bg-[#afb1b5]/50 dark:bg-[#4E4F50]/50 dark:hover:bg-[#4E4F50] transition-20 rounded-md font-semibold ">{{ $t('profile.edit_bio') }}</button>
              
              </div>
              <div v-if="edit == true" class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post ">
                <div class="text-2xl font-extrabold dark:text-[#e4e6eb] ">{{ $t('profile.intro') }}</div>
                <form class="flex items-center flex-col " @submit.prevent="bio">
                  <input type="text" class="bg-inherit border-[1px] rounded-full px-4 py-2 w-[70%] my-3 " :placeholder="profile.bio" v-model="form_edit_bio.bio">
                  <div class="flex gap-x-1.5 ">
                    <button class="bg-[#4E4F50]/20 dark:bg-[#4E4F50]/50 hover:text-white rounded-lg hover:bg-[#4E4F50] transition-50 w-[80px] py-1 " type="submit">{{ $t('profile.save') }}</button>
                    <button class=" w-[80px] bg-red-300 hover:text-white dark:bg-red-800 rounded-lg hover:bg-red-600 transition-50 " @click="edit = false" type="reset">{{ $t('profile.cancel') }}</button>
                  </div>
                </form>
              </div>
              <div class="mt-4">
                <div class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post">
                  <div class="flex justify-start items-center">
                    <router-link :to="'/albums/' + id" class="text-2xl font-extrabold dark:text-[#e4e6eb] ">{{ $t('profile.photo') }}</router-link>
                  </div>
                  <div class="grid grid-cols-2 gap-2 p-3" v-if="profile.albums">
							<div>
								<a href="#" class="p-1.5 flex flex-shrink-0 items-center justify-center">
									<v-avatar initials="JD" size="xl"></v-avatar>
								</a>
								<div class="text-center truncate -mx-1">
									<a href="#" class="text-blue-800 text-sm hover:underline font-medium">1</a>
								</div>
							</div>
							<div>
								<a href="#" class="p-1.5 flex flex-shrink-0 items-center justify-center">
									<v-avatar initials="JD" size="xl"></v-avatar>
								</a>
								<div class="text-center truncate -mx-1">
									<a href="#" class="text-blue-800 text-sm hover:underline font-medium">2</a>
								</div>
							</div>
						      </div>                  
                  <div v-if="!profile.albums" class="grid grid-cols-3 grid-rows-0 rounded-lg gap-1 mt-3 ">
                    <div class="text-center my-3 col-span-3 ">{{ $t('profile.no_image_found') }}</div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post">
                  <div class="flex justify-start items-center">
                    <router-link :to="'/friends/' + id" class="text-2xl font-extrabold dark:text-[#e4e6eb] ">{{ $t('profile.friends') }}</router-link>
                  </div>
                  <div v-if="profile.friends" class="grid grid-cols-3 gap-3 p-3" v-for="(item, index) in profile.friends">
                    <div>
                      <a href="#" class="p-1.5 flex flex-shrink-0 items-center justify-center">
                        <v-avatar :img="item.ava" rounded></v-avatar>
                      </a>
                      <div class="text-center truncate -mx-1">
                        <router-link :to="'/id' + item.user_id" class="text-blue-800 text-sm hover:underline font-medium">
                          {{ item.name }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div v-if="!profile.friends" class="grid grid-cols-3 grid-rows-0 rounded-lg gap-1 mt-3 ">
                    <div class="text-center my-3 col-span-3 ">{{ $t('profile.no_friends_found') }}</div>
                  </div>
                </div>
              </div>              
            </div>
          </div>
          <div class="col-span-3 ">
            <div>
              <ModalWall v-if="user.is_connected" modal_name="modal_wall" :user="user" :profile_id="profile.id"/>
              <div class="w-full text-center text-xl font-semibold pt-[20vh] flex-col " v-if="wall_num == 0">
                <div>{{ $t('profile.no_post_found') }}</div>
              </div>
              <div class="mb-4"></div>
              <Walls :user="user" :walls="walls" @remove="remove"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { fetchProfile } from "@/api/user"
import Axios from "axios";

import ModalWall from '@/components/modals/ModalWall.vue'
import Walls from '@/components/walls/Walls.vue'

import Jumbotron from '@/components/profile/Jumbotron.vue'

export default {
  name: 'ProfilePage',
  components: {
    ModalWall,
    Walls,
    Jumbotron,
  },
  props: ['user','id'],
  data() {
    return {
      profile: {
        first_name: 'Profile',
        last_name: '',
        owner: false,
      },
      wall_num: 0,
      walls: [],
      user_data: this.user,
      edit: false,
      form_edit_bio: {
        bio: ''
      },
      routeName: null,     
    }
  },
  // computed: {
  //   currentRouteName() {
  //       return this.$route.name;
  //   }
  // },  
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          this.get_profile_id(to.params.id)
        document.title = to.meta.title || 'Profile';
      }
    },
  },
  async mounted() {
    await this.get_profile_id(this.id)
  },
  methods: {
    async get_profile_id(user_id){
      fetchProfile({
        id: user_id
      }).then((res) => {
        if (res.status == 1) {
          this.profile.id = res.data.id;
          this.profile.first_name = res.data.first_name;
          this.profile.last_name = res.data.last_name;
          this.profile.photo = res.data.photo;        
          this.profile.photo_50 = res.data.photo_50;
          this.profile.photo_100 = res.data.photo_100;
          this.profile.owner = res.data.owner;
          this.profile.bio = res.data.bio;
          this.profile.walls = res.data.walls;
          this.profile.friends = res.data.friends;
          this.profile.albums = res.data.albums;
          this.walls = res.data.walls;
          this.wall_num = res.data.wall_num;

          document.title = this.profile.first_name + ' ' + this.profile.last_name
        } else {
        }
      })
    },    
    async bio(){
      Axios.post(import.meta.env.VITE_DOMAIN_API + "account/change_bio", {
        access_token: localStorage.getItem('token'),
        bio: this.form_edit_bio.bio
      })
      .then(res => {
        if (res.data.status == 1) {
          this.profile.bio = this.form_edit_bio.bio;
          this.edit = false;
        }else{
          this.edit = false;
        }
      })      
    },
    remove(index){
      //update walls
      // this.walls.splice(this.index);
      // console.log(index)
    },
    currentRouteName() {
        return this.$route.name;
    }
  },
}
</script>