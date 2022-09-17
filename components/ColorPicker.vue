<template>
  <input
    class="mr-3 h-16 w-16 rounded-lg border-none bg-transparent p-0 outline-none"
    type="color"
    v-model="modelValue"
    @input="emit"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "#000000",
    },
  },
  methods: {
    emit(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 8px;
}
</style>
