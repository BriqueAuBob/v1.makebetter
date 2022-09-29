<template>
  <div v-if="module">
    <Head>
      <Title>Nos outils</Title>
    </Head>
    <ToolsHeader color="#004BE0">
      <h1
        class="mx-auto max-w-lg text-center text-4xl font-extrabold leading-[3.5rem]"
      >
        Découvre la totalité de nos outils !
      </h1>
      <h2 class="mx-auto mt-4 max-w-lg text-center text-2xl leading-relaxed">
        Nos outils sortent au fil du temps et en fonction de votre attente.
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
    <section class="container mx-auto py-24 px-4" id="tools">
      <div class="text-center text-xl font-bold">Nos outils</div>
      <ClientOnly>
        <div
          class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
          id="__grid__cards"
        >
          <div v-for="(tool, index) of moduleTools" :key="index">
            <NuxtLink :to="tool.path">
              <component :is="{ ...getModuleCard(index) }" />
            </NuxtLink>
          </div>
        </div>
      </ClientOnly>
    </section>
    <section
      class="container mx-auto mt-8 mb-24 rounded-2xl bg-primary-500 py-24 text-white shadow-lg"
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
    this.module = {};
    this.moduleTools = this.$router
      .getRoutes()
      .filter((route) => route.path.match(/\/tools\/.+\/.+/gm));
  },
  computed: {
    tools() {
      return this.moduleTools.sort((a, b) => {
        return tools[this.getModuleName(a.path)]?.localeCompare(
          tools[this.getModuleName(b.path)]
        );
      });
    },
  },
  methods: {
    getModuleName(index) {
      const name = /[^-]*$/.exec(
        typeof index === "number" ? this.moduleTools[index].name : index
      )[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    getToolName(index) {
      return tools[this.getModuleName(index)];
    },
    getModuleCard(index) {
      console.log(this.getModuleName(index));
      return this.cards[this.getModuleName(index).toLowerCase()];
    },
  },
};
</script>
