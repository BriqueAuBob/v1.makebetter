import { _ as _export_sfc, h as useHead, a as axios2, v as vue_cjs_prod, c as __nuxt_component_1, b as __nuxt_component_4, d as __nuxt_component_0 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "@vue/server-renderer";
import { _ as _imports_0 } from "./discord.6d29de38.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "h3";
import "defu";
import "axios";
import "@vue/devtools-api";
import "@heroicons/vue/outline/esm/index.js";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _imports_1 = "" + globalThis.__publicAssetsURL("characters/red_pink_group.png");
const _sfc_main = {
  setup() {
    useHead({
      title: "Authentification"
    });
  },
  methods: {
    async login() {
      const { data } = await axios2.get("/auth/oauth2/discord");
      window.location.href = data.redirect;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1;
  const _component_Input = __nuxt_component_4;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "grid min-h-screen md:grid-cols-4 lg:grid-cols-5" }, _attrs))}><div class="container col-span-3 mx-auto flex max-w-xl flex-col items-center justify-center gap-8 px-4 py-48 md:col-span-3 lg:col-span-2 lg:px-16"><div class="w-full"><h1 class="text-xl font-semibold">Authentification</h1><h2 class="text-md mt-1 font-medium"> Tu peux te connecter via diff\xE9rentes m\xE9thodes ! </h2></div><div class="flex w-full flex-col gap-4">`);
  _push(ssrRenderComponent(_component_Button, {
    color: "transparent",
    class: "w-full border-2 border-dark-700 hover:border-dark-600 dark:text-white",
    centerText: true,
    text: "Connexion via Discord",
    onClick: $options.login
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Discord" class="mr-4 h-6 w-6"${_scopeId}>`);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            src: _imports_0,
            alt: "Discord",
            class: "mr-4 h-6 w-6"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    color: "transparent",
    class: "w-full border-2 border-dark-700 blur-sm hover:border-dark-600 dark:text-white",
    centerText: true,
    text: "Connexion via Google"
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2)
        ;
      else {
        return [];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full"><div class="relative flex items-center"><div class="flex-grow border-t border-dark-700"></div><span class="mx-4 flex-shrink text-dark-700">or</span><div class="flex-grow border-t border-dark-700"></div></div></div><div class="flex w-full flex-col gap-6 blur-sm">`);
  _push(ssrRenderComponent(_component_Input, { placeholder: "Entrez votre email..." }, null, _parent));
  _push(ssrRenderComponent(_component_Input, { placeholder: "Entrez votre mot de passe..." }, null, _parent));
  _push(ssrRenderComponent(_component_Button, {
    class: "w-full",
    disabled: true,
    centerText: true,
    text: "Connexion"
  }, null, _parent));
  _push(`<div class="w-full">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "mt-3 block font-medium text-primary-500 underline blur-sm"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Je n&#39;ai pas encore de compte`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Je n'ai pas encore de compte")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="relative bg-primary-500 lg:col-span-3"><img${ssrRenderAttr("src", _imports_1)} class="absolute left-1/2 bottom-0 w-3/4 -translate-x-1/2" alt="Group characters"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authentification/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
