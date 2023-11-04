<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.delete_account') }}</h5>
        </div>
        <div class="p-6">
          <Button @click="showModal = true" variant="red">{{ $t('settings.delete_your_account') }}</Button>
          <Teleport to="body">
            <Modal size="md" :show="showModal" @close="showModal = false">
              <template #header>
                <div class="flex items-center text-lg"> {{ $t('settings.delete_your_account') }}</div>
                <button @click="showModal = false" aria-label="close" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg>
                </button>
              </template>
              <template #body>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {{ $t('settings.delete_your_account') }}
                </p>
              </template>
            </Modal>
          </Teleport>
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
    return {
      showModalLang: false,
      showModal: false,
      size: 'md',
    }
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