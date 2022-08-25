<template>
    <nav class="absolute top-0 w-full z-10">
        <div class="container mx-auto flex items-center justify-between py-6 text-white px-4">
            <div class="flex basis-0 grow">
                <NuxtLink to="/" class="flex gap-4 items-center font-bold tracking-widest">
                    <img class="h-10" src="/logo.svg" />
                    umaestro.fr
                </NuxtLink>
            </div>
            <ul class="gap-12 items-center hidden lg:flex">
                <NuxtLink v-for="(link, index) of navigation" :key="index" :to="{ path: link.href, hash: link.hash }" class="text-gray-400">
                    <li class="ease-in duration-300 hover:text-white">
                        {{ link.name }}
                    </li>
                </NuxtLink>
            </ul>
            <div class="gap-6 items-center hidden lg:flex basis-0 grow justify-end"> 
                <span class="cursor-pointer" @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" :small="true">
                    <MoonIcon v-if="$colorMode.value === 'light'" class="w-8 h-8" />
                    <SunIcon v-else class="w-8 h-8" />
                </span>
                <NuxtLink to="/authentification" v-if="!authenticated">
                    <Button class="bg-white bg-opacity-75 hover:bg-opacity-100 hover:bg-white text-black" icon="user" :text="'Accéder à mon compte'" :small="true" />
                </NuxtLink>
                <div v-else class="flex rounded-xl border-2 border-white px-3 py-2 ease-in-out duration-300 text-white hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                    <NuxtLink activeClass="profile" to="/account" class="flex items-center font-medium text-md gap-2">
                        <img :src="user?.avatar" class="w-6 h-6 rounded-full" />
                        {{ user?.username }}
                    </NuxtLink>
                </div>
            </div>
            <!-- Mobile menu -->
            <button class="lg:hidden px-4 py-2" @click="toggleMobileMenu">
                <img src="/icons/bars.svg" class="w-8 h-8" />
            </button>
            <div ref="menu" :class="[!menuOpen && '-z-1 opacity-0', 'ease-in duration-300 absolute top-0 left-0 w-full h-screen p-8 flex flex-col']">
                <div class="flex justify-between">
                    <NuxtLink to="/authentification" v-if="!authenticated" @click="toggleMobileMenu">
                        <Button class="bg-white hover:bg-white text-black" icon="user" :text="'Accéder à mon compte'" :small="true" />
                    </NuxtLink>
                    <NuxtLink v-else to="/account" class="flex items-center font-medium text-xl gap-2 px-3 py-2 border-2 border-dark-700 rounded-xl">
                        <img :src="user?.avatar" class="w-8 h-8 rounded-full" />
                        {{ user?.username }}
                    </NuxtLink>
                    <button class="rounded-full border-2 border-dark-700 dark:border-dark-700 p-4 focus:bg-dark-700 focus:text-white flex items-center justify-center group" @click="toggleMobileMenu">
                        <svg class="fill-black dark:fill-dark-700 group-focus:fill-white w-5 h-5" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"/>
                        </svg>
                    </button>
                </div>
                <div class="w-2/3 self-end mt-8">
                    <ul>
                        <NuxtLink v-for="(link, index) of navigation" :key="index" :to="{ path: link.href, hash: link.hash }" class="text-gray-400 dark:text-gray-500" @click="toggleMobileMenu">
                            <li class="text-xl font-medium py-4 ease-in duration-300 hover:text-gray-900 dark:hover:text-dark-100">
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
import axios from '@/composables/Axios'
import { MoonIcon, SunIcon } from '@heroicons/vue/outline/esm/index.js'
import { useAuthStore } from '@/store/auth';

export default {
    components: {
        MoonIcon,
        SunIcon
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
                name: 'Partenaires',
                href: '/partners'
            },
            {
                name: 'Recrutements',
                href: '/hire'
            },
            {
                name: 'Outils',
                href: '/',
                hash: '#tools'
            },
        ],
        authenticated: false,
        user: {}
    }),
    async mounted() {
        const content = document.getElementById('content')
        content.classList.add('ease-in', 'duration-300')
        // content.style.maxHeight = '100vh'
        content.style.marginTop = '0vh'

        const nuxt = document.getElementById('__nuxt')
        // nuxt.classList.add('overflow-x-hidden')
        nuxt.appendChild(this.$refs.menu)

        const store = useAuthStore()
        this.authenticated = store.hasToken()
        this.user = await store.getUser
    },
    methods: {
        toggleMobileMenu() {
            document.body.classList.toggle('overflow-hidden')
            const content = document.getElementById('content')
            content.classList.toggle('-translate-x-3/4')
            content.classList.toggle('rounded-3xl')
            content.style.maxHeight = content.style.maxHeight === this.height + 'vh' ? '100vh' : this.height + 'vh'
            content.style.marginTop = content.style.marginTop === (100 - this.height) / 2 + 'vh' ? '0vh' : (100 - this.height) / 2 + 'vh';
            content.classList.add('overflow-hidden')
            this.menuOpen = !this.menuOpen

            if(!this.menuOpen) {
                setTimeout(() => {
                    content.classList.remove('overflow-hidden')
                }, 300)
            }
        },
        $t() {
            return 'navigation';
        }
    }
}
</script>

<style scoped>
.router-link-active {
    color: white;
}
</style>