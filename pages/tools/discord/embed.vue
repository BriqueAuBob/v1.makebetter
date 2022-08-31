<template>
  <div>
    <ToolsHeader>
      <h1 class="mx-auto max-w-lg text-4xl font-extrabold">Embed Discord</h1>
      <h2 class="mx-auto mt-4 max-w-lg text-2xl leading-relaxed">
        Crée et envoie tes embeds à ton serveur avec cet outil!
      </h2>
      <div class="mx-auto mt-12 flex gap-4">
        <NuxtLink to="/tools/discord" class="w-full">
          <Button
            class="mx-auto"
            color="white"
            text="Voir d'autres outils Discord"
            :small="true"
          >
            <template v-slot:icon_left>
              <CubeIcon class="mr-3 h-8 w-8" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </ToolsHeader>
    <section class="container mx-auto gap-8 py-24 px-4">
      <h3 class="text-2xl font-semibold">
        Tu souhaites envoyer un embed sur ton serveur?
      </h3>
      <div class="mt-2 text-lg">
        Suis les différentes étapes afin de l’envoyer!
      </div>
      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <ToolsDiscordEmbedCreatorStep
            step-id="1"
            name="Webhook URL"
            description="Pour trouver l’URL du webhook, rends toi sur Discord dans les paramètres de ton serveur. Rends toi ensuite dans l’onglet “Integrations” et clique sur “Webhooks”."
          >
            <Input
              :big="true"
              placeholder="https://discord.com/webhooks/id/token"
              v-model="webhook_url"
            />
          </ToolsDiscordEmbedCreatorStep>
          <div class="divide-y">
            <ToolsDiscordEmbedCreatorStep
              v-for="(message, msgIndex) of messages"
              :key="msgIndex"
              :step-id="msgIndex + 2"
              :name="`Création du message n°${msgIndex + 1}`"
              :big-padding="true"
            >
              <template #bin>
                <button
                  @click="
                    () => {
                      messages.splice(msgIndex, 1);
                    }
                  "
                  class="p-2"
                >
                  <TrashIcon class="h-6 w-6" />
                </button>
              </template>
              <div>
                <Menu as="div" class="relative inline-block text-left">
                  <MenuButton
                    class="flex cursor-pointer items-center gap-6 rounded-xl bg-white p-8 shadow-lg duration-200 ease-in hover:-translate-y-1 hover:shadow-xl dark:bg-dark-800 dark:hover:bg-dark-700"
                  >
                    <UploadIcon class="h-8 w-8" />
                    <div class="flex flex-col gap-2 text-left">
                      <div class="text-md font-semibold">
                        Charger un message
                      </div>
                      <div class="text-sm">
                        Vous avez la possibilité de sauvegarder votre message
                        après l'avoir configuré afin de pouvoir le récupérer
                        plus tard ici.
                      </div>
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
                      class="absolute left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-800"
                    >
                      <div class="flex flex-col gap-1 p-2">
                        <div>
                          <Input
                            placeholder="URL du message..."
                            @change="loadMessageFromUrl"
                          />
                        </div>
                        <div class="w-full">
                          <div class="relative flex items-center">
                            <div
                              class="flex-grow border-t border-dark-700"
                            ></div>
                            <span class="mx-4 flex-shrink text-dark-700"
                              >OU</span
                            >
                            <div
                              class="flex-grow border-t border-dark-700"
                            ></div>
                          </div>
                        </div>
                        <MenuItem
                          v-slot="{ active }"
                          v-for="(message, index) in getSavedMessages()"
                          :key="index"
                        >
                          <button
                            :class="[
                              active
                                ? 'bg-blurple text-white'
                                : 'text-gray-900 dark:text-white',
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
              <div class="my-12 w-full">
                <div class="relative flex items-center">
                  <div class="flex-grow border-t border-dark-700"></div>
                  <span class="mx-4 flex-shrink text-dark-700">OU</span>
                  <div class="flex-grow border-t border-dark-700"></div>
                </div>
              </div>
              <ToolsDiscordEmbedCreatorStep
                :step-id="msgIndex + 2 + '.1'"
                name="Auteur du message"
                class="pt-0"
              >
                <Input
                  placeholder="Nom de l'auteur..."
                  v-model="message.username"
                />
                <Input
                  class="mt-3"
                  placeholder="URL de l'avatar de l'auteur..."
                  v-model="message.avatar_url"
                />
              </ToolsDiscordEmbedCreatorStep>
              <ToolsDiscordEmbedCreatorStep
                :step-id="msgIndex + 2 + '.2'"
                name="Contenu du message"
              >
                <Textarea
                  placeholder="Contenu du message..."
                  v-model="message.content"
                />
              </ToolsDiscordEmbedCreatorStep>
              <ToolsDiscordEmbedCreatorStep
                :step-id="msgIndex + 2 + '.3'"
                name="Fichiers attachés au message"
              >
                <div
                  class="relative shadow-sm duration-200 ease-in hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    class="flex w-full items-center gap-2 rounded-md border-2 border-dashed border-dark-400 bg-white p-6 text-sm font-semibold shadow-lg duration-200 ease-in focus:outline-none dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300"
                  >
                    <UploadIcon class="h-8 w-8" />
                    <span class="ml-2">{{
                      message.files?.length > 0
                        ? `${message.files.length} fichiers attachés`
                        : "Ajouter un fichier"
                    }}</span>
                  </div>
                  <input
                    class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
                    type="file"
                    multiple
                    @input="(e) => uploadFile(e, message)"
                  />
                </div>
                <div
                  v-if="message.files"
                  class="mt-4 flex flex-wrap items-center gap-3"
                >
                  <div
                    v-for="(file, index) of message.files"
                    :key="index"
                    class="flex"
                  >
                    <div class="relative">
                      <ToolsDiscordEmbedCreatorAttachmentsImage
                        v-if="
                          file.type.startsWith('image') &&
                          file.type !== 'image/svg+xml'
                        "
                        class="h-24 w-24 rounded-lg object-cover"
                        :file="file"
                      />
                      <ToolsDiscordEmbedCreatorAttachmentsFile
                        v-else
                        :file="file"
                      />
                      <div
                        class="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-[4px] bg-transparent bg-black opacity-0 duration-200 ease-in hover:opacity-75"
                        @click="message.files.splice(index, 1)"
                      >
                        <TrashIcon class="h-12 w-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </ToolsDiscordEmbedCreatorStep>
              <ToolsDiscordEmbedCreatorStep
                :step-id="msgIndex + 2 + '.4'"
                name="Embeds"
              >
                <div class="flex flex-col gap-4">
                  <ToolsDiscordEmbedCreatorCollapseCard
                    class="rounded-l-md rounded-r-lg border-l-4 bg-white shadow-xl dark:bg-dark-800"
                    v-for="(embed, id) in message.embeds"
                    :key="id"
                    :name="`Embed n°${id + 1}`"
                    :trash="() => message.embeds.splice(id, 1)"
                    :style="`border-color: ${embed.color}`"
                  >
                    <div class="flex flex-col gap-4">
                      <ToolsDiscordEmbedCreatorCollapseCard
                        class="rounded-lg bg-gray-100 dark:bg-dark-700"
                        name="Auteur"
                      >
                        <Input
                          placeholder="Nom de l'auteur..."
                          v-model="embed.author.name"
                        />
                        <Input
                          class="mt-3"
                          placeholder="URL de l'avatar de l'auteur..."
                          v-model="embed.author.icon_url"
                        />
                        <Input
                          class="mt-3"
                          placeholder="URL de l'auteur..."
                          v-model="embed.author.url"
                        />
                      </ToolsDiscordEmbedCreatorCollapseCard>
                      <ToolsDiscordEmbedCreatorCollapseCard
                        class="rounded-lg bg-gray-100 dark:bg-dark-700"
                        name="Corps de l'embed"
                      >
                        <Input placeholder="Titre..." v-model="embed.title" />
                        <Textarea
                          class="mt-3"
                          placeholder="Description..."
                          v-model="embed.description"
                        />
                        <Input
                          class="mt-3"
                          placeholder="URL..."
                          v-model="embed.url"
                        />
                        <div class="mt-3 flex">
                          <ClientOnly>
                            <ColorPicker
                              v-model:pureColor="embed.color"
                              :disableAlpha="true"
                              shape="circle"
                              pickerType="chrome"
                              format="hex"
                            ></ColorPicker>
                            <div class="grid grid-cols-10 gap-2">
                              <div
                                class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                                v-for="(color, index) in defaultColors"
                                :key="index"
                                :style="`background: ${color};`"
                                @click="embed.color = color"
                              >
                                <CheckIcon
                                  v-if="embed.color == color"
                                  class="h-6 w-6"
                                />
                              </div>
                            </div>
                          </ClientOnly>
                        </div>
                      </ToolsDiscordEmbedCreatorCollapseCard>
                      <ToolsDiscordEmbedCreatorCollapseCard
                        class="rounded-lg bg-gray-100 dark:bg-dark-700"
                        name="Fields"
                      >
                        <ToolsDiscordEmbedCreatorCollapseCard
                          v-for="(field, id) in embed.fields"
                          :key="id"
                          class="mb-2 rounded-lg bg-gray-200 dark:bg-dark-600"
                          :name="`Field n°${id + 1}`"
                          :trash="() => embed.fields.splice(id, 1)"
                        >
                          <Input placeholder="Titre..." v-model="field.name" />
                          <Input
                            class="mt-3 mb-3"
                            placeholder="Valeur..."
                            v-model="field.value"
                          />
                          <Toggle v-model="field.inline" />
                        </ToolsDiscordEmbedCreatorCollapseCard>
                        <Button
                          class="mx-auto mt-8 shadow-none"
                          color="blurple"
                          :text="`Ajouter un field (${embed.fields?.length}/25)`"
                          @click="
                            embed.fields.length < 25 && embed.fields.push({})
                          "
                        />
                      </ToolsDiscordEmbedCreatorCollapseCard>
                      <ToolsDiscordEmbedCreatorCollapseCard
                        class="rounded-lg bg-gray-100 dark:bg-dark-700"
                        name="Images"
                      >
                        <Input
                          placeholder="Image de couverture..."
                          v-model="embed.thumbnail.url"
                        />
                        <div class="mt-3 flex gap-4">
                          <Input
                            class="w-full"
                            placeholder="Image..."
                            v-model="embed.image.url"
                          />
                          <Button
                            class="text-xs font-normal"
                            color="transparent"
                            text="Réduire la taille de l'embed"
                            :small="true"
                            @click="
                              embed.image.url =
                                'https://i.imgur.com/kdJejsd.png'
                            "
                            style="padding: 0 !important"
                          />
                        </div>
                      </ToolsDiscordEmbedCreatorCollapseCard>
                      <ToolsDiscordEmbedCreatorCollapseCard
                        class="rounded-lg bg-gray-100 dark:bg-dark-700"
                        name="Footer"
                      >
                        <Input
                          placeholder="Texte..."
                          v-model="embed.footer.text"
                        />
                        <Input
                          class="mt-3"
                          placeholder="URL de l'icone..."
                          v-model="embed.footer.icon_url"
                        />
                        <Input
                          class="mt-3"
                          placeholder="Timestamp..."
                          v-model="embed.timestamp"
                        />
                      </ToolsDiscordEmbedCreatorCollapseCard>
                    </div>
                  </ToolsDiscordEmbedCreatorCollapseCard>
                </div>
                <Button
                  class="mx-auto mt-8"
                  color="blurple"
                  :text="`Ajouter un embed (${message.embeds?.length}/10)`"
                  @click="
                    message.embeds.length < 10 && createEmptyEmbed(message)
                  "
                />
              </ToolsDiscordEmbedCreatorStep>
              <ToolsDiscordEmbedCreatorStep
                :step-id="msgIndex + 2 + '.5'"
                name="Boutons"
                class="relative"
              >
                <div>
                  <div class="flex flex-col gap-4">
                    <ToolsDiscordEmbedCreatorCollapseCard
                      class="rounded-l-md rounded-r-lg bg-white shadow-xl dark:bg-dark-700"
                      v-for="(button, id) in message?.components[0]?.components"
                      :key="id"
                      :name="`Bouton n°${id + 1}`"
                      :trash="
                        () =>
                          message?.components[0]?.components?.splice(index, 1)
                      "
                    >
                      <Input
                        placeholder="Texte du bouton..."
                        v-model="button.label"
                      />
                      <Input
                        class="mt-3"
                        placeholder="URL du bouton..."
                        v-model="button.url"
                      />
                    </ToolsDiscordEmbedCreatorCollapseCard>
                  </div>
                  <Button
                    class="mx-auto mt-8"
                    color="blurple"
                    :text="`Ajouter un bouton (${message.components[0].components?.length}/5)`"
                    @click="
                      message?.components[0]?.components?.length < 5 &&
                        message.components[0].components.push({
                          type: 2,
                          style: 5,
                          label: '',
                          url: '',
                        })
                    "
                  />
                </div>
                <div
                  v-if="!is_application_webhook"
                  class="absolute top-0 flex h-full w-full items-center justify-center bg-background bg-opacity-95 dark:bg-dark-950 dark:bg-opacity-95"
                >
                  <div class="text-md font-semibold">
                    Tu dois utiliser un webhook créé par un bot pour ajouter des
                    boutons.
                  </div>
                </div>
              </ToolsDiscordEmbedCreatorStep>
              <ToolsDiscordEmbedCreatorStep
                :step-id="msgIndex + 2 + '.6'"
                name="Finaliser le message"
              >
                <div class="flex justify-center gap-4">
                  <Button
                    class="mt-8"
                    color="primary"
                    text="Voir le JSON"
                    @click="modalCode = true"
                  />
                  <TransitionRoot appear :show="modalCode" as="template">
                    <Dialog
                      as="div"
                      @close="modalCode = false"
                      class="relative z-10"
                    >
                      <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                      >
                        <div
                          class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        />
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
                              class="max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900"
                            >
                              <DialogTitle
                                as="h3"
                                class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                              >
                                JSON du message
                              </DialogTitle>
                              <pre
                                class="my-4 max-h-96 overflow-auto bg-dark-700"
                              ><code>{{ message }}</code></pre>
                              <div
                                class="mt-4 flex items-center justify-end gap-2"
                              >
                                <Button
                                  color="transparent"
                                  text="Fermer"
                                  @click="modalCode = false"
                                />
                                <Button
                                  color="primary"
                                  text="Copier"
                                  @click="setClipboardText(message)"
                                />
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>

                  <Button
                    class="mt-8"
                    color="secondary"
                    text="Sauvegarder ce message"
                    @click="setIsOpen()"
                  />
                  <TransitionRoot appear :show="isOpen" as="template">
                    <Dialog
                      as="div"
                      @close="setIsOpen(false)"
                      class="relative z-10"
                    >
                      <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                      >
                        <div
                          class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        />
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
                              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900"
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
                                  <Input
                                    class="mt-2"
                                    placeholder="Nom de la sauvegarde..."
                                    v-model="savename"
                                  />
                                </p>
                              </div>

                              <div
                                class="mt-4 flex items-center justify-end gap-2"
                              >
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
          <ToolsDiscordEmbedCreatorStep
            step-id="finale"
            name="Envoie tes messages !"
          >
            <div class="mt-8 flex items-center justify-center gap-2">
              <Button
                color="white"
                text="Ajouter un message"
                @click="createEmptyMessage"
              />
              <Button color="blurple" text="Envoyer" @click="sendMessage" />
            </div>
          </ToolsDiscordEmbedCreatorStep>
        </div>
        <div>
          <div
            class="relative hidden w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:flex lg:max-h-screen-padding lg:rounded-2xl"
          >
            <ToolsDiscordEmbedCreatorFakeMessage
              v-for="(message, index) of messages"
              :key="index"
              :data="message"
            />
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
              <div
                class="fixed top-0 left-0 z-10 h-screen w-full lg:relative lg:block"
              >
                <div
                  class="relative flex h-screen w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:max-h-screen-padding lg:rounded-2xl"
                >
                  <div class="right-8 flex justify-end lg:hidden">
                    <button
                      class="group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 opacity-50 focus:bg-white focus:text-white dark:border-white"
                      @click="toggleMobilePreview"
                    >
                      <svg
                        class="h-5 w-5 fill-black group-focus:fill-black dark:fill-white"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <ToolsDiscordEmbedCreatorFakeMessage
                    v-for="(message, index) of messages"
                    :key="index"
                    :data="message"
                  />
                </div>
              </div>
            </TransitionChild>
          </TransitionRoot>
          <div
            class="fixed bottom-8 right-12 flex h-24 w-24 items-center justify-center rounded-full bg-dark-800 duration-200 ease-in hover:scale-125 hover:bg-dark-700 lg:hidden"
            @click="toggleMobilePreview"
          >
            <EyeIcon class="h-12 w-12" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import {
  UploadIcon,
  CubeIcon,
  TrashIcon,
  EyeIcon,
  CheckIcon,
} from "@heroicons/vue/outline/esm/index.js";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import {
  sendMessage,
  checkWebhookValidity,
  fetchMessage,
} from "~~/composables/DiscordWebhook";
import axios from "axios";
import axios2 from "@/composables/Axios";

