<template>
    <div>
        <ToolsHeader>
            <h1 class="font-extrabold text-4xl max-w-lg mx-auto">Embed Discord</h1>
            <h2 class="text-2xl leading-relaxed mt-4 max-w-lg mx-auto">Crée et envoie tes embeds à ton serveur avec cet outil!</h2>
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
            <h3 class="font-semibold text-2xl">Tu souhaites envoyer un embed sur ton serveur?</h3>
            <div class="text-lg mt-2">Suis les différentes étapes afin de l’envoyer!</div>
            <div class="grid lg:grid-cols-2 gap-8 mt-8">
                <div>
                    <ToolsDiscordEmbedCreatorStep step-id="1" name="Webhook URL" description="Pour trouver l’URL du webhook, rends toi sur Discord dans les paramètres de ton serveur. Rends toi ensuite dans l’onglet “Integrations” et clique sur “Webhooks”.">
                        <Input :big="true" placeholder="https://discord.com/webhooks/id/token" v-model="webhook_url" />
                    </ToolsDiscordEmbedCreatorStep>
                    <div class="divide-y">
                        <ToolsDiscordEmbedCreatorStep v-for="(message, msgIndex) of messages" :key="msgIndex" :step-id="msgIndex + 2" :name="`Création du message n°${msgIndex + 1}`" :big-padding="true">
                            <div>
                                <Menu as="div" class="relative inline-block text-left">
                                    <MenuButton class="bg-white dark:bg-dark-800 flex gap-6 items-center p-8 rounded-xl shadow-lg ease-in duration-200 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-dark-700 cursor-pointer">
                                        <UploadIcon class="w-8 h-8" />
                                        <div class="flex flex-col gap-2 text-left">
                                            <div class="text-md font-semibold">Charger un message</div>
                                            <div class="text-sm">Vous avez la possibilité de sauvegarder votre message après l'avoir configuré afin de pouvoir le récupérer plus tard ici.</div>
                                        </div>
                                    </MenuButton>
                                    <transition
                                        enter-active-class="transition duration-100 ease-out"
                                        enter-from-class="transform scale-95 opacity-0"
                                        enter-to-class="transform scale-100 opacity-100"
                                        leave-active-class="transition duration-75 ease-in"
                                        leave-from-class="transform scale-100 opacity-100"
                                        leave-to-class="transform scale-95 opacity-0"
                                    >
                                        <MenuItems
                                            class="absolute left-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                        >
                                            <div class="p-2 flex flex-col gap-1">
                                                <div>
                                                    <Input placeholder="URL du message..." @change="loadMessageFromUrl" />
                                                </div>
                                                <div class="w-full">
                                                    <div class="relative flex items-center">
                                                        <div class="flex-grow border-t border-dark-700"></div>
                                                        <span class="flex-shrink mx-4 text-dark-700">OU</span>
                                                        <div class="flex-grow border-t border-dark-700"></div>
                                                    </div>
                                                </div>
                                                <MenuItem 
                                                    v-slot="{ active }"
                                                    v-for="(message, index) in getSavedMessages()" 
                                                    :key="index"
                                                >
                                                    <button
                                                        :class="[
                                                            active ? 'bg-blurple text-white' : 'text-gray-900 dark:text-white',
                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                        ]"
                                                        @click="load(msgIndex, index)"
                                                    >
                                                        {{ index }}
                                                    </button>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                            <div class="w-full my-12">
                                <div class="relative flex items-center">
                                    <div class="flex-grow border-t border-dark-700"></div>
                                    <span class="flex-shrink mx-4 text-dark-700">OU</span>
                                    <div class="flex-grow border-t border-dark-700"></div>
                                </div>
                            </div>
                            <ToolsDiscordEmbedCreatorStep :step-id="msgIndex + 2 + '.1'" name="Auteur du message" class="pt-0">
                                <Input placeholder="Nom de l'auteur..." v-model="message.username" />
                                <Input class="mt-3" placeholder="URL de l'avatar de l'auteur..." v-model="message.avatar_url" />
                            </ToolsDiscordEmbedCreatorStep>
                            <ToolsDiscordEmbedCreatorStep :step-id="msgIndex + 2 + '.2'" name="Contenu du message">
                                <Textarea placeholder="Contenu du message..." v-model="message.content" />
                            </ToolsDiscordEmbedCreatorStep>
                            <ToolsDiscordEmbedCreatorStep :step-id="msgIndex + 2 + '.3'" name="Fichiers attachés au message">
                                <div class="relative ease-in duration-200 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                    <div class="w-full bg-white dark:bg-dark-800 border-2 border-dashed border-dark-400 dark:border-dark-700 dark:text-dark-300 text-sm font-semibold p-6 rounded-md shadow-lg ease-in duration-200 focus:outline-none flex gap-2 items-center">
                                        <UploadIcon class="w-8 h-8" />
                                        <span class="ml-2">{{ message.files?.length > 0 ? `${message.files.length} fichiers attachés` : 'Ajouter un fichier' }}</span>
                                    </div>
                                    <input class="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer" type="file" multiple @input="(e) => uploadFile(e, message)">
                                </div>
                                <div v-if="message.files" class="flex flex-wrap items-center mt-4 gap-3">
                                    <div v-for="(file, index) of message.files" :key="index" class="flex">
                                        <div class="relative">
                                            <ToolsDiscordEmbedCreatorAttachmentsImage v-if="file.type.startsWith('image') && file.type !== 'image/svg+xml'" class="w-24 h-24 object-cover rounded-lg" :file="file" />
                                            <ToolsDiscordEmbedCreatorAttachmentsFile v-else :file="file" />
                                            <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-transparent ease-in duration-200 cursor-pointer opacity-0 bg-black hover:opacity-75 rounded-[4px]" @click="message.files.splice(index, 1)">
                                                <TrashIcon class="w-12 h-12" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ToolsDiscordEmbedCreatorStep>
                            <ToolsDiscordEmbedCreatorStep :step-id="msgIndex + 2 + '.4'" name="Embeds">
                                <div class="flex flex-col gap-4">
                                    <ToolsDiscordEmbedCreatorCollapseCard 
                                        class="bg-white dark:bg-dark-800 border-l-4 rounded-l-md rounded-r-lg shadow-xl" 
                                        v-for="(embed, id) in message.embeds" 
                                        :key="id" 
                                        :name="`Embed n°${ id + 1 }`" 
                                        :trash="() => message.embeds.splice(index, 1)"
                                        :style="`border-color: ${embed.color}`"
                                    >
                                        <div class="flex flex-col gap-4">
                                            <ToolsDiscordEmbedCreatorCollapseCard class="bg-gray-100 dark:bg-dark-700 rounded-lg" name="Auteur">
                                                <Input placeholder="Nom de l'auteur..." v-model="embed.author.name" />
                                                <Input class="mt-3" placeholder="URL de l'avatar de l'auteur..." v-model="embed.author.icon_url" />
                                                <Input class="mt-3" placeholder="URL de l'auteur..." v-model="embed.author.url" />
                                            </ToolsDiscordEmbedCreatorCollapseCard>
                                            <ToolsDiscordEmbedCreatorCollapseCard class="bg-gray-100 dark:bg-dark-700 rounded-lg" name="Corps de l'embed">
                                                <Input placeholder="Titre..." v-model="embed.title" />
                                                <Textarea class="mt-3" placeholder="Description..." v-model="embed.description" />
                                                <Input class="mt-3" placeholder="URL..." v-model="embed.url" />
                                                <div class="mt-3">
                                                    <ClientOnly>
                                                        <ColorPicker v-model:pureColor="embed.color" :disableAlpha="true" shape="circle" pickerType="chrome" format="hex"></ColorPicker>
                                                    </ClientOnly>
                                                </div>
                                            </ToolsDiscordEmbedCreatorCollapseCard>
                                            <ToolsDiscordEmbedCreatorCollapseCard class="bg-gray-100 dark:bg-dark-700 rounded-lg" name="Fields">
                                                <ToolsDiscordEmbedCreatorCollapseCard v-for="(field, id) in embed.fields" :key="id" class="bg-gray-200 dark:bg-dark-600 rounded-lg mb-2" :name="`Field n°${id + 1}`" :trash="() => embed.fields.splice(id, 1)">
                                                    <Input placeholder="Titre..." v-model="field.name" />
                                                    <Input class="mt-3 mb-3" placeholder="Valeur..." v-model="field.value" />
                                                    <Toggle v-model="field.inline" />
                                                </ToolsDiscordEmbedCreatorCollapseCard>
                                                <Button class="mx-auto mt-8 shadow-none" color="blurple" :text="`Ajouter un field (${embed.fields?.length}/25)`" @click="embed.fields.length < 25 && embed.fields.push({})" />
                                            </ToolsDiscordEmbedCreatorCollapseCard>
                                            <ToolsDiscordEmbedCreatorCollapseCard class="bg-gray-100 dark:bg-dark-700 rounded-lg" name="Images">
                                                <Input placeholder="Image de couverture..." v-model="embed.thumbnail.url" />
                                                <div class="flex gap-2">
                                                    <Input class="mt-3 w-full" placeholder="Image..." v-model="embed.image.url" />
                                                    <Input class="mt-3" placeholder="Image..." />
                                                </div>
                                            </ToolsDiscordEmbedCreatorCollapseCard>
                                            <ToolsDiscordEmbedCreatorCollapseCard class="bg-gray-100 dark:bg-dark-700 rounded-lg" name="Footer">
                                                <Input placeholder="Texte..." v-model="embed.footer.text" />
                                                <Input class="mt-3" placeholder="URL de l'icone..." v-model="embed.footer.icon_url" />
                                                <Input class="mt-3" placeholder="Timestamp..." v-model="embed.timestamp" />
                                            </ToolsDiscordEmbedCreatorCollapseCard>
                                        </div>
                                    </ToolsDiscordEmbedCreatorCollapseCard>
                                </div>
                                <Button class="mx-auto mt-8" color="blurple" :text="`Ajouter un embed (${message.embeds?.length}/10)`" @click="message.embeds.length < 10 && createEmptyEmbed()" />
                            </ToolsDiscordEmbedCreatorStep>
                            <ToolsDiscordEmbedCreatorStep :step-id="msgIndex + 2 + '.5'" name="Boutons" class="relative">
                                <div>
                                    <div class="flex flex-col gap-4">
                                        <ToolsDiscordEmbedCreatorCollapseCard 
                                            class="bg-white dark:bg-dark-700 rounded-l-md rounded-r-lg shadow-xl" 
                                            v-for="(button, id) in message.components[0].components" 
                                            :key="id" 
                                            :name="`Bouton n°${ id + 1 }`" 
                                            :trash="() => message?.components[0]?.components?.splice(index, 1)"
                                        >
                                            <Input placeholder="Texte du bouton..." v-model="button.label" />
                                            <Input class="mt-3" placeholder="URL du bouton..." v-model="button.url" />
                                        </ToolsDiscordEmbedCreatorCollapseCard>
                                    </div>
                                    <Button class="mx-auto mt-8" color="blurple" :text="`Ajouter un bouton (${message.components[0].components?.length}/5)`" @click="message?.components[0]?.components?.length < 5 && message.components[0].components.push({
                                        type: 2,
                                        style: 5,
                                        label: '',
                                        url: '',
                                    })" />
                                </div>
                                <div v-if="!is_application_webhook" class="absolute w-full h-full top-0 bg-background dark:bg-dark-900 bg-opacity-95 dark:bg-opacity-95 flex justify-center items-center">
                                    <div class="text-md font-semibold">Tu dois utiliser un webhook créé par un bot pour ajouter des boutons.</div>
                                </div>
                            </ToolsDiscordEmbedCreatorStep>
                            <ToolsDiscordEmbedCreatorStep :step-id="msgIndex + 2 + '.6'" name="Finaliser le message">
                                <div class="flex gap-4 justify-center">
                                    <Button 
                                        class="mt-8"
                                        color="secondary"
                                        text="Sauvegarder ce message"
                                        @click="setIsOpen()"
                                    />
                                    <TransitionRoot appear :show="isOpen" as="template">
                                        <Dialog as="div" @close="setIsOpen(false)" class="relative z-10">
                                            <TransitionChild
                                                as="template"
                                                enter="duration-300 ease-out"
                                                enter-from="opacity-0"
                                                enter-to="opacity-100"
                                                leave="duration-200 ease-in"
                                                leave-from="opacity-100"
                                                leave-to="opacity-0"
                                            >
                                                <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                                            </TransitionChild>

                                            <div class="fixed inset-0 overflow-y-auto">
                                                <div
                                                class="flex min-h-full items-center justify-center p-4 text-center"
                                                >
                                                <TransitionChild
                                                    as="template"
                                                    enter="duration-300 ease-out"
                                                    enter-from="opacity-0 scale-95"
                                                    enter-to="opacity-100 scale-100"
                                                    leave="duration-200 ease-in"
                                                    leave-from="opacity-100 scale-100"
                                                    leave-to="opacity-0 scale-95"
                                                >
                                                    <DialogPanel
                                                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all"
                                                    >
                                                    <DialogTitle
                                                        as="h3"
                                                        class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                                    >
                                                        Voulez-vous vraiment sauvegarder ce message ?
                                                    </DialogTitle>
                                                    <div class="mt-2">
                                                        <p class="text-sm text-gray-500">
                                                            Vous pouvez choisir un nom pour la sauvegarde.
                                                            <Input class="mt-2" placeholder="Nom de la sauvegarde..." v-model="savename" />
                                                        </p>
                                                    </div>

                                                    <div class="flex gap-2 items-center mt-4 justify-end">
                                                        <Button
                                                            color="transparent"
                                                            text="Annuler"
                                                            @click="setIsOpen"
                                                        />
                                                        <Button
                                                            color="secondary"
                                                            text="Sauvegarder"
                                                            @click="save(message)"
                                                        />
                                                    </div>
                                                    </DialogPanel>
                                                </TransitionChild>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </TransitionRoot>
                                </div>
                            </ToolsDiscordEmbedCreatorStep>
                        </ToolsDiscordEmbedCreatorStep>
                    </div>
                    <ToolsDiscordEmbedCreatorStep step-id="finale" name="Envoie tes messages !">
                        <div class="flex items-center justify-center gap-2 mt-8">
                            <Button
                                color="white"
                                text="Ajouter un message"
                                @click="createEmptyMessage"
                            />
                            <Button 
                                color="blurple"
                                text="Envoyer"
                                @click="sendMessage"
                            />
                        </div>
                    </ToolsDiscordEmbedCreatorStep>
                </div>
                <div>
                    <div class="bg-[#FAFAFA] dark:bg-[#36393F] shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex-col gap-4 overflow-y-auto lg:max-h-screen-padding relative hidden lg:flex">
                        <ToolsDiscordEmbedCreatorFakeMessage v-for="(message, index) of messages" :key="index" :data="message" />
                    </div>
                    <TransitionRoot appear :show="mobile_preview_open" as="template">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="fixed top-0 left-0 h-screen w-full lg:relative lg:block z-10">
                                <div class="bg-[#FAFAFA] dark:bg-[#36393F] shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex flex-col gap-4 overflow-y-auto h-screen lg:max-h-screen-padding relative">
                                    <div class="right-8 lg:hidden flex justify-end">
                                        <button class="rounded-full border-2 border-dark-700 dark:border-white p-4 focus:bg-white focus:text-white flex items-center justify-center group opacity-50" @click="toggleMobilePreview">
                                            <svg class="fill-black dark:fill-white group-focus:fill-black w-5 h-5" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <ToolsDiscordEmbedCreatorFakeMessage v-for="(message, index) of messages" :key="index" :data="message" />
                                </div>
                            </div>
                        </TransitionChild>
                    </TransitionRoot>
                    <div class="fixed bottom-8 right-12 w-24 h-24 bg-dark-800 rounded-full ease-in duration-200 hover:scale-125 hover:bg-dark-700 flex justify-center items-center lg:hidden" @click="toggleMobilePreview">
                        <EyeIcon class="w-12 h-12" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { UploadIcon, CubeIcon, TrashIcon, EyeIcon } from '@heroicons/vue/outline';
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { sendMessage, checkWebhookValidity, fetchMessage } from "~~/composables/DiscordWebhook"

