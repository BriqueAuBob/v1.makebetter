<template>
  <div>
    <header class="pt-48 pb-24">
      <h1
        class="text-center text-5xl font-extrabold text-black dark:text-white"
      >
        Suggestions de nos utilisateurs
      </h1>
      <SuggestionButton class="mt-8" />
    </header>
    <div class="container mx-auto px-4 pt-24 pb-48 lg:px-8">
      <div class="grid grid-cols-2 gap-8">
        <Suggestion
          v-for="(suggestion, index) of suggestions"
          :suggestion="suggestion.embeds[0]"
          :reactions="suggestion.reactions"
          :id="suggestion.id"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "~~/composables/Axios";

export default {
  async setup() {
    useHead({
      title: "Suggestions",
    });

    const suggestions = await useAsyncData(async () => {
      try {
        const { data } = await axios.get("suggestions");
        return data.suggestions;
      } catch (e) {
        console.log(e);
        return [];
      }
    });

    return { suggestions: suggestions.data };
  },
};
</script>
