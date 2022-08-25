import { _ as _export_sfc, k as useHead, b as axios2, c as vue_cjs_prod, g as __nuxt_component_0$5, e as __nuxt_component_1$2, r as __nuxt_component_2$1, s as __nuxt_component_3$2 } from './server.mjs';
import { u as useAsyncData } from './asyncData.9514b5f3.mjs';
import { CubeIcon } from '@heroicons/vue/outline/esm/index.js';
import { a as allCards } from './Module.41fa754e.mjs';
import { _ as _imports_0 } from './squares.af6a1819.mjs';
import { _ as _imports_0$1 } from './discord.598a3b34.mjs';
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

const _imports_2 = "" + globalThis.__publicAssetsURL("shapes/arrow_l.svg");
const _imports_3 = "" + globalThis.__publicAssetsURL("shapes/arrow_r.svg");
const _imports_4 = "" + globalThis.__publicAssetsURL("objects/star.png");
const _imports_5 = "" + globalThis.__publicAssetsURL("objects/star2.png");
const _imports_6 = "" + globalThis.__publicAssetsURL("objects/star3.png");
const _sfc_main = {
  components: { CubeIcon },
  async setup() {
    useHead({
      title: "Accueil"
    });
    const requests = await useAsyncData("count", async () => {
      try {
        const { data } = await axios2.get("statistics");
        const testimonials = await axios2.get("testimonials?max=9");
        return {
          members: data.members,
          tools: data.tools,
          testimonials: testimonials.data.testimonials
        };
      } catch (e) {
        return {
          members: 0,
          tools: 0,
          testimonials: []
        };
      }
    }, "$PslAyef5YX");
    return { members: requests.data.value.members, toolsStat: requests.data.value.tools, testimonials: requests.data.value.testimonials };
  },
  data: () => ({
    currentCategory: null,
    categories: [],
    toolsGet: [],
    cards: allCards
  }),
  mounted() {
    const routes = this.$router.options.routes.filter((route) => route.name.startsWith("tools-")).map((route) => {
      const match = route.name.match(/tools-(.*)-(.*)/gm);
      if (match) {
        return match[0].split("-");
      }
    }).filter((route) => route !== null && route !== void 0);
    this.categories = routes.map((route) => route[1]).sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
    this.toolsGet = routes.map((route) => ({
      category: route[1],
      tool: route[2]
    }));
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Button = __nuxt_component_1$2;
  const _component_Stat = __nuxt_component_2$1;
  const _component_Testimonial = __nuxt_component_3$2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="relative py-48 bg-gradient-to-br from-primary-500 to-primary-800"><div class="absolute left-0 bottom-0 hidden md:block"><img class="w-full"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div><div class="absolute right-0 bottom-0"><img class="w-full -scale-x-100"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}></div><div class="container mx-auto px-4"><h1 class="font-extrabold text-5xl max-w-xl leading-snug text-white text-center mx-auto">D\xE9veloppe ton projet \xE0 l\u2019aide de nos outils</h1><h2 class="leading-snug text-2xl leading-relaxed text-white font-medium mt-4 text-center mx-auto"> Ils te serviront pour n\u2019importe quel type de projet </h2><svg class="w-full mx-auto mt-12 rounded-full" height="6" viewBox="0 0 360 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H357" stroke="#F9F9F9" stroke-width="5" stroke-linecap="round" stroke-dasharray="32 24"></path></svg><h3 class="text-white text-center mx-auto font-medium mt-12">S\xE9lectionne la plateforme sur laquelle tu souhaites trouver un outil</h3><div class="flex justify-center"><div class="inline-flex gap-4 justify-center mt-4 relative">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "#tools" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 cursor-pointer"${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)}${_scopeId}>`);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            onClick: ($event) => _ctx.currentCategory = "discord",
            class: "w-12 cursor-pointer",
            src: _imports_0$1
          }, null, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img class="absolute -left-20 top-4"${serverRenderer.exports.ssrRenderAttr("src", _imports_2)}><img class="absolute -right-20 top-2"${serverRenderer.exports.ssrRenderAttr("src", _imports_3)}></div></div></div></header><section id="tools" class="py-32 flex flex-col justify-center container mx-auto"><div class="text-xl font-semibold text-center">Les outils que l&#39;on propose sur UMaestro</div><div class="bg-white dark:bg-dark-900 p-2 rounded-full w-fit mt-8 mx-auto flex gap-2 shadow-sm"><div class="${serverRenderer.exports.ssrRenderClass([_ctx.currentCategory === null && "bg-primary-500 text-white", "rounded-full px-4 py-2 text-sm font-semibold cursor-pointer flex gap-2 items-center transition ease-in duration-200"])}">Tout les outils</div><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.categories, (category, index2) => {
    _push(`<div class="${serverRenderer.exports.ssrRenderClass([_ctx.currentCategory === category && "bg-primary-500 text-white", "rounded-full px-4 py-2 text-sm font-semibold cursor-pointer flex gap-2 items-center dark:text-white capitalize transition ease-in duration-200"])}">${serverRenderer.exports.ssrInterpolate(category)}</div>`);
  });
  _push(`<!--]--></div><div class="grid lg:grid-cols-3 gap-8 mt-8 px-4 md:px-16 lg:px-24" id="__grid__cards"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.toolsGet.filter((tool) => !_ctx.currentCategory || tool.category === _ctx.currentCategory).slice(0, 3), (tool, index2) => {
    _push(`<div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
      to: `/tools/${tool.category}/${tool.tool}`,
      "data-aos": "zoom-in",
      "data-aos-offset": "100"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          serverRenderer.exports.ssrRenderVNode(_push2, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent({ ..._ctx.cards[tool.tool] }), { key: index2 }, null), _parent2, _scopeId);
        } else {
          return [
            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent({ ..._ctx.cards[tool.tool] }), { key: index2 }))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/tools/discord",
    class: "mt-12"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
          class: "mx-auto",
          color: "primary",
          small: true,
          text: "Voir les autres outils"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Button, {
            class: "mx-auto",
            color: "primary",
            small: true,
            text: "Voir les autres outils"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section class="py-24 flex flex-col justify-between bg-secondary-500"><div class="container mx-auto"><div class="text-xl font-semibold text-center text-dark-950" data-aos="fade-up" data-aos-delay="200">UMaestro, c&#39;est</div><div class="gap-12 px-4 grid grid-cols-2 lg:grid-cols-4 md:px-16 lg:px-48 mt-16 text-dark-950">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Stat, {
    icon: "UserIcon",
    name: "Utilisateurs",
    value: $setup.members || 0,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "300"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Stat, {
    icon: "LinkIcon",
    name: "Partenaires",
    value: 2,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "400"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Stat, {
    icon: "CubeIcon",
    name: "Outils",
    value: _ctx.toolsGet.length,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "500"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Stat, {
    icon: "ChartPieIcon",
    name: "Utilisations de nos outils",
    value: $setup.toolsStat || 0,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "600"
  }, null, _parent));
  _push(`</div></div></section><section class="container mx-auto pt-32 pb-48"><div class="font-semibold text-xl leading-relaxed text-center mx-auto mb-8">Ce que les gens disent de nous</div>`);
  if ($setup.testimonials.length <= 0) {
    _push(`<div class="text-lg mx-auto text-center mb-16">Il n&#39;y a pas d&#39;avis pour le moment... Poste le tiens !</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-8 relative">`);
  if ($setup.testimonials.length > 0) {
    _push(`<!--[-->`);
    serverRenderer.exports.ssrRenderList($setup.testimonials, (rate, id) => {
      _push(serverRenderer.exports.ssrRenderComponent(_component_Testimonial, {
        key: id,
        rate,
        "data-aos": "fade-up",
        "data-aos-offset": "200",
        "data-aos-delay": 200 + id * 100
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${serverRenderer.exports.ssrRenderClass([$setup.testimonials.length > 0 && "h-96 bg-gradient-to-t from-background dark:from-dark-950 via-background dark:via-dark-950 to-transparent bottom-0 translate-y-16 flex items-center", "absolute w-full"])}">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "rates",
    class: "mx-auto"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
          color: "theme",
          class: "mx-auto relative text-yellow-500 px-16 py-4",
          text: "Voir les avis"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_4)} class="absolute -left-12 -top-12 w-32 h-32 -z-1"${_scopeId2}><img${serverRenderer.exports.ssrRenderAttr("src", _imports_5)} class="absolute right-0 -top-6 w-14 h-14 -z-1"${_scopeId2}><img${serverRenderer.exports.ssrRenderAttr("src", _imports_6)} class="absolute -right-8 -bottom-10 w-20 h-20"${_scopeId2}>`);
            } else {
              return [
                vue_cjs_prod.createVNode("img", {
                  src: _imports_4,
                  class: "absolute -left-12 -top-12 w-32 h-32 -z-1"
                }),
                vue_cjs_prod.createVNode("img", {
                  src: _imports_5,
                  class: "absolute right-0 -top-6 w-14 h-14 -z-1"
                }),
                vue_cjs_prod.createVNode("img", {
                  src: _imports_6,
                  class: "absolute -right-8 -bottom-10 w-20 h-20"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Button, {
            color: "theme",
            class: "mx-auto relative text-yellow-500 px-16 py-4",
            text: "Voir les avis"
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode("img", {
                src: _imports_4,
                class: "absolute -left-12 -top-12 w-32 h-32 -z-1"
              }),
              vue_cjs_prod.createVNode("img", {
                src: _imports_5,
                class: "absolute right-0 -top-6 w-14 h-14 -z-1"
              }),
              vue_cjs_prod.createVNode("img", {
                src: _imports_6,
                class: "absolute -right-8 -bottom-10 w-20 h-20"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.48a0f24b.mjs.map