export default {
  components: {
    CheckIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    UploadIcon,
    CubeIcon,
    ColorPicker,
    TrashIcon,
    EyeIcon,
  },
  head: {
    title: "Créateur d'embed",
  },
  data: () => ({
    is_application_webhook: false,
    valid_webhook: false,
    isOpen: false,
    modalCode: false,
    webhook_url: "",
    savename: "",
    mobile_preview_open: false,
    defaultColors: [
      "#1ABC9C",
      "#2ECC71",
      "#3498DB",
      "#9B59B6",
      "#E91E63",
      "#F1C40F",
      "#E67E22",
      "#E74C3C",
      "#95A5A6",
      "#607D8B",
      "#11806A",
      "#1F8B4C",
      "#206694",
      "#71368A",
      "#AD1457",
      "#C27C0E",
      "#A84300",
      "#992D22",
      "#979C9F",
      "#546E7A",
    ],
    messages: [
      {
        username: "UMaestro",
        avatar_url:
          "https://cdn.discordapp.com/avatars/988400676537249832/76f7a68e7c0da0fc8aebc7f0c08e5309.png?size=256",
        content: "",
        files: [],
        components: [
          {
            type: 1,
            components: [],
          },
        ],
        embeds: [
          {
            color: "#2F3136",
            title: "",
            url: "",
            author: {
              name: "Créateur d'embeds & leur rédaction!",
              icon_url:
                "https://cdn.discordapp.com/emojis/979107826578370680.webp?size=96&quality=lossless",
            },
            description:
              "<:um_item1:985493065504542740> Cet outil a été pensé pour vous, notamment pour les créateurs de serveurs. Le rédacteur d'embeds vous permet d'illustrer vos textes en les mettant en valeur, grâce à votre charte graphique qui peut y etre ajoutée (Images & Emojis) ou encore avec des Markdowns & Liens. \n\n <:um_item1:985493065504542740> Une complète personnalisation est possible. Avec cet outils, plusieurs nouvelles fonctionnalités sont disponibles, dont la possibilités de mettre plusieurs images et ajuster la taille de votre embed grace aux barres de séparations disponibles selon les couleurs de vos choix !\n\n<:um_item1:985493065504542740>  Vous avez le choix de customiser la dispositions de vos textes dans les embeds grâce aux fields, ils peuvent etre tous allignés et/ou superposés. \n\n<:um_item1:985493065504542740> Il existe aussi 2 parties qui font office d'introductions à vos textes : Auteur & Footer. L'auteur permet d'introduire un nom & une image pour réveler l'identité du rédacteur. Et le footer est utile pour signer vos créations !\n\n<:icons_dwhite:875710295253848144> En choisisant cet outil, vous avez la possibilité d'enregister, supprimer, combiner et retrouver vos messages ! Le code de l'embed vous est aussi fournit.\n\n<:icons_dblurple:875710295258046535> Enfin, la partie nécessaire à son envoie sur Discord est l'intrégration Webhook | Intégrations que vous retrouverez dans les paramètres d'un salon et dans les paramètres de serveur.\n\nBonne utilisation à vous ! <:copinou_coucou:878308800682147850>",
            thumbnail: {},
            fields: [],
            image: {
              url: "https://i.imgur.com/kdJejsd.png",
            },
            timestamp: "",
            footer: {},
          },
        ],
      },
    ],
  }),
  watch: {
    webhook_url: async function (value) {
      this.updateWebhookState(await checkWebhookValidity(value));
    },
  },
  async mounted() {
    const response = await axios.get("/umaestro_banner.png", {
      responseType: "blob",
    });
    this.messages[0].files[0] = new File(
      [new Blob([response.data])],
      "welcome.png",
      {
        type: "image/png",
      }
    );
  },
  methods: {
    toggleMobilePreview() {
      this.mobile_preview_open = !this.mobile_preview_open;
      document.body.classList.toggle("overflow-y-hidden");
    },
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },
    createEmptyMessage() {
      this.messages.push({
        username: this.messages[0] ? this.messages[0].username : "UMaestro",
        avatar_url: this.messages[0]
          ? this.messages[0].avatar_url
          : "https://cdn.discordapp.com/avatars/995327553143312474/ac9586ba3f3b7a32428bbc751266a94e.webp?size=128",
        files: [],
        embeds: [],
        components: [
          {
            type: 1,
            components: [],
          },
        ],
      });
    },
    createEmptyEmbed(message) {
      if (message.embeds.length >= 10) return;
      message.embeds.push({
        color: "#F20F20",
        title: "",
        url: "",
        author: {
          name: "",
          icon_url: "",
          url: "",
        },
        description: "",
        thumbnail: {
          url: "",
        },
        fields: [],
        image: {
          url: "",
        },
        timestamp: "",
        footer: {
          text: "",
          icon_url: "",
        },
      });
    },
    updateWebhookState(webhookInfos) {
      console.log("webhooksinfos", webhookInfos);
      if (!webhookInfos) {
        this.valid_webhook = false;
        this.is_application_webhook = false;
        return;
      }
      for (const message of this.messages) {
        message.username = webhookInfos.name;
        message.avatar_url = webhookInfos.avatar
          ? `https://cdn.discordapp.com/avatars/${webhookInfos.id}/${webhookInfos.avatar}.png?size=128`
          : "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3";
      }
      this.is_application_webhook = webhookInfos.application_id !== null;
      this.valid_webhook = true;
    },
    sendMessage() {
      sendMessage(this.webhook_url, this.messages);

      axios2.post(
        "statistics",
        {
          tool: "discord_embed",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
    },
    load(index, loadIndex) {
      this.messages[index] =
        (JSON.parse(localStorage.getItem("discord_embed_creator_messages")) ||
          [])[loadIndex] || this.messages[index];
    },
    uploadFile(e, message) {
      message.files = Array.from(e.target.files);
      console.log(message.files);
    },
    save(message) {
      if (!this.savename) return;
      const messageCopy = { ...message };
      messageCopy.files = [];
      const messages =
        JSON.parse(localStorage.getItem("discord_embed_creator_messages")) ||
        {};
      messages[this.savename] = messageCopy;
      localStorage.setItem(
        "discord_embed_creator_messages",
        JSON.stringify(messages)
      );
      this.setIsOpen();
    },
    getSavedMessages() {
      return (
        JSON.parse(localStorage.getItem("discord_embed_creator_messages")) || {}
      );
    },
    loadMessageFromUrl(e) {
      const value = typeof e === "string" ? e : e.target.value;
      if (
        !value ||
        (!value.match &&
          !value.match(
            /^(https:\/\/discord.com\/channels\/\d{18}\/\d{18}\/messages\/\d{18})$/
          ))
      )
        return false;
      fetchMessage(value).then((message) => {
        this.message = message;
      });
    },
    setClipboardText(message) {
      navigator.clipboard.writeText(JSON.stringify(message));
    },
  },
};
</script>

<style>
.vc-color-wrap {
  width: 64px !important;
  height: 64px !important;
  border-radius: 0.375rem !important;
}

.vc-hue-slider__bar {
  background: -webkit-linear-gradient(
    left,
    red 0%,
    yellow 16.66%,
    lime 33.33%,
    aqua 50%,
    blue 66.66%,
    fuchsia 83.33%,
    red 100%
  );
}

.vc-chrome-colorPicker {
  background-color: transparent !important;
}

.vc-chrome-colorPicker-body {
  background-color: transparent !important;
}

.dark .vc-colorpicker {
  background: #36393f;
}
</style>
