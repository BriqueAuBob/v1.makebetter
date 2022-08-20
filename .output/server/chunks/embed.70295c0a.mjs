import { e as axios$1, _ as _export_sfc, v as vue_cjs_prod, D as __nuxt_component_0$2, f as __nuxt_component_0$6, d as __nuxt_component_1$1, K as __nuxt_component_3, g as __nuxt_component_4$2, L as __nuxt_component_5, M as __nuxt_component_6, Q as __nuxt_component_7, T as __nuxt_component_8, i as __nuxt_component_9, I as __nuxt_component_10, U as __nuxt_component_11 } from './server.mjs';
import { CheckIcon, UploadIcon, CubeIcon, TrashIcon, EyeIcon } from '@heroicons/vue/outline/esm/index.js';
import { C as ColorPicker, a as transformFileIntoBlob } from './style.c06ff9d5.mjs';
import axios from 'axios';
import { f as fe, m as me, p as pe, v as ve, A as Ae, L as Le, W as We } from './menu.mjs';
import { f as fe$1, o as oe } from './transition.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
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
import 'is-plain-object';
import 'tinycolor2';
import '@vueuse/core';
import 'lodash-es';
import '@popperjs/core';
import 'gradient-parser';
import 'stream';

const checkWebhookValidity = async (webhook) => {
  if (!webhook.match(/^(https:\/\/discord.com\/api\/webhooks\/\d{18}\/.{10,})$/))
    return false;
  try {
    const { data } = await axios.get(webhook);
    return data;
  } catch {
    return false;
  }
};
const sendMessage = async (webhook, data) => {
  for (const message of data) {
    const form = new FormData();
    form.append("payload_json", JSON.stringify(
      {
        ...message,
        components: message.components[0].components.length !== 0 && message.components,
        embeds: message.embeds.map((embed2) => ({
          ...embed2,
          color: parseInt(embed2.color.substr(1), 16)
        }))
      }
    ));
    let i = 0;
    if (message.files) {
      for (const file of message.files) {
        form.append(`file${i}`, await transformFileIntoBlob(file), file.name);
        i++;
      }
    }
    await axios.post(webhook, form);
  }
};
const fetchMessage = async (url) => {
  const { data } = await axios.get("/api/message", { params: { url } });
  return data;
};
const _sfc_main = {
  components: { CheckIcon, Menu: fe, MenuButton: me, MenuItems: pe, MenuItem: ve, TransitionRoot: fe$1, TransitionChild: oe, Dialog: Ae, DialogPanel: Le, DialogTitle: We, UploadIcon, CubeIcon, ColorPicker, TrashIcon, EyeIcon },
  head: {
    title: "Cr\xE9ateur d'embed"
  },
  data: () => ({
    is_application_webhook: false,
    valid_webhook: false,
    isOpen: false,
    modalCode: false,
    webhook_url: "",
    savename: "",
    mobile_preview_open: false,
    defaultColors: [
      "#1ABC9C",
      "#2ECC71",
      "#3498DB",
      "#9B59B6",
      "#E91E63",
      "#F1C40F",
      "#E67E22",
      "#E74C3C",
      "#95A5A6",
      "#607D8B",
      "#11806A",
      "#1F8B4C",
      "#206694",
      "#71368A",
      "#AD1457",
      "#C27C0E",
      "#A84300",
      "#992D22",
      "#979C9F",
      "#546E7A"
    ],
    messages: [
      {
        username: "UMaestro",
        avatar_url: "https://cdn.discordapp.com/avatars/988400676537249832/76f7a68e7c0da0fc8aebc7f0c08e5309.png?size=256",
        content: "",
        files: [],
        components: [
          {
            type: 1,
            components: []
          }
        ],
        embeds: [{
          color: "#2F3136",
          title: "",
          url: "",
          author: {
            name: "Cr\xE9ateur d'embeds & leur r\xE9daction!",
            icon_url: "https://cdn.discordapp.com/emojis/979107826578370680.webp?size=96&quality=lossless"
          },
          description: "<:um_item1:985493065504542740> Cet outil a \xE9t\xE9 pens\xE9 pour vous, notamment pour les cr\xE9ateurs de serveurs. Le r\xE9dacteur d'embeds vous permet d'illustrer vos textes en les mettant en valeur, gr\xE2ce \xE0 votre charte graphique qui peut y etre ajout\xE9e (Images & Emojis) ou encore avec des Markdowns & Liens. \n\n <:um_item1:985493065504542740> Une compl\xE8te personnalisation est possible. Avec cet outils, plusieurs nouvelles fonctionnalit\xE9s sont disponibles, dont la possibilit\xE9s de mettre plusieurs images et ajuster la taille de votre embed grace aux barres de s\xE9parations disponibles selon les couleurs de vos choix !\n\n<:um_item1:985493065504542740>  Vous avez le choix de customiser la dispositions de vos textes dans les embeds gr\xE2ce aux fields, ils peuvent etre tous allign\xE9s et/ou superpos\xE9s. \n\n<:um_item1:985493065504542740> Il existe aussi 2 parties qui font office d'introductions \xE0 vos textes : Auteur & Footer. L'auteur permet d'introduire un nom & une image pour r\xE9veler l'identit\xE9 du r\xE9dacteur. Et le footer est utile pour signer vos cr\xE9ations !\n\n<:icons_dwhite:875710295253848144> En choisisant cet outil, vous avez la possibilit\xE9 d'enregister, supprimer, combiner et retrouver vos messages ! Le code de l'embed vous est aussi fournit.\n\n<:icons_dblurple:875710295258046535> Enfin, la partie n\xE9cessaire \xE0 son envoie sur Discord est l'intr\xE9gration Webhook | Int\xE9grations que vous retrouverez dans les param\xE8tres d'un salon et dans les param\xE8tres de serveur.\n\nBonne utilisation \xE0 vous ! <:copinou_coucou:878308800682147850>",
          thumbnail: {},
          fields: [],
          image: {
            url: "https://i.imgur.com/kdJejsd.png"
          },
          timestamp: "",
          footer: {}
        }]
      }
    ]
  }),
  watch: {
    webhook_url: async function(value) {
      this.updateWebhookState(await checkWebhookValidity(value));
    }
  },
  async mounted() {
    const response = await axios.get("/umaestro_banner.png", {
      responseType: "blob"
    });
    this.messages[0].files[0] = new File([new Blob([response.data])], "welcome.png", {
      type: "image/png"
    });
  },
  methods: {
    toggleMobilePreview() {
      this.mobile_preview_open = !this.mobile_preview_open;
      document.body.classList.toggle("overflow-y-hidden");
    },
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },
    createEmptyMessage() {
      this.messages.push({
        username: this.messages[0] ? this.messages[0].username : "UMaestro",
        avatar_url: this.messages[0] ? this.messages[0].avatar_url : "https://cdn.discordapp.com/avatars/995327553143312474/ac9586ba3f3b7a32428bbc751266a94e.webp?size=128",
        files: [],
        embeds: [],
        components: [
          {
            type: 1,
            components: []
          }
        ]
      });
    },
    createEmptyEmbed(message) {
      if (message.embeds.length >= 10)
        return;
      message.embeds.push({
        color: "#F20F20",
        title: "",
        url: "",
        author: {
          name: "",
          icon_url: "",
          url: ""
        },
        description: "",
        thumbnail: {
          url: ""
        },
        fields: [],
        image: {
          url: ""
        },
        timestamp: "",
        footer: {
          text: "",
          icon_url: ""
        }
      });
    },
    updateWebhookState(webhookInfos) {
      if (!webhookInfos) {
        this.valid_webhook = false;
        this.is_application_webhook = false;
        return;
      }
      for (const message of this.messages) {
        message.username = webhookInfos.name;
        message.avatar_url = webhookInfos.avatar ? `https://cdn.discordapp.com/avatars/${webhookInfos.id}/${webhookInfos.avatar}.png?size=128` : "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3";
      }
      this.is_application_webhook = webhookInfos.application_id !== null;
      this.valid_webhook = true;
    },
    sendMessage() {
      sendMessage(this.webhook_url, this.messages);
      axios$1.post("statistics", {
        tool: "discord_embed"
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
    },
    load(index, loadIndex) {
      this.messages[index] = (JSON.parse(localStorage.getItem("discord_embed_creator_messages")) || [])[loadIndex] || this.messages[index];
    },
    uploadFile(e, message) {
      message.files = Array.from(e.target.files);
      console.log(message.files);
    },
    save(message) {
      if (!this.savename)
        return;
      const messageCopy = { ...message };
      messageCopy.files = [];
      const messages = JSON.parse(localStorage.getItem("discord_embed_creator_messages")) || {};
      messages[this.savename] = messageCopy;
      localStorage.setItem("discord_embed_creator_messages", JSON.stringify(messages));
      this.setIsOpen();
    },
    getSavedMessages() {
      return JSON.parse(localStorage.getItem("discord_embed_creator_messages")) || {};
    },
    loadMessageFromUrl(e) {
      const value = typeof e === "string" ? e : e.target.value;
      if (!value || !value.match && !value.match(/^(https:\/\/discord.com\/channels\/\d{18}\/\d{18}\/messages\/\d{18})$/))
        return false;
      fetchMessage(value).then((message) => {
        this.message = message;
      });
    },
    setClipboardText(message) {
      navigator.clipboard.writeText(JSON.stringify(message));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsHeader = __nuxt_component_0$2;
  const _component_NuxtLink = __nuxt_component_0$6;
  const _component_Button = __nuxt_component_1$1;
  const _component_CubeIcon = vue_cjs_prod.resolveComponent("CubeIcon");
  const _component_ToolsDiscordEmbedCreatorStep = __nuxt_component_3;
  const _component_Input = __nuxt_component_4$2;
  const _component_TrashIcon = vue_cjs_prod.resolveComponent("TrashIcon");
  const _component_Menu = vue_cjs_prod.resolveComponent("Menu");
  const _component_MenuButton = vue_cjs_prod.resolveComponent("MenuButton");
  const _component_UploadIcon = vue_cjs_prod.resolveComponent("UploadIcon");
  const _component_MenuItems = vue_cjs_prod.resolveComponent("MenuItems");
  const _component_MenuItem = vue_cjs_prod.resolveComponent("MenuItem");
  const _component_Textarea = __nuxt_component_5;
  const _component_ToolsDiscordEmbedCreatorAttachmentsImage = __nuxt_component_6;
  const _component_ToolsDiscordEmbedCreatorAttachmentsFile = __nuxt_component_7;
  const _component_ToolsDiscordEmbedCreatorCollapseCard = __nuxt_component_8;
  const _component_ClientOnly = __nuxt_component_9;
  const _component_ColorPicker = vue_cjs_prod.resolveComponent("ColorPicker");
  const _component_CheckIcon = vue_cjs_prod.resolveComponent("CheckIcon");
  const _component_Toggle = __nuxt_component_10;
  const _component_TransitionRoot = vue_cjs_prod.resolveComponent("TransitionRoot");
  const _component_Dialog = vue_cjs_prod.resolveComponent("Dialog");
  const _component_TransitionChild = vue_cjs_prod.resolveComponent("TransitionChild");
  const _component_DialogPanel = vue_cjs_prod.resolveComponent("DialogPanel");
  const _component_DialogTitle = vue_cjs_prod.resolveComponent("DialogTitle");
  const _component_ToolsDiscordEmbedCreatorFakeMessage = __nuxt_component_11;
  const _component_EyeIcon = vue_cjs_prod.resolveComponent("EyeIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsHeader, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="font-extrabold text-4xl max-w-lg mx-auto"${_scopeId}>Embed Discord</h1><h2 class="text-2xl leading-relaxed mt-4 max-w-lg mx-auto"${_scopeId}>Cr\xE9e et envoie tes embeds \xE0 ton serveur avec cet outil!</h2><div class="flex gap-4 mt-12 mx-auto"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          to: "/tools/discord",
          class: "w-full"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                class: "mx-auto",
                color: "white",
                text: "Voir d'autres outils Discord",
                small: true
              }, {
                icon_left: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(serverRenderer.exports.ssrRenderComponent(_component_CubeIcon, { class: "mr-3 w-8 h-8" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-8 h-8" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_Button, {
                  class: "mx-auto",
                  color: "white",
                  text: "Voir d'autres outils Discord",
                  small: true
                }, {
                  icon_left: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-8 h-8" })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("h1", { class: "font-extrabold text-4xl max-w-lg mx-auto" }, "Embed Discord"),
          vue_cjs_prod.createVNode("h2", { class: "text-2xl leading-relaxed mt-4 max-w-lg mx-auto" }, "Cr\xE9e et envoie tes embeds \xE0 ton serveur avec cet outil!"),
          vue_cjs_prod.createVNode("div", { class: "flex gap-4 mt-12 mx-auto" }, [
            vue_cjs_prod.createVNode(_component_NuxtLink, {
              to: "/tools/discord",
              class: "w-full"
            }, {
              default: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_Button, {
                  class: "mx-auto",
                  color: "white",
                  text: "Voir d'autres outils Discord",
                  small: true
                }, {
                  icon_left: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(_component_CubeIcon, { class: "mr-3 w-8 h-8" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="container mx-auto py-24 gap-8 px-4"><h3 class="font-semibold text-2xl">Tu souhaites envoyer un embed sur ton serveur?</h3><div class="text-lg mt-2">Suis les diff\xE9rentes \xE9tapes afin de l\u2019envoyer!</div><div class="grid lg:grid-cols-2 gap-8 mt-8"><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
    "step-id": "1",
    name: "Webhook URL",
    description: "Pour trouver l\u2019URL du webhook, rends toi sur Discord dans les param\xE8tres de ton serveur. Rends toi ensuite dans l\u2019onglet \u201CIntegrations\u201D et clique sur \u201CWebhooks\u201D."
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          big: true,
          placeholder: "https://discord.com/webhooks/id/token",
          modelValue: _ctx.webhook_url,
          "onUpdate:modelValue": ($event) => _ctx.webhook_url = $event
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Input, {
            big: true,
            placeholder: "https://discord.com/webhooks/id/token",
            modelValue: _ctx.webhook_url,
            "onUpdate:modelValue": ($event) => _ctx.webhook_url = $event
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="divide-y"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.messages, (message, msgIndex) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
      key: msgIndex,
      "step-id": msgIndex + 2,
      name: `Cr\xE9ation du message n\xB0${msgIndex + 1}`,
      "big-padding": true
    }, {
      bin: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="p-2"${_scopeId}>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_TrashIcon, { class: "w-6 h-6" }, null, _parent2, _scopeId));
          _push2(`</button>`);
        } else {
          return [
            vue_cjs_prod.createVNode("button", {
              onClick: () => {
                _ctx.messages.splice(msgIndex, 1);
              },
              class: "p-2"
            }, [
              vue_cjs_prod.createVNode(_component_TrashIcon, { class: "w-6 h-6" })
            ], 8, ["onClick"])
          ];
        }
      }),
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_Menu, {
            as: "div",
            class: "relative inline-block text-left"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.exports.ssrRenderComponent(_component_MenuButton, { class: "bg-white dark:bg-dark-800 flex gap-6 items-center p-8 rounded-xl shadow-lg ease-in duration-200 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-dark-700 cursor-pointer" }, {
                  default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(serverRenderer.exports.ssrRenderComponent(_component_UploadIcon, { class: "w-8 h-8" }, null, _parent4, _scopeId3));
                      _push4(`<div class="flex flex-col gap-2 text-left"${_scopeId3}><div class="text-md font-semibold"${_scopeId3}>Charger un message</div><div class="text-sm"${_scopeId3}>Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l&#39;avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici.</div></div>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode(_component_UploadIcon, { class: "w-8 h-8" }),
                        vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-2 text-left" }, [
                          vue_cjs_prod.createVNode("div", { class: "text-md font-semibold" }, "Charger un message"),
                          vue_cjs_prod.createVNode("div", { class: "text-sm" }, "Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l'avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici.")
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(``);
                _push3(serverRenderer.exports.ssrRenderComponent(_component_MenuItems, { class: "absolute left-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10" }, {
                  default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="p-2 flex flex-col gap-1"${_scopeId3}><div${_scopeId3}>`);
                      _push4(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                        placeholder: "URL du message...",
                        onChange: $options.loadMessageFromUrl
                      }, null, _parent4, _scopeId3));
                      _push4(`</div><div class="w-full"${_scopeId3}><div class="relative flex items-center"${_scopeId3}><div class="flex-grow border-t border-dark-700"${_scopeId3}></div><span class="flex-shrink mx-4 text-dark-700"${_scopeId3}>OU</span><div class="flex-grow border-t border-dark-700"${_scopeId3}></div></div></div><!--[-->`);
                      serverRenderer.exports.ssrRenderList($options.getSavedMessages(), (message2, index) => {
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_MenuItem, { key: index }, {
                          default: vue_cjs_prod.withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="${serverRenderer.exports.ssrRenderClass([
                                active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                              ])}"${_scopeId4}>${serverRenderer.exports.ssrInterpolate(index)}</button>`);
                            } else {
                              return [
                                vue_cjs_prod.createVNode("button", {
                                  class: [
                                    active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                  ],
                                  onClick: ($event) => $options.load(msgIndex, index)
                                }, vue_cjs_prod.toDisplayString(index), 11, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      });
                      _push4(`<!--]--></div>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("div", { class: "p-2 flex flex-col gap-1" }, [
                          vue_cjs_prod.createVNode("div", null, [
                            vue_cjs_prod.createVNode(_component_Input, {
                              placeholder: "URL du message...",
                              onChange: $options.loadMessageFromUrl
                            }, null, 8, ["onChange"])
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "w-full" }, [
                            vue_cjs_prod.createVNode("div", { class: "relative flex items-center" }, [
                              vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                              vue_cjs_prod.createVNode("span", { class: "flex-shrink mx-4 text-dark-700" }, "OU"),
                              vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" })
                            ])
                          ]),
                          (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($options.getSavedMessages(), (message2, index) => {
                            return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_MenuItem, { key: index }, {
                              default: vue_cjs_prod.withCtx(({ active }) => [
                                vue_cjs_prod.createVNode("button", {
                                  class: [
                                    active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                  ],
                                  onClick: ($event) => $options.load(msgIndex, index)
                                }, vue_cjs_prod.toDisplayString(index), 11, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode(_component_MenuButton, { class: "bg-white dark:bg-dark-800 flex gap-6 items-center p-8 rounded-xl shadow-lg ease-in duration-200 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-dark-700 cursor-pointer" }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_UploadIcon, { class: "w-8 h-8" }),
                      vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-2 text-left" }, [
                        vue_cjs_prod.createVNode("div", { class: "text-md font-semibold" }, "Charger un message"),
                        vue_cjs_prod.createVNode("div", { class: "text-sm" }, "Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l'avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici.")
                      ])
                    ]),
                    _: 1
                  }),
                  vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                    "enter-active-class": "transition duration-100 ease-out",
                    "enter-from-class": "transform scale-95 opacity-0",
                    "enter-to-class": "transform scale-100 opacity-100",
                    "leave-active-class": "transition duration-75 ease-in",
                    "leave-from-class": "transform scale-100 opacity-100",
                    "leave-to-class": "transform scale-95 opacity-0"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_MenuItems, { class: "absolute left-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("div", { class: "p-2 flex flex-col gap-1" }, [
                            vue_cjs_prod.createVNode("div", null, [
                              vue_cjs_prod.createVNode(_component_Input, {
                                placeholder: "URL du message...",
                                onChange: $options.loadMessageFromUrl
                              }, null, 8, ["onChange"])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "w-full" }, [
                              vue_cjs_prod.createVNode("div", { class: "relative flex items-center" }, [
                                vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                                vue_cjs_prod.createVNode("span", { class: "flex-shrink mx-4 text-dark-700" }, "OU"),
                                vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" })
                              ])
                            ]),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($options.getSavedMessages(), (message2, index) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_MenuItem, { key: index }, {
                                default: vue_cjs_prod.withCtx(({ active }) => [
                                  vue_cjs_prod.createVNode("button", {
                                    class: [
                                      active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                      "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    ],
                                    onClick: ($event) => $options.load(msgIndex, index)
                                  }, vue_cjs_prod.toDisplayString(index), 11, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div><div class="w-full my-12"${_scopeId}><div class="relative flex items-center"${_scopeId}><div class="flex-grow border-t border-dark-700"${_scopeId}></div><span class="flex-shrink mx-4 text-dark-700"${_scopeId}>OU</span><div class="flex-grow border-t border-dark-700"${_scopeId}></div></div></div>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".1",
            name: "Auteur du message",
            class: "pt-0"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                  placeholder: "Nom de l'auteur...",
                  modelValue: message.username,
                  "onUpdate:modelValue": ($event) => message.username = $event
                }, null, _parent3, _scopeId2));
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                  class: "mt-3",
                  placeholder: "URL de l'avatar de l'auteur...",
                  modelValue: message.avatar_url,
                  "onUpdate:modelValue": ($event) => message.avatar_url = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode(_component_Input, {
                    placeholder: "Nom de l'auteur...",
                    modelValue: message.username,
                    "onUpdate:modelValue": ($event) => message.username = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vue_cjs_prod.createVNode(_component_Input, {
                    class: "mt-3",
                    placeholder: "URL de l'avatar de l'auteur...",
                    modelValue: message.avatar_url,
                    "onUpdate:modelValue": ($event) => message.avatar_url = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".2",
            name: "Contenu du message"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Textarea, {
                  placeholder: "Contenu du message...",
                  modelValue: message.content,
                  "onUpdate:modelValue": ($event) => message.content = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode(_component_Textarea, {
                    placeholder: "Contenu du message...",
                    modelValue: message.content,
                    "onUpdate:modelValue": ($event) => message.content = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".3",
            name: "Fichiers attach\xE9s au message"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b;
              if (_push3) {
                _push3(`<div class="relative ease-in duration-200 shadow-sm hover:shadow-xl hover:-translate-y-1"${_scopeId2}><div class="w-full bg-white dark:bg-dark-800 border-2 border-dashed border-dark-400 dark:border-dark-700 dark:text-dark-300 text-sm font-semibold p-6 rounded-md shadow-lg ease-in duration-200 focus:outline-none flex gap-2 items-center"${_scopeId2}>`);
                _push3(serverRenderer.exports.ssrRenderComponent(_component_UploadIcon, { class: "w-8 h-8" }, null, _parent3, _scopeId2));
                _push3(`<span class="ml-2"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(((_a = message.files) == null ? void 0 : _a.length) > 0 ? `${message.files.length} fichiers attach\xE9s` : "Ajouter un fichier")}</span></div><input class="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer" type="file" multiple${_scopeId2}></div>`);
                if (message.files) {
                  _push3(`<div class="flex flex-wrap items-center mt-4 gap-3"${_scopeId2}><!--[-->`);
                  serverRenderer.exports.ssrRenderList(message.files, (file, index) => {
                    _push3(`<div class="flex"${_scopeId2}><div class="relative"${_scopeId2}>`);
                    if (file.type.startsWith("image") && file.type !== "image/svg+xml") {
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                        class: "w-24 h-24 object-cover rounded-lg",
                        file
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsFile, { file }, null, _parent3, _scopeId2));
                    }
                    _push3(`<div class="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-transparent ease-in duration-200 cursor-pointer opacity-0 bg-black hover:opacity-75 rounded-[4px]"${_scopeId2}>`);
                    _push3(serverRenderer.exports.ssrRenderComponent(_component_TrashIcon, { class: "w-12 h-12" }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  vue_cjs_prod.createVNode("div", { class: "relative ease-in duration-200 shadow-sm hover:shadow-xl hover:-translate-y-1" }, [
                    vue_cjs_prod.createVNode("div", { class: "w-full bg-white dark:bg-dark-800 border-2 border-dashed border-dark-400 dark:border-dark-700 dark:text-dark-300 text-sm font-semibold p-6 rounded-md shadow-lg ease-in duration-200 focus:outline-none flex gap-2 items-center" }, [
                      vue_cjs_prod.createVNode(_component_UploadIcon, { class: "w-8 h-8" }),
                      vue_cjs_prod.createVNode("span", { class: "ml-2" }, vue_cjs_prod.toDisplayString(((_b = message.files) == null ? void 0 : _b.length) > 0 ? `${message.files.length} fichiers attach\xE9s` : "Ajouter un fichier"), 1)
                    ]),
                    vue_cjs_prod.createVNode("input", {
                      class: "absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer",
                      type: "file",
                      multiple: "",
                      onInput: (e) => $options.uploadFile(e, message)
                    }, null, 40, ["onInput"])
                  ]),
                  message.files ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                    key: 0,
                    class: "flex flex-wrap items-center mt-4 gap-3"
                  }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(message.files, (file, index) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        key: index,
                        class: "flex"
                      }, [
                        vue_cjs_prod.createVNode("div", { class: "relative" }, [
                          file.type.startsWith("image") && file.type !== "image/svg+xml" ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                            key: 0,
                            class: "w-24 h-24 object-cover rounded-lg",
                            file
                          }, null, 8, ["file"])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                            key: 1,
                            file
                          }, null, 8, ["file"])),
                          vue_cjs_prod.createVNode("div", {
                            class: "absolute left-0 top-0 w-full h-full flex items-center justify-center bg-transparent ease-in duration-200 cursor-pointer opacity-0 bg-black hover:opacity-75 rounded-[4px]",
                            onClick: ($event) => message.files.splice(index, 1)
                          }, [
                            vue_cjs_prod.createVNode(_component_TrashIcon, { class: "w-12 h-12" })
                          ], 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])) : vue_cjs_prod.createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".4",
            name: "Embeds"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b;
              if (_push3) {
                _push3(`<div class="flex flex-col gap-4"${_scopeId2}><!--[-->`);
                serverRenderer.exports.ssrRenderList(message.embeds, (embed2, id) => {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                    class: "bg-white dark:bg-dark-800 border-l-4 rounded-l-md rounded-r-lg shadow-xl",
                    key: id,
                    name: `Embed n\xB0${id + 1}`,
                    trash: () => message.embeds.splice(id, 1),
                    style: `border-color: ${embed2.color}`
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-4"${_scopeId3}>`);
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                          name: "Auteur"
                        }, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                placeholder: "Nom de l'auteur...",
                                modelValue: embed2.author.name,
                                "onUpdate:modelValue": ($event) => embed2.author.name = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL de l'avatar de l'auteur...",
                                modelValue: embed2.author.icon_url,
                                "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL de l'auteur...",
                                modelValue: embed2.author.url,
                                "onUpdate:modelValue": ($event) => embed2.author.url = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                          name: "Corps de l'embed"
                        }, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                placeholder: "Titre...",
                                modelValue: embed2.title,
                                "onUpdate:modelValue": ($event) => embed2.title = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Textarea, {
                                class: "mt-3",
                                placeholder: "Description...",
                                modelValue: embed2.description,
                                "onUpdate:modelValue": ($event) => embed2.description = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL...",
                                modelValue: embed2.url,
                                "onUpdate:modelValue": ($event) => embed2.url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="mt-3 flex"${_scopeId4}>`);
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
                                default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(serverRenderer.exports.ssrRenderComponent(_component_ColorPicker, {
                                      pureColor: embed2.color,
                                      "onUpdate:pureColor": ($event) => embed2.color = $event,
                                      disableAlpha: true,
                                      shape: "circle",
                                      pickerType: "chrome",
                                      format: "hex"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="grid grid-cols-10 gap-2"${_scopeId5}><!--[-->`);
                                    serverRenderer.exports.ssrRenderList(_ctx.defaultColors, (color, index) => {
                                      _push6(`<div class="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer" style="${serverRenderer.exports.ssrRenderStyle(`background: ${color};`)}"${_scopeId5}>`);
                                      if (embed2.color == color) {
                                        _push6(serverRenderer.exports.ssrRenderComponent(_component_CheckIcon, { class: "w-6 h-6" }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    });
                                    _push6(`<!--]--></div>`);
                                  } else {
                                    return [
                                      vue_cjs_prod.createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      vue_cjs_prod.createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.defaultColors, (color, index) => {
                                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                            class: "w-7 h-7 rounded-md flex items-center justify-center cursor-pointer",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "w-6 h-6"
                                            })) : vue_cjs_prod.createCommentVNode("", true)
                                          ], 12, ["onClick"]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "mt-3 flex" }, [
                                  vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      vue_cjs_prod.createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.defaultColors, (color, index) => {
                                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                            class: "w-7 h-7 rounded-md flex items-center justify-center cursor-pointer",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "w-6 h-6"
                                            })) : vue_cjs_prod.createCommentVNode("", true)
                                          ], 12, ["onClick"]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                          name: "Fields"
                        }, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              _push5(`<!--[-->`);
                              serverRenderer.exports.ssrRenderList(embed2.fields, (field, id2) => {
                                _push5(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                  key: id2,
                                  class: "bg-gray-200 dark:bg-dark-600 rounded-lg mb-2",
                                  name: `Field n\xB0${id2 + 1}`,
                                  trash: () => embed2.fields.splice(id2, 1)
                                }, {
                                  default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                        placeholder: "Titre...",
                                        modelValue: field.name,
                                        "onUpdate:modelValue": ($event) => field.name = $event
                                      }, null, _parent6, _scopeId5));
                                      _push6(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                        class: "mt-3 mb-3",
                                        placeholder: "Valeur...",
                                        modelValue: field.value,
                                        "onUpdate:modelValue": ($event) => field.value = $event
                                      }, null, _parent6, _scopeId5));
                                      _push6(serverRenderer.exports.ssrRenderComponent(_component_Toggle, {
                                        modelValue: field.inline,
                                        "onUpdate:modelValue": ($event) => field.inline = $event
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                                class: "mx-auto mt-8 shadow-none",
                                color: "blurple",
                                text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(embed2.fields, (field, id2) => {
                                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                    key: id2,
                                    class: "bg-gray-200 dark:bg-dark-600 rounded-lg mb-2",
                                    name: `Field n\xB0${id2 + 1}`,
                                    trash: () => embed2.fields.splice(id2, 1)
                                  }, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_Input, {
                                        placeholder: "Titre...",
                                        modelValue: field.name,
                                        "onUpdate:modelValue": ($event) => field.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      vue_cjs_prod.createVNode(_component_Input, {
                                        class: "mt-3 mb-3",
                                        placeholder: "Valeur...",
                                        modelValue: field.value,
                                        "onUpdate:modelValue": ($event) => field.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      vue_cjs_prod.createVNode(_component_Toggle, {
                                        modelValue: field.inline,
                                        "onUpdate:modelValue": ($event) => field.inline = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                  }, 1032, ["name", "trash"]);
                                }), 128)),
                                vue_cjs_prod.createVNode(_component_Button, {
                                  class: "mx-auto mt-8 shadow-none",
                                  color: "blurple",
                                  text: `Ajouter un field (${(_b2 = embed2.fields) == null ? void 0 : _b2.length}/25)`,
                                  onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                }, null, 8, ["text", "onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                          name: "Images"
                        }, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                placeholder: "Image de couverture...",
                                modelValue: embed2.thumbnail.url,
                                "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="flex gap-4 mt-3"${_scopeId4}>`);
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                class: "w-full",
                                placeholder: "Image...",
                                modelValue: embed2.image.url,
                                "onUpdate:modelValue": ($event) => embed2.image.url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                                class: "text-xs font-normal",
                                color: "transparent",
                                text: "R\xE9duire la taille de l'embed",
                                small: true,
                                onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                style: { "padding": "0!important" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "flex gap-4 mt-3" }, [
                                  vue_cjs_prod.createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0!important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                          name: "Footer"
                        }, {
                          default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                placeholder: "Texte...",
                                modelValue: embed2.footer.text,
                                "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL de l'icone...",
                                modelValue: embed2.footer.icon_url,
                                "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "Timestamp...",
                                modelValue: embed2.timestamp,
                                "onUpdate:modelValue": ($event) => embed2.timestamp = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "Timestamp...",
                                  modelValue: embed2.timestamp,
                                  "onUpdate:modelValue": ($event) => embed2.timestamp = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Auteur"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Corps de l'embed"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "mt-3 flex" }, [
                                  vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      vue_cjs_prod.createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.defaultColors, (color, index) => {
                                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                            class: "w-7 h-7 rounded-md flex items-center justify-center cursor-pointer",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "w-6 h-6"
                                            })) : vue_cjs_prod.createCommentVNode("", true)
                                          ], 12, ["onClick"]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Fields"
                            }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(embed2.fields, (field, id2) => {
                                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                      key: id2,
                                      class: "bg-gray-200 dark:bg-dark-600 rounded-lg mb-2",
                                      name: `Field n\xB0${id2 + 1}`,
                                      trash: () => embed2.fields.splice(id2, 1)
                                    }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1032, ["name", "trash"]);
                                  }), 128)),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "mx-auto mt-8 shadow-none",
                                    color: "blurple",
                                    text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                    onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                  }, null, 8, ["text", "onClick"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Images"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "flex gap-4 mt-3" }, [
                                  vue_cjs_prod.createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0!important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Footer"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "Timestamp...",
                                  modelValue: embed2.timestamp,
                                  "onUpdate:modelValue": ($event) => embed2.timestamp = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]--></div>`);
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                  class: "mx-auto mt-8",
                  color: "blurple",
                  text: `Ajouter un embed (${(_a = message.embeds) == null ? void 0 : _a.length}/10)`,
                  onClick: ($event) => message.embeds.length < 10 && $options.createEmptyEmbed(message)
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(message.embeds, (embed2, id) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                        class: "bg-white dark:bg-dark-800 border-l-4 rounded-l-md rounded-r-lg shadow-xl",
                        key: id,
                        name: `Embed n\xB0${id + 1}`,
                        trash: () => message.embeds.splice(id, 1),
                        style: `border-color: ${embed2.color}`
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Auteur"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Corps de l'embed"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "mt-3 flex" }, [
                                  vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      vue_cjs_prod.createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.defaultColors, (color, index) => {
                                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                            class: "w-7 h-7 rounded-md flex items-center justify-center cursor-pointer",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "w-6 h-6"
                                            })) : vue_cjs_prod.createCommentVNode("", true)
                                          ], 12, ["onClick"]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Fields"
                            }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(embed2.fields, (field, id2) => {
                                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                      key: id2,
                                      class: "bg-gray-200 dark:bg-dark-600 rounded-lg mb-2",
                                      name: `Field n\xB0${id2 + 1}`,
                                      trash: () => embed2.fields.splice(id2, 1)
                                    }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1032, ["name", "trash"]);
                                  }), 128)),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "mx-auto mt-8 shadow-none",
                                    color: "blurple",
                                    text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                    onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                  }, null, 8, ["text", "onClick"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Images"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "flex gap-4 mt-3" }, [
                                  vue_cjs_prod.createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0!important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Footer"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "Timestamp...",
                                  modelValue: embed2.timestamp,
                                  "onUpdate:modelValue": ($event) => embed2.timestamp = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["name", "trash", "style"]);
                    }), 128))
                  ]),
                  vue_cjs_prod.createVNode(_component_Button, {
                    class: "mx-auto mt-8",
                    color: "blurple",
                    text: `Ajouter un embed (${(_b = message.embeds) == null ? void 0 : _b.length}/10)`,
                    onClick: ($event) => message.embeds.length < 10 && $options.createEmptyEmbed(message)
                  }, null, 8, ["text", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".5",
            name: "Boutons",
            class: "relative"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                _push3(`<div${_scopeId2}><div class="flex flex-col gap-4"${_scopeId2}><!--[-->`);
                serverRenderer.exports.ssrRenderList((_a = message == null ? void 0 : message.components[0]) == null ? void 0 : _a.components, (button, id) => {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                    class: "bg-white dark:bg-dark-700 rounded-l-md rounded-r-lg shadow-xl",
                    key: id,
                    name: `Bouton n\xB0${id + 1}`,
                    trash: () => {
                      var _a2, _b2;
                      return (_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.splice(_ctx.index, 1);
                    }
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                          placeholder: "Texte du bouton...",
                          modelValue: button.label,
                          "onUpdate:modelValue": ($event) => button.label = $event
                        }, null, _parent4, _scopeId3));
                        _push4(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                          class: "mt-3",
                          placeholder: "URL du bouton...",
                          modelValue: button.url,
                          "onUpdate:modelValue": ($event) => button.url = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(_component_Input, {
                            placeholder: "Texte du bouton...",
                            modelValue: button.label,
                            "onUpdate:modelValue": ($event) => button.label = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          vue_cjs_prod.createVNode(_component_Input, {
                            class: "mt-3",
                            placeholder: "URL du bouton...",
                            modelValue: button.url,
                            "onUpdate:modelValue": ($event) => button.url = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]--></div>`);
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                  class: "mx-auto mt-8",
                  color: "blurple",
                  text: `Ajouter un bouton (${(_b = message.components[0].components) == null ? void 0 : _b.length}/5)`,
                  onClick: ($event) => {
                    var _a2, _b2;
                    return ((_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.length) < 5 && message.components[0].components.push({
                      type: 2,
                      style: 5,
                      label: "",
                      url: ""
                    });
                  }
                }, null, _parent3, _scopeId2));
                _push3(`</div>`);
                if (!_ctx.is_application_webhook) {
                  _push3(`<div class="absolute w-full h-full top-0 bg-background dark:bg-dark-900 bg-opacity-95 dark:bg-opacity-95 flex justify-center items-center"${_scopeId2}><div class="text-md font-semibold"${_scopeId2}>Tu dois utiliser un webhook cr\xE9\xE9 par un bot pour ajouter des boutons.</div></div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  vue_cjs_prod.createVNode("div", null, [
                    vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList((_c = message == null ? void 0 : message.components[0]) == null ? void 0 : _c.components, (button, id) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-white dark:bg-dark-700 rounded-l-md rounded-r-lg shadow-xl",
                          key: id,
                          name: `Bouton n\xB0${id + 1}`,
                          trash: () => {
                            var _a2, _b2;
                            return (_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.splice(_ctx.index, 1);
                          }
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(_component_Input, {
                              placeholder: "Texte du bouton...",
                              modelValue: button.label,
                              "onUpdate:modelValue": ($event) => button.label = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            vue_cjs_prod.createVNode(_component_Input, {
                              class: "mt-3",
                              placeholder: "URL du bouton...",
                              modelValue: button.url,
                              "onUpdate:modelValue": ($event) => button.url = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["name", "trash"]);
                      }), 128))
                    ]),
                    vue_cjs_prod.createVNode(_component_Button, {
                      class: "mx-auto mt-8",
                      color: "blurple",
                      text: `Ajouter un bouton (${(_d = message.components[0].components) == null ? void 0 : _d.length}/5)`,
                      onClick: ($event) => {
                        var _a2, _b2;
                        return ((_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.length) < 5 && message.components[0].components.push({
                          type: 2,
                          style: 5,
                          label: "",
                          url: ""
                        });
                      }
                    }, null, 8, ["text", "onClick"])
                  ]),
                  !_ctx.is_application_webhook ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                    key: 0,
                    class: "absolute w-full h-full top-0 bg-background dark:bg-dark-900 bg-opacity-95 dark:bg-opacity-95 flex justify-center items-center"
                  }, [
                    vue_cjs_prod.createVNode("div", { class: "text-md font-semibold" }, "Tu dois utiliser un webhook cr\xE9\xE9 par un bot pour ajouter des boutons.")
                  ])) : vue_cjs_prod.createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".6",
            name: "Finaliser le message"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex gap-4 justify-center"${_scopeId2}>`);
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                  class: "mt-8",
                  color: "primary",
                  text: "Voir le JSON",
                  onClick: ($event) => _ctx.modalCode = true
                }, null, _parent3, _scopeId2));
                _push3(serverRenderer.exports.ssrRenderComponent(_component_TransitionRoot, {
                  appear: "",
                  show: _ctx.modalCode,
                  as: "template"
                }, {
                  default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(serverRenderer.exports.ssrRenderComponent(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => _ctx.modalCode = false,
                        class: "relative z-10"
                      }, {
                        default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId5}></div>`);
                                } else {
                                  return [
                                    vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`<div class="fixed inset-0 overflow-y-auto"${_scopeId4}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId4}>`);
                            _push5(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0 scale-95",
                              "enter-to": "opacity-100 scale-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100 scale-100",
                              "leave-to": "opacity-0 scale-95"
                            }, {
                              default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(serverRenderer.exports.ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-2xl max-h-screen-padding transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                    default: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: vue_cjs_prod.withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(` JSON du message `);
                                            } else {
                                              return [
                                                vue_cjs_prod.createTextVNode(" JSON du message ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        _push7(`<pre class="bg-dark-700 my-4 max-h-96 overflow-auto"${_scopeId6}><code${_scopeId6}>${serverRenderer.exports.ssrInterpolate(message)}</code></pre><div class="flex gap-2 items-center mt-4 justify-end"${_scopeId6}>`);
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                                          color: "transparent",
                                          text: "Fermer",
                                          onClick: ($event) => _ctx.modalCode = false
                                        }, null, _parent7, _scopeId6));
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                                          color: "primary",
                                          text: "Copier",
                                          onClick: ($event) => $options.setClipboardText(message)
                                        }, null, _parent7, _scopeId6));
                                        _push7(`</div>`);
                                      } else {
                                        return [
                                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: vue_cjs_prod.withCtx(() => [
                                              vue_cjs_prod.createTextVNode(" JSON du message ")
                                            ]),
                                            _: 1
                                          }),
                                          vue_cjs_prod.createVNode("pre", { class: "bg-dark-700 my-4 max-h-96 overflow-auto" }, [
                                            vue_cjs_prod.createVNode("code", null, vue_cjs_prod.toDisplayString(message), 1)
                                          ]),
                                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Fermer",
                                              onClick: ($event) => _ctx.modalCode = false
                                            }, null, 8, ["onClick"]),
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "primary",
                                              text: "Copier",
                                              onClick: ($event) => $options.setClipboardText(message)
                                            }, null, 8, ["onClick"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-2xl max-h-screen-padding transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: vue_cjs_prod.withCtx(() => [
                                            vue_cjs_prod.createTextVNode(" JSON du message ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode("pre", { class: "bg-dark-700 my-4 max-h-96 overflow-auto" }, [
                                          vue_cjs_prod.createVNode("code", null, vue_cjs_prod.toDisplayString(message), 1)
                                        ]),
                                        vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Fermer",
                                            onClick: ($event) => _ctx.modalCode = false
                                          }, null, 8, ["onClick"]),
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "primary",
                                            text: "Copier",
                                            onClick: ($event) => $options.setClipboardText(message)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`</div></div>`);
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
                                      vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-2xl max-h-screen-padding transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: vue_cjs_prod.withCtx(() => [
                                              vue_cjs_prod.createTextVNode(" JSON du message ")
                                            ]),
                                            _: 1
                                          }),
                                          vue_cjs_prod.createVNode("pre", { class: "bg-dark-700 my-4 max-h-96 overflow-auto" }, [
                                            vue_cjs_prod.createVNode("code", null, vue_cjs_prod.toDisplayString(message), 1)
                                          ]),
                                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Fermer",
                                              onClick: ($event) => _ctx.modalCode = false
                                            }, null, 8, ["onClick"]),
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "primary",
                                              text: "Copier",
                                              onClick: ($event) => $options.setClipboardText(message)
                                            }, null, 8, ["onClick"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        vue_cjs_prod.createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => _ctx.modalCode = false,
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
                                    vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-2xl max-h-screen-padding transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: vue_cjs_prod.withCtx(() => [
                                            vue_cjs_prod.createTextVNode(" JSON du message ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode("pre", { class: "bg-dark-700 my-4 max-h-96 overflow-auto" }, [
                                          vue_cjs_prod.createVNode("code", null, vue_cjs_prod.toDisplayString(message), 1)
                                        ]),
                                        vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Fermer",
                                            onClick: ($event) => _ctx.modalCode = false
                                          }, null, 8, ["onClick"]),
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "primary",
                                            text: "Copier",
                                            onClick: ($event) => $options.setClipboardText(message)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClose"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                  class: "mt-8",
                  color: "secondary",
                  text: "Sauvegarder ce message",
                  onClick: ($event) => $options.setIsOpen()
                }, null, _parent3, _scopeId2));
                _push3(serverRenderer.exports.ssrRenderComponent(_component_TransitionRoot, {
                  appear: "",
                  show: _ctx.isOpen,
                  as: "template"
                }, {
                  default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(serverRenderer.exports.ssrRenderComponent(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => $options.setIsOpen(false),
                        class: "relative z-10"
                      }, {
                        default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId5}></div>`);
                                } else {
                                  return [
                                    vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`<div class="fixed inset-0 overflow-y-auto"${_scopeId4}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId4}>`);
                            _push5(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0 scale-95",
                              "enter-to": "opacity-100 scale-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100 scale-100",
                              "leave-to": "opacity-0 scale-95"
                            }, {
                              default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(serverRenderer.exports.ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                    default: vue_cjs_prod.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: vue_cjs_prod.withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(` Voulez-vous vraiment sauvegarder ce message ? `);
                                            } else {
                                              return [
                                                vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        _push7(`<div class="mt-2"${_scopeId6}><p class="text-sm text-gray-500"${_scopeId6}> Vous pouvez choisir un nom pour la sauvegarde. `);
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                                          class: "mt-2",
                                          placeholder: "Nom de la sauvegarde...",
                                          modelValue: _ctx.savename,
                                          "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                        }, null, _parent7, _scopeId6));
                                        _push7(`</p></div><div class="flex gap-2 items-center mt-4 justify-end"${_scopeId6}>`);
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                                          color: "transparent",
                                          text: "Annuler",
                                          onClick: $options.setIsOpen
                                        }, null, _parent7, _scopeId6));
                                        _push7(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                                          color: "secondary",
                                          text: "Sauvegarder",
                                          onClick: ($event) => $options.save(message)
                                        }, null, _parent7, _scopeId6));
                                        _push7(`</div>`);
                                      } else {
                                        return [
                                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: vue_cjs_prod.withCtx(() => [
                                              vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                            ]),
                                            _: 1
                                          }),
                                          vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500" }, [
                                              vue_cjs_prod.createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                              vue_cjs_prod.createVNode(_component_Input, {
                                                class: "mt-2",
                                                placeholder: "Nom de la sauvegarde...",
                                                modelValue: _ctx.savename,
                                                "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Annuler",
                                              onClick: $options.setIsOpen
                                            }, null, 8, ["onClick"]),
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "secondary",
                                              text: "Sauvegarder",
                                              onClick: ($event) => $options.save(message)
                                            }, null, 8, ["onClick"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: vue_cjs_prod.withCtx(() => [
                                            vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                          vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500" }, [
                                            vue_cjs_prod.createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                            vue_cjs_prod.createVNode(_component_Input, {
                                              class: "mt-2",
                                              placeholder: "Nom de la sauvegarde...",
                                              modelValue: _ctx.savename,
                                              "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Annuler",
                                            onClick: $options.setIsOpen
                                          }, null, 8, ["onClick"]),
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "secondary",
                                            text: "Sauvegarder",
                                            onClick: ($event) => $options.save(message)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`</div></div>`);
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
                                              vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                            ]),
                                            _: 1
                                          }),
                                          vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500" }, [
                                              vue_cjs_prod.createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                              vue_cjs_prod.createVNode(_component_Input, {
                                                class: "mt-2",
                                                placeholder: "Nom de la sauvegarde...",
                                                modelValue: _ctx.savename,
                                                "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Annuler",
                                              onClick: $options.setIsOpen
                                            }, null, 8, ["onClick"]),
                                            vue_cjs_prod.createVNode(_component_Button, {
                                              color: "secondary",
                                              text: "Sauvegarder",
                                              onClick: ($event) => $options.save(message)
                                            }, null, 8, ["onClick"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        vue_cjs_prod.createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => $options.setIsOpen(false),
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
                                            vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                          vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500" }, [
                                            vue_cjs_prod.createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                            vue_cjs_prod.createVNode(_component_Input, {
                                              class: "mt-2",
                                              placeholder: "Nom de la sauvegarde...",
                                              modelValue: _ctx.savename,
                                              "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Annuler",
                                            onClick: $options.setIsOpen
                                          }, null, 8, ["onClick"]),
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "secondary",
                                            text: "Sauvegarder",
                                            onClick: ($event) => $options.save(message)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClose"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  vue_cjs_prod.createVNode("div", { class: "flex gap-4 justify-center" }, [
                    vue_cjs_prod.createVNode(_component_Button, {
                      class: "mt-8",
                      color: "primary",
                      text: "Voir le JSON",
                      onClick: ($event) => _ctx.modalCode = true
                    }, null, 8, ["onClick"]),
                    vue_cjs_prod.createVNode(_component_TransitionRoot, {
                      appear: "",
                      show: _ctx.modalCode,
                      as: "template"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => _ctx.modalCode = false,
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
                                    vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-2xl max-h-screen-padding transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: vue_cjs_prod.withCtx(() => [
                                            vue_cjs_prod.createTextVNode(" JSON du message ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode("pre", { class: "bg-dark-700 my-4 max-h-96 overflow-auto" }, [
                                          vue_cjs_prod.createVNode("code", null, vue_cjs_prod.toDisplayString(message), 1)
                                        ]),
                                        vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Fermer",
                                            onClick: ($event) => _ctx.modalCode = false
                                          }, null, 8, ["onClick"]),
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "primary",
                                            text: "Copier",
                                            onClick: ($event) => $options.setClipboardText(message)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClose"])
                      ]),
                      _: 2
                    }, 1032, ["show"]),
                    vue_cjs_prod.createVNode(_component_Button, {
                      class: "mt-8",
                      color: "secondary",
                      text: "Sauvegarder ce message",
                      onClick: ($event) => $options.setIsOpen()
                    }, null, 8, ["onClick"]),
                    vue_cjs_prod.createVNode(_component_TransitionRoot, {
                      appear: "",
                      show: _ctx.isOpen,
                      as: "template"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => $options.setIsOpen(false),
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
                                            vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                          ]),
                                          _: 1
                                        }),
                                        vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                          vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500" }, [
                                            vue_cjs_prod.createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                            vue_cjs_prod.createVNode(_component_Input, {
                                              class: "mt-2",
                                              placeholder: "Nom de la sauvegarde...",
                                              modelValue: _ctx.savename,
                                              "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Annuler",
                                            onClick: $options.setIsOpen
                                          }, null, 8, ["onClick"]),
                                          vue_cjs_prod.createVNode(_component_Button, {
                                            color: "secondary",
                                            text: "Sauvegarder",
                                            onClick: ($event) => $options.save(message)
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClose"])
                      ]),
                      _: 2
                    }, 1032, ["show"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode("div", null, [
              vue_cjs_prod.createVNode(_component_Menu, {
                as: "div",
                class: "relative inline-block text-left"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_MenuButton, { class: "bg-white dark:bg-dark-800 flex gap-6 items-center p-8 rounded-xl shadow-lg ease-in duration-200 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-dark-700 cursor-pointer" }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_UploadIcon, { class: "w-8 h-8" }),
                      vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-2 text-left" }, [
                        vue_cjs_prod.createVNode("div", { class: "text-md font-semibold" }, "Charger un message"),
                        vue_cjs_prod.createVNode("div", { class: "text-sm" }, "Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l'avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici.")
                      ])
                    ]),
                    _: 1
                  }),
                  vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                    "enter-active-class": "transition duration-100 ease-out",
                    "enter-from-class": "transform scale-95 opacity-0",
                    "enter-to-class": "transform scale-100 opacity-100",
                    "leave-active-class": "transition duration-75 ease-in",
                    "leave-from-class": "transform scale-100 opacity-100",
                    "leave-to-class": "transform scale-95 opacity-0"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_MenuItems, { class: "absolute left-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("div", { class: "p-2 flex flex-col gap-1" }, [
                            vue_cjs_prod.createVNode("div", null, [
                              vue_cjs_prod.createVNode(_component_Input, {
                                placeholder: "URL du message...",
                                onChange: $options.loadMessageFromUrl
                              }, null, 8, ["onChange"])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "w-full" }, [
                              vue_cjs_prod.createVNode("div", { class: "relative flex items-center" }, [
                                vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                                vue_cjs_prod.createVNode("span", { class: "flex-shrink mx-4 text-dark-700" }, "OU"),
                                vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" })
                              ])
                            ]),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($options.getSavedMessages(), (message2, index) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_MenuItem, { key: index }, {
                                default: vue_cjs_prod.withCtx(({ active }) => [
                                  vue_cjs_prod.createVNode("button", {
                                    class: [
                                      active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                      "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    ],
                                    onClick: ($event) => $options.load(msgIndex, index)
                                  }, vue_cjs_prod.toDisplayString(index), 11, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            vue_cjs_prod.createVNode("div", { class: "w-full my-12" }, [
              vue_cjs_prod.createVNode("div", { class: "relative flex items-center" }, [
                vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                vue_cjs_prod.createVNode("span", { class: "flex-shrink mx-4 text-dark-700" }, "OU"),
                vue_cjs_prod.createVNode("div", { class: "flex-grow border-t border-dark-700" })
              ])
            ]),
            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".1",
              name: "Auteur du message",
              class: "pt-0"
            }, {
              default: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_Input, {
                  placeholder: "Nom de l'auteur...",
                  modelValue: message.username,
                  "onUpdate:modelValue": ($event) => message.username = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue_cjs_prod.createVNode(_component_Input, {
                  class: "mt-3",
                  placeholder: "URL de l'avatar de l'auteur...",
                  modelValue: message.avatar_url,
                  "onUpdate:modelValue": ($event) => message.avatar_url = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["step-id"]),
            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".2",
              name: "Contenu du message"
            }, {
              default: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode(_component_Textarea, {
                  placeholder: "Contenu du message...",
                  modelValue: message.content,
                  "onUpdate:modelValue": ($event) => message.content = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["step-id"]),
            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".3",
              name: "Fichiers attach\xE9s au message"
            }, {
              default: vue_cjs_prod.withCtx(() => {
                var _a;
                return [
                  vue_cjs_prod.createVNode("div", { class: "relative ease-in duration-200 shadow-sm hover:shadow-xl hover:-translate-y-1" }, [
                    vue_cjs_prod.createVNode("div", { class: "w-full bg-white dark:bg-dark-800 border-2 border-dashed border-dark-400 dark:border-dark-700 dark:text-dark-300 text-sm font-semibold p-6 rounded-md shadow-lg ease-in duration-200 focus:outline-none flex gap-2 items-center" }, [
                      vue_cjs_prod.createVNode(_component_UploadIcon, { class: "w-8 h-8" }),
                      vue_cjs_prod.createVNode("span", { class: "ml-2" }, vue_cjs_prod.toDisplayString(((_a = message.files) == null ? void 0 : _a.length) > 0 ? `${message.files.length} fichiers attach\xE9s` : "Ajouter un fichier"), 1)
                    ]),
                    vue_cjs_prod.createVNode("input", {
                      class: "absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer",
                      type: "file",
                      multiple: "",
                      onInput: (e) => $options.uploadFile(e, message)
                    }, null, 40, ["onInput"])
                  ]),
                  message.files ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                    key: 0,
                    class: "flex flex-wrap items-center mt-4 gap-3"
                  }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(message.files, (file, index) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                        key: index,
                        class: "flex"
                      }, [
                        vue_cjs_prod.createVNode("div", { class: "relative" }, [
                          file.type.startsWith("image") && file.type !== "image/svg+xml" ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                            key: 0,
                            class: "w-24 h-24 object-cover rounded-lg",
                            file
                          }, null, 8, ["file"])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                            key: 1,
                            file
                          }, null, 8, ["file"])),
                          vue_cjs_prod.createVNode("div", {
                            class: "absolute left-0 top-0 w-full h-full flex items-center justify-center bg-transparent ease-in duration-200 cursor-pointer opacity-0 bg-black hover:opacity-75 rounded-[4px]",
                            onClick: ($event) => message.files.splice(index, 1)
                          }, [
                            vue_cjs_prod.createVNode(_component_TrashIcon, { class: "w-12 h-12" })
                          ], 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])) : vue_cjs_prod.createCommentVNode("", true)
                ];
              }),
              _: 2
            }, 1032, ["step-id"]),
            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".4",
              name: "Embeds"
            }, {
              default: vue_cjs_prod.withCtx(() => {
                var _a;
                return [
                  vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(message.embeds, (embed2, id) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                        class: "bg-white dark:bg-dark-800 border-l-4 rounded-l-md rounded-r-lg shadow-xl",
                        key: id,
                        name: `Embed n\xB0${id + 1}`,
                        trash: () => message.embeds.splice(id, 1),
                        style: `border-color: ${embed2.color}`
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Auteur"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Corps de l'embed"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "mt-3 flex" }, [
                                  vue_cjs_prod.createVNode(_component_ClientOnly, null, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      vue_cjs_prod.createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.defaultColors, (color, index) => {
                                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                            class: "w-7 h-7 rounded-md flex items-center justify-center cursor-pointer",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "w-6 h-6"
                                            })) : vue_cjs_prod.createCommentVNode("", true)
                                          ], 12, ["onClick"]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Fields"
                            }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(embed2.fields, (field, id2) => {
                                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                      key: id2,
                                      class: "bg-gray-200 dark:bg-dark-600 rounded-lg mb-2",
                                      name: `Field n\xB0${id2 + 1}`,
                                      trash: () => embed2.fields.splice(id2, 1)
                                    }, {
                                      default: vue_cjs_prod.withCtx(() => [
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        vue_cjs_prod.createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1032, ["name", "trash"]);
                                  }), 128)),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "mx-auto mt-8 shadow-none",
                                    color: "blurple",
                                    text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                    onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                  }, null, 8, ["text", "onClick"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Images"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode("div", { class: "flex gap-4 mt-3" }, [
                                  vue_cjs_prod.createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vue_cjs_prod.createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0!important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "bg-gray-100 dark:bg-dark-700 rounded-lg",
                              name: "Footer"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vue_cjs_prod.createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "Timestamp...",
                                  modelValue: embed2.timestamp,
                                  "onUpdate:modelValue": ($event) => embed2.timestamp = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["name", "trash", "style"]);
                    }), 128))
                  ]),
                  vue_cjs_prod.createVNode(_component_Button, {
                    class: "mx-auto mt-8",
                    color: "blurple",
                    text: `Ajouter un embed (${(_a = message.embeds) == null ? void 0 : _a.length}/10)`,
                    onClick: ($event) => message.embeds.length < 10 && $options.createEmptyEmbed(message)
                  }, null, 8, ["text", "onClick"])
                ];
              }),
              _: 2
            }, 1032, ["step-id"]),
            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".5",
              name: "Boutons",
              class: "relative"
            }, {
              default: vue_cjs_prod.withCtx(() => {
                var _a, _b;
                return [
                  vue_cjs_prod.createVNode("div", null, [
                    vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-4" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList((_a = message == null ? void 0 : message.components[0]) == null ? void 0 : _a.components, (button, id) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "bg-white dark:bg-dark-700 rounded-l-md rounded-r-lg shadow-xl",
                          key: id,
                          name: `Bouton n\xB0${id + 1}`,
                          trash: () => {
                            var _a2, _b2;
                            return (_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.splice(_ctx.index, 1);
                          }
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(_component_Input, {
                              placeholder: "Texte du bouton...",
                              modelValue: button.label,
                              "onUpdate:modelValue": ($event) => button.label = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            vue_cjs_prod.createVNode(_component_Input, {
                              class: "mt-3",
                              placeholder: "URL du bouton...",
                              modelValue: button.url,
                              "onUpdate:modelValue": ($event) => button.url = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["name", "trash"]);
                      }), 128))
                    ]),
                    vue_cjs_prod.createVNode(_component_Button, {
                      class: "mx-auto mt-8",
                      color: "blurple",
                      text: `Ajouter un bouton (${(_b = message.components[0].components) == null ? void 0 : _b.length}/5)`,
                      onClick: ($event) => {
                        var _a2, _b2;
                        return ((_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.length) < 5 && message.components[0].components.push({
                          type: 2,
                          style: 5,
                          label: "",
                          url: ""
                        });
                      }
                    }, null, 8, ["text", "onClick"])
                  ]),
                  !_ctx.is_application_webhook ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                    key: 0,
                    class: "absolute w-full h-full top-0 bg-background dark:bg-dark-900 bg-opacity-95 dark:bg-opacity-95 flex justify-center items-center"
                  }, [
                    vue_cjs_prod.createVNode("div", { class: "text-md font-semibold" }, "Tu dois utiliser un webhook cr\xE9\xE9 par un bot pour ajouter des boutons.")
                  ])) : vue_cjs_prod.createCommentVNode("", true)
                ];
              }),
              _: 2
            }, 1032, ["step-id"]),
            vue_cjs_prod.createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".6",
              name: "Finaliser le message"
            }, {
              default: vue_cjs_prod.withCtx(() => [
                vue_cjs_prod.createVNode("div", { class: "flex gap-4 justify-center" }, [
                  vue_cjs_prod.createVNode(_component_Button, {
                    class: "mt-8",
                    color: "primary",
                    text: "Voir le JSON",
                    onClick: ($event) => _ctx.modalCode = true
                  }, null, 8, ["onClick"]),
                  vue_cjs_prod.createVNode(_component_TransitionRoot, {
                    appear: "",
                    show: _ctx.modalCode,
                    as: "template"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => _ctx.modalCode = false,
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
                                  vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-2xl max-h-screen-padding transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                                    default: vue_cjs_prod.withCtx(() => [
                                      vue_cjs_prod.createVNode(_component_DialogTitle, {
                                        as: "h3",
                                        class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                      }, {
                                        default: vue_cjs_prod.withCtx(() => [
                                          vue_cjs_prod.createTextVNode(" JSON du message ")
                                        ]),
                                        _: 1
                                      }),
                                      vue_cjs_prod.createVNode("pre", { class: "bg-dark-700 my-4 max-h-96 overflow-auto" }, [
                                        vue_cjs_prod.createVNode("code", null, vue_cjs_prod.toDisplayString(message), 1)
                                      ]),
                                      vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                        vue_cjs_prod.createVNode(_component_Button, {
                                          color: "transparent",
                                          text: "Fermer",
                                          onClick: ($event) => _ctx.modalCode = false
                                        }, null, 8, ["onClick"]),
                                        vue_cjs_prod.createVNode(_component_Button, {
                                          color: "primary",
                                          text: "Copier",
                                          onClick: ($event) => $options.setClipboardText(message)
                                        }, null, 8, ["onClick"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClose"])
                    ]),
                    _: 2
                  }, 1032, ["show"]),
                  vue_cjs_prod.createVNode(_component_Button, {
                    class: "mt-8",
                    color: "secondary",
                    text: "Sauvegarder ce message",
                    onClick: ($event) => $options.setIsOpen()
                  }, null, 8, ["onClick"]),
                  vue_cjs_prod.createVNode(_component_TransitionRoot, {
                    appear: "",
                    show: _ctx.isOpen,
                    as: "template"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => $options.setIsOpen(false),
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
                                          vue_cjs_prod.createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                        ]),
                                        _: 1
                                      }),
                                      vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                                        vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500" }, [
                                          vue_cjs_prod.createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                          vue_cjs_prod.createVNode(_component_Input, {
                                            class: "mt-2",
                                            placeholder: "Nom de la sauvegarde...",
                                            modelValue: _ctx.savename,
                                            "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                                        vue_cjs_prod.createVNode(_component_Button, {
                                          color: "transparent",
                                          text: "Annuler",
                                          onClick: $options.setIsOpen
                                        }, null, 8, ["onClick"]),
                                        vue_cjs_prod.createVNode(_component_Button, {
                                          color: "secondary",
                                          text: "Sauvegarder",
                                          onClick: ($event) => $options.save(message)
                                        }, null, 8, ["onClick"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClose"])
                    ]),
                    _: 2
                  }, 1032, ["show"])
                ])
              ]),
              _: 2
            }, 1032, ["step-id"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
    "step-id": "finale",
    name: "Envoie tes messages !"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center justify-center gap-2 mt-8"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
          color: "white",
          text: "Ajouter un message",
          onClick: $options.createEmptyMessage
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Button, {
          color: "blurple",
          text: "Envoyer",
          onClick: $options.sendMessage
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "flex items-center justify-center gap-2 mt-8" }, [
            vue_cjs_prod.createVNode(_component_Button, {
              color: "white",
              text: "Ajouter un message",
              onClick: $options.createEmptyMessage
            }, null, 8, ["onClick"]),
            vue_cjs_prod.createVNode(_component_Button, {
              color: "blurple",
              text: "Envoyer",
              onClick: $options.sendMessage
            }, null, 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><div class="bg-[#FAFAFA] dark:bg-[#36393F] shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex-col gap-4 overflow-y-auto lg:max-h-screen-padding relative hidden lg:flex"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.messages, (message, index) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeMessage, {
      key: index,
      data: message
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.mobile_preview_open,
    as: "template"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
          as: "template",
          enter: "duration-300 ease-out",
          "enter-from": "opacity-0",
          "enter-to": "opacity-100",
          leave: "duration-200 ease-in",
          "leave-from": "opacity-100",
          "leave-to": "opacity-0"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="fixed top-0 left-0 h-screen w-full lg:relative lg:block z-10"${_scopeId2}><div class="bg-[#FAFAFA] dark:bg-[#36393F] shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex flex-col gap-4 overflow-y-auto h-screen lg:max-h-screen-padding relative"${_scopeId2}><div class="right-8 lg:hidden flex justify-end"${_scopeId2}><button class="rounded-full border-2 border-dark-700 dark:border-white p-4 focus:bg-white focus:text-white flex items-center justify-center group opacity-50"${_scopeId2}><svg class="fill-black dark:fill-white group-focus:fill-black w-5 h-5" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"${_scopeId2}></path></svg></button></div><!--[-->`);
              serverRenderer.exports.ssrRenderList(_ctx.messages, (message, index) => {
                _push3(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeMessage, {
                  key: index,
                  data: message
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode("div", { class: "fixed top-0 left-0 h-screen w-full lg:relative lg:block z-10" }, [
                  vue_cjs_prod.createVNode("div", { class: "bg-[#FAFAFA] dark:bg-[#36393F] shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex flex-col gap-4 overflow-y-auto h-screen lg:max-h-screen-padding relative" }, [
                    vue_cjs_prod.createVNode("div", { class: "right-8 lg:hidden flex justify-end" }, [
                      vue_cjs_prod.createVNode("button", {
                        class: "rounded-full border-2 border-dark-700 dark:border-white p-4 focus:bg-white focus:text-white flex items-center justify-center group opacity-50",
                        onClick: $options.toggleMobilePreview
                      }, [
                        (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                          class: "fill-black dark:fill-white group-focus:fill-black w-5 h-5",
                          viewBox: "0 0 10 10",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          vue_cjs_prod.createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.messages, (message, index) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorFakeMessage, {
                        key: index,
                        data: message
                      }, null, 8, ["data"]);
                    }), 128))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
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
              vue_cjs_prod.createVNode("div", { class: "fixed top-0 left-0 h-screen w-full lg:relative lg:block z-10" }, [
                vue_cjs_prod.createVNode("div", { class: "bg-[#FAFAFA] dark:bg-[#36393F] shadow-xl lg:rounded-2xl p-8 w-full lg:sticky lg:top-12 flex flex-col gap-4 overflow-y-auto h-screen lg:max-h-screen-padding relative" }, [
                  vue_cjs_prod.createVNode("div", { class: "right-8 lg:hidden flex justify-end" }, [
                    vue_cjs_prod.createVNode("button", {
                      class: "rounded-full border-2 border-dark-700 dark:border-white p-4 focus:bg-white focus:text-white flex items-center justify-center group opacity-50",
                      onClick: $options.toggleMobilePreview
                    }, [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                        class: "fill-black dark:fill-white group-focus:fill-black w-5 h-5",
                        viewBox: "0 0 10 10",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        vue_cjs_prod.createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ]),
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.messages, (message, index) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorFakeMessage, {
                      key: index,
                      data: message
                    }, null, 8, ["data"]);
                  }), 128))
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="fixed bottom-8 right-12 w-24 h-24 bg-dark-800 rounded-full ease-in duration-200 hover:scale-125 hover:bg-dark-700 flex justify-center items-center lg:hidden">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_EyeIcon, { class: "w-12 h-12" }, null, _parent));
  _push(`</div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/discord/embed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const embed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { embed as default };
//# sourceMappingURL=embed.70295c0a.mjs.map
