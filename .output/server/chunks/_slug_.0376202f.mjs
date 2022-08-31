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
    reactions: [
      "poop",
      "sad",
      "cry",
      "tired",
      "thinking",
      "surprised",
      "happy",
      "love",
      "fire"
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArticlesReaction = __nuxt_component_0$4;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="relative"><div class="pt-32 pb-52 text-center" style="${serverRenderer.exports.ssrRenderStyle({ "background": "linear-gradient(#f22b6a, #be043b)" })}"><div class="container mx-auto px-4"><h1 class="text-4xl font-extrabold">Titre de l&#39;article</h1><h2 class="mx-auto mt-4 max-w-xl text-2xl leading-relaxed"> Irure laboris officia sunt in veniam culpa aliquip cillum esse officia in id fugiat id </h2><span class="mt-8 block text-xs">publi\xE9 par</span><div class="stretch-content mt-4 inline-flex items-center gap-4 rounded-2xl bg-white p-6 shadow-2xl"><img class="h-14 w-14" src="https://cdn.discordapp.com/avatars/477900666430423048/7622d361a106f02672374be3b8a8a396.png?size=80"><div class="flex flex-col justify-center gap-1 text-left"><span class="text-lg font-bold text-dark-900">@Minalex</span><span class="text-sm text-gray-600">R\xE9dacteur Discord D\xE9crypte</span></div></div><span class="mt-4 block text-xs">le 21/03/2022</span></div></div><svg style="${serverRenderer.exports.ssrRenderStyle({ "fill": "#be043b" })}" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1440 87"><path fill-rule="evenodd" clip-rule="evenodd" d="m0 23 120 16c120 16 360 48 600 48s480-32 600-48l120-16V0H0v23Z"></path></svg><img class="absolute -bottom-24 left-1/2 w-1/2 -translate-x-1/2 rounded-3xl px-4 shadow-xl lg:w-1/3 xs:w-full" src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png"></header><section class="container mx-auto py-48"> Blabla <div class="mt-12 flex justify-between"><div class="flex gap-4 rounded-full bg-white p-6 shadow-xl dark:bg-dark-800"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.reactions, (reaction, index) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ArticlesReaction, {
      key: index,
      reaction
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="flex gap-4 rounded-full bg-white p-6 shadow-xl dark:bg-dark-800"><div class="text-md text-medium items-center rounded-full bg-gray-200 px-4 py-3 text-dark-900 dark:bg-dark-700 dark:text-white"><img class="h-6 w-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div><div class="text-md text-medium items-center rounded-full bg-gray-200 px-4 py-3 text-dark-900 dark:bg-dark-700 dark:text-white"><img class="h-6 w-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div><div class="text-md text-medium items-center rounded-full bg-gray-200 px-4 py-3 text-dark-900 dark:bg-dark-700 dark:text-white"><img class="h-6 w-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.0376202f.mjs.map
