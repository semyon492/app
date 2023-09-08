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
          <Menu  :user="user"/>
        </div>
        <div class="col-10">
          <div class="row g-3">
            <div class="col-lg-8">
              <div class="card mb-3">
                <div class="card-header bg-light overflow-hidden">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-m">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/1.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h5 class="mb-0 fs-0">Create post</h5>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <form><textarea class="shadow-none form-control rounded-0 resize-none px-x1 border-y-0 border-200" placeholder="What do you want to talk about?" rows="4"></textarea>
                    <div class="d-flex align-items-center ps-x1 border border-200"><label class="text-nowrap mb-0 me-2" for="hash-tags"><svg class="svg-inline--fa fa-plus fa-w-14 me-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <span class="fas fa-plus me-1 fs--2"></span> Font Awesome fontawesome.com --><span class="fw-medium fs--1">Add hashtag</span></label><input class="form-control border-0 fs--1 shadow-none" id="hash-tags" type="text" placeholder="Help the right person to see"></div>
                    <div class="row g-0 justify-content-between mt-3 px-x1 pb-3">
                      <div class="col"><button class="btn btn-light btn-sm rounded-pill shadow-none d-inline-flex align-items-center fs--1 mb-0 me-1" type="button"><img class="cursor-pointer" src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/image.svg" width="17" alt=""><span class="ms-2 d-none d-md-inline-block">Image</span></button><button class="btn btn-light btn-sm rounded-pill shadow-none d-inline-flex align-items-center fs--1 me-1" type="button"><img class="cursor-pointer" src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/calendar.svg" width="17" alt=""><span class="ms-2 d-none d-md-inline-block">Event</span></button><button class="btn btn-light btn-sm rounded-pill shadow-none d-inline-flex align-items-center fs--1 me-1" type="button"><img class="cursor-pointer" src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/location.svg" width="17" alt=""><span class="ms-2 d-none d-md-inline-block text-nowrap">Check in</span></button></div>
                      <div class="col-auto">
                        <div class="dropdown d-inline-block me-1"><button class="btn btn-sm dropdown-toggle px-1" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-globe-americas fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg><!-- <span class="fas fa-globe-americas"></span> Font Awesome fontawesome.com --></button>
                          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Public</a>
                            <a class="dropdown-item" href="#">Private</a>
                            <a class="dropdown-item" href="#">Draft</a></div>
                        </div>
                        <button class="btn btn-primary btn-sm px-4 px-sm-5" type="submit">Share</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <div class="row justify-content-between">
                    <div class="col">
                      <div class="d-flex">
                        <div class="avatar avatar-2xl status-online">
                          <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/4.jpg" alt="">
                        </div>
                        <div class="flex-1 align-self-center ms-2">
                          <p class="mb-1 lh-1"><a class="fw-semi-bold" href="/profile">Rowan Atkinson</a> shared an <a href="#!">album</a></p>
                          <p class="mb-0 fs--1">11 hrs • Consett, UK • <svg class="svg-inline--fa fa-globe-americas fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg><!-- <span class="fas fa-globe-americas"></span> Font Awesome fontawesome.com --></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle p-1 dropdown-caret-none btn-reveal" type="button" id="post-album-action" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--1"></span> Font Awesome fontawesome.com --></button>
                        <div class="dropdown-menu dropdown-menu-end py-3" aria-labelledby="post-album-action">
                          <a class="dropdown-item" href="#!">View</a>
                          <a class="dropdown-item" href="#!">Edit</a>
                          <a class="dropdown-item" href="#!">Report</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a>
                          <a class="dropdown-item text-danger" href="#!">Delete </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body overflow-hidden">
                  <p>Rowan Sebastian Atkinson CBE is an English actor, comedian and screenwriter best known for his work on the sitcoms Blackadder and Mr. Bean.</p>
                  <div class="row mx-n1">
                    <div class="col-6 p-1">
                      <a href="https://prium.github.io/falcon/v3.14.0/assets/img/generic/4.jpg" data-gallery="gallery-1">
                        <img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/4.jpg" alt="">
                      </a>
                    </div>
                    <div class="col-6 p-1">
                      <a href="https://prium.github.io/falcon/v3.14.0/assets/img/generic/5.jpg" data-gallery="gallery-1">
                        <img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/5.jpg" alt="">
                      </a>
                    </div>
                    <div class="col-4 p-1">
                      <a href="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/4.jpg" data-gallery="gallery-1">
                        <img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/4.jpg" alt="">
                      </a>
                    </div>
                    <div class="col-4 p-1">
                      <a href="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/5.jpg" data-gallery="gallery-1">
                        <img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/5.jpg" alt="">
                      </a>
                    </div>
                    <div class="col-4 p-1">
                      <a href="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/3.jpg" data-gallery="gallery-1">
                        <img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/3.jpg" alt="">
                      </a>
                    </div>
                  </div>           
                <div class="card-footer bg-light pt-0">
                  <div class="border-bottom border-200 fs--1 py-3"><a class="text-700" href="#!">345 Likes</a> • <a class="text-700" href="#!">34 Comments</a></div>
                  <div class="row g-0 fw-semi-bold text-center py-2 fs--1">
                    <div class="col-auto">
                      <a class="rounded-2 d-flex align-items-center me-3" href="#!">
                        <img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/like-active.png" width="20" alt="">
                        <span class="ms-1">Like</span>
                      </a>
                    </div>
                    <div class="col-auto">
                      <a class="rounded-2 d-flex align-items-center me-3" href="#!">
                        <img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/comment-active.png" width="20" alt="">
                        <span class="ms-1">Comment</span>
                      </a>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                      <a class="rounded-2 text-700 d-flex align-items-center" href="#!">
                        <img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/share-inactive.png" width="20" alt="">
                        <span class="ms-1">Share</span>
                      </a>
                    </div>
                  </div>
                  <form class="d-flex align-items-center border-top border-200 pt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div><input class="form-control rounded-pill ms-2 fs--1" type="text" placeholder="Write a comment...">
                  </form>
                  <div class="d-flex mt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/4.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2 fs--1">
                      <p class="mb-1 bg-200 rounded-3 p-2">
                        <a class="fw-semi-bold" href="/profile">Rowan Atkinson</a> She starred as Jane Porter in The <a href="#!">@Legend of Tarzan (2016)</a>, Tanya Vanderpoel in Whiskey Tango Foxtrot (2016) and as DC comics villain Harley Quinn in Suicide Squad (2016), for which she was nominated for a Teen Choice Award, and many other awards.</p>
                      <div class="px-2"><a href="#!">Like</a> • <a href="#!">Reply</a> • 23min </div>
                    </div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2 fs--1">
                      <p class="mb-1 bg-200 rounded-3 p-2"><a class="fw-semi-bold" href="/profile">Jessalyn Gilsig</a> Jessalyn Sarah Gilsig is a Canadian-American actress known for her roles in television series, e.g., as Lauren Davis in Boston Public, Gina Russo in Nip/Tuck, Terri Schuester in Glee, and as Siggy Haraldson on the History Channel series Vikings. 🏆</p>
                      <div class="px-2"><a href="#!">Like</a> • <a href="#!">Reply</a> • 3hrs </div>
                    </div>
                  </div><a class="fs--1 text-700 d-inline-block mt-2" href="#!">Load more comments (2 of 34)</a>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <div class="row justify-content-between">
                    <div class="col">
                      <div class="d-flex">
                        <div class="avatar avatar-2xl">
                          <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/15.jpg" alt="">
                        </div>
                        <div class="flex-1 align-self-center ms-2">
                          <p class="mb-1 lh-1"><a class="fw-semi-bold" href="/profile">Margot Robbie</a></p>
                          <p class="mb-0 fs--1">Yesterday • Dalby • <svg class="svg-inline--fa fa-users fa-w-20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg><!-- <span class="fas fa-users"></span> Font Awesome fontawesome.com --></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle p-1 dropdown-caret-none btn-reveal" type="button" id="post-article-action" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--1"></span> Font Awesome fontawesome.com --></button>
                        <div class="dropdown-menu dropdown-menu-end py-3" aria-labelledby="post-article-action"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Report</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <p>Margot Elise Robbie was born on July 2, 1990 in Dalby, Queensland, Australia to Scottish parents. Her mother, Sarie Kessler, is a physiotherapist, and her father, is Doug Robbie. She comes from a family of four children, having two brothers and one sister. She graduated from Somerset College in Mudgeeraba, Queensland, Australia, a suburb in the Gold Coast hinterland of South East Queensland, where she and her siblings were raised by their mother and spent much of her time at the farm belonging to her grandparents. In her late teens, she moved to Melbourne, Victoria, Australia to pursue an acting career.</p>
                  <p>From 2008-2010, Robbie played the character of Donna Freedman in the long-running Australian soap opera, Neighbours (1985), for which she was nominated for two Logie Awards. She set off to pursue Hollywood opportunities, quickly landing the role of Laura Cameron on the short-lived ABC series, Pan Am (2011). She made her big screen debut in the film, About Time (2013).</p>
                  <p>Robbie rose to fame co-starring alongside Leonardo DiCaprio, portraying the role of Naomi Lapaglia in Martin Scorsese's Oscar-nominated film, The Wolf of Wall Street (2013). She was nominated for a Breakthrough Performance MTV Movie Award, and numerous other awards.</p>
                  <p>In 2014, Robbie founded her own production company, LuckyChap Entertainment. She also appeared in the World War II romantic-drama film, Suite Française (2014). She starred in Focus (2015) and Z for Zachariah (2015), and made a cameo in The Big Short (2015).</p>
                  <p>In 2016, she married Tom Ackerley in Byron Bay, New South Wales, Australia.</p>
                  <p>She starred as Jane Porter in The Legend of Tarzan (2016), Tanya Vanderpoel in Whiskey Tango Foxtrot (2016) and as DC comics villain Harley Quinn in Suicide Squad (2016), for which she was nominated for a Teen Choice Award, and many other awards.</p>
                  <p>She portrayed figure skater Tonya Harding in the biographical film I, Tonya (2017), receiving critical acclaim and a Golden Globe Award nomination for Best Actress - Motion Picture Comedy or Musical.</p>
                </div>
                <div class="card-footer bg-light pt-0">
                  <div class="border-bottom border-200 fs--1 py-3"><a class="text-700" href="#!">34 Comments</a></div>
                  <div class="row g-0 fw-semi-bold text-center py-2 fs--1">
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3 text-700" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/like-inactive.png" width="20" alt=""><span class="ms-1">Like</span></a></div>
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/comment-active.png" width="20" alt=""><span class="ms-1">Comment</span></a></div>
                    <div class="col-auto d-flex align-items-center"><a class="rounded-2 text-700 d-flex align-items-center" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/share-inactive.png" width="20" alt=""><span class="ms-1">Share</span></a></div>
                  </div>
                  <form class="d-flex align-items-center border-top border-200 pt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div><input class="form-control rounded-pill ms-2 fs--1" type="text" placeholder="Write a comment...">
                  </form>
                  <div class="d-flex mt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/4.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2 fs--1">
                      <p class="mb-1 bg-200 rounded-3 p-2"><a class="fw-semi-bold" href="/profile">Rowan Atkinson</a> She starred as Jane Porter in The <a href="#!">@Legend of Tarzan (2016)</a>, Tanya Vanderpoel in Whiskey Tango Foxtrot (2016) and as DC comics villain Harley Quinn in Suicide Squad (2016), for which she was nominated for a Teen Choice Award, and many other awards.</p>
                      <div class="px-2"><a href="#!">Like</a> • <a href="#!">Reply</a> • 23min </div>
                    </div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2 fs--1">
                      <p class="mb-1 bg-200 rounded-3 p-2"><a class="fw-semi-bold" href="/profile">Jessalyn Gilsig</a> Jessalyn Sarah Gilsig is a Canadian-American actress known for her roles in television series, e.g., as Lauren Davis in Boston Public, Gina Russo in Nip/Tuck, Terri Schuester in Glee, and as Siggy Haraldson on the History Channel series Vikings. 🏆</p>
                      <div class="px-2"><a href="#!">Like</a> • <a href="#!">Reply</a> • 3hrs </div>
                    </div>
                  </div><a class="fs--1 text-700 d-inline-block mt-2" href="#!">Load more comments (2 of 34)</a>
                </div>
              </div>
              <div class="card mb-3"><img class="card-img-top" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/13.jpg" alt="">
                <div class="card-body overflow-hidden">
                  <div class="row justify-content-between align-items-center">
                    <div class="col">
                      <div class="d-flex">
                        <div class="calendar me-2"><span class="calendar-month">Dec</span><span class="calendar-day">31 </span></div>
                        <div class="flex-1 fs--1">
                          <h5 class="fs-0"><a href="../../app/events/event-detail.html">FREE New Year's Eve Midnight Harbor Fireworks</a></h5>
                          <p class="mb-0">by <a href="#!">Boston Harbor Now</a></p><span class="fs-0 text-warning fw-semi-bold">$49.99 – $89.99</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-auto d-none d-md-block"><button class="btn btn-falcon-default btn-sm px-4" type="button">Register</button></div>
                  </div>
                </div>
                <div class="card-footer bg-light pt-0">
                  <div class="row g-0 fw-semi-bold text-center py-2 fs--1">
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3 text-700" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/like-inactive.png" width="20" alt=""><span class="ms-1">Like</span></a></div>
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3 text-700" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/comment-inactive.png" width="20" alt=""><span class="ms-1">Comment</span></a></div>
                    <div class="col-auto d-flex align-items-center"><a class="rounded-2 text-700 d-flex align-items-center" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/share-inactive.png" width="20" alt=""><span class="ms-1">Share</span></a></div>
                  </div>
                  <form class="d-flex align-items-center border-top border-200 pt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div><input class="form-control rounded-pill ms-2 fs--1" type="text" placeholder="Write a comment...">
                  </form>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <div class="row justify-content-between">
                    <div class="col">
                      <div class="d-flex">
                        <div class="avatar avatar-2xl">
                          <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/10.jpg" alt="">
                        </div>
                        <div class="flex-1 align-self-center ms-2">
                          <p class="mb-1 lh-1"><a class="fw-semi-bold" href="/profile">Leonardo DiCaprio</a> shared a <a href="#!">photo</a></p>
                          <p class="mb-0 fs--1">13 Jan • LA, US • <svg class="svg-inline--fa fa-globe-americas fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg><!-- <span class="fas fa-globe-americas"></span> Font Awesome fontawesome.com --></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle p-1 dropdown-caret-none btn-reveal" type="button" id="post-image-action" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--1"></span> Font Awesome fontawesome.com --></button>
                        <div class="dropdown-menu dropdown-menu-end py-3" aria-labelledby="post-image-action"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Report</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body overflow-hidden"><a href="https://prium.github.io/falcon/v3.14.0/assets/img/generic/11.jpg" data-gallery="gallery-2"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/11.jpg" alt=""></a></div>
                <div class="card-footer bg-light pt-0">
                  <div class="row g-0 fw-semi-bold text-center py-2 fs--1">
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3 text-700" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/like-inactive.png" width="20" alt=""><span class="ms-1">Like</span></a></div>
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3 text-700" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/comment-inactive.png" width="20" alt=""><span class="ms-1">Comment</span></a></div>
                    <div class="col-auto d-flex align-items-center"><a class="rounded-2 text-700 d-flex align-items-center" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/share-inactive.png" width="20" alt=""><span class="ms-1">Share</span></a></div>
                  </div>
                  <form class="d-flex align-items-center border-top border-200 pt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div><input class="form-control rounded-pill ms-2 fs--1" type="text" placeholder="Write a comment...">
                  </form>
                </div>
              </div>

              <div class="card">
                <div class="card-header bg-light">
                  <div class="row justify-content-between">
                    <div class="col">
                      <div class="d-flex">
                        <div class="avatar avatar-2xl status-online">
                          <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/17.jpg" alt="">
                        </div>
                        <div class="flex-1 align-self-center ms-2">
                          <p class="mb-1 lh-1"><a class="fw-semi-bold" href="/profile">Emilia Clarke</a> shared a <a href="#!">url</a></p>
                          <p class="mb-0 fs--1">14 Feb • London • <svg class="svg-inline--fa fa-globe-americas fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg><!-- <span class="fas fa-globe-americas"></span> Font Awesome fontawesome.com --></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle p-1 dropdown-caret-none btn-reveal" type="button" id="post-url-action" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--1"></span> Font Awesome fontawesome.com --></button>
                        <div class="dropdown-menu dropdown-menu-end py-3" aria-labelledby="post-url-action"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item" href="#!">Report</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-warning" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body overflow-hidden">
                  <p>Mount Everest, known in Nepali as Sagarmatha and in Tibetan as Chomolungma, is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The international border between Nepal and China runs across its summit point.</p><a class="text-decoration-none" href="#!"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/12.jpg" alt=""><small class="text-uppercase text-700">en.wikipedia.org</small>
                    <h6 class="fs-0 mb-0">Mount Everest: Facts &amp; Location of World's Highest Mountain</h6>
                    <p class="fs--1 mb-0 text-700">The Himalayan range has many of the Earth's highest peaks, including the highest, Mount Everest...</p>
                  </a>
                </div>
                <div class="card-footer bg-light pt-0">
                  <div class="border-bottom border-200 fs--1 py-3"><a class="text-700" href="#!">345 Likes</a></div>
                  <div class="row g-0 fw-semi-bold text-center py-2 fs--1">
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/like-active.png" width="20" alt=""><span class="ms-1">Like</span></a></div>
                    <div class="col-auto"><a class="rounded-2 d-flex align-items-center me-3 text-700" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/comment-inactive.png" width="20" alt=""><span class="ms-1">Comment</span></a></div>
                    <div class="col-auto d-flex align-items-center"><a class="rounded-2 text-700 d-flex align-items-center" href="#!"><img src="https://prium.github.io/falcon/v3.14.0/assets/img/icons/spot-illustrations/share-inactive.png" width="20" alt=""><span class="ms-1">Share</span></a></div>
                  </div>
                  <form class="d-flex align-items-center border-top border-200 pt-3">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div><input class="form-control rounded-pill ms-2 fs--1" type="text" placeholder="Write a comment...">
                  </form>
                </div>
              </div>
            </div>
            </div>


            <div class="col-lg-4">
              <div class="card mb-3">
                <div class="card-body fs--1">
                  <div class="d-flex">
                    <svg class="svg-inline--fa fa-gift fa-w-16 fs-0 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gift" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg>
                    <!-- <span class="fas fa-gift fs-0 text-warning"></span> Font Awesome fontawesome.com -->
                    <div class="flex-1 ms-2">
                      <a class="fw-semi-bold" href="/profile">Emma Watson</a>
                      's Birthday is today</div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Add to your feed</h5><a class="fs--1" href="#!">See all</a>
                </div>
                <div class="card-body">
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/13.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Katheryn Winnick</a></h6><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/5.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Travis Fimmel</a></h6>
                      <p class="fs--1 mb-0">5 mutual connections</p><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/10.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Gustaf Skarsgård</a></h6>
                      <p class="fs--1 mb-0">10 mutual connections</p><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/8.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Clive Standen</a></h6>
                      <p class="fs--1 mb-0">8 mutual connections</p><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/15.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Jennie Jacques</a></h6><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/6.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Isaac Hempstead</a></h6><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/2.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Antony Hopkins</a></h6><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                      <div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="avatar avatar-3xl">
                      <img class="rounded-circle" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/3.jpg" alt="">
                    </div>
                    <div class="flex-1 ms-2">
                      <h6 class="mb-0"><a href="/profile">Sophie Turner</a></h6><button class="btn btn-light btn-sm py-0 mt-1 border" type="button"><svg class="svg-inline--fa fa-user-plus fa-w-20" data-fa-transform="shrink-5 left-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(320 256)"><g transform="translate(-64, 0)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fas fa-user-plus" data-fa-transform="shrink-5 left-2"></span> Font Awesome fontawesome.com --><span class="fs--1">Follow</span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 mb-lg-0">
                <div class="card-header bg-light">
                  <h5 class="mb-0">You may interested</h5>
                </div>
                <div class="card-body fs--1">
                  <div class="d-flex btn-reveal-trigger">
                    <div class="calendar"><span class="calendar-month">Feb</span><span class="calendar-day">21</span></div>
                    <div class="flex-1 position-relative ps-3">
                      <h6 class="fs-0 mb-0"><a href="../../app/events/event-detail.html">Newmarket Nights</a></h6>
                      <p class="mb-1">Organized by <a href="#!" class="text-700">University of Oxford</a></p>
                      <p class="text-1000 mb-0">Time: 6:00AM</p>
                      <p class="text-1000 mb-0">Duration: 6:00AM - 5:00PM</p>Place: Cambridge Boat Club, Cambridge<div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex btn-reveal-trigger">
                    <div class="calendar"><span class="calendar-month">Dec</span><span class="calendar-day">31</span></div>
                    <div class="flex-1 position-relative ps-3">
                      <h6 class="fs-0 mb-0"><a href="../../app/events/event-detail.html">31st Night Celebration</a></h6>
                      <p class="mb-1">Organized by <a href="#!" class="text-700">Chamber Music Society</a></p>
                      <p class="text-1000 mb-0">Time: 11:00PM</p>
                      <p class="text-1000 mb-0">280 people interested</p>Place: Tavern on the Greend, New York<div class="border-bottom border-dashed my-3"></div>
                    </div>
                  </div>
                  <div class="d-flex btn-reveal-trigger">
                    <div class="calendar"><span class="calendar-month">Dec</span><span class="calendar-day">16</span></div>
                    <div class="flex-1 position-relative ps-3">
                      <h6 class="fs-0 mb-0"><a href="../../app/events/event-detail.html">Folk Festival</a></h6>
                      <p class="mb-1">Organized by <a href="#!" class="text-700">Harvard University</a></p>
                      <p class="text-1000 mb-0">Time: 9:00AM</p>
                      <p class="text-1000 mb-0">Location: Cambridge Masonic Hall Association</p>Place: Porter Square, North Cambridge
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-light p-0 border-top">
                  <a class="btn btn-link d-block w-100" href="../../app/events/event-list.html">All Events
                    <svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                    <!-- <span class="fas fa-chevron-right ms-1 fs--2"></span> Font Awesome fontawesome.com -->
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>    
  </main>

  <!-- <button class="change_view" @click="this.name = 'big_view'">Change</button> -->
