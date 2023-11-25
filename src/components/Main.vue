<template>
  <div class="min-h-screen">
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div class="py-6 md:order-1 hidden md:block">
        <picture>
          <source type="image/webp"
                  :srcset="HeroImgWebp1 + ' 200w,' + HeroImgWebp2 + ' 400w,' + HeroImgWebp3 + ' 600w'"
                  sizes="(max-width: 800px) 100vw, 620px">          
          <img alt="Astronaut in the air" :src="HeroImgWebp"
               loading="eager" decoding="async" format="webp">
        </picture>
      </div>
      <div>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          {{ name }}
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl dark:text-gray-200">
          {{ name }} {{ $t('promo.desc') }}
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <router-link to="/register">
            <v-button color="dark" pill>
              <template #prefix>
                <v-icon name="signup" size="24" />
              </template>               
              {{ $t('auth.signup') }}             
            </v-button>
          </router-link>
          <router-link to="/login">
            <v-button color="alternative" pill>
              <template #prefix>
                <v-icon name="login" size="24" />
              </template>               
              {{ $t('auth.signin') }}            
            </v-button>            
          </router-link>
        </div>
      </div>
    </main>
  </div>

</template>
<script>
import HeroImgWebp from "../assets/images/hero.webp";
import HeroImgWebp1 from "../assets/images/hero.1.webp";
import HeroImgWebp2 from "../assets/images/hero.2.webp";
import HeroImgWebp3 from "../assets/images/hero.3.webp";
export default {
  name: 'MainPage',
  data() {
    return {
      name: import.meta.env.VITE_APP_NAME,
      HeroImgWebp:HeroImgWebp,
      HeroImgWebp1:HeroImgWebp1,
      HeroImgWebp2:HeroImgWebp2,
      HeroImgWebp3:HeroImgWebp3,
    }
  },
}
</script>