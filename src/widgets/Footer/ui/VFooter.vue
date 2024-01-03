<template>
    <footer class="
            hidden fixed bottom-0 left-0 right-0 pb-5 bg-white
            items-center justify-around h-[80px] shadow-footer rounded-[24px_24px_0_0]
        ">
        <icon-svg :name="`footer/${icon.name}`" v-for="icon in icons" :key="icon.name"
            class="transition-colors cursor-pointer" @click="selectFooterTab(icon)" :class="{
                'text-neutral-400 hover:text-primary-400': icon.name != selectedTab,
                '!text-primary-600 hover:!text-primary-600': icon.name == selectedTab,
            }" />
    </footer>
</template>

<script>
import { selectedTab } from '../model/slice/footer'
import { menuModal } from '@/widgets/Sidebar'

export default {
    name: 'v-footer',
    setup: () => ({
        selectedTab,
        menuModal
    }),
    data: () => ({
        icons: [
            {
                name: 'menu',
                to: undefined
            },
            {
                name: 'home',
                to: '/main'
            },
            {
                name: 'calendar',
                to: '/calendar'
            },
            {
                name: 'person',
                to: '/profile'
            }
        ]
    }),
    methods: {
        selectFooterTab (icon) {
            if (icon.name === 'menu') {
                if (this.selectedTab === 'menu') {
                    this.selectedTab = this.icons.find(icon => icon.to === this.currentPath)?.name ?? ''
                    this.menuModal = false
                    return
                } else {
                    this.menuModal = true
                }
            }
            this.selectedTab = icon.name
            if (icon.to !== undefined) {
                this.menuModal = false
                this.$router.push(icon.to)
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
