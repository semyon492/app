<template>
    <div class="ml-auto text-[25px] transition-50 cursor-pointer font-bold w-[35px] h-[35px] rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] flex flex-row items-center justify-center group relative ">
        <div class="translate-y-[-6px] z-[100] " @click="show = !show">...</div>
        <ul class="text-base absolute top-[110%] text-center flex flex-col" v-if="show" >
            <li @click="show = false" class="px-3 py-1 bg-[#F0F2F5] border-[#3A3B3C]/40 text-[#333]/60 hover:border-[#3A3B3C]/60 hover:text-[#333]/80 dark:bg-[#3A3B3C] rounded-md border dark:text-[#e4e6eb]/60 transition-50 dark:hover:text-[#e4e6eb] dark:border-[#3A3B3C] dark:hover:border-[#e4e6eb]/60 ">Edit</li>
            <li @click="remove" class="mt-1 px-3 py-1 bg-[#F0F2F5] border-[#3A3B3C]/40 text-[#333]/60 hover:border-[#3A3B3C]/60 hover:text-[#333]/80 dark:bg-[#3A3B3C] rounded-md border dark:text-[#e4e6eb]/60 transition-50 dark:hover:text-[#e4e6eb] dark:border-[#3A3B3C] dark:hover:border-[#e4e6eb]/60">Delete</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'WallMenu',
  props: ['wall_id','walls'],
  data() {
    return {
        show: false,
    }
  },
  methods: {
    remove() {
        this.show = false
        //   // this.$router.push('/restore')
        let example1 = this.walls
        this.walls = example1.splice(this.wall_id, 1)
    }
  },
}
</script>