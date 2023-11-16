<template>
  <button :class="cx()" :type="type" :disabled="disabled" :variant="variant" >
    <slot >
      <span>{{ label || '&nbsp;' }}</span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: ' '
    },
    type: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      default: null
    },
    disabled: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
  },
  methods: {
    cx(){
      if (this.class == null) {
          this.class_name = ''
      } else {
          this.class_name = this.class
      }
      if (this.variant == 'alternative') {
          return this.class_name + ' font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700 text-sm px-4 py-2'
      }
      if (this.variant == 'dark') {
          return this.class_name + ' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800 border-2 border-transparent flex gap-1 items-center justify-center'
      }
      if (this.variant == 'light') {
          return this.class_name + ' rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black flex gap-1 items-center justify-center'
      }
      if (this.variant == 'green') {
          return this.class_name + ' focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 text-sm px-4 py-2'
      }
      if (this.variant == 'red') {
          return this.class_name + ' btn-red focus:ring-4 focus:ring-red-300d ark:bg-red-600 dark:focus:ring-red-900 hover:bg-red-800 dark:hover:bg-red-700 '
      }                                    
      if (this.variant == 'yellow') {
          return this.class_name + ' focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900 hover:bg-yellow-500 text-sm px-4 py-2'
      }
      if (this.variant == 'purple') {
          return this.class_name + ' focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900 hover:bg-purple-800 dark:hover:bg-purple-700 text-sm px-4 py-2'
      }                        
      if (this.variant == 'pink') {
          return this.class_name + ' focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900 hover:bg-pink-800 dark:hover:bg-pink-700 text-sm px-4 py-2'
      }                        
      if (this.variant == 'default' || this.variant == null) {
          return this.class_name + ' btn-default hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'
      }
    },  
  },
  computed: {
    // disabled() {
    //     return this.$attrs.disabled || this.$attrs.disabled === '';
    // },
  },

};
</script>

<style lang="scss" scoped>
.btn-default{
  @apply px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md 
}
.btn-red{
  @apply focus:outline-none text-white bg-red-700 font-medium rounded-lg text-sm px-4 py-2
}

</style>