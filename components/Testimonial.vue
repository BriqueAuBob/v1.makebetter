<template>
  <div class="rounded-2xl bg-white p-8 shadow-sm dark:bg-dark-900">
    <div class="flex items-center gap-2 font-medium">
      <Avatar
        class="mr-2"
        :src="rate?.author?.avatar || '/default_avatar.svg'"
        :user="rate?.author"
      />
      {{ rate?.author?.username || "Utilisateur supprimé" }}
      <span>-</span>
      <div class="flex items-center gap-1">
        <Star
          class="w-6"
          :color="rate.star >= i ? '#BB900D' : '#9ca3af'"
          v-for="i in 5"
          :key="i"
        />
      </div>
    </div>
    <p class="mt-4 text-gray-700 dark:text-gray-300">{{ rate.message }}</p>
    <span class="mt-4 block text-sm text-gray-400"
      >le {{ new Date(rate.created_at).toLocaleDateString("fr-FR") }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    rate: {
      type: Object,
      required: true,
    },
  },
};
</script>
