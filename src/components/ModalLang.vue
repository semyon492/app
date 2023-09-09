<template>

<li class="nav-item" v-if="(list == 'li')">
    <a href="#"  class="nav-link px-2 text-muted" @click="showModalLang = true">{{ $t('language.language_name') }}</a>
</li> 

<a href="#" v-if="(list == 'a')" class="hover:underline cursor-pointer" @click="showModalLang = true">{{ $t('language.language_name') }}</a>

<Teleport to="body">
  <Modal :modalName="modal_name" :show="showModalLang" @close="showModalLang = false">
    <template #header>
      <h3>{{ $t('language.language_selection') }}</h3>
    </template>
    <template #body>
        <ul class="nav flex-column">
            <li v-for="(lang, idx) in languages" :to="lang.name" :key="idx" class="nav-item">
                <a class="nav-link" href="#" @click="setLang(lang.code)">
                    <div class="d-flex justify-content-between">
                        <div>
                            <img class="img-xl" :alt="lang.name" :src="lang.img">
                        </div>
                        <div>
                            <Tooltip :label="lang.eng_name">
                                {{ lang.name }}                          
                            </Tooltip>
                            
                            <!-- /adamdehaven/vue-custom-tooltip -->
                            <Tooltip v-if="(lang.status == 'beta')" :label="t('language.beta')">
                                <p class="text-danger">β</p>                            
                            </Tooltip>
                        </div>                        
                    </div>
                </a>
            </li>
        </ul>
    </template>
    <template #footer>        
        <button type="button" class="btn btn-secondary" @click="showModalLang = false">{{ $t('modal.close') }}</button>
    </template> 
  </Modal>
</Teleport>  
</template>

<script>
import languages_list from "../plugins/languages";
import Modal from '@/components/Modal.vue'
import { useI18n } from 'vue-i18n'
import Tooltip from '../components/Tooltip.vue'
export default {
    name:'ModalLang',
    props: {
        list: String,
        modal_name: String
    },
    components: {
        Modal,
        Tooltip
    },  
    setup() {
        // use global scope
        const { t, locale } = useI18n()
        return { t, locale }
    },
    data() {
        return {      
            languages : [],     
            showModalLang: false,
            langset: 'en',
            // modal_name: 'modalLang',
            link_type: this.list,
        }
    },
    async mounted() {
        this.languages = languages_list    
    },
    methods: {
        selectLang(){
            localStorage.setItem('currLang', this.langset);
        },
        setLang(lang){
            this.locale = lang;
            localStorage.setItem('currLang',lang);
        },
    }, 

}

</script>