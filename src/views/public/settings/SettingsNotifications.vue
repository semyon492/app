<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <SettingsCard>
      <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
        <div class="p-6">
          <h5 class="text-2xl">{{ $t('settings.notifications') }}</h5>
        </div>
        <div class="p-6">
          <form>
            <h5 class="text-2xl">Сообщения</h5>
            <div class="mt-4">
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Личные сообщения</span>
                <label class="switch mr-6 mb-3 last:mr-0 text-sm form-select leading-5 dark:text-gray-300 dark:border-gray-600 dark:focus:shadow-outline-gray dark:focus:border-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-outline-purple">
                  <input type="checkbox" name="sample-switch" v-model="notify_send" >
                  <span class="check"></span>
                </label>                
              </label>
              <h5 class="text-2xl">Обратная связь</h5>
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Реакции и отметки «Нравится»</span>
                <label class="switch mr-6 mb-3 last:mr-0 text-sm form-select leading-5 dark:text-gray-300 dark:border-gray-600 dark:focus:shadow-outline-gray dark:focus:border-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-outline-purple">
                  <input type="checkbox" name="sample-switch" v-model="notify_like" >
                  <span class="check"></span>
                </label>   
              </label>
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Поделились</span>
                <label class="switch mr-6 mb-3 last:mr-0 text-sm form-select leading-5 dark:text-gray-300 dark:border-gray-600 dark:focus:shadow-outline-gray dark:focus:border-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-outline-purple">
                  <input type="checkbox" name="sample-switch" v-model="notify_share" >
                  <span class="check"></span>
                </label>  
              </label>
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Комментарии</span>
                <label class="switch mr-6 mb-3 last:mr-0 text-sm form-select leading-5 dark:text-gray-300 dark:border-gray-600 dark:focus:shadow-outline-gray dark:focus:border-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-outline-purple">
                  <input type="checkbox" name="sample-switch" v-model="notify_comment" >
                  <span class="check"></span>
                </label>  
              </label>
              <h5 class="text-2xl">События</h5>
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Заявки в друзья</span>
                <label class="switch mr-6 mb-3 last:mr-0 text-sm form-select leading-5 dark:text-gray-300 dark:border-gray-600 dark:focus:shadow-outline-gray dark:focus:border-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-outline-purple">
                  <input type="checkbox" name="sample-switch" v-model="notify_friend" >
                  <span class="check"></span>
                </label>  
              </label>  
              <h5 class="text-2xl">События</h5>
              <label class="block text-sm text-gray-700 dark:text-gray-400 flex justify-evenly" >
                <span>Сервисы</span>
                <label class="switch mr-6 mb-3 last:mr-0 text-sm form-select leading-5 dark:text-gray-300 dark:border-gray-600 dark:focus:shadow-outline-gray dark:focus:border-gray-600 focus:outline-none focus:border-purple-400 focus:shadow-outline-purple">
                  <input type="checkbox" name="sample-switch" v-model="notify_service" >
                  <span class="check"></span>
                </label>  
              </label>  

            </div>            
          </form>
        </div>
      </div>      
    </SettingsCard>    
  </main>
</template>

<script>
import SettingsMenu from '@/components/settings/SettingsMenu.vue'
import SettingsCard from '@/components/settings/SettingsCard.vue'
import NotFound from '@/components/NotFound.vue'

import Button from '@/ui/button/Button.vue'
import Modal from '@/ui/modal/Modal.vue'


export default {
  name: 'Home',
  components: {
    SettingsMenu,
    SettingsCard,
    NotFound,
    Button,
    Modal
  },
  props: ['user'],
  data() {
    return {
      privacy_privacy: '',

      notify_send: '',
      notify_like: '',
      notify_share: '',
      notify_comment: '',
      notify_friend: '',
      notify_service: '',
    }
  },
  watch: {
    privacy_privacy(new_privacy, old_privacy) {
      if(old_privacy !== ''){this.Notify()}      
    },
    notify_send(new_send, old_send) {
      if(old_send !== ''){this.Notify()}      
    },    
    notify_like(new_, old_) {
      if(old_ !== ''){this.Notify()}      
    },  
    notify_share(new_, old_) {
      if(old_ !== ''){this.Notify()}      
    }, 
    notify_comment(new_, old_) {
      if(old_ !== ''){this.Notify()}      
    }, 
    notify_friend(new_, old_) {
      if(old_ !== ''){this.Notify()}      
    }, 
    notify_service(new_, old_) {
      if(old_ !== ''){this.Notify()}      
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
      this.notify_send = true
      this.notify_like = false
      this.notify_share = false
      this.notify_comment = false
      this.notify_friend = false
      this.notify_service = true

      // this.privacy_privacy = 'friends'
    },    
  },
}
</script>