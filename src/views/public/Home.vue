<template>
  <main v-if="(is_connected !== true)">
    <section class="pt-5 pb-0 position-relative">
      <!-- Container START -->
      <div class="container">
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
  <main v-if="(is_connected)">
    <div class="row">
      <div class="col-lg-3 relative w-80 hidden xl:block">
        <div class="absolute">
          <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
            <div id="left-bar-top" class="w-full">
              <ul>
                <li class="d-flex align-items-center gap-2 px-3 py-2 ">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg" class="rounded-circle w-9" alt="">
                  <span class="fw-bold text-muted">{{ user.firstname }} {{ user.lastname }} Elliot Anderson</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/friends.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Friends</span>
                </li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/groups.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Groups</span>
                </li>

                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/marketplace.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Marketplace</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/watch.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Watch</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/memories.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Memories</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/saved.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Saved</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/pages.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Pages</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/events.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Events</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/jobs.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Jobs</span></li>
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Most Recent</span></li>
              </ul>
            </div>
            <div id="footer" class="w-full hidden 2xl:block">
              <div class="text-muted text-xs pl-1 mb-14">
                <a class="hover:underline cursor-pointer">Privacy</a>·
                <a class="hover:underline cursor-pointer">Terms</a>·
                <a class="hover:underline cursor-pointer">Adversiting</a>·
                <a class="hover:underline cursor-pointer">Ad Choices</a>·
                <a class="hover:underline cursor-pointer">Cookies</a>·<br>
                <a class="cursor-pointer">More</a>·
                <a>Burkay © 2021</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 flex-1">
        <div
            class="h-auto desktop:w-180 laptop:w-160 lg:w-160 sm:w-140 w-full sm:m-auto p-1 text-xs text-myGray-800 font-semibold mobile-x:text-tiny mobile-x:p-8">
          <div class="flex flex-col gap-4">
            <div id="storie" class="p-2 bg-myGray-150 rounded-lg">
              <div
                  class="w-full h-18 rounded-lg py-1 px-2 flex items-center gap-3 cursor-pointer hover:bg-myGray-200 transition-colors duration-300">
                <div id="post-svg-plus" class="p-2.5 bg-face-blue-light rounded-full cursor-pointer">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       class="w-5 text-face-blue">
                    <g fill-rule="evenodd" transform="translate(-446 -350)">
                      <g fill-rule="nonzero">
                        <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                              transform="translate(354.5 159.5)"></path>
                        <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                              transform="translate(354.5 159.5)"></path>
                      </g>
                    </g>
                  </svg></div>
                <div id="title" class="flex flex-col"><span class="mobile-x:text-lg text-tiny">Create
                                        Story</span><span class="mobile-x:text-tiny text-xs text-myGray-600">Share a
                                        photo or write something.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 relative w-80 hidden lg:block">
        <div class="absolute">
          <div class="bg-myGray-100 h-screen px-5 py-5 hidden w-80 lg:block fixed">
            <div id="contacts" class="w-full flex items-center justfiy-between text-myGray-800"><span
                class="flex-1 font-semibold text-base pl-5">Contacts</span>
              <div id="contact-buttons" class="flex gap-1">
                <div
                    class="p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                       class="w-4">
                    <g fill-rule="evenodd" transform="translate(-448 -544)">
                      <path
                          d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602">
                      </path>
                    </g>
                  </svg></div>
                <div
                    class="p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                       class="w-4">
                    <g fill-rule="evenodd" transform="translate(-448 -544)">
                      <g fill-rule="nonzero">
                        <path
                            d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                            transform="translate(448 544)"></path>
                        <path
                            d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                            transform="translate(448 544)"></path>
                        <path
                            d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                            transform="translate(448 544)"></path>
                        <path
                            d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                            transform="translate(448 544)"></path>
                      </g>
                    </g>
                  </svg></div>
                <div
                    class="p-2 rounded-full hover:bg-myGray-200 cursor-pointer transition-colors duration-300">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       class="w-4">
                    <g fill-rule="evenodd" transform="translate(-446 -350)">
                      <path
                          d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                      </path>
                    </g>
                  </svg></div>
              </div>
            </div>
            <div id="firends" class="border-b border-myGray-250">
              <ul>
                <li
                    class="flex items-center gap-3 text-myGray-800 font-bold text-tiny cursor-pointer hover:bg-myGray-150 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/angela-pp.jpg" class="w-10 h-10 rounded-full"
                       alt=""><span>Angela Moss</span></li>
              </ul>
              <ul>
                <li
                    class="flex items-center gap-3 text-myGray-800 font-bold text-tiny cursor-pointer hover:bg-myGray-150 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/tyrell-pp.jpg" class="w-10 h-10 rounded-full"
                       alt=""><span>Tyrell Wellick</span></li>
              </ul>
              <ul>
                <li
                    class="flex items-center gap-3 text-myGray-800 font-bold text-tiny cursor-pointer hover:bg-myGray-150 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/darlene-pp.jpg" class="w-10 h-10 rounded-full"
                       alt=""><span>Darlene Alderson</span></li>
              </ul>
              <ul>
                <li
                    class="flex items-center gap-3 text-myGray-800 font-bold text-tiny cursor-pointer hover:bg-myGray-150 rounded-lg my-2 px-3 py-2 transition-colors duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/dominique-pp.jpg" class="w-10 h-10 rounded-full"
                       alt=""><span>Dominique DiPierro</span></li>
              </ul>
            </div>
            <div id="group-conversation" class="mt-2">
              <div class="my-4 font-semibold text-base text-myGray-650 px-3"> Group conversations </div>
              <div
                  class="flex items-center gap-3 w-full cursor-pointer hover:bg-myGray-150 p-3 rounded-lg transition-colors duration-300">
                <div id="svg-box" class="p-2 rounded-full bg-myGray-200 text-myGray-800"><svg
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    class="w-5">
                  <g fill-rule="evenodd" transform="translate(-446 -350)">
                    <g fill-rule="nonzero">
                      <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                            transform="translate(354.5 159.5)"></path>
                      <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                            transform="translate(354.5 159.5)"></path>
                    </g>
                  </g>
                </svg></div><span class="text-myGray-800 font-semibold text-tiny">Create New
                                    Group</span>
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


