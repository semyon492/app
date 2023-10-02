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
                  <div class="text-center flex items-center justify-center ">Семен</div>
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
        <div class="w-full sm:grid grid-cols-5 gap-x-4 ">
          <div class="col-span-2">
            <div class="mb-4 ">
              <div class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post ">
                <div class="text-2xl font-extrabold dark:text-[#e4e6eb] ">Intro</div>
                <div class="text-center mt-4 px-[20%] text-[15px] flex items-center justify-center gap-x-1 false ">
                  This user is very nice but don't leave any trace! 
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
                <button class="mt-3 py-2 w-full bg-[#afb1b5]/30 hover:bg-[#afb1b5]/50 dark:bg-[#4E4F50]/50 dark:hover:bg-[#4E4F50] transition-20 rounded-md font-semibold ">Edit bio</button>
              </div>
              <div class="mt-4">
                <div class="bg-white dark:bg-[#242526] p-4 rounded-lg shadow-post">
                  <div class="flex justify-start items-center">
                    <div class="text-2xl font-extrabold dark:text-[#e4e6eb] ">Photo</div>
                  </div>
                  <div class="grid grid-cols-3 grid-rows-0 rounded-lg gap-1 mt-3 ">
                    <div class="text-center my-3 col-span-3 ">No image found!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-3 ">
            <div>
              <div class="dark:bg-[#242526] bg-white mb-5 pt-3 rounded-lg px-2 md:px-4 shadow-post ">
            <div class="flex items-center gap-x-2 ">
              <img src="http://res.cloudinary.com/dcwekkkez/image/upload/v1696220970/qvufhaedruigxznlvvs0.jpg" alt="userImage" class="object-cover w-10 h-10 rounded-full shrink-0 ">
              <div class=" dark:bg-[#4E4F50]/70 dark:hover:bg-[#4E4F50] rounded-full px-4 py-[9px] w-[90%] flex justify-start dark:text-[#b0b3b8] font-medium transition-20 h-10 cursor-pointer text-[#65676b] bg-[#E4E6E9]/60 hover:bg-[#E4E6E9]  ">
                <div class="mr-2 overflow-hidden  text-overflow-ellipsis">What's on your mind, Семен?</div>
              </div>
            </div>
            <div class=" mt-3 flex items-center justify-between gap-x-2 border-t dark:border-t-[#3a3a3a] border-t-[#bbb9b9] py-1 text-[15px]  ">
              <button class="flex items-center justify-center w-full gap-x-2 dark:text-[#b0b3b8] text-[#65676b] hover:bg-[#F2F2F2] font-semibold py-2 transition-20 dark:hover:bg-[#4E4F50] rounded-lg ">
                <Icon type="video" />
                  Video
              </button>
              <button class="flex items-center justify-center w-full gap-x-2 dark:text-[#b0b3b8] text-[#65676b] hover:bg-[#F2F2F2] font-semibold py-2 transition-20 dark:hover:bg-[#4E4F50] rounded-lg">
                <Icon type="photo" />
                  Photo
              </button>
            </div>
              </div>
              <div class="mb-4"></div>
              <div class="text-center w-full text-4xl dark:bg-[#242526] py-5 rounded-lg ">No post found</div>
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
  name: 'ProfilePage',
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