<template>
  <main v-if="(user.is_connected !== true)">
    <Main />
  </main>
  <main v-if="(user.is_connected)">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Menu  :user="user"/>
        </div>
        <div class="col-10">
          <div class="row">
						<div class="col-md-3 col-xl-2">

							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Profile Settings</h5>
								</div>

								<div class="list-group list-group-flush" role="tablist">
                  <SettingsMenu />     
								</div>
							</div>
						</div>

						<div class="col-md-9 col-xl-10">
							<div class="tab-content">
								<div class="tab-pane fade show active" id="account" role="tabpanel">

									<div class="card">
										<div class="card-header">
											<div class="card-actions float-end">
												<a href="#" class="me-1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw align-middle"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
												</a>
												<div class="d-inline-block dropdown show">
													<a href="#" data-bs-toggle="dropdown" data-bs-display="static">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical align-middle"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
													</a>

													<div class="dropdown-menu dropdown-menu-end">
														<a class="dropdown-item" href="#">Action</a>
														<a class="dropdown-item" href="#">Another action</a>
														<a class="dropdown-item" href="#">Something else here</a>
													</div>
												</div>
											</div>
											<h5 class="card-title mb-0">Email</h5>
										</div>
										<div class="card-body">

										</div>
									</div>


								</div>
							</div>
						</div>
					</div>
        </div>
      </div>
    </div>    
  </main>

  <!-- <button class="change_view" @click="this.name = 'big_view'">Change</button> -->
</template>

<script>
import Axios from "axios";
import config from "/config";
import SettingsMenu from '@/components/SettingsMenu.vue'
import Menu from '@/components/Menu.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    Menu,
    Main
  },  
  props: ['user'],
  data() {
    return {
      name: config.title,
    }
  },
  async mounted() {
  },
  methods: {
  },
}
</script>