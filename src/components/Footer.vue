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
        <button id="show-modal" @click="showModal = true">Show Modal</button>
    </footer>
    </div>

<transition name="modal">
  <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <template v-slot:header>
      <h3>custom header</h3>
    </template>
  </Modal>
  </transition>

</template>

<script>
import config from "/config";
import Modal from '@/components/ModalLang.vue'

export default {
    name:'Footer',
    data() {
        return {
            name:config.title,
            showModal: false
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