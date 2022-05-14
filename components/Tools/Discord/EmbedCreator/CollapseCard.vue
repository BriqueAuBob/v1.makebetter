<template>
    <div class="px-6 py-4">
        <div class="flex justify-between items-center font-semibold">
            {{ name }}
            <div class="flex items-center gap-1">
                <button v-if="trash" @click="trash" class="p-2">
                    <TrashIcon class="w-6 h-6" />
                </button>
                <button @click="open = !open" class="p-2">
                    <ChevronDownIcon class="w-6 h-6 ease-in-out duration-300" :class="!open && '-rotate-180'" />
                </button>
            </div>
        </div>
        <div class="ease-in-out duration-300" :class="!open ? 'max-h-0 overflow-hidden' : 'mt-4 max-h-[300rem] mb-2'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { ChevronDownIcon, TrashIcon } from '@heroicons/vue/outline';

export default {
    components: { ChevronDownIcon, TrashIcon },
    data: () => ({
        open: false
    }),
    props: {
        name: {
            type: String,
        },
        trash: {
            type: Function
        }
    }
}
</script>