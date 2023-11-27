<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
  <div>
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <section class="mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <span class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-[#242526] dark:text-white mr-3">
            <v-icon name="analytics" class="inline-block" :size="24" />
          </span>
          <h1 class="text-3xl leading-tight">Overview</h1>
        </div>
        <a class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-gray-800 dark:border-white ring-gray-300 dark:ring-gray-400 bg-gray-800 text-white dark:bg-white dark:text-black hover:bg-gray-700 hover:dark:bg-slate-100 text-sm px-3 py-1" 
        href="/" target="_blank" disabled="false">
          <span class="inline-flex justify-center items-center w-6 h-6">
            <v-icon type="link" class="inline-block" :size="16" />
          </span>
          <span class="px-1">Go to site</span>
        </a>
      </section>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <Menu :menu="menu" />        
      </div>
    </section>
  </div>
  </main>
</template>

<script>
import NotFound from '@/components/NotFound.vue'
import Menu from '@/components/admin/Menu.vue'

export default {
  name: 'HomeAdmin',
  components: {
    NotFound,
    Menu,
  },
  props: ['user'],
  data() {
    return {
      menu: [
      {
          link: 'users',
          name: 'Users',
          img: 'friends',
          count: 200,
        },
        {
          link: 'groups',
          name: 'Groups',
          img: 'friends',
          count: 100,
        },
        {
          link: 'settings',
          name: 'Settings',
          img: 'settings',
          count: '',
        },
        {
          link: 'tests',
          name: 'Tests',
          img: 'settings',
          count: '',
        },

      ],
    }
  },
}
</script>