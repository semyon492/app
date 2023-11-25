<template>
  <li class="nav-item" v-if="(list == 'li')">
    <a href="#" class="nav-link px-2 text-muted" @click="showModal = true">{{ $t('language.language_name') }}</a>
  </li>
  <a href="#" v-if="(list == 'a')" class="text-black dark:text-white p-1"
     @click="showModal = true">{{ $t('language.language_name') }}</a>
  <Teleport to="body">
    <v-modal size="md" :show="showModal" :title="$t('language.language_selection')" @onDismissed="dismissed">
      <template #body>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="(lang, idx) in languages" :to="lang.name" :key="idx" class="">
            <a class="nav-link" href="#" @click="setLang(lang.code);">
              <div class="d-flex justify-content-between">
                <div>
                  <v-avatar :initials="lang.code"></v-avatar>
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
      <template #footer>
        <div class="flex justify-between">
          <v-button @click="dismissed" pill>{{ $t('modal.close') }}</v-button>
        </div>
      </template>
    </v-modal>
  </Teleport>  
</template>

<script>
import {useI18n} from 'vue-i18n'
import Tooltip from '@/ui/Tooltip.vue'
import languages from '@/plugins/languages'
export default {
  name: 'ModalLang',
  props: {
    list: String,
    modal_name: String
  },
  components: {
    Tooltip
  },
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      languages,
      showModalLang: false,
      showModal: false,
      langset: 'en',
      link_type: this.list,
    }
  },
  mounted() {

  },
  methods: {
    selectLang() {
      localStorage.setItem('currLang', this.langset);
    },
    setLang(lang) {
      this.locale = lang;
      localStorage.setItem('currLang', lang);
    },
    dismissed(){
      this.showModal = false
    },
  },
}
</script>