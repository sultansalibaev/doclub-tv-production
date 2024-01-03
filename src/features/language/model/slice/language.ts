import { reactive, ref } from 'vue'

const languages = reactive(ref(['English', 'German', 'Spanish'])) // Russian
const selected_language = reactive(ref(0))
const languageModal = reactive(ref(false))

export {
    languages,
    selected_language,
    languageModal
}
