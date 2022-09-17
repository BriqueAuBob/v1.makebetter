<template>
  <nav class="absolute top-0 z-10 w-full">
    <div
      class="container mx-auto flex items-center justify-between py-6 px-4 text-white"
    >
      <div class="flex grow basis-0">
        <NuxtLink
          to="/"
          class="flex items-center gap-4 font-bold tracking-widest"
        >
          <img class="h-10" src="/logo.svg" />
          umaestro.fr
        </NuxtLink>
      </div>
      <ul class="hidden items-center gap-12 lg:flex">
        <NuxtLink
          v-for="(link, index) of navigation"
          :key="index"
          :to="{ path: link.href, hash: link.hash }"
          class="text-gray-400"
        >
          <li class="duration-300 ease-in hover:text-white">
            {{ link.name }}
          </li>
        </NuxtLink>
      </ul>
      <div class="hidden grow basis-0 items-center justify-end gap-6 lg:flex">
        <span
          class="cursor-pointer"
          @click="
            $colorMode.preference =
              $colorMode.value === 'dark' ? 'light' : 'dark'
          "
          :small="true"
        >
          <MoonIcon v-if="$colorMode.value === 'light'" class="h-8 w-8" />
          <SunIcon v-else class="h-8 w-8" />
        </span>
        <NuxtLink to="/authentification" v-if="!authenticated">
          <Button
            class="bg-white bg-opacity-75 text-black hover:bg-white hover:bg-opacity-100"
            icon="user"
            :text="'Accéder à mon compte'"
            :small="true"
          />
        </NuxtLink>
        <div
          v-else
          class="flex rounded-xl border-2 border-white px-3 py-2 text-white duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl"
        >
          <NuxtLink
            activeClass="profile"
            to="/account"
            class="text-md flex items-center gap-2 font-medium"
          >
            <img :src="user?.avatar" class="h-6 w-6 rounded-full" />
            {{ user?.username }}
          </NuxtLink>
        </div>
      </div>
      <!-- Mobile menu -->
      <button class="px-4 py-2 lg:hidden" @click="toggleMobileMenu">
        <img src="/icons/bars.svg" class="h-8 w-8" />
      </button>
      <div
        ref="menu"
        :class="[
          !menuOpen && '-z-1 opacity-0',
          'absolute top-0 left-0 flex h-screen w-full flex-col p-8 duration-300 ease-in',
        ]"
      >
        <div class="flex justify-between">
          <NuxtLink
            to="/authentification"
            v-if="!authenticated"
            @click="toggleMobileMenu"
          >
            <Button
              class="bg-white text-black hover:bg-white"
              icon="user"
              :text="'Accéder à mon compte'"
              :small="true"
            />
          </NuxtLink>
          <NuxtLink
            v-else
            to="/account"
            class="flex items-center gap-2 rounded-xl border-2 border-dark-700 px-3 py-2 text-xl font-medium"
            @click="toggleMobileMenu"
          >
            <img :src="user?.avatar" class="h-8 w-8 rounded-full" />
            {{ user?.username }}
          </NuxtLink>
          <button
            class="group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 focus:bg-dark-700 focus:text-white dark:border-dark-700"
            @click="toggleMobileMenu"
          >
            <svg
              class="h-5 w-5 fill-black group-focus:fill-white dark:fill-dark-700"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-8 w-2/3 self-end">
          <ul>
            <NuxtLink
              v-for="(link, index) of navigation"
              :key="index"
              :to="{ path: link.href, hash: link.hash }"
              class="text-gray-400 dark:text-gray-500"
              @click="toggleMobileMenu"
            >
              <li
                class="py-4 text-xl font-medium duration-300 ease-in hover:text-gray-900 dark:hover:text-dark-100"
              >
                {{ link.name }}
              </li>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "@/composables/Axios";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline/esm/index.js";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";

export default {
  components: {
    MoonIcon,
    SunIcon,
  },
  data: () => ({
    menuOpen: false,
    height: 70,
    navigation: [
      // {
      //     name: 'Articles',
      //     href: '/articles'
      // },
      {
        name: "Partenaires",
        href: "/partners",
      },
      {
        name: "Recrutements",
        href: "/hire",
      },
      {
        name: "Outils",
        href: "/",
        hash: "#tools",
      },
      {
        name: "Suggestions",
        href: "/suggestions",
      },
    ],
    authenticated: false,
    user: {},
  }),
  async mounted() {
    const content = document.getElementById("content");
    content.classList.add("ease-in", "duration-300");
    // content.style.maxHeight = '100vh'
    content.style.marginTop = "0vh";

    const nuxt = document.getElementById("__nuxt");
    // nuxt.classList.add('overflow-x-hidden')
    nuxt.appendChild(this.$refs.menu);

    useAuthStore().hasToken();
    await useAuthStore().getUser;

    const store = storeToRefs(useAuthStore());
    this.authenticated = store.isAuthenticated;
    this.user = store.user;
  },
  methods: {
    toggleMobileMenu() {
      document.body.classList.toggle("overflow-hidden");
      const content = document.getElementById("content");
      content.classList.toggle("-translate-x-3/4");
      content.classList.toggle("rounded-3xl");
      content.style.maxHeight =
        content.style.maxHeight === this.height + "vh"
          ? "100vh"
          : this.height + "vh";
      content.style.marginTop =
        content.style.marginTop === (100 - this.height) / 2 + "vh"
          ? "0vh"
          : (100 - this.height) / 2 + "vh";
      content.classList.add("overflow-hidden");
      this.menuOpen = !this.menuOpen;

      if (!this.menuOpen) {
        setTimeout(() => {
          content.classList.remove("overflow-hidden");
        }, 300);
      }
    },
    $t() {
      return "navigation";
    },
  },
};
</script>

<style scoped>
.router-link-active {
  color: white;
}
</style>
