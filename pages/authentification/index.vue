<template>
  <div class="grid min-h-screen md:grid-cols-4 lg:grid-cols-5">
    <div
      class="container col-span-3 mx-auto flex max-w-xl flex-col items-center justify-center gap-8 px-4 py-48 md:col-span-3 lg:col-span-2 lg:px-16"
    >
      <div class="w-full">
        <h1 class="text-xl font-semibold">Authentification</h1>
        <h2 class="text-md mt-1 font-medium">
          Tu peux te connecter via différentes méthodes !
        </h2>
      </div>
      <div class="flex w-full flex-col gap-4">
        <Button
          color="transparent"
          class="w-full border-2 border-dark-700 hover:border-dark-600 dark:text-white"
          :centerText="true"
          text="Connexion via Discord"
          @click="login"
        >
          <template v-slot:icon_left>
            <img src="/icons/discord.svg" alt="Discord" class="mr-4 h-6 w-6" />
          </template>
        </Button>
        <Button
          color="transparent"
          class="w-full border-2 border-dark-700 blur-sm hover:border-dark-600 dark:text-white"
          :centerText="true"
          text="Connexion via Google"
        >
          <template v-slot:icon_left>
            <!-- <img src="/icons/discord.svg" alt="Discord" class="h-6 w-6 mr-4" /> -->
          </template>
        </Button>
      </div>
      <div class="w-full">
        <div class="relative flex items-center">
          <div class="flex-grow border-t border-dark-700"></div>
          <span class="mx-4 flex-shrink text-dark-700">or</span>
          <div class="flex-grow border-t border-dark-700"></div>
        </div>
      </div>
      <div class="flex w-full flex-col gap-6 blur-sm">
        <Input placeholder="Entrez votre email..." />
        <Input placeholder="Entrez votre mot de passe..." />
        <Button
          class="w-full"
          :disabled="true"
          :centerText="true"
          text="Connexion"
        />
        <div class="w-full">
          <NuxtLink
            to="#"
            class="mt-3 block font-medium text-primary-500 underline blur-sm"
            >Je n'ai pas encore de compte</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="relative bg-primary-500 lg:col-span-3">
      <img
        src="/characters/red_pink_group.png"
        class="absolute left-1/2 bottom-0 w-3/4 -translate-x-1/2"
        alt="Group characters"
      />
    </div>
  </div>
</template>

<script>
import axios from "@/composables/Axios";

definePageMeta({
  layout: "footer",
});

export default {
  setup() {
    useHead({
      title: "Authentification",
    });
  },
  methods: {
    async login() {
      const { data } = await axios.get("/auth/oauth2/discord");
      window.location.href = data.redirect;
    },
  },
};
</script>
