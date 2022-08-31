import { _ as _export_sfc, h as useHead, v as vue_cjs_prod, d as __nuxt_component_0, c as __nuxt_component_1, i as __nuxt_component_2, j as __nuxt_component_9, k as __nuxt_component_4 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "@vue/server-renderer";
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
import "@heroicons/vue/outline/esm/index.js";
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _imports_0 = "" + globalThis.__publicAssetsURL("icons/double_chevron.svg");
const _sfc_main = {
  setup() {
    useHead({
      title: "Recrutements"
    });
  },
  data: () => ({
    headerTall: "0px",
    categories: [
      {
        title: "Tu as de l'exp\xE9rience sur Discord?",
        subtitle: "Nous recrutons des personnes qui savent mod\xE9rer...",
        jobs: [
          {
            name: "Mod\xE9rateur",
            description: "Poste visant \xE0 r\xE9guler la communaut\xE9 et \xE0 faire de UMaestro un espace sain tout en cr\xE9ant de l'activit\xE9.",
            requirement: "Exp\xE9riences notables attendues"
          },
          {
            name: "Community Manager",
            description: ""
          },
          {
            name: "Animateur",
            description: "Cr\xE9ateur d'\xE9v\xE8nement visant \xE0 cr\xE9e une activit\xE9 sur le serveur afin de rassembl\xE9e la communaut\xE9 de UMaestro \xE0 travers des \xE9v\xE8nements."
          }
        ]
      },
      {
        title: "Tu as l\u2019\xE2me d\u2019un artiste?",
        subtitle: "Nous recrutons des graphistes...",
        jobs: [
          {
            name: "UI Designer",
            description: "Cr\xE9ateur d'interface utilisateur pour les services de UMaestro."
          },
          {
            name: "Illustrateur",
            description: "Cr\xE9ateur de logos, illustrations et images dans l'objectif d'embellir les informations et communiqu\xE9s de UMaestro et Multid."
          },
          {
            name: "Mod\xE9lisateur 3D",
            description: "Cr\xE9ateur d'objet 3D pour les illustrations de UMaestro"
          }
        ]
      },
      {
        title: "Tu aimes d\xE9velopper des syst\xE8mes innovants?",
        subtitle: "Nous recrutons des d\xE9veloppeurs...",
        jobs: [
          {
            name: "D\xE9veloppeur Back-End",
            description: "D\xE9veloppement de(s) API(s) de UMaestro",
            requirement: "Autonomie et grandes connaissances"
          },
          {
            name: "D\xE9veloppeur Front-End",
            description: "D\xE9veloppement de(s) application(s) web de UMaestro",
            requirement: "Autonomie et grandes connaissances"
          },
          {
            name: "D\xE9veloppeur Full-Stack",
            description: "D\xE9veloppement de(s) API(s) de UMaestro et le(s) application(s) web de UMaestro",
            requirement: "Autonomie et grandes connaissances"
          },
          {
            name: "D\xE9veloppeur Bot",
            description: "D\xE9veloppement des bots Discord UMaestro et Multid",
            requirement: "Autonomie et grandes connaissances"
          }
        ]
      }
    ],
    colors: [
      "bg-red-500",
      "bg-yellow-500",
      "bg-secondary-600",
      "bg-primary-700",
      "bg-green-500",
      "bg-stone-500"
    ]
  }),
  mounted() {
    this.recalculateSize();
    window.onresize = () => {
      this.recalculateSize();
    };
  },
  methods: {
    recalculateSize() {
      setTimeout(() => {
        var _a;
        this.headerTall = ((_a = this.$refs.header) == null ? void 0 : _a.clientHeight) + "px";
      }, 550);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Button = __nuxt_component_1;
  const _component_Slider = __nuxt_component_2;
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Card = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative overflow-x-hidden bg-gradient-to-br from-primary-500 to-primary-800 text-white"><div class="container mx-auto px-4 pt-48 pb-48"><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><div class="lg:col-span-2"><h1 class="text-5xl font-extrabold">UMaestro recrute !</h1><h2 class="mt-6 max-w-xl text-2xl leading-relaxed"> On recrute des personnes comp\xE9tentes dans divers domaines pour aider \xE0 la conception et la maintenance de nos diff\xE9rents projets </h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "#postes" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          class: "mt-10",
          text: "Voir les postes disponible"
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Button, {
            class: "mt-10",
            text: "Voir les postes disponible"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="relative hidden md:block">`);
  _push(ssrRenderComponent(_component_Slider, {
    direction: "vertical",
    class: "absolute -top-48 w-full",
    duration: "60s",
    style: `height: ${_ctx.headerTall}`
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.colors.sort(
          (a, b) => 0.5 - Math.random()
        ), (color, index) => {
          _push2(`<div class="my-12 flex shadow-xl"${_scopeId}><aside class="${ssrRenderClass(`${color} w-1/3 rounded-l-3xl p-8`)}"${_scopeId}><div class="pt-full mx-auto h-24 w-24 rounded-full bg-gray-200"${_scopeId}></div><div class="pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-gray-200"${_scopeId}></div><div class="pt-full mt-2 h-4 w-1/3 rounded-sm bg-gray-200"${_scopeId}></div></aside>`);
          _push2(ssrRenderComponent(_component_ClientOnly, null, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<main class="w-2/3 rounded-r-3xl bg-white py-8 pl-4 pr-8"${_scopeId2}><div class="pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-dark-800"${_scopeId2}></div><div class="pt-full mt-2 mb-2 h-4 w-1/3 rounded-sm bg-dark-700"${_scopeId2}></div><!--[-->`);
                ssrRenderList(Math.max(2, Math.floor(Math.random() * 4)), (i) => {
                  _push3(`<div class="${ssrRenderClass([
                    "pt-full mt-2 h-2 rounded-sm bg-dark-600",
                    [
                      "w-1/3",
                      "w-1/4",
                      "w-full",
                      "w-1/2",
                      "w-3/4",
                      "w-2/3"
                    ][Math.floor(Math.random() * 6)]
                  ])}"${_scopeId2}></div>`);
                });
                _push3(`<!--]--><!--[-->`);
                ssrRenderList(4, (i) => {
                  _push3(`<div${_scopeId2}><div class="pt-full mt-8 h-4 w-1/3 rounded-sm bg-dark-700"${_scopeId2}></div><!--[-->`);
                  ssrRenderList(Math.max(
                    2,
                    Math.floor(Math.random() * 4)
                  ), (i2) => {
                    _push3(`<div class="${ssrRenderClass([
                      "pt-full mt-2 h-2 rounded-sm bg-dark-600",
                      [
                        "w-1/3",
                        "w-1/4",
                        "w-full",
                        "w-1/2",
                        "w-3/4",
                        "w-2/3"
                      ][Math.floor(Math.random() * 6)]
                    ])}"${_scopeId2}></div>`);
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]--></main>`);
              } else {
                return [
                  vue_cjs_prod.createVNode("main", { class: "w-2/3 rounded-r-3xl bg-white py-8 pl-4 pr-8" }, [
                    vue_cjs_prod.createVNode("div", { class: "pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-dark-800" }),
                    vue_cjs_prod.createVNode("div", { class: "pt-full mt-2 mb-2 h-4 w-1/3 rounded-sm bg-dark-700" }),
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(2, Math.floor(Math.random() * 4)), (i) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        key: i,
                        class: [
                          "pt-full mt-2 h-2 rounded-sm bg-dark-600",
                          [
                            "w-1/3",
                            "w-1/4",
                            "w-full",
                            "w-1/2",
                            "w-3/4",
                            "w-2/3"
                          ][Math.floor(Math.random() * 6)]
                        ]
                      }, null, 2);
                    }), 128)),
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(4, (i) => {
                      return vue_cjs_prod.createVNode("div", { key: i }, [
                        vue_cjs_prod.createVNode("div", { class: "pt-full mt-8 h-4 w-1/3 rounded-sm bg-dark-700" }),
                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(
                          2,
                          Math.floor(Math.random() * 4)
                        ), (i2) => {
                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                            key: i2,
                            class: [
                              "pt-full mt-2 h-2 rounded-sm bg-dark-600",
                              [
                                "w-1/3",
                                "w-1/4",
                                "w-full",
                                "w-1/2",
                                "w-3/4",
                                "w-2/3"
                              ][Math.floor(Math.random() * 6)]
                            ]
                          }, null, 2);
                        }), 128))
                      ]);
                    }), 64))
                  ])
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
          vue_cjs_prod.createVNode("div", null, [
            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.colors.sort(
              (a, b) => 0.5 - Math.random()
            ), (color, index) => {
              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: index,
                class: "my-12 flex shadow-xl"
              }, [
                vue_cjs_prod.createVNode("aside", {
                  class: `${color} w-1/3 rounded-l-3xl p-8`
                }, [
                  vue_cjs_prod.createVNode("div", { class: "pt-full mx-auto h-24 w-24 rounded-full bg-gray-200" }),
                  vue_cjs_prod.createVNode("div", { class: "pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-gray-200" }),
                  vue_cjs_prod.createVNode("div", { class: "pt-full mt-2 h-4 w-1/3 rounded-sm bg-gray-200" })
                ], 2),
                vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("main", { class: "w-2/3 rounded-r-3xl bg-white py-8 pl-4 pr-8" }, [
                      vue_cjs_prod.createVNode("div", { class: "pt-full mx-auto mt-4 h-4 w-full rounded-sm bg-dark-800" }),
                      vue_cjs_prod.createVNode("div", { class: "pt-full mt-2 mb-2 h-4 w-1/3 rounded-sm bg-dark-700" }),
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(2, Math.floor(Math.random() * 4)), (i) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                          key: i,
                          class: [
                            "pt-full mt-2 h-2 rounded-sm bg-dark-600",
                            [
                              "w-1/3",
                              "w-1/4",
                              "w-full",
                              "w-1/2",
                              "w-3/4",
                              "w-2/3"
                            ][Math.floor(Math.random() * 6)]
                          ]
                        }, null, 2);
                      }), 128)),
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(4, (i) => {
                        return vue_cjs_prod.createVNode("div", { key: i }, [
                          vue_cjs_prod.createVNode("div", { class: "pt-full mt-8 h-4 w-1/3 rounded-sm bg-dark-700" }),
                          (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(
                            2,
                            Math.floor(Math.random() * 4)
                          ), (i2) => {
                            return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                              key: i2,
                              class: [
                                "pt-full mt-2 h-2 rounded-sm bg-dark-600",
                                [
                                  "w-1/3",
                                  "w-1/4",
                                  "w-full",
                                  "w-1/2",
                                  "w-3/4",
                                  "w-2/3"
                                ][Math.floor(Math.random() * 6)]
                              ]
                            }, null, 2);
                          }), 128))
                        ]);
                      }), 64))
                    ])
                  ]),
                  _: 1
                })
              ]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-primary-500 to-transparent"></div><div class="absolute left-0 bottom-0 h-52 w-full scale-x-150 bg-gradient-to-t from-primary-800 to-transparent"></div></div></div></header><section class="container mx-auto mt-24 py-8 px-4"><h3 class="max-w-3xl text-3xl"><span class="font-bold">Nous recrutons</span> et il se peut que <span class="font-bold">ton profil</span> nous corresponde! </h3><p class="mt-4 text-xl leading-relaxed"> Nous voulons proposer \xE0 notre communaut\xE9 des outils int\xE9ressants pour la conception de leurs communaut\xE9s mais pour cel\xE0, nous avons besoin de personnes ayant diff\xE9rentes comp\xE9tences.<br>C\u2019est pourquoi, nous recrutons constamment des personnes dans diff\xE9rents domaines afin d\u2019aider \xE0 maintenir UMaestro. </p></section><section class="container mx-auto py-8 px-4 pb-20" id="postes"><!--[-->`);
  ssrRenderList(_ctx.categories, (category, index) => {
    _push(`<div class="mb-16"><div class="text-lg font-semibold">${ssrInterpolate(category.title)}</div><div class="mt-2">${ssrInterpolate(category.subtitle)}</div><div class="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    ssrRenderList(category.jobs, (job, index2) => {
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "blank",
        to: "https://docs.google.com/forms/d/e/1FAIpQLScCszcMFVbGvE5Y0bqNapkw1pcvm6fr7V_jvlVI48L87T81CA/viewform",
        key: index2
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex h-full flex-col justify-between p-8"${_scopeId2}><div${_scopeId2}><div class="text-xl font-semibold"${_scopeId2}>${ssrInterpolate(job.name)}</div><div class="text-md mt-2"${_scopeId2}>${ssrInterpolate(job.description)}</div>`);
                  if (job.requirement) {
                    _push3(`<div class="mt-2 text-sm italic text-gray-400"${_scopeId2}>${ssrInterpolate(job.requirement)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><span class="mt-4 flex items-center gap-2 font-medium text-primary-500"${_scopeId2}>Postuler <img${ssrRenderAttr("src", _imports_0)} class="h-5 w-5" alt="Double chevron"${_scopeId2}></span></div>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("div", { class: "flex h-full flex-col justify-between p-8" }, [
                      vue_cjs_prod.createVNode("div", null, [
                        vue_cjs_prod.createVNode("div", { class: "text-xl font-semibold" }, vue_cjs_prod.toDisplayString(job.name), 1),
                        vue_cjs_prod.createVNode("div", { class: "text-md mt-2" }, vue_cjs_prod.toDisplayString(job.description), 1),
                        job.requirement ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                          key: 0,
                          class: "mt-2 text-sm italic text-gray-400"
                        }, vue_cjs_prod.toDisplayString(job.requirement), 1)) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode("span", { class: "mt-4 flex items-center gap-2 font-medium text-primary-500" }, [
                        vue_cjs_prod.createTextVNode("Postuler "),
                        vue_cjs_prod.createVNode("img", {
                          src: _imports_0,
                          class: "h-5 w-5",
                          alt: "Double chevron"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_Card, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode("div", { class: "flex h-full flex-col justify-between p-8" }, [
                    vue_cjs_prod.createVNode("div", null, [
                      vue_cjs_prod.createVNode("div", { class: "text-xl font-semibold" }, vue_cjs_prod.toDisplayString(job.name), 1),
                      vue_cjs_prod.createVNode("div", { class: "text-md mt-2" }, vue_cjs_prod.toDisplayString(job.description), 1),
                      job.requirement ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        key: 0,
                        class: "mt-2 text-sm italic text-gray-400"
                      }, vue_cjs_prod.toDisplayString(job.requirement), 1)) : vue_cjs_prod.createCommentVNode("", true)
                    ]),
                    vue_cjs_prod.createVNode("span", { class: "mt-4 flex items-center gap-2 font-medium text-primary-500" }, [
                      vue_cjs_prod.createTextVNode("Postuler "),
                      vue_cjs_prod.createVNode("img", {
                        src: _imports_0,
                        class: "h-5 w-5",
                        alt: "Double chevron"
                      })
                    ])
                  ])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hire = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  hire as default
};
