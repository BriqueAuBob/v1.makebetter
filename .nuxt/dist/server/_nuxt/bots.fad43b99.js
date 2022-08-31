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
  components: {
    Switch,
    SortDescendingIcon,
    BookmarkIcon,
    ChevronDownIcon,
    CubeIcon,
    ChipIcon
  },
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
        _push2(`<h1 class="mx-auto max-w-lg text-4xl font-extrabold"${_scopeId}> Liste de robots Discord </h1><h2 class="mx-auto mt-4 max-w-lg text-2xl leading-relaxed"${_scopeId}> Pr\xE9sente ton robot ou trouve le robot qu&#39;il te faut pour ton serveur Discord </h2><div class="mt-12 flex justify-center gap-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          color: "white",
          text: "Pr\xE9senter mon robot",
          small: true
        }, {
          icon_left: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ChipIcon, { class: "mr-3 h-8 w-8" }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_ChipIcon, { class: "mr-3 h-8 w-8" })
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
              _push3(ssrRenderComponent(_component_CubeIcon, { class: "mr-3 h-8 w-8" }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 h-8 w-8" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("h1", { class: "mx-auto max-w-lg text-4xl font-extrabold" }, " Liste de robots Discord "),
          vue_cjs_prod.createVNode("h2", { class: "mx-auto mt-4 max-w-lg text-2xl leading-relaxed" }, " Pr\xE9sente ton robot ou trouve le robot qu'il te faut pour ton serveur Discord "),
          vue_cjs_prod.createVNode("div", { class: "mt-12 flex justify-center gap-4" }, [
            vue_cjs_prod.createVNode(_component_Button, {
              color: "white",
              text: "Pr\xE9senter mon robot",
              small: true
            }, {
              icon_left: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_ChipIcon, { class: "mr-3 h-8 w-8" })
              ]),
              _: 1
            }),
            vue_cjs_prod.createVNode(_component_Button, {
              color: "transparent",
              text: "Voir d'autres \r\n                    outils Discord",
              small: true
            }, {
              icon_left: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 h-8 w-8" })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="relative"><div class="container absolute top-full left-1/2 z-10 mx-auto -translate-y-2/3 -translate-x-1/2 px-4 text-black dark:text-white lg:-translate-y-3/4"><div class="flex flex-col divide-y rounded-2xl bg-white shadow-xl dark:divide-dark-700 dark:bg-dark-800 lg:flex-row lg:divide-y-0 lg:divide-x"><input class="h-28 w-full bg-transparent px-8 focus:outline-none lg:w-1/2" placeholder="Rechercher un bot via ses informations textuelles..."><div class="flex w-full items-center gap-4 px-8 py-8 lg:w-auto">`);
  _push(ssrRenderComponent(_component_BookmarkIcon, { class: "h-6 w-6" }, null, _parent));
  _push(` Tags `);
  _push(ssrRenderComponent(_component_ChevronDownIcon, { class: "h-6 w-6" }, null, _parent));
  _push(`</div><div class="flex w-full items-center justify-between px-8 py-8 lg:w-auto lg:gap-4"> Bots open source `);
  _push(ssrRenderComponent(_component_Switch, {
    modelValue: _ctx.enabled,
    "onUpdate:modelValue": ($event) => _ctx.enabled = $event,
    class: [_ctx.enabled ? "bg-teal-500" : "bg-red-500", "relative inline-flex h-[38px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([_ctx.enabled ? "translate-x-10" : "translate-x-1", "pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}></span>`);
      } else {
        return [
          vue_cjs_prod.createVNode("span", { class: "sr-only" }, "Use setting"),
          vue_cjs_prod.createVNode("span", {
            "aria-hidden": "true",
            class: [_ctx.enabled ? "translate-x-10" : "translate-x-1", "pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"]
          }, null, 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex w-full items-center gap-4 px-8 py-8 lg:w-auto">`);
  _push(ssrRenderComponent(_component_SortDescendingIcon, { class: "h-6 w-6" }, null, _parent));
  _push(` Trier par `);
  _push(ssrRenderComponent(_component_ChevronDownIcon, { class: "h-6 w-6" }, null, _parent));
  _push(`</div></div></div></div><section class="container mx-auto grid gap-8 px-4 pt-48 pb-24 lg:grid-cols-3 lg:pt-24"><!--[-->`);
  ssrRenderList(9, (i) => {
    _push(ssrRenderComponent(_component_BotsCard, { key: i }, null, _parent));
  });
  _push(`<!--]--></section><section class="mt-12 bg-blurple text-white"><div class="container relative mx-auto grid px-4 lg:grid-cols-2"><div class="py-24"><div class="text-3xl font-bold">Pr\xE9sente nous ton bot!</div><div class="mt-4 max-w-lg text-xl leading-relaxed"> Que ce soit un bot de mod\xE9ration, d\u2019anti-raid ou un bot fun, il sera le bienvenue sur notre plateforme alors pr\xE9sente le nous ! </div>`);
  _push(ssrRenderComponent(_component_Button, {
    color: "white",
    class: "mt-8",
    text: "Pr\xE9senter mon robot",
    small: true
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ChipIcon, { class: "mr-3 h-8 w-8" }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_ChipIcon, { class: "mr-3 h-8 w-8" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img class="absolute bottom-0 left-1/2 w-1/3"${ssrRenderAttr("src", _imports_0)}></div></section></div>`);
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
