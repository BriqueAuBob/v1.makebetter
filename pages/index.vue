<template>
  <div>
    <header
      class="relative bg-gradient-to-br from-primary-500 to-primary-800 py-48"
    >
      <div class="absolute left-0 bottom-0 hidden md:block">
        <img class="w-full" src="/shapes/squares.svg" />
      </div>
      <div class="absolute right-0 bottom-0">
        <img class="w-full -scale-x-100" src="/shapes/squares.svg" />
      </div>
      <div class="container mx-auto px-4">
        <h1
          class="mx-auto max-w-xl text-center text-5xl font-extrabold leading-snug text-white"
        >
          Développe ton projet à l’aide de nos outils
        </h1>
        <h2
          class="mx-auto mt-4 text-center text-2xl font-medium leading-relaxed text-white"
        >
          Ils te serviront pour n’importe quel type de projet
        </h2>
        <svg
          class="mx-auto mt-12 w-full rounded-full"
          height="6"
          viewBox="0 0 360 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H357"
            stroke="#F9F9F9"
            stroke-width="5"
            stroke-linecap="round"
            stroke-dasharray="32 24"
          />
        </svg>
        <h3 class="mx-auto mt-12 text-center font-medium text-white">
          Sélectionne la plateforme sur laquelle tu souhaites trouver un outil
        </h3>
        <div class="flex justify-center">
          <div class="relative mt-4 inline-flex justify-center gap-4">
            <NuxtLink to="#tools">
              <img
                @click="currentCategory = 'discord'"
                class="w-12 cursor-pointer"
                src="/icons/discord.svg"
              />
            </NuxtLink>
            <img class="absolute -left-20 top-4" src="/shapes/arrow_l.svg" />
            <img class="absolute -right-20 top-2" src="/shapes/arrow_r.svg" />
          </div>
        </div>
      </div>
    </header>
    <section
      id="tools"
      class="container mx-auto flex flex-col justify-center py-32"
    >
      <div class="text-center text-xl font-semibold">
        Les outils que l'on propose sur UMaestro
      </div>
      <div
        class="mx-auto mt-8 flex w-fit gap-2 rounded-full bg-white p-2 shadow-sm dark:bg-dark-900"
      >
        <div
          @click="currentCategory = null"
          :class="currentCategory === null && 'bg-primary-500 text-white'"
          class="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ease-in"
        >
          Tout les outils
        </div>
        <div
          @click="currentCategory = category"
          v-for="(category, index) of categories"
          :key="index"
          :class="currentCategory === category && 'bg-primary-500 text-white'"
          class="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold capitalize transition duration-200 ease-in dark:text-white"
        >
          {{ category }}
        </div>
      </div>
      <div
        class="mt-8 grid gap-8 px-4 md:px-16 lg:grid-cols-3 lg:px-24"
        id="__grid__cards"
      >
        <div
          v-for="(tool, index) in toolsGet
            .filter(
              (tool) => !currentCategory || tool.category === currentCategory
            )
            .slice(0, 3)"
          :key="index"
        >
          <NuxtLink
            :to="`/tools/${tool.category}/${tool.tool}`"
            data-aos="zoom-in"
            data-aos-offset="100"
          >
            <component :is="{ ...cards[tool.tool] }" :key="index" />
          </NuxtLink>
        </div>
      </div>
      <NuxtLink
        :to="currentCategory === null ? `/tools/` : `/tools/${currentCategory}`"
        class="mt-12"
      >
        <Button
          class="mx-auto"
          color="primary"
          :small="true"
          text="Voir les autres outils"
        />
      </NuxtLink>
    </section>
    <section class="flex flex-col justify-between bg-secondary-500 py-24">
      <div class="container mx-auto">
        <div
          class="text-center text-xl font-semibold text-dark-950"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          UMaestro, c'est
        </div>
        <div
          class="mt-16 grid grid-cols-2 gap-12 px-4 text-dark-950 md:px-16 lg:grid-cols-4 lg:px-48"
        >
          <Stat
            icon="UserIcon"
            name="Utilisateurs"
            :value="members || 0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
          />
          <Stat
            icon="LinkIcon"
            name="Partenaires"
            :value="2"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
          />
          <Stat
            icon="CubeIcon"
            name="Outils"
            :value="toolsGet.length"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="500"
          />
          <Stat
            icon="ChartPieIcon"
            name="Utilisations de nos outils"
            :value="toolsStat || 0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-32 pb-48">
      <div
        class="mx-auto mb-8 text-center text-xl font-semibold leading-relaxed"
      >
        Ce que les gens disent de nous
      </div>
      <div
        v-if="testimonials.length <= 0"
        class="mx-auto mb-16 text-center text-lg"
      >
        Il n'y a pas d'avis pour le moment... Poste le tiens !
      </div>
      <div class="relative mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Testimonial
          v-for="(rate, id) in testimonials"
          :key="id"
          :rate="rate"
          data-aos="fade-up"
          data-aos-offset="200"
          :data-aos-delay="200 + id * 100"
        />
        <div
          class="absolute w-full"
          :class="
            testimonials.length > 0 &&
            'bottom-0 flex h-96 translate-y-16 items-center bg-gradient-to-t from-background via-background to-transparent dark:from-dark-950 dark:via-dark-950'
          "
        >
          <NuxtLink to="rates" class="mx-auto">
            <Button
              color="theme"
              class="relative mx-auto px-16 py-4 text-yellow-500"
              text="Voir les avis"
            >
              <img
                src="/objects/star.png"
                class="absolute -left-12 -top-12 -z-1 h-32 w-32"
              />
              <img
                src="/objects/star2.png"
                class="absolute right-0 -top-6 -z-1 h-14 w-14"
              />
              <img
                src="/objects/star3.png"
                class="absolute -right-8 -bottom-10 h-20 w-20"
              />
            </Button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/composables/Axios";
import {
  EyeIcon,
  CubeIcon,
  CodeBracketIcon,
  PencilIcon,
} from "@heroicons/vue/24/outline/esm/index.js";
import { allCards } from "~~/composables/Module";

export default {
  components: { CubeIcon },
  async setup() {
    useHead({
      title: "Accueil",
    });

    const requests = await useAsyncData("count", async () => {
      try {
        const { data } = await axios.get("statistics");
        const testimonials = await axios.get("testimonials?max=9");
        return {
          members: data.members,
          tools: data.tools,
          testimonials: testimonials.data.testimonials,
        };
      } catch (e) {
        return {
          members: 0,
          tools: 0,
          testimonials: [],
        };
      }
    });

    return {
      members: requests.data.value.members,
      toolsStat: requests.data.value.tools,
      testimonials: requests.data.value.testimonials,
    };
  },
  data: () => ({
    currentCategory: null,
    categories: [],
    toolsGet: [],
    cards: allCards,
  }),
  mounted() {
    const routes = this.$router.options.routes
      .filter((route) => route.name.startsWith("tools-"))
      .map((route) => {
        const match = route.name.match(/tools-(.*)-(.*)/gm);
        if (match) {
          return match[0].split("-");
        }
      })
      .filter((route) => route !== null && route !== undefined);

    this.categories = routes
      .map((route) => route[1])
      .sort()
      .filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
      });
    this.toolsGet = routes.map((route) => ({
      category: route[1],
      tool: route[2],
    }));
  },
};
</script>
