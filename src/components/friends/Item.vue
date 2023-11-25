<template>
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
    <v-button size="xs" v-if="item.id != user.id" pill>Write message</v-button>
  </div>
  <v-button size="xs" v-if="item.id != user.id && !friend" @click="add_friend(item.id)" pill>Add friend</v-button>
</div>

</template>

<script>
export default {
    props: ['item', 'user', 'friend'],
}
</script>