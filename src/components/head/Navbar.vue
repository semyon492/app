<script>
export default {
  props: {
    class: {
      type: String,
      default: null
    },
    isShowMenuOnMobile: false,
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      class_name: {
        type: String,
        default: null
      },
      isShowMenu: {
        type: Boolean,
        default: false
      },
    }
  },
  async mounted() {
    if (!this.isMobile) {
      return this.isShowMenu = true
    } else {
      return this.isShowMenu = this.isShowMenuOnMobile
    }

  },
};
</script>

<template>
  <nav class="border-gray-200 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <slot name="logo"/>
      <button @click="isShowMenu = !isShowMenu" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <slot name="menuIcon">
          <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </slot>
      </button>
      <slot name="default" :isShowMenu="isShowMenu"/>
      <div v-if="this.$slots.rightSide" class="flex md:order-2 hidden md:flex">
        <slot name="rightSide"></slot>
      </div>
    </div>
  </nav>
</template>

