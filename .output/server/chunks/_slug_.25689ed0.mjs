import { _ as _export_sfc, c as vue_cjs_prod, h as __nuxt_component_0$4 } from './server.mjs';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("objects/poop.png");
const _sfc_main = {
  data: () => ({
    reactions: ["poop", "sad", "cry", "tired", "thinking", "surprised", "happy", "love", "fire"]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArticlesReaction = __nuxt_component_0$4;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="relative"><div class="pt-32 pb-52 text-center" style="${serverRenderer.exports.ssrRenderStyle({ "background": "linear-gradient(#F22B6A, #BE043B)" })}"><div class="container mx-auto px-4"><h1 class="font-extrabold text-4xl">Titre de l&#39;article</h1><h2 class="text-2xl max-w-xl mx-auto mt-4 leading-relaxed">Irure laboris officia sunt in veniam culpa aliquip cillum esse officia in id fugiat id</h2><span class="text-xs mt-8 block">publi\xE9 par</span><div class="bg-white shadow-2xl p-6 inline-flex rounded-2xl mt-4 gap-4 items-center stretch-content"><img class="w-14 h-14" src="https://cdn.discordapp.com/avatars/477900666430423048/7622d361a106f02672374be3b8a8a396.png?size=80"><div class="flex flex-col justify-center text-left gap-1"><span class="text-lg font-bold text-dark-900">@Minalex</span><span class="text-sm text-gray-600">R\xE9dacteur Discord D\xE9crypte</span></div></div><span class="text-xs mt-4 block">le 21/03/2022</span></div></div><svg style="${serverRenderer.exports.ssrRenderStyle({ "fill": "#BE043B" })}" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1440 87"><path fill-rule="evenodd" clip-rule="evenodd" d="m0 23 120 16c120 16 360 48 600 48s480-32 600-48l120-16V0H0v23Z"></path></svg><img class="xs:w-full w-1/2 lg:w-1/3 rounded-3xl shadow-xl absolute -bottom-24 left-1/2 -translate-x-1/2 px-4" src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png"></header><section class="py-48 container mx-auto"> Blabla <div class="flex justify-between mt-12"><div class="rounded-full bg-white dark:bg-dark-800 shadow-xl p-6 flex gap-4"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.reactions, (reaction, index) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesReaction, {
      key: index,
      reaction
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="rounded-full bg-white dark:bg-dark-800 shadow-xl p-6 flex gap-4"><div class="bg-gray-200 dark:bg-dark-700 px-4 py-3 rounded-full items-center text-dark-900 dark:text-white text-md text-medium"><img class="w-6 h-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div><div class="bg-gray-200 dark:bg-dark-700 px-4 py-3 rounded-full items-center text-dark-900 dark:text-white text-md text-medium"><img class="w-6 h-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div><div class="bg-gray-200 dark:bg-dark-700 px-4 py-3 rounded-full items-center text-dark-900 dark:text-white text-md text-medium"><img class="w-6 h-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.25689ed0.mjs.map
