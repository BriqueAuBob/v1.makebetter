<template>
    <div id="content" class="relative">
        <div class="bg-secondary-500 text-black font-semibold text-lg text-center w-full ease-in duration-300 overflow-hidden cursor-pointer" :class="!banner && 'opacity-0 -translate-y-24 absolute'" ref="banner" @click="removeBanner">
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
import AOS from 'aos'

export default {
    data() {
        return {
            banner: false,
        }
    },
    methods: {
        removeBanner() {
            this.banner = false;
        },
    },
    mounted() {
        AOS.init({ 
            once : true,
        });
    }
}
</script>