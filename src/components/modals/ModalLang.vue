<template>
  <li class="nav-item" v-if="(list == 'li')">
    <a href="#" class="nav-link px-2 text-muted" @click="showModal = true">{{ $t('language.language_name') }}</a>
  </li>
  <a href="#" v-if="(list == 'a')" class="text-black dark:text-white p-1"
     @click="showModal = true">{{ $t('language.language_name') }}</a>
  <Teleport to="body">
    <Modal size="md" :show="showModal" :title="$t('language.language_selection')" @close="showModal = false">
      <!-- <template #header>
          <div class="flex items-center text-lg"> {{ $t('language.language_selection') }} </div>
          <button @click="showModal = false" aria-label="close" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          </button>
      </template> -->
      <template #body>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="(lang, idx) in languages" :to="lang.name" :key="idx" class="">
            <a class="nav-link" href="#" @click="setLang(lang.code);showModal = false">
              <div class="d-flex justify-content-between">
                <div>
                  <img class="img-xl" :alt="lang.name" :src="lang.img">
                </div>
                <div class="dark:text-gray-200">
                  <Tooltip :label="lang.eng_name">
                    {{ lang.name }}
                  </Tooltip>
                  <Tooltip v-if="(lang.status == 'beta')" :label="t('language.beta')">
                    <p class="text-red-600 dark:text-red-500 p-2">β</p>
                  </Tooltip>
                </div>
              </div>
            </a>
          </div>
        </div>
      </template>
    </Modal>
  </Teleport>
</template>

<script>
import Modal from '@/ui/modal/Modal.vue'
import {useI18n} from 'vue-i18n'
import Tooltip from '@/ui/Tooltip.vue'

//languages img
import img_by from '@/assets/images/lang/by.png'
import img_de from '@/assets/images/lang/de.svg'
import img_en from '@/assets/images/lang/en.svg'
import img_es from '@/assets/images/lang/es.svg'
import img_fr from '@/assets/images/lang/fr.svg'
import img_ja from '@/assets/images/lang/ja.svg'
import img_ru from '@/assets/images/lang/ru.svg'
import img_uk from '@/assets/images/lang/uk.svg'
import img_zh from '@/assets/images/lang/zh.svg'

export default {
  name: 'ModalLang',
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
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      languages: [],
      showModalLang: false,
      showModal: false,
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
    ]);
  },
  methods: {
    selectLang() {
      localStorage.setItem('currLang', this.langset);
    },
    setLang(lang) {
      this.locale = lang;
      localStorage.setItem('currLang', lang);
    },
  },
}
</script>