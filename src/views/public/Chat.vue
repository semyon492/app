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
      <div class="p-6">

      </div> 
		</div>
	  </div>    
	</main>
  </template>
  
  <script>
  import Axios from "axios";
  import config from "/config";
  import SettingsMenu from '@/components/SettingsMenu.vue'
  import Menu from '@/components/Menu.vue'
  import Main from '@/components/Main.vue'
  
  import Button from '@/ui/button/Button.vue'
  import Modal from '@/ui/modal/Modal.vue'
  
  export default {
	name: 'Home',
	components: {
	  SettingsMenu,
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