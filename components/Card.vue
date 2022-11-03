<template>
  <div
    class="rounded-lg shadow-lg"
    :class="[
      hover &&
        'cursor-pointer duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl',
      color && 'bg-white dark:bg-dark-900',
      hover && color && 'hover:dark:bg-dark-800',
      padding && 'p-8',
    ]"
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
    hover: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
