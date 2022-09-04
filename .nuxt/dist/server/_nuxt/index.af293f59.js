import { _ as _export_sfc, u as useAuthStore, c as client, n as navigateTo, a as __nuxt_component_4, b as __nuxt_component_1, d as __nuxt_component_0 } from "../server.mjs";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "vue-router";
import "destr";
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@vue/shared";
import "axios";
import "@vue/devtools-api";
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
      const { data } = await client.get("auth/user/logs");
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
        await client.delete("auth/user");
        this.logout();
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      const store = useAuthStore();
      this.$toast.show({
        message: `A bient\xF4t ${this.user.username} !`,
        icon: false,
        timeout: 6
      });
      store.logout();
      return navigateTo("/");
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
  const _component_Input = __nuxt_component_4;
  const _component_Button = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative flex flex-col items-center justify-center overflow-y-hidden bg-dark-900 pt-48 pb-32"><div class="absolute top-0 left-0 z-0 h-full w-full bg-dark-950 bg-cover bg-center opacity-75 blur-xl" style="${ssrRenderStyle(`background-image: url(${(_a = _ctx.user) == null ? void 0 : _a.avatar});`)}"></div><img class="z-10 w-48 rounded-full border-8 border-white"${ssrRenderAttr("src", (_b = _ctx.user) == null ? void 0 : _b.avatar)}><div class="z-10 mx-auto mt-4 text-center text-2xl font-semibold text-white">${ssrInterpolate((_c = _ctx.user) == null ? void 0 : _c.username)}</div><div class="z-10 mx-auto mt-1 text-center text-xl font-medium text-gray-400"> #${ssrInterpolate((_d = _ctx.user) == null ? void 0 : _d.discriminator)}</div></header><section class="container mx-auto py-32 px-4 lg:px-16 xl:px-32"><div class="mb-2 text-lg font-semibold">Mes informations</div><p class="mb-4 text-gray-500"> Ici, vous pouvez voir toutes les informations que nous sauvegardons \xE0 propos de votre profil. </p><div class="grid gap-4 italic md:grid-cols-2"><div><span class="ml-2">ID</span>`);
  _push(ssrRenderComponent(_component_Input, {
    placeholder: (_e = _ctx.user) == null ? void 0 : _e.id.toString(),
    disabled: true
  }, null, _parent));
  _push(`</div><div><span class="ml-2">ID Discord</span>`);
  _push(ssrRenderComponent(_component_Input, {
    placeholder: (_f = _ctx.user) == null ? void 0 : _f.discord_id.toString(),
    disabled: true
  }, null, _parent));
  _push(`</div><div><span class="ml-2">Email</span>`);
  _push(ssrRenderComponent(_component_Input, {
    placeholder: $options.hideEmail((_g = _ctx.user) == null ? void 0 : _g.email),
    disabled: true
  }, null, _parent));
  _push(`</div><div></div><div><span class="ml-2">Nom d&#39;utilisateur</span>`);
  _push(ssrRenderComponent(_component_Input, {
    placeholder: (_h = _ctx.user) == null ? void 0 : _h.username,
    disabled: true
  }, null, _parent));
  _push(`</div><div><span class="ml-2">Tag Discord</span>`);
  _push(ssrRenderComponent(_component_Input, {
    placeholder: "#" + ((_i = _ctx.user) == null ? void 0 : _i.discriminator),
    disabled: true
  }, null, _parent));
  _push(`</div></div><div class="mb-2 mt-12 text-lg font-semibold"> Vos utilisations des outils </div><p class="mb-4 text-gray-500">Vois ce que t&#39;as fait sur notre site!</p>`);
  if (_ctx.logs.length > 0) {
    _push(`<div><!--[-->`);
    ssrRenderList($options.logsFilter, (log, id) => {
      _push(`<div class="mt-2 flex items-center gap-1 rounded-lg bg-white p-4 shadow-sm dark:bg-dark-900"><div> Utilisation de <span class="font-medium">${ssrInterpolate(log.tool === "discord_embed" ? "Cr\xE9ateur d'embeds" : "Cr\xE9ateur de badges")}</span></div><div class="italic"> le <span class="font-medium">${ssrInterpolate(new Date(log.created_at).toLocaleString("fr-FR"))}</span></div></div>`);
    });
    _push(`<!--]-->`);
    if (_ctx.length < _ctx.logs.length) {
      _push(ssrRenderComponent(_component_Button, {
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
    _push(`<div><div class="mt-4 mb-2 font-medium text-gray-400"> Tu n&#39;as jamais utilis\xE9 nos outils... </div>`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/#tools" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Button, {
            text: "Trouver un outil",
            small: true,
            color: "secondary"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Button, {
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
  _push(`<div class="mt-12 mb-4 text-lg font-semibold">D\xE9connexion</div>`);
  _push(ssrRenderComponent(_component_Button, {
    onClick: $options.logout,
    small: true,
    color: "red",
    text: "Se d\xE9connecter"
  }, null, _parent));
  _push(`<div class="mb-2 mt-12 text-lg font-semibold"> Suppression du compte<span class="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold">ZONE DE DANGER</span></div><p class="mb-4 text-gray-500"> Attention! Cette action est irreversible, elle entrainera la destruction permanente de vos donn\xE9es dans notre base de donn\xE9es. </p>`);
  _push(ssrRenderComponent(_component_Button, {
    onClick: ($event) => _ctx.deleteAccountModal = true,
    small: true,
    color: "red",
    text: "Supprimer mon compte"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.deleteAccountModal,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: ($event) => _ctx.deleteAccountModal = false,
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
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
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
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
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \xCAtes-vous sur de vouloir supprimer votre compte? `);
                              } else {
                                return [
                                  createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="mt-2"${_scopeId4}><p class="mt-2 text-sm text-gray-500"${_scopeId4}> Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. </p><p class="mt-4 text-sm text-gray-500"${_scopeId4}> Si vous \xEAtes certain de votre choix, veuillez recopier <span class="italic text-white"${_scopeId4}>${ssrInterpolate((_a2 = _ctx.user) == null ? void 0 : _a2.username)}#${ssrInterpolate((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator)}</span> et cliquer sur le bouton pour supprimer votre compte. </p>`);
                          _push5(ssrRenderComponent(_component_Input, {
                            modelValue: _ctx.confirmText,
                            "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                            class: "mt-4 mb-8",
                            classes: "focus:border-red-500",
                            placeholder: "Recopier le texte indiqu\xE9..."
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="mt-4 flex items-center justify-end gap-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "transparent",
                            text: "Annuler",
                            onClick: ($event) => _ctx.deleteAccountModal = false
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Button, {
                            text: "Supprimer mon compte",
                            color: _ctx.confirmText !== ((_c2 = _ctx.user) == null ? void 0 : _c2.username) + "#" + ((_d2 = _ctx.user) == null ? void 0 : _d2.discriminator) ? "disabled" : "red",
                            onClick: $options.deleteAccount
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                              createVNode("p", { class: "mt-4 text-sm text-gray-500" }, [
                                createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                createVNode("span", { class: "italic text-white" }, toDisplayString((_e2 = _ctx.user) == null ? void 0 : _e2.username) + "#" + toDisplayString((_f2 = _ctx.user) == null ? void 0 : _f2.discriminator), 1),
                                createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                              ]),
                              createVNode(_component_Input, {
                                modelValue: _ctx.confirmText,
                                "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                class: "mt-4 mb-8",
                                classes: "focus:border-red-500",
                                placeholder: "Recopier le texte indiqu\xE9..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.deleteAccountModal = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                        default: withCtx(() => {
                          var _a2, _b2, _c2, _d2;
                          return [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                              createVNode("p", { class: "mt-4 text-sm text-gray-500" }, [
                                createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                createVNode("span", { class: "italic text-white" }, toDisplayString((_a2 = _ctx.user) == null ? void 0 : _a2.username) + "#" + toDisplayString((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator), 1),
                                createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                              ]),
                              createVNode(_component_Input, {
                                modelValue: _ctx.confirmText,
                                "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                class: "mt-4 mb-8",
                                classes: "focus:border-red-500",
                                placeholder: "Recopier le texte indiqu\xE9..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.deleteAccountModal = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
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
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                          default: withCtx(() => {
                            var _a2, _b2, _c2, _d2;
                            return [
                              createVNode(_component_DialogTitle, {
                                as: "h3",
                                class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "mt-2" }, [
                                createVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                                createVNode("p", { class: "mt-4 text-sm text-gray-500" }, [
                                  createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                  createVNode("span", { class: "italic text-white" }, toDisplayString((_a2 = _ctx.user) == null ? void 0 : _a2.username) + "#" + toDisplayString((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator), 1),
                                  createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                                ]),
                                createVNode(_component_Input, {
                                  modelValue: _ctx.confirmText,
                                  "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                  class: "mt-4 mb-8",
                                  classes: "focus:border-red-500",
                                  placeholder: "Recopier le texte indiqu\xE9..."
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                createVNode(_component_Button, {
                                  color: "transparent",
                                  text: "Annuler",
                                  onClick: ($event) => _ctx.deleteAccountModal = false
                                }, null, 8, ["onClick"]),
                                createVNode(_component_Button, {
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
          createVNode(_component_Dialog, {
            as: "div",
            onClose: ($event) => _ctx.deleteAccountModal = false,
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                        default: withCtx(() => {
                          var _a2, _b2, _c2, _d2;
                          return [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \xCAtes-vous sur de vouloir supprimer votre compte? ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("p", { class: "mt-2 text-sm text-gray-500" }, " Cette action est irreversible, il sera impossible de retrouver vos donn\xE9es apr\xE8s avoir supprimer votre compte. "),
                              createVNode("p", { class: "mt-4 text-sm text-gray-500" }, [
                                createTextVNode(" Si vous \xEAtes certain de votre choix, veuillez recopier "),
                                createVNode("span", { class: "italic text-white" }, toDisplayString((_a2 = _ctx.user) == null ? void 0 : _a2.username) + "#" + toDisplayString((_b2 = _ctx.user) == null ? void 0 : _b2.discriminator), 1),
                                createTextVNode(" et cliquer sur le bouton pour supprimer votre compte. ")
                              ]),
                              createVNode(_component_Input, {
                                modelValue: _ctx.confirmText,
                                "onUpdate:modelValue": ($event) => _ctx.confirmText = $event,
                                class: "mt-4 mb-8",
                                classes: "focus:border-red-500",
                                placeholder: "Recopier le texte indiqu\xE9..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.deleteAccountModal = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
