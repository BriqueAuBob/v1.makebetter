<template>
  <div>
    <header class="border-b-8 border-primary-400 bg-primary-500 py-48">
      <h1 class="text-center text-5xl font-extrabold text-white">
        Nos articles
      </h1>
      <h2
        class="mx-auto mt-6 max-w-2xl text-center text-3xl leading-relaxed text-white"
      >
        On écrit régulièrement des articles pour mettre notre communauté au
        courant de certaines choses
      </h2>
      <div class="container mx-auto mt-12 mb-52 px-4 pb-96 lg:mb-0 lg:pb-32">
        <div class="relative">
          <div class="absolute grid w-full gap-8 lg:grid-cols-2">
            <ArticlesThumbnailsBig />
            <div class="flex flex-col gap-8">
              <ArticlesThumbnailsSmall />
              <ArticlesThumbnailsSmall />
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="container mx-auto px-4 pt-32 pb-4 lg:pt-48">
      <div class="text-2xl font-semibold leading-relaxed">
        Articles de Discord Décrypte
      </div>
      <p class="mt-3 max-w-2xl text-xl leading-relaxed">
        Ce sont les articles qui sortent tout les samedi et qui vous informent
        pas forcément sur quelque chose de lié à Maestro
      </p>
      <div class="mt-8 grid gap-8 lg:grid-cols-3">
        <ArticlesThumbnailsBig />
        <ArticlesThumbnailsBig />
        <ArticlesThumbnailsBig />
      </div>
      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <ArticlesThumbnailsSmall v-for="i in 4" :key="i" />
      </div>
      <Button class="mx-auto mt-12 bg-white" text="En voir d'avantage" />
    </section>
    <section class="relative pt-24 pb-48">
      <div
        class="absolute -z-1 h-[70rem] w-full bg-primary-500 md:h-[66rem] lg:h-[42rem]"
      ></div>
      <div class="container mx-auto py-12 px-4">
        <div class="text-2xl font-semibold leading-relaxed text-white">
          Informations relatives à UMaestro
        </div>
        <p class="mt-3 max-w-2xl text-xl leading-relaxed text-white">
          Ce sont les articles qui vous informent des nouveautés qui
          sortent/sortiront sur le site.
        </p>
        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <ArticlesThumbnailsBig />
          <div class="flex flex-col gap-8">
            <ArticlesThumbnailsSmall
              :superSmall="true"
              v-for="i in 3"
              :key="i"
            />
          </div>
        </div>
        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <ArticlesThumbnailsSmall v-for="i in 6" :key="i" />
        </div>
      </div>
      <Button class="mx-auto bg-white" text="En voir d'avantage" />
    </section>
  </div>
</template>
