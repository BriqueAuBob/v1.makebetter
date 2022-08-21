import { _ as __nuxt_component_0 } from './Navbar.d6507c55.mjs';
import { _ as _export_sfc, v as vue_cjs_prod, f as __nuxt_component_0$6 } from './server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$6;
  _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-white dark:bg-dark-800 py-12" }, _attrs))}><div class="container mx-auto flex justify-between px-4"><div><div class="font-semibold text-lg">UMaestro</div><p class="text-md mt-2 max-w-md leading-relaxed"> Nous sommes un groupe sur Internet, plus commun\xE9ment appel\xE9 Network, nous proposons plusieurs projets en rapport avec le net. <br><br><span class="text-sm font-light text-gray-400">Nous ne sommes pas affili\xE9s avec les services pour lesquels nous fournissons des outils.</span></p></div><div><div class="font-semibold text-lg">Liens utiles</div><ul class="mt-4 flex flex-col gap-2 text-gray-500"><li>`);
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
  _push(`</li></ul></div><div><div class="font-semibold text-lg">Confidentialit\xE9 &amp; S\xE9curit\xE9</div><ul class="mt-4 flex flex-col gap-2 text-gray-500"><li>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Politique de confidentialit\xE9`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Politique de confidentialit\xE9")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Conditions g\xE9n\xE9rales d\u2019utilisation`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Conditions g\xE9n\xE9rales d\u2019utilisation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="container mx-auto flex justify-between mt-16 px-4"><div class="flex gap-2"></div><div class="flex gap-2 items-center"><button class="bg-gray-400 px-4 py-2 text-white rounded-md">TOGGLE DARK MODE</button><span class="text-md font-medium">- 2022</span></div></div></footer>`);
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
//# sourceMappingURL=default.ff4c66cd.mjs.map
