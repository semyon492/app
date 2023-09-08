<template>
    <section class="pt-5 pb-0 position-relative">
      <!-- Container START -->
      <div class="container-fluid">
        <!-- Row START -->
        <div class="row text-center position-relative z-index-1">
          <div class="col-lg-7 mx-auto">
            <!-- Heading -->
            <h1 class="display-3">Лучшее социальное приложение</h1>
            <p class="lead">Увидеть решительную доброту, счастье, застенчивую вежливость, домашнюю
              обстановку, но понять, что смеющаяся шестерка сделала далеко.</p>
            <div class="d-sm-flex justify-content-center">
              <!-- button -->
              <!-- <button class="btn btn-primary">Зарегистрируйтесь бесплатно</button> -->
              <router-link to="/register" class="btn btn-primary">{{ $t('auth.signup') }}</router-link>
              <div class="mt-2 mt-sm-0 ms-sm-3">

                <!-- Rating END -->
                <i>"Я не могу поверить, что это бесплатно!"</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
    name:'Main',
}
</script>