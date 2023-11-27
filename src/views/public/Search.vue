<template>
<div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4">
  <div class="w-full sm:grid grid-cols-5 gap-x-4">
    <div class="col-span-2">
      <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
        <div>
          <ul>
            <li>
              <router-link to="/search" class="active exact-active flex cursor-pointer py-3 text-blue-600 hover:text-black dark:text-white dark:text-slate-300 dark:hover:text-white">
                <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                  <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                    <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span class="grow text-ellipsis line-clamp-1 pr-12 p2">Все</span>
              </router-link>
            </li>
            <li>
              <router-link to="/search" class="active exact-active flex cursor-pointer py-3 text-blue-600 hover:text-black dark:text-white dark:text-slate-300 dark:hover:text-white">
                <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                  <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                    <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span class="grow text-ellipsis line-clamp-1 pr-12 p2">Люди</span>
              </router-link>
            </li>            
          </ul>
        </div>
      </div>
    </div>       
    <div class="col-span-3">
      <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
        <div class="p-6"><h5 class="text-2xl">Результаты поиска</h5></div>
        <div class="mb-6 last:mb-0">
          <div class="">
            <div class="relative">
              <!-- <input placeholder="query" 
                v-model="query_variable"
                type="text" class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-[#242526]"> -->
                <v-input v-model:modelValue="query_variable" type="text" placeholder="query"/>
            </div>            
          </div>
        </div>
        <div class="grid-cols-2 my-4 gap-1" v-for="(item, index) in results">
          <Friend :item="item" :user="user" :friend="false"/>
        </div>       
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { fetchAllSearch } from "@/api/search"
import { addFriend } from "@/api/friends"
import Friend from '@/components/friends/Item.vue'

export default {
  props: ['user', 'query'],
  components: {
      Friend,
  },  
  data() {
    return {
      results: [],
      query_variable: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Search';
      },      
    },
    // whenever question changes, this function will run
    query_variable(newQuery, oldQuery) {
      this.change_query()
    },

  },  
  async mounted() {
    this.check_query()
  },
  methods: { 
    change_query(){    
      fetchAllSearch({
        query: this.query_variable,
      }).then((res) => {
        if (res.status == 1) {
          this.results = res.data.results;

          if (this.query_variable == null) {
            this.$router.push('/search/')
          }else{
            this.$router.push('/search/' + this.query_variable)
          }
        } else {
          // this.user.is_connected = false;
        }
      })
      
      if (this.query_variable == null) {
        this.$router.push('/search/')
      }else{
        this.$router.push('/search/' + this.query_variable)
      }
    },
    check_query(){
      if (this.query !== null) {
        this.query_variable = this.query
      }
      fetchAllSearch({
        query: this.query_variable,
      }).then((res) => {
        if (res.status == 1) {
        this.results = res.data.results;
      } else {
        // this.user.is_connected = false;
      }
    })
    },
    add_friend(id){
      addFriend({
        user: id,
      }).then((res) => {
        if (res.status == 1) {
          // this.results = res.data.results;
          this.$notify({
            group: "foo",
            title: "Уведомление",
            text: "Заявка отправлена"
          }, 2000) // 2s
        } else {
          this.$notify({
            group: "foo",
            title: "Ошибка",
            text: ""
          }, 2000) // 2s
        } 
      })    
    },
  },
}
</script>