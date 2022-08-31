<template>
  <NuxtLink to="/articles/slug">
    <Card class="flex gap-6 p-6">
      <img
        src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png"
        :class="[superSmall ? 'w-32' : 'w-1/3', 'rounded-xl object-cover']"
        alt="Article Image"
      />
      <div>
        <div class="mb-2 text-xl font-semibold">Titre de l'article</div>
        <div class="text-md dark:text-gray-300">
          Bien que les appels et la mise à disposition de serveurs restent
          gratuits, nous avons la possibilité d’acheter Discord Nitro
        </div>
        <span class="mt-4 block text-sm dark:text-gray-400">le 27/03/2022</span>
      </div>
    </Card>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    superSmall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
