import { _ as _export_sfc, v as vue_cjs_prod, d as __nuxt_component_1$2 } from './server.mjs';
import { LightBulbIcon } from '@heroicons/vue/outline/esm/index.js';
import { s as serverRenderer } from './renderer.mjs';
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

const _sfc_main = {
  components: { LightBulbIcon },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.moduleName = from.params.slug || vm.moduleName;
    });
  },
  data: () => ({
    moduleName: "inconnu"
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1$2;
  const _component_LightBulbIcon = vue_cjs_prod.resolveComponent("LightBulbIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="bg-gradient-to-b from-red-500 to-red-700 pt-48 pb-48 relative text-white"><h1 class="font-extrabold text-4xl leading-[3.5rem] text-center max-w-xl mx-auto">D\xE9sol\xE9, nous ne proposons pas d\u2019outils pour cette plateforme pour le moment</h1><h2 class="text-2xl leading-relaxed mt-4 text-center max-w-2xl mx-auto">Tu peux faire une suggestion pour nous faire part de tes id\xE9es. Il se peut que nous serions enchant\xE9s de travailler sur l\u2019ajout d\u2019outils concernant &quot;<span class="capitalize">${serverRenderer.exports.ssrInterpolate(_ctx.moduleName)}</span>&quot; !</h2>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    color: "white",
    class: "mt-8 bg-white mx-auto",
    text: "Faire une suggestion",
    small: true
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_LightBulbIcon, { class: "mr-3 w-8 h-8" }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_LightBulbIcon, { class: "mr-3 w-8 h-8" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _404 as default };
//# sourceMappingURL=404.13fb9cc5.mjs.map
