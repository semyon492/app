<template>
    <div class="container">

    <footer class="py-3 my-4 d-flex justify-content-between align-items-center">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link to="/" class="nav-link px-2 text-muted">{{ $t('footer.home') }}</router-link>
            </li>
        <!-- <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
         -->
            <li class="nav-item">
                <router-link to="/privacy-and-terms" class="nav-link px-2 text-muted">{{ $t('footer.privacy') }}</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/privacy-and-terms" class="nav-link px-2 text-muted">{{ $t('footer.terms') }}</router-link>
            </li>            
            <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted"  @click="showModalLang = true">{{ $t('language.language_name') }}</a>
            </li>
        </ul>
        <p class="text-center text-muted">©2023 {{ name }}. {{ $t('footer.author') }}</p>

    </footer>
    </div>

<Teleport to="body">
  <!-- use the modal component, pass in the prop -->
  <Modal :modalName="modalLang" :show="showModalLang" @close="showModalLang = false">
    <template #header>
      <h3>{{ $t('language.language_selection') }}</h3>
    </template>
    <template #body>
        <!-- <form>
            <label>{{ $t('language.name') }}</label>
            <select v-model="locale">
                <option value="en">en</option>
                <option value="ru">ru</option>
            </select>
        </form> -->

        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link" href="#" @click="setLang('en')">
                    <div class="d-flex justify-content-between">
                        <div>
                            <img class="img-xl" alt="English" src="https://unpkg.com/language-icons/icons/en.svg">
                        </div>
                        <div>
                            English
                        </div>                        
                    </div>                    
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" @click="setLang('ru')">
                    <div class="d-flex justify-content-between">
                        <div>
                            <img class="img-xl" alt="Русский" src="https://unpkg.com/language-icons/icons/ru.svg">
                        </div>
                        <div>
                            Русский
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
import config from "/config";
import Modal from '@/components/Modal.vue'
import { useI18n } from 'vue-i18n'

export default {
    name:'Footer',
    components: {
        Modal
    },
    setup() {
        // use global scope
        const { t, locale } = useI18n()
        return { t, locale }
    },
    data() {
        return {
            name:config.title,
            showModalLang: false,
            langset: 'en'
        }
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

<style>
.footer{
    width: 100%;
    height: 130px;
    padding: 0 10px;
    background: var(--first);
    color:var(--second);
}
</style>