import { _ as __nuxt_component_0 } from "./Navbar.15ef9abf.js";
import { _ as _export_sfc, v as vue_cjs_prod } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "@vue/server-renderer";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "h3";
import "defu";
import "axios";
import "@heroicons/vue/outline/esm/index.js";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavigationNavbar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "content",
    class: "relative"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavigationNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  footer as default
};
