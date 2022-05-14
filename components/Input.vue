<template>
    <div>
        <input 
            :placeholder="placeholder" 
            type="text" 
            :class="big ? 'px-6 py-5 text-md' : 'px-6 py-4 text-sm'" 
            class="text-sm w-full bg-transparent focus:bg-white dark:focus:bg-dark-800 border border-dark-800 focus:outline-none focus:border-primary-500 rounded-lg"
            @input="handleInput"
            :value="modelValue" />
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