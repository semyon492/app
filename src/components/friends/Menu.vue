<template>
    <ul>
      <li v-for="(item, idx) in infoTiles" :key="idx">
        <router-link  active-class="active" :to="item.link" v-if="profile.owner == item.owner || !item.owner"
           class="flex cursor-pointer py-3 text-blue-600 hover:text-black dark:text-white dark:text-slate-300 dark:hover:text-white"
           :color="item.color">
          <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
            <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
              <path fill="currentColor"
                    d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
            </svg>
          </span>
          <Tooltip :label="item.text">
            <span class="grow text-ellipsis line-clamp-1 pr-12 p2">{{ item.text }}</span>
          </Tooltip>
        </router-link>
      </li>
    </ul>
  </template>
  
  <script>
  import {useI18n} from 'vue-i18n'
  import Tooltip from '@/components/Tooltip.vue'
  
  export default {
    name: 'FriendsMenu',
    props: ['profile', 'id'],
    setup() {
      // use global scope
      const {t, locale} = useI18n()
      return {t, locale}
    },
    components: {
      Tooltip
    },
    data() {
      return {
        infoTiles: [],
      }
    },
    async mounted() {
      this.infoTiles = ([
        {
          link: '/friends/'  + this.id,
          text: 'All friends',
          owner: false,
        },
        {
          link: '/friends/online/' + this.id,
          text: 'Friends online',
          owner: false,
        },
        {
          link: '/friends/requests/' + this.id,
          text: 'Friend request',
          owner: true,
        },
      ]);
    },
    methods: {},
  }
  </script>