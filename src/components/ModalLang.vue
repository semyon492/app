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
// import languages_list from "../plugins/languages";
import Modal from '@/components/Modal.vue'
import { useI18n } from 'vue-i18n'
import Tooltip from '../components/Tooltip.vue'

//languages img
import img_ab from '../assets/images/lang/ab.svg'
import img_by from '../assets/images/lang/by.png'
import img_de from '../assets/images/lang/de.svg'
import img_en from '../assets/images/lang/en.svg'
import img_es from '../assets/images/lang/es.svg'
import img_fr from '../assets/images/lang/fr.svg'
import img_ja from '../assets/images/lang/ja.svg'
import img_ru from '../assets/images/lang/ru.svg'
import img_uk from '../assets/images/lang/uk.svg'
import img_zh from '../assets/images/lang/zh.svg'

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
        this.languages = ([
        {
        code: 'de',
        status: 'beta',
        name: 'Deutsch',
        eng_name: 'Deutsch',
        img: img_de,
    },
    {
        code: 'en',
        status: 'stable',
        name: 'English',
        eng_name: 'English',
        img: img_en,
    },
    {
        code: 'es',
        status: 'beta',
        name: 'Español',
        eng_name: 'Spanish',
        img: img_es,
    },
    {
        code: 'fr',
        status: 'beta',
        name: 'Français',
        eng_name: 'French',
        img: img_fr,

    },
    {
        code: 'ru',
        status: 'stable',
        name: 'Русский',
        eng_name: 'Russian',
        img: img_ru,
    },
    {
        code: 'zh',
        status: 'beta',
        name: '汉语',
        eng_name: 'Chinese',
        img: img_zh,
    },
    {
        code: 'uk',
        status: 'beta',
        name: 'Українська',
        eng_name: 'Ukrainian',
        img: img_uk,
    },
    {
        code: 'by',
        status: 'beta',
        name: 'Беларуская',
        eng_name: 'Belarusian',
        img: img_by,
    },
    {
        code: 'ja',
        status: 'beta',
        name: '日本語',
        eng_name: 'Japanese',
        img: img_ja,
    },
    {
        code: 'ab',
        status: 'beta',
        name: 'Аҧсшәа',
        eng_name: 'Abkhazian',
        img: img_ab,
    },
        ]);
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