<template>
    <div class="flex flex-col gap-7 p-8 rounded-2xl border-[1px] border-neutral-300">
        <h4 class="text-500">Referral link</h4>

        <p class="text-400">Invite your colleagues and get bonuses to your bonus account for their registration</p>

        <div class="flex gap-4">
            <v-input text-disabled icon="right" :value="referralLink" class="[&_svg]:!text-neutral-700">
                <icon-svg name="edit-alt" class="w-4 h-4 cursor-pointer" />
            </v-input>
            <v-button text="Copy link" class="mt-auto" @click="copyClipboard(referralLink)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { copyClipboard } from '@/shared/utils'
import { reactive, ref, defineOptions } from 'vue'

defineOptions({
    name: 'referral-link'
})

const referralLink = reactive(ref('docmed.space/doc/Giselle#ref_8s7'))

</script>
