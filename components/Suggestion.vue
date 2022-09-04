<template>
  <NuxtLink
    :to="`https://discord.com/channels/905842698626428928/1015968524923052083/${id}`"
    target="_blank"
  >
    <div
      class="flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition duration-200 ease-in hover:-translate-y-1 hover:bg-gray-100 dark:bg-dark-900 hover:dark:bg-dark-800"
    >
      <div>
        <div class="flex items-center gap-4 font-semibold">
          <img class="h-8 w-8 rounded-full" :src="suggestion.author.icon_url" />
          {{ suggestion.author.name.replace("Suggestion de ", "") }}
        </div>
        <p class="mt-4">{{ suggestion.description }}</p>
      </div>
      <div class="flex gap-2">
        <div
          v-for="(reaction, index) of reactions"
          :key="index"
          class="mt-4 flex gap-1 rounded-md bg-gray-200 bg-opacity-50 px-2 py-1 dark:bg-dark-800"
        >
          {{ reaction.emoji.name }}
          {{ reaction.count }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    suggestion: {
      type: Object,
      required: true,
    },
    reactions: {
      type: Array,
      required: false,
      default: [],
    },
  },
};
</script>
