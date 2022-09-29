<template>
  <div v-if="module">
    <Head>
      <Title>{{
        $route.params.slug
          ? `Outils ${
              $route.params.slug?.charAt(0).toUpperCase() +
              $route.params.slug?.slice(1)
            }`
          : "Accueil"
      }}</Title>
    </Head>
    <ToolsHeader>
      <h1
        class="mx-auto max-w-lg text-center text-4xl font-extrabold leading-[3.5rem]"
      >
        Et oui, on propose des outils pour
        <span class="capitalize">{{ $route.params.slug }}</span> !
      </h1>
      <h2 class="mx-auto mt-4 max-w-xl text-center text-2xl leading-relaxed">
        Ici sont rassemblés nos outils qui intéragissent avec Discord ! Nos
        outils sortent au fil du temps et en fonction de votre attente.
      </h2>
      <NuxtLink to="#tools">
        <Button
          class="mx-auto mt-8"
          text="Voir les outils<br/>que l'on propose"
          color="white"
          :small="true"
        >
          <template v-slot:icon_left>
            <CubeIcon class="mr-3 h-10 w-10" />
          </template>
        </Button>
      </NuxtLink>
    </ToolsHeader>
    <section
      class="relative bg-white py-12 shadow-sm dark:bg-dark-900 dark:shadow-lg"
    >
      <div
        class="absolute left-1/2 top-4 z-10 flex w-fit -translate-x-1/2 -translate-y-2/3 items-center gap-4 rounded-3xl bg-white p-12 text-5xl font-extrabold text-black shadow-2xl dark:bg-dark-800 dark:text-white lg:gap-12"
      >
        <img class="h-20 w-20" src="/logo.svg" />
        +
        <img
          v-if="typeof module.icon === 'string'"
          :src="`/icons/${module.icon}`"
          class="h-20 w-20"
        />
        <component v-else :is="module.icon" class="h-20 w-20" />
      </div>
      <Slider direction="horizontal" duration="60s">
        <div class="flex">
          <div v-for="i in 3" :key="i" class="flex">
            <div
              v-for="(tool, i) in tools"
              :key="i"
              class="mr-6 rounded-3xl bg-gray-200 px-6 py-4 text-lg font-semibold text-gray-500 dark:bg-dark-800 dark:text-gray-400"
            >
              {{ getToolName(tool) }}
            </div>
          </div>
        </div>
      </Slider>
    </section>
    <section id="tools" class="container mx-auto py-24 px-4">
      <div class="text-center text-xl font-bold">Nos outils</div>
      <div class="mt-4 text-center text-lg">
        Dédiés à <span class="capitalize">{{ $route.params.slug }}</span>
      </div>
      <ClientOnly>
        <div
          class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
          id="__grid__cards"
        >
          <div v-for="(tool, index) of moduleTools" :key="index">
            <NuxtLink
              :to="`/tools/${$route.params.slug}/${getModuleName(
                index
              ).toLowerCase()}`"
            >
              <component :is="{ ...getModuleCard(index) }" />
            </NuxtLink>
          </div>
        </div>
      </ClientOnly>
      <div class="mx-auto mt-12 max-w-md text-center text-lg">
        Les outils, que tu pourras retrouver ailleurs, qui te seront utiles pour
        <span class="capitalize">{{ $route.params.slug }}</span>
      </div>
      <div class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div class="col-span-3 mt-4">
          <Empty text="Nous n'avons pas trouvé d'outils supplémentaires..." />
        </div>
        <!-- <ToolsCardsEmbed />
                <ToolsCardsEmbed /> -->
      </div>
    </section>
    <section
      class="container mx-auto mt-8 mb-24 rounded-2xl bg-blurple py-24 text-white shadow-lg"
    >
      <div class="text-center text-3xl font-bold">
        Tu n'as pas trouvé ton bonheur?
      </div>
      <div class="mx-auto mt-4 max-w-lg text-center text-xl leading-relaxed">
        Nous acceptons toutes idées de nouvels outils, qu’ils soient liés à
        <span class="capitalize">{{ $route.params.slug }}</span> ou pas alors
        n’hésites pas à nous faire part de ta suggestion !
      </div>
      <SuggestionButton
        color="white"
        class="mt-8"
        text="Faire une suggestion"
      />
    </section>
  </div>
</template>

<script>
import { CubeIcon } from "@heroicons/vue/24/outline/esm/index.js";
import { useModule, allCards, tools } from "~~/composables/Module";

export default {
  components: { CubeIcon },
  data: () => ({
    cards: allCards,
    moduleTools: [],
  }),
  created() {
    this.module = useModule(this.$route.params.slug);
    if (!this.module) {
      this.$router.replace("/tools/404");
    }
    this.moduleTools = this.$router
      .getRoutes()
      .filter((route) =>
        route.path.startsWith(`/tools/${this.$route.params.slug}/`)
      )
      .map((route) => route.name);
  },
  computed: {
    tools() {
      return this.moduleTools.sort((a, b) => {
        return tools[this.getModuleName(a)].localeCompare(
          tools[this.getModuleName(b)]
        );
      });
    },
  },
  methods: {
    getModuleName(index) {
      const name = /[^-]*$/.exec(
        typeof index === "number" ? this.moduleTools[index] : index
      )[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    getToolName(index) {
      return tools[this.getModuleName(index)];
    },
    getModuleCard(index) {
      return this.cards[this.getModuleName(index).toLowerCase()];
    },
  },
};
</script>
