<template>
    <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4">
      <div class="w-full sm:grid grid-cols-5 gap-x-4">
        <div class="col-span-2">
          <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
            <div>
              <Menu :profile="profile" :id="id" />
            </div>
          </div>
        </div>       
        <div class="col-span-3">
          <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
            <div class="p-6">
                <h5 class="text-2xl">Результаты поиска</h5>
            </div>
            <div class="grid-cols-2 my-4 gap-1" v-for="(item, index) in friends">
              <div class="col-span-1 flex items-center gap-x-3 px-4 py-5">
                <router-link :to="'/id' + item.id" >
                  <img :src="item.photo_50" alt="" class="w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-md object-cover cursor-pointer" />
                </router-link>
                <div class="">
                  <router-link :to="'/id' + item.id" >
                    <div class="text-[14px] sm:text-[17px] font-semibold cursor-pointer">
                      {{ item.first_name }} {{ item.last_name }}
                    </div>
                    </router-link>
                  <!-- <div class="text-[12px] sm:text-[14px] dark:text-[#b0b3b8]">Super Idol :v</div> -->
                  <button v-if="item.id != user.id" class="px-3 sm:px-4 py-1 md:py-2 ml-auto hover:bg-[#3C4D63] bg-[#3C4D63]/50 transition-20 text-white rounded-md text-[14px] sm:text-base">Write message</button>
                </div>
                <button v-if="item.id != user.id" @click="add_friend(item.id)" class="px-3 sm:px-4 py-1 md:py-2 ml-auto hover:bg-[#3C4D63] bg-[#3C4D63]/50 transition-20 text-white rounded-md text-[14px] sm:text-base">Add friend</button>
              </div>
            </div>       
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Button from '@/ui/button/Button.vue'
import Menu from '@/components/friends/Menu.vue'

export default {
    props: ['profile', 'id', 'friends', 'user'],
    components: {
        Button,
        Menu
    },
}
</script>