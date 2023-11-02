<script>
import SettingsMenu from '@/components/SettingsMenu.vue'

export default {
  name: 'Navbar',
  props: {},
  components: {
    SettingsMenu,
  },
};
</script>

<template>
  <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4 ">
    <div class="w-full sm:grid grid-cols-5 gap-x-4 ">
      <div class="col-span-2">
        <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
          <div class="dark:bg-slate-900">
            <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
              <b class="font-black">Profile Settings</b>
            </div>
          </div>
          <div>
            <SettingsMenu/>
          </div>
        </div>
      </div>
      <div class="col-span-3">  
      <slot name="default"></slot>

    </div>
  </div>
</div>

</template>

