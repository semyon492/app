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

          <div class="card mb-3">
            <div class="card-header position-relative min-vh-25 mb-7">
              <div class="bg-holder rounded-3 rounded-bottom-0" style="background-image:url(https://prium.github.io/falcon/v3.14.0/assets/img/generic/4.jpg);"></div>
              <!--/.bg-holder-->
              <div class="avatar avatar-5xl avatar-profile">
                <img class="rounded-circle img-thumbnail shadow-sm" src="https://prium.github.io/falcon/v3.14.0/assets/img/team/2.jpg" width="200" alt="">
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-8">
                  <h4 class="mb-1"> {{ user.firstname }} {{ user.lastname }}<span data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></h4>
                  <h5 class="fs-0 fw-normal">Senior Software Engineer at Technext Limited</h5>
                  <p class="text-500">New York, USA</p>

                  <button type="button" class="btn btn-outline-primary btn-sm px-3">Following</button>
                  <button type="button" class="btn btn-outline-secondary btn-sm px-3 ms-2">Message</button>

                  <div class="border-bottom border-dashed my-4 d-lg-none"></div>
                </div>
                <div class="col ps-2 ps-lg-3"><a class="d-flex align-items-center mb-2" href="#"><svg class="svg-inline--fa fa-user-circle fa-w-16 fs-3 me-2 text-700" data-fa-transform="grow-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="" style="transform-origin: 0.484375em 0.5em;"><g transform="translate(248 256)"><g transform="translate(0, 0)  scale(1.125, 1.125)  rotate(0 0 0)"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" transform="translate(-248 -256)"></path></g></g></svg><!-- <span class="fas fa-user-circle fs-3 me-2 text-700" data-fa-transform="grow-2"></span> Font Awesome fontawesome.com -->
                    <div class="flex-1">
                      <h6 class="mb-0">See followers (330)</h6>
                    </div>
                  </a><a class="d-flex align-items-center mb-2" href="#"><img class="align-self-center me-2" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/g.png" alt="Generic placeholder image" width="30">
                    <div class="flex-1">
                      <h6 class="mb-0">Google</h6>
                    </div>
                  </a><a class="d-flex align-items-center mb-2" href="#"><img class="align-self-center me-2" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/apple.png" alt="Generic placeholder image" width="30">
                    <div class="flex-1">
                      <h6 class="mb-0">Apple</h6>
                    </div>
                  </a><a class="d-flex align-items-center mb-2" href="#"><img class="align-self-center me-2" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/hp.png" alt="Generic placeholder image" width="30">
                    <div class="flex-1">
                      <h6 class="mb-0">Hewlett Packard</h6>
                    </div>
                  </a></div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-8 pe-lg-2">
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0">Intro</h5>
                </div>
                <div class="card-body text-justify">
                  <p class="mb-0 text-1000">Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience working as an Independent Contractor for Google and developing and growing my educational social network that helps others learn programming, web design, game development, networking.</p>
                  <div class="collapse show" id="profile-intro">
                    <p class="mt-3 text-1000">I’ve acquired a wide depth of knowledge and expertise in using my technical skills in programming, computer science, software development, and mobile app development to developing solutions to help organizations increase productivity, and accelerate business performance. </p>
                    <p class="text-1000">It’s great that we live in an age where we can share so much with technology but I’m but I’m ready for the next phase of my career, with a healthy balance between the virtual world and a workplace where I help others face-to-face.</p>
                    <p class="text-1000 mb-0">There’s always something new to learn, especially in IT-related fields. People like working with me because I can explain technology to everyone, from staff to executives who need me to tie together the details and the big picture. I can also implement the technologies that successful projects need.</p>
                  </div>
                </div>
                <div class="card-footer bg-light p-0 border-top"><button class="btn btn-link d-block w-100 btn-intro-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#profile-intro" aria-expanded="true" aria-controls="profile-intro">Show <span class="less">less<svg class="svg-inline--fa fa-chevron-up fa-w-14 ms-2 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg><!-- <span class="fas fa-chevron-up ms-2 fs--2"></span> Font Awesome fontawesome.com --></span><span class="full">full<svg class="svg-inline--fa fa-chevron-down fa-w-14 ms-2 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg><!-- <span class="fas fa-chevron-down ms-2 fs--2"></span> Font Awesome fontawesome.com --></span></button></div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light d-flex justify-content-between">
                  <h5 class="mb-0">Associations</h5><a class="font-sans-serif" href="../../pages/miscellaneous/associations.html">All Associations</a>
                </div>
                <div class="card-body fs--1 pb-0">
                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img class="d-flex align-self-center me-2 rounded-3" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/apple.png" alt="" width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Apple</a></h6>
                          <p class="mb-1">3243 associates</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img class="d-flex align-self-center me-2 rounded-3" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/g.png" alt="" width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Google</a></h6>
                          <p class="mb-1">34598 associates</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img class="d-flex align-self-center me-2 rounded-3" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/intel-2.png" alt="" width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Intel</a></h6>
                          <p class="mb-1">7652 associates</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                      <div class="d-flex position-relative align-items-center mb-2"><img class="d-flex align-self-center me-2 rounded-3" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/facebook.png" alt="" width="50">
                        <div class="flex-1">
                          <h6 class="fs-0 mb-0"><a class="stretched-link" href="#!">Facebook</a></h6>
                          <p class="mb-1">765 associates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 mb-lg-0">
                <div class="card-header bg-light">
                  <h5 class="mb-0">Photos</h5>
                </div>
                <div class="card-body overflow-hidden">
                  <div class="row g-0">
                    <div class="col-6 p-1"><a class="glightbox" href="https://prium.github.io/falcon/v3.14.0/assets/img/generic/4.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/4.jpg" alt="..."></a></div>
                    <div class="col-6 p-1"><a class="glightbox" href="https://prium.github.io/falcon/v3.14.0/assets/img/generic/5.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/generic/5.jpg" alt="..."></a></div>
                    <div class="col-4 p-1"><a class="glightbox" href="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/4.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/4.jpg" alt="..."></a></div>
                    <div class="col-4 p-1"><a class="glightbox" href="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/5.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/5.jpg" alt="..."></a></div>
                    <div class="col-4 p-1"><a class="glightbox" href="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/3.jpg" data-gallery="gallery1" data-glightbox="data-glightbox"><img class="img-fluid rounded" src="https://prium.github.io/falcon/v3.14.0/assets/img/gallery/3.jpg" alt="..."></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 ps-lg-2">
              <div class="sticky-sidebar">
                <div class="card mb-3">
                  <div class="card-header bg-light">
                    <h5 class="mb-0">Experience</h5>
                  </div>
                  <div class="card-body fs--1">
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/g.png" alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0">Big Data Engineer<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></h6>
                        <p class="mb-1"> <a href="#!">Google</a></p>
                        <p class="text-1000 mb-0">Apr 2012 - Present • 6 yrs 9 mos</p>
                        <p class="text-1000 mb-0">California, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/apple.png" alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0">Software Engineer<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></h6>
                        <p class="mb-1"> <a href="#!">Apple</a></p>
                        <p class="text-1000 mb-0">Jan 2012 - Apr 2012 • 4 mos</p>
                        <p class="text-1000 mb-0">California, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/nike.png" alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0">Mobile App Developer<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></h6>
                        <p class="mb-1"> <a href="#!">Nike</a></p>
                        <p class="text-1000 mb-0">Jan 2011 - Apr 2012 • 1 yr 4 mos</p>
                        <p class="text-1000 mb-0">Beaverton, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-header bg-light">
                    <h5 class="mb-0">Education</h5>
                  </div>
                  <div class="card-body fs--1">
                    <div class="d-flex"><a href="#!">
                        <div class="avatar avatar-3xl">
                          <div class="avatar-name rounded-circle"><span>SU</span></div>
                        </div>
                      </a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"> <a href="#!">Stanford University<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></a></h6>
                        <p class="mb-1">Computer Science and Engineering</p>
                        <p class="text-1000 mb-0">2010 - 2014 • 4 yrs</p>
                        <p class="text-1000 mb-0">California, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/staten.png" alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"> <a href="#!">Staten Island Technical High School<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></a></h6>
                        <p class="mb-1">Higher Secondary School Certificate, Science</p>
                        <p class="text-1000 mb-0">2008 - 2010 • 2 yrs</p>
                        <p class="text-1000 mb-0">New York, USA</p>
                        <div class="border-bottom border-dashed my-3"></div>
                      </div>
                    </div>
                    <div class="d-flex"><a href="#!"> <img class="img-fluid" src="https://prium.github.io/falcon/v3.14.0/assets/img/logos/tj-heigh-school.png" alt="" width="56"></a>
                      <div class="flex-1 position-relative ps-3">
                        <h6 class="fs-0 mb-0"> <a href="#!">Thomas Jefferson High School for Science and Technology<span data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified" data-bs-original-title="Verified"><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" data-fa-transform="shrink-4 down-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.625em;"><g transform="translate(256 256)"><g transform="translate(0, 64)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" transform="translate(-256 -256)"></path></g></g></svg><!-- <small class="fa fa-check-circle text-primary" data-fa-transform="shrink-4 down-2"></small> Font Awesome fontawesome.com --></span></a></h6>
                        <p class="mb-1">Secondary School Certificate, Science</p>
                        <p class="text-1000 mb-0">2003 - 2008 • 5 yrs</p>
                        <p class="text-1000 mb-0">Alexandria, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3 mb-lg-0">
                  <div class="card-header bg-light">
                    <h5 class="mb-0">Events</h5>
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
                  <div class="card-footer bg-light p-0 border-top"><a class="btn btn-link d-block w-100" href="../../app/events/event-list.html">All Events<svg class="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg><!-- <span class="fas fa-chevron-right ms-1 fs--2"></span> Font Awesome fontawesome.com --></a></div>
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
import Menu from '@/components/Menu.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  props: ['user'],
  components: {
    Menu,
    Main
  }, 
  data() {
    return {
      name: config.title,
    }
  },
  async mounted() {
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
.bg-holder {
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  will-change: transform,opacity,filter;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-repeat: no-repeat;
  z-index: 0;
}
.mb-7 {margin-bottom: 5rem !important;}
.min-vh-25 {min-height: 25vh !important;}
.avatar-profile {
    position: absolute;
    bottom: 0;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
}
</style>