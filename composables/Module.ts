import { EyeIcon } from "@heroicons/vue/outline/esm/index.js";
import Badges from "~~/components/Tools/Cards/Badges.vue";
import Bots from "~~/components/Tools/Cards/Bots.vue";
import Embed from "~~/components/Tools/Cards/Embed.vue";
import Emojis from "~~/components/Tools/Cards/Emojis.vue";
import axios from "~~/composables/Axios";

const modules = {
  // "general": {
  //     "color": "#11141a",
  //     "icon": EyeIcon,
  // },
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
};

export const allCards = {
  badges: Badges,
  bots: Bots,
  emojis: Emojis,
  embed: Embed,
};

export const useTool = (name) => {
  axios.post("statistics", {
    tool: name,
  });
};
