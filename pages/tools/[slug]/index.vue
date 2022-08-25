<template>
    <div v-if="module">
        <Head>
            <Title>{{ $route.params.slug ? `Outils ${$route.params.slug?.charAt(0).toUpperCase() + $route.params.slug?.slice(1)}` : 'Accueil' }}</Title>
        </Head>
        <ToolsHeader>
            <h1 class="font-extrabold text-4xl leading-[3.5rem] text-center max-w-lg mx-auto">Et oui, on propose des outils pour <span class="capitalize">{{ $route.params.slug }}</span> !</h1>
            <h2 class="text-2xl leading-relaxed mt-4 text-center max-w-lg mx-auto">Ici sont rassemblés nos outils qui intéragissent avec Discord ! 
Nos outils sortent au fil du temps et en fonction de votre attente.</h2>
            <Button 
                class="mt-8 mx-auto"
                text="Voir les outils
                que l'on propose"
                color="white"
                :small="true"
            >
                <template v-slot:icon_left>
                    <CubeIcon class="mr-3 w-10 h-10" />
                </template>
            </Button>
        </ToolsHeader>
        <section class="relative bg-white dark:bg-dark-900 py-12 shadow-sm dark:shadow-lg">
            <div class="absolute bg-white dark:bg-dark-800 p-12 rounded-3xl shadow-2xl left-1/2 -translate-x-1/2 top-4 -translate-y-2/3 flex gap-4 lg:gap-12 font-extrabold text-5xl dark:text-white text-black items-center w-fit z-10">
                <img class="w-20 h-20" src="/logo.svg" />
                +
                <img v-if="typeof module.icon === 'string'" :src="`/icons/${module.icon}`" class="w-20 h-20" />
                <component v-else :is="module.icon" class="w-20 h-20" />
            </div>
            <Slider direction="horizontal" duration="60s">
                <div class="flex">
                    <div v-for="i in 3" :key="i" class="flex">
                        <div v-for="(tool, i) in tools" :key="i" class="bg-gray-200 dark:bg-dark-800 text-gray-500 dark:text-gray-400 px-6 py-4 rounded-3xl font-semibold text-lg mr-6">
                            {{ getToolName(tool) }}
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
        <section class="container mx-auto py-24 px-4">
            <div class="font-bold text-xl text-center">Nos outils</div>
            <div class="text-lg text-center mt-4">Dédiés à <span class="capitalize">{{ $route.params.slug }}</span></div>
            <ClientOnly>
                <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8" id="__grid__cards">
                    <div v-for="(tool, index) of moduleTools" :key="index">
                        <NuxtLink :to="`/tools/${$route.params.slug}/${getModuleName(index).toLowerCase()}`">
                            <component :is="{...getModuleCard(index)}" />
                        </NuxtLink>
                    </div>
                </div>
            </ClientOnly>
            <div class="text-lg text-center mt-12 max-w-md mx-auto">Les outils, que tu pourras retrouver ailleurs, qui te seront utiles pour <span class="capitalize">{{ $route.params.slug }}</span></div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                <div class="col-span-3 mt-4">
                    <Empty text="Nous n'avons pas trouvé d'outils supplémentaires..." />
                </div>
                <!-- <ToolsCardsEmbed />
                <ToolsCardsEmbed /> -->
            </div>
        </section>
        <section class="bg-blurple py-24 text-white mt-8 container mx-auto rounded-2xl shadow-lg mb-24">
            <div class="font-bold text-3xl text-center">Tu n'as pas trouvé ton bonheur?</div>
            <div class="text-xl text-center mt-4 leading-relaxed max-w-lg mx-auto">Nous acceptons toutes idées de nouvels outils, qu’ils soient liés à <span class="capitalize">{{ $route.params.slug }}</span> ou pas alors n’hésites pas à nous faire part de ta suggestion !</div>
            <SuggestionButton 
                color="white"
                class="mt-8"
                text="Faire une suggestion"
            />
        </section>
    </div>
</template>

<script>
import { CubeIcon } from "@heroicons/vue/outline/esm/index.js"
import { useModule, allCards, tools } from "~~/composables/Module"

export default {
    components: { CubeIcon },
    data: () => ({
        cards: allCards,
        moduleTools: []
    }),
    created() {
        this.module = useModule(this.$route.params.slug);
        if(!this.module) {
            this.$router.replace('/tools/404');
        }
        this.moduleTools = this.$router.getRoutes().filter(route => route.path.startsWith(`/tools/${this.$route.params.slug}/`)).map((route) => route.name);
    },
    computed: {
        tools() {
            return this.moduleTools.sort((a, b) => {
                return tools[this.getModuleName(a)].localeCompare(tools[this.getModuleName(b)])
            });
        }
    },
    methods: {
        getModuleName(index) {
            const name = /[^-]*$/.exec(typeof index === 'number' ? this.moduleTools[index] : index)[0];
            return name.charAt(0).toUpperCase() + name.slice(1)
        },
        getToolName(index) {
            return tools[this.getModuleName(index)];
        },
        getModuleCard(index) {
            return this.cards[this.getModuleName(index).toLowerCase()]
        }
    }
}
</script>