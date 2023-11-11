<template>
<NotificationGroup group="foo">
  <div class="z-40 fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div v-for="notification in notifications" :key="notification.id">
          <NotifyItem :notification="notification"/>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup> 
</template>

<script>
import NotifyItem from "@/components/notify/NotifyItem.vue";
import { fetchNotifyGet } from "@/api/notify"

export default {
  props: ['user'],
	components: {
    NotifyItem,
	},
  async mounted() {
    await this.checkNotify()


  },
  methods: {
    async checkNotify() {
      setTimeout(() => {
        fetchNotifyGet({}).then((res) => {
          if (res.status == 1) {
            if(res.data.items){
              let notify_items = res.data.items;
              let max = res.count
              for (let i = 0; i < max; i++) {
                this.$notify({
                  title: "Info",
                  text: notify_items[i].text,
                  type: "info",
                  group: "foo",
                }, 4000) // 2s
              }
            }
          } else {
            console.log('error')
          }
        })

        this.checkNotify()
      }, 3000);

    },
  },
}
</script>