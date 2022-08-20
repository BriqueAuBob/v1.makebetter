import { _ as _export_sfc, A as allCards, B as useModule, C as tools, v as vue_cjs_prod, D as __nuxt_component_0$2, d as __nuxt_component_1$1, h as __nuxt_component_2$2, i as __nuxt_component_9, f as __nuxt_component_0$6, E as __nuxt_component_5$1 } from './server.mjs';
import { CubeIcon, LightBulbIcon } from '@heroicons/vue/outline/esm/index.js';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
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
import 'stream';

const _imports_0 = "" + globalThis.__publicAssetsURL("logo.svg");
const _sfc_main = {
  components: { CubeIcon, LightBulbIcon },
  data: () => ({
    cards: allCards,
    moduleTools: []
  }),
  created() {
    this.module = useModule(this.$route.params.slug);
    if (!this.module) {
      this.$router.replace("/tools/404");
    }
    this.moduleTools = this.$router.getRoutes().filter((route) => route.path.startsWith(`/tools/${this.$route.params.slug}/`)).map((route) => route.name);
  },
  computed: {
    tools() {
      return this.moduleTools.sort((a, b) => {
        return tools[this.getModuleName(a)].localeCompare(tools[this.getModuleName(b)]);
      });
    }
  },
  methods: {
    getModuleName(index2) {
      const name = /[^-]*$/.exec(typeof index2 === "number" ? this.moduleTools[index2] : index2)[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    getToolName(index2) {
      return tools[this.getModuleName(index2)];
    },
    getModuleCard(index2) {
      return this.cards[this.getModuleName(index2)];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = vue_cjs_prod.resolveComponent("Head");
  const _component_Title = vue_cjs_prod.resolveComponent("Title");
  const _component_ToolsHeader = __nuxt_component_0$2;
  const _component_Button = __nuxt_component_1$1;
  const _component_CubeIcon = vue_cjs_prod.resolveComponent("CubeIcon");
  const _component_Slider = __nuxt_component_2$2;
  const _component_ClientOnly = __nuxt_component_9;
  const _component_NuxtLink = __nuxt_component_0$6;
  const _component_Empty = __nuxt_component_5$1;
  const _component_LightBulbIcon = vue_cjs_prod.resolveComponent("LightBulbIcon");
  if (_ctx.module) {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Head, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                _push3(`${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.slug ? `Outils ${((_a = _ctx.$route.params.slug) == null ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = _ctx.$route.params.slug) == null ? void 0 : _b.slice(1))}` : "Accueil")}`);
              } else {
                return [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$route.params.slug ? `Outils ${((_c = _ctx.$route.params.slug) == null ? void 0 : _c.charAt(0).toUpperCase()) + ((_d = _ctx.$route.params.slug) == null ? void 0 : _d.slice(1))}` : "Accueil"), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_Title, null, {
              default: vue_cjs_prod.withCtx(() => {
                var _a, _b;
                return [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$route.params.slug ? `Outils ${((_a = _ctx.$route.params.slug) == null ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = _ctx.$route.params.slug) == null ? void 0 : _b.slice(1))}` : "Accueil"), 1)
                ];
              }),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsHeader, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<h1 class="font-extrabold text-4xl leading-[3.5rem] text-center max-w-lg mx-auto"${_scopeId}>Et oui, on propose des outils pour <span class="capitalize"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.slug)}</span> !</h1><h2 class="text-2xl leading-relaxed mt-4 text-center max-w-lg mx-auto"${_scopeId}>Ici sont rassembl\xE9s nos outils qui int\xE9ragissent avec Discord ! Nos outils sortent au fil du temps et en fonction de votre attente.</h2>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
            class: "mt-8 bg-white mx-auto",
            text: "Voir les outils\r\n                que l'on propose",
            small: true
          }, {
            icon_left: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.exports.ssrRenderComponent(_component_CubeIcon, { class: "mr-3 w-10 h-10" }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-10 h-10" })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode("h1", { class: "font-extrabold text-4xl leading-[3.5rem] text-center max-w-lg mx-auto" }, [
              vue_cjs_prod.createTextVNode("Et oui, on propose des outils pour "),
              vue_cjs_prod.createVNode("span", { class: "capitalize" }, vue_cjs_prod.toDisplayString(_ctx.$route.params.slug), 1),
              vue_cjs_prod.createTextVNode(" !")
            ]),
            vue_cjs_prod.createVNode("h2", { class: "text-2xl leading-relaxed mt-4 text-center max-w-lg mx-auto" }, "Ici sont rassembl\xE9s nos outils qui int\xE9ragissent avec Discord ! Nos outils sortent au fil du temps et en fonction de votre attente."),
            vue_cjs_prod.createVNode(_component_Button, {
              class: "mt-8 bg-white mx-auto",
              text: "Voir les outils\r\n                que l'on propose",
              small: true
            }, {
              icon_left: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-10 h-10" })
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<section class="relative bg-white dark:bg-dark-800 py-12 shadow-sm dark:shadow-lg"><div class="absolute bg-white dark:bg-dark-700 p-12 rounded-3xl shadow-2xl left-1/2 -translate-x-1/2 top-4 -translate-y-2/3 flex gap-4 lg:gap-12 font-extrabold text-5xl dark:text-white text-black items-center w-fit z-10"><img class="w-20 h-20"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}> + `);
    if (typeof _ctx.module.icon === "string") {
      _push(`<img${serverRenderer.exports.ssrRenderAttr("src", `/icons/${_ctx.module.icon}`)} class="w-20 h-20">`);
    } else {
      serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(_ctx.module.icon), { class: "w-20 h-20" }, null), _parent);
    }
    _push(`</div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Slider, {
      direction: "horizontal",
      duration: "60s"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex"${_scopeId}><!--[-->`);
          serverRenderer.exports.ssrRenderList(3, (i) => {
            _push2(`<div class="flex"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList($options.tools, (tool, i2) => {
              _push2(`<div class="bg-gray-200 dark:bg-dark-700 text-gray-500 dark:text-gray-400 px-6 py-4 rounded-3xl font-semibold text-lg mr-6"${_scopeId}>${serverRenderer.exports.ssrInterpolate($options.getToolName(tool))}</div>`);
            });
            _push2(`<!--]--></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            vue_cjs_prod.createVNode("div", { class: "flex" }, [
              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(3, (i) => {
                return vue_cjs_prod.createVNode("div", {
                  key: i,
                  class: "flex"
                }, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($options.tools, (tool, i2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                      key: i2,
                      class: "bg-gray-200 dark:bg-dark-700 text-gray-500 dark:text-gray-400 px-6 py-4 rounded-3xl font-semibold text-lg mr-6"
                    }, vue_cjs_prod.toDisplayString($options.getToolName(tool)), 1);
                  }), 128))
                ]);
              }), 64))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</section><section class="container mx-auto py-24 px-4"><div class="font-bold text-xl text-center">Nos outils</div><div class="text-lg text-center mt-4">D\xE9di\xE9s \xE0 <span class="capitalize">${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.slug)}</span></div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8"${_scopeId}><!--[-->`);
          serverRenderer.exports.ssrRenderList(_ctx.moduleTools, (tool, index2) => {
            _push2(`<div${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: `/tools/${_ctx.$route.params.slug}/${$options.getModuleName(index2).toLowerCase()}`
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer.exports.ssrRenderVNode(_push3, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent({ ...$options.getModuleCard(index2) }), null, null), _parent3, _scopeId2);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent({ ...$options.getModuleCard(index2) })))
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
            vue_cjs_prod.createVNode("div", { class: "grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8" }, [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.moduleTools, (tool, index2) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: index2 }, [
                  vue_cjs_prod.createVNode(_component_NuxtLink, {
                    to: `/tools/${_ctx.$route.params.slug}/${$options.getModuleName(index2).toLowerCase()}`
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent({ ...$options.getModuleCard(index2) })))
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
    _push(`<div class="text-lg text-center mt-12 max-w-md mx-auto">Les outils, que tu pourras retrouver ailleurs, qui te seront utiles pour <span class="capitalize">${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.slug)}</span></div><div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8"><div class="col-span-3 mt-4">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Empty, { text: "Nous n'avons pas trouv\xE9 d'outils suppl\xE9mentaires..." }, null, _parent));
    _push(`</div></div></section><section class="bg-gradient-to-b from-primary-400 to-primary-500 py-24 text-white mt-8"><div class="font-bold text-3xl text-center">Tu n&#39;as pas trouv\xE9 ton bonheur?</div><div class="text-xl text-center mt-4 leading-relaxed max-w-lg mx-auto">Nous acceptons toutes id\xE9es de nouvels outils, qu\u2019ils soient li\xE9s \xE0 <span class="capitalize">${serverRenderer.exports.ssrInterpolate(_ctx.$route.params.slug)}</span> ou pas alors n\u2019h\xE9sites pas \xE0 nous faire part de ta suggestion !</div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
      color: "white",
      class: "mt-8 mx-auto opacity-25",
      text: "Faire une suggestion"
    }, {
      icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_LightBulbIcon, { class: "mr-3 w-8 h-8" }, null, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_LightBulbIcon, { class: "mr-3 w-8 h-8" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</section></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.f78f53ae.mjs.map
