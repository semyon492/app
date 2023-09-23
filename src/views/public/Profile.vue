<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<main v-if="(user.is_connected !== true)">
	  <Main />
	</main>
	<main v-if="(user.is_connected)">
	  <div class="flex flex-wrap">
		<div class="w-full max-w-full px-3 mt-6 shrink-0 md:w-2/12 md:flex-0 md:mt-0">
		  <Menu  :user="user"/>
		</div>
		<div class="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
      <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <img class="w-full rounded-t-2xl" src="https://wowonder.fra1.cdn.digitaloceanspaces.com/upload/photos/d-cover.jpg?cache=0" alt="profile cover image">
        <div class="flex flex-wrap justify-center -mx-3">
        <div class="w-4/12 max-w-full px-3 flex-0 ">
        <div class="mb-6 -mt-6 lg:mb-0 lg:-mt-16">
        <a href="javascript:;">
        <img class="h-auto max-w-full border-2 border-white border-solid rounded-circle" src="https://wowonder.fra1.cdn.digitaloceanspaces.com/upload/photos/d-avatar.jpg?cache=0" alt="profile image">
        </a>
        </div>
        </div>
        </div>
        <div class="border-black/12.5 rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
        <div class="flex justify-between">
        <button type="button" class="hidden px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Connect</button>
        <button type="button" class="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">
        <i class="ni ni-collection text-2.8"></i>
        </button>
        <button type="button" class="hidden px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Message</button>
        <button type="button" class="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">
        <i class="ni ni-email-83 text-2.8"></i>
        </button>
        </div>
        </div>
        <div class="flex-auto p-6 pt-0">
        <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 flex-1-0">
        <div class="flex justify-center">
        <div class="grid text-center">
        <span class="font-bold dark:text-white text-lg">22</span>
        <span class="leading-normal dark:text-white text-sm opacity-80">Friends</span>
        </div>
        <div class="grid mx-6 text-center">
        <span class="font-bold dark:text-white text-lg">10</span>
        <span class="leading-normal dark:text-white text-sm opacity-80">Photos</span>
        </div>
        <div class="grid text-center">
        <span class="font-bold dark:text-white text-lg">89</span>
        <span class="leading-normal dark:text-white text-sm opacity-80">Comments</span>
        </div>
        </div>
        </div>
        </div>
        <div class="mt-6 text-center">
        <h5 class="dark:text-white ">
        Mark Davis
        <span class="font-light">, 35</span>
        </h5>
        <div class="mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
        <i class="mr-2 dark:text-white ni ni-pin-3"></i>
        Bucharest, Romania
        </div>
        <div class="mt-6 mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
        <i class="mr-2 dark:text-white ni ni-briefcase-24"></i>
        Solution Manager - Creative Tim Officer
        </div>
        <div class="dark:text-white/80">
        <i class="mr-2 dark:text-white ni ni-hat-3"></i>
        University of Computer Science
        </div>
        </div>
        </div>
        </div>
		</div>
	  </div>    
	</main>
  </template>
  
  <script>
  import config from "/config";
  import Menu from '@/components/Menu.vue'
  import Main from '@/components/Main.vue'
  
  import Button from '@/ui/button/Button.vue'
  import Modal from '@/ui/modal/Modal.vue'
  
  export default {
	name: 'ProfilePage',
	components: {
	  Menu,
	  Main,
	  Button,
	  Modal
	},
	props: ['user'],
	data() {
    return {   
      name: config.title,
    }
	},
	async mounted() { 
	},
	methods: {
	},
  }
  </script>