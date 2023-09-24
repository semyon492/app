<template>
  <div class="min-h-screen">
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div class="py-6 md:order-1 hidden md:block">
        <picture>
          <source type="image/avif"
                  srcset="https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z2fxInz.avif 200w,https://astroship.web3templates.com/_astro/hero.6fdd0dc6_1quXLg.avif 400w,https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z1uQg5n.avif 600w"
                  sizes="(max-width: 800px) 100vw, 620px">
          <source type="image/webp"
                  srcset="https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z1srnlO.webp 200w,https://astroship.web3templates.com/_astro/hero.6fdd0dc6_2dBjN1.webp 400w,https://astroship.web3templates.com/_astro/hero.6fdd0dc6_ZHJU3C.webp 600w"
                  sizes="(max-width: 800px) 100vw, 620px">
          <source type="image/png"
                  srcset="https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z106W2i.png 200w,https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z21SOKH.png 400w,https://astroship.web3templates.com/_astro/hero.6fdd0dc6_1NsCdR.png 600w"
                  sizes="(max-width: 800px) 100vw, 620px">
          <img alt="Astronaut in the air" src="https://astroship.web3templates.com/_astro/hero.6fdd0dc6_1NsCdR.png"
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
          <router-link to="/register" rel="noopener"
                       class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800 border-2 border-transparent flex gap-1 items-center justify-center">
            <svg class="text-white w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"/>
              <polyline points="9 15 12 12 15 15"/>
              <line x1="12" y1="12" x2="12" y2="21"/>
            </svg>
            {{ $t('auth.signup') }}
          </router-link>
          <router-link to="/login" rel="noopener"
                       class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black flex gap-1 items-center justify-center">
            <svg class="text-black w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
            {{ $t('auth.signin') }}
          </router-link>
        </div>
      </div>
    </main>
  </div>

</template>
<script>
export default {
  name: 'MainPage',
  data() {
    return {
      name: import.meta.env.VITE_APP_NAME,
    }
  },
}
</script>