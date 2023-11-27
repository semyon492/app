<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.delete_account') }}</h5>
        </div>
        <div class="p-6">
          <v-button @click="showModal = true" variant="red">{{ $t('settings.delete_your_account') }}</v-button>
          <Teleport to="body">
            <v-modal size="md" :show="showModal" :title="$t('settings.delete_your_account')" @onDismissed="dismissed">
              <template #body>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {{ $t('settings.delete_your_account') }}
                </p>
              </template>
            </v-modal>
          </Teleport>  
        </div>
      </div>
    </SettingsCard>    
  </main>
</template>

<script>
import SettingsCard from '@/components/settings/SettingsCard.vue'
import NotFound from '@/components/NotFound.vue'

export default {
  components: {
    SettingsCard,
    NotFound,
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
  methods: {
    dismissed(){
      this.showModal = false
    },
  },
}
</script>