<template>
  <NuxtLink to="/articles/slug">
    <Card class="p-6">
      <header>
        <img
          src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png"
          class="max-h-52 w-full rounded-xl object-cover"
          alt="Article Image"
        />
      </header>
      <main class="py-4">
        <div class="mb-2 text-xl font-semibold">Titre de l'article</div>
        <div class="text-md dark:text-gray-300">
          Bien que les appels et la mise à disposition de serveurs restent
          gratuits, nous avons la possibilité d’acheter Discord Nitro
        </div>
      </main>
      <footer>
        <span class="text-sm dark:text-gray-400">le 27/03/2022</span>
      </footer>
    </Card>
  </NuxtLink>
</template>
