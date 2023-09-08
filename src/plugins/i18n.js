import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
import messages from '@intlify/unplugin-vue-i18n/messages'

if (localStorage.getItem('currLang') == null) {
  localStorage.setItem('currLang', 'en');
}
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import fr from '@/locales/fr.json'

const i18n = createI18n({
  locale: localStorage.getItem('currLang') || 'en',
  messages: {
    en,
    ru,
    fr
  }
})

export default i18n