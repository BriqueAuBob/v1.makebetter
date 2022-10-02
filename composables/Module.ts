import { EyeIcon } from "@heroicons/vue/24/outline/esm/index.js";
import Badges from "~~/components/Tools/Cards/Badges.vue";
import Bots from "~~/components/Tools/Cards/Bots.vue";
import Embed from "~~/components/Tools/Cards/Embed.vue";
import Emojis from "~~/components/Tools/Cards/Emojis.vue";
import Markdown from "~/components/Tools/Cards/Markdown.vue";
import axios from "~~/composables/Axios";

const modules = {
  general: {
    color: "#11141a",
    icon: EyeIcon,
  },
  discord: {
    color: "#5865F2",
    icon: "discord.svg",
  },
  // "twitter": {
  //     "color": "#1da1f2",
  //     "icon": "discord.svg",
  // }
};

export const useModule = (module: string) => {
  return modules[module];
};

export const tools = {
  Badges: "Créateur de badges",
  Bots: "Référencement de bots",
  Embed: "Créateur d'embeds",
  Emojis: "Référencement d'emojis",
  Markdown: "Editeur Markdown",
};

export const allCards = {
  badges: Badges,
  bots: Bots,
  emojis: Emojis,
  embed: Embed,
  markdown: Markdown,
};

export const useTool = (name) => {
  axios.post("statistics", {
    tool: name,
  });
};

export const relations = {
  discord: [{ path: "general/markdown", card: Markdown }],
};

export const colors = {
  discord: "#5865F2",
  general: "#0a0a0d",
};
