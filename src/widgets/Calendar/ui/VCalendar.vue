<template>
    <div class="border border-neutral-300 rounded-xl overflow-hidden select-none min-w-[326px]">
        <table class="
            rounded-xl border-[1px] overflow-hidden
            w-full bg-white

            [&_th]:w-[calc(100%/7)]
            [&_th]:text-neutral-500

            [&_tr>*]:border
            [&_tr>*]:border-neutral-300
            [&_tr>*]:h-[clamp(52px,72px,72px)]
            [&_tr>*]:font-normal

            [&_td]:text-center
            [&_td]:text-500
        ">
            <thead>
                <tr>
                    <th v-for="(week_day, i) in thead" :key="i">{{ week_day }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(curr_date, i) in currentDate" :key="i">
                    <template v-for="date in curr_date" :key="date">
                        <td class="relative" :class="{
                            '!text-100 pointer-events-none': month != new Date(date?.DATE)?.format('Y-m'),
                            '!bg-neutral-300 !text-primary-600': currentDateValueOf === new Date(date?.DATE)?.valueOf(),
                        }">
                            {{ new Date(date?.DATE)?.getDate() }}
                            <div class="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-600"
                                v-if="events[new Date(date?.DATE)?.valueOf()]"></div>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineOptions, defineProps, PropType, watch, reactive, ref } from 'vue'

defineOptions({
    name: 'v-calendar'
})

const thead = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const date = new Date('2023-09-03') // new Date().format("Y-m-d")
const currentDate = reactive(ref([]))
const currentDateValueOf = date.valueOf()

const props = defineProps({
    month: {
        type: String,
        required: false,
        default: new Date('2023-09-03').format('Y-m')
    },
    events: {
        type: Object as PropType<Record<number, true>>,
        required: true
    }
})

function createCurrentDateRange () {
    currentDate.value = []
    const tempCurrentDate = new Date(new Date(props.month).format('Y-m'))

    let minusDays = tempCurrentDate.getDay()

    if (minusDays === 0) minusDays = 7
    tempCurrentDate.minus('date', minusDays)

    for (let i = 0; i < 6; i++) {
        const weekDates = []
        for (let i = 0; i < 7; i++) {
            const date = tempCurrentDate.plus('date', 1).format('Y-m-d')

            const tempObj = {
                date,
                DATE: new Date(date)
                // selected: this.between_dates[date] ?? null,
            }

            weekDates.push(tempObj)
        }
        currentDate.value.push(weekDates)
    }

    if (currentDate.value?.at(-1).every(date => (props.month !== new Date(date?.DATE)?.format('Y-m')))) {
        currentDate.value.pop()
    }
}

createCurrentDateRange()

watch(() => props.month, () => {
    createCurrentDateRange()
})

</script>

<style>
/* [@media(max-width:440px)] */
@media (max-width:440px) {
    tr>* {
        height: 52px !important;
    }
}
</style>
