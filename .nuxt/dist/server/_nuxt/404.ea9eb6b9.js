import { _ as _export_sfc, s as __nuxt_component_6 } from "../server.mjs";
import { LightBulbIcon } from "@heroicons/vue/outline/esm/index.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "axios";
import "@vue/devtools-api";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
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
  const _component_SuggestionButton = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative bg-gradient-to-b from-red-500 to-red-700 pt-48 pb-48 text-white"><h1 class="mx-auto max-w-xl text-center text-4xl font-extrabold leading-[3.5rem]"> D\xE9sol\xE9, nous ne proposons pas d\u2019outils pour cette plateforme pour le moment </h1><h2 class="mx-auto mt-4 max-w-2xl text-center text-2xl leading-relaxed"> Tu peux faire une suggestion pour nous faire part de tes id\xE9es. Il se peut que nous serions enchant\xE9s de travailler sur l\u2019ajout d\u2019outils concernant &quot;<span class="capitalize">${ssrInterpolate(_ctx.moduleName)}</span>&quot; ! </h2>`);
  _push(ssrRenderComponent(_component_SuggestionButton, { class: "mt-4" }, null, _parent));
  _push(`</header></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _404 as default
};
