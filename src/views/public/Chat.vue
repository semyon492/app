<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="w-full h-full grid grid-cols-4 ">
      <div class="col-span-1 ">
        <div class="overflow-x-hidden">
          <div class="overflow-x-hidden">
            <div class="flex justify-between items-center pt-4">
              <h2 class="text-[#658189] font-extrabold text-xl sm:text-2xl md:text-3xl  ">
                Chats
              </h2>
              <div aria-label="New message" class="">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-xl sm:text-2xl md:text-3xl opacity-40 cursor-pointer hover:opacity-60 " role="button" height="1em" width="1em">
                  <path d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center transition-50 my-1 pr-2 ">
              <div class="flex rounded-2xl md:rounded-full w-full border-[1px] border-[#8eabb4] px-1 md:px-2 my-2 ">
                <input type="text" class="w-full bg-inherit border-0 focus:ring-0 px-1 py-1 md:px-3 md:py-2 text-[13px] md:text-base  " placeholder="Search..." value="">
              </div>
            </div>
          </div>
          <div class="cot-trai max-h-[70vh] md:h-[67vh] overflow-x-hidden ">
            <div class=" col-left active md:p-2.5  md:h-auto rounded-l-lg ">
              <div role="button" class="flex ">
                <div class="w-full h-full items-start flex">
                  <div class="Ko-nghi-ra-ten flex items-center ">
                    <div class="MuiAvatar-root MuiAvatar-circular w-10 h-10 bg-white border-[1px] border-[#8eabb4]  css-3i9vrz">
                      <img alt="avatar" :src="demo_ava" class="MuiAvatar-img css-1hy9t21">
                    </div>
                    <div class="pl-3 w-full pr-[20%] hidden md:flex flex-col ">
                      <strong class="hidden md:flex flex-grow  ">Flower</strong>
                      <div class="last-mess text-ellipsis w-full hidden md:flex ">You:   yjkety</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col-left  md:p-2.5  md:h-auto rounded-l-lg ">
              <div role="button" class="flex ">
                <div class="w-full h-full items-start flex">
                  <div class="Ko-nghi-ra-ten flex items-center ">
                    <div class="MuiAvatar-root MuiAvatar-circular w-10 h-10 bg-white border-[1px] border-[#8eabb4]  css-3i9vrz">
                      <img alt="avatar" :src="demo_ava" class="MuiAvatar-img css-1hy9t21">
                    </div>
                    <div class="pl-3 w-full pr-[20%] hidden md:flex flex-col ">
                      <strong class="hidden md:flex flex-grow  ">Admin</strong>
                      <div class="last-mess text-ellipsis w-full hidden md:flex ">You:   eyuytjueyt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 ">
        <div class="px-4 py-2 border-bottom d-none d-lg-block" style="">
          <div class="flex items-center py-1">
            <div class="relative">
              <div class="h-10">
                <div class="MuiAvatar-root MuiAvatar-circular w-10 h-10 mr-1 border rounded-full cursor-pointer dark:border-white  css-3i9vrz">
                  <img alt="avatar" :src="demo_ava" class="MuiAvatar-img css-1hy9t21">
                </div>
              </div>
            </div>
            <div class="w-full pl-3 grow text-ellipsis">
              <strong>Flower</strong>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="chat-messages p-2 md:p-4 flex dark:bg-[#242526]" style="margin: 0px 7px;">
            <div class="chat-message max-w-[80%] md:max-w-[50%] chat-message-right flex items-center ">
              <div class="flex items-center group ">
                <div class="order-1 chat-element md:max-w-[70%] break-words  rounded-2xl md:rounded-[25px] dark:bg-[#006064] bg-[#8eabb4]   px-3 py-2 ml-1 dark:text-white" aria-label="a few seconds ago">yjkety</div>
                <div class="flex items-center absolute gap-x-1 text-xl h-full opacity-50 text-black dark:text-white left-[-45px] flex-row-reverse">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="hidden cursor-pointer shrink-0 group-hover:flex " height="1em" width="1em">
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="hidden cursor-pointer shrink-0 group-hover:flex " height="1em" width="1em">
                    <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <form class="flex-grow-0 py-3 px-4">
          <div class="w-full rounded-full flex gap-x-2 items-center relative ">
            <input type="text" class="w-full bg-inherit first-line:focus:ring-0 focus:ring-white rounded-full border-[1px] border-[#8EABB4] flex px-4 items-center " placeholder="Type your message" value="">
            <label>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="shrink-0 text-xl transition-50 opacity-60 hover:opacity-100 dark:text-[#b0b3b8] cursor-pointer " height="1em" width="1em">
                <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path>
              </svg>
              <input type="file" accept="image/*" name="avatar" hidden="">
            </label>
            <button class="shrink-0 text-xl opacity-50 hover:opacity-80 cursor-pointer  " type="submit" disabled="">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683742680" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em">
                <defs></defs>
                <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import NotFound from '@/components/NotFound.vue'

