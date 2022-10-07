<template>
  <div>
    <ToolsHeader color="#0a0a0d">
      <h1 class="mx-auto max-w-lg text-4xl font-extrabold">Editeur Markdown</h1>
      <h2 class="mx-auto mt-4 max-w-lg text-2xl leading-relaxed">
        Ecrit tes textes en Markdown et obtiens un rendu en temps réel.
      </h2>
      <div class="mx-auto mt-12 flex gap-4">
        <NuxtLink to="/tools/" class="mx-auto flex">
          <Button
            class="mx-auto"
            color="white"
            text="Voir d'autres outils"
            :small="true"
          >
            <template v-slot:icon_left>
              <CubeIcon class="mr-3 h-8 w-8" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </ToolsHeader>
    <section class="container mx-auto py-24 px-4">
      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <ToolsStep
            step-id="1"
            name="Plateforme d'écriture"
            description="Le markdown est affiché différement en fonction de la plateforme, il est alors important de choisir au préalable la plateforme sur laquelle tu souhaites écrire."
          >
            <Listbox v-model="selectedPlatform">
              <div class="relative">
                <ListboxButton
                  class="w-full rounded-lg bg-white px-6 py-4 text-left dark:bg-dark-900"
                  >{{
                    selectedPlatform ||
                    "Choisis la plateforme de destination..."
                  }}</ListboxButton
                >
                <ListboxOptions
                  class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-800 sm:text-sm"
                >
                  <ListboxOption
                    v-for="(platform, id) in platforms"
                    :key="id"
                    :value="platform"
                  >
                    <li
                      class="m-2 rounded-lg p-3 font-semibold hover:bg-gray-200 dark:hover:bg-dark-700"
                    >
                      {{ platform }}
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </div>
            </Listbox>
            <TransitionRoot
              :show="selectedPlatform === 'discord'"
              enter="transition-all duration-150 delay-100 ease-in-out"
              enter-from="opacity-0 max-h-0"
              enter-to="opacity-100"
              leave="transition-all duration-150"
              leave-from="opacity-100"
              leave-to="opacity-0  max-h-0"
            >
              <p class="mt-4 text-sm leading-relaxed text-gray-500">
                Le markdown est différent sur la plateforme choisie. Certaines
                fonctionnalités ne sont pas disponible/fonctionnelles.<br />
                En faisant ce choix, tu dois également choisir si tu veux
                envoyer le contenu généré dans un embed ou non puisque certaines
                fonctionnalités ne sont pas disponible en dehors des embeds.
              </p>
              <div class="mt-4 flex justify-between">
                Mettre mon texte dans un embed
                <Toggle v-model="discord_embed" />
              </div>
            </TransitionRoot>
          </ToolsStep>
          <ToolsStep step-id="2" name="Texte">
            <ClientOnly>
              <MdEditor
                :theme="isDarkMode ? 'dark' : 'light'"
                v-model="text"
                language="en-US"
                :preview="false"
                :htmlPreview="false"
                :toolbars="toolbars"
                :onSave="save"
                @onHtmlChanged="htmlChanged"
                :isDiscord="selectedPlatform === 'discord'"
              />
            </ClientOnly>
          </ToolsStep>
        </div>
        <div>
          <div
            class="relative max-h-screen-padding overflow-y-auto whitespace-pre-line rounded-lg bg-white p-8 shadow-sm dark:bg-dark-900 lg:sticky lg:top-12"
          >
            <h2 class="text-2xl font-bold underline">Rendu:</h2>
            <div :class="`md-${isDarkMode ? 'dark' : 'light'}`" class="mt-5">
              <div
                v-if="selectedPlatform === 'discord'"
                v-html="
                  toHTML(text, {
                    discordCallback: {
                      user: (node) => '@user',
                      role: (node) => '@role',
                    },
                    embed: discord_embed,
                  })
                "
              ></div>
              <div
                v-else
                v-html="html"
                class="md-preview md-scrn"
                :class="`${selectedPlatform}-theme`"
              ></div>
            </div>
            <div class="mt-10 flex flex-wrap justify-end gap-4">
              <Button
                color="none"
                text="Copier le markdown"
                :small="true"
                @click="copy"
              >
                <template v-slot:icon_left>
                  <ClipboardIcon class="mr-3 h-8 w-8" />
                </template>
              </Button>
              <Button
                color="lightGray"
                text="Sauvegarder le markdown"
                :small="true"
                @click="save"
              >
                <template v-slot:icon_left>
                  <ArrowDownOnSquareIcon class="mr-3 h-8 w-8" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  CubeIcon,
  ClipboardIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/vue/24/outline/esm/index.js";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import pkg from "discord-markdown";
const { toHTML } = pkg;
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  components: {
    CubeIcon,
    ArrowDownOnSquareIcon,
    ClipboardIcon,
    MdEditor,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    TransitionRoot,
  },
  setup() {
    return { toHTML };
  },
  head: {
    title: "Editeur Markdown",
  },
  computed: {
    isDarkMode() {
      return (
        this.$colorMode.preference === "dark" ||
        (this.$colorMode.preference === "system" &&
          window?.matchMedia("(prefers-color-scheme: dark)")?.matches)
      );
    },
  },
  data: () => ({
    text: "**Bienvenue sur notre outil de rédaction en *markdown* !**\n\nTu peux écrire ton texte et le sauvegarder ou le copier par la suite.",
    html: "",
    discord_embed: true,
    toolbars: [
      "bold",
      "underline",
      "italic",
      "-",
      "title",
      "strikeThrough",
      "sub",
      "sup",
      "quote",
      "unorderedList",
      "orderedList",
      "-",
      "codeRow",
      "code",
      "link",
      "image",
    ],
    platforms: [
      "discord",
      "github",
      "vuepress",
      "mk-cute",
      "smart-blue",
      "cyanosis",
    ],
    selectedPlatform: "",
  }),
  methods: {
    htmlChanged(html) {
      this.html = html;
    },
    copy() {
      navigator.clipboard.writeText(this.text);
      this.$toast.show({ message: "Copié dans le presse-papier !" });
    },
    save() {
      const link = document.createElement("a");
      const blob = new Blob([this.text], { type: "text/plain" });
      link.href = URL.createObjectURL(blob);
      link.download = "markdown.md";
      link.click();
      URL.revokeObjectURL(link.href);
    },
  },
};
</script>

<style>
.md {
  @apply rounded-lg border-dashed;
}

.md-toolbar-wrapper {
  @apply m-2 rounded-lg border border-dashed border-gray-700;
}

.md-footer {
  @apply m-2 rounded-lg border border-dashed border-gray-700;
}

.md-toolbar-wrapper .md-toolbar {
  min-width: 100%;
}

.md-dark {
  --md-bk-color: #16161d;
}

.md-toolbar-wrapper {
  height: auto;
}

.md-toolbar-left {
  flex-wrap: wrap;
}
</style>
