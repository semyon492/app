<template>
    <footer class="py-2 px-6 xl:max-w-6xl xl:mx-auto">
        <div class="justify-between items-center block md:flex">
            <div class="flex items-center justify-center mb-6 md:mb-0">
                <div class="text-center md:text-left">
                    <b>©2023 <router-link to="/" >{{ name }}</router-link>.</b>  {{ $t('footer.author') }}
                    <router-link to="/privacy-and-terms" class="text-black dark:text-white p-1">{{ $t('footer.privacy') }}</router-link>
                    <router-link to="/privacy-and-terms" class="text-black dark:text-white p-1">{{ $t('footer.terms') }}</router-link>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div class="md:py-2">
                    <ModalLang :modal_name="modal_name" :list="list" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import ModalLang from '../components/modals/ModalLang.vue'

export default {
    components: {
        ModalLang
    },
    data() {
        return {
            name:import.meta.env.VITE_APP_NAME,
            modal_name: 'modalLang2',
            list: 'a',
        }
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