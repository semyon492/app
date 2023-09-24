<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100 py-5">
      <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
        <div class="card card-body rounded-3 p-4 p-sm-5">
          <router-link to="/" class="d-flex flex-row-reverse">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </router-link>
          <slot name="body">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>