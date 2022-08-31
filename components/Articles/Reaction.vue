<template>
  <div
    class="text-md text-medium flex items-center gap-2 rounded-full bg-gray-200 px-4 py-3 text-dark-900 dark:bg-dark-700 dark:text-white"
  >
    <img class="h-6 w-6 object-contain" :src="`/objects/${reaction}.png`" />
    54
  </div>
</template>

<script>
export default {
  props: {
    reaction: {
      type: String,
      default: "poop",
    },
  },
};
</script>