export default {
  name: 'Home',
  components: {
    NotFound,

  },
  props: ['user'],
  data() {
    return {
      demo_ava: 'https://api.rapigram.ru/images/no_ava.gif',
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
  methods: {},
}
</script>

<style scoped>
.chat-online {color: #34ce57;}

.chat-offline {color: #e4606d;}
.create-new-message {
  position: relative;
  z-index: 10;
}

.btn-add-new-message {
  opacity: 0.2;
  transition: 0.5s;
}
.btn-add-new-message:hover {
  opacity: 0.7;
}

.cot-trai {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-right: 3px;
}
.cot-trai::-webkit-scrollbar-track,
.chat-messages::-webkit-scrollbar-track,
.list-people-search-new-message::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.cot-trai::-webkit-scrollbar,
.chat-messages::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}
.list-people-search-new-message::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}
.cot-trai::-webkit-scrollbar-thumb,
.chat-messages::-webkit-scrollbar-thumb {
  background-color: #8eabb4;
  border: 2px solid #8eabb4;
}
.list-people-search-new-message::-webkit-scrollbar-thumb {
  background-color: #4f585b;
  border: 2px solid #353b3d;
}

.chat-message-left,
.chat-message-right {
  display: flex;
  flex-shrink: 0;
}
.list-group-item.list-group-item-action.active.hidden {
  opacity: 0;
  visibility: hidden;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
}
.list-group-item.list-group-item-action.active.show {
  opacity: 1;
  visibility: visible;
  height: auto;
  width: auto;
}
.remove-result-people svg {
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  transform: translateY(-5px);
  font-size: 18px;
  color: #dee2e6;
}
.result-people:hover .remove-result-people svg {
  opacity: 1;
  visibility: visible;
  height: auto;
  width: auto;
}
.list-people-search-new-message {
  max-height: 300px;
  overflow-y: auto;
  max-width: 250px;
  overflow-x: hidden;
}

.chat-message-left {
  margin-right: auto;
}

.chat-message-right {
  flex-direction: row-reverse;
  margin-left: auto;
}
.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.flex-grow-0 {
  flex-grow: 0 !important;
}
.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.chat-message {
  margin-top: 3px;
  color: white;
  position: relative;
}
.chat-message .chat-element {
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.chat-message.chat-message-left {
  max-width: 60%;
}
.chat-message.chat-message-left .chat-element {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.chat-message .message-time {
  color: rgb(114, 114, 114);
  font-size: 13px;
  margin-top: 7px;
  margin-right: 3px;
  width: auto;
}
.chat-message.chat-message-left {
  padding: 6px 0;
}

.sentBy-name {
  color: #333;
  opacity: 0.7;
  font-size: 13px;
  position: absolute;
  top: -12px;
  left: 35px;
}
.col-left {
  padding: 10px 10px;
}
.col-left.active {
  background-color: #8eabb4;
}
.dark .col-left.active {
  background-color: #252f3c;
}

.Ko-nghi-ra-ten {
  width: 100%;
  height: 100%;
  z-index: 2;
}
.col-left.active .Ko-nghi-ra-ten {
  color: white;
}
.last-mess {
  font-size: 15px;
  color: rgb(150, 150, 150);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 90%;
}
.dark .col-left.active .last-mess {
  color: #ffffff70;
}
.col-left.active .last-mess {
  color: #dee2e6;
}

.list-people-search-new-message {
  position: absolute;
  border-radius: 7px;
  width: 300px;
}
.list-people-search-new-message .ant-list-item h4 .d-flex {
  color: white;
}
.list-people-search-new-message .ant-list-item {
  color: white;
  padding: 5px;
  margin-bottom: 3px;
  background-color: #8ba1a1;

  transition: 0.5s;
}
.list-people-search-new-message .ant-list-item:hover {
  background-color: #8eabb4;
}

.to,
.result {
  line-height: 38px;
  margin-right: 5px;
}

.col-left.active strong {
  color: white;
}

</style>