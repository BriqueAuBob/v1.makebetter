<template>
    <Switch
        v-model="modelValue"
        :class="modelValue ? 'bg-teal-500' : 'bg-red-500'"
        class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        :onChange="handleInput(modelValue)"
    >
        <span class="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            :class="modelValue ? 'translate-x-10' : 'translate-x-1'"
            class="absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
        />
    </Switch>
</template>

<script>
import { Switch } from "@headlessui/vue"

export default {
    components: { Switch },
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        handleInput (value) {
            this.$emit('change', value)
            this.$emit('update:modelValue', value)
        }
    }
}
</script>