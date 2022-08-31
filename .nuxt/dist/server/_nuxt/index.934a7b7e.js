import { _ as _export_sfc, v as vue_cjs_prod, f as __nuxt_component_0, g as __nuxt_component_1, c as __nuxt_component_1$1 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "@vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArticlesThumbnailsBig = __nuxt_component_0;
  const _component_ArticlesThumbnailsSmall = __nuxt_component_1;
  const _component_Button = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="border-b-8 border-primary-400 bg-primary-500 py-48"><h1 class="text-center text-5xl font-extrabold text-white"> Nos articles </h1><h2 class="mx-auto mt-6 max-w-2xl text-center text-3xl leading-relaxed text-white"> On \xE9crit r\xE9guli\xE8rement des articles pour mettre notre communaut\xE9 au courant de certaines choses </h2><div class="container mx-auto mt-12 mb-52 px-4 pb-96 lg:mb-0 lg:pb-32"><div class="relative"><div class="absolute grid w-full gap-8 lg:grid-cols-2">`);
  _push(ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(`<div class="flex flex-col gap-8">`);
  _push(ssrRenderComponent(_component_ArticlesThumbnailsSmall, null, null, _parent));
  _push(ssrRenderComponent(_component_ArticlesThumbnailsSmall, null, null, _parent));
  _push(`</div></div></div></div></header><section class="container mx-auto px-4 pt-32 pb-4 lg:pt-48"><div class="text-2xl font-semibold leading-relaxed"> Articles de Discord D\xE9crypte </div><p class="mt-3 max-w-2xl text-xl leading-relaxed"> Ce sont les articles qui sortent tout les samedi et qui vous informent pas forc\xE9ment sur quelque chose de li\xE9 \xE0 Maestro </p><div class="mt-8 grid gap-8 lg:grid-cols-3">`);
  _push(ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(`</div><div class="mt-8 grid gap-8 lg:grid-cols-2"><!--[-->`);
  ssrRenderList(4, (i) => {
    _push(ssrRenderComponent(_component_ArticlesThumbnailsSmall, { key: i }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "mx-auto mt-12 bg-white",
    text: "En voir d'avantage"
  }, null, _parent));
  _push(`</section><section class="relative pt-24 pb-48"><div class="absolute -z-1 h-[70rem] w-full bg-primary-500 md:h-[66rem] lg:h-[42rem]"></div><div class="container mx-auto py-12 px-4"><div class="text-2xl font-semibold leading-relaxed text-white"> Informations relatives \xE0 UMaestro </div><p class="mt-3 max-w-2xl text-xl leading-relaxed text-white"> Ce sont les articles qui vous informent des nouveaut\xE9s qui sortent/sortiront sur le site. </p><div class="mt-8 grid gap-8 lg:grid-cols-2">`);
  _push(ssrRenderComponent(_component_ArticlesThumbnailsBig, null, null, _parent));
  _push(`<div class="flex flex-col gap-8"><!--[-->`);
  ssrRenderList(3, (i) => {
    _push(ssrRenderComponent(_component_ArticlesThumbnailsSmall, {
      superSmall: true,
      key: i
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="mt-8 grid gap-8 lg:grid-cols-2"><!--[-->`);
  ssrRenderList(6, (i) => {
    _push(ssrRenderComponent(_component_ArticlesThumbnailsSmall, { key: i }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "mx-auto bg-white",
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
export {
  index as default
};
