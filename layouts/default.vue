<template>
  <div id="content" class="relative">
    <a
      class="block w-full cursor-pointer overflow-hidden bg-primary-200 p-5 text-center text-lg font-semibold text-black shadow-lg duration-300 ease-in"
      :class="!banner && 'absolute -translate-y-24 opacity-0'"
      ref="banner"
      href="https://beta.makebetter.app"
      target="_blank"
    >
      🚀 La beta de la version 2 est disponible !
      <span class="underline">Rends toi dessus !</span>
    </a>
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
      banner: true,
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
