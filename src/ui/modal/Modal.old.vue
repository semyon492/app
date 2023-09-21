<template>
<Button  type="button" :variant="variant" @click="showModalLang = true">
    <span >{{ label || '&nbsp;' }}</span>
</Button>
    <Teleport to="body">
    <BaseModal :modalName="modal_name" :show="showModalLang" @close="showModalLang = false">
        <template #header>
            <slot name="header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" @click="showModalLang = false"></button>
            </slot>
        </template>
        <template #body>
            <slot name="body">
                <p>Modal body text goes here.</p>
            </slot>
        </template>
        <template #footer>        
            <slot name="footer">
                <button type="button" class="btn btn-secondary" @click="showModalLang = false">Close</button>
                <!-- <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button> -->
            </slot>
        </template> 
    </BaseModal>
    </Teleport>


</template>

<script>
// import BaseModal from '../../redvue/modal/BaseModal.vue'
// import BaseModal from 'BaseModal.vue'
import BaseModal from './MainModal.vue'
import Button from './../button/Button.vue'

export default {
    name: 'Modal',
    components: {
        BaseModal,
        Button
    },
    emits: ['showModalLang'],
    props:{
        modal_name: {
            type: String,
            default: 'Modal'
        }, 
        showModalLang: false,
        view: false,
        show: Boolean,
        modalName: String,
        class: {
            type: String,
            default: null
        }, 
        button: {
            type: String,
            default: 'button'
        },              
        label: {
            type: String,
            default: 'ttt'
        },
        variant: {
            type: String,
            default: null
        },     
    },
    methods: {
        cx(){
            if (this.variant == 'info') {
                return 'btn btn-primary'
            }

            if (this.variant == 'secondary') {
                return 'btn btn-secondary'
            }


            if (this.variant == 'default' || this.variant == null) {
                return 'btn btn-primary'
            }
        }, 
        dialog(){
            this.showModalLang = true

            return true
        } 
    },  
    data() {
        return {
            open: false,
            // modalName: 'modal'
        }
    },   
}
</script>