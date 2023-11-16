<template>
<div class="h-screen flex items-center justify-center flex-col font-[Exo] text-white relative ">
    <img :src="roket" alt="rocket" class="fixed top-[11%] right-[35%] ">
    <img :src="astro" alt="err">
    <div class="mt-20px font-medium  text-[50px] ">OPPS!</div>
    <div class="font-light text-[30px] ">PAGE NOT FOUND</div>
    <div class="mt-[15px] flex items-center justify-center gap-x-[23px] text-[20px] text-light ">
        <router-link to="/">
            <div class="py-[5px] px-[28px] border border-white rounded-[5px] cursor-pointer hover:bg-white/20 transition-50 ">GO HOME</div>
        </router-link>
        
        <div @click="$router.go(-1)" class="py-[5px] px-[28px] border border-white rounded-[5px] cursor-pointer hover:bg-white/20 transition-50 ">GO BACK</div>
    </div>
</div>
</template>

<script>
import roket from '@/assets/images/Rocket.png'
import astro from '@/assets/images/error-astro.png'
export default {
    data() {
    return {
      roket: roket,
      astro: astro,
    }
  },
  watch: {
    $route: {
      immediate: true,
      // to, from
      handler(to) {
          document.title = to.meta.title || 'Not found';
      }
    },
  },
}
</script>