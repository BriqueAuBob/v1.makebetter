<template>
  <div>
    <textarea
      :placeholder="placeholder"
      type="text"
      :class="big ? 'text-md px-6 py-5' : 'px-6 py-4 text-sm'"
      class="w-full rounded-lg border border-dark-700 bg-transparent text-sm focus:border-primary-500 focus:bg-white focus:outline-none dark:focus:bg-dark-900"
      @input="handleInput"
      :value="modelValue"
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
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    },
  },
};
</script>
