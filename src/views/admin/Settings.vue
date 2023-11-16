<template>
  <main v-if="(user.is_connected !== true)">
    <NotFound/>
  </main>
  <main v-if="(user.is_connected)">
    <div class="mx-4 sm:mx-[5%] md:mx-[15%] px-1 sm:px-10 mt-4">
      <div class="w-full sm:grid grid-cols-5 gap-x-4">
        <div class="col-span-2">
          <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
            <div class="dark:bg-slate-900">
              <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
                <b class="font-black">Site Settings</b>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <a aria-current="page" href="/settings" class="active exact-active flex cursor-pointer py-3 text-blue-600 hover:text-black dark:text-white dark:text-slate-300 dark:hover:text-white">
                    <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                      <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                        <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                      </svg>
                    </span>
                    <span data-label="Account" aria-label="Account" role="tooltip" class="is-top is-medium custom-tooltip" style="cursor: pointer;">
                      <span class="grow text-ellipsis line-clamp-1 pr-12 p2">Account</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div class="bg-white dark:bg-slate-900 lg:rounded-2xl">
            <div class="p-6">
              <h5 class="text-2xl">Settings</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NotFound from '@/components/NotFound.vue'

export default {
  name: 'admin_tests',
  components: {
    NotFound,
  },
  props: ['user'],
}
</script>