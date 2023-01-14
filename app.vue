<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from "~~/store/auth";

const { $toast } = useNuxtApp();
const route = useRoute();
const code = route.query.code;
onMounted(async () => {
  if (!code) return;
  const { token, user } = await fetch(
    `https://api.umaestro.fr/auth/user/code?code=${code}`
  ).then((res) => res.json());

  if (!token) return;
  console.log(token.token);
  useAuthStore().login(user, token.token);
});
</script>
