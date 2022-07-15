<template>
    <div>
        <ToolsHeader>
            <h1 class="font-extrabold text-4xl max-w-lg mx-auto">Badges Discord</h1>
            <h2 class="text-2xl leading-relaxed mt-4 max-w-lg mx-auto">Créé un badge Discord</h2>
            <div class="flex gap-4 mt-12 mx-auto">
                <NuxtLink to="/tools/discord" class="w-full">
                    <Button 
                        class="mx-auto"
                        color="white"
                        text="Voir d'autres outils Discord"
                        :small="true"
                    >
                        <template v-slot:icon_left>
                            <CubeIcon class="mr-3 w-8 h-8" />
                        </template>
                    </Button>
                </NuxtLink>
            </div>
        </ToolsHeader>
        <section class="container mx-auto py-24 gap-8 px-4">
            <h3 class="font-semibold text-2xl">Tu souhaites créer un badge de rôle?</h3>
            <div class="text-lg mt-2">Suis les différentes étapes afin de le créer!</div>
            <div class="grid lg:grid-cols-2 gap-8 mt-8">
                <div>
                    <ToolsStep :step-id="1" name="Forme du badge">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg grid lg:grid-cols-4 gap-12 items-center">
                            <div class="p-2 cursor-pointer" :class="shape === 0 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="shape = 0">
                                <svg class="w-full" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="125" cy="125" r="125" fill="#575775"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 1 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="shape = 1">
                                <svg class="w-full" viewBox="0 0 226 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M101.305 5.52712C107.63 -1.24786 118.37 -1.24786 124.695 5.52712L137.085 18.798C140.846 22.826 146.414 24.6354 151.824 23.5871L169.648 20.1332C178.748 18.3699 187.437 24.683 188.572 33.8819L190.795 51.9008C191.469 57.3699 194.911 62.1069 199.904 64.4386L216.354 72.1211C224.752 76.043 228.071 86.2577 223.582 94.3669L214.789 110.251C212.121 115.072 212.121 120.928 214.789 125.749L223.582 141.633C228.071 149.742 224.752 159.957 216.354 163.879L199.904 171.561C194.911 173.893 191.469 178.63 190.795 184.099L188.572 202.118C187.437 211.317 178.748 217.63 169.648 215.867L151.824 212.413C146.414 211.365 140.846 213.174 137.085 217.202L124.695 230.473C118.37 237.248 107.63 237.248 101.305 230.473L88.9149 217.202C85.1544 213.174 79.5857 211.365 74.1758 212.413L56.3518 215.867C47.2524 217.63 38.5633 211.317 37.4284 202.118L35.2053 184.099C34.5306 178.63 31.0889 173.893 26.096 171.561L9.64599 163.879C1.24803 159.957 -2.07094 149.742 2.41788 141.633L11.2106 125.749C13.8794 120.928 13.8794 115.072 11.2106 110.251L2.41788 94.3669C-2.07094 86.2577 1.24802 76.043 9.64598 72.1211L26.096 64.4387C31.0889 62.1069 34.5306 57.3699 35.2053 51.9008L37.4284 33.8819C38.5633 24.683 47.2524 18.3699 56.3518 20.1332L74.1758 23.5871C79.5857 24.6354 85.1544 22.826 88.9149 18.798L101.305 5.52712Z" fill="#575775"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 2 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="shape = 2">
                                <svg class="w-full" viewBox="0 0 218 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M97 3.9282C104.426 -0.358985 113.574 -0.358984 121 3.9282L205.253 52.5718C212.679 56.859 217.253 64.782 217.253 73.3564V170.644C217.253 179.218 212.679 187.141 205.253 191.428L121 240.072C113.574 244.359 104.426 244.359 97 240.072L12.7468 191.428C5.3212 187.141 0.746826 179.218 0.746826 170.644V73.3564C0.746826 64.782 5.3212 56.859 12.7468 52.5718L97 3.9282Z" fill="#575775"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 3 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="shape = 3">
                                <svg class="w-full" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M104.565 6.43501C111.985 -0.984949 124.015 -0.984932 131.435 6.43503L229.565 104.565C236.985 111.985 236.985 124.015 229.565 131.435L131.435 229.565C124.015 236.985 111.985 236.985 104.565 229.565L6.43501 131.435C-0.984949 124.015 -0.984932 111.985 6.43503 104.565L104.565 6.43501Z" fill="#575775"/>
                                </svg>
                            </div>
                        </div>
                    </ToolsStep>
                    <ToolsStep :step-id="2" name="Icone">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg grid lg:grid-cols-6 gap-12 items-center">
                            <div 
                                class="p-2 cursor-pointer" 
                                :class="icon === key && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" 
                                v-for="(ico, key) of icons" 
                                :key="key" 
                                @click="icon = key"
                            >
                                <svg class="w-16 h-16" viewBox="0 0 60 60" v-html="ico()"></svg>
                            </div>
                        </div>
                    </ToolsStep>
                    <ToolsStep :step-id="3" name="Couleurs">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg grid lg:grid-cols-6 gap-12 items-center">
                            <ColorPicker v-model:pureColor="primaryColor" :disableAlpha="true" shape="circle" pickerType="chrome" format="hex"></ColorPicker>
                            <ColorPicker v-if="duo_tone" v-model:pureColor="secondaryColor" :disableAlpha="true" shape="circle" pickerType="chrome" format="hex"></ColorPicker>
                            <Toggle v-model="duo_tone" />
                        </div>
                    </ToolsStep>
                </div>
                <div>
                    <div class="bg-white dark:bg-dark-800 shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex-col gap-4 overflow-y-auto lg:max-h-screen-padding relative hidden lg:flex">
                        <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask" v-if="!duo_tone">
                                <rect x="0" y="0" width="250" height="250" fill="white" />
                                <g style="transform: translate(23%, 24%) scale(2.5);" v-html="icons[icon]('#000')"></g>
                            </mask>
                            <g v-html="shapes[shape](primaryColor)"></g>
                            <g v-if="duo_tone" transform="translate(125,125) scale(2)" v-html="icons[icon](secondaryColor)"></g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { CubeIcon } from "@heroicons/vue/outline/esm/index.js";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import icons, { shapes } from '~~/composables/DiscordIcons';

export default {
    components: { CubeIcon, ColorPicker },
    data: () => ({
        shape: 0,
        icon: 0,
        duo_tone: false,
        icons,
        shapes,
        primaryColor: '#f20f20',
        secondaryColor: '#000',
    })
}
</script>

<style>
.vc-hue-slider__bar {
    background: -webkit-linear-gradient(left,red 0%,yellow 16.66%,lime 33.33%,aqua 50%,blue 66.66%,fuchsia 83.33%,red 100%);
}

.vc-chrome-colorPicker {
    background-color: transparent!important;
}

.vc-chrome-colorPicker-body {
    background-color: transparent!important;
}

.dark .vc-colorpicker {
    background: #36393F;
}
</style>