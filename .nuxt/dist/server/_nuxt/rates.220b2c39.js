import { _ as _export_sfc, u as useHead, e as axios, v as vue_cjs_prod, d as __nuxt_component_1, p as __nuxt_component_1$1, g as __nuxt_component_4, n as __nuxt_component_3 } from "../server.mjs";
import { u as useAsyncData } from "./asyncData.3fdc7947.js";
import "destr";
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "@vue/server-renderer";
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
import "@heroicons/vue/outline/esm/index.js";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _sfc_main = {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
  },
  async setup() {
    useHead({
      title: "Avis"
    });
    const testimonials = await useAsyncData(async () => {
      try {
        const { data } = await axios.get("testimonials");
        return data.testimonials;
      } catch (e) {
        return [];
      }
    }, "$HMzgmasNr3");
    return { testimonials: testimonials.data };
  },
  data: () => ({
    isOpen: false,
    rate: "",
    star: 5
  }),
  methods: {
    async addTestimonial() {
      try {
        const token = localStorage.getItem("access_token");
        await axios.post("testimonials", {
          message: this.rate,
          star: this.star
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.isOpen = false;
        const { data } = await axios.get("testimonials");
        this.testimonials = data.testimonials;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1;
  const _component_TransitionRoot = vue_cjs_prod.resolveComponent("TransitionRoot");
  const _component_Dialog = vue_cjs_prod.resolveComponent("Dialog");
  const _component_TransitionChild = vue_cjs_prod.resolveComponent("TransitionChild");
  const _component_DialogPanel = vue_cjs_prod.resolveComponent("DialogPanel");
  const _component_DialogTitle = vue_cjs_prod.resolveComponent("DialogTitle");
  const _component_Star = __nuxt_component_1$1;
  const _component_Input = __nuxt_component_4;
  const _component_Testimonial = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="pt-48 pb-8"><h1 class="font-extrabold text-5xl text-black dark:text-white text-center">Avis des utilisateurs</h1>`);
  _push(ssrRenderComponent(_component_Button, {
    text: "Publier mon avis",
    class: "mx-auto mt-8",
    color: "yellow",
    onClick: ($event) => _ctx.isOpen = !_ctx.isOpen
  }, null, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.isOpen,
    as: "template"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: ($event) => _ctx.isOpen = false,
          class: "relative z-10"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId3}></div>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                      default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Mon avis `);
                              } else {
                                return [
                                  vue_cjs_prod.createTextVNode(" Mon avis ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500 mt-2"${_scopeId4}> Combien d&#39;\xE9toiles souhaites-tu nous attribuer? </p><div class="flex gap-1 justify-between mt-4 mb-8"${_scopeId4}><!--[-->`);
                          ssrRenderList(5, (i) => {
                            _push5(ssrRenderComponent(_component_Star, {
                              class: "w-12 cursor-pointer",
                              color: _ctx.star >= i ? "#BB900D" : "#9ca3af",
                              key: i,
                              onClick: ($event) => _ctx.star = i
                            }, null, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div>`);
                          _push5(ssrRenderComponent(_component_Input, {
                            class: "mt-4",
                            placeholder: `Pourquoi ${_ctx.star} \xE9toiles?`,
                            modelValue: _ctx.rate,
                            "onUpdate:modelValue": ($event) => _ctx.rate = $event
                          }, null, _parent5, _scopeId4));
                          _push5(`<p class="text-sm text-gray-500 mt-2"${_scopeId4}> Ton avis nous aidera \xE0 am\xE9liorer notre service. </p></div><div class="flex gap-2 items-center mt-4 justify-end"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "transparent",
                            text: "Annuler",
                            onClick: ($event) => _ctx.isOpen = false
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "yellow",
                            text: "Publier mon avis",
                            onClick: $options.addTestimonial
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" Mon avis ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Combien d'\xE9toiles souhaites-tu nous attribuer? "),
                              vue_cjs_prod.createVNode("div", { class: "flex gap-1 justify-between mt-4 mb-8" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(5, (i) => {
                                  return vue_cjs_prod.createVNode(_component_Star, {
                                    class: "w-12 cursor-pointer",
                                    color: _ctx.star >= i ? "#BB900D" : "#9ca3af",
                                    key: i,
                                    onClick: ($event) => _ctx.star = i
                                  }, null, 8, ["color", "onClick"]);
                                }), 64))
                              ]),
                              vue_cjs_prod.createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: `Pourquoi ${_ctx.star} \xE9toiles?`,
                                modelValue: _ctx.rate,
                                "onUpdate:modelValue": ($event) => _ctx.rate = $event
                              }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"]),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Ton avis nous aidera \xE0 am\xE9liorer notre service. ")
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "yellow",
                                text: "Publier mon avis",
                                onClick: $options.addTestimonial
                              }, null, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createTextVNode(" Mon avis ")
                            ]),
                            _: 1
                          }),
                          vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Combien d'\xE9toiles souhaites-tu nous attribuer? "),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-1 justify-between mt-4 mb-8" }, [
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(5, (i) => {
                                return vue_cjs_prod.createVNode(_component_Star, {
                                  class: "w-12 cursor-pointer",
                                  color: _ctx.star >= i ? "#BB900D" : "#9ca3af",
                                  key: i,
                                  onClick: ($event) => _ctx.star = i
                                }, null, 8, ["color", "onClick"]);
                              }), 64))
                            ]),
                            vue_cjs_prod.createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: `Pourquoi ${_ctx.star} \xE9toiles?`,
                              modelValue: _ctx.rate,
                              "onUpdate:modelValue": ($event) => _ctx.rate = $event
                            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"]),
                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Ton avis nous aidera \xE0 am\xE9liorer notre service. ")
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "yellow",
                              text: "Publier mon avis",
                              onClick: $options.addTestimonial
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                  ]),
                  _: 1
                }),
                vue_cjs_prod.createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    vue_cjs_prod.createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" Mon avis ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Combien d'\xE9toiles souhaites-tu nous attribuer? "),
                              vue_cjs_prod.createVNode("div", { class: "flex gap-1 justify-between mt-4 mb-8" }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(5, (i) => {
                                  return vue_cjs_prod.createVNode(_component_Star, {
                                    class: "w-12 cursor-pointer",
                                    color: _ctx.star >= i ? "#BB900D" : "#9ca3af",
                                    key: i,
                                    onClick: ($event) => _ctx.star = i
                                  }, null, 8, ["color", "onClick"]);
                                }), 64))
                              ]),
                              vue_cjs_prod.createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: `Pourquoi ${_ctx.star} \xE9toiles?`,
                                modelValue: _ctx.rate,
                                "onUpdate:modelValue": ($event) => _ctx.rate = $event
                              }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"]),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Ton avis nous aidera \xE0 am\xE9liorer notre service. ")
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "yellow",
                                text: "Publier mon avis",
                                onClick: $options.addTestimonial
                              }, null, 8, ["onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Dialog, {
            as: "div",
            onClose: ($event) => _ctx.isOpen = false,
            class: "relative z-10"
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  vue_cjs_prod.createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createTextVNode(" Mon avis ")
                            ]),
                            _: 1
                          }),
                          vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Combien d'\xE9toiles souhaites-tu nous attribuer? "),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-1 justify-between mt-4 mb-8" }, [
                              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(5, (i) => {
                                return vue_cjs_prod.createVNode(_component_Star, {
                                  class: "w-12 cursor-pointer",
                                  color: _ctx.star >= i ? "#BB900D" : "#9ca3af",
                                  key: i,
                                  onClick: ($event) => _ctx.star = i
                                }, null, 8, ["color", "onClick"]);
                              }), 64))
                            ]),
                            vue_cjs_prod.createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: `Pourquoi ${_ctx.star} \xE9toiles?`,
                              modelValue: _ctx.rate,
                              "onUpdate:modelValue": ($event) => _ctx.rate = $event
                            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"]),
                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Ton avis nous aidera \xE0 am\xE9liorer notre service. ")
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "yellow",
                              text: "Publier mon avis",
                              onClick: $options.addTestimonial
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header><section class="container mx-auto px-2 pt-16 pb-48"><div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-8"><!--[-->`);
  ssrRenderList($setup.testimonials, (rate, id) => {
    _push(ssrRenderComponent(_component_Testimonial, {
      key: id,
      rate
    }, null, _parent));
  });
  _push(`<!--]--></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  rates as default
};
