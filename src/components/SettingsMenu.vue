<template>
    <router-link v-for="(info, idx) in infoTiles" :key="idx" active-class="active" :to="info.link" class="list-group-item list-group-item-action" :color="info.color">
    {{ info.text }}
    </router-link>
</template>
  
<script>
  export default {
    name: 'SettingsMenu',
    data() {
      return {
        infoTiles : [], 
      }
    },
    async mounted() {
      this.infoTiles = ([
          {
            link: '/settings',
            text: 'Account',
          },
          {
            link: '/settings/password',
            text: 'Password',
          },
          {
            link: '/settings/privacy',
            text: 'Privacy and safety',
          },
          {
            link: '/settings/email',
            text: 'Email notifications',
          },
          {
            link: '/settings/notifications',
            text: 'Web notifications',
          },
          {
            link: '/settings/delete',
            text: 'Delete account',
          },

        ]);
    },
    methods: {

    },
  }
</script>