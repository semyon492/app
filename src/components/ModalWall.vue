<template>
  <div @click="showModal = true" class="dark:bg-[#242526] bg-white mb-5 pt-3 rounded-lg px-2 md:px-4 shadow-post ">
    <div class="flex items-center gap-x-2 ">
      <img :src="user.photo_50" alt="userImage" class="object-cover w-10 h-10 rounded-full shrink-0 ">
      <div class=" dark:bg-[#4E4F50]/70 dark:hover:bg-[#4E4F50] rounded-full px-4 py-[9px] w-[90%] flex justify-start dark:text-[#b0b3b8] font-medium transition-20 h-10 cursor-pointer text-[#65676b] bg-[#E4E6E9]/60 hover:bg-[#E4E6E9]  ">
        <div class="mr-2 overflow-hidden  text-overflow-ellipsis">What's on your mind, {{ user.first_name }}?</div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Modal size="md" :show="showModal" :title="title" @close="showModal = false">
      <template #body>
        <form class="w-full" @submit.prevent="new_wall">
          <div class="flex gap-x-2 py-4 items-center  ">
            <img :src="user.photo_50" alt="userImage" class="w-10 h-10 rounded-full object-cover ">
            <div>
              <div class="text-[15px] font-semibold ">{{ user.first_name }}</div>
              <button class="px-2 py-1 flex gap-x-0.5 items-center text-[12px] bg-[#E4E6EB] dark:bg-[#3A3B3C] rounded-lg mt-0.5 font-semibold scrollbar scrollbar-thumb-sky-200 scrollbar-track-gray-100 ">
                
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class=" " height="1em" width="1em">
                  <path d="M256 32c-37.764.086-74.894 9.72-107.938 28.002l27.52 19.36 40.033-13.694 24.582 5.62 8.78 49.864 15.1-11.588 41.087-14.046 18.26 27.742-35.82 18.963-22.473 16.152-2.458 22.475-24.932 21.07-7.023 34.064-14.047 1.053 7.023-38.63-53.027-2.807-12.64 18.61-.1-.01v26.644l25.824 1.986 23.838 16.885-1.986 25.328 33.77 5.96-.36.76 53.004-30.558 90.88 59.098-20.51 48.548-32.685 20.156-61.143 77.965-13.498-3.845L262.216 365l-42.213-42.213 7.853-13.86-25.732-9.482-25.326-30.79-21.853-4.967L116.422 208H112l-5.117 26.746-3.64-39.146 5.267-29.147-.7-23.178L97.247 98.2C55.516 140.12 32.06 196.847 32 256c0 123.712 100.288 224 224 224 82.413-.028 158.155-45.308 197.195-117.887L442.82 298.14l-5.62-36.17-34.06-27.392 6.67-37.926 15.803-20.367 37.555-5.05C428.766 87.086 346.913 32.072 256 32zm89.047 48H368v48l-32 16v-23.836zm-122.76 166.518l29.85 4.918-4.213 6.32-24.23-4.916z"></path>
                </svg>
                
                <label class="block text-sm text-gray-700 dark:text-gray-400">
                  <!-- <span>Requested Limit</span> -->
                  <select v-model="form_add_wall.privacy" class="block w-full text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 mt-1">
                    <option>public</option>
                    <option>friends</option>
                  </select>
                </label>
              </button>
            </div>
          </div>
          <textarea v-model="form_add_wall.content" class="input-modal style-3 bg-inherit focus:ring-0 border-0 w-full placeholder:text-[#a0a0a1] text-[22px] h-[200px] relative" :placeholder="'What\'s on your mind, ' + user.first_name + '?'">
          </textarea>
          <div v-if="form_alert">
            {{ err_info }}
          </div>
          <button class="w-full py-1.5 text-center rounded-[4px] font-semibold my-3 bg-[#3982E4] text-white " type="submit">Post</button>
        </form>
      </template>
    </Modal>
  </Teleport>

</template>

<script>
import Modal from '../ui/modal/Modal.vue'
import Icon from '@/ui/Icon.vue'
import {useI18n} from 'vue-i18n'
import Axios from "axios";

export default {
  name: 'ModalWall',
  props: {
    user: null,
    modal_name: String,
    profile_id: null,
  },
  components: {
    Modal,
    Icon,
  },
  setup() {
    // use global scope
    const {t, locale} = useI18n()
    return {t, locale}
  },
  data() {
    return {
      showModal: false,
      link_type: this.list,
      name: import.meta.env.VITE_APP_NAME,
      form_add_wall: {
        privacy: 'public',
        type: '1',
        content: '',
        user_id: '',
        access_token: localStorage.getItem('token'),
      },
      access_token: null,
      form_alert: false,
      err_info: '',
      title: 'default'
    }
  },
  async mounted() {
    this.title = this.t('wall.create_post')
  },
  methods: {
    new_wall() {
      this.form_add_wall.user_id = this.profile_id;
      // this.form_add_wall.access_token = localStorage.getItem('token');    

      Axios.post(import.meta.env.VITE_DOMAIN_API + "wall/add", this.form_add_wall)
      .then(res => {
        if (res.data.status == 7) {
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if (res.data.status == 9) {
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if (res.data.status == 5) {
          this.form_alert = true;
          this.err_info = this.t('err.Incorrect_email_or_password_entered');
        }
        if (res.data.status == 4) {
          this.form_alert = true;
          this.err_info = this.t('err.user_not_found');
        }
        if (res.data.status == 8) {
          this.form_alert = true;
          this.err_info = this.t('err.user_not_found');
        }
        if (res.data.status == 16) {
          this.form_alert = true;
          this.err_info = this.t('err.unknown_error');
        }
        setTimeout(() => {
          this.form_alert = false;
          this.err_info = "";
        }, 3000);

        if (res.data.status == 1) {
          // console.log(res.data.access_token);
          // console.log(res.data.data.access_token);
          // localStorage.setItem('token', res.data.access_token);
          // this.user.is_connected = true;

          //   this.$router.push('/')
          this.showModal = false;
          this.$notify({
            group: "foo",
            title: "Уведомление",
            text: "Запись добавлена"
        }, 2000) // 2s
        }
      })
    },
  },
}
</script>

<style lang="scss">

</style>