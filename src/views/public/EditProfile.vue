<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4 ">
    <div class="w-full sm:grid grid-cols-3 gap-x-4 ">
      <div class="col-span-3">
        <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
          <div class="pt-[50px] md:pt-[75px] md:px-[15%] w-full dark:bg-[#242426] bg-white overflow-x-hidden">
            <div class="flex flex-col sm:flex-row mx-10 sm:items-start gap-x-4 border-b-[1px] dark:border-b-white/10 border-b-black/10 items-center">
              <img :src="user.photo_100" alt="avatar" 
              class="w-[170px] h-[170px] rounded-full object-cover translate-y-[-32px] shrink-0 dark:border-white border-4 border-black/50">
              <div class="flex flex-col sm:flex-row w-full justify-between items-center sm:items-end pt-4 translate-y-[-32px] sm:translate-y-[0]">
                <div>
                  <div class="flex justify-center">
                    <div class="text-[32px] font-bold md:flex items-center gap-x-1">
                      <div class="text-center flex items-center justify-center">{{ user.first_name }} {{ user.last_name }}</div>
                      <div class="ml-1.5 font-normal text-xl md:text-[28px] flex-shrink-0">Hello world!</div>
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  </main>
</template>

<script>

import NotFound from '@/components/NotFound.vue'

export default {
  name: 'Edit',
  components: {
    NotFound,
  },
  props: ['user'],
  data() {
    return {}
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Edit';
      }
    },
  },
  async mounted() {
  },
  methods: {
    change_name(){

    }
  },
}
</script>