import { _ as _export_sfc, v as vue_cjs_prod, b as __nuxt_component_0$4, c as __nuxt_component_1$2, d as __nuxt_component_1$1 } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArticlesThumbnailsBig = __nuxt_component_0$4;
  const _component_ArticlesThumbnailsSmall = __nuxt_component_1$2;
  const _component_Button = __nuxt_component_1$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="bg-primary-500 border-b-8 border-primary-400 py-48"><h1 class="font-extrabold text-5xl text-white text-center">Nos articles</h1><h2 class="text-3xl max-w-2xl text-center mx-auto mt-6 leading-relaxed text-white">On \xE9crit r\xE9guli\xE8rement des articles pour mettre notre communaut\xE9 au courant de certaines choses</h2><div class="container mx-auto px-4 mt-12 mb-52 lg:mb-0 pb-96 lg:pb-32"><div class="relative"><div class="absolute w-full grid lg:grid-cols-2 gap-8">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(`<div class="flex flex-col gap-8">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsSmall, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsSmall, null, null, _parent));
  _push(`</div></div></div></div></header><section class="pt-32 lg:pt-48 pb-4 container mx-auto px-4"><div class="font-semibold text-2xl leading-relaxed">Articles de Discord D\xE9crypte</div><p class="text-xl leading-relaxed max-w-2xl mt-3">Ce sont les articles qui sortent tout les samedi et qui vous informent pas forc\xE9ment sur quelque chose de li\xE9 \xE0 Maestro</p><div class="grid lg:grid-cols-3 gap-8 mt-8">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(`</div><div class="grid lg:grid-cols-2 gap-8 mt-8"><!--[-->`);
  serverRenderer.exports.ssrRenderList(4, (i) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsSmall, { key: i }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "bg-white mx-auto mt-12",
    text: "En voir d'avantage"
  }, null, _parent));
  _push(`</section><section class="pt-24 pb-48 relative"><div class="absolute w-full h-[70rem] md:h-[66rem] lg:h-[42rem] bg-primary-500 -z-1"></div><div class="container mx-auto py-12 px-4"><div class="font-semibold text-2xl leading-relaxed text-white">Informations relatives \xE0 UMaestro</div><p class="text-xl leading-relaxed max-w-2xl mt-3 text-white">Ce sont les articles qui vous informent des nouveaut\xE9s qui sortent/sortiront sur le site.</p><div class="grid lg:grid-cols-2 gap-8 mt-8">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(`<div class="flex flex-col gap-8"><!--[-->`);
  serverRenderer.exports.ssrRenderList(3, (i) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsSmall, {
      superSmall: true,
      key: i
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="grid lg:grid-cols-2 gap-8 mt-8"><!--[-->`);
  serverRenderer.exports.ssrRenderList(6, (i) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesThumbnailsSmall, { key: i }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "bg-white mx-auto",
    text: "En voir d'avantage"
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.9c21981c.mjs.map
