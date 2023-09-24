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
				<div class="flex flex-wrap">
					<div class="w-full max-w-full px-3 mt-6 shrink-0 md:w-2/12 md:flex-0 md:mt-0">
					<div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
						<div class="dark:bg-slate-900">
						<div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
							<b class="font-black">Profile Settings</b>
						</div>
						</div>
						<div>
						<SettingsMenu />          
						</div>
					</div>
					</div>
					<div class="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
					<div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
						<div class="p-6">
							<h5 class="text-2xl">{{ $t('settings.password') }}</h5>
						</div>
						<div class="flex-1 p-6">
							<div class="mb-6 last:mb-0">
								<label class="block font-bold mb-2">Current password</label>
								<div class="">
									<div class="relative">
										<input name="password_current" autocomplete="current-password" required="" type="password" class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
										<span class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400">
											<svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
												<path fill="currentColor" d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z"></path>
											</svg>
										</span>
									</div>
								</div>
								<div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Required. Your current password</div>
							</div>
							<hr class="my-6 -mx-6 dark:border-slate-800 border-t border-gray-100">
							<div class="mb-6 last:mb-0">
								<label class="block font-bold mb-2">New password</label>
								<div class="">
									<div class="relative">
										<input name="password" autocomplete="new-password" required="" type="password" class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
										<span class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400">
										<svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
											<path fill="currentColor" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z"></path></svg>
										</span>
									</div>
								</div>
								<div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Required. New password</div>
								</div>
								<div class="mb-6 last:mb-0">
									<label class="block font-bold mb-2">Confirm password</label>
									<div class="">
										<div class="relative">
											<input name="password_confirmation" autocomplete="new-password" required="" type="password" class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
											<span class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400">
											<svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
												<path fill="currentColor" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z"></path></svg>
											</span>
										</div>
									</div>
									<div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Required. New password one more time</div>
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
	  }
	},
	async mounted() { 
	},
	methods: {
	},
  }
  </script>