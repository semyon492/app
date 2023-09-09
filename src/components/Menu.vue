<template>
          <div class="absolute">
            <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
              <div id="left-bar-top" class="w-full">
                <ul class="nav flex-column">
                  <li v-for="(info, idx) in infoTiles" :key="idx" :to="info.link" class="nav-item d-flex align-items-center gap-2 px-3 py-1">
                    <router-link :to="info.link" class="nav-link d-flex align-items-center py-0">
                        <div class="">
                          <img :src="info.img" class="rounded-circle img-xl" :alt="info.text">
                        </div>
                        <div class="">
                          {{ info.text }}
                        </div>
                    </router-link>
                  </li>
                </ul>

              </div>
              <div id="footer" class="w-full hidden 2xl:block">
                <div class="text-muted text-xs pl-1 mb-14">
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">{{ $t('footer.privacy') }}</router-link>·
                  <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">{{ $t('footer.terms') }}</router-link>·
                  <a href="#" class="hover:underline cursor-pointer" @click="showModalLang = true">{{ $t('language.language_name') }}</a>·
                  <a>{{ name }} © 2023</a>
                </div>
              </div>
            </div>
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
import config from "/config";
import languages_list from "../plugins/languages";

import imgMostRecent from '@/assets/images/mostRecent.png'
import imgPp from '@/assets/images/pp.jpg'
import imgFriends from '@/assets/images/friends.png'

import Modal from '@/components/Modal.vue'
import { useI18n } from 'vue-i18n'

import Tooltip from '../components/Tooltip.vue'

export default {
    name:'Menu',
    props: ['user'],
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
            infoTiles : [], 
            languages : [], 
            name: config.title,      
            showModalLang: false,
            langset: 'en'
        }
    },
    async mounted() {
        this.languages = languages_list
        this.infoTiles = ([
            {
                link: '/',
                text: this.t('leftbar.feed'),
                img: imgMostRecent,
            },       
            {
                link: '/profile',
                text: this.t('leftbar.profile'),
                img: imgPp,
            },
            {
                link: '/',
                text: this.t('leftbar.friends'),
                img: imgFriends,
            },         
            {
                link: '/chat',
                text: this.t('leftbar.chat'),
                img: imgMostRecent,
            },
            {
                link: '/settings',
                text: this.t('leftbar.settings'),
                img: imgMostRecent,
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
<style>
.img-m {height: 1.5rem;width: 1.5rem}
.img-xl {height: 2rem;width: 2rem}
.img-xl {height: 2rem;width: 2rem}
.img-3xl {height: 3.5rem;width: 3.5rem;}
</style>