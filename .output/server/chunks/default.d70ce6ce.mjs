import { _ as __nuxt_component_0 } from './Navbar.2dbed860.mjs';
import { _ as _export_sfc, c as vue_cjs_prod, g as __nuxt_component_0$5, e as __nuxt_component_1$2 } from './server.mjs';
import { _ as _imports_0 } from './discord.598a3b34.mjs';
import AOS from 'aos';
import { s as serverRenderer } from './renderer.mjs';
import '@heroicons/vue/outline/esm/index.js';
import './logo.d2eabc24.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import 'axios';
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

const _imports_1 = "" + globalThis.__publicAssetsURL("icons/twitter.svg");
const _imports_2 = "" + globalThis.__publicAssetsURL("icons/youtube.svg");
const _imports_3 = "" + globalThis.__publicAssetsURL("star_footer.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Button = __nuxt_component_1$2;
  _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-primary-600 lg:grid lg:grid-cols-2 text-white relative overflow-x-hidden" }, _attrs))}><div class="col-span-2 border-2 border-primary-700 py-24"><div class="font-semibold text-xl text-center mx-auto mb-4">Nous recrutons</div><div class="text-center mx-auto max-w-3xl">UMaestro est \xE0 la recherche de multiples personnes dans divers domaines, il se pourrais que tu sois <span class="font-bold">LA</span> personne que l\u2019on recherche alors n\u2019h\xE9site pas \xE0 postuler</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "hire" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
          color: "white",
          text: "Voir les postes disponible",
          small: true,
          class: "mx-auto mt-8"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Button, {
            color: "white",
            text: "Voir les postes disponible",
            small: true,
            class: "mx-auto mt-8"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="border-2 border-primary-700 px-24 py-12"><div class="font-semibold">umaestro.fr</div><p class="text-md mt-2 max-w-2xl leading-relaxed"> Nous sommes un groupe sur Internet, plus commun\xE9ment appel\xE9 Network, nous proposons plusieurs projets en rapport avec le net. <br><br><span class="text-sm font-light text-gray-200">Nous ne sommes pas affili\xE9s avec les services pour lesquels nous fournissons des outils.</span></p></div><div class="border-2 border-primary-700 px-24 py-12"><div class="font-semibold">Liens utiles</div><ul class="mt-4 flex flex-col gap-2 text-gray-100 text-sm"><li>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "partners" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nos partenaires`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Nos partenaires")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "hire" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Recrutement`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Recrutement")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="border-2 border-primary-700 px-24 py-12"><div class="font-semibold">Nos r\xE9seaux</div><ul class="mt-4 flex gap-8 items-center text-gray-100"><li><a href="https://discord.gg/umaestro" target="_blank"><img class="w-10"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></a></li><li><a href="https://twitter.com/gumaestro/" target="_blank"><img class="w-10"${serverRenderer.exports.ssrRenderAttr("src", _imports_1)}></a></li><li><a href="https://www.youtube.com/channel/UCCMNETJ3w46A6-E55g6GYPg" target="_blank"><img class="w-10"${serverRenderer.exports.ssrRenderAttr("src", _imports_2)}></a></li></ul></div><div class="border-2 border-primary-700 px-24 py-12"><div class="font-semibold">Confidentialit\xE9 et s\xE9curit\xE9</div><ul class="mt-4 flex flex-col gap-2 text-gray-100 text-sm"><li>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "cgu" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Conditions g\xE9n\xE9rales d&#39;utilisation`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Conditions g\xE9n\xE9rales d'utilisation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="text-gray-400">Politique de confidentialit\xE9</li></ul></div><div class="border-2 border-primary-700 px-24 py-8 col-span-2 flex justify-end"> umaestro.fr - 2022 </div><img class="absolute -left-64 -top-64 w-1/3"${serverRenderer.exports.ssrRenderAttr("src", _imports_3)}><img class="absolute -right-64 top-4 w-1/3"${serverRenderer.exports.ssrRenderAttr("src", _imports_3)}></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      banner: false
    };
  },
  methods: {
    removeBanner() {
      this.banner = false;
    }
  },
  mounted() {
    AOS.init({
      once: true
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavigationNavbar = __nuxt_component_0;
  const _component_NavigationFooter = __nuxt_component_1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "content",
    class: "relative"
  }, _attrs))}><div class="${serverRenderer.exports.ssrRenderClass([!$data.banner && "opacity-0 -translate-y-24 absolute", "bg-secondary-500 text-black font-semibold text-lg text-center w-full ease-in duration-300 overflow-hidden cursor-pointer"])}"><div class="container mx-auto p-4"> Bienvenue sur notre nouveau site ! \u{1F44B}\u{1F3FC} </div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NavigationNavbar, {
    class: $data.banner && "mt-12"
  }, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NavigationFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.d70ce6ce.mjs.map
