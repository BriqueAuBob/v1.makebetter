// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/analytics.ts", mode: "client" }],

  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@tailvue/nuxt",
    // '@intlify/nuxt3'
  ],

  build: {
    transpile: ["@headlessui/vue"],
  },

  app: {
    head: {
      titleTemplate: "UMaestro - %s",
      bodyAttrs: {
        class:
          "bg-background dark:bg-dark-950 dark:text-white transition ease-in duration-100",
      },
      link: [
        // { rel: 'stylesheet', href: 'https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/default.min.css' }
      ],
    },
  },

  css: ["@/assets/css/style.css", "aos/dist/aos.css"],

  meta: {
    meta: [
      {
        property: "og:title",
        content: "UMaestro - Créer ton meilleur projet avec nous !",
      },
      { property: "og:type", content: "product" },
      {
        property: "og:description",
        content:
          "Site regroupant une multitude d'outils dans de multiples domaines différents.",
      },
      {
        property: "twitter:title",
        content: "UMaestro - Créer ton meilleur projet avec nous !",
      },
      {
        property: "twitter:description",
        content:
          "Site regroupant une multitude d'outils dans de multiples domaines différents.",
      },
      {
        property: "og:title",
        content: "UMaestro - Créer ton meilleur projet avec nous !",
      },
      {
        property: "description",
        content:
          "Site regroupant une multitude d'outils dans de multiples domaines différents.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://umaestro.fr/thumbnail.png",
      },
      {
        property: "twitter:image",
        content: "https://umaestro.fr/thumbnail.png",
      },
      {
        property: "theme-color",
        content: "#004be0",
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "color_theme",
  },

  // pageTransition: {
  //     name: 'page',
  //     mode: 'out-in'
  // },

  // intlify: {
  //     vueI18n: {
  //         locale: 'fr',
  //         fallbackLocale: 'fr',
  //         /*@ts-ignore*/
  //         localeDir: 'locales'
  //     }
  // },
});
