import { _ as _export_sfc, v as vue_cjs_prod, r as __nuxt_component_6 } from "../server.mjs";
import { LightBulbIcon } from "@heroicons/vue/outline/esm/index.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "@vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="bg-gradient-to-b from-red-500 to-red-700 pt-48 pb-48 relative text-white"><h1 class="font-extrabold text-4xl leading-[3.5rem] text-center max-w-xl mx-auto">D\xE9sol\xE9, nous ne proposons pas d\u2019outils pour cette plateforme pour le moment</h1><h2 class="text-2xl leading-relaxed mt-4 text-center max-w-2xl mx-auto">Tu peux faire une suggestion pour nous faire part de tes id\xE9es. Il se peut que nous serions enchant\xE9s de travailler sur l\u2019ajout d\u2019outils concernant &quot;<span class="capitalize">${ssrInterpolate(_ctx.moduleName)}</span>&quot; !</h2>`);
  _push(ssrRenderComponent(_component_SuggestionButton, { class: "mt-4" }, null, _parent));
  _push(`</header></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _404 as default
};
