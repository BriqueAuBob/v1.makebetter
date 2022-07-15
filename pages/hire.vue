<template>
    <div>
        <header class="bg-primary-500 relative text-white" ref="header">
            <div class="container mx-auto px-4 pt-64 pb-72">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <h1 class="font-extrabold text-5xl">UMaestro recrute !</h1>
                        <h2 class="text-2xl leading-relaxed max-w-xl mt-6">On recrute des personnes compétentes dans divers domaines pour aider à la conception et la maintenance de nos différents projets</h2>
                        <Button class="mt-10" text="Voir les postes disponible" />
                    </div>
                    <div class="relative hidden md:block">
                        <img src="/characters/wave_character.png" alt="3D Wave Character" class="w-full absolute -left-52 -bottom-32 scale-150 hidden xl:block" />
                        <Slider direction="vertical" class="absolute -top-64 w-full" duration="60s" :style="`height: ${headerTall}`">
                            <div>
                                <div v-for="(color, index) in ['bg-red-500', 'bg-yellow-500', 'bg-secondary-600', 'bg-primary-700', 'bg-green-500', 'bg-stone-500'].sort((a, b) => 0.5 - Math.random())" :key="index" class="my-12 flex shadow-xl">
                                    <aside :class="`${color} p-8 w-1/3 rounded-l-3xl`">
                                        <div class="bg-gray-200 rounded-full w-24 h-24 mx-auto pt-full"></div>
                                        <div class="bg-gray-200 rounded-sm w-full h-4 mt-4 mx-auto pt-full"></div>
                                        <div class="bg-gray-200 rounded-sm w-1/3 h-4 mt-2 pt-full"></div>
                                    </aside>
                                    <ClientOnly>
                                        <main class="bg-white pl-4 pr-8 py-8 w-2/3 rounded-r-3xl">
                                            <div class="bg-dark-800 rounded-sm w-full h-4 mt-4 mx-auto pt-full"></div>
                                            <div class="bg-dark-700 rounded-sm w-1/3 h-4 mt-2 mb-2 pt-full"></div>
                                            <div 
                                                v-for="i in Math.max(2, Math.floor(Math.random() * 4))" 
                                                :key="i" 
                                                :class="['bg-dark-600 rounded-sm h-2 mt-2 pt-full', ['w-1/3', 'w-1/4', 'w-full', 'w-1/2', 'w-3/4', 'w-2/3'][Math.floor(Math.random() * 6)]]"
                                            ></div>
                                            <div v-for="i in 4" :key="i">
                                                <div class="bg-dark-700 rounded-sm w-1/3 h-4 mt-8 pt-full"></div>
                                                <div 
                                                    v-for="i in Math.max(2, Math.floor(Math.random() * 4))" 
                                                    :key="i" 
                                                    :class="['bg-dark-600 rounded-sm h-2 mt-2 pt-full', ['w-1/3', 'w-1/4', 'w-full', 'w-1/2', 'w-3/4', 'w-2/3'][Math.floor(Math.random() * 6)]]"
                                                ></div>
                                            </div>
                                        </main>
                                    </ClientOnly>
                                </div>
                            </div>
                        </Slider>
                        <div class="absolute left-0 -top-64 w-full h-52 from-primary-500 to-transparent bg-gradient-to-b"></div>
                        <div class="absolute left-0 scale-x-150 -bottom-64 w-full h-52 from-primary-500 to-transparent bg-gradient-to-t"></div>
                    </div>
                </div>
            </div>
            <svg class="absolute bottom-0 w-full fill-background dark:fill-dark-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 90H0V0C0 0 230.5 57.7305 486.5 57.7305C742.5 57.7305 1046 0 1204.5 0C1363 0 1440 74.6225 1440 74.6225V90Z"/>
            </svg>
        </header>
        <section class="mt-24 py-8 container mx-auto px-4">
            <h3 class="text-3xl max-w-3xl"><span class="font-bold">Nous recrutons</span> et il se peut que <span class="font-bold">ton profil</span> nous corresponde!</h3>
            <p class="text-xl leading-relaxed mt-4">
                Nous voulons proposer à notre communauté des outils intéressants pour la conception de leurs communautés mais pour celà, nous avons besoin de personnes ayant différentes compétences.<br/>C’est pourquoi, nous recrutons constamment des personnes dans différents domaines afin d’aider à maintenir UMaestro.</p>
        </section>
        <section class="py-8 container mx-auto px-4 pb-20">
            <div v-for="(category, index) of categories" :key="index" class="mb-16">
                <div class="font-semibold text-lg">{{ category.title }}</div>
                <div class="mt-2">{{ category.subtitle }}</div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    <NuxtLink target="blank" to="https://docs.google.com/forms/d/e/1FAIpQLScCszcMFVbGvE5Y0bqNapkw1pcvm6fr7V_jvlVI48L87T81CA/viewform" v-for="(job, index) of category.jobs" :key="index">
                        <Card class="before:bg-white before:dark:bg-dark-800">
                            <div class="p-8 flex flex-col justify-between">
                                <div>
                                    <div class="font-semibold text-xl">{{ job.name }}</div>
                                    <!-- <div class="mt-2 text-lg">{{ job.description }}</div> -->
                                </div>
                                <span class="flex items-center gap-2 font-medium text-blurple mt-4">Postuler <img src="/icons/double_chevron.svg" class="w-5 h-5" alt="Double chevron" /></span>
                            </div>
                        </Card>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data: () => ({
        headerTall: "0px",
        categories: [
            {
                title: 'Tu as de l\'expérience sur Discord?',
                subtitle: 'Nous recrutons des personnes qui savent modérer...',
                jobs: [
                    {
                        name: 'Modérateur',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Community Manager',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Animateur',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                ] 
            },
            {
                title: 'Tu as l’âme d’un artiste?',
                subtitle: 'Nous recrutons des graphistes...',
                jobs: [
                    {
                        name: 'UI Designer',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Illustrateur',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Modélisateur 3D',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                ] 
            },
            {
                title: 'Tu aimes développer des systèmes innovants?',
                subtitle: 'Nous recrutons des développeurs...',
                jobs: [
                    {
                        name: 'Développeur Back-End',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Développeur Front-End',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Développeur Full-Stack',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                    {
                        name: 'Développeur Bot',
                        description: 'You will interact with senior executives at our partner organizations and be a trusted evangelist for Discord’s products and priorities.'
                    },
                ] 
            },
        ]
    }),
    mounted() {
        this.recalculateSize()
        window.onresize = () => {
            this.recalculateSize()
        }
    },
    methods: {
        recalculateSize() {
            setTimeout(() => {
                this.headerTall = this.$refs.header?.clientHeight + "px"; // May be a better way than a timeout to handle this change?
            }, 550)
        }
    }
}
</script>