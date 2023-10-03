<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="min-h-screen w-[98.5vw] overflow-x-hidden pb-7 ">
      <div class="pt-[50px] md:pt-[75px] md:px-[15%] w-full dark:bg-[#242426] bg-white overflow-x-hidden ">
        <img src="https://res.cloudinary.com/dcwekkkez/image/upload/v1656421547/bavmjvxcucadotx45jtk.jpg" alt="bg" class="w-full h-[30vh] sm:h-[40vh] md:h-[54vh] object-cover rounded-b-lg ">
        <div class="flex flex-col sm:flex-row mx-10 sm:items-start gap-x-4 border-b-[1px] dark:border-b-white/10 border-b-black/10 items-center ">
          <img src="http://res.cloudinary.com/dcwekkkez/image/upload/v1696220970/qvufhaedruigxznlvvs0.jpg" alt="avatar" class="w-[170px] h-[170px] rounded-full object-cover translate-y-[-32px] shrink-0  dark:border-white border-4 border-black/50 ">
          <div class="flex flex-col sm:flex-row w-full justify-between items-center sm:items-end pt-4 translate-y-[-32px] sm:translate-y-[0] ">
            <div>
              <div class="flex justify-center">
                <div class="text-[32px] font-bold md:flex items-center gap-x-1 ">
                  <div class="text-center flex items-center justify-center ">{{ user.firstname }} {{ user.lastname }}</div>
                  <div class="ml-1.5 font-normal text-xl md:text-[28px] flex-shrink-0 ">Hello world!</div>
                </div>
              </div>
              <div class="dark:text-[#b0b3b8] font-semibold text-[17px] flex gap-x-1.5 items-center text-[#65676b] justify-center sm:justify-start">
                <span class="cursor-pointer flex-shrink-0 ">2 following</span>
                <Icon type="dot"/>
                <span class="cursor-pointer flex-shrink-0 ">0 follower</span>
              </div>
            </div>
            <div class="flex mt-4 sm:mt-0 flex-shrink-0 ">
              <button class="flex gap-x-1 items-center font-semibold px-3 py-2 bg-[#D8DADF]/50 hover:bg-[#D8DADF] dark:bg-[#4E4F50]/50 dark:hover:bg-[#4E4F50] transition-20 rounded-md ">
                <Icon type="edit"/>
                Edit profile
              </button>
            </div>
          </div>
        </div>
        <div class="flex mx-0 sm:mx-10 ">
          <ul class="flex items-center justify-between w-full px-16 py-1 gap-x-10 ">
            <li class="li-profile active ">Posts</li>
            <li class="li-profile false ">Following</li>
            <li class="li-profile false ">Follower</li>
          </ul>
        </div>
      </div>
      <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4 ">
        <div class="bg-white w-full dark:bg-[#242526] p-4 rounded-lg shadow-post ">
          <div class="text-2xl font-extrabold dark:text-[#e4e6eb] ">Friends</div>
          <div class="md:grid grid-cols-2 my-4 gap-1 ">
            <div class="col-span-1 flex items-center gap-x-3 px-4 py-5 ">
              <img src="http://res.cloudinary.com/dcwekkkez/image/upload/v1650713458/uzfbahyxne9d93jozqgc.jpg" alt="" 
              class="w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-md object-cover cursor-pointer ">
              <div class="">
                <div class="text-[14px] sm:text-[17px]  font-semibold cursor-pointer ">Flower</div>
                <div class="text-[12px] sm:text-[14px] dark:text-[#b0b3b8]  ">Super Idol :v</div>
              </div>
              <button class="px-3 sm:px-4 py-1 md:py-2 ml-auto hover:bg-[#3C4D63] bg-[#3C4D63]/50 transition-20 text-white rounded-md text-[14px] sm:text-base ">Unfollow</button>
            </div>
            <div class="col-span-1 flex items-center gap-x-3 px-4 py-5 ">
              <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/tv.png" alt="" 
              class="w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-md object-cover cursor-pointer ">
              <div class="">
                <div class="text-[14px] sm:text-[17px]  font-semibold cursor-pointer ">random</div>
                <div class="text-[12px] sm:text-[14px] dark:text-[#b0b3b8]  "></div>
              </div>
              <button class="px-3 sm:px-4 py-1 md:py-2 ml-auto hover:bg-[#3C4D63] bg-[#3C4D63]/50 transition-20 text-white rounded-md text-[14px] sm:text-base ">Unfollow</button>
            </div>
            <div class="col-span-1 flex items-center gap-x-3 px-4 py-5 ">
              <img src="http://res.cloudinary.com/dcwekkkez/image/upload/v1656135368/wxtig1v58om44jrvzoht.jpg" alt="" 
              class="w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-md object-cover cursor-pointer ">
              <div class="">
                <div class="text-[14px] sm:text-[17px]  font-semibold cursor-pointer ">Chang</div>
                <div class="text-[12px] sm:text-[14px] dark:text-[#b0b3b8]  "></div>
              </div>
              <button class="px-3 sm:px-4 py-1 md:py-2 ml-auto hover:bg-[#3C4D63] bg-[#3C4D63]/50 transition-20 text-white rounded-md text-[14px] sm:text-base ">Unfollow</button>
            </div>
            <div class="col-span-1 flex items-center gap-x-3 px-4 py-5 ">
              <img src="http://res.cloudinary.com/dcwekkkez/image/upload/v1656135268/oaf2aq4uxyat9d66ih3r.jpg" alt="" 
              class="w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-md object-cover cursor-pointer ">
              <div class="">
                <div class="text-[14px] sm:text-[17px]  font-semibold cursor-pointer ">Admin</div>
                <div class="text-[12px] sm:text-[14px] dark:text-[#b0b3b8]  ">Tranquility of mind</div>
              </div>
              <button class="px-3 sm:px-4 py-1 md:py-2 ml-auto hover:bg-[#3C4D63] bg-[#3C4D63]/50 transition-20 text-white rounded-md text-[14px] sm:text-base ">Unfollow</button>
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

export default {
  name: 'Friends',
  components: {
    Main,
    Icon,
  },
  props: ['user'],
  data() {
    return {}
  },
  async mounted() {
  },
  methods: {},
}
</script>