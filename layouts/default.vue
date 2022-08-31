<template>
  <div id="content" class="relative">
    <div
      class="w-full cursor-pointer overflow-hidden bg-secondary-500 text-center text-lg font-semibold text-black duration-300 ease-in"
      :class="!banner && 'absolute -translate-y-24 opacity-0'"
      ref="banner"
      @click="removeBanner"
    >
      <div class="container mx-auto p-4">
        Bienvenue sur notre nouveau site ! 👋🏼
      </div>
    </div>
    <NavigationNavbar :class="banner && 'mt-12'" />
    <slot />
    <NavigationFooter />
  </div>
</template>

<script>
import AOS from "aos";

export default {
  data() {
    return {
      banner: false,
    };
  },
  methods: {
    removeBanner() {
      this.banner = false;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
