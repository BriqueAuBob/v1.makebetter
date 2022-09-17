<template>
  <div class="flex flex-col gap-8">
    <FeaturesItem
      v-for="(feature, index) of features"
      :key="index"
      :feature="feature"
    />
  </div>
</template>

<script>
import {
  CubeIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/vue/24/outline/esm/index.js";

export default {
  data() {
    return {
      features: [
        {
          color: "bg-green-500",
          icon: CubeIcon,
          name: "Outils",
          description:
            "Nous sommes fier de pouvoir vous offrir des outils vous facilitant la gestion de votre projet",
        },
        {
          color: "bg-primary-500",
          icon: HeartIcon,
          name: "Moyens",
          description:
            "Notre site développé par nos équipes vous donnes les moyens et connaissances nécessaires pour vous améliorer",
        },
        {
          color: "bg-red-500",
          icon: EyeIcon,
          name: "Visibilité",
          description:
            "En plus d'outils et de connaissances, nous vous mettons en avant dès que votre travail le mérite",
        },
      ],
    };
  },
};
</script>
