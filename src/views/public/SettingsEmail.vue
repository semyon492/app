<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="flex flex-wrap">
      <div class="w-full max-w-full px-3 mt-6 shrink-0 md:w-2/12 md:flex-0 md:mt-0">
        <Menu :user="user"/>
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
                <SettingsMenu/>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
            <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
              <div class="p-6">
                <h5 class="text-2xl">{{ $t('settings.email') }}</h5>
              </div>
              <div class="p-6">

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
    return {}
  },
  async mounted() {
  },
  methods: {},
}
</script>