<template>
  <Switch
    v-model="modelValue"
    :class="modelValue ? 'bg-teal-500' : 'bg-red-500'"
    class="relative inline-flex h-[38px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    :onChange="handleInput(modelValue)"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="modelValue ? 'translate-x-10' : 'translate-x-1'"
      class="pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
    />
  </Switch>
</template>

<script>
import { Switch } from "@headlessui/vue";

export default {
  components: { Switch },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(value) {
      this.$emit("change", value);
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
