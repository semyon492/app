import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  locale: localStorage.getItem('currLang') || 'en',
  messages,
})

export default i18n