</template>

<script>
import Axios from "axios";
import config from "/config";
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  props: ['user'],
  components: {
    Menu
  },  
  data() {
    return {
      user_id: null,
      is_connected: false,
      is_admin:false,
      access_token :  '',
      name: config.title,
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
              if(res.data.status !== 20 ) {
                this.user.firstname = res.data.data.firstname;
                this.user.lastname = res.data.data.lastname;
                if (res.data.roles === 'ROLE_ADMIN') {
                  this.is_admin = true;
                }
              }else{
                localStorage.removeItem('token')
                this.user.is_connected = false;
                this.user.is_admin = false;
              }
        })
  },
  methods: {
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
.title h1 {
  font-size: 3rem;
}

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#footer > div > a{
  color: inherit;
  text-decoration: inherit;
}

.avatar {
    position: relative;
    display: inline-block
}
.avatar .avatar-name>span {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0)
}

.avatar .avatar-emoji>span {
    -webkit-transform: translateY(2%);
    -ms-transform: translateY(2%);
    transform: translateY(2%);
    display: inline-block
}

.avatar img {
    display: block
}

.avatar img,.avatar {
    width: 100%;
    height: 100%
}

.avatar img {
    -o-object-fit: cover;
    object-fit: cover
}

.avatar.status-online:before {
    background-color: var(--falcon-success)
}
.avatar-m {height: 1.5rem;width: 1.5rem}
.avatar-xl {height: 2rem;width: 2rem}
.avatar-2xl {height: 2.5rem;width: 2.5rem}
.avatar-3xl {height: 3.5rem;width: 3.5rem}
.avatar-4xl {height: 5.5rem;width: 5.5rem}
.avatar-5xl {height: 10.5rem;width: 10.5rem;}

