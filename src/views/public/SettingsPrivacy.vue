<template>
  <main v-if="(user.is_connected !== true)">
    <Main/>
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
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Как показывать мою дату рождения</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит мои фотографии</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>           
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит список моих групп</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>

<h5 class="text-2xl">Записи на странице</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит чужие записи на моей странице</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может оставлять записи на моей странице</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто видит комментарии к записям</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может комментировать мои записи</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
<h5 class="text-2xl">Связь со мной</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может писать мне личные сообщения</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может приглашать меня в сообщества</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кто может отправлять мне приглашение в чат</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
                </select>
              </label>
            </div>

<h5 class="text-2xl">Прочее</h5>
<div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Кому в интернете видна моя страница</span>
                <select class="text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 ">
                  <option>Доступно всем</option>
                  <option>Друзья</option>
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
import SettingsMenu from '@/components/SettingsMenu.vue'
import SettingsCard from '@/ui/SettingsCard.vue'
import Main from '@/components/Main.vue'

import Button from '@/ui/button/Button.vue'
import Modal from '@/ui/modal/Modal.vue'
import Icon from '@/ui/Icon.vue'

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    SettingsCard,
    Main,
    Button,
    Modal,
    Icon
  },
  props: ['user'],
  data() {
    return {}
  },
  async mounted() {
  },
  methods: {},
}
</script>