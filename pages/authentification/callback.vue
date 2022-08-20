<template>
    <div class="bg-primary-500 text-white text-3xl h-screen text-center flex justify-center items-center font-bold">
        Chargement en cours...
    </div>
</template>

<script>
import axios from '@/composables/Axios'

definePageMeta({
    layout: 'empty'
})

export default {
    async mounted() {
        const route = this.$route;
        const code = route.query.code

        const { data } = await axios.get(`auth/oauth2/discord/callback?code=${code}`)
        localStorage.setItem('access_token', data.token.token)
        document.cookie = "access_token=Bearer " + data.token.token + "; expires=" + data.token.expires_at;

        localStorage.setItem('user_guilds', JSON.stringify(data.guilds))

        window.location = 'https://umaestro.fr'
    }
}
</script>