import { _ as _export_sfc, u as useHead, e as axios, v as vue_cjs_prod, f as __nuxt_component_0$6, g as __nuxt_component_4$2, d as __nuxt_component_1$2 } from './server.mjs';
import { _ as _imports_0$1 } from './red_pink_group.82ff82e0.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import 'axios';
import '@heroicons/vue/outline/esm/index.js';
import 'discord-markdown';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';

const _imports_0 = "" + globalThis.__publicAssetsURL("icons/discord.svg");
const _sfc_main = {
  setup() {
    useHead({
      title: "Authentification"
    });
  },
  methods: {
    async login() {
      const { data } = await axios.get("/auth/oauth2/discord");
      window.location.href = data.redirect;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$6;
  const _component_Input = __nuxt_component_4$2;
  const _component_Button = __nuxt_component_1$2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "min-h-screen grid md:grid-cols-4 lg:grid-cols-5" }, _attrs))}><div class="col-span-3 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center gap-8 container mx-auto px-4 lg:px-16 max-w-xl py-48"><div class="w-full"><h1 class="font-semibold text-xl">Authentification</h1><h2 class="font-medium text-md mt-1">Tu peux te connecter via diff\xE9rentes m\xE9thodes !</h2>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "block font-medium text-primary-400 mt-3 underline blur-sm"
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
  _push(`</div><div class="w-full flex flex-col gap-6 blur-sm">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, { placeholder: "Entrez votre email..." }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, { placeholder: "Entrez votre mot de passe..." }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "w-full",
    disabled: true,
    centerText: true,
    text: "Connexion"
  }, null, _parent));
  _push(`</div><div class="w-full"><div class="relative flex items-center"><div class="flex-grow border-t border-dark-700"></div><span class="flex-shrink mx-4 text-dark-700">or</span><div class="flex-grow border-t border-dark-700"></div></div></div><div class="w-full flex flex-col gap-4">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    color: "transparent",
    class: "w-full border-2 border-dark-700 dark:text-white hover:border-dark-600",
    centerText: true,
    text: "Connexion via Discord",
    onClick: $options.login
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt="Discord" class="h-6 w-6 mr-4"${_scopeId}>`);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            src: _imports_0,
            alt: "Discord",
            class: "h-6 w-6 mr-4"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    color: "transparent",
    class: "w-full border-2 border-dark-700 dark:text-white hover:border-dark-600 blur-sm",
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
  _push(`</div></div><div class="bg-primary-500 lg:col-span-3 relative"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)} class="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4" alt="Group characters"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authentification/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.99d42d0b.mjs.map
