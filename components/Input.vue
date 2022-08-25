<template>
    <div>
        <input 
            :placeholder="placeholder" 
            type="text" 
            :class="[big ? 'px-6 py-5 text-md' : 'px-6 py-4 text-sm', white ? 'bg-white text-black' : 'bg-transparent focus:bg-white dark:focus:bg-dark-900 border-dark-800 focus:border-primary-500', classes]" 
            class="text-sm w-full  border  focus:outline-none  rounded-lg"
            @input="handleInput"
            :value="modelValue"
            :disabled="disabled" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: '',
        },
        big: {
            type: Boolean,
            default: false,
        },
        white: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        classes: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('update:modelValue', e.target.value)
            this.$emit('change', e.target.value)
        }
    }
}
</script>