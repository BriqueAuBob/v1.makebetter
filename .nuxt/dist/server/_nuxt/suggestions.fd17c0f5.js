import { _ as _export_sfc, h as useHead, c as client, s as __nuxt_component_6, t as __nuxt_component_1 } from "../server.mjs";
import { useSSRContext } from "vue";
import "vue-router";
import { u as useAsyncData } from "./asyncData.73dbae35.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@vue/shared";
import "axios";
import "@vue/devtools-api";
import "@heroicons/vue/outline/esm/index.js";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _sfc_main = {
  async setup() {
    useHead({
      title: "Suggestions"
    });
    const suggestions2 = await useAsyncData(async () => {
      try {
        const { data } = await client.get("suggestions");
        return data.suggestions;
      } catch (e) {
        console.log(e);
        return [];
      }
    }, "$1nhdbIAGTh");
    return { suggestions: suggestions2.data };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SuggestionButton = __nuxt_component_6;
  const _component_Suggestion = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="pt-48 pb-24"><h1 class="text-center text-5xl font-extrabold text-black dark:text-white"> Suggestions de nos utilisateurs </h1>`);
  _push(ssrRenderComponent(_component_SuggestionButton, { class: "mt-8" }, null, _parent));
  _push(`</header><div class="container mx-auto px-4 pt-24 pb-48 lg:px-8"><div class="grid grid-cols-2 gap-8"><!--[-->`);
  ssrRenderList($setup.suggestions, (suggestion, index) => {
    _push(ssrRenderComponent(_component_Suggestion, {
      suggestion: suggestion.embeds[0],
      reactions: suggestion.reactions,
      id: suggestion.id,
      key: index
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/suggestions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const suggestions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  suggestions as default
};