.avatar-group .avatar-s:not(:first-child),
.avatar-group .avatar-m:not(:first-child),
.avatar-group .avatar-l:not(:first-child),
.avatar-group .avatar-xl:not(:first-child),
.avatar-group .avatar-2xl:not(:first-child) {
    margin-left: -0.5rem
}

.avatar-group .avatar-3xl:not(:first-child) {
    margin-left: -1rem
}

.avatar-group .avatar-4xl:not(:first-child) {
    margin-left: -1.8rem
}

.avatar-group .avatar-5xl:not(:first-child) {
    margin-left: -3rem
}

.avatar-group-dense .avatar-s:not(:first-child) {
    margin-left: -0.6rem
}

.avatar-group-dense .avatar-m:not(:first-child) {
    margin-left: -0.8rem
}

.avatar-group-dense .avatar-l:not(:first-child),.avatar-group-dense .avatar-xl:not(:first-child),.avatar-group-dense .avatar-2xl:not(:first-child) {
    margin-left: -1rem
}

.avatar-group-dense .avatar-3xl:not(:first-child) {
    margin-left: -1.8rem
}

.avatar-group-dense .avatar-4xl:not(:first-child) {
    margin-left: -3.3rem
}

.avatar-group-dense .avatar-5xl:not(:first-child) {
    margin-left: -6rem
}
</style>