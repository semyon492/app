<template>
  <div class="posts">
    <div v-for="(wall) in walls" :key="wall.id">
      <WallItem :wall="wall" :user="user"/>
    </div>
  </div>
</template>

<script>
import WallItem from '@/components/walls/Item.vue'

export default {
  props: ['user','walls'],
  components: {
    WallItem,
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
  },
}
</script>