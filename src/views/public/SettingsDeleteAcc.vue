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
                <h5 class="text-2xl">{{ $t('settings.delete') }}</h5>
              </div>
              <div class="p-6">
                <Button @click="showModal = true" >Delete profile</Button>
                <Teleport to="body">
                <Modal size="md" :show="showModal" @close="showModal = false">
                <template #header>
                  <div class="flex items-center text-lg"> Terms of Service </div>
                  <button @click="showModal = false" aria-label="close" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </template>
                <template #body>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                  </p>
                </template>
                </Modal>
                </Teleport> 
              </div>        
            </div>
          </div>
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
      showModalLang: false,
      showModal: false,
      size: 'md',
    }
  },
  async mounted() { 
  },
  methods: {
  },
}
</script>