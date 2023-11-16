<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.privacy') }}</h5>
        </div>
        <div class="p-6">
          <form>
            <h5 class="text-2xl">Моя страница</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит основную информацию моей страницы</span>
                <select v-model="privacy_info" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Как показывать мою дату рождения</span>
                <select v-model="privacy_age" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит мои фотографии</span>
                <select v-model="privacy_photo" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>           
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит список моих групп</span>
                <select v-model="privacy_groups" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <h5 class="text-2xl">Записи на странице</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит чужие записи на моей странице</span>
                <select v-model="privacy_other_wall" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может оставлять записи на моей странице</span>
                <select v-model="privacy_send_wall" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит комментарии к записям</span>
                <select v-model="privacy_view_comment" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может комментировать мои записи</span>
                <select v-model="privacy_send_comment" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <h5 class="text-2xl">Связь со мной</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может писать мне личные сообщения</span>
                <select v-model="privacy_send" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может приглашать меня в сообщества</span>
                <select v-model="privacy_send_group" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может отправлять мне приглашение в чат</span>
                <select v-model="privacy_send_chat" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>

            <h5 class="text-2xl">Прочее</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кому в интернете видна моя страница</span>
                <select v-model="privacy_profile" class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option value="all">Доступно всем</option>
                  <option value="friends">Друзья</option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>      
    </SettingsCard>
  </main>
</template>

<script>
import SettingsCard from '@/components/settings/SettingsCard.vue'
import NotFound from '@/components/NotFound.vue'

export default {
  components: {
    SettingsCard,
    NotFound,
  },
  props: ['user'],
  data() {
    return {
      privacy_info: '',
      privacy_age: '',
      privacy_photo: '',
      privacy_groups: '',
      privacy_other_wall: '',    
      privacy_send_wall: '',
      privacy_view_comment: '',
      privacy_send_comment: '',
      privacy_send: '',
      privacy_send_group: '',
      privacy_send_chat: '',
      privacy_profile: '',
    }
  },
  watch: {
    privacy_info(new_info, old_info) {
      if(old_info !== ''){this.Notify()}      
    },
    privacy_age(new_age, old_age) {
      if(old_age !== ''){this.Notify()}      
    },
    privacy_photo(new_photo, old_photo) {
      if(old_photo !== ''){this.Notify()}      
    },
    privacy_groups(new_groups, old_groups) {
      if(old_groups !== ''){this.Notify()}      
    },
    privacy_other_wall(new_other_wall, old_other_wall) {
      if(old_other_wall !== ''){this.Notify()}      
    },
    privacy_send_wall(new_send_wall, old_send_wall) {
      if(old_send_wall !== ''){this.Notify()}      
    },
    privacy_view_comment(new_view_comment, old_view_comment) {
      if(old_view_comment !== ''){this.Notify()}      
    },
    privacy_send_comment(new_send_comment, old_send_comment) {
      if(old_send_comment !== ''){this.Notify()}      
    },
    privacy_send(new_send, old_send) {
      if(old_send !== ''){this.Notify()}      
    },
    privacy_send_group(new_send_group, old_send_group) {
      if(old_send_group !== ''){this.Notify()}      
    },
    privacy_send_chat(new_send_chat, old_send_chat) {
      if(old_send_chat !== ''){this.Notify()}      
    },
    privacy_profile(new_profile, old_profile) {
      if(old_profile !== ''){this.Notify()}      
    },

  },
  async mounted() {
    await this.getPrivacy()
  },
  methods: {
    Notify(){
      this.$notify({
        group: "foo",
        title: "Уведомление",
        text: "Сохранено"
      }, 2000) // 2s
    },
    getPrivacy(){
      this.privacy_info = 'friends'
      this.privacy_age = 'all'
      this.privacy_photo = 'all'
      this.privacy_groups = 'all'
      this.privacy_other_wall = 'all'   
      this.privacy_send_wall = 'all'
      this.privacy_view_comment = 'all'
      this.privacy_send_comment = 'all'
      this.privacy_send = 'all'
      this.privacy_send_group = 'all'
      this.privacy_send_chat = 'all'
      this.privacy_profile = 'friends'
    },
  },
}
</script>