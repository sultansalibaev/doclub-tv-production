<template>
    <aside class="
            flex flex-col min-w-[330px] h-[100vh] bg-neutral-100 pl-8
            border-t-[40px] border-b-[30px] pb-[2px] border-neutral-100
            aside-scrollbar transition-all overflow-x-hidden
        " :class="{
            'border-r-[10px] pr-[22px]': languageModal,
            'hidden-sidebar': !menuModal,
            'mobile-screen:w-full mobile-screen:!border-b-[110px]': menuModal,
            'border-r-[32px]': !languageModal,
        }">
        <router-link to="/main">
            <icon-svg name="docmed.space" class="min-h-[23px]" />
        </router-link>
        <nav class="inline-flex flex-col gap-4 mt-10 p-0">
            <span class="uppercase text-300">Navigation</span>
            <div v-for="([name, link]) in Object.entries(navigation)" :key="name">
                <nav-item :to="link" class="-ml-4"
                    :active="link == currentPath || (link == '/main' && currentPath == '/calendar')">{{ name }}</nav-item>
            </div>
        </nav>
        <nav class="inline-flex flex-col gap-4 mt-10 mb-10 p-0">
            <span class="uppercase text-300">Profile</span>
            <div v-for="([name, link]) in Object.entries(navigationProfile)" :key="name">
                <nav-item :to="link" class="-ml-4" :active="link == currentPath">{{ name }}</nav-item>
            </div>
        </nav>
        <div class="flex flex-col mt-auto">
            <select-language class="relative" select-position="mb-2 bottom-full left-0" />
            <span class="text-300 mb-4 mt-10">Company Label place</span>
            <span class="text-300 underline">Personal data protection</span>
        </div>
    </aside>
</template>

<script>
import { languageModal, SelectLanguage } from '@/features/language'
import { menuModal } from '../model/slice/sidebar'

export default {
    components: {
        SelectLanguage
    },
    setup: () => ({
        languageModal,
        menuModal
    }),
    data () {
        return {
            navigation: {
                'Main page': '/main',
                Education: '/education',
                Events: '/events',
                Media: '/media',
                About: '/about',
                Community: '/community',
                Medication: '/medication'
            },
            navigationProfile: {
                'Personal page': '/profile',
                Settings: '/settings',
                Exit: '/exit'
            }
        }
    },
    computed: {
        currentPath () {
            return this.$router.currentRoute.value.path
        }
    }
}
</script>
