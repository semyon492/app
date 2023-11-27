<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-[#242526] lg:rounded-2xl">
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
import SettingsCard from '@/components/settings/SettingsCard.vue'
import NotFound from '@/components/NotFound.vue'
export default {
  components: {
    SettingsCard,
    NotFound,
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