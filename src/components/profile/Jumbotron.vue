<template>
    <div class="pt-[50px] md:pt-[75px] md:px-[15%] w-full dark:bg-[#242426] bg-white overflow-x-hidden ">
        <div class="flex flex-col sm:flex-row mx-10 sm:items-start gap-x-4 border-b-[1px] dark:border-b-white/10 border-b-black/10 items-center ">
            <img :src="profile.photo_100" alt="avatar" class="w-[170px] h-[170px] rounded-full object-cover translate-y-[-32px] shrink-0  dark:border-white border-4 border-black/50 ">
            <div class="flex flex-col sm:flex-row w-full justify-between items-center sm:items-end pt-4 translate-y-[-32px] sm:translate-y-[0] ">
                <div>
                    <div class="flex justify-center">
                    <div class="text-[32px] font-bold md:flex items-center gap-x-1 ">
                        <div class="text-center flex items-center justify-center ">{{ profile.first_name }} {{ profile.last_name }}</div>
                    </div>
                    </div>
                    <div class="dark:text-[#b0b3b8] font-semibold text-[17px] flex gap-x-1.5 items-center text-[#65676b] justify-center sm:justify-start">
                        <!-- <span class="cursor-pointer flex-shrink-0 ">{{ $t('profile.followers') }}: 2</span> -->
                    </div>
                </div>
                <div class="flex mt-4 sm:mt-0 flex-shrink-0 " v-if="profile.owner">
                    <router-link to="/edit" class="flex gap-x-1 items-center font-semibold px-3 py-2 bg-[#D8DADF]/50 hover:bg-[#D8DADF] dark:bg-[#4E4F50]/50 dark:hover:bg-[#4E4F50] transition-20 rounded-md ">
                    <Icon type="edit"/>
                    {{ $t('profile.edit_profile') }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="flex mx-0 sm:mx-10 ">
            <ul class="flex items-center justify-between w-full px-16 py-1 gap-x-10 ">
            <li class="li-profile active ">
                <router-link :to="'/id' + id" class="text-black dark:text-white p-1">{{ $t('profile.posts') }}</router-link>
            </li>
            <li class="li-profile false ">
                <router-link :to="'/friends/' + id" class="text-black dark:text-white p-1">{{ $t('profile.friends') }}</router-link>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Icon from '@/ui/Icon.vue'

export default {
    components: {
        Icon,
    },
    props: ['profile', 'id'],
}
</script>