<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.email') }}</h5>
        </div>
        <div class="p-6">

        </div>
      </div>      
    </SettingsCard>
  </main>
</template>

<script>
import SettingsMenu from '@/components/settings/SettingsMenu.vue'
import SettingsCard from '@/components/settings/SettingsCard.vue'
import Main from '@/components/Main.vue'

import Button from '@/ui/button/Button.vue'
import Modal from '@/ui/modal/Modal.vue'

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    SettingsCard,
    Main,
    Button,
    Modal
  },
  props: ['user'],
  data() {
    return {}
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Settings';
      }
    },
  },  
  async mounted() {
  },
  methods: {},
}
</script>