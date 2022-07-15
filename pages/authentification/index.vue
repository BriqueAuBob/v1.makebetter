<template>
    <div class="min-h-screen grid md:grid-cols-4 lg:grid-cols-5">
        <div class="col-span-3 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center gap-8 container mx-auto px-4 lg:px-16 max-w-xl py-48">
            <div class="w-full">
                <h1 class="font-semibold text-xl">Authentification</h1>
                <h2 class="font-medium text-md mt-1">Tu peux te connecter via différentes méthodes !</h2>
                <NuxtLink to="#" class="block font-medium text-primary-400 mt-3 underline blur-sm">Je n'ai pas encore de compte</NuxtLink>
            </div>
            <div class="w-full flex flex-col gap-6 blur-sm">
                <Input placeholder="Entrez votre email..." />
                <Input placeholder="Entrez votre mot de passe..." />
                <Button class="w-full" :disabled="true" :centerText="true" text="Connexion" />
            </div>
            <div class="w-full">
                <div class="relative flex items-center">
                    <div class="flex-grow border-t border-dark-700"></div>
                    <span class="flex-shrink mx-4 text-dark-700">or</span>
                    <div class="flex-grow border-t border-dark-700"></div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-4">
                <Button color="transparent" class="w-full border-2 border-dark-700 dark:text-white hover:border-dark-600" :centerText="true" text="Connexion via Discord" @click="login">
                    <template v-slot:icon_left>
                        <img src="/icons/discord.svg" alt="Discord" class="h-6 w-6 mr-4" />
                    </template>
                </Button>                
                <Button color="transparent" class="w-full border-2 border-dark-700 dark:text-white hover:border-dark-600 blur-sm" :centerText="true" text="Connexion via Google">
                    <template v-slot:icon_left>
                        <!-- <img src="/icons/discord.svg" alt="Discord" class="h-6 w-6 mr-4" /> -->
                    </template>
                </Button>
            </div>
        </div>
        <div class="bg-primary-500 lg:col-span-3 relative">
            <img src="/characters/red_pink_group.png" class="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4" alt="Group characters" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
definePageMeta({
    layout: 'footer'
})

export default {
    methods: {
        async login() {
            const { data } = await axios.get('http://localhost:3333/auth/oauth2/discord')
            window.location.href = data.redirect
        }
    }
}
</script>