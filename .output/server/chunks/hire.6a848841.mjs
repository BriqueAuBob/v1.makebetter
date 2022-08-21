import { _ as _export_sfc, u as useHead, v as vue_cjs_prod, f as __nuxt_component_0$6, d as __nuxt_component_1$1, h as __nuxt_component_2$2, i as __nuxt_component_9, j as __nuxt_component_4$3 } from './server.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import 'axios';
import '@heroicons/vue/outline/esm/index.js';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("characters/wave_character.png");
const _imports_1 = "" + globalThis.__publicAssetsURL("icons/double_chevron.svg");
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
  const _component_NuxtLink = __nuxt_component_0$6;
  const _component_Button = __nuxt_component_1$1;
  const _component_Slider = __nuxt_component_2$2;
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Card = __nuxt_component_4$3;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="bg-primary-500 relative text-white"><div class="container mx-auto px-4 pt-64 pb-72"><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><h1 class="font-extrabold text-5xl">UMaestro recrute !</h1><h2 class="text-2xl leading-relaxed max-w-xl mt-6">On recrute des personnes comp\xE9tentes dans divers domaines pour aider \xE0 la conception et la maintenance de nos diff\xE9rents projets</h2>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { href: "#postes" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
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
  _push(`</div><div class="relative hidden md:block"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt="3D Wave Character" class="w-full absolute -left-52 -bottom-32 scale-150 hidden xl:block">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Slider, {
    direction: "vertical",
    class: "absolute -top-64 w-full",
    duration: "60s",
    style: `height: ${_ctx.headerTall}`
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><!--[-->`);
        serverRenderer.exports.ssrRenderList(["bg-red-500", "bg-yellow-500", "bg-secondary-600", "bg-primary-700", "bg-green-500", "bg-stone-500"].sort((a, b) => 0.5 - Math.random()), (color, index) => {
          _push2(`<div class="my-12 flex shadow-xl"${_scopeId}><aside class="${serverRenderer.exports.ssrRenderClass(`${color} p-8 w-1/3 rounded-l-3xl`)}"${_scopeId}><div class="bg-gray-200 rounded-full w-24 h-24 mx-auto pt-full"${_scopeId}></div><div class="bg-gray-200 rounded-sm w-full h-4 mt-4 mx-auto pt-full"${_scopeId}></div><div class="bg-gray-200 rounded-sm w-1/3 h-4 mt-2 pt-full"${_scopeId}></div></aside>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<main class="bg-white pl-4 pr-8 py-8 w-2/3 rounded-r-3xl"${_scopeId2}><div class="bg-dark-800 rounded-sm w-full h-4 mt-4 mx-auto pt-full"${_scopeId2}></div><div class="bg-dark-700 rounded-sm w-1/3 h-4 mt-2 mb-2 pt-full"${_scopeId2}></div><!--[-->`);
                serverRenderer.exports.ssrRenderList(Math.max(2, Math.floor(Math.random() * 4)), (i) => {
                  _push3(`<div class="${serverRenderer.exports.ssrRenderClass(["bg-dark-600 rounded-sm h-2 mt-2 pt-full", ["w-1/3", "w-1/4", "w-full", "w-1/2", "w-3/4", "w-2/3"][Math.floor(Math.random() * 6)]])}"${_scopeId2}></div>`);
                });
                _push3(`<!--]--><!--[-->`);
                serverRenderer.exports.ssrRenderList(4, (i) => {
                  _push3(`<div${_scopeId2}><div class="bg-dark-700 rounded-sm w-1/3 h-4 mt-8 pt-full"${_scopeId2}></div><!--[-->`);
                  serverRenderer.exports.ssrRenderList(Math.max(2, Math.floor(Math.random() * 4)), (i2) => {
                    _push3(`<div class="${serverRenderer.exports.ssrRenderClass(["bg-dark-600 rounded-sm h-2 mt-2 pt-full", ["w-1/3", "w-1/4", "w-full", "w-1/2", "w-3/4", "w-2/3"][Math.floor(Math.random() * 6)]])}"${_scopeId2}></div>`);
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]--></main>`);
              } else {
                return [
                  vue_cjs_prod.createVNode("main", { class: "bg-white pl-4 pr-8 py-8 w-2/3 rounded-r-3xl" }, [
                    vue_cjs_prod.createVNode("div", { class: "bg-dark-800 rounded-sm w-full h-4 mt-4 mx-auto pt-full" }),
                    vue_cjs_prod.createVNode("div", { class: "bg-dark-700 rounded-sm w-1/3 h-4 mt-2 mb-2 pt-full" }),
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(2, Math.floor(Math.random() * 4)), (i) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        key: i,
                        class: ["bg-dark-600 rounded-sm h-2 mt-2 pt-full", ["w-1/3", "w-1/4", "w-full", "w-1/2", "w-3/4", "w-2/3"][Math.floor(Math.random() * 6)]]
                      }, null, 2);
                    }), 128)),
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(4, (i) => {
                      return vue_cjs_prod.createVNode("div", { key: i }, [
                        vue_cjs_prod.createVNode("div", { class: "bg-dark-700 rounded-sm w-1/3 h-4 mt-8 pt-full" }),
                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(2, Math.floor(Math.random() * 4)), (i2) => {
                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                            key: i2,
                            class: ["bg-dark-600 rounded-sm h-2 mt-2 pt-full", ["w-1/3", "w-1/4", "w-full", "w-1/2", "w-3/4", "w-2/3"][Math.floor(Math.random() * 6)]]
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
            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(["bg-red-500", "bg-yellow-500", "bg-secondary-600", "bg-primary-700", "bg-green-500", "bg-stone-500"].sort((a, b) => 0.5 - Math.random()), (color, index) => {
              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: index,
                class: "my-12 flex shadow-xl"
              }, [
                vue_cjs_prod.createVNode("aside", {
                  class: `${color} p-8 w-1/3 rounded-l-3xl`
                }, [
                  vue_cjs_prod.createVNode("div", { class: "bg-gray-200 rounded-full w-24 h-24 mx-auto pt-full" }),
                  vue_cjs_prod.createVNode("div", { class: "bg-gray-200 rounded-sm w-full h-4 mt-4 mx-auto pt-full" }),
                  vue_cjs_prod.createVNode("div", { class: "bg-gray-200 rounded-sm w-1/3 h-4 mt-2 pt-full" })
                ], 2),
                vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("main", { class: "bg-white pl-4 pr-8 py-8 w-2/3 rounded-r-3xl" }, [
                      vue_cjs_prod.createVNode("div", { class: "bg-dark-800 rounded-sm w-full h-4 mt-4 mx-auto pt-full" }),
                      vue_cjs_prod.createVNode("div", { class: "bg-dark-700 rounded-sm w-1/3 h-4 mt-2 mb-2 pt-full" }),
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(2, Math.floor(Math.random() * 4)), (i) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                          key: i,
                          class: ["bg-dark-600 rounded-sm h-2 mt-2 pt-full", ["w-1/3", "w-1/4", "w-full", "w-1/2", "w-3/4", "w-2/3"][Math.floor(Math.random() * 6)]]
                        }, null, 2);
                      }), 128)),
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(4, (i) => {
                        return vue_cjs_prod.createVNode("div", { key: i }, [
                          vue_cjs_prod.createVNode("div", { class: "bg-dark-700 rounded-sm w-1/3 h-4 mt-8 pt-full" }),
                          (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(Math.max(2, Math.floor(Math.random() * 4)), (i2) => {
                            return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                              key: i2,
                              class: ["bg-dark-600 rounded-sm h-2 mt-2 pt-full", ["w-1/3", "w-1/4", "w-full", "w-1/2", "w-3/4", "w-2/3"][Math.floor(Math.random() * 6)]]
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
  _push(`<div class="absolute left-0 -top-64 w-full h-52 from-primary-500 to-transparent bg-gradient-to-b"></div><div class="absolute left-0 scale-x-150 -bottom-64 w-full h-52 from-primary-500 to-transparent bg-gradient-to-t"></div></div></div></div><svg class="absolute bottom-0 w-full fill-background dark:fill-dark-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90"><path fill-rule="evenodd" clip-rule="evenodd" d="M1440 90H0V0C0 0 230.5 57.7305 486.5 57.7305C742.5 57.7305 1046 0 1204.5 0C1363 0 1440 74.6225 1440 74.6225V90Z"></path></svg></header><section class="mt-24 py-8 container mx-auto px-4"><h3 class="text-3xl max-w-3xl"><span class="font-bold">Nous recrutons</span> et il se peut que <span class="font-bold">ton profil</span> nous corresponde!</h3><p class="text-xl leading-relaxed mt-4"> Nous voulons proposer \xE0 notre communaut\xE9 des outils int\xE9ressants pour la conception de leurs communaut\xE9s mais pour cel\xE0, nous avons besoin de personnes ayant diff\xE9rentes comp\xE9tences.<br>C\u2019est pourquoi, nous recrutons constamment des personnes dans diff\xE9rents domaines afin d\u2019aider \xE0 maintenir UMaestro.</p></section><section class="py-8 container mx-auto px-4 pb-20" id="postes"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.categories, (category, index) => {
    _push(`<div class="mb-16"><div class="font-semibold text-lg">${serverRenderer.exports.ssrInterpolate(category.title)}</div><div class="mt-2">${serverRenderer.exports.ssrInterpolate(category.subtitle)}</div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6"><!--[-->`);
    serverRenderer.exports.ssrRenderList(category.jobs, (job, index2) => {
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        target: "blank",
        to: "https://docs.google.com/forms/d/e/1FAIpQLScCszcMFVbGvE5Y0bqNapkw1pcvm6fr7V_jvlVI48L87T81CA/viewform",
        key: index2
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_Card, { class: "before:bg-white before:dark:bg-dark-800" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-8 flex flex-col justify-between h-full"${_scopeId2}><div${_scopeId2}><div class="font-semibold text-xl"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(job.name)}</div><div class="mt-2 text-md"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(job.description)}</div>`);
                  if (job.requirement) {
                    _push3(`<div class="mt-2 text-sm text-gray-400 italic"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(job.requirement)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><span class="flex items-center gap-2 font-medium text-blurple mt-4"${_scopeId2}>Postuler <img${serverRenderer.exports.ssrRenderAttr("src", _imports_1)} class="w-5 h-5" alt="Double chevron"${_scopeId2}></span></div>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("div", { class: "p-8 flex flex-col justify-between h-full" }, [
                      vue_cjs_prod.createVNode("div", null, [
                        vue_cjs_prod.createVNode("div", { class: "font-semibold text-xl" }, vue_cjs_prod.toDisplayString(job.name), 1),
                        vue_cjs_prod.createVNode("div", { class: "mt-2 text-md" }, vue_cjs_prod.toDisplayString(job.description), 1),
                        job.requirement ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                          key: 0,
                          class: "mt-2 text-sm text-gray-400 italic"
                        }, vue_cjs_prod.toDisplayString(job.requirement), 1)) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode("span", { class: "flex items-center gap-2 font-medium text-blurple mt-4" }, [
                        vue_cjs_prod.createTextVNode("Postuler "),
                        vue_cjs_prod.createVNode("img", {
                          src: _imports_1,
                          class: "w-5 h-5",
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
              vue_cjs_prod.createVNode(_component_Card, { class: "before:bg-white before:dark:bg-dark-800" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode("div", { class: "p-8 flex flex-col justify-between h-full" }, [
                    vue_cjs_prod.createVNode("div", null, [
                      vue_cjs_prod.createVNode("div", { class: "font-semibold text-xl" }, vue_cjs_prod.toDisplayString(job.name), 1),
                      vue_cjs_prod.createVNode("div", { class: "mt-2 text-md" }, vue_cjs_prod.toDisplayString(job.description), 1),
                      job.requirement ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        key: 0,
                        class: "mt-2 text-sm text-gray-400 italic"
                      }, vue_cjs_prod.toDisplayString(job.requirement), 1)) : vue_cjs_prod.createCommentVNode("", true)
                    ]),
                    vue_cjs_prod.createVNode("span", { class: "flex items-center gap-2 font-medium text-blurple mt-4" }, [
                      vue_cjs_prod.createTextVNode("Postuler "),
                      vue_cjs_prod.createVNode("img", {
                        src: _imports_1,
                        class: "w-5 h-5",
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

export { hire as default };
//# sourceMappingURL=hire.6a848841.mjs.map
