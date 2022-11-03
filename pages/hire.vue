<template>
  <div>
    <header
      class="relative overflow-x-hidden bg-gradient-to-br from-primary-500 to-primary-800 text-white"
      ref="header"
    >
      <div class="container mx-auto px-4 pt-48 pb-48">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <h1 class="text-5xl font-extrabold">UMaestro recrute !</h1>
            <h2 class="mt-6 max-w-xl text-2xl leading-relaxed">
              On recrute des personnes compétentes dans divers domaines pour
              aider à la conception et la maintenance de nos différents projets
            </h2>
            <NuxtLink href="#postes">
              <Button class="mt-10" text="Voir les postes disponible" />
            </NuxtLink>
          </div>
          <div class="relative hidden md:block">
            <Slider
              direction="vertical"
              class="absolute -top-48 w-full"
              duration="60s"
              :style="`height: ${headerTall}`"
              v-if="randomColors"
            >
              <div>
                <div
                  v-for="(color, index) in randomColors"
                  :key="index"
                  class="my-12 flex shadow-xl"
                >
                  <aside :class="`${color} w-1/3 rounded-l-3xl p-8`">
                    <div
                      class="pt-full mx-auto h-24 w-24 rounded-full bg-gray-200"
                    ></div>
                    <div
                      class="pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-gray-200"
                    ></div>
                    <div
                      class="pt-full mt-2 h-4 w-1/3 rounded-sm bg-gray-200"
                    ></div>
                  </aside>
                  <ClientOnly>
                    <main class="w-2/3 rounded-r-3xl bg-white py-8 pl-4 pr-8">
                      <div
                        class="pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-dark-800"
                      ></div>
                      <div
                        class="pt-full mt-2 mb-2 h-4 w-1/3 rounded-sm bg-dark-700"
                      ></div>
                      <div
                        v-for="i in Math.max(2, Math.floor(Math.random() * 4))"
                        :key="i"
                        :class="[
                          'pt-full mt-2 h-2 rounded-sm bg-dark-600',
                          [
                            'w-1/3',
                            'w-1/4',
                            'w-full',
                            'w-1/2',
                            'w-3/4',
                            'w-2/3',
                          ][Math.floor(Math.random() * 6)],
                        ]"
                      ></div>
                      <div v-for="i in 4" :key="i">
                        <div
                          class="pt-full mt-8 h-4 w-1/3 rounded-sm bg-dark-700"
                        ></div>
                        <div
                          v-for="i in Math.max(
                            2,
                            Math.floor(Math.random() * 4)
                          )"
                          :key="i"
                          :class="[
                            'pt-full mt-2 h-2 rounded-sm bg-dark-600',
                            [
                              'w-1/3',
                              'w-1/4',
                              'w-full',
                              'w-1/2',
                              'w-3/4',
                              'w-2/3',
                            ][Math.floor(Math.random() * 6)],
                          ]"
                        ></div>
                      </div>
                    </main>
                  </ClientOnly>
                </div>
              </div>
            </Slider>
          </div>
          <div
            class="absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-primary-500 to-transparent"
          ></div>
          <div
            class="absolute left-0 bottom-0 h-52 w-full scale-x-150 bg-gradient-to-t from-primary-800 to-transparent"
          ></div>
        </div>
      </div>
    </header>
    <section class="container mx-auto mt-24 py-8 px-4">
      <h3 class="max-w-3xl text-3xl">
        <span class="font-bold">Nous recrutons</span> et il se peut que
        <span class="font-bold">ton profil</span> nous corresponde!
      </h3>
      <p class="mt-4 text-xl leading-relaxed">
        Nous voulons proposer à notre communauté des outils intéressants pour la
        conception de leurs communautés mais pour celà, nous avons besoin de
        personnes ayant différentes compétences.<br />C’est pourquoi, nous
        recrutons constamment des personnes dans différents domaines afin
        d’aider à maintenir UMaestro.
      </p>
    </section>
    <section class="container mx-auto py-8 px-4 pb-20" id="postes">
      <div v-for="(category, index) of categories" :key="index" class="mb-16">
        <div class="text-lg font-semibold">{{ category.title }}</div>
        <div class="mt-2">{{ category.subtitle }}</div>
        <div class="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            target="blank"
            to="https://docs.google.com/forms/d/e/1FAIpQLScCszcMFVbGvE5Y0bqNapkw1pcvm6fr7V_jvlVI48L87T81CA/viewform"
            v-for="(job, index) of category.jobs"
            :key="index"
          >
            <Card class="h-full" :hover="true">
              <div class="flex h-full flex-col justify-between">
                <div>
                  <div class="text-xl font-semibold">{{ job.name }}</div>
                  <div class="text-md mt-2">{{ job.description }}</div>
                  <div
                    v-if="job.requirement"
                    class="mt-2 text-sm italic text-gray-400"
                  >
                    {{ job.requirement }}
                  </div>
                </div>
                <span
                  class="mt-4 flex items-center gap-2 font-medium text-primary-500"
                  >Postuler
                  <img
                    src="/icons/double_chevron.svg"
                    class="h-5 w-5"
                    alt="Double chevron"
                /></span>
              </div>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Recrutements",
    });
  },
  data: () => ({
    headerTall: "0px",
    categories: [
      {
        title: "Tu as de l'expérience sur Discord?",
        subtitle: "Nous recrutons des personnes qui savent modérer...",
        jobs: [
          {
            name: "Modérateur",
            description:
              "Poste visant à réguler la communauté et à faire de UMaestro un espace sain tout en créant de l'activité.",
            requirement: "Expériences notables attendues",
          },
          {
            name: "Community Manager",
            description: "",
          },
          {
            name: "Animateur",
            description:
              "Créateur d'évènement visant à crée une activité sur le serveur afin de rassemblée la communauté de UMaestro à travers des évènements.",
          },
        ],
      },
      {
        title: "Tu as l’âme d’un artiste?",
        subtitle: "Nous recrutons des graphistes...",
        jobs: [
          {
            name: "UI Designer",
            description:
              "Créateur d'interface utilisateur pour les services de UMaestro.",
          },
          {
            name: "Illustrateur",
            description:
              "Créateur de logos, illustrations et images dans l'objectif d'embellir les informations et communiqués de UMaestro et Multid.",
          },
          {
            name: "Modélisateur 3D",
            description:
              "Créateur d'objet 3D pour les illustrations de UMaestro",
          },
        ],
      },
      {
        title: "Tu aimes développer des systèmes innovants?",
        subtitle: "Nous recrutons des développeurs...",
        jobs: [
          {
            name: "Développeur Back-End",
            description: "Développement de(s) API(s) de UMaestro",
            requirement: "Autonomie et grandes connaissances",
          },
          {
            name: "Développeur Front-End",
            description: "Développement de(s) application(s) web de UMaestro",
            requirement: "Autonomie et grandes connaissances",
          },
          {
            name: "Développeur Full-Stack",
            description:
              "Développement de(s) API(s) de UMaestro et le(s) application(s) web de UMaestro",
            requirement: "Autonomie et grandes connaissances",
          },
          {
            name: "Développeur Bot",
            description: "Développement des bots Discord UMaestro et Multid",
            requirement: "Autonomie et grandes connaissances",
          },
        ],
      },
    ],
    colors: [
      "bg-red-500",
      "bg-yellow-500",
      "bg-secondary-600",
      "bg-primary-700",
      "bg-green-500",
      "bg-stone-500",
    ],
  }),
  mounted() {
    this.recalculateSize();
    window.onresize = () => {
      this.recalculateSize();
    };
  },
  computed: {
    randomColors: function () {
      return this.colors.sort(() => Math.random() - 0.5) ?? [];
    },
  },
  methods: {
    recalculateSize() {
      setTimeout(() => {
        this.headerTall = this.$refs.header?.clientHeight + "px"; // May be a better way than a timeout to handle this change?
      }, 550);
    },
  },
};
</script>
