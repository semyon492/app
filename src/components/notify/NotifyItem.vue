<template>
    <div v-if="notification.type === 'info'"
    	class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md">
			<div class="flex items-center justify-center w-12 bg-blue-500">
					<Icon type="info" class="w-6 h-6 text-white fill-current"/>
			</div>
			<div class="px-4 py-2 -mx-3">
					<div class="mx-3">
					<span class="font-semibold text-blue-500">{{ notification.title }}</span>
					<p class="text-sm text-gray-600">{{ notification.text }}</p>
					</div>
			</div>
			<audio ref="audioElement" :src="notify_mp3"></audio>
    </div>
    <div v-if="notification.type === 'warning'"
    	class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md">
			<div class="flex items-center justify-center w-12 bg-yellow-500">
				<Icon type="info" class="w-6 h-6 text-white fill-current"/>
			</div>
			<div class="px-4 py-2 -mx-3">
					<div class="mx-3">
					<span class="font-semibold text-yellow-500">{{ notification.title }}</span>
					<p class="text-sm text-gray-600">{{ notification.text }}</p>
					</div>
			</div>
			<audio ref="audioElement" :src="notify_mp3"></audio>
    </div>
</template>

<script>
import notification_mp3 from "@/assets/notification.mp3";
import Icon from '@/ui/Icon.vue'

export default {
  components: {
    Icon,
  },
  props: ['notification'],
  data() {
  return {
      notify_mp3: notification_mp3,
    }
  },
  mounted () {
    try {
      this.$refs.audioElement.play();
    } catch (err) {
    }
  }, 
}
</script>