<template>
  <main v-if="(user.is_connected !== true)">
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
              <router-link to="/register" class="btn btn-primary">Зарегистрируйтесь
                бесплатно</router-link>
              <div class="mt-2 mt-sm-0 ms-sm-3">

                <!-- Rating END -->
                <i>"Я не могу поверить, что это бесплатно!"</i>
              </div>
            </div>
          </div>
        </div>
        <!-- Row END -->


        <!-- Row END -->
      </div>
    </section>
  </main>
  <main v-if="(user.is_connected)">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="absolute">
          <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
            <div id="left-bar-top" class="w-full">
              <ul>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <router-link to="/" >              
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png" class="rounded-full w-9" alt=""><span
                      class="text-myGray-800 font-bold text-tiny">Feed</span>
                  </router-link>
                </li>                  
                <li class="d-flex align-items-center gap-2 px-3 py-2 ">
                  <router-link to="/profile" >
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg" class="rounded-circle w-9" alt="">
                    <span class="fw-bold text-muted">{{ user.firstname }} {{ user.lastname }}</span>
                  </router-link>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <router-link to="/chat" >              
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png" class="rounded-full w-9" alt=""><span
                      class="text-myGray-800 font-bold text-tiny">Chat</span>
                  </router-link>
                </li>                  
                <!-- <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/friends.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Friends</span>
                </li> -->
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <router-link to="/settings" >              
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png" class="rounded-full w-9" alt=""><span
                      class="text-myGray-800 font-bold text-tiny">Настройки</span>
                  </router-link>
                </li>  
              </ul>
            </div>
            <div id="footer" class="w-full hidden 2xl:block">
              <div class="text-muted text-xs pl-1 mb-14">
                <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Privacy</router-link>·
                <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Terms</router-link>·
                <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Adversiting</router-link>·
                <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Ad Choices</router-link>·
                <router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Cookies</router-link>·<br>
                <router-link to="/privacy-and-terms" class="cursor-pointer">More</router-link>·
                <a>Naame © 2023</a>
              </div>
            </div>
          </div>
        </div>
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

export default {
  name: 'Home',
  components: {
    SettingsMenu
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

<style>
</style>