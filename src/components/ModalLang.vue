<template>

<li class="nav-item" v-if="(list === 'li')">
    <a href="#"  class="hover:underline cursor-pointer" @click="showModalLang = true">{{ $t('language.language_name') }}</a>
</li> 

<a href="#" v-if="(list == null)" class="hover:underline cursor-pointer" @click="showModalLang = true">{{ $t('language.language_name') }}</a>

<Teleport to="body">
  <!-- use the modal component, pass in the prop -->
  <Modal :modalName="modalLang" :show="showModalLang" @close="showModalLang = false">
    <template #header>
      <h3>{{ $t('language.language_selection') }}</h3>
    </template>
    <template #body>
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link" href="#" @click="setLang('ru')">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <img class="img-xl" alt="Русский" src="https://unpkg.com/language-icons/icons/ru.svg">
                        </div>
                        <div>Русский</div>                        
                    </div>
                </a>
            </li>
            <li v-for="(lang, idx) in languages" :to="lang.name" :key="idx" class="nav-item">
                <a class="nav-link" href="#" @click="setLang(lang.code)">
                    <div class="d-flex justify-content-between">
                        <div>
                            <img class="img-xl" :alt="lang.name" :src="lang.img">
                        </div>
                        <div>
                            {{ lang.name }}
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
            langset: 'en'
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