<template>
  <div>
    <header
      class="relative bg-gradient-to-b from-red-500 to-red-700 pt-48 pb-48 text-white"
    >
      <h1
        class="mx-auto max-w-xl text-center text-4xl font-extrabold leading-[3.5rem]"
      >
        Désolé, nous ne proposons pas d’outils pour cette plateforme pour le
        moment
      </h1>
      <h2 class="mx-auto mt-4 max-w-2xl text-center text-2xl leading-relaxed">
        Tu peux faire une suggestion pour nous faire part de tes idées. Il se
        peut que nous serions enchantés de travailler sur l’ajout d’outils
        concernant "<span class="capitalize">{{ moduleName }}</span
        >" !
      </h2>
      <SuggestionButton class="mt-4" />
    </header>
  </div>
</template>

<script>
import { LightBulbIcon } from "@heroicons/vue/24/outline/esm/index.js";

export default {
  components: { LightBulbIcon },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.moduleName = from.params.slug || vm.moduleName;
    });
  },
  data: () => ({
    moduleName: "inconnu",
  }),
};
</script>
