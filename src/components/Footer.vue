<template>
    <div class="container">

    <footer class="py-3 my-4 d-flex justify-content-between align-items-center">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link to="/" class="nav-link px-2 text-muted">Главная</router-link>
            </li>
        <!-- <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
         -->
            <li class="nav-item">
                <router-link to="/privacy-and-terms" class="nav-link px-2 text-muted">Конфиденциальность и условия</router-link>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted"  @click="showModalLang = true">{{ $t('language.language_name') }}</a>
            </li>
        </ul>
        <p class="text-center text-muted">©2023 {{ name }}. Все права защищены</p>

    </footer>
    </div>

<Teleport to="body">
  <!-- use the modal component, pass in the prop -->
  <Modal :modalName="modalLang" :show="showModalLang" @close="showModalLang = false">
    <template #header>
      <h3>{{ $t('language.language_selection') }}</h3>
    </template>
    <template #body>
        <form>
            <label>{{ $t('language.name') }}</label>
            <select v-model="locale">
                <option value="en">en</option>
                <option value="ru">ru</option>
            </select>
        </form>
    </template>    
  </Modal>
</Teleport>
</template>

<script>
import config from "/config";
import Modal from '@/components/Modal.vue'

export default {
    name:'Footer',
    components: {
        Modal
    },
    setup() {
        const { t, locale } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })
        return { t, locale }
    },
    data() {
        return {
            name:config.title,
            showModalLang: false
        }
    }
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