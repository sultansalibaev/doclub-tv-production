<template>
    <div class="flex flex-col gap-7 p-8 rounded-2xl border-[1px] border-neutral-300">
        <h4 class="text-500">Rating</h4>
        <div
            class="flex gap-6 mobile-screen:gap-4 flex-wrap"
        >
            <!-- class="flex gap-[clamp(16px,24px,24px)]" -->
            <v-tab
                :active="ratingBy == 'overall'"
                @click="ratingBy = 'overall'"
            >Overall</v-tab>
            <v-tab
                :active="ratingBy == 'region'"
                @click="ratingBy = 'region'"
            >Region</v-tab>
            <v-tab
                :active="ratingBy == 'specialty'"
                @click="ratingBy = 'specialty'"
            >Specialization</v-tab>
        </div>
        <div class="flex flex-col gap-3 w-full max-h-[249px] pb-px aside-scrollbar">
            <div class="flex items-center gap-4" v-for="(user, index) in sortedUsers" :key="index">
                <span class="text-400">#{{ index + 122 }}</span>
                <v-img :name="user.avatar" class="min-w-[40px] h-10" />
                <div class="flex flex-col">
                    <span
                        v-if="user.full_name === profile.full_name"
                        class="text-500 line-clamp-2 max-w-[270px] font-semibold"
                        :title="user.full_name"
                    >{{ user.full_name }}</span>
                    <span
                        v-else
                        class="text-500 line-clamp-2 max-w-[270px]"
                        :title="user.full_name"
                    >{{ user.full_name }}</span>

                    <small v-show="user.region || user.specialty" class="text-400 mt-1">{{ [user.region, user.specialty].filter(Boolean).join(' / ') }}</small>
                </div>
            </div>
        </div>
        <div>
            <v-button mode="outline" text="Open rating" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { profile } from '@/entities/Profile'
import { computed, reactive, ref, defineOptions } from 'vue'

defineOptions({
    name: 'v-rating'
})

type RatingType = 'overall' | 'region' | 'specialty'

const ratingBy = reactive(ref<RatingType>('overall'))
const users = reactive(ref([
    {
        full_name: 'Dmitry Yuryevich Ovsyannikov',
        avatar: 'avatar/avatar-1.png',
        region: 'Region'
    },
    {
        full_name: 'Tatiana Mikhailovna Ryabova',
        avatar: 'avatar/avatar-2.png'
    },
    {
        full_name: 'Giselle Saint Claire',
        avatar: 'avatar/profile-avatar.png',
        specialty: 'Specialty'
    },
    {
        full_name: 'Аширматов Бахрам Маджидович',
        avatar: 'avatar/avatar-3.png',
        region: 'Region'
    },
    {
        full_name: 'Умурзакова Дилором Хашимовна',
        avatar: 'avatar/avatar-4.png',
        region: 'Region',
        specialty: 'Specialty'
    }
]))

const sortedUsers = computed(() => {
    if (ratingBy.value === 'overall') return users.value
    return users.value.filter(user => (ratingBy.value in user))
})

</script>
