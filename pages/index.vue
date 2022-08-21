<template>
    <div>
        <header class="relative pt-32 lg:py-56 before:content-[''] before:bg-primary-500 before:-z-1 before:w-full before:h-full before:transform before:skew-y-3 before:absolute before:-top-16">
            <div class="container mx-auto lg:flex justify-between px-4">
                <div>
                    <h1 class="font-bold text-5xl max-w-md leading-snug text-white"><span class="font-extrabold">Le</span> site utile pour <span class="font-extrabold">tous</span></h1>
                    <h2 class="leading-snug text-3xl max-w-lg text-white mt-4">
                        Affine tes projets et améliore les à l'aide des outils que l'on met à ta disposition !
                    </h2>
                    <NuxtLink href="#tools">
                        <Button 
                            class="mt-8"
                            text="Voir les outils
                            que l'on propose"
                        >
                            <template v-slot:icon_left>
                                <CubeIcon class="mr-3 w-10 h-10" />
                            </template>
                        </Button>
                    </NuxtLink>
                </div>
                <div class="relative w-3/4 mx-auto lg:mx-0 lg:w-1/2 lg:translate-y-24">
                    <div class="w-full bottom-0 transform translate-y-56 lg:absolute lg:translate-y-96">
                        <img src="/characters/red_pink_group.png" alt="Red and pink group characters" class="w-full -translate-y-16" />
                        <div class="bg-white dark:bg-dark-800 px-12 py-12 rounded-3xl shadow-xl w-full -translate-y-64 flex flex-wrap gap-y-12 justify-between">
                            <Stat icon="UserIcon" name="Utilisateurs" :value="members" />
                            <Stat icon="CubeIcon" name="Outils" :value="2" />
                            <Stat icon="LinkIcon" name="Partenaires" :value="2" />
                            <Stat icon="ChartPieIcon" name="Utilisations" :value="tools" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="container mx-auto px-4 py-24 grid lg:grid-cols-2">
            <div>
                <div class="font-semibold text-2xl leading-relaxed max-w-sm">Qu'est-ce qu'on fait sur UMaestro?</div>
                <FeaturesList class="mt-8" />
            </div>
            <img src="/objects/tools.png" alt="Objects 3D" class="w-2/3 mx-auto mt-8 lg:mt-0" />
        </section>
        <section class="container mx-auto px-4 py-16" id="tools">
            <div class="font-semibold text-2xl leading-relaxed max-w-sm text-center mx-auto">On propose déjà des outils dans ces catégories</div>
            <div class="flex flex-wrap justify-center gap-6 mt-8 max-w-5xl mx-auto">
                <ToolsCategoryCard v-for="(category, index) of activeCategories" :key="index" :category="category" />
            </div>
            <div class="font-medium text-sm text-center mx-auto mt-8">Et bientôt dans d'autres...</div>
            <div class="flex flex-wrap justify-center gap-6 mt-4 max-w-5xl mx-auto">
                <ToolsCategoryCard v-for="(category, index) of disabledCategories" :key="index" :category="category" />
            </div>
        </section>
        <section class="bg-gradient-to-t from-primary-500 to-primary-500 pt-16 relative mt-20 overflow-x-hidden">
            <div class="container mx-auto px-4 text-white">
                <div class="grid lg:grid-cols-2 gap-16">
                    <div class="py-16">
                        <div class="font-semibold text-3xl leading-relaxed max-w-sm">Nous recrutons</div>
                        <p class="text-xl leading-relaxed mt-4 text-gray-200">UMaestro est à la recherche de nouvelles têtes afin d’aider dans la conception des projets et garder les services proposés en ligne</p>
                        <NuxtLink to="hire">
                            <Button 
                                color="white"
                                class="mt-10"
                                icon="Cube"
                                text="Voir les postes disponibles"
                            />
                        </NuxtLink>
                    </div>
                    <img src="/characters/tchating_character.png" class="mx-auto lg:w-2/3" alt="Tchating 3D character web developer" />
                </div>
            </div>
            <div class="absolute top-0 flex overflow-x-hidden fill-background dark:fill-dark-900">
                <svg v-for="i in 7" :key="i" width="323" height="51" viewBox="0 0 221 35" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35L221 0H0V35Z" />
                </svg>
            </div>
            <div class="absolute bottom-0 flex -scale-x-100 -scale-y-100 overflow-x-hidden fill-background dark:fill-dark-900">
                <svg v-for="i in 7" :key="i" width="323" height="51" viewBox="0 0 221 35" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35L221 0H0V35Z" />
                </svg>
            </div>
        </section>
        <!-- <section class="bg-secondary-500 py-24 relative after:content-[''] after:absolute after:left-0 after:top-full after:bg-gradient-to-b after:from-secondary-500 after:to-transparent after:h-52 after:w-full after:-z-1">
            redesign le contenu de cette section car pas très beau mais faut que je réflechisse
        </section> -->
        <section class="container mx-auto px-4 py-16 mt-24">
            <div class="font-semibold text-2xl leading-relaxed max-w-xs text-center mx-auto">Ce que les gens disent de nous</div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-8 relative">
                <Testimonial v-for="(rate, id) in testimonials" :key="id" :rate="rate" />
                <div class="absolute w-full h-96 bg-gradient-to-t from-background dark:from-dark-900 via-background dark:via-dark-900 to-transparent bottom-0 translate-y-16 flex items-center">
                    <NuxtLink to="rates" class="mx-auto">
                        <Button color="white" class="mx-auto relative" text="Voir les avis">
                            <img src="/objects/star.png" class="absolute -left-12 -top-12 w-32 h-32 -z-1" />
                            <img src="/objects/star2.png" class="absolute right-0 -top-6 w-14 h-14 -z-1" />
                            <img src="/objects/star3.png" class="absolute -right-8 -bottom-10 w-20 h-20" />
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from '@/composables/Axios'
import { EyeIcon, CubeIcon, CodeIcon, PencilIcon } from '@heroicons/vue/outline/esm/index.js'

export default {
    components: { CubeIcon },
    async setup() {
        useHead({
            title: 'Accueil',
        })
        
        const requests = await useAsyncData('count', async () => {
            try {
                const { data } = await axios.get('statistics')
                const testimonials = await axios.get('testimonials?max=9')
                return {
                    members: data.members,
                    tools: data.tools,
                    testimonials: testimonials.data.testimonials,
                }
            } catch (e) {
                return {
                    members: 0,
                    tools: 0,
                    testimonials: [],
                }
            }
        })

        return { members: requests.data.value.members, tools: requests.data.value.tools, testimonials: requests.data.value.testimonials }
    },
    data: () => ({
        categories: [
            { color: '#0B0B0F', name: 'Général', icon: EyeIcon, disabled: true },
            { color: '#5865F2', name: 'Discord', icon: 'discord.svg' },
            { color: '#15B79A', name: 'Développement', icon: CodeIcon, disabled: true },
            { color: '#A970FF', name: 'Twitch', icon: CubeIcon, disabled: true },
            { color: '#EB3B5B', name: 'Graphisme', icon: PencilIcon, disabled: true },
        ]
    }),
    computed: {
        activeCategories() {
            return this.categories.filter(category => !category.disabled)
        },
        disabledCategories() {
            return this.categories.filter(category => category.disabled);
        },
    },

}
</script>