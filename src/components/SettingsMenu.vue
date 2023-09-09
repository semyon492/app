<template>
    <router-link v-for="(info, idx) in infoTiles" :key="idx" active-class="active" :to="info.link" class="list-group-item list-group-item-action" :color="info.color">
    {{ info.text }}
    </router-link>
</template>
  
<script>
import { useI18n } from 'vue-i18n'

  export default {
    name: 'SettingsMenu',
    setup() {
        // use global scope
        const { t, locale } = useI18n()
        return { t, locale }
    },
    data() {
      return {
        infoTiles : [], 
        langset: 'en'
      }
    },
    async mounted() {
      this.infoTiles = ([
          {
            link: '/settings',
            text: this.t('settings.account'),
          },
          {
            link: '/settings/password',
            text: this.t('settings.password'),
          },
          {
            link: '/settings/privacy',
            text: this.t('settings.privacy'),
          },
          {
            link: '/settings/email',
            text: this.t('settings.email'),
          },
          {
            link: '/settings/notifications',
            text: this.t('settings.notifications'),
          },
          {
            link: '/settings/delete',
            text: this.t('settings.delete'),
          },

        ]);
    },
    methods: {

    },
  }
</script>