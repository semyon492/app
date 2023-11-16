import {createI18n} from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'
// import messages from '@intlify/unplugin-vue-i18n/messages'

if (localStorage.getItem('currLang') == null) {
    localStorage.setItem('currLang', 'en');
}
import de from '@/locales/de.json'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'
import ru from '@/locales/ru.json'
import zh from '@/locales/zh.json'
import uk from '@/locales/uk.json'
import by from '@/locales/by.json'
import ja from '@/locales/ja.json'

const i18n = createI18n({
    locale: localStorage.getItem('currLang') || 'en',
    messages: {
        de,
        en,
        es,
        fr,
        ru,
        uk,
        by,
        ja,
        zh
    }
})

export default i18n