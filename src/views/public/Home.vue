<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="">
        <div class="grid grid-cols-11 md:gap-x-12 px-3 sm:px-7 md:px-10 relative ">
          <div class="col-span-11 md:col-span-3 relative order-1 ">
            <Menu :user="user"/>
          </div>
          <div class="col-span-11 md:col-span-5 shrink-0 order-3 md:order-2 ">
            <div class="">
              <div class="dark:bg-[#242526] bg-white mb-5 pt-3 rounded-lg px-2 md:px-4 shadow-post ">
                <div class="flex items-center gap-x-2 ">
                  <img :src="user.photo_50" alt="userImage" class="object-cover w-10 h-10 rounded-full shrink-0 ">
                  <div class=" dark:bg-[#4E4F50]/70 dark:hover:bg-[#4E4F50] rounded-full px-4 py-[9px] w-[90%] flex justify-start dark:text-[#b0b3b8] font-medium transition-20 h-10 cursor-pointer text-[#65676b] bg-[#E4E6E9]/60 hover:bg-[#E4E6E9] ">
                    <div class="mr-2 overflow-hidden  text-overflow-ellipsis">What's on your mind, {{ user.first_name }}?</div>
                  </div>
                </div>
              </div>
              <div class="w-full text-center text-xl font-semibold pt-[20vh] flex-col ">
                <div>You don't post anything and don't follow anyone.<br>Let's do something! :3</div>
              </div>
              <div class="posts">
                <div class="dark:bg-[#242526] bg-white mb-5 pt-3 pb-2.5 md:pb-3 rounded-lg shadow-post ">
                  <div class="flex items-center pl-2 pr-3 sm:px-3 md:px-4">
                    <img :src="demo_ava" alt="avatar" class="w-10 h-10 rounded-full object-cover cursor-pointer ">
                    <div class="ml-2 font-bold ">
                      <div class="flex items-center gap-x-1 cursor-pointer ">
                        Admin
                        <Icon type="verify" />
                      </div>
                      <div class="font-[400] text-[13px] dark:text-[#B0B3B8] flex items-center gap-x-1 ">2 months ago</div>
                    </div>
                  </div>
                  <div class="content mt-[11px] px-4  text-[17px]">
                    So, it's more than 1 year ~~
                    Thanks all of u for dropping by my page.
                    Hope you allways get better in ur career.
                  </div>
                  <div class="mt-3 flex items-center justify-center px-2 cursor-pointer ">
                    <img src="http://res.cloudinary.com/dcwekkkez/image/upload/v1692024811/ugkuaw576ecshvd0v8ie.jpg" alt="img_content" class="w-full h-auto max-h-[300px] sm:max-h-[350px] object-contain bg-[#F0F2F5] dark:bg-[#18191A]">
                  </div>
                  <div class="px-4 py-[10px] flex gap-x-[6px] items-center text-[15px] ">
                    <Icon type="like" class="text-[18px] text-[#65676b] dark:text-[#afb0b1]"/>
                    <span class="like-count">2 likes</span>
                    <span class="text-[14px] ml-auto text-[#65676b] dark:text-[#afb0b1] ">2 comments</span>
                  </div>
                  <div class="mx-[12px] mt-2 py-1 flex items-center justify-between border-y dark:border-y-[#3E4042] border-y-[#CED0D4] px-[6px]  ">
                    <button class=" py-[6px] px-2 flex items-center justify-center gap-x-1 w-full rounded-sm hover:bg-[#e0e0e0] text-[#6A7583] dark:hover:bg-[#3A3B3C] font-semibold text-[15px] dark:text-[#b0b3b8] transition-50 cursor-pointer ">
                      <Icon type="like" class="text-xl translate-y-[1px] "/>
                      Like
                    </button>
                    <button class="py-[6px] px-2 flex items-center justify-center gap-x-1 w-full rounded-sm hover:bg-[#e0e0e0] text-[#6A7583] dark:hover:bg-[#3A3B3C] font-semibold text-[15px] dark:text-[#b0b3b8] transition-50 cursor-pointer ">
                      <Icon type="comment" />
                      Comment
                    </button>
                  </div>
                  <div class="flex gap-x-1.5 px-2 sm:px-3 md:px-4 py-1 items-center ">
                    <img :src="user.photo_50" alt="user_avatar" class="w-8 sm:w-9 h-8 sm:h-9 object-cover shrink-0 rounded-full ">
                    <form class="flex px-2 rounded-full bg-[#F0F2F5] w-full mt-1 items-center dark:bg-[#3A3B3C]  ">
                      <input type="text" class="px-2 py-1 sm:py-1.5 border-none focus:ring-0 bg-inherit rounded-full w-full font-medium dark:placeholder:text-[#b0b3b8] " placeholder="Write a comment..." value="">
                      <label>
                        <Icon type="file_photo" />
                        <input type="file" accept="image/*" name="avatar" hidden="">
                      </label>
                      <button type="submit" disabled="">
                        <Icon type="send" />
                      </button>
                    </form>
                  </div>
                  <div class="transition-50 flex items-start justify-start w-full px-20 group "></div>
                </div>
              </div>
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
import SettingsMenu from '@/components/SettingsMenu.vue'
import Menu from '@/components/Menu.vue'
import Main from '@/components/Main.vue'

import Button from '@/ui/button/Button.vue'
import Modal from '@/ui/modal/Modal.vue'

import Icon from '@/ui/Icon.vue'

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    Menu,
    Main,
    Button,
    Modal,
    Icon
  },
  props: ['user'],
  data() {
    return {
      demo_ava: 'https://api.rapigram.ru/images/no_ava.gif'
    }
  },
  async mounted() {
  },
  methods: {},
}
</script>
<style scoped>
.posts{
  height: auto; 
  overflow: auto;
}
</style>