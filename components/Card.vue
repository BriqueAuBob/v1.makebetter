<template>
  <div
    class="h-full cursor-pointer rounded-3xl shadow-lg duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl"
    :class="color && 'bg-white dark:bg-dark-900 hover:dark:bg-dark-800'"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
