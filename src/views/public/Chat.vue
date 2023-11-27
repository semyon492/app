<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
<!-- component -->


<!-- Messenger Clone -->
<div class="h-screen w-full flex antialiased overflow-hidden">
    <div class="flex-1 flex flex-col">
        <main class="flex-grow flex flex-row min-h-0">
            <section class="flex flex-col flex-none overflow-auto w-24 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                <div class="header p-4 flex flex-row justify-between items-center flex-none">
                    <div class="w-16 h-16 relative flex flex-shrink-0" style="filter: invert(100%);">
                        <!-- <img class="rounded-full w-full h-full object-cover" alt="ravisankarchinnam"
                             src="https://avatars3.githubusercontent.com/u/22351907?s=60"/> -->
                        <router-link to="/">
                          <svg width="60" height="60" viewBox="0 0 1024 1024" class="inline-block">
                            <path
                              d="M877.387 523.945c-1.663 198.958-163.571 360.868-362.532 362.531-198.991 1.661-360.885-166.07-362.526-362.531-0.697-83.354-130.015-83.42-129.318 0 1.064 127.401 49.851 247.752 136.97 340.531 86.427 92.047 208.144 143.457 333.116 150.77 127.267 7.454 251.374-40.885 347.279-122.774 96.086-82.04 150.659-201.304 164.166-325.296 1.565-14.352 2.04-28.805 2.16-43.23 0.697-83.421-128.618-83.355-129.315-0.001z"
                              fill="#4A5699"/><path
                            d="M152.329 500.646c1.662-198.965 163.563-360.875 362.526-362.537 83.354-0.697 83.419-130.013 0-129.317-129.524 1.081-252.396 51.567-345.385 141.68C75.465 241.564 24.097 370.538 23.011 500.646c-0.697 83.421 128.62 83.349 129.318 0z"
                            fill="#C45FA0"/><path
                            d="M400.998 617.112c-54.167-72.265-46.168-154.096 21.221-212.268 63.03-54.412 156.255-33.802 209.578 32.46 22.13 27.497 68.54 22.901 91.441 0 26.914-26.917 22.073-64.009 0-91.44-89.215-110.859-259.653-132.629-373.618-47.204-118.817 89.062-151.202 262.422-60.284 383.718 21.095 28.142 55.432 42.548 88.465 23.196 27.799-16.282 44.387-60.192 23.197-88.462z"
                            fill="#E5594F"/><path
                            d="M628.723 433.281c30.673 40.924 38.604 71.548 34.179 119.265 0.715-5.845 0.408-4.79-0.924 3.173-1.3 6.769-3.259 13.386-5.207 19.983-4.113 13.896-2.982 9.9-9.75 22.736-11.978 22.716-23.474 34.203-45.271 51.746-27.499 22.131-22.904 68.538 0 91.441 26.914 26.913 64.011 22.075 91.439 0 110.85-89.224 132.613-259.649 47.193-373.614-21.092-28.142-55.431-42.546-88.466-23.196-27.799 16.287-44.384 60.193-23.193 88.466z"
                            fill="#F39A2B"/>
                          </svg>
                        </router-link>

                    </div>
                    <p class="text-md font-bold hidden md:block group-hover:block">Messenger</p>
                    <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block dark:text-white text-white">
                        <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                            <path
                                    d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"/>
                        </svg>
                    </a>
                </div>
                <!-- <div class="search-box p-4 flex-none">
                    <form onsubmit="">
                        <div class="relative">
                            <label>
                                <input class="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                       type="text" value="" placeholder="Search Messenger"/>
                                <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6">
                                        <path fill="#bbb"
                                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                                    </svg>
                                </span>
                            </label>
                        </div>
                    </form>
                </div> -->
                <div class="contacts p-2 flex-1 overflow-y-scroll">
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/61.jpg"
                                 alt=""
                            />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Angelina Jolie</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">Ok, see you at the subway in a bit.</p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">Just now</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/97.jpg"
                                 alt=""
                            />
                            <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div class="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p class="font-bold">Tony Stark</p>
                            <div class="flex items-center text-sm font-bold">
                                <div class="min-w-0">
                                    <p class="truncate">Hey, Are you there?</p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">10min</p>
                            </div>
                        </div>
                        <div class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Scarlett Johansson</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">You sent a photo.</p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">1h</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/12.jpg"
                                 alt=""
                            />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>John Snow</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">You missed a call John.
                                    </p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">4h</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/23.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Emma Watson</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">You sent a video.
                                    </p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">11 Feb</p>
                            </div>
                        </div>
                        <div class="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                            <img class="rounded-full w-full h-full object-cover" alt="user2"
                                 src="https://randomuser.me/api/portraits/women/23.jpg"/>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/87.jpg"
                                 alt="User2"
                            />
                            <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div class="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Sunny Leone</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">Ah, it was an awesome one night stand.
                                    </p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">1 Feb</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/45.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Bruce Lee</p>
                            <div class="flex items-center text-sm text-gray-600">
                                <div class="min-w-0">
                                    <p class="truncate">You are a great human being.
                                    </p>
                                </div>
                                <p class="ml-2 whitespace-no-wrap">23 Jan</p>
                            </div>
                        </div>
                        <div class="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                            <img class="rounded-full w-full h-full object-cover" alt="user2"
                                 src="https://randomuser.me/api/portraits/men/45.jpg"/>
                        </div>
                    </div>

                </div>
            </section>
            <section class="flex flex-col flex-auto border-l border-gray-800">
                <div class="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                    <div class="flex">
                        <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div class="text-sm">
                            <p class="font-bold">Scarlett Johansson</p>
                            <p>Active 1h ago</p>
                        </div>
                    </div>

                    <div class="flex">
                        <a href="#" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current text-white">
                                <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z"/>
                            </svg>

                        </a>
                        <a href="#" @click="theme" class="block rounded-full hover:bg-gray-700 bg-gray-800  w-10 h-10 p-2 ml-4">
                            <s-icon name="theme" class="w-full h-full fill-current text-white" size="20"/>
                        </a>                        
                    </div>
                </div>
                <div class="chat-body p-4 flex-1 overflow-y-scroll">
                    <div class="flex flex-row justify-start">
                        <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                            <div class="flex items-center group">
                                <p class="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center group">
                                <p class="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center group">
                                <p class="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
                    <div class="flex flex-row justify-end">
                        <div class="messages text-sm text-white grid grid-flow-row gap-2">
                            <div class="flex items-center flex-row-reverse group">
                                <p class="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Hey! How are you?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center flex-row-reverse group">
                                <p class="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center flex-row-reverse group">
                                <p class="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
                    <div class="flex flex-row justify-start">
                        <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
                            <img class="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                            <div class="flex items-center group">
                                <p class="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center group">
                                <p class="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center group">
                                <p class="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="p-4 text-center text-sm text-gray-500">12:40 PM</p>
                    <div class="flex flex-row justify-end">
                        <div class="messages text-sm text-white grid grid-flow-row gap-2">
                            <div class="flex items-center flex-row-reverse group">
                                <p class="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Hey! How are you?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center flex-row-reverse group">
                                <p class="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center flex-row-reverse group">
                                <a class="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                                    <img class="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking"/>
                                </a>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex items-center flex-row-reverse group">
                                <p class="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
	 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
	C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                    </svg>
                                </button>
                                <button type="button" class="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                    <svg viewBox="0 0 24 24" class="w-full h-full fill-current">
                                        <path
                                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-footer flex-none">
                    <div class="flex flex-row items-center p-4">
                        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z"/>
                            </svg>
                        </button>
                        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                            </svg>
                        </button>
                        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                <path d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z"/>
                            </svg>
                        </button>
                        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                <path d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z" />
                            </svg>
                        </button>
                        <div class="relative flex-grow">
                            <label>
                                <input class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                       type="text" value="" placeholder="Aa"/>
                                <button type="button" class="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6">
                                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                                    </svg>
                                </button>
                            </label>
                        </div>
                        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                            <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                                <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </div>
</div>
  </main>
</template>

<script>
import NotFound from '@/components/NotFound.vue'

import sIcon from '@/ui/s-icon.vue'

export default {
  name: 'Home',
  components: {
    NotFound,
    sIcon,
  },
  props: ['user'],
  data() {
    return {
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
          document.title = to.meta.title || 'Chat';
      }
    },
  },
  async mounted() {
  },
  methods: {
    theme(){
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'      
      } else {      
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')   

      } 
    },      
  },
}
</script>

<style scoped>
  /* can be configured in tailwind.config.js */
  .group:hover .group-hover\:block {
    display: block;
  }
  .hover\:w-64:hover {
    width: 45%;
  }  
  /* NO NEED THIS CSS - just for custom scrollbar which can also be configured in tailwind.config.js*/
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #2d3748;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #2b6cb0;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #1a202c;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }  
</style>
