<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="min-h-screen w-[98.5vw] overflow-x-hidden pb-7 ">
      <div class="pt-[50px] md:pt-[75px] md:px-[15%] w-full dark:bg-[#242426] bg-white overflow-x-hidden ">
        <div class="flex flex-col sm:flex-row mx-10 sm:items-start gap-x-4 border-b-[1px] dark:border-b-white/10 border-b-black/10 items-center ">
          <img :src="profile.photo_100" alt="avatar" class="w-[170px] h-[170px] rounded-full object-cover translate-y-[-32px] shrink-0  dark:border-white border-4 border-black/50 ">
          <div class="flex flex-col sm:flex-row w-full justify-between items-center sm:items-end pt-4 translate-y-[-32px] sm:translate-y-[0] ">
            <div>
              <div class="flex justify-center">
                <div class="text-[32px] font-bold md:flex items-center gap-x-1 ">
                  <div class="text-center flex items-center justify-center ">{{ profile.first_name }} {{ profile.last_name }}</div>
                </div>
              </div>
              <div class="dark:text-[#b0b3b8] font-semibold text-[17px] flex gap-x-1.5 items-center text-[#65676b] justify-center sm:justify-start">
                <span class="cursor-pointer flex-shrink-0 ">{{ $t('profile.followers') }}: 2</span>
              </div>
            </div>
            <div class="flex mt-4 sm:mt-0 flex-shrink-0 " v-if="profile.owner">
              <router-link to="/edit" class="flex gap-x-1 items-center font-semibold px-3 py-2 bg-[#D8DADF]/50 hover:bg-[#D8DADF] dark:bg-[#4E4F50]/50 dark:hover:bg-[#4E4F50] transition-20 rounded-md ">
                <Icon type="edit"/>
                {{ $t('profile.edit_profile') }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex mx-0 sm:mx-10 ">
          <ul class="flex items-center justify-between w-full px-16 py-1 gap-x-10 ">
            <li class="li-profile active ">
              <router-link :to="'/id' + id" class="text-black dark:text-white p-1">{{ $t('profile.posts') }}</router-link>
            </li>
            <li class="li-profile false ">
              <router-link :to="'/friends/' + id" class="text-black dark:text-white p-1">{{ $t('profile.friends') }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4 ">
        <div class="w-full sm:grid grid-cols-5 gap-x-4 ">
          <div class="col-span-2">
            <div class="mb-4 ">
              <div v-if="edit == false" class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post ">
                <div class="text-2xl font-extrabold dark:text-[#e4e6eb] ">{{ $t('profile.intro') }}</div>
                <div class="text-center mt-4 px-[20%] text-[15px] flex items-center justify-center gap-x-1 false ">
                  {{ profile.bio }}
                  <div class="hidden">
                    <div style="fill: rgb(106, 117, 131); height: 25px; width: 25px;">
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
                <button v-if="profile.owner" @click="edit = true" class="mt-3 py-2 w-full bg-[#afb1b5]/30 hover:bg-[#afb1b5]/50 dark:bg-[#4E4F50]/50 dark:hover:bg-[#4E4F50] transition-20 rounded-md font-semibold ">{{ $t('profile.edit_bio') }}</button>
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
                  <div class="grid grid-cols-3 grid-rows-0 rounded-lg gap-1 mt-3 ">
                    <div class="text-center my-3 col-span-3 ">{{ $t('profile.no_image_found') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-3 ">
            <div>
              <ModalWall modal_name="modal_name" type="login" :user="user"/>
              <div class="mb-4"></div>
              <div class="text-center w-full text-4xl dark:bg-[#242526] py-5 rounded-lg ">{{ $t('profile.no_post_found') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Main from '@/components/Main.vue'
import Icon from '@/ui/Icon.vue'
import Axios from "axios";

import ModalWall from '@/components/ModalWall.vue'

export default {
  name: 'ProfilePage',
  components: {
    Main,
    Icon,
    ModalWall,
  },
  props: ['user','id'],
  data() {
    return {
      profile: {
        first_name: '',
        last_name: '',
        owner: false,
      },
      user_data: this.user,
      edit: false,
      form_edit_bio: {
        bio: ''
      },      
    }
  },
  async mounted() {
    await this.get_profile()
  },

  methods: {
    async get_profile(){
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
      await Axios.post(import.meta.env.VITE_DOMAIN_API + "users/profile", {
        access_token: localStorage.getItem('token'),        
        id: this.id,
      })
      .then(res => {
        if (res.data.status == 1) {
          this.profile.id = res.data.data.id;
          this.profile.first_name = res.data.data.first_name;
          this.profile.last_name = res.data.data.last_name;
          this.profile.photo = res.data.data.photo;        
          this.profile.photo_50 = res.data.data.photo_50;
          this.profile.photo_100 = res.data.data.photo_100;
          this.profile.owner = res.data.data.owner;
          this.profile.bio = res.data.data.bio;
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
    }
  },
}
</script>