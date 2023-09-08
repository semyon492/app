<template>
    <div class="container">

    <footer class="py-3 my-4 d-flex justify-content-between align-items-center">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 text-muted">Главная</router-link></li>
        <!-- <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
         -->
        <li class="nav-item"><router-link to="/privacy-and-terms" class="nav-link px-2 text-muted">Конфиденциальность и условия</router-link></li>
        </ul>
        <p class="text-center text-muted">©2023 {{ name }}. Все права защищены</p>
        <button type="button" @click="showModal = !showModal" class="" >Open Modal</button>
    </footer>
    </div>

    <ModalLang :show="showModal" />
</template>

<script>
import config from "/config";
import ModalLang from '@/components/ModalLang.vue'

export default {
    name:'Footer',
    components: {
        ModalLang
    },
    data() {
        return {
            name:config.title,
            showModal: false
        }
    },
    setup() {
        const showModal = ref(false);
        return {
            showModal,
        };
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