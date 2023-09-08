<template>   
  <Transition name="modalLang">
    <div v-if="show" class="modal-mask">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <slot name="header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" @click="$emit('close')"></button>
            </slot>
            </div>

            <div class="modal-body">
            <slot name="body">
                <p>Modal body text goes here.</p>
            </slot>
            </div>

            <div class="modal-footer">
            <slot name="footer">
                <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
            </slot>
            </div>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script>
export default {
    name:'Modal',
    props: {
        show: Boolean
    },
    data() {
        return {
            open: false
        }
    },   
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
</style>