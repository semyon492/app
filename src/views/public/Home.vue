<template>
  <main v-if="(is_connected !== true)">
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
  <main v-if="(is_connected)">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="absolute">
          <div class="bg-myGray-100 h-screen px-2 py-4 flex-col justify-between hidden xl:flex fixed w-80">
            <div id="left-bar-top" class="w-full">
              <ul>
                <li class="d-flex align-items-center gap-2 px-3 py-2 ">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg" class="rounded-circle w-9" alt="">
                  <span class="fw-bold text-muted">{{ user.firstname }} {{ user.lastname }}</span>
                </li>
                <!-- <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/friends.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Friends</span>
                </li> -->
                <li class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-150 transition-color duration-300">
                  <img src="https://bayirdan.github.io/facebook-clone/assets/images/png/mostRecent.png" class="rounded-full w-9" alt=""><span
                    class="text-myGray-800 font-bold text-tiny">Настройки</span></li>
              </ul>
            </div>
            <div id="footer" class="w-full hidden 2xl:block">
              <div class="text-muted text-xs pl-1 mb-14">
                <a router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Privacy</a>·
                <a router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Terms</a>·
                <a router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Adversiting</a>·
                <a router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Ad Choices</a>·
                <a router-link to="/privacy-and-terms" class="hover:underline cursor-pointer">Cookies</a>·<br>
                <a router-link to="/privacy-and-terms" class="cursor-pointer">More</a>·
                <a>Naame © 2023</a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-6">
          2 of 3 (wider)
        </div>
        <div class="col">
          <div class="absolute">
          <div class="bg-myGray-100 h-screen px-5 py-5 hidden w-80 lg:block fixed">
            <div id="contacts" class="w-full flex items-center justfiy-between text-myGray-800"><span
                class="flex-1 font-semibold text-base pl-5">Contacts</span>
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
      user : {
        firstname: 'Elliot',
        lastname: 'Anderson',
      }
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
            this.user.firstname = res.data.data.firstname;
            this.user.lastname = res.data.data.lastname;
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