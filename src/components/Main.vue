<template>
<div class="container pt-3 pt-sm-4 pt-xl-5">
  <div class="row pt-md-2 pt-lg-5">
    <div class="col-md-5 d-flex flex-column mt-md-4 pt-5 pb-3 pb-sm-4 py-md-5">
      <h1 class="display-2 text-center text-md-start mb-4">{{ name }}</h1>
      <p class="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4 mb-lg-5">{{ name }} {{ $t('promo.desc') }}</p>
      <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
        <router-link to="/register" class="btn btn-primary">{{ $t('auth.signup') }}</router-link>
      </div>   
    </div>
    <div class="col-md-7 align-self-end">
      <div class="position-relative overflow-hidden mt-4 pb-3 pt-4 mx-auto me-md-0" style="max-width: 632px;">
        <div class="ratio ratio-1x1"></div>
        <img src="https://cube.webuildthemes.com/assets/images/app-1.png" class="rellax position-absolute top-0 start-0 zindex-2" data-rellax-speed="1.6" data-disable-parallax-down="md" alt="Phone" style="transform: translate3d(0px, 0px, 0px);">
      </div>
    </div>
  </div>
</div>  
</template>
<script>
import config from "/config";

export default {
    name:'Main',
    data() {
        return {
            name:config.title,
            modal_name: 'modalLang2',
            list: 'li',
        }
    },
}
</script>