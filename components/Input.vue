<template>
  <div>
    <input
      :placeholder="placeholder"
      type="text"
      :class="[
        big ? 'text-md px-6 py-5' : 'px-6 py-4 text-sm',
        white
          ? 'bg-white text-black'
          : 'border-dark-800 bg-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-900',
        classes,
      ]"
      class="w-full rounded-lg border text-sm focus:outline-none"
      @input="handleInput"
      :value="modelValue"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
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
      default: false,
    },
    classes: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    },
  },
};
</script>
