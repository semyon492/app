<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="min-h-screen w-[98.5vw] overflow-x-hidden pb-7 ">
      <Jumbotron :profile="profile" :id="id" />
      <FriendsCard :profile="profile" :id="id" :friends="friends" :user="user" />
    </div>
  </main>
</template>

<script>
import { fetchProfile } from "@/api/user"
import { fetchFriendsAll } from "@/api/friends"
import Main from '@/components/Main.vue'
import Icon from '@/ui/Icon.vue'

import Jumbotron from '@/components/profile/Jumbotron.vue'
import FriendsCard from '@/components/friends/Card.vue'

export default {
  name: 'Friends',
  components: {
    Main,
    Icon,
    Jumbotron,
    FriendsCard
  },
  props: ['user', 'id'],
  data() {
    return {
      profile: {
        first_name:'',
        last_name:'',
      }, 
      friends: null,      
    }
  },
  async mounted() {
    fetchProfile({
        id: this.id
    }).then((res) => {
      if (res.status == 1) {
        this.profile.id = res.data.id;
        this.profile.first_name = res.data.first_name;
        this.profile.last_name = res.data.last_name;
        this.profile.photo = res.data.photo;        
        this.profile.photo_50 = res.data.photo_50;
        this.profile.photo_100 = res.data.photo_100;
        this.profile.owner = res.data.owner;
        this.profile.bio = res.data.bio;
        this.wall_num = res.data.wall_num;
      }
    }) 
    fetchFriendsAll({
      user: this.id
    }).then((res) => {
      if (res.status == 1) {
        this.friends= res.data.items;
      }
    })    
  },
}
</script>