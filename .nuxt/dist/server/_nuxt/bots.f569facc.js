import { _ as _export_sfc, v as vue_cjs_prod, s as __nuxt_component_0, c as __nuxt_component_1, w as __nuxt_component_2 } from "../server.mjs";
import { Switch } from "@headlessui/vue";
import { SortDescendingIcon, BookmarkIcon, ChevronDownIcon, CubeIcon, ChipIcon } from "@heroicons/vue/outline/esm/index.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "@vue/server-renderer";
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
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _imports_0 = "" + globalThis.__publicAssetsURL("characters/robot_blue.png");
const _sfc_main = {
  components: { Switch, SortDescendingIcon, BookmarkIcon, ChevronDownIcon, CubeIcon, ChipIcon },
  data: () => ({
    enabled: false
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsHeader = __nuxt_component_0;
  const _component_Button = __nuxt_component_1;
  const _component_ChipIcon = vue_cjs_prod.resolveComponent("ChipIcon");
  const _component_CubeIcon = vue_cjs_prod.resolveComponent("CubeIcon");
  const _component_BookmarkIcon = vue_cjs_prod.resolveComponent("BookmarkIcon");
  const _component_ChevronDownIcon = vue_cjs_prod.resolveComponent("ChevronDownIcon");
  const _component_Switch = vue_cjs_prod.resolveComponent("Switch");
  const _component_SortDescendingIcon = vue_cjs_prod.resolveComponent("SortDescendingIcon");
  const _component_BotsCard = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ToolsHeader, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="font-extrabold text-4xl max-w-lg mx-auto"${_scopeId}>Liste de robots Discord</h1><h2 class="text-2xl leading-relaxed mt-4 max-w-lg mx-auto"${_scopeId}>Pr\xE9sente ton robot ou trouve le robot qu&#39;il te faut pour ton serveur Discord</h2><div class="flex gap-4 mt-12 justify-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          color: "white",
          text: "Pr\xE9senter mon robot",
          small: true
        }, {
          icon_left: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ChipIcon, { class: "mr-3 w-8 h-8" }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_ChipIcon, { class: "mr-3 w-8 h-8" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          color: "transparent",
          text: "Voir d'autres \r\n                    outils Discord",
          small: true
        }, {
          icon_left: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CubeIcon, { class: "mr-3 w-8 h-8" }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-8 h-8" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("h1", { class: "font-extrabold text-4xl max-w-lg mx-auto" }, "Liste de robots Discord"),
          vue_cjs_prod.createVNode("h2", { class: "text-2xl leading-relaxed mt-4 max-w-lg mx-auto" }, "Pr\xE9sente ton robot ou trouve le robot qu'il te faut pour ton serveur Discord"),
          vue_cjs_prod.createVNode("div", { class: "flex gap-4 mt-12 justify-center" }, [
            vue_cjs_prod.createVNode(_component_Button, {
              color: "white",
              text: "Pr\xE9senter mon robot",
              small: true
            }, {
              icon_left: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_ChipIcon, { class: "mr-3 w-8 h-8" })
              ]),
              _: 1
            }),
            vue_cjs_prod.createVNode(_component_Button, {
              color: "transparent",
              text: "Voir d'autres \r\n                    outils Discord",
              small: true
            }, {
              icon_left: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-8 h-8" })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="relative"><div class="absolute top-full -translate-y-2/3 lg:-translate-y-3/4 left-1/2 -translate-x-1/2 container mx-auto px-4 text-black dark:text-white z-10"><div class="bg-white dark:bg-dark-800 rounded-2xl shadow-xl flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x dark:divide-dark-700"><input class="h-28 w-full lg:w-1/2 bg-transparent focus:outline-none px-8" placeholder="Rechercher un bot via ses informations textuelles..."><div class="flex gap-4 items-center px-8 py-8 w-full lg:w-auto">`);
  _push(ssrRenderComponent(_component_BookmarkIcon, { class: "w-6 h-6" }, null, _parent));
  _push(` Tags `);
  _push(ssrRenderComponent(_component_ChevronDownIcon, { class: "w-6 h-6" }, null, _parent));
  _push(`</div><div class="flex lg:gap-4 items-center justify-between px-8 py-8 w-full lg:w-auto"> Bots open source `);
  _push(ssrRenderComponent(_component_Switch, {
    modelValue: _ctx.enabled,
    "onUpdate:modelValue": ($event) => _ctx.enabled = $event,
    class: [_ctx.enabled ? "bg-teal-500" : "bg-red-500", "relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([_ctx.enabled ? "translate-x-10" : "translate-x-1", "absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"])}"${_scopeId}></span>`);
      } else {
        return [
          vue_cjs_prod.createVNode("span", { class: "sr-only" }, "Use setting"),
          vue_cjs_prod.createVNode("span", {
            "aria-hidden": "true",
            class: [_ctx.enabled ? "translate-x-10" : "translate-x-1", "absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"]
          }, null, 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex gap-4 items-center px-8 py-8 w-full lg:w-auto">`);
  _push(ssrRenderComponent(_component_SortDescendingIcon, { class: "w-6 h-6" }, null, _parent));
  _push(` Trier par `);
  _push(ssrRenderComponent(_component_ChevronDownIcon, { class: "w-6 h-6" }, null, _parent));
  _push(`</div></div></div></div><section class="container mx-auto pt-48 lg:pt-24 pb-24 grid lg:grid-cols-3 gap-8 px-4"><!--[-->`);
  ssrRenderList(9, (i) => {
    _push(ssrRenderComponent(_component_BotsCard, { key: i }, null, _parent));
  });
  _push(`<!--]--></section><section class="bg-blurple text-white mt-12"><div class="container mx-auto grid lg:grid-cols-2 relative px-4"><div class="py-24"><div class="font-bold text-3xl">Pr\xE9sente nous ton bot!</div><div class="text-xl mt-4 leading-relaxed max-w-lg">Que ce soit un bot de mod\xE9ration, d\u2019anti-raid ou un bot fun, il sera le bienvenue sur notre plateforme alors pr\xE9sente le nous !</div>`);
  _push(ssrRenderComponent(_component_Button, {
    color: "white",
    class: "mt-8",
    text: "Pr\xE9senter mon robot",
    small: true
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ChipIcon, { class: "mr-3 w-8 h-8" }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_ChipIcon, { class: "mr-3 w-8 h-8" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img class="absolute w-1/3 bottom-0 left-1/2"${ssrRenderAttr("src", _imports_0)}></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/bots.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bots = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  bots as default
};
