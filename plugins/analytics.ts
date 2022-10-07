import VueGtagPlugin from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtagPlugin,
    {
      config: { id: "G-HJT5Z7RLL3" },
    },
    nuxtApp.$router
  );
});
