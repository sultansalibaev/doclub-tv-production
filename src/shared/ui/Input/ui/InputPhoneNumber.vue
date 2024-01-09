<template>
    <label class="mb-4 inline-block">Phone number</label>

    <vue-tel-input
        class="h-[44px] border-current text-neutral-700 border-[1px] rounded-xl py-3 px-4"
        :class="{
            'border-neutral-400 [&:has(input:focus)]:border-primary-600': phone.valid === undefined,
            'border-primary-600': phone.valid === true,
            'focus:border-danger-500 border-danger-500 bg-danger-100 !text-danger-700': phone.valid === false,
        }"
        v-focus
        v-model="phone.value"
        :inputOptions="{
            placeholder: ''
        }"
        :defaultCountry="phone.defaultCountryCode"
        :phoneMaxLength="maxPhoneNumberCount"
        :dropdownOptions="{
            showFlags: false,
            showDialCodeInSelection: true,
            showDialCodeInList: true
        }"
        @country-changed="setCountryCode"
        @validate="validateNumber"
        @keydown.enter="sendCode"
    >
        <template v-slot:arrow-icon>
            <icon-svg
                name="angle-down"
                class="!text-inherit ml-[7px] pt-px items-center h-[6px] max-w-[10px]"
            />
        </template>
    </vue-tel-input>
</template>

<script>
import VueTelInput from './VueTelInput.vue'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import RandExp from 'randexp'
import { sendCode, phone } from '@/features/authorization/input-number'

export default {
    name: 'input-phone-number',
    components: {
        VueTelInput
    },
    setup: () => ({
        sendCode,
        parsePhoneNumberFromString,
        phone
    }),
    data: () => ({
        phoneParsedMode: 'auto',
        phoneNumberExample: undefined
    }),
    methods: {
        setCountryCode (country) {
            console.log('country', country)
            this.phone.defaultCountryCode = country.dialCode
        },
        validateNumber (phone) {
            console.log('phone', this.phone.value.toString(), phone, phone?.getMetadata?.())
            const pattern = phone?.getMetadata?.()?.countries?.[phone?.country?.iso2]?.[2]
            if (pattern) {
                const randexp = new RandExp(pattern ?? '')

                const generatedString = randexp.gen()
                // const result = parsePhoneNumberFromString(generatedString, phone?.country?.iso2 ?? 'KZ')
                // console.log('result', result?.getMetadata?.())
                this.phoneNumberExample = generatedString
                // const formattedPhoneNumber = result?.format?.(this.parsedMode.toUpperCase())
                // console.log('generated phone', formattedPhoneNumber)
                // this.countryCodeMaxLength[this.phone.defaultCountryCode] = formattedPhoneNumber.length
            }
            this.phone.valid = phone.valid
        }
    },
    computed: {
        maxPhoneNumberCount () {
            return this.phone.valid ? this.phone.value.length : this.phoneNumberExample?.length
        },
        parsedMode () {
            if (this.phoneParsedMode === 'auto') {
                if (!this.phone.value || this.phone.value[0] !== '+') {
                    return 'national'
                }
                return 'international'
            }
            if (!['international', 'national'].includes(this.phoneParsedMode)) {
                console.error('Invalid value of prop "mode"')
                return 'international'
            }
            return this.phoneParsedMode
        }
    }
}

</script>
