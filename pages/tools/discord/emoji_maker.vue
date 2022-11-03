<template>
  <div>
    <ToolsHeader>
      <h1 class="mx-auto max-w-lg text-4xl font-extrabold">Emojis Discord</h1>
      <h2 class="mx-auto mt-4 max-w-lg text-2xl leading-relaxed">
        Créé une liste d'emojis Discord à partir d'une image.
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
      <h3 class="text-2xl font-semibold">Tu souhaites créer un grand emoji?</h3>
      <div class="mt-2 text-lg">
        Suis les différentes étapes afin de le créer!
      </div>
      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <ToolsStep step-id="1" name="Type de génération">
            <Card class="grid grid-cols-2 gap-4">
              <div
                class="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border-2 border-dotted border-dark-800 bg-white py-3 px-5 duration-200 ease-in hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-800"
                :class="type === 'text' ? 'bg-gray-300 dark:bg-dark-800' : ''"
                @click="type = 'text'"
              >
                <span class="rounded-sm bg-primary-500 px-3 py-2 text-white"
                  >Administrateur</span
                >
                Texte
              </div>
              <div
                class="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border-2 border-dotted border-dark-800 bg-white py-3 px-5 duration-200 ease-in hover:bg-gray-200 dark:bg-dark-900 dark:hover:bg-dark-800"
                :class="type === 'image' ? 'bg-gray-300 dark:bg-dark-800' : ''"
                @click="type = 'image'"
              >
                <img
                  src="/tools/split_emoji/image_illustration.png"
                  class="w-1/2"
                />
                Image
              </div>
            </Card>
          </ToolsStep>
          <ToolsStep step-id="2" name="Paramètres globaux">
            <Card>
              <div class="text-sm font-semibold">Préfixe des emojis</div>
              <Input class="mt-3" v-model="prefix" />
              <div class="mb-3 mt-6 flex items-center justify-between">
                <div class="text-sm font-semibold">Taille des tronçons</div>
                <span class="font-medium text-gray-500">{{ chunkSize }}</span>
              </div>
              <input
                v-model="chunkSize"
                type="range"
                class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-800"
                min="32"
                max="512"
                step="1"
              />
            </Card>
          </ToolsStep>
          <ToolsStep step-id="3" name="Image/Texte">
            <Card v-if="type === 'image'">
              <div
                class="relative col-span-2 flex cursor-pointer items-center justify-center rounded-md bg-gray-400 bg-opacity-25 p-4 transition duration-200 ease-in hover:bg-gray-300 dark:bg-dark-800 dark:hover:bg-dark-700"
              >
                Upload image
                <input
                  class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
                  type="file"
                  accept="image/*"
                  @change="(e) => uploadFile(e)"
                />
              </div>
            </Card>
            <Card v-else-if="type === 'text'">
              <ToolsDiscordEmbedCreatorCollapseCard
                class="mb-2 rounded-lg bg-gray-200 dark:bg-dark-800"
                name="Presets"
              >
                <div class="flex flex-wrap gap-4">
                  <div
                    v-for="(preset, index) of presets"
                    :key="index"
                    class="flex cursor-pointer flex-col items-center gap-4 rounded-md border-2 border-dark-500 bg-white bg-opacity-25 p-4 shadow-lg duration-200 ease-in hover:bg-opacity-75 dark:bg-dark-700 dark:bg-opacity-25 hover:dark:bg-opacity-75"
                    @click="usePreset(preset)"
                  >
                    <div :style="preset.css">{{ preset.text }}</div>
                    {{ preset.name }}
                  </div>
                </div>
              </ToolsDiscordEmbedCreatorCollapseCard>
              <ToolsDiscordEmbedCreatorCollapseCard
                class="mb-2 rounded-lg bg-gray-200 dark:bg-dark-800"
                name="Paramètres du texte"
              >
                <div class="mb-4 text-sm font-medium">Texte</div>
                <Input v-model="text" />

                <div class="mb-4 mt-6 text-sm font-medium">
                  Police de caractères
                </div>
                <Listbox v-model="fontFamily">
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full cursor-pointer rounded-md bg-white py-4 pl-5 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:bg-dark-700 dark:hover:bg-dark-600 sm:text-sm"
                    >
                      <span class="block truncate">{{ fontFamily }}</span>
                      <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                      >
                        <ChevronDownIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </ListboxButton>

                    <transition
                      leave-active-class="transition duration-100 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-700 sm:text-sm"
                      >
                        <ListboxOption
                          v-slot="{ active, selected }"
                          v-for="(font, index) in fonts"
                          :key="index"
                          :value="font"
                          as="template"
                        >
                          <li
                            :class="[
                              active
                                ? 'bg-primary-100 text-primary-500'
                                : 'text-gray-300',
                              'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]"
                          >
                            <span
                              :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                              ]"
                              >{{ font }}</span
                            >
                            <span
                              v-if="selected"
                              class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"
                            >
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>

                <div class="mb-4 mt-6 text-sm font-medium">Epaisseur</div>
                <Listbox v-model="fontWeight">
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full cursor-pointer rounded-md bg-white py-4 pl-5 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:bg-dark-700 dark:hover:bg-dark-600 sm:text-sm"
                    >
                      <span class="block truncate">{{ fontWeight.name }}</span>
                      <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
                      >
                        <ChevronDownIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </ListboxButton>

                    <transition
                      leave-active-class="transition duration-100 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-700 sm:text-sm"
                      >
                        <ListboxOption
                          v-slot="{ active, selected }"
                          v-for="(weight, index) in weights"
                          :key="index"
                          :value="weight"
                          as="template"
                        >
                          <li
                            :class="[
                              active
                                ? 'bg-primary-100 text-primary-500'
                                : 'text-gray-300',
                              'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]"
                          >
                            <span
                              :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                              ]"
                              >{{ weight.name }}</span
                            >
                            <span
                              v-if="selected"
                              class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"
                            >
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>

                <div class="mb-3 mt-6 flex items-center justify-between">
                  <div class="text-sm font-medium">Taille de la police</div>
                  <span class="font-medium text-gray-500">{{ fontSize }}</span>
                </div>
                <input
                  v-model="fontSize"
                  type="range"
                  class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                  min="20"
                  max="42"
                  step="1"
                />

                <div class="mb-4 mt-6 text-sm font-medium">Couleur</div>
                <ClientOnly>
                  <div class="mt-3 flex">
                    <ColorPicker v-model="secondaryColor"></ColorPicker>
                    <div class="grid grid-cols-10 gap-2">
                      <div
                        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                        v-for="(color, index) in defaultColors"
                        :key="index"
                        :style="`background: ${color};`"
                        @click="secondaryColor = color"
                      >
                        <CheckIcon
                          v-if="secondaryColor == color"
                          class="h-6 w-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div
                      class="flex items-center justify-between text-sm font-medium"
                    >
                      Activer le dégradé
                      <Toggle v-model="gradientText"></Toggle>
                    </div>
                    <div class="relative mt-4 flex">
                      <ColorPicker v-model="gradientTextColor"></ColorPicker>
                      <div class="grid grid-cols-10 gap-2">
                        <div
                          class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                          v-for="(color, index) in defaultColors"
                          :key="index"
                          :style="`background: ${color};`"
                          @click="gradientTextColor = color"
                        >
                          <CheckIcon
                            v-if="gradientTextColor == color"
                            class="h-6 w-6"
                          />
                        </div>
                      </div>

                      <div
                        :class="gradientText && 'pointer-events-none opacity-0'"
                        class="absolute left-0 top-0 h-full w-full bg-gray-200 bg-opacity-75 backdrop-blur-sm duration-200 ease-in dark:bg-dark-800 dark:bg-opacity-75"
                      ></div>
                    </div>
                  </div>
                </ClientOnly>
              </ToolsDiscordEmbedCreatorCollapseCard>

              <ToolsDiscordEmbedCreatorCollapseCard
                class="mb-2 rounded-lg bg-gray-200 dark:bg-dark-800"
                name="Paramètres du fond"
              >
                <div class="mb-3 mt-4 flex items-center justify-between">
                  <div class="text-sm font-medium">Longueur</div>
                  <span class="font-medium text-gray-500">{{ width }}</span>
                </div>
                <input
                  v-model="width"
                  type="range"
                  class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                  min="64"
                  max="512"
                  step="1"
                />

                <div class="mb-3 mt-4 flex items-center justify-between">
                  <div class="text-sm font-medium">Largeur</div>
                  <span class="font-medium text-gray-500">{{ height }}</span>
                </div>
                <input
                  v-model="height"
                  type="range"
                  class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                  min="32"
                  max="512"
                  step="1"
                />

                <div class="mb-3 mt-4 flex items-center justify-between">
                  <div class="text-sm font-medium">Bords arrondis</div>
                  <span class="font-medium text-gray-500">{{
                    borderRadius
                  }}</span>
                </div>
                <input
                  v-model="borderRadius"
                  type="range"
                  class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                  min="0"
                  :max="height / 2"
                  step="1"
                />

                <div class="mt-3 mb-2 text-sm font-medium">Couleur</div>
                <ClientOnly>
                  <div class="flex">
                    <ColorPicker v-model="primaryColor"></ColorPicker>
                    <div class="grid grid-cols-10 gap-2">
                      <div
                        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                        v-for="(color, index) in defaultColors"
                        :key="index"
                        :style="`background: ${color};`"
                        @click="primaryColor = color"
                      >
                        <CheckIcon
                          v-if="primaryColor == color"
                          class="h-6 w-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div
                      class="flex items-center justify-between text-sm font-medium"
                    >
                      Activer le dégradé
                      <Toggle v-model="gradient"></Toggle>
                    </div>
                    <div class="relative mt-4 flex">
                      <ColorPicker v-model="gradientColor"></ColorPicker>
                      <div class="grid grid-cols-10 gap-2">
                        <div
                          class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                          v-for="(color, index) in defaultColors"
                          :key="index"
                          :style="`background: ${color};`"
                          @click="gradientColor = color"
                        >
                          <CheckIcon
                            v-if="gradientColor == color"
                            class="h-6 w-6"
                          />
                        </div>
                      </div>
                      <div
                        :class="gradient && 'pointer-events-none opacity-0'"
                        class="absolute left-0 top-0 h-full w-full bg-gray-200 bg-opacity-75 backdrop-blur-sm duration-200 ease-in dark:bg-dark-800 dark:bg-opacity-75"
                      ></div>
                    </div>
                  </div>
                </ClientOnly>
              </ToolsDiscordEmbedCreatorCollapseCard>
            </Card>
          </ToolsStep>
        </div>
        <div>
          <Card class="relative top-4 lg:sticky">
            <canvas
              ref="image_canvas"
              :width="type === 'text' && width"
              :height="type === 'text' && height"
              class="mx-auto mb-8 max-w-md"
            ></canvas>
            <div
              class="mx-auto flex min-h-[200px] flex-col items-center justify-center gap-px overflow-auto rounded-lg p-8"
              style="background-image: url(/transparent.svg)"
            >
              <div
                class="flex gap-px"
                v-for="(emojis, rowIndex) in rows"
                :key="rowIndex"
              >
                <img
                  v-for="(emoji, index) in emojis"
                  :src="emoji"
                  :key="index"
                  class="w-8 border border-primary-500"
                />
              </div>
            </div>
            <div class="mt-4 font-semibold">Utilisation des emojis</div>
            <Textarea class="mt-4" v-model="emojisList" />
            <Button
              class="mt-8 w-full"
              :centerText="true"
              text="Téléchargement en .zip"
              @click="downloadZip"
            ></Button>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {
  CubeIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline/esm/index.js";
import ColorPicker from "~~/components/ColorPicker.vue";
import JSZip from "jszip";

import { useTool } from "~~/composables/Module";

export default {
  components: {
    ChevronDownIcon,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CubeIcon,
    CheckIcon,
    ColorPicker,
  },
  data: () => ({
    type: "text",
    image: null,
    rows: [],
    emojisList: "",
    chunkSize: 32,
    text: "Administrateur",
    width: 280,
    height: 64,
    borderRadius: 0,

    prefix: "emoji",

    primaryColor: "#f20f20",
    secondaryColor: "#FFFFFF",
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
    gradient: false,
    gradientColor: "#FFFFFF",
    gradientText: false,
    gradientTextColor: "#FFFFFF",

    fonts: [
      "Arial",
      "Arial Black",
      "Comic Sans MS",
      "Courier New",
      "Georgia",
      "Impact",
      "Lucida Console",
      "Lucida Sans Unicode",
      "Palatino Linotype",
      "Poppins",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
    ],
    fontFamily: "Poppins",
    weights: [
      { name: "Thin", value: 100 },
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Bold", value: 700 },
      { name: "Black", value: 900 },
    ],
    fontWeight: { name: "Bold", value: 700 },

    fontSize: 24,

    presets: [
      {
        name: "Bot Discord",
        text: "BOT",
        css: "background: #7289DA; color: #FFFFFF; font-weight: 700; border-radius: 4px; padding: 4px 8px;",
        code: (s) => {
          s.text = "BOT";
          s.primaryColor = "#7289DA";
          s.gradient = false;
          s.secondaryColor = "#FFFFFF";
          s.fontWeight = { name: "Bold", value: 700 };
          s.borderRadius = 4;
          s.width = 72;
          s.height = 44;
          s.fontSize = 24;
          s.chunkSize = 44;
          s.borderRadius = 4;
        },
      },
      {
        name: "Administrateur",
        text: "Administrateur",
        css: "background: #f20f20; color: #FFFFFF; font-weight: 700; border-radius: 4px; padding: 4px 8px;",
        code: (s) => {
          s.text = "Administrateur";
          s.gradient = false;
          s.primaryColor = "#f20f20";
          s.secondaryColor = "#FFFFFF";
          s.fontWeight = { name: "Bold", value: 700 };
          s.borderRadius = 4;
          s.width = 230;
          s.height = 44;
          s.fontSize = 24;
          s.chunkSize = 44;
          s.borderRadius = 4;
        },
      },
      {
        name: "Modérateur",
        text: "Modérateur",
        css: "background: #004be0; color: #FFFFFF; font-weight: 700; border-radius: 4px; padding: 4px 8px;",
        code: (s) => {
          s.text = "Modérateur";
          s.gradient = false;
          s.primaryColor = "#004be0";
          s.secondaryColor = "#FFFFFF";
          s.fontWeight = { name: "Bold", value: 700 };
          s.borderRadius = 4;
          s.width = 210;
          s.height = 44;
          s.fontSize = 24;
          s.chunkSize = 44;
          s.borderRadius = 4;
        },
      },
      {
        name: "Développeur",
        text: "Développeur",
        css: "border-radius: 32px; background: linear-gradient(90deg, #6342f5, #9642f5); color: #FFFFFF; font-weight: 700; padding: 4px 8px;",
        code: (s) => {
          s.text = "Développeur";
          s.primaryColor = "#6342f5";
          s.gradient = true;
          s.gradientColor = "#9642f5";
          s.secondaryColor = "#FFFFFF";
          s.fontWeight = { name: "Bold", value: 700 };
          s.borderRadius = 4;
          s.width = 210;
          s.height = 44;
          s.fontSize = 24;
          s.chunkSize = 44;
          s.borderRadius = s.height / 2;
        },
      },
    ],
  }),
  watch: {
    chunkSize() {
      this.generateEmojis();
    },
    text() {
      this.updateText();
    },
    width() {
      setTimeout(this.updateText, 50);
    },
    height() {
      setTimeout(this.updateText, 50);
    },
    primaryColor() {
      this.updateText();
    },
    secondaryColor() {
      this.updateText();
    },
    borderRadius() {
      this.updateText();
    },
    gradient() {
      this.updateText();
    },
    gradientColor() {
      this.updateText();
    },
    gradientText() {
      this.updateText();
    },
    gradientTextColor() {
      this.updateText();
    },
    fontWeight() {
      this.updateText();
    },
    fontFamily() {
      this.updateText();
    },
    fontSize() {
      this.updateText();
    },
    prefix() {
      this.generateMessage();
    },
    type() {
      if (this.type === "text") {
        setTimeout(this.updateText, 50);
      }
    },
  },
  mounted() {
    this.usePreset(this.presets[1]);
    this.updateText();
  },
  methods: {
    usePreset(preset) {
      preset.code(this);
    },
    generateMessage() {
      const rows = this.rows;
      this.emojisList = "";
      let id = 0;
      for (const row of rows) {
        this.emojisList += this.emojisList === "" ? "" : "\n";
        for (const emoji of row) {
          this.emojisList += `:${this.prefix}_${id}:`;
          id++;
        }
      }
    },
    updateText() {
      const canvas = this.$refs.image_canvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      window.devicePixelRatio = 2;
      // create rect
      if (this.gradient) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", this.primaryColor);
        gradient.addColorStop("1.0", this.gradientColor);
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = this.primaryColor;
      }
      ctx.beginPath();
      ctx.roundRect(0, 0, canvas.width, canvas.height, this.borderRadius);
      ctx.fill();

      // create text
      if (this.gradientText) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", this.secondaryColor);
        gradient.addColorStop("1.0", this.gradientTextColor);
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = this.secondaryColor;
      }
      ctx.font =
        this.fontWeight.value + " " + this.fontSize + "px " + this.fontFamily;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, canvas.width / 2, canvas.height / 2 + 2);

      // generate emojis
      this.image = canvas.toDataURL();
      this.generateEmojis();
    },
    uploadFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result;
        this.drawImage();
      };
    },
    drawImage() {
      const image = new Image();
      image.src = this.image;
      image.onload = () => {
        const canvas = this.$refs.image_canvas;
        const ctx = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        this.generateEmojis();
      };
    },
    async generateEmojis() {
      const chunkSize = Number(this.chunkSize);
      const canvas = this.$refs.image_canvas;
      const emojis = [];
      for (let y = 0; y < canvas.height; y += chunkSize) {
        const row = [];
        for (let x = 0; x < canvas.width; x += chunkSize) {
          const emojiCanvas = document.createElement("canvas");
          const ctx = emojiCanvas.getContext("2d");
          emojiCanvas.width = chunkSize;
          emojiCanvas.height = chunkSize;
          ctx.drawImage(
            canvas,
            x,
            y,
            chunkSize,
            chunkSize,
            0,
            0,
            chunkSize,
            chunkSize
          );

          row.push(emojiCanvas.toDataURL());
        }
        emojis.push(row);
      }
      this.rows = emojis;
      this.generateMessage();
    },
    downloadZip() {
      const zip = new JSZip();
      const folder = zip.folder("emojis");
      let count = 0;
      this.rows.forEach((row, y) => {
        row.forEach((emoji, x) => {
          const image = emoji.split(",")[1];
          folder.file(`${this.prefix}_${count}.png`, image, { base64: true });
          count++;
        });
      });
      zip.generateAsync({ type: "base64" }).then((content) => {
        window.location = "data:application/zip;base64," + content;
      });

      useTool("emoji_maker");
    },
  },
};
</script>
