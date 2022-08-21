import { _ as _export_sfc, u as useHead, v as vue_cjs_prod, e as axios, f as __nuxt_component_0, d as __nuxt_component_1, k as __nuxt_component_2, l as __nuxt_component_3, m as __nuxt_component_4, n as __nuxt_component_3$1 } from "../server.mjs";
import { u as useAsyncData } from "./asyncData.be0d0492.js";
import "destr";
import { CubeIcon, EyeIcon, CodeIcon, PencilIcon } from "@heroicons/vue/outline/esm/index.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "@vue/server-renderer";
import { _ as _imports_0 } from "./red_pink_group.82ff82e0.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "h3";
import "defu";
import "axios";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _imports_1 = "" + globalThis.__publicAssetsURL("objects/tools.png");
const _imports_2 = "" + globalThis.__publicAssetsURL("characters/tchating_character.png");
const _imports_3 = "" + globalThis.__publicAssetsURL("objects/star.png");
const _imports_4 = "" + globalThis.__publicAssetsURL("objects/star2.png");
const _imports_5 = "" + globalThis.__publicAssetsURL("objects/star3.png");
const _sfc_main = {
  components: { CubeIcon },
  async setup() {
    useHead({
      title: "Accueil"
    });
    const requests = await useAsyncData("count", async () => {
      try {
        const { data } = await axios.get("statistics");
        const testimonials = await axios.get("testimonials?max=9");
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
    return { members: requests.data.value.members, tools: requests.data.value.tools, testimonials: requests.data.value.testimonials };
  },
  data: () => ({
    categories: [
      { color: "#0B0B0F", name: "G\xE9n\xE9ral", icon: EyeIcon, disabled: true },
      { color: "#5865F2", name: "Discord", icon: "discord.svg" },
      { color: "#15B79A", name: "D\xE9veloppement", icon: CodeIcon, disabled: true },
      { color: "#A970FF", name: "Twitch", icon: CubeIcon, disabled: true },
      { color: "#EB3B5B", name: "Graphisme", icon: PencilIcon, disabled: true }
    ]
  }),
  computed: {
    activeCategories() {
      return this.categories.filter((category) => !category.disabled);
    },
    disabledCategories() {
      return this.categories.filter((category) => category.disabled);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Button = __nuxt_component_1;
  const _component_CubeIcon = vue_cjs_prod.resolveComponent("CubeIcon");
  const _component_Stat = __nuxt_component_2;
  const _component_FeaturesList = __nuxt_component_3;
  const _component_ToolsCategoryCard = __nuxt_component_4;
  const _component_Testimonial = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative pt-32 lg:py-56 before:content-[&#39;&#39;] before:bg-primary-500 before:-z-1 before:w-full before:h-full before:transform before:skew-y-3 before:absolute before:-top-16"><div class="container mx-auto lg:flex justify-between px-4"><div><h1 class="font-bold text-5xl max-w-md leading-snug text-white"><span class="font-extrabold">Le</span> site utile pour <span class="font-extrabold">tous</span></h1><h2 class="leading-snug text-3xl max-w-lg text-white mt-4"> Affine tes projets et am\xE9liore les \xE0 l&#39;aide des outils que l&#39;on met \xE0 ta disposition ! </h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "#tools" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          class: "mt-8",
          text: "Voir les outils\r\n                            que l'on propose"
        }, {
          icon_left: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CubeIcon, { class: "mr-3 w-10 h-10" }, null, _parent3, _scopeId2));
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
          vue_cjs_prod.createVNode(_component_Button, {
            class: "mt-8",
            text: "Voir les outils\r\n                            que l'on propose"
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
  _push(`</div><div class="relative w-3/4 mx-auto lg:mx-0 lg:w-1/2 lg:translate-y-24"><div class="w-full bottom-0 transform translate-y-56 lg:absolute lg:translate-y-96"><img${ssrRenderAttr("src", _imports_0)} alt="Red and pink group characters" class="w-full -translate-y-16"><div class="bg-white dark:bg-dark-800 px-12 py-12 rounded-3xl shadow-xl w-full -translate-y-64 flex flex-wrap gap-y-12 justify-between">`);
  _push(ssrRenderComponent(_component_Stat, {
    icon: "UserIcon",
    name: "Utilisateurs",
    value: $setup.members
  }, null, _parent));
  _push(ssrRenderComponent(_component_Stat, {
    icon: "CubeIcon",
    name: "Outils",
    value: 2
  }, null, _parent));
  _push(ssrRenderComponent(_component_Stat, {
    icon: "LinkIcon",
    name: "Partenaires",
    value: 2
  }, null, _parent));
  _push(ssrRenderComponent(_component_Stat, {
    icon: "ChartPieIcon",
    name: "Utilisations",
    value: $setup.tools
  }, null, _parent));
  _push(`</div></div></div></div></header><section class="container mx-auto px-4 py-24 grid lg:grid-cols-2"><div><div class="font-semibold text-2xl leading-relaxed max-w-sm">Qu&#39;est-ce qu&#39;on fait sur UMaestro?</div>`);
  _push(ssrRenderComponent(_component_FeaturesList, { class: "mt-8" }, null, _parent));
  _push(`</div><img${ssrRenderAttr("src", _imports_1)} alt="Objects 3D" class="w-2/3 mx-auto mt-8 lg:mt-0"></section><section class="container mx-auto px-4 py-16" id="tools"><div class="font-semibold text-2xl leading-relaxed max-w-sm text-center mx-auto">On propose d\xE9j\xE0 des outils dans ces cat\xE9gories</div><div class="flex flex-wrap justify-center gap-6 mt-8 max-w-5xl mx-auto"><!--[-->`);
  ssrRenderList($options.activeCategories, (category, index2) => {
    _push(ssrRenderComponent(_component_ToolsCategoryCard, {
      key: index2,
      category
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="font-medium text-sm text-center mx-auto mt-8">Et bient\xF4t dans d&#39;autres...</div><div class="flex flex-wrap justify-center gap-6 mt-4 max-w-5xl mx-auto"><!--[-->`);
  ssrRenderList($options.disabledCategories, (category, index2) => {
    _push(ssrRenderComponent(_component_ToolsCategoryCard, {
      key: index2,
      category
    }, null, _parent));
  });
  _push(`<!--]--></div></section><section class="bg-gradient-to-t from-primary-500 to-primary-500 pt-16 relative mt-20 overflow-x-hidden"><div class="container mx-auto px-4 text-white"><div class="grid lg:grid-cols-2 gap-16"><div class="py-16"><div class="font-semibold text-3xl leading-relaxed max-w-sm">Nous recrutons</div><p class="text-xl leading-relaxed mt-4 text-gray-200">UMaestro est \xE0 la recherche de nouvelles t\xEAtes afin d\u2019aider dans la conception des projets et garder les services propos\xE9s en ligne</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "hire" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          color: "white",
          class: "mt-10",
          icon: "Cube",
          text: "Voir les postes disponibles"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Button, {
            color: "white",
            class: "mt-10",
            icon: "Cube",
            text: "Voir les postes disponibles"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img${ssrRenderAttr("src", _imports_2)} class="mx-auto lg:w-2/3" alt="Tchating 3D character web developer"></div></div><div class="absolute top-0 flex overflow-x-hidden fill-background dark:fill-dark-900"><!--[-->`);
  ssrRenderList(7, (i) => {
    _push(`<svg width="323" height="51" viewBox="0 0 221 35" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 35L221 0H0V35Z"></path></svg>`);
  });
  _push(`<!--]--></div><div class="absolute bottom-0 flex -scale-x-100 -scale-y-100 overflow-x-hidden fill-background dark:fill-dark-900"><!--[-->`);
  ssrRenderList(7, (i) => {
    _push(`<svg width="323" height="51" viewBox="0 0 221 35" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 35L221 0H0V35Z"></path></svg>`);
  });
  _push(`<!--]--></div></section><section class="container mx-auto px-4 py-16 mt-24"><div class="font-semibold text-2xl leading-relaxed max-w-xs text-center mx-auto">Ce que les gens disent de nous</div><div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-8 relative"><!--[-->`);
  ssrRenderList($setup.testimonials, (rate, id) => {
    _push(ssrRenderComponent(_component_Testimonial, {
      key: id,
      rate
    }, null, _parent));
  });
  _push(`<!--]--><div class="absolute w-full h-96 bg-gradient-to-t from-background dark:from-dark-900 via-background dark:via-dark-900 to-transparent bottom-0 translate-y-16 flex items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "rates",
    class: "mx-auto"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          color: "white",
          class: "mx-auto relative",
          text: "Voir les avis"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_3)} class="absolute -left-12 -top-12 w-32 h-32 -z-1"${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} class="absolute right-0 -top-6 w-14 h-14 -z-1"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} class="absolute -right-8 -bottom-10 w-20 h-20"${_scopeId2}>`);
            } else {
              return [
                vue_cjs_prod.createVNode("img", {
                  src: _imports_3,
                  class: "absolute -left-12 -top-12 w-32 h-32 -z-1"
                }),
                vue_cjs_prod.createVNode("img", {
                  src: _imports_4,
                  class: "absolute right-0 -top-6 w-14 h-14 -z-1"
                }),
                vue_cjs_prod.createVNode("img", {
                  src: _imports_5,
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
            color: "white",
            class: "mx-auto relative",
            text: "Voir les avis"
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode("img", {
                src: _imports_3,
                class: "absolute -left-12 -top-12 w-32 h-32 -z-1"
              }),
              vue_cjs_prod.createVNode("img", {
                src: _imports_4,
                class: "absolute right-0 -top-6 w-14 h-14 -z-1"
              }),
              vue_cjs_prod.createVNode("img", {
                src: _imports_5,
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
export {
  index as default
};
