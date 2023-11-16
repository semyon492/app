<template>
  <div class="posts">
    <div v-for="(wall) in walls" :key="wall.id" class="dark:bg-[#242526] bg-white mb-5 pt-3 pb-2.5 md:pb-3 rounded-lg shadow-post " >
      <div class="flex items-center pl-2 pr-3 sm:px-3 md:px-4">
        <img :src="wall.user_photo" alt="avatar" class="w-10 h-10 rounded-full object-cover cursor-pointer ">
        <div class="ml-2 font-bold ">
          <div class="flex items-center gap-x-1 cursor-pointer ">
            {{ wall.user_name }} {{ wall.user_last_name }}
          </div>
          <div class="font-[400] text-[13px] dark:text-[#B0B3B8] flex items-center gap-x-1 ">2 months ago</div>
        </div>
        <!-- <div class="ml-auto text-[25px] transition-50 cursor-pointer font-bold w-[35px] h-[35px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] flex flex-row items-center justify-center group relative ">
          <div class="translate-y-[-6px] z-[100] ">...</div>
          <ul class="text-base absolute top-[110%] text-center flex flex-col hidden" @click="wall.menu = !wall.menu">
            <li class="px-3 py-1 bg-[#F0F2F5] border-[#3A3B3C]/40 text-[#333]/60 hover:border-[#3A3B3C]/60 hover:text-[#333]/80 dark:bg-[#3A3B3C] rounded-md border dark:text-[#e4e6eb]/60 transition-50 dark:hover:text-[#e4e6eb] dark:border-[#3A3B3C] dark:hover:border-[#e4e6eb]/60 ">Edit</li>
            <li class="mt-1 px-3 py-1 bg-[#F0F2F5] border-[#3A3B3C]/40 text-[#333]/60 hover:border-[#3A3B3C]/60 hover:text-[#333]/80 dark:bg-[#3A3B3C] rounded-md border dark:text-[#e4e6eb]/60 transition-50 dark:hover:text-[#e4e6eb] dark:border-[#3A3B3C] dark:hover:border-[#e4e6eb]/60">Delete</li>
          </ul>
        </div> -->
        <WallMenu :walls="walls" :wall_id="wall.id" />
        <!-- <button @click="$emit('remove', index)">delete</button> -->
        <!-- <button @click="walls.splice(index, 1)">delete</button> -->
      </div>
      <div class="content mt-[11px] px-4  text-[17px]">
        {{  wall.content }}
      </div>
      <!-- <div class="mt-3 flex items-center justify-center px-2 cursor-pointer ">
        <img :src="demo_ava" alt="img_content" class="w-full h-auto max-h-[300px] sm:max-h-[350px] object-contain bg-[#F0F2F5] dark:bg-[#18191A]">
      </div> -->
      <div class="px-4 py-[10px] flex gap-x-[6px] items-center text-[15px] " v-if="wall.likes_num > 0 || wall.comments_num > 0">
        <Icon type="like" class="text-[18px] text-[#65676b] dark:text-[#afb0b1]"/>
        <span class="like-count" v-if="wall.likes_num > 0">{{ wall.likes_num }} likes</span>
        <span class="text-[14px] ml-auto text-[#65676b] dark:text-[#afb0b1] " v-if="wall.comments_num > 0">{{ wall.comments_num }} comments</span>
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
      <div v-if="user.is_connected" class="flex gap-x-1.5 px-2 sm:px-3 md:px-4 py-1 items-center ">
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
</template>

<script>
import Icon from '@/ui/Icon.vue'
import WallMenu from '@/components/WallMenu.vue'

export default {
  components: {
    Icon,
    WallMenu,
  },
  props: ['user','walls'],
  data() {
    return {
      posts: []
    }
  },
  methods: {
    remove() {
      // this.$router.push('/restore')
    },
    deleteItem: function (index) {
      // this.walls.splice(index, 1);;
      // this.$delete(this.walls,index);
      console.log(index)
      this.walls = []
      //  this.walls = this.walls.filter((e)=>e.id !== id )

      // const filtersList = this.walls.filter(element => element !== index)
      // this.walls=filtersList
    }
  },
}
</script>