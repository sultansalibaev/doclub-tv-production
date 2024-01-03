<template>
    <button @click.stop="toggleLanguageModal" v-click-outside="hideLanguageModal"
        class="flex items-center cursor-pointer focus:outline-none outline-primary-500 [&:focus>svg]:text-primary-500 [&:focus>small]:text-primary-500">
        <icon-svg name="angle-down" class="mr-[7px] pt-px items-center h-[6px] max-w-[10px] transition-colors" :class="disabled ? 'text-200' : 'text-400 hover:text-500 focus:text-primary-500'
            " />
        <small class="select-none transition-colors" :class="disabled ? 'text-200' : 'text-400 hover:text-500 focus:text-primary-500'
            ">{{ languages[selected_language] }}</small>
        <v-dropdown :class="selectPosition + ' w-[270px] mx-auto text-left'" @hide-dropdown="hideLanguageModal"
            @select-option="selectLanguage" :options="languages" title="🏳️  Select a language" :modal="languageModal" />
    </button>
</template>

<script>
import { languages, selected_language, languageModal } from '../model/slice/language'

export default {
    name: 'select-language',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        selectPosition: {
            type: String,
            default: 'mt-2 top-full right-0'
        }
    },
    setup: () => ({
        languages,
        selected_language,
        languageModal
    }),
    methods: {
        toggleLanguageModal () {
            this.languageModal = !this.languageModal
        },
        hideLanguageModal () {
            this.languageModal = false
        },
        selectLanguage (_, index) {
            this.selected_language = index
        }
    }
}
</script>
