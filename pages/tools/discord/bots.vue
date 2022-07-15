<template>
    <div>
        <!-- <header class="bg-blurple pt-48 lg:pb-48 relative text-white">
            <div class="container mx-auto px-4 grid lg:grid-cols-2">
                <div>
                    <h1 class="font-extrabold text-4xl max-w-lg">Liste de robots Discord</h1>
                    <h2 class="text-2xl leading-relaxed mt-4 max-w-lg">Présente ton robot ou trouve le robot qu'il te faut pour ton serveur Discord</h2>
                    <div class="flex gap-4 mt-12">
                        <Button 
                            color="white"
                            text="Présenter mon robot"
                            :small="true"
                        >
                            <template v-slot:icon_left>
                                <ChipIcon class="mr-3 w-8 h-8" />
                            </template>
                        </Button>
                        <Button 
                            color="transparent"
                            text="Voir d'autres 
                            outils Discord"
                            :small="true"
                        >
                            <template v-slot:icon_left>
                                <CubeIcon class="mr-3 w-8 h-8" />
                            </template>
                        </Button>
                    </div>
                </div>
                <img class="lg:absolute bottom-0 left-1/2 mt-24 lg:mt-0" src="/characters/robot_yellow.png" />
            </div>
            <div class="absolute top-full -translate-y-full max-w-full flex overflow-x-hidden">
                <svg class="fill-background dark:fill-dark-900 w-16" v-for="i in 30" :key="i" fill="currentColor" viewBox="0 0 36 22">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="m18 0 26 26H-8L18 0Z"/>
                </svg>
            </div>
            <div class="absolute top-full -translate-y-2/3 lg:-translate-y-3/4 left-1/2 -translate-x-1/2 container mx-auto px-4 text-black dark:text-white">
                <div class="bg-white dark:bg-dark-800 rounded-2xl shadow-xl flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x dark:divide-dark-700">
                    <input class="h-28 w-full lg:w-1/2 bg-transparent focus:outline-none px-8" placeholder="Rechercher un bot via ses informations textuelles..." />
                    <div class="flex gap-4 items-center px-8 py-8 w-full lg:w-auto">
                        <BookmarkIcon class="w-6 h-6" />
                        Tags
                        <ChevronDownIcon class="w-6 h-6" />
                    </div>
                    <div class="flex lg:gap-4 items-center justify-between px-8 py-8 w-full lg:w-auto">
                        Bots open source
                        <Switch
                            v-model="enabled"
                            :class="enabled ? 'bg-teal-500' : 'bg-red-500'"
                            class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                            <span class="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                :class="enabled ? 'translate-x-10' : 'translate-x-1'"
                                class="absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                            />
                        </Switch>
                    </div>
                    <div class="flex gap-4 items-center px-8 py-8 w-full lg:w-auto">
                        <SortDescendingIcon class="w-6 h-6" />
                        Trier par
                        <ChevronDownIcon class="w-6 h-6" />
                    </div>
                </div>
            </div>
        </header> -->
        <ToolsHeader>
            <h1 class="font-extrabold text-4xl max-w-lg mx-auto">Liste de robots Discord</h1>
            <h2 class="text-2xl leading-relaxed mt-4 max-w-lg mx-auto">Présente ton robot ou trouve le robot qu'il te faut pour ton serveur Discord</h2>
            <div class="flex gap-4 mt-12 justify-center">
                <Button 
                    color="white"
                    text="Présenter mon robot"
                    :small="true"
                >
                    <template v-slot:icon_left>
                        <ChipIcon class="mr-3 w-8 h-8" />
                    </template>
                </Button>
                <Button 
                    color="transparent"
                    text="Voir d'autres 
                    outils Discord"
                    :small="true"
                >
                    <template v-slot:icon_left>
                        <CubeIcon class="mr-3 w-8 h-8" />
                    </template>
                </Button>
            </div>
        </ToolsHeader>
        <div class="relative">
            <div class="absolute top-full -translate-y-2/3 lg:-translate-y-3/4 left-1/2 -translate-x-1/2 container mx-auto px-4 text-black dark:text-white z-10">
                <div class="bg-white dark:bg-dark-800 rounded-2xl shadow-xl flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x dark:divide-dark-700">
                    <input class="h-28 w-full lg:w-1/2 bg-transparent focus:outline-none px-8" placeholder="Rechercher un bot via ses informations textuelles..." />
                    <div class="flex gap-4 items-center px-8 py-8 w-full lg:w-auto">
                        <BookmarkIcon class="w-6 h-6" />
                        Tags
                        <ChevronDownIcon class="w-6 h-6" />
                    </div>
                    <div class="flex lg:gap-4 items-center justify-between px-8 py-8 w-full lg:w-auto">
                        Bots open source
                        <Switch
                            v-model="enabled"
                            :class="enabled ? 'bg-teal-500' : 'bg-red-500'"
                            class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                            <span class="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                :class="enabled ? 'translate-x-10' : 'translate-x-1'"
                                class="absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                            />
                        </Switch>
                    </div>
                    <div class="flex gap-4 items-center px-8 py-8 w-full lg:w-auto">
                        <SortDescendingIcon class="w-6 h-6" />
                        Trier par
                        <ChevronDownIcon class="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
        <section class="container mx-auto pt-48 lg:pt-24 pb-24 grid lg:grid-cols-3 gap-8 px-4">
            <BotsCard v-for="i in 9" :key="i" />
        </section>
        <section class="bg-blurple text-white mt-12">
            <div class="container mx-auto grid lg:grid-cols-2 relative px-4">
                <div class="py-24">
                    <div class="font-bold text-3xl">Présente nous ton bot!</div>
                    <div class="text-xl mt-4 leading-relaxed max-w-lg">Que ce soit un bot de modération, d’anti-raid ou un bot fun, il sera le bienvenue sur notre plateforme alors présente le nous !</div>
                    <Button 
                        color="white"
                        class="mt-8"
                        text="Présenter mon robot"
                        :small="true"
                    >
                        <template v-slot:icon_left>
                            <ChipIcon class="mr-3 w-8 h-8" />
                        </template>
                    </Button>
                </div>
                <img class="absolute w-1/3 bottom-0 left-1/2" src="/characters/robot_blue.png" />
            </div>
        </section>
    </div>
</template>

<script>
import { Switch } from '@headlessui/vue'
import { BookmarkIcon, SortDescendingIcon, ChevronDownIcon, CubeIcon, ChipIcon } from "@heroicons/vue/outline/esm/index.js"

export default {
    components: { Switch, SortDescendingIcon, BookmarkIcon, ChevronDownIcon, CubeIcon, ChipIcon },
    data: () => ({
        enabled: false,
    })
}
</script>