export default {
  name: 'Home',
  props: ['id'],
  data() {
    return {
      nbr_article: 0,
      all_articles: [],
      selected_articles: [],
      fav_articlesId: [],
      fav_articlesFavId: [],
      list_fav_articles: [],
      search: '',

      user_id: null,
      is_connected: false,
      show_fav: false,
      name: config.title,
      access_token : {
        access_token: ''
      },
      user : []
    }
  },
  async mounted() {
    this.is_connected = false;
    if (!!localStorage.getItem('token')){
      this.is_connected = true;
      this.access_token.access_token = localStorage.getItem('token');
    }     
    await Axios.post(config.domain + "account/getinfo", {
                access_token: localStorage.getItem('token')
        })
        .then(res => {
            console.log(res.data);
            this.user = res.data;
            if(res.data.roles == 'ROLE_ADMIN'){
                this.is_admin = true;
            } 
        })
    // console.log("Token : " + (this.is_connected == true))







    // return await this.init_articles().finally(
    //     () => {
    //         console.log("test : " + this.is_connected == false)
    //         if(this.is_connected) {
    //             console.log("gergerbgaerbgçbzeuiezugbdiycfvqsyuev")
    //             this.getUserID().finally(
    //             () => {
    //                 console.log("trttt")
    //                 this.get_fav_articles().finally( () => {

    //                     let parent_btn = document.getElementById("pages_choice")
    //                     let nbr_btn_page = Math.ceil(this.nbr_article/9)
    //                     for(let i=0; (this.id < nbr_btn_page)?i<=nbr_btn_page:i<nbr_btn_page; i++){
    //                         let btn = document.createElement("a");
    //                         if(i == nbr_btn_page){
    //                             btn.innerHTML = '<i class="fa fa-angle-right">';
    //                                 btn.classList.add("next");
    //                                 btn.href="/home/"+ (parseInt(this.id)+1);
    //                             }else{
    //                                 btn.innerHTML = i+1;
    //                                 btn.href="/home/"+ (i+1);
    //                             }
    //                             btn.classList.add("page");
    //                             parent_btn.appendChild(btn);
    //                         }

    //                         let list_pages_btn = document.getElementsByClassName("page");
    //                     list_pages_btn[this.id - 1].classList.add("selected_page");

    //                     document.getElementById("home_link").className = ["router-link-exact-active"];

    //                     this.select_articles()
    //                     this.sort_article()
    //                 })
    //             })
    //         } else {
    //             console.log("else")
    //             let parent_btn = document.getElementById("pages_choice")
    //             let nbr_btn_page = Math.ceil(this.nbr_article/9)
    //             for(let i=0; (this.id < nbr_btn_page)?i<=nbr_btn_page:i<nbr_btn_page; i++){
    //                 let btn = document.createElement("a");
    //                 if(i == nbr_btn_page){
    //                     btn.innerHTML = '<i class="fa fa-angle-right">';
    //                         btn.classList.add("next");
    //                         btn.href="/home/"+ (parseInt(this.id)+1);
    //                     }else{
    //                         btn.innerHTML = i+1;
    //                         btn.href="/home/"+ (i+1);
    //                     }
    //                     btn.classList.add("page");
    //                     parent_btn.appendChild(btn);
    //                 }

    //                 let list_pages_btn = document.getElementsByClassName("page");
    //                 list_pages_btn[this.id - 1].classList.add("selected_page");

    //                 document.getElementById("home_link").className = ["router-link-exact-active"];

    //                 this.select_articles()
    //                 this.sort_article()
    //         }
    // })
  },
  methods: {
    // async init_articles(){
    //     return Axios.get(config.domain + "articles").then(res => res.data)
    //     .then(data => {
    //         console.log(data)
    //         //remplace datas par le nom de l'array contenant tout les articles
    //         this.all_articles = data['hydra:member']
    //         //console.log(data['hydra:member'])
    //         //console.log(this.all_articles)

    //         this.nbr_article = this.all_articles.length
    //     })
    // },

    // async searching(){
    //     if(this.search != "") {
    //         //Potentiellement changer la route
    //         console.log(this.search)
    //         return await Axios.post(config.domain + "articles/search", {"searchText" : this.search}).then(res => res.data)
    //         .then(data => {
    //             console.log(data)
    //             data.forEach(a => {
    //                 console.log(a)
    //             })
    //             //remplace datas par le nom de l'array contenant tout les articles
    //             this.all_articles = data.datas
    //         }).finally(() => {
    //             this.nbr_article = this.all_articles.length
    //             this.select_articles()
    //             this.sort_article()
    //         })

    //     } else {
    //         return await this.init_articles().finally(() => {
    //             this.select_articles()
    //             this.sort_article()
    //         })
    //     }
    // },
    async getUserID() {
      if (this.is_connected) {

        return Axios.post(config.domain + "account.getInfo",
            localStorage.getItem('token'),
            {
              headers: {
                'content-type': 'text/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              }
            }).then(res => res.data)
            .then(data => {
              this.user_id = data['id']
            })
      } else {
        throw "Not connected"
      }

    }
  },
}
</script>

<style>
main {
  width: 100%;
  min-height: 74.6vh;
}

.title {
  width: 100%;
  padding: 200px 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  color: var(--second);
  overflow: hidden;
}

.background_title {
  position: absolute;
  left: -1%;
  top: 0;
  width: 102%;
  height: 100%;

  z-index: -100;

  filter: blur(3px) invert(15%);

  background: rgb(71, 71, 71);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title h1 {
  font-size: 3rem;
}

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.w-9 {
  width: 2.25rem;
}
.text-xs {
  font-size: .75rem;
  line-height: 1rem;
}
#footer > div > a{
  color: inherit;
  text-decoration: inherit;
}
</style>