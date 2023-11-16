<template>   
  <Transition :size="size" >
    <div v-if="show" class="modal-mask">
      <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
        <div :class="'relative p-4 w-full h-full md:h-auto ' + box_size">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="p-4 rounded-t flex justify-between items-center border-b border-gray-200 dark:border-gray-600">
                <slot name="header">
                    <div class="flex items-center text-lg dark:text-white"> {{ title }}</div>
                    <button @click="$emit('close')" aria-label="close" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </slot>
            </div>
            <div class="p-6">
                <slot name="body">
                </slot>
            </div>
            <div class="p-6 rounded-b border-gray-200 border-t dark:border-gray-600">
                <slot name="footer">
                    <div class="flex justify-between">
                        <button type="button" class="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"  @click="$emit('close')"> {{ btn_close_name }} </button>
                    </div>                
                </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
  
<script>
import { useI18n } from 'vue-i18n'

export default {
  props: {
      show: Boolean,
      modalName: String,
      title: 'Title',
      close: 'Close',
      size: String,
      
  }, 
  setup() {
    // use global scope
    const { t, locale } = useI18n()
    return { t, locale }
  },
  data() {
      return {
          open: false,
          btn_close_name: '',
          box_size: 'md'
      }
  },
  methods: {
      classSize(){
          if (this.size == null) {
              this.size = 'md'
          }             
          if (this.size == 'xs') {return 'max-w-xs'}
          if (this.size == 'sm') {return 'max-w-sm'}
          if (this.size == 'md') {return 'max-w-md'}
          if (this.size == 'lg') {return 'max-w-lg'}
          if (this.size == 'xl') {return 'max-w-xs'}
          if (this.size == '2xl') {return 'max-w-2xl'}
          if (this.size == '3xl') {return 'max-w-3xl'}
          if (this.size == '4xl') {return 'max-w-4xl'}
          if (this.size == '5xl') {return 'max-w-5xl'}
          if (this.size == '6xl') {return 'max-w-6xl'}
          if (this.size == '7xl') {return 'max-w-7xl'}
          // return modalSizeClasses[this.size]
      },  
  },    
  async mounted() {
    // console.log(this.size);
    if (this.size == 'xs') {this.box_size = 'max-w-xs'}
    if (this.size == 'sm') {this.box_size = 'max-w-sm'}
    if (this.size == 'md') {this.box_size = 'max-w-md'}
    if (this.size == 'lg') {this.box_size = 'max-w-lg'}
    if (this.size == 'xl') {this.box_size = 'max-w-xs'}
    if (this.size == '2xl') {this.box_size = 'max-w-2xl'}
    if (this.size == '3xl') {this.box_size = 'max-w-3xl'}
    if (this.size == '4xl') {this.box_size = 'max-w-4xl'}
    if (this.size == '5xl') {this.box_size = 'max-w-5xl'}
    if (this.size == '6xl') {this.box_size = 'max-w-6xl'}
    if (this.size == '7xl') {this.box_size = 'max-w-7xl'}

    // if (this.close == null) {
    //   this.btn_close_name = 'Close'
    // }else{
    //   this.btn_close_name = this.close
    // }

    this.btn_close_name = this.close ? this.close : this.t('modal.close')
    // this.btn_close_name =  this.t('modal.close')
  } 
}
</script>
  
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>