export default {
    components: { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, UploadIcon, CubeIcon, ColorPicker, TrashIcon, EyeIcon },
    head: {
        title: 'Créateur d\'embed',
    },
    data: () => ({
        is_application_webhook: false,
        valid_webhook: false,
        isOpen: false,
        webhook_url: '',
        savename: '',
        mobile_preview_open: false,
        messages: [
            {
                username: 'Brique au bob',
                avatar_url: 'https://cdn.discordapp.com/avatars/307531336388968458/2c8407ba4d3da729fe75a24b99e51bc2.png?size=4096',
                content: 'Salut les copains',
                files: [],
                components: [
                    {
                        type: 1,
                        components: []
                    }
                ],
                embeds: [{
                    color: '#F20F20',
                    title: 'Some title',
                    url: 'https://discord.js.org',
                    author: {
                        name: 'Some name',
                        icon_url: 'https://i.imgur.com/AfFp7pu.png',
                        url: 'https://discord.js.org',
                    },
                    description: 'Some description here',
                    thumbnail: {
                        url: 'https://i.imgur.com/AfFp7pu.png',
                    },
                    fields: [
                        {
                            name: 'Regular field title',
                            value: 'Some value here',
                            inline: false,
                        },
                    ],
                    image: {
                        url: 'https://media.discordapp.net/attachments/810567613129556028/867035136662962197/image0.png?width=863&height=288',
                    },
                    timestamp: '1977-04-22T01:00:00-05:00',
                    footer: {
                        text: 'Some footer text here',
                        icon_url: 'https://i.imgur.com/AfFp7pu.png'
                    },
                },]
            }
        ]
    }),
    watch: {
        webhook_url: async function (value) {
            this.updateWebhookState(await checkWebhookValidity(value));
        }
    },
    methods: {
        toggleMobilePreview() {
            this.mobile_preview_open = !this.mobile_preview_open;
            document.body.classList.toggle('overflow-y-hidden');
        },
        setIsOpen() {
            this.isOpen = !this.isOpen;
        },
        createEmptyMessage() {
            this.messages.push({
                username: this.messages[0].username,
                avatar_url: this.messages[0].avatar_url,
                files: [],
                embeds: [],
                components: [
                    {
                        type: 1,
                        components: []
                    }
                ]
            });
        },
        createEmptyEmbed(message) {
            if(message.embeds.length >= 10) return;
            message.embeds.push({
                color: '#F20F20',
                title: '',
                url: '',
                author: {
                    name: '',
                    icon_url: '',
                    url: '',
                },
                description: '',
                thumbnail: {
                    url: '',
                },
                fields: [],
                image: {
                    url: '',
                },
                timestamp: '',
                footer: {
                    text: '',
                    icon_url: '',
                }
            });
        },
        updateWebhookState(webhookInfos) {
            if(!webhookInfos) {
                this.valid_webhook = false;
                this.is_application_webhook = false;
                return;
            };
            for(const message of this.messages) {
                message.username = webhookInfos.name;
                message.avatar_url = webhookInfos.avatar ? `https://cdn.discordapp.com/avatars/${webhookInfos.id}/${webhookInfos.avatar}.png?size=128` : 'https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3';
            }
            this.is_application_webhook = webhookInfos.application_id !== null;
            this.valid_webhook = true;
        },
        sendMessage() {
            sendMessage(this.webhook_url, this.messages)
        },
        load(index, loadIndex) {
            this.messages[index] = (JSON.parse(localStorage.getItem('discord_embed_creator_messages')) || [])[loadIndex] || this.messages[index];
        },
        uploadFile(e, message) {
            message.files = Array.from(e.target.files);
        },
        save(message) {
            if(!this.savename) return;
            const messages = JSON.parse(localStorage.getItem('discord_embed_creator_messages')) || {}
            messages[this.savename] = message
            localStorage.setItem('discord_embed_creator_messages', JSON.stringify(messages));
            this.setIsOpen();
        },
        getSavedMessages() {
            return JSON.parse(localStorage.getItem('discord_embed_creator_messages')) || {};
        },
        loadMessageFromUrl(e) {
            const value = typeof e === 'string' ? e : e.target.value;
            if(!value || (!value.match && !value.match(/^(https:\/\/discord.com\/channels\/\d{18}\/\d{18}\/messages\/\d{18})$/))) return false;
            fetchMessage(value).then(message => {
                this.message = message;
            });
        }
    },
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