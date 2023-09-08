<template>   
    <teleport to="body">
        <div ref="modal-backdrop" class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline">
          Awiwi
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
    name:'ModalLang',
    props: {
        show: {
            type: Boolean,
            default: false,
        },        
    },
    data() {
        return {
            // showModal: false
        }
    },
    setup(props) {
        const showModal = ref(false);

        watch(
            () => props.show,
            show => {
                showModal.value = show;
            },
        );

        return {
            showModal,
        };
    },    
}
</script>