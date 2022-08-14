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
                            <div class="p-2 cursor-pointer" :class="shape === 0 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(0)">
                                <svg class="w-full" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="125" cy="125" r="125" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 1 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(1)">
                                <svg class="w-full" viewBox="0 0 226 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M101.305 5.52712C107.63 -1.24786 118.37 -1.24786 124.695 5.52712L137.085 18.798C140.846 22.826 146.414 24.6354 151.824 23.5871L169.648 20.1332C178.748 18.3699 187.437 24.683 188.572 33.8819L190.795 51.9008C191.469 57.3699 194.911 62.1069 199.904 64.4386L216.354 72.1211C224.752 76.043 228.071 86.2577 223.582 94.3669L214.789 110.251C212.121 115.072 212.121 120.928 214.789 125.749L223.582 141.633C228.071 149.742 224.752 159.957 216.354 163.879L199.904 171.561C194.911 173.893 191.469 178.63 190.795 184.099L188.572 202.118C187.437 211.317 178.748 217.63 169.648 215.867L151.824 212.413C146.414 211.365 140.846 213.174 137.085 217.202L124.695 230.473C118.37 237.248 107.63 237.248 101.305 230.473L88.9149 217.202C85.1544 213.174 79.5857 211.365 74.1758 212.413L56.3518 215.867C47.2524 217.63 38.5633 211.317 37.4284 202.118L35.2053 184.099C34.5306 178.63 31.0889 173.893 26.096 171.561L9.64599 163.879C1.24803 159.957 -2.07094 149.742 2.41788 141.633L11.2106 125.749C13.8794 120.928 13.8794 115.072 11.2106 110.251L2.41788 94.3669C-2.07094 86.2577 1.24802 76.043 9.64598 72.1211L26.096 64.4387C31.0889 62.1069 34.5306 57.3699 35.2053 51.9008L37.4284 33.8819C38.5633 24.683 47.2524 18.3699 56.3518 20.1332L74.1758 23.5871C79.5857 24.6354 85.1544 22.826 88.9149 18.798L101.305 5.52712Z" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 2 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(2)">
                                <svg class="w-full" viewBox="0 0 218 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M97 3.9282C104.426 -0.358985 113.574 -0.358984 121 3.9282L205.253 52.5718C212.679 56.859 217.253 64.782 217.253 73.3564V170.644C217.253 179.218 212.679 187.141 205.253 191.428L121 240.072C113.574 244.359 104.426 244.359 97 240.072L12.7468 191.428C5.3212 187.141 0.746826 179.218 0.746826 170.644V73.3564C0.746826 64.782 5.3212 56.859 12.7468 52.5718L97 3.9282Z" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 3 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(3)">
                                <svg class="w-full" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M104.565 6.43501C111.985 -0.984949 124.015 -0.984932 131.435 6.43503L229.565 104.565C236.985 111.985 236.985 124.015 229.565 131.435L131.435 229.565C124.015 236.985 111.985 236.985 104.565 229.565L6.43501 131.435C-0.984949 124.015 -0.984932 111.985 6.43503 104.565L104.565 6.43501Z" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 4 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(4)">
                                <svg class="w-full" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M184.246 0H51.7544C49.6842 25.5665 26.9123 45.233 0 45.233V57.0329C0 115.049 28.9824 169.132 79.7018 207.482L118 235.998L156.298 207.482C207.018 170.115 236 115.049 236 57.0329V45.233C209.088 45.233 187.351 25.5665 184.246 0Z" fill="#B2BFC7"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 5 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(5)">
                                <svg class="w-full" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M184.246 0H51.7544C49.6842 25.5665 26.9123 45.233 0 45.233V57.0329C0 115.049 28.9824 169.132 79.7018 207.482L118 235.998L156.298 207.482C207.018 170.115 236 115.049 236 57.0329V45.233C209.088 45.233 187.351 25.5665 184.246 0Z" fill="#B2BFC7"/>
                                    <path d="M184.246 0H51.7544C49.6842 25.5667 26.9123 45.2333 0 45.2333V57.0333C0 115.05 28.9824 169.133 79.7018 207.483L118 236L156.298 207.483C207.018 170.117 236 115.05 236 57.0333V45.2333C209.088 45.2333 187.351 25.5667 184.246 0ZM94.193 170.117C63.1403 146.517 44.5088 113.083 44.5088 76.7V69.8167C61.0702 69.8167 75.5614 58.0167 76.5965 42.2833H118V188.8L94.193 170.117Z" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 6 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(6)">
                                <svg class="w-full" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M117.81 0L222.719 52.3703C230.858 56.433 236 64.7474 236 73.8435V162.157C236 171.253 230.858 179.567 222.719 183.63L117.81 236L13.253 183.637C5.12984 179.569 0 171.263 0 162.178V73.8221C0 64.7372 5.12983 56.431 13.253 52.3628L117.81 0Z" fill="#B2BFC7"/>
                                    <path d="M0 162.178C0 171.263 5.12984 179.569 13.253 183.637L117.81 236V0L13.253 52.3628C5.12983 56.431 0 64.7372 0 73.8221V162.178Z" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 7 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(7)">
                                <svg class="w-full" viewBox="0 0 218 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M109 225L22.3975 150L0.746843 37.5L109 -1.09278e-05L217.253 37.5L195.603 150L109 225Z" fill="#99AAB5"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 8 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(8)">
                                <svg class="w-full" viewBox="0 0 216 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M112.583 221.031C109.952 223.309 106.048 223.309 103.417 221.031L23.2305 151.587C22.0431 150.559 21.236 149.161 20.9392 147.619L0.892451 43.4529C0.23485 40.0359 2.18702 36.6547 5.47503 35.5157L105.709 0.793703C107.193 0.279541 108.807 0.27954 110.291 0.793703L210.525 35.5157C213.813 36.6547 215.765 40.0359 215.108 43.4529L195.061 147.619C194.764 149.161 193.957 150.559 192.769 151.587L112.583 221.031Z" fill="#99AAB5"/>
                                    <path d="M26.9283 147.453L104.698 214.167C105.995 215.28 108 214.358 108 212.649L108 9.80074C108 8.42821 106.649 7.46355 105.351 7.90901L7.64604 41.4352C6.70229 41.759 6.14158 42.7289 6.33187 43.7083L26.2672 146.317C26.3532 146.759 26.5861 147.16 26.9283 147.453Z" fill="#B2BFC7"/>
                                </svg>
                            </div>
                            <div class="p-2 cursor-pointer" :class="shape === 9 && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" @click="selectShape(9)">
                                <svg class="w-full" viewBox="0 0 218 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M109 250L0.746826 187.5L0.746837 62.5L109 0L217.253 62.5L217.253 187.5L109 250Z" fill="#99AAB5"/>
                                    <path d="M7.9999 182.25L109 240L109 9.49995L7.99991 66.7499L7.9999 182.25Z" fill="#B2BFC7"/>
                                </svg>
                            </div>
                        </div>
                    </ToolsStep>
                    <ToolsStep :step-id="2" name="Icone">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg">
                            <div class="flex flex-wrap gap-2 mb-8">
                                <NuxtLink :href="`#${category}`" class="hover:bg-gray-400 dark:hover:bg-dark-700 transition ease-in duration-100 px-4 py-2 rounded-sm" v-for="(_, category) of categories" :key="category">
                                    {{ category }}
                                </NuxtLink>
                                <NuxtLink href="#custom_icon" class="hover:bg-gray-400 dark:hover:bg-dark-700 transition ease-in duration-100 px-4 py-2 rounded-sm">
                                    Icone personnalisée
                                </NuxtLink>
                            </div>
                            <div v-for="(iconList, category) of categories" :key="category">
                                <div class="font-regular text-lg text-gray-500 mb-4" :id="category">{{ category }}</div>
                                <div class="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 items-center mb-8">
                                    <div 
                                        class="p-2 cursor-pointer flex justify-center items-center h-24" 
                                        :class="(icon === ico().index && !uploadedIcon) && 'border-2 rounded-md border-dark-600 bg-dark-700 bg-opacity-25'" 
                                        v-for="(ico, key) of iconList" 
                                        :key="key" 
                                        @click="icon = ico().index; uploadedIcon = null"
                                    >
                                        <!-- {{ ico().index }} -->
                                        <svg ref="__svg_icon" :width="ico('#99AAB5').width" :height="ico('#99AAB5').height" :style="`transform: scale(${ico().category === 'Icones Fluent 3D' ? 1.5 : ico().width <= 24 ? 1 : 0.5});`" v-html="ico('#99AAB5').svg"></svg>
                                    </div>
                                </div>
                            </div>
                            <div id="custom_icon" class="w-full my-8">
                                <div class="relative flex items-center">
                                    <div class="flex-grow border-t border-dark-700"></div>
                                    <span class="flex-shrink mx-4 text-dark-700">OU</span>
                                    <div class="flex-grow border-t border-dark-700"></div>
                                </div>
                            </div>
                            <div class="mt-4 p-4 cursor-pointer flex justify-center items-center rounded-md bg-gray-400 hover:bg-gray-300 dark:hover:bg-dark-600 dark:bg-dark-700 transition ease-in duration-200 bg-opacity-25 col-span-2 relative">
                                Upload icon
                                <input class="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer" type="file" accept="image/*" @change="(e) => uploadFile(e)">
                            </div>
                        </div>
                    </ToolsStep>
                    <ToolsStep :step-id="3" name="Taille de l'icone">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg items-center">
                            <div class="flex flex-col space-y-2 p-2 w-full">
                                <input v-model="multiply" type="range" class="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-300 dark:bg-dark-700" min="1" max="6" step="0.1" />
                            </div>
                        </div>
                    </ToolsStep>
                    <ToolsStep :step-id="4" name="Position de l'icone">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg items-center">
                            <div class="flex flex-col p-2 w-full">
                                <div class="flex items-center gap-2 justify-center mb-8">
                                    <label for="offset_x">X</label>
                                    <input id="offset_x" v-model="offset_x" type="range" class="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-300 dark:bg-dark-700" min="-100" max="100" step="0.1" />
                                    <label for="offset_y">Y</label>
                                    <input id="offset_y" v-model="offset_y" type="range" class="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-300 dark:bg-dark-700" min="-100" max="100" step="0.1" />
                                </div>
                                <Button text="Centrer l'icone" @click="offset_x = 0; offset_y = 0" color="primary" :centerText="true" />
                            </div>
                        </div>
                    </ToolsStep>
                    <ToolsStep :step-id="5" name="Couleurs">
                        <div class="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg flex flex-col items-start gap-12">
                            <ClientOnly>
                                <div class="flex">
                                    <ColorPicker v-model:pureColor="primaryColor" :disableAlpha="true" shape="circle" pickerType="chrome" format="hex"></ColorPicker>
                                    <div class="grid grid-cols-10 gap-2">
                                        <div class="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer" v-for="(color, index) in defaultColors" :key="index" :style="`background: ${color};`" @click="primaryColor = color">
                                            <CheckIcon v-if="primaryColor == color" class="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </ClientOnly>
                            <ClientOnly v-if="duo_tone && !uploadedIcon">
                                <div class="flex">
                                    <ColorPicker v-model:pureColor="secondaryColor" :disableAlpha="true" shape="circle" pickerType="chrome" format="hex"></ColorPicker>
                                    <div class="grid grid-cols-10 gap-2">
                                        <div class="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer" v-for="(color, index) in defaultColors" :key="index" :style="`background: ${color};`" @click="secondaryColor = color">
                                            <CheckIcon v-if="secondaryColor == color" class="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </ClientOnly>
                            <div class="flex gap-4 items-center">
                                <Toggle v-model="duo_tone" />
                                Bicolore
                            </div>
                        </div>
                    </ToolsStep>
                </div>
                <div>
                    <div class="bg-white dark:bg-dark-800 shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex-col gap-4 overflow-y-auto lg:max-h-screen-padding relative hidden lg:flex">
                        <div style="background-image: url(/transparent.svg);" class="bg-repeat bg-center p-12 rounded-lg flex items-center justify-center">
                            <svg id="svg_icon" :width="shapeWidth" :height="shapeHeight" :viewBox="`0 0 ${shapeWidth} ${shapeHeight}`" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask" v-if="!duo_tone">
                                    <rect x="0" y="0" width="250" height="250" fill="white" />
                                    <g v-if="!uploadedIcon" :style="`transform: translate(${shapeWidth / 2 - (icons[icon]().width * multiply) / 2 + Number(offset_x)}px, ${shapeHeight / 2 - (icons[icon]().height * multiply) / 2 + Number(offset_y)}px) scale(${multiply});`" v-html="icons[icon]('#000').svg"></g>
                                    <image v-else
                                        width="64" 
                                        height="64" 
                                        :href="uploadedIcon" 
                                        :style="`filter: brightness(0); transform: translate(${shapeWidth / 2 - (64 * multiply) / 2 + Number(offset_x)}px, ${shapeHeight / 2 - (64 * multiply) / 2 + Number(offset_y)}px) scale(${multiply});`"
                                    />
                                </mask>
                                <g v-html="shapes[shape](primaryColor)[0]" ref="shapeDraw"></g>
                                <g v-if="duo_tone && !uploadedIcon" :style="`transform: translate(${shapeWidth / 2 - (icons[icon]().width * multiply) / 2 + Number(offset_x)}px, ${shapeHeight / 2 - (icons[icon]().height * multiply) / 2 + Number(offset_y)}px) scale(${multiply});`" v-html="icons[icon](secondaryColor).svg"></g>
                                <image v-else-if="duo_tone && uploadedIcon"
                                    width="64" 
                                    height="64" 
                                    :href="uploadedIcon" 
                                    :style="`transform: translate(${shapeWidth / 2 - (64 * multiply) / 2 + Number(offset_x)}px, ${shapeHeight / 2 - (64 * multiply) / 2 + Number(offset_y)}px) scale(${multiply});`"
                                />
                            </svg>
                        </div>
                        <Button text="Sauvegarder l'icone (PNG)" :center-text="true" @click="save" />
                        <div class="w-full">
                            <div class="relative flex items-center">
                                <div class="flex-grow border-t border-dark-700"></div>
                                <span class="flex-shrink mx-4 text-dark-700">OU</span>
                                <div class="flex-grow border-t border-dark-700"></div>
                            </div>
                        </div>
                        <div class="font-medium text-lg text-center">Mettre l'icone sur un rôle via Multid</div>
                        <div v-if="!guild && guilds">
                            <div class="font-medium text-md mt-3 mb-2">Mes serveurs avec Multid</div>
                            <div v-for="(guild, key) of guilds" :key="key" class="flex justify-between items-center gap-2 pl-4 pr-2 py-2 bg-gray-200 dark:bg-dark-700 rounded-lg mb-2">
                                <div class="flex items-center gap-4">
                                    <img class="w-10 h-10 rounded-full" v-if="guild.icon" :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`" />
                                    <div class="font-medium text-md">{{ guild.name }}</div>
                                </div>
                                <Button text="Sélectionner ce serveur" color="primary" :small="true" class="text-sm font-regular" @click="selectGuild(key)" />
                            </div>
                            <div class="font-semibold text-md mt-6 mb-1">Ajouter Multid sur un {{ guilds.length > 0 && 'autre' || '' }} serveur</div>
                            <div class="font-regular text-sm text-italic text-gray-400 mb-4">Vous devrez vous reconnecter à UMaestro pour actualiser la liste.</div>
                            <div class="flex justify-between items-center gap-2 p-4 bg-gray-200 dark:bg-dark-700 rounded-lg">
                                <div class="flex items-center gap-4">
                                    <img class="w-10 h-10 rounded-full" src="https://cdn.discordapp.com/avatars/983094528791683182/1830fd86f024e70811c706de31961a15.webp?size=128" />
                                    <div class="font-medium text-md">Multid</div>
                                </div>
                                <NuxtLink to="https://discord.com/api/oauth2/authorize?client_id=983094528791683182&permissions=805432368&scope=bot%20applications.commands" target="_blank">
                                    <Button text="Ajouter à mon serveur" color="blurple" />
                                </NuxtLink>
                            </div>
                        </div>
                        <div v-else-if="guild">
                            <div class="font-medium text-md mt-3 mb-2">Rôles sur {{ guild.name }}</div>
                            <div v-for="(role, id) of roles" :key="id" class="bg-gray-200 dark:bg-dark-700 p-4 mb-2 rounded-md flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <img v-if="role.icon" class="w-12 h-12" :src="`https://cdn.discordapp.com/role-icons/${role.id}/${role.icon}.png`" />
                                    {{ role.unicode_emoji }} {{ role.name }}
                                </div>
                                <Button text="Appliquer l'icone à ce rôle" color="blurple" :small="true" class="text-sm font-regular" @click="setToRole(role.id, id)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { CubeIcon, CheckIcon } from "@heroicons/vue/outline/esm/index.js";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import icons, { shapes } from '~~/composables/DiscordIcons';
