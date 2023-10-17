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
                  <option>public</option>
                  <option>friends</option>
                </select>
              </label>
            </div> 
            Как показывать 
            мою дату рождения

            Кто видит мои
 фотографии

Кто видит
список моих групп


<h5 class="text-2xl">Записи на странице</h5>
Кто видит чужие записи
на моей странице

Кто может оставлять записи
на моей странице

Кто видит
комментарии к записям

Кто может
комментировать мои записи
<h5 class="text-2xl">Связь со мной</h5>


Кто может
писать мне личные сообщения

Кто может
приглашать меня в сообщества

Кто может отправлять мне приглашение в чат

<h5 class="text-2xl">Прочее</h5>

Кому в интернете
видна моя страница



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

export default {
  name: 'Home',
  components: {
    SettingsMenu,
    SettingsCard,
    Main,
    Button,
    Modal
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