<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.privacy') }}</h5>
        </div>
        <div class="p-6">

        </div>
      </div>      
    </SettingsCard>
  </main>
</template>

<script>
import SettingsMenu from '@/components/SettingsMenu.vue'
import SettingsCard from '@/ui/SettingsCard.vue'
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
  async mounted() {
  },
  methods: {},
}
</script>