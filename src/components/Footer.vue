<template>
    <div class="container">

    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 text-muted">Главная</router-link></li>
        <!-- <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
         -->
        <li class="nav-item"><router-link to="/privacy-and-terms" class="nav-link px-2 text-muted">Конфиденциальность и условия</router-link></li>
        </ul>
        <p class="text-center text-muted">©2023 {{ name }}. Все права защищены</p>
    </footer>
    </div>
</template>

<script>
import config from "/config";

export default {
    name:'Footer',
    data() {
        return {
            name:config.title
        }
    }
}
</script>

<style>
.footer{
    width: 100%;
    height: 130px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    background: var(--first);
    color:var(--second);
}
</style>