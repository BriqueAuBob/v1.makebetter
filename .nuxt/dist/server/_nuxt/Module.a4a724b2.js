import { B as Badges, p as Bots, E as Emojis, q as Embed, c as client } from "../server.mjs";
const modules = {
  discord: {
    color: "#5865F2",
    icon: "discord.svg"
  }
};
const useModule = (module) => {
  return modules[module];
};
const tools = {
  Badges: "Cr\xE9ateur de badges",
  Bots: "R\xE9f\xE9rencement de bots",
  Embed: "Cr\xE9ateur d'embeds",
  Emojis: "R\xE9f\xE9rencement d'emojis"
};
const allCards = {
  badges: Badges,
  bots: Bots,
  emojis: Emojis,
  embed: Embed
};
const useTool = (name) => {
  client.post("statistics", {
    tool: name
  });
};
export {
  allCards as a,
  useTool as b,
  tools as t,
  useModule as u
};
