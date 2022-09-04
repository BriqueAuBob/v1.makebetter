import { _ as _export_sfc, j as useHead, c as client, e as __nuxt_component_0$5, d as __nuxt_component_1$3, r as __nuxt_component_2$1, s as __nuxt_component_3$2 } from './server.mjs';
import { withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData.73dbae35.mjs';
import { CubeIcon } from '@heroicons/vue/outline/esm/index.js';
import { a as allCards } from './Module.a4a724b2.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _imports_0 } from './squares.236acb7f.mjs';
import { _ as _imports_0$1 } from './discord.6d29de38.mjs';
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
        const { data } = await client.get("statistics");
        const testimonials = await client.get("testimonials?max=9");
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
    return {
      members: requests.data.value.members,
      toolsStat: requests.data.value.tools,
      testimonials: requests.data.value.testimonials
    };
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
  const _component_Button = __nuxt_component_1$3;
  const _component_Stat = __nuxt_component_2$1;
  const _component_Testimonial = __nuxt_component_3$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative bg-gradient-to-br from-primary-500 to-primary-800 py-48"><div class="absolute left-0 bottom-0 hidden md:block"><img class="w-full"${ssrRenderAttr("src", _imports_0)}></div><div class="absolute right-0 bottom-0"><img class="w-full -scale-x-100"${ssrRenderAttr("src", _imports_0)}></div><div class="container mx-auto px-4"><h1 class="mx-auto max-w-xl text-center text-5xl font-extrabold leading-snug text-white"> D\xE9veloppe ton projet \xE0 l\u2019aide de nos outils </h1><h2 class="mx-auto mt-4 text-center text-2xl font-medium leading-relaxed text-white"> Ils te serviront pour n\u2019importe quel type de projet </h2><svg class="mx-auto mt-12 w-full rounded-full" height="6" viewBox="0 0 360 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H357" stroke="#F9F9F9" stroke-width="5" stroke-linecap="round" stroke-dasharray="32 24"></path></svg><h3 class="mx-auto mt-12 text-center font-medium text-white"> S\xE9lectionne la plateforme sur laquelle tu souhaites trouver un outil </h3><div class="flex justify-center"><div class="relative mt-4 inline-flex justify-center gap-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#tools" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 cursor-pointer"${ssrRenderAttr("src", _imports_0$1)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            onClick: ($event) => _ctx.currentCategory = "discord",
            class: "w-12 cursor-pointer",
            src: _imports_0$1
          }, null, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<img class="absolute -left-20 top-4"${ssrRenderAttr("src", _imports_2)}><img class="absolute -right-20 top-2"${ssrRenderAttr("src", _imports_3)}></div></div></div></header><section id="tools" class="container mx-auto flex flex-col justify-center py-32"><div class="text-center text-xl font-semibold"> Les outils que l&#39;on propose sur UMaestro </div><div class="mx-auto mt-8 flex w-fit gap-2 rounded-full bg-white p-2 shadow-sm dark:bg-dark-900"><div class="${ssrRenderClass([_ctx.currentCategory === null && "bg-primary-500 text-white", "flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ease-in"])}"> Tout les outils </div><!--[-->`);
  ssrRenderList(_ctx.categories, (category, index2) => {
    _push(`<div class="${ssrRenderClass([_ctx.currentCategory === category && "bg-primary-500 text-white", "flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold capitalize transition duration-200 ease-in dark:text-white"])}">${ssrInterpolate(category)}</div>`);
  });
  _push(`<!--]--></div><div class="mt-8 grid gap-8 px-4 md:px-16 lg:grid-cols-3 lg:px-24" id="__grid__cards"><!--[-->`);
  ssrRenderList(_ctx.toolsGet.filter(
    (tool) => !_ctx.currentCategory || tool.category === _ctx.currentCategory
  ).slice(0, 3), (tool, index2) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/tools/${tool.category}/${tool.tool}`,
      "data-aos": "zoom-in",
      "data-aos-offset": "100"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent({ ..._ctx.cards[tool.tool] }), { key: index2 }, null), _parent2, _scopeId);
        } else {
          return [
            (openBlock(), createBlock(resolveDynamicComponent({ ..._ctx.cards[tool.tool] }), { key: index2 }))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/tools/discord",
    class: "mt-12"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          class: "mx-auto",
          color: "primary",
          small: true,
          text: "Voir les autres outils"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
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
  _push(`</section><section class="flex flex-col justify-between bg-secondary-500 py-24"><div class="container mx-auto"><div class="text-center text-xl font-semibold text-dark-950" data-aos="fade-up" data-aos-delay="200"> UMaestro, c&#39;est </div><div class="mt-16 grid grid-cols-2 gap-12 px-4 text-dark-950 md:px-16 lg:grid-cols-4 lg:px-48">`);
  _push(ssrRenderComponent(_component_Stat, {
    icon: "UserIcon",
    name: "Utilisateurs",
    value: $setup.members || 0,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "300"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Stat, {
    icon: "LinkIcon",
    name: "Partenaires",
    value: 2,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "400"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Stat, {
    icon: "CubeIcon",
    name: "Outils",
    value: _ctx.toolsGet.length,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "500"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Stat, {
    icon: "ChartPieIcon",
    name: "Utilisations de nos outils",
    value: $setup.toolsStat || 0,
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "600"
  }, null, _parent));
  _push(`</div></div></section><section class="container mx-auto pt-32 pb-48"><div class="mx-auto mb-8 text-center text-xl font-semibold leading-relaxed"> Ce que les gens disent de nous </div>`);
  if ($setup.testimonials.length <= 0) {
    _push(`<div class="mx-auto mb-16 text-center text-lg"> Il n&#39;y a pas d&#39;avis pour le moment... Poste le tiens ! </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="relative mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3"><!--[-->`);
  ssrRenderList($setup.testimonials, (rate, id) => {
    _push(ssrRenderComponent(_component_Testimonial, {
      key: id,
      rate,
      "data-aos": "fade-up",
      "data-aos-offset": "200",
      "data-aos-delay": 200 + id * 100
    }, null, _parent));
  });
  _push(`<!--]--><div class="${ssrRenderClass([
    $setup.testimonials.length > 0 && "bottom-0 flex h-96 translate-y-16 items-center bg-gradient-to-t from-background via-background to-transparent dark:from-dark-950 dark:via-dark-950",
    "absolute w-full"
  ])}">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "rates",
    class: "mx-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          color: "theme",
          class: "relative mx-auto px-16 py-4 text-yellow-500",
          text: "Voir les avis"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_4)} class="absolute -left-12 -top-12 -z-1 h-32 w-32"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} class="absolute right-0 -top-6 -z-1 h-14 w-14"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} class="absolute -right-8 -bottom-10 h-20 w-20"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_4,
                  class: "absolute -left-12 -top-12 -z-1 h-32 w-32"
                }),
                createVNode("img", {
                  src: _imports_5,
                  class: "absolute right-0 -top-6 -z-1 h-14 w-14"
                }),
                createVNode("img", {
                  src: _imports_6,
                  class: "absolute -right-8 -bottom-10 h-20 w-20"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            color: "theme",
            class: "relative mx-auto px-16 py-4 text-yellow-500",
            text: "Voir les avis"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_4,
                class: "absolute -left-12 -top-12 -z-1 h-32 w-32"
              }),
              createVNode("img", {
                src: _imports_5,
                class: "absolute right-0 -top-6 -z-1 h-14 w-14"
              }),
              createVNode("img", {
                src: _imports_6,
                class: "absolute -right-8 -bottom-10 h-20 w-20"
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.fd24bed8.mjs.map
