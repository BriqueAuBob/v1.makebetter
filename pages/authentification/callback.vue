<template>
  <div
    class="flex h-screen items-center justify-center bg-primary-500 text-center text-3xl font-bold text-white"
  >
    Chargement en cours...
  </div>
</template>

<script>
import axios from "@/composables/Axios";

definePageMeta({
  layout: "empty",
});

export default {
  async mounted() {
    const route = this.$route;
    const code = route.query.code;

    const { data } = await axios.get(
      `auth/oauth2/discord/callback?code=${code}`
    );
    localStorage.setItem("access_token", data.token.token);
    document.cookie =
      "access_token=Bearer " +
      data.token.token +
      "; expires=" +
      data.token.expires_at;

    localStorage.setItem("user_guilds", JSON.stringify(data.guilds));

    this.$toast.show({
      message: `Hey ${data.user.username}!`,
      timeout: 6,
      icon: false,
    });

    return navigateTo("/");
  },
};
</script>
