import { _ as _export_sfc, D as __nuxt_component_0$1, d as __nuxt_component_1$3, k as __nuxt_component_2$2, l as __nuxt_component_9, e as __nuxt_component_0$5, F as __nuxt_component_5$1, z as __nuxt_component_6$2 } from './server.mjs';
import { CubeIcon } from '@heroicons/vue/outline/esm/index.js';
import { a as allCards, u as useModule, t as tools } from './Module.a4a724b2.mjs';
import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.9a76964f.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import 'axios';
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

const _sfc_main = {
  components: { CubeIcon },
  data: () => ({
    cards: allCards,
    moduleTools: []
  }),
  created() {
    this.module = useModule(this.$route.params.slug);
    if (!this.module) {
      this.$router.replace("/tools/404");
    }
    this.moduleTools = this.$router.getRoutes().filter(
      (route) => route.path.startsWith(`/tools/${this.$route.params.slug}/`)
    ).map((route) => route.name);
  },
  computed: {
    tools() {
      return this.moduleTools.sort((a, b) => {
        return tools[this.getModuleName(a)].localeCompare(
          tools[this.getModuleName(b)]
        );
      });
    }
  },
  methods: {
    getModuleName(index2) {
      const name = /[^-]*$/.exec(
        typeof index2 === "number" ? this.moduleTools[index2] : index2
      )[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    getToolName(index2) {
      return tools[this.getModuleName(index2)];
    },
    getModuleCard(index2) {
      return this.cards[this.getModuleName(index2).toLowerCase()];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Title = resolveComponent("Title");
  const _component_ToolsHeader = __nuxt_component_0$1;
  const _component_Button = __nuxt_component_1$3;
  const _component_CubeIcon = resolveComponent("CubeIcon");
  const _component_Slider = __nuxt_component_2$2;
  const _component_ClientOnly = __nuxt_component_9;
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Empty = __nuxt_component_5$1;
  const _component_SuggestionButton = __nuxt_component_6$2;
  if (_ctx.module) {
    _push(`<div${ssrRenderAttrs(_attrs)}>`);
    _push(ssrRenderComponent(_component_Head, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Title, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                _push3(`${ssrInterpolate(_ctx.$route.params.slug ? `Outils ${((_a = _ctx.$route.params.slug) == null ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = _ctx.$route.params.slug) == null ? void 0 : _b.slice(1))}` : "Accueil")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$route.params.slug ? `Outils ${((_c = _ctx.$route.params.slug) == null ? void 0 : _c.charAt(0).toUpperCase()) + ((_d = _ctx.$route.params.slug) == null ? void 0 : _d.slice(1))}` : "Accueil"), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Title, null, {
              default: withCtx(() => {
                var _a, _b;
                return [
                  createTextVNode(toDisplayString(_ctx.$route.params.slug ? `Outils ${((_a = _ctx.$route.params.slug) == null ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = _ctx.$route.params.slug) == null ? void 0 : _b.slice(1))}` : "Accueil"), 1)
                ];
              }),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_ToolsHeader, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<h1 class="mx-auto max-w-lg text-center text-4xl font-extrabold leading-[3.5rem]"${_scopeId}> Et oui, on propose des outils pour <span class="capitalize"${_scopeId}>${ssrInterpolate(_ctx.$route.params.slug)}</span> ! </h1><h2 class="mx-auto mt-4 max-w-lg text-center text-2xl leading-relaxed"${_scopeId}> Ici sont rassembl\xE9s nos outils qui int\xE9ragissent avec Discord ! Nos outils sortent au fil du temps et en fonction de votre attente. </h2>`);
          _push2(ssrRenderComponent(_component_Button, {
            class: "mx-auto mt-8",
            text: "Voir les outils\r\n                que l'on propose",
            color: "white",
            small: true
          }, {
            icon_left: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_CubeIcon, { class: "mr-3 h-10 w-10" }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_CubeIcon, { class: "mr-3 h-10 w-10" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode("h1", { class: "mx-auto max-w-lg text-center text-4xl font-extrabold leading-[3.5rem]" }, [
              createTextVNode(" Et oui, on propose des outils pour "),
              createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$route.params.slug), 1),
              createTextVNode(" ! ")
            ]),
            createVNode("h2", { class: "mx-auto mt-4 max-w-lg text-center text-2xl leading-relaxed" }, " Ici sont rassembl\xE9s nos outils qui int\xE9ragissent avec Discord ! Nos outils sortent au fil du temps et en fonction de votre attente. "),
            createVNode(_component_Button, {
              class: "mx-auto mt-8",
              text: "Voir les outils\r\n                que l'on propose",
              color: "white",
              small: true
            }, {
              icon_left: withCtx(() => [
                createVNode(_component_CubeIcon, { class: "mr-3 h-10 w-10" })
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<section class="relative bg-white py-12 shadow-sm dark:bg-dark-900 dark:shadow-lg"><div class="absolute left-1/2 top-4 z-10 flex w-fit -translate-x-1/2 -translate-y-2/3 items-center gap-4 rounded-3xl bg-white p-12 text-5xl font-extrabold text-black shadow-2xl dark:bg-dark-800 dark:text-white lg:gap-12"><img class="h-20 w-20"${ssrRenderAttr("src", _imports_0)}> + `);
    if (typeof _ctx.module.icon === "string") {
      _push(`<img${ssrRenderAttr("src", `/icons/${_ctx.module.icon}`)} class="h-20 w-20">`);
    } else {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.module.icon), { class: "h-20 w-20" }, null), _parent);
    }
    _push(`</div>`);
    _push(ssrRenderComponent(_component_Slider, {
      direction: "horizontal",
      duration: "60s"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex"${_scopeId}><!--[-->`);
          ssrRenderList(3, (i) => {
            _push2(`<div class="flex"${_scopeId}><!--[-->`);
            ssrRenderList($options.tools, (tool, i2) => {
              _push2(`<div class="mr-6 rounded-3xl bg-gray-200 px-6 py-4 text-lg font-semibold text-gray-500 dark:bg-dark-800 dark:text-gray-400"${_scopeId}>${ssrInterpolate($options.getToolName(tool))}</div>`);
            });
            _push2(`<!--]--></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            createVNode("div", { class: "flex" }, [
              (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                return createVNode("div", {
                  key: i,
                  class: "flex"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.tools, (tool, i2) => {
                    return openBlock(), createBlock("div", {
                      key: i2,
                      class: "mr-6 rounded-3xl bg-gray-200 px-6 py-4 text-lg font-semibold text-gray-500 dark:bg-dark-800 dark:text-gray-400"
                    }, toDisplayString($options.getToolName(tool)), 1);
                  }), 128))
                ]);
              }), 64))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</section><section class="container mx-auto py-24 px-4"><div class="text-center text-xl font-bold">Nos outils</div><div class="mt-4 text-center text-lg"> D\xE9di\xE9s \xE0 <span class="capitalize">${ssrInterpolate(_ctx.$route.params.slug)}</span></div>`);
    _push(ssrRenderComponent(_component_ClientOnly, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3" id="__grid__cards"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.moduleTools, (tool, index2) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/tools/${_ctx.$route.params.slug}/${$options.getModuleName(
                index2
              ).toLowerCase()}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent({ ...$options.getModuleCard(index2) }), null, null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent({ ...$options.getModuleCard(index2) })))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            createVNode("div", {
              class: "mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3",
              id: "__grid__cards"
            }, [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.moduleTools, (tool, index2) => {
                return openBlock(), createBlock("div", { key: index2 }, [
                  createVNode(_component_NuxtLink, {
                    to: `/tools/${_ctx.$route.params.slug}/${$options.getModuleName(
                      index2
                    ).toLowerCase()}`
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent({ ...$options.getModuleCard(index2) })))
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="mx-auto mt-12 max-w-md text-center text-lg"> Les outils, que tu pourras retrouver ailleurs, qui te seront utiles pour <span class="capitalize">${ssrInterpolate(_ctx.$route.params.slug)}</span></div><div class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3"><div class="col-span-3 mt-4">`);
    _push(ssrRenderComponent(_component_Empty, { text: "Nous n'avons pas trouv\xE9 d'outils suppl\xE9mentaires..." }, null, _parent));
    _push(`</div></div></section><section class="container mx-auto mt-8 mb-24 rounded-2xl bg-blurple py-24 text-white shadow-lg"><div class="text-center text-3xl font-bold"> Tu n&#39;as pas trouv\xE9 ton bonheur? </div><div class="mx-auto mt-4 max-w-lg text-center text-xl leading-relaxed"> Nous acceptons toutes id\xE9es de nouvels outils, qu\u2019ils soient li\xE9s \xE0 <span class="capitalize">${ssrInterpolate(_ctx.$route.params.slug)}</span> ou pas alors n\u2019h\xE9sites pas \xE0 nous faire part de ta suggestion ! </div>`);
    _push(ssrRenderComponent(_component_SuggestionButton, {
      color: "white",
      class: "mt-8",
      text: "Faire une suggestion"
    }, null, _parent));
    _push(`</section></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.82d9ad16.mjs.map
