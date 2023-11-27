<template>
    <div v-for="(item, index) in menu" class="rounded-2xl flex-col dark:bg-[#242526] bg-white flex">
        <div class="flex-1 p-6">
        <div class="justify-between items-center flex mb-3">
            <div class="flex items-center justify-center">
                <div v-if="item.count > 0" class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-red-500 border-red-500 text-white">
                    <span>{{ item.count }}</span>
                </div>
            </div>
            <div class="flex items-center justify-center">
            <button class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-100 text-black dark:bg-[#242526] dark:text-white hover:bg-gray-200 hover:dark:bg-slate-700 p-1" type="button" icon-w="w-4" icon-h="h-4">
                <span class="inline-flex justify-center items-center w-6 h-6">
                    <v-icon name="settings" class="inline-block" :size="16" />
                </span>
            </button>
            </div>
        </div>
        <div class="justify-between items-center flex">
            <div class="flex items-center justify-center">
            <div>
              <v-toltip label="Default">Default</v-toltip>
                <router-link :to="item.link">
                    <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">{{ item.name }}</h3>
                </router-link>
                
                <h1 class="text-3xl leading-tight font-semibold">{{ item.count }}</h1>
            </div>
            </div>
            <div class="flex items-center justify-center">
            <span class="inline-flex justify-center items-center  h-16 text-blue-500">
                <v-icon :name="item.img" class="inline-block" :size="48" />
            </span>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['menu'],
}
</script>