import { saveSvgAsPng, svgAsPngUri } from 'save-svg-as-png';
import { transformFileIntoBase64 } from '~~/composables/Blob';

export default {
    components: { CubeIcon, CheckIcon, ColorPicker },    
    head: {
        title: 'Créateur de badges',
    },
    data: () => ({
        shape: 0,
        icon: 0,
        uploadedIcon: null,
        duo_tone: true,
        icons,
        shapes,
        multiply: 1,
        primaryColor: '#f20f20',
        secondaryColor: '#000',
        defaultColors: [
            '#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#E91E63', '#F1C40F', '#E67E22', '#E74C3C', '#95A5A6', '#607D8B',
            '#11806A', '#1F8B4C', '#206694', '#71368A', '#AD1457', '#C27C0E', '#A84300', '#992D22', '#979C9F', '#546E7A'
        ],
        guilds: [],
        guild: null,
        roles: [],
        shapeWidth: 200,
        shapeHeight: 200,
        offset_x: 0,
        offset_y: 0,
    }),
    async mounted() {
        this.guilds = localStorage.getItem('user_guilds') ? JSON.parse(localStorage.getItem('user_guilds')) : []; // .filter(guild => guild.features.find(feature => feature == 'ROLE_ICONS'))
        this.selectShape(0)
    },
    computed: {
        categories() {
            const icons = {}
            for(const icon of this.icons) {
                icons[icon().category] = icons[icon().category] || []
                icons[icon().category].push(icon)
            };
            return icons;
        }
    },
    // watch: {
    //     multiply() {
    //         this.multiply = (this.icons[this.icon]().width * this.multiply >= this.shapeWidth || this.icons[this.icon]().height * this.multiply >= this.shapeHeight) ? this.multiply - 1 : this.multiply
    //         console.log(this.multiply)
    //     }
    // },
    methods: {
        async uploadFile(e) {
            this.icon = 0
            this.uploadedIcon = await transformFileIntoBase64(e.target.files[0]);
        },
        save() {
            saveSvgAsPng(document.getElementById("svg_icon"), "discord_icon.png");
        },
        selectShape(shape) {
            this.shape = shape
            setTimeout(() => {
                const bounds = this.$refs.shapeDraw.getBoundingClientRect()
                this.shapeWidth = Math.round(bounds.width) + 1;
                this.shapeHeight = Math.round(bounds.height) + 1;
            }, 100);
        },
        async selectGuild(key) {
            this.guild = this.guilds[key];
            try {
                this.roles = await $fetch(`/api/guilds/${this.guild.id}/roles`)
            } catch (e) {
                console.log(e);
            }
        },
        async setToRole(id, key) {
            const uri = await svgAsPngUri(document.getElementById("svg_icon"));
            const role = await $fetch(`/api/guilds/${this.guild.id}/${id}`, { method: 'PATCH', body: {
                icon: uri
            } });
            this.roles[key].icon = role.icon
        }
    }
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