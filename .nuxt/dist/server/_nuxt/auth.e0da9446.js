import { I as defineNuxtRouteMiddleware } from "../server.mjs";
import "destr";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@vue/server-renderer";
import "axios";
import "@vue/devtools-api";
import "@heroicons/vue/outline/esm/index.js";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const auth = defineNuxtRouteMiddleware((to, from) => {
  return;
});
export {
  auth as default
};
