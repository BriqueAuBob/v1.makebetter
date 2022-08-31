<template>
  <div
    class="relative transition duration-200 ease-in hover:-translate-y-4"
    id="card"
  >
    <img
      class="w-full rounded-3xl shadow-lg"
      :src="`/tools/${tool.uuid}_${$colorMode.value}.png`"
    />
    <div
      class="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-2 rounded-3xl bg-gradient-to-t from-dark-950 to-dark-400 p-8 opacity-80 backdrop-blur-md dark:to-dark-800"
    >
      <div class="text-2xl font-semibold text-white">{{ tool.name }}</div>
      <div class="text-lg text-white">{{ tool.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      default: {
        name: "Unknown",
        description: "No",
        uuid: "badges_discord",
      },
    },
  },
};
</script>
