import { f as fe, m as me, p as pe, v as ve, a as fe$1, o as oe, A as Ae, L as Le, W as We, u as useAuthStore, b as axios2, _ as _export_sfc, c as vue_cjs_prod, d as __nuxt_component_4$2, e as __nuxt_component_1$2, g as __nuxt_component_0$5 } from './server.mjs';
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

const _sfc_main = {
  components: { Menu: fe, MenuButton: me, MenuItems: pe, MenuItem: ve, TransitionRoot: fe$1, TransitionChild: oe, Dialog: Ae, DialogPanel: Le, DialogTitle: We },
  data: () => ({
    user: null,
    logs: [],
    length: 4,
    deleteAccountModal: false,
    confirmText: ""
  }),
  async setup() {
  },
  computed: {
    logsFilter() {
      return this.logs.splice(0, this.length);
    }
  },
  async mounted() {
    var _a;
    this.user = await useAuthStore().getUser;
    try {
      const { data } = await axios2.get("auth/user/logs", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      });
      this.logs = data.usages;
    } catch (e) {
      console.log(e);
    }
    if (!((_a = this.user) == null ? void 0 : _a.id)) {
      return window.location = "https://umaestro.fr";
    }
  },
  methods: {
    async deleteAccount() {
      var _a, _b;
      if (this.confirmText !== ((_a = this.user) == null ? void 0 : _a.username) + "#" + ((_b = this.user) == null ? void 0 : _b.discriminator))
        return;
      try {
        await axios2.delete("auth/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        });
        this.logout();
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      useAuthStore().logout();
      return window.location = "https://umaestro.fr/";
    },
    hideEmail(email) {
      if (!email)
        return "";
      const [user, domain] = email.split("@");
      return `${user[0]}${new Array(user.length).join("*")}@${domain}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const _component_Input = __nuxt_component_4$2;
  const _component_Button = __nuxt_component_1$2;
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_TransitionRoot = vue_cjs_prod.resolveComponent("TransitionRoot");
  const _component_Dialog = vue_cjs_prod.resolveComponent("Dialog");
  const _component_TransitionChild = vue_cjs_prod.resolveComponent("TransitionChild");
  const _component_DialogPanel = vue_cjs_prod.resolveComponent("DialogPanel");
  const _component_DialogTitle = vue_cjs_prod.resolveComponent("DialogTitle");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="pt-48 pb-32 bg-dark-900 flex flex-col items-center justify-center relative overflow-y-hidden"><div class="absolute top-0 left-0 w-full h-full bg-dark-950 opacity-75 blur-xl bg-cover bg-center z-0" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url(${(_a = _ctx.user) == null ? void 0 : _a.avatar});`)}"></div><img class="rounded-full w-48 z-10 border-8 border-white"${serverRenderer.exports.ssrRenderAttr("src", (_b = _ctx.user) == null ? void 0 : _b.avatar)}><div class="font-semibold text-2xl mt-4 text-center mx-auto z-10 text-white">${serverRenderer.exports.ssrInterpolate((_c = _ctx.user) == null ? void 0 : _c.username)}</div><div class="font-medium text-xl mt-1 text-gray-400 text-center mx-auto z-10">#${serverRenderer.exports.ssrInterpolate((_d = _ctx.user) == null ? void 0 : _d.discriminator)}</div></header><section class="container mx-auto py-32 px-4 lg:px-16 xl:px-32"><div class="font-semibold text-lg mb-2">Mes informations</div><p class="text-gray-500 mb-4">Ici, vous pouvez voir toutes les informations que nous sauvegardons \xE0 propos de votre profil.</p><div class="grid md:grid-cols-2 gap-4 italic"><div><span class="ml-2">ID</span>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, {
    placeholder: (_e = _ctx.user) == null ? void 0 : _e.id.toString(),
    disabled: true
  }, null, _parent));
  _push(`</div><div><span class="ml-2">ID Discord</span>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, {
    placeholder: (_f = _ctx.user) == null ? void 0 : _f.discord_id.toString(),
    disabled: true
  }, null, _parent));
  _push(`</div><div><span class="ml-2">Email</span>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, {
    placeholder: $options.hideEmail((_g = _ctx.user) == null ? void 0 : _g.email),
    disabled: true
  }, null, _parent));
  _push(`</div><div></div><div><span class="ml-2">Nom d&#39;utilisateur</span>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, {
    placeholder: (_h = _ctx.user) == null ? void 0 : _h.username,
    disabled: true
  }, null, _parent));
  _push(`</div><div><span class="ml-2">Tag Discord</span>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, {
    placeholder: "#" + ((_i = _ctx.user) == null ? void 0 : _i.discriminator),
    disabled: true
  }, null, _parent));
  _push(`</div></div><div class="font-semibold text-lg mb-2 mt-12">Vos utilisations des outils</div><p class="text-gray-500 mb-4">Vois ce que t&#39;as fait sur notre site!</p>`);
  if (_ctx.logs.length > 0) {
    _push(`<div><!--[-->`);
    serverRenderer.exports.ssrRenderList($options.logsFilter, (log, id) => {
      _push(`<div class="bg-white dark:bg-dark-900 shadow-sm mt-2 p-4 rounded-lg flex gap-1 items-center"><div> Utilisation de <span class="font-medium">${serverRenderer.exports.ssrInterpolate(log.tool === "discord_embed" ? "Cr\xE9ateur d'embeds" : "Cr\xE9ateur de badges")}</span></div><div class="italic"> le <span class="font-medium">${serverRenderer.exports.ssrInterpolate(new Date(log.created_at).toLocaleString("fr-FR"))}</span></div></div>`);
    });
    _push(`<!--]-->`);
    if (_ctx.length < _ctx.logs.length) {
      _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
        onClick: ($event) => _ctx.length += 4,
        text: "Voir plus",
        class: "mr-auto mt-4",
        color: "primary"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div><div class="font-medium mt-4 text-gray-400 mb-2">Tu n&#39;as jamais utilis\xE9 nos outils...</div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/#tools" }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
            text: "Trouver un outil",
            small: true,
            color: "secondary"
          }, null, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_Button, {
              text: "Trouver un outil",
              small: true,
              color: "secondary"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  }
  _push(`<div class="font-semibold text-lg mb-2 mt-12 mb-4">D\xE9connexion</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    onClick: $options.logout,
    small: true,
    color: "red",
    text: "Se d\xE9connecter"
  }, null, _parent));
  _push(`<div class="font-semibold text-lg mb-2 mt-12">Suppression du compte<span class="ml-2 bg-red-500 font-semibold rounded-full px-2 py-1 text-xs">ZONE DE DANGER</span></div><p class="text-gray-500 mb-4">Attention! Cette action est irreversible, elle entrainera la destruction permanente de vos donn\xE9es dans notre base de donn\xE9es.</p>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    onClick: ($event) => _ctx.deleteAccountModal = true,
    small: true,
    color: "red",
    text: "Supprimer mon compte"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.deleteAccountModal,
    as: "template"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: ($event) => _ctx.deleteAccountModal = false,
          class: "relative z-10"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
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
              _push3(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
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
                    _push4(serverRenderer.exports.ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                      default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                        if (_push5) {
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \xCAtes-vous sur de vouloir supprimer votre compte? `);
                              } else {
                                return [
                                  vue_cjs_prod.createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500 mt-2"${_scopeId4}> Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. </p><p class="text-sm text-gray-500 mt-4"${_scopeId4}> Si vous \xEAtes certain de votre choix, veuillez recopier <span class="italic text-white"${_scopeId4}>${serverRenderer.exports.ssrInterpolate((_a2 = _ctx.user) == null ? void 0 : _a2.username)}#${serverRenderer.exports.ssrInterpolate((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator)}</span> et cliquer sur le bouton pour supprimer votre compte. </p>`);
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                            modelValue: _ctx.confirmText,
                            "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                            class: "mt-4 mb-8",
                            classes: "focus:border-red-500",
                            placeholder: "Recopier le texte indiqu\xE9..."
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="flex gap-2 items-center mt-4 justify-end"${_scopeId4}>`);
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                            color: "transparent",
                            text: "Annuler",
                            onClick: ($event) => _ctx.deleteAccountModal = false
                          }, null, _parent5, _scopeId4));
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                            text: "Supprimer mon compte",
                            color: _ctx.confirmText !== ((_c2 = _ctx.user) == null ? void 0 : _c2.username) + "#" + ((_d2 = _ctx.user) == null ? void 0 : _d2.discriminator) ? "disabled" : "red",
                            onClick: $options.deleteAccount
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-4" }, [
                                vue_cjs_prod.createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                vue_cjs_prod.createVNode("span", { class: "italic text-white" }, vue_cjs_prod.toDisplayString((_e2 = _ctx.user) == null ? void 0 : _e2.username) + "#" + vue_cjs_prod.toDisplayString((_f2 = _ctx.user) == null ? void 0 : _f2.discriminator), 1),
                                vue_cjs_prod.createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                              ]),
                              vue_cjs_prod.createVNode(_component_Input, {
                                modelValue: _ctx.confirmText,
                                "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                class: "mt-4 mb-8",
                                classes: "focus:border-red-500",
                                placeholder: "Recopier le texte indiqu\xE9..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.deleteAccountModal = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                text: "Supprimer mon compte",
                                color: _ctx.confirmText !== ((_g2 = _ctx.user) == null ? void 0 : _g2.username) + "#" + ((_h2 = _ctx.user) == null ? void 0 : _h2.discriminator) ? "disabled" : "red",
                                onClick: $options.deleteAccount
                              }, null, 8, ["color", "onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                        default: vue_cjs_prod.withCtx(() => {
                          var _a2, _b2, _c2, _d2;
                          return [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-4" }, [
                                vue_cjs_prod.createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                vue_cjs_prod.createVNode("span", { class: "italic text-white" }, vue_cjs_prod.toDisplayString((_a2 = _ctx.user) == null ? void 0 : _a2.username) + "#" + vue_cjs_prod.toDisplayString((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator), 1),
                                vue_cjs_prod.createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                              ]),
                              vue_cjs_prod.createVNode(_component_Input, {
                                modelValue: _ctx.confirmText,
                                "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                class: "mt-4 mb-8",
                                classes: "focus:border-red-500",
                                placeholder: "Recopier le texte indiqu\xE9..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.deleteAccountModal = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                text: "Supprimer mon compte",
                                color: _ctx.confirmText !== ((_c2 = _ctx.user) == null ? void 0 : _c2.username) + "#" + ((_d2 = _ctx.user) == null ? void 0 : _d2.discriminator) ? "disabled" : "red",
                                onClick: $options.deleteAccount
                              }, null, 8, ["color", "onClick"])
                            ])
                          ];
                        }),
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
                          default: vue_cjs_prod.withCtx(() => {
                            var _a2, _b2, _c2, _d2;
                            return [
                              vue_cjs_prod.createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                              }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                                ]),
                                _: 1
                              }),
                              vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                                vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-4" }, [
                                  vue_cjs_prod.createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                  vue_cjs_prod.createVNode("span", { class: "italic text-white" }, vue_cjs_prod.toDisplayString((_a2 = _ctx.user) == null ? void 0 : _a2.username) + "#" + vue_cjs_prod.toDisplayString((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator), 1),
                                  vue_cjs_prod.createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                                ]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  modelValue: _ctx.confirmText,
                                  "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                  class: "mt-4 mb-8",
                                  classes: "focus:border-red-500",
                                  placeholder: "Recopier le texte indiqu\xE9..."
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                vue_cjs_prod.createVNode(_component_Button, {
                                  color: "transparent",
                                  text: "Annuler",
                                  onClick: ($event) => _ctx.deleteAccountModal = false
                                }, null, 8, ["onClick"]),
                                vue_cjs_prod.createVNode(_component_Button, {
                                  text: "Supprimer mon compte",
                                  color: _ctx.confirmText !== ((_c2 = _ctx.user) == null ? void 0 : _c2.username) + "#" + ((_d2 = _ctx.user) == null ? void 0 : _d2.discriminator) ? "disabled" : "red",
                                  onClick: $options.deleteAccount
                                }, null, 8, ["color", "onClick"])
                              ])
                            ];
                          }),
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
            onClose: ($event) => _ctx.deleteAccountModal = false,
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
                        default: vue_cjs_prod.withCtx(() => {
                          var _a2, _b2, _c2, _d2;
                          return [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-4" }, [
                                vue_cjs_prod.createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                vue_cjs_prod.createVNode("span", { class: "italic text-white" }, vue_cjs_prod.toDisplayString((_a2 = _ctx.user) == null ? void 0 : _a2.username) + "#" + vue_cjs_prod.toDisplayString((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator), 1),
                                vue_cjs_prod.createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                              ]),
                              vue_cjs_prod.createVNode(_component_Input, {
                                modelValue: _ctx.confirmText,
                                "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                class: "mt-4 mb-8",
                                classes: "focus:border-red-500",
                                placeholder: "Recopier le texte indiqu\xE9..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.deleteAccountModal = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                text: "Supprimer mon compte",
                                color: _ctx.confirmText !== ((_c2 = _ctx.user) == null ? void 0 : _c2.username) + "#" + ((_d2 = _ctx.user) == null ? void 0 : _d2.discriminator) ? "disabled" : "red",
                                onClick: $options.deleteAccount
                              }, null, 8, ["color", "onClick"])
                            ])
                          ];
                        }),
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
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.f53b551a.mjs.map
