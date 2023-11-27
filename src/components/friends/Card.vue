<template>
    <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4">
      <div class="w-full sm:grid grid-cols-5 gap-x-4">
        <div class="col-span-2">
          <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
            <div>
              <Menu :profile="profile" :id="id" />
            </div>
          </div>
        </div>       
        <div class="col-span-3">
          <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
            <div class="p-6">
                <h5 class="text-2xl">Результаты поиска</h5>
            </div>
            <div class="grid-cols-2 my-4 gap-1" v-for="(item, index) in friends">
              <Friend :item="item" :user="user" :friend="true"/>
            </div>       
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Menu from '@/components/friends/Menu.vue'
import Friend from '@/components/friends/Item.vue'

export default {
  props: ['profile', 'id', 'friends', 'user'],
  components: {
      Menu,
      Friend,
  },
}
</script>