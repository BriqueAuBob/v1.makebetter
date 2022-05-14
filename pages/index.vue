<template>
    <div>
        <header class="relative pt-32 lg:py-56 before:content-[''] before:bg-primary-500 before:-z-1 before:w-full before:h-full before:transform before:skew-y-3 before:absolute before:-top-16">
            <div class="container mx-auto lg:flex justify-between px-4">
                <div>
                    <h1 class="font-extrabold text-5xl max-w-md leading-snug text-white">Lorem ipsum dolor sit amet</h1>
                    <h2 class="leading-snug text-3xl max-w-lg text-white mt-4">
                        Elit excepteur aliqua aute occaecat ullamco aliqua laborum aute duis incididunt.
                    </h2>
                    <Button 
                        class="mt-8"
                        text="Voir les outils
                        que l'on propose"
                    >
                        <template v-slot:icon_left>
                            <CubeIcon class="mr-3 w-10 h-10" />
                        </template>
                    </Button>
                </div>
                <div class="relative w-3/4 mx-auto lg:mx-0 lg:w-1/2 lg:translate-y-24">
                    <div class="w-full bottom-0 transform translate-y-56 lg:absolute lg:translate-y-96">
                        <img src="/characters/red_pink_group.png" alt="Red and pink group characters" class="w-full -translate-y-16" />
                        <div class="bg-white dark:bg-dark-800 px-12 py-12 rounded-3xl shadow-xl w-full -translate-y-64 flex flex-wrap gap-y-12 justify-between">
                            <Stat icon="UserIcon" name="Utilisateurs" />
                            <Stat icon="CubeIcon" name="Outils" />
                            <Stat icon="LinkIcon" name="Partenaires" />
                            <Stat icon="ChartPieIcon" name="Utilisations" />
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
                        <Button 
                            color="white"
                            class="mt-10"
                            icon="Cube"
                            text="Voir les postes disponibles"
                        />
                    </div>
                    <img src="/characters/tchating_character.png" class="mx-auto lg:w-2/3" alt="Tchating 3D character web developer" />
                </div>
            </div>
            <div class="absolute top-0 flex overflow-x-hidden fill-background dark:fill-dark-900">
                <svg v-for="i in 7" :key="i" width="323" height="51" viewBox="0 0 221 35" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35L221 0H0V35Z" />
                </svg>
            </div>
            <div class="absolute bottom-0 flex -scale-x-100 -scale-y-100 overflow-x-hidden fill-secondary-500">
                <svg v-for="i in 7" :key="i" width="323" height="51" viewBox="0 0 221 35" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35L221 0H0V35Z" fill="#57EDD1"/>
                </svg>
            </div>
        </section>
        <section class="bg-secondary-500 py-24 relative after:content-[''] after:absolute after:left-0 after:top-full after:bg-gradient-to-b after:from-secondary-500 after:to-transparent after:h-52 after:w-full after:-z-1">
            redesign le contenu de cette section car pas très beau mais faut que je réflechisse
        </section>
        <section class="container mx-auto px-4 py-16 mt-64">
            <div class="font-semibold text-2xl leading-relaxed max-w-xs text-center mx-auto">Ce que les gens disent de nous</div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-8 relative">
                <Testimonial v-for="i in 9" :key="i" :rate="rates[0]" />
                <div class="absolute w-full h-96 bg-gradient-to-t from-background dark:from-dark-900 via-background dark:via-dark-900 to-transparent bottom-0 translate-y-16 flex items-center">
                    <Button color="white" class="mx-auto relative" text="Voir plus d'avis">
                        <img src="/objects/star.png" class="absolute -left-12 -top-12 w-32 h-32 -z-1" />
                        <img src="/objects/star2.png" class="absolute right-0 -top-6 w-14 h-14 -z-1" />
                        <img src="/objects/star3.png" class="absolute -right-8 -bottom-10 w-20 h-20" />
                    </Button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { EyeIcon, CubeIcon, CodeIcon, PencilIcon } from '@heroicons/vue/outline'

export default {
    components: { CubeIcon },
    data: () => ({
        categories: [
            { color: '#0B0B0F', name: 'Général', icon: EyeIcon},
            { color: '#5865F2', name: 'Discord', icon: 'discord.svg' },
            { color: '#15B79A', name: 'Développement', icon: CodeIcon },
            { color: '#A970FF', name: 'Twitch', icon: CubeIcon, disabled: true },
            { color: '#EB3B5B', name: 'Graphisme', icon: PencilIcon, disabled: true },
        ],
        rates: [
            {
                avatar: 'https://cdn.discordapp.com/avatars/307531336388968458/2c8407ba4d3da729fe75a24b99e51bc2.png?size=4096',
                username: 'Brique au  bob',
                rate: 5,
                text: 'C\'est un site très sympa et très utile. Je recommande vivement !',
            }
        ]
    }),
    computed: {
        activeCategories() {
            return this.categories.filter(category => !category.disabled)
        },
        disabledCategories() {
            return this.categories.filter(category => category.disabled);
        },
    }
}
</script>