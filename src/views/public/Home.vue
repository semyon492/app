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
                  <span class="fw-bold text-muted">Elliot Anderson</span>
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
            <div id="new-post" class="h-32 p-2 bg-myGray-150 rounded-lg flex flex-col justify-between">
              <div id="new-post-top" class="p-1 flex gap-3 items-center">
                <div class="_pp_ cursor-pointer"><img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg"
                                                      class="w-10 rounded-full" alt=""></div><input
                  class="cursor-pointer w-full bg-myGray-250 h-10 rounded-full outline-none text-tiny px-3 font-semibold placeholder-myGray-650 hover:bg-myGray-300 transition-colors duration-300 mobile-x:text-base"
                  type="text" name="" placeholder="What's on your mind, Elliot ?">
              </div>
              <hr class="mx-2 border-myGray-250">
              <div id="new-post-bottom" class="flex items-center justify-around px-2 text-myGray-700">
                <div
                    class="w-full h-10 flex items-center justify-center gap-2 hover:bg-myGray-250 rounded-lg cursor-pointer transition-colors duration-300">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       class="w-6 text-red-500">
                    <g fill-rule="evenodd" transform="translate(-444 -156)">
                      <g>
                        <path
                            d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                            transform="translate(354 158.5)"></path>
                        <path
                            d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                            transform="translate(354 158.5)"></path>
                      </g>
                    </g>
                  </svg><span>Live Video</span></div>
                <div
                    class="w-full h-10 flex items-center justify-center gap-2 hover:bg-myGray-250 rounded-lg cursor-pointer transition-colors duration-300">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       class="w-6 text-green-500">
                    <g fill-rule="evenodd" transform="translate(-444 -156)">
                      <g>
                        <path
                            d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                            transform="translate(352 156.5)"></path>
                        <path fill-rule="nonzero"
                              d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                              transform="translate(352 156.5)"></path>
                      </g>
                    </g>
                  </svg><span>Photo/video</span></div>
                <div
                    class="w-full h-10 items-center justify-center gap-2 hover:bg-myGray-250 rounded-lg cursor-pointer transition-colors duration-300 hidden mobile-x:flex">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       class="w-6 text-yellow-400">
                    <g fill-rule="evenodd" transform="translate(-444 -156)">
                      <g>
                        <path
                            d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                            transform="translate(353.5 156.5)"></path>
                        <path fill-rule="nonzero"
                              d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                              transform="translate(353.5 156.5)"></path>
                        <path
                            d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                            transform="translate(353.5 156.5)"></path>
                      </g>
                    </g>
                  </svg><span>Feeling/activity</span></div>
              </div>
            </div>
          </div>
          <ul>
            <li class="w-full bg-myGray-150 my-4 rounded-lg transition-colors duration-300">
              <div id="post-top" class="w-full flex items-center justify-between p-4">
                <div id="post-top_left" class="flex items-center gap-4">
                  <div id="post-top_left_pp"
                       class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/angela-pp.jpg" class="w-8 h-8 rounded-full" alt="">
                  </div>
                  <div id="post-top_left_title">
                    <p class="hover:underline cursor-pointer">Angela Moss</p>
                    <p class="flex text-xs text-myGray-500 mt-1 items-center"><span
                        class="hover:underline cursor-pointer">3d</span><span
                        class="mx-1">·</span><svg fill="currentColor" viewBox="0 0 16 16"
                                                  class="w-3">
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <g>
                          <path
                              d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                              transform="translate(354 143.5)"></path>
                          <path
                              d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                              transform="translate(354 143.5)"></path>
                          <path fill-rule="nonzero"
                                d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                transform="translate(354 143.5)"></path>
                        </g>
                      </g>
                    </svg></p>
                  </div>
                </div>
                <div id="post-top_right"
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
              <div id="post-middle">
                <p class="px-3 font-normal leading-5 text-sm">Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quae inventore assumenda nulla temporibus ea </p><img
                  src="https://picsum.photos/300/" class="w-full my-2" alt="">
              </div>
              <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                <div id="post-bottom_info" class="flex items-center justify-between">
                  <div id="info_left" class="flex gap-2 cursor-pointer"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" class="w-5">
                    <defs>
                      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#18AFFF"></stop>
                        <stop offset="100%" stop-color="#0062DF"></stop>
                      </linearGradient>
                      <filter id="c" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%"
                              filterUnits="objectBoundingBox">
                        <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1"
                                        stdDeviation="1"></feGaussianBlur>
                        <feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1">
                        </feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1"
                                     k3="1" operator="arithmetic" result="shadowInnerInner1">
                        </feComposite>
                        <feColorMatrix in="shadowInnerInner1"
                                       values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0">
                        </feColorMatrix>
                      </filter>
                      <path id="b" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path>
                    </defs>
                    <g fill="none">
                      <use fill="url(#a)" xlink:href="#b"></use>
                      <use fill="black" filter="url(#c)" xlink:href="#b"></use>
                      <path fill="white"
                            d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z">
                      </path>
                    </g>
                  </svg><span class="hover:underline">128</span></div>
                  <div id="info_right"><span class="hover:underline cursor-pointer">1 Comment</span>
                  </div>
                </div>
                <div id="post-bottom_buttons"
                     class="text-myGray-600 font-bold text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-300">
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z">
                      </path>
                    </svg><span>Like</span></div>
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z">
                      </path>
                    </svg><span>Comment</span></div>
                </div>
                <div id="post-bottom-comments">
                  <div id="other" class="flex gap-2 my-4">
                    <div id="other_pp"><img src="https://bayirdan.github.io/facebook-clone/assets/images/tyrell-pp.jpg"
                                            class="w-9 h-9 rounded-full cursor-pointer" alt=""></div>
                    <div id="other_comment">
                      <div class="py-2 px-3 bg-myGray-200 rounded-2xl">
                        <div id="commnet-name"
                             class="cursor-pointer hover:underline font-bold text-xs">Tyrell
                          Wellick</div>
                        <div id="comment-title">Lorem ipsum dolor.</div>
                      </div>
                      <div class="px-3 text-xs mt-1"><span
                          class="cursor-pointer hover:underline">Like</span> · <span
                          class="cursor-pointer hover:underline">Reply</span> · <span
                          class="cursor-pointer hover:underline">Share</span> · <span
                          class="cursor-pointer hover:underline">2d</span></div>
                    </div>
                  </div>
                  <div id="me" class="flex w-full gap-2"><img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg"
                                                              class="w-9 h-9 rounded-full cursor-pointer" alt="">
                    <div class="flex w-full flex-col">
                      <div id="me_comment" class="flex w-full bg-myGray-200 rounded-2xl"><input
                          class="w-full bg-transparent px-3 outline-none" type="text"
                          placeholder="Write a public comment...">
                        <div id="me_comment_buttons" class="flex items-center">
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                                      transform="translate(353.5 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                                        transform="translate(353.5 156.5)"></path>
                                  <path
                                      d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                                      transform="translate(353.5 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                                      transform="translate(354 158.5)"></path>
                                  <path
                                      d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                                      transform="translate(354 158.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 44 44" class="w-4 text-myGray-600">
                              <circle cx="7" cy="7" r="6"></circle>
                              <circle cx="22" cy="7" r="6"></circle>
                              <circle cx="37" cy="7" r="6"></circle>
                              <circle cx="7" cy="22" r="6"></circle>
                              <circle cx="22" cy="22" r="6"></circle>
                              <circle cx="37" cy="22" r="6"></circle>
                              <circle cx="7" cy="37" r="6"></circle>
                              <circle cx="22" cy="37" r="6"></circle>
                              <circle cx="37" cy="37" r="6"></circle>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                                      transform="translate(352 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                                        transform="translate(352 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                        </div>
                      </div><span class="text-xs">Press Enter the post</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li class="w-full bg-myGray-150 my-4 rounded-lg transition-colors duration-300">
              <div id="post-top" class="w-full flex items-center justify-between p-4">
                <div id="post-top_left" class="flex items-center gap-4">
                  <div id="post-top_left_pp"
                       class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/tyrell-pp.jpg" class="w-8 h-8 rounded-full" alt="">
                  </div>
                  <div id="post-top_left_title">
                    <p class="hover:underline cursor-pointer">Tyrell Wellick</p>
                    <p class="flex text-xs text-myGray-500 mt-1 items-center"><span
                        class="hover:underline cursor-pointer">3d</span><span
                        class="mx-1">·</span><svg fill="currentColor" viewBox="0 0 16 16"
                                                  class="w-3">
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <g>
                          <path
                              d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                              transform="translate(354 143.5)"></path>
                          <path
                              d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                              transform="translate(354 143.5)"></path>
                          <path fill-rule="nonzero"
                                d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                transform="translate(354 143.5)"></path>
                        </g>
                      </g>
                    </svg></p>
                  </div>
                </div>
                <div id="post-top_right"
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
              <div id="post-middle">
                <p class="px-3 font-normal leading-5 text-sm">Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil
                  praesentium necessitatibus vel quia!</p><img src="https://picsum.photos/200"
                                                               class="w-full my-2" alt="">
              </div>
              <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                <div id="post-bottom_info" class="flex items-center justify-between">
                  <div id="info_left" class="flex gap-2 cursor-pointer"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" class="w-5">
                    <defs>
                      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#18AFFF"></stop>
                        <stop offset="100%" stop-color="#0062DF"></stop>
                      </linearGradient>
                      <filter id="c" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%"
                              filterUnits="objectBoundingBox">
                        <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1"
                                        stdDeviation="1"></feGaussianBlur>
                        <feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1">
                        </feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1"
                                     k3="1" operator="arithmetic" result="shadowInnerInner1">
                        </feComposite>
                        <feColorMatrix in="shadowInnerInner1"
                                       values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0">
                        </feColorMatrix>
                      </filter>
                      <path id="b" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path>
                    </defs>
                    <g fill="none">
                      <use fill="url(#a)" xlink:href="#b"></use>
                      <use fill="black" filter="url(#c)" xlink:href="#b"></use>
                      <path fill="white"
                            d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z">
                      </path>
                    </g>
                  </svg><span class="hover:underline">63</span></div>
                  <div id="info_right"><span class="hover:underline cursor-pointer">1 Comment</span>
                  </div>
                </div>
                <div id="post-bottom_buttons"
                     class="text-myGray-600 font-bold text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-300">
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z">
                      </path>
                    </svg><span>Like</span></div>
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z">
                      </path>
                    </svg><span>Comment</span></div>
                </div>
                <div id="post-bottom-comments">
                  <div id="other" class="flex gap-2 my-4">
                    <div id="other_pp"><img src="https://bayirdan.github.io/facebook-clone/assets/images/angela-pp.jpg"
                                            class="w-9 h-9 rounded-full cursor-pointer" alt=""></div>
                    <div id="other_comment">
                      <div class="py-2 px-3 bg-myGray-200 rounded-2xl">
                        <div id="commnet-name"
                             class="cursor-pointer hover:underline font-bold text-xs">Angela Moss
                        </div>
                        <div id="comment-title">Lorem ipsum dolor sit amet consectetur.</div>
                      </div>
                      <div class="px-3 text-xs mt-1"><span
                          class="cursor-pointer hover:underline">Like</span> · <span
                          class="cursor-pointer hover:underline">Reply</span> · <span
                          class="cursor-pointer hover:underline">Share</span> · <span
                          class="cursor-pointer hover:underline">2d</span></div>
                    </div>
                  </div>
                  <div id="me" class="flex w-full gap-2"><img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg"
                                                              class="w-9 h-9 rounded-full cursor-pointer" alt="">
                    <div class="flex w-full flex-col">
                      <div id="me_comment" class="flex w-full bg-myGray-200 rounded-2xl"><input
                          class="w-full bg-transparent px-3 outline-none" type="text"
                          placeholder="Write a public comment...">
                        <div id="me_comment_buttons" class="flex items-center">
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                                      transform="translate(353.5 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                                        transform="translate(353.5 156.5)"></path>
                                  <path
                                      d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                                      transform="translate(353.5 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                                      transform="translate(354 158.5)"></path>
                                  <path
                                      d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                                      transform="translate(354 158.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 44 44" class="w-4 text-myGray-600">
                              <circle cx="7" cy="7" r="6"></circle>
                              <circle cx="22" cy="7" r="6"></circle>
                              <circle cx="37" cy="7" r="6"></circle>
                              <circle cx="7" cy="22" r="6"></circle>
                              <circle cx="22" cy="22" r="6"></circle>
                              <circle cx="37" cy="22" r="6"></circle>
                              <circle cx="7" cy="37" r="6"></circle>
                              <circle cx="22" cy="37" r="6"></circle>
                              <circle cx="37" cy="37" r="6"></circle>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                                      transform="translate(352 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                                        transform="translate(352 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                        </div>
                      </div><span class="text-xs">Press Enter the post</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li class="w-full bg-myGray-150 my-4 rounded-lg transition-colors duration-300">
              <div id="post-top" class="w-full flex items-center justify-between p-4">
                <div id="post-top_left" class="flex items-center gap-4">
                  <div id="post-top_left_pp"
                       class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/darlene-pp.jpg" class="w-8 h-8 rounded-full" alt="">
                  </div>
                  <div id="post-top_left_title">
                    <p class="hover:underline cursor-pointer">Darlene Alderson</p>
                    <p class="flex text-xs text-myGray-500 mt-1 items-center"><span
                        class="hover:underline cursor-pointer">3d</span><span
                        class="mx-1">·</span><svg fill="currentColor" viewBox="0 0 16 16"
                                                  class="w-3">
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <g>
                          <path
                              d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                              transform="translate(354 143.5)"></path>
                          <path
                              d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                              transform="translate(354 143.5)"></path>
                          <path fill-rule="nonzero"
                                d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                transform="translate(354 143.5)"></path>
                        </g>
                      </g>
                    </svg></p>
                  </div>
                </div>
                <div id="post-top_right"
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
              <div id="post-middle">
                <p class="px-3 font-normal leading-5 text-sm">Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil
                  praesentium necessitatibus vel quia!</p><img src="https://picsum.photos/250"
                                                               class="w-full my-2" alt="">
              </div>
              <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                <div id="post-bottom_info" class="flex items-center justify-between">
                  <div id="info_left" class="flex gap-2 cursor-pointer"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" class="w-5">
                    <defs>
                      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#18AFFF"></stop>
                        <stop offset="100%" stop-color="#0062DF"></stop>
                      </linearGradient>
                      <filter id="c" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%"
                              filterUnits="objectBoundingBox">
                        <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1"
                                        stdDeviation="1"></feGaussianBlur>
                        <feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1">
                        </feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1"
                                     k3="1" operator="arithmetic" result="shadowInnerInner1">
                        </feComposite>
                        <feColorMatrix in="shadowInnerInner1"
                                       values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0">
                        </feColorMatrix>
                      </filter>
                      <path id="b" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path>
                    </defs>
                    <g fill="none">
                      <use fill="url(#a)" xlink:href="#b"></use>
                      <use fill="black" filter="url(#c)" xlink:href="#b"></use>
                      <path fill="white"
                            d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z">
                      </path>
                    </g>
                  </svg><span class="hover:underline">99</span></div>
                  <div id="info_right"><span class="hover:underline cursor-pointer">1 Comment</span>
                  </div>
                </div>
                <div id="post-bottom_buttons"
                     class="text-myGray-600 font-bold text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-300">
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z">
                      </path>
                    </svg><span>Like</span></div>
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z">
                      </path>
                    </svg><span>Comment</span></div>
                </div>
                <div id="post-bottom-comments">
                  <div id="other" class="flex gap-2 my-4">
                    <div id="other_pp"><img src="https://bayirdan.github.io/facebook-clone/assets/images/dominique-pp.jpg"
                                            class="w-9 h-9 rounded-full cursor-pointer" alt=""></div>
                    <div id="other_comment">
                      <div class="py-2 px-3 bg-myGray-200 rounded-2xl">
                        <div id="commnet-name"
                             class="cursor-pointer hover:underline font-bold text-xs">DiPierro
                        </div>
                        <div id="comment-title">Lorem ipsum dolor sit amet.</div>
                      </div>
                      <div class="px-3 text-xs mt-1"><span
                          class="cursor-pointer hover:underline">Like</span> · <span
                          class="cursor-pointer hover:underline">Reply</span> · <span
                          class="cursor-pointer hover:underline">Share</span> · <span
                          class="cursor-pointer hover:underline">2d</span></div>
                    </div>
                  </div>
                  <div id="me" class="flex w-full gap-2"><img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg"
                                                              class="w-9 h-9 rounded-full cursor-pointer" alt="">
                    <div class="flex w-full flex-col">
                      <div id="me_comment" class="flex w-full bg-myGray-200 rounded-2xl"><input
                          class="w-full bg-transparent px-3 outline-none" type="text"
                          placeholder="Write a public comment...">
                        <div id="me_comment_buttons" class="flex items-center">
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                                      transform="translate(353.5 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                                        transform="translate(353.5 156.5)"></path>
                                  <path
                                      d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                                      transform="translate(353.5 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                                      transform="translate(354 158.5)"></path>
                                  <path
                                      d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                                      transform="translate(354 158.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 44 44" class="w-4 text-myGray-600">
                              <circle cx="7" cy="7" r="6"></circle>
                              <circle cx="22" cy="7" r="6"></circle>
                              <circle cx="37" cy="7" r="6"></circle>
                              <circle cx="7" cy="22" r="6"></circle>
                              <circle cx="22" cy="22" r="6"></circle>
                              <circle cx="37" cy="22" r="6"></circle>
                              <circle cx="7" cy="37" r="6"></circle>
                              <circle cx="22" cy="37" r="6"></circle>
                              <circle cx="37" cy="37" r="6"></circle>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                                      transform="translate(352 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                                        transform="translate(352 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                        </div>
                      </div><span class="text-xs">Press Enter the post</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li class="w-full bg-myGray-150 my-4 rounded-lg transition-colors duration-300">
              <div id="post-top" class="w-full flex items-center justify-between p-4">
                <div id="post-top_left" class="flex items-center gap-4">
                  <div id="post-top_left_pp"
                       class="ring-2 ring-blue-500 ring-opacity-70 border-2 border-black w-max rounded-full cursor-pointer">
                    <img src="https://bayirdan.github.io/facebook-clone/assets/images/dominique-pp.jpg" class="w-8 h-8 rounded-full" alt="">
                  </div>
                  <div id="post-top_left_title">
                    <p class="hover:underline cursor-pointer">Dominique DiPierro</p>
                    <p class="flex text-xs text-myGray-500 mt-1 items-center"><span
                        class="hover:underline cursor-pointer">3d</span><span
                        class="mx-1">·</span><svg fill="currentColor" viewBox="0 0 16 16"
                                                  class="w-3">
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <g>
                          <path
                              d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                              transform="translate(354 143.5)"></path>
                          <path
                              d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                              transform="translate(354 143.5)"></path>
                          <path fill-rule="nonzero"
                                d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                transform="translate(354 143.5)"></path>
                        </g>
                      </g>
                    </svg></p>
                  </div>
                </div>
                <div id="post-top_right"
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
              <div id="post-middle">
                <p class="px-3 font-normal leading-5 text-sm">Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quae inventore assumenda nulla temporibus ea tempore nihil
                  praesentium necessitatibus vel quia!</p><img src="https://picsum.photos/350"
                                                               class="w-full my-2" alt="">
              </div>
              <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                <div id="post-bottom_info" class="flex items-center justify-between">
                  <div id="info_left" class="flex gap-2 cursor-pointer"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" class="w-5">
                    <defs>
                      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#18AFFF"></stop>
                        <stop offset="100%" stop-color="#0062DF"></stop>
                      </linearGradient>
                      <filter id="c" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%"
                              filterUnits="objectBoundingBox">
                        <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1"
                                        stdDeviation="1"></feGaussianBlur>
                        <feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1">
                        </feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1"
                                     k3="1" operator="arithmetic" result="shadowInnerInner1">
                        </feComposite>
                        <feColorMatrix in="shadowInnerInner1"
                                       values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0">
                        </feColorMatrix>
                      </filter>
                      <path id="b" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path>
                    </defs>
                    <g fill="none">
                      <use fill="url(#a)" xlink:href="#b"></use>
                      <use fill="black" filter="url(#c)" xlink:href="#b"></use>
                      <path fill="white"
                            d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z">
                      </path>
                    </g>
                  </svg><span class="hover:underline">135</span></div>
                  <div id="info_right"><span class="hover:underline cursor-pointer">1 Comment</span>
                  </div>
                </div>
                <div id="post-bottom_buttons"
                     class="text-myGray-600 font-bold text-sm sm:text-tiny flex items-center my-2 border-b border-t border-myGray-300">
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z">
                      </path>
                    </svg><span>Like</span></div>
                  <div
                      class="flex gap-2 w-full items-center justify-center p-2 hover:bg-myGray-250 cursor-pointer rounded-lg my-1 transition-colors duration-300">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" class="w-5">
                      <path fill="currentColor"
                            d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z">
                      </path>
                    </svg><span>Comment</span></div>
                </div>
                <div id="post-bottom-comments">
                  <div id="other" class="flex gap-2 my-4">
                    <div id="other_pp"><img src="https://bayirdan.github.io/facebook-clone/assets/images/darlene-pp.jpg"
                                            class="w-9 h-9 rounded-full cursor-pointer" alt=""></div>
                    <div id="other_comment">
                      <div class="py-2 px-3 bg-myGray-200 rounded-2xl">
                        <div id="commnet-name"
                             class="cursor-pointer hover:underline font-bold text-xs">Darlene
                          Alderson</div>
                        <div id="comment-title">Lorem ipsum.</div>
                      </div>
                      <div class="px-3 text-xs mt-1"><span
                          class="cursor-pointer hover:underline">Like</span> · <span
                          class="cursor-pointer hover:underline">Reply</span> · <span
                          class="cursor-pointer hover:underline">Share</span> · <span
                          class="cursor-pointer hover:underline">2d</span></div>
                    </div>
                  </div>
                  <div id="me" class="flex w-full gap-2"><img src="https://bayirdan.github.io/facebook-clone/assets/images/pp.jpg"
                                                              class="w-9 h-9 rounded-full cursor-pointer" alt="">
                    <div class="flex w-full flex-col">
                      <div id="me_comment" class="flex w-full bg-myGray-200 rounded-2xl"><input
                          class="w-full bg-transparent px-3 outline-none" type="text"
                          placeholder="Write a public comment...">
                        <div id="me_comment_buttons" class="flex items-center">
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                                      transform="translate(353.5 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                                        transform="translate(353.5 156.5)"></path>
                                  <path
                                      d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                                      transform="translate(353.5 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                                      transform="translate(354 158.5)"></path>
                                  <path
                                      d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                                      transform="translate(354 158.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 44 44" class="w-4 text-myGray-600">
                              <circle cx="7" cy="7" r="6"></circle>
                              <circle cx="22" cy="7" r="6"></circle>
                              <circle cx="37" cy="7" r="6"></circle>
                              <circle cx="7" cy="22" r="6"></circle>
                              <circle cx="22" cy="22" r="6"></circle>
                              <circle cx="37" cy="22" r="6"></circle>
                              <circle cx="7" cy="37" r="6"></circle>
                              <circle cx="22" cy="37" r="6"></circle>
                              <circle cx="37" cy="37" r="6"></circle>
                            </svg></div>
                          <div
                              class="p-2 hover:bg-myGray-300 rounded-full cursor-pointer transition-colors duration-300">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" class="w-4 text-myGray-600">
                              <g fill-rule="evenodd" transform="translate(-444 -156)">
                                <g>
                                  <path
                                      d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                                      transform="translate(352 156.5)"></path>
                                  <path fill-rule="nonzero"
                                        d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                                        transform="translate(352 156.5)"></path>
                                </g>
                              </g>
                            </svg></div>
                        </div>
                      </div><span class="text-xs">Press Enter the post</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
      }
    }
  },
  async mounted() {
    this.is_connected = false;
    if (!!localStorage.getItem('token')){
      this.is_connected = true;
      this.access_token.access_token = localStorage.getItem('token');
    }     

    console.log("Token : " + (this.is_connected == true))

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