import { _ as _export_sfc, c as client, v as __nuxt_component_0, d as __nuxt_component_0$1, b as __nuxt_component_1, C as __nuxt_component_3, a as __nuxt_component_4, D as __nuxt_component_5, F as __nuxt_component_6, G as __nuxt_component_7, H as __nuxt_component_8, j as __nuxt_component_9, z as __nuxt_component_10, I as __nuxt_component_11 } from "../server.mjs";
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { CheckIcon, UploadIcon, CubeIcon, TrashIcon, EyeIcon } from "@heroicons/vue/outline/esm/index.js";
import { ColorPicker } from "vue3-colorpicker";
import { a as transformFileIntoBlob } from "./style.c06ff9d5.js";
import axios from "axios";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, Transition, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "@vue/devtools-api";
import "discord-markdown";
import "save-svg-as-png";
const checkWebhookValidity = async (webhook) => {
  if (!webhook.match(/^(https:\/\/discord.com\/api\/webhooks\/\d{17,}\/.{10,})$/))
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
    form.append(
      "payload_json",
      JSON.stringify({
        ...message,
        components: message.components[0].components.length !== 0 && message.components,
        embeds: message.embeds.map((embed2) => ({
          ...embed2,
          color: parseInt(embed2.color.substr(1), 16)
        }))
      })
    );
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
const embed_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    CheckIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    UploadIcon,
    CubeIcon,
    ColorPicker,
    TrashIcon,
    EyeIcon
  },
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
        embeds: [
          {
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
          }
        ]
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
    this.messages[0].files[0] = new File(
      [new Blob([response.data])],
      "welcome.png",
      {
        type: "image/png"
      }
    );
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
      console.log("webhooksinfos", webhookInfos);
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
      client.post("statistics", {
        tool: "discord_embed"
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
      localStorage.setItem(
        "discord_embed_creator_messages",
        JSON.stringify(messages)
      );
      this.setIsOpen();
    },
    getSavedMessages() {
      return JSON.parse(localStorage.getItem("discord_embed_creator_messages")) || {};
    },
    loadMessageFromUrl(e) {
      const value = typeof e === "string" ? e : e.target.value;
      if (!value || !value.match && !value.match(
        /^(https:\/\/discord.com\/channels\/\d{18}\/\d{18}\/messages\/\d{18})$/
      ))
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
  const _component_ToolsHeader = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Button = __nuxt_component_1;
  const _component_CubeIcon = resolveComponent("CubeIcon");
  const _component_ToolsDiscordEmbedCreatorStep = __nuxt_component_3;
  const _component_Input = __nuxt_component_4;
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_Menu = resolveComponent("Menu");
  const _component_MenuButton = resolveComponent("MenuButton");
  const _component_UploadIcon = resolveComponent("UploadIcon");
  const _component_MenuItems = resolveComponent("MenuItems");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_Textarea = __nuxt_component_5;
  const _component_ToolsDiscordEmbedCreatorAttachmentsImage = __nuxt_component_6;
  const _component_ToolsDiscordEmbedCreatorAttachmentsFile = __nuxt_component_7;
  const _component_ToolsDiscordEmbedCreatorCollapseCard = __nuxt_component_8;
  const _component_ClientOnly = __nuxt_component_9;
  const _component_ColorPicker = resolveComponent("ColorPicker");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  const _component_Toggle = __nuxt_component_10;
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_ToolsDiscordEmbedCreatorFakeMessage = __nuxt_component_11;
  const _component_EyeIcon = resolveComponent("EyeIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ToolsHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="mx-auto max-w-lg text-4xl font-extrabold"${_scopeId}>Embed Discord</h1><h2 class="mx-auto mt-4 max-w-lg text-2xl leading-relaxed"${_scopeId}> Cr\xE9e et envoie tes embeds \xE0 ton serveur avec cet outil! </h2><div class="mx-auto mt-12 flex gap-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/tools/discord",
          class: "w-full"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Button, {
                class: "mx-auto",
                color: "white",
                text: "Voir d'autres outils Discord",
                small: true
              }, {
                icon_left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CubeIcon, { class: "mr-3 h-8 w-8" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_CubeIcon, { class: "mr-3 h-8 w-8" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Button, {
                  class: "mx-auto",
                  color: "white",
                  text: "Voir d'autres outils Discord",
                  small: true
                }, {
                  icon_left: withCtx(() => [
                    createVNode(_component_CubeIcon, { class: "mr-3 h-8 w-8" })
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
          createVNode("h1", { class: "mx-auto max-w-lg text-4xl font-extrabold" }, "Embed Discord"),
          createVNode("h2", { class: "mx-auto mt-4 max-w-lg text-2xl leading-relaxed" }, " Cr\xE9e et envoie tes embeds \xE0 ton serveur avec cet outil! "),
          createVNode("div", { class: "mx-auto mt-12 flex gap-4" }, [
            createVNode(_component_NuxtLink, {
              to: "/tools/discord",
              class: "w-full"
            }, {
              default: withCtx(() => [
                createVNode(_component_Button, {
                  class: "mx-auto",
                  color: "white",
                  text: "Voir d'autres outils Discord",
                  small: true
                }, {
                  icon_left: withCtx(() => [
                    createVNode(_component_CubeIcon, { class: "mr-3 h-8 w-8" })
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
  _push(`<section class="container mx-auto gap-8 py-24 px-4"><h3 class="text-2xl font-semibold"> Tu souhaites envoyer un embed sur ton serveur? </h3><div class="mt-2 text-lg"> Suis les diff\xE9rentes \xE9tapes afin de l\u2019envoyer! </div><div class="mt-8 grid gap-8 lg:grid-cols-2"><div>`);
  _push(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
    "step-id": "1",
    name: "Webhook URL",
    description: "Pour trouver l\u2019URL du webhook, rends toi sur Discord dans les param\xE8tres de ton serveur. Rends toi ensuite dans l\u2019onglet \u201CIntegrations\u201D et clique sur \u201CWebhooks\u201D."
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Input, {
          big: true,
          placeholder: "https://discord.com/webhooks/id/token",
          modelValue: _ctx.webhook_url,
          "onUpdate:modelValue": ($event) => _ctx.webhook_url = $event
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Input, {
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
  ssrRenderList(_ctx.messages, (message, msgIndex) => {
    _push(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
      key: msgIndex,
      "step-id": msgIndex + 2,
      name: `Cr\xE9ation du message n\xB0${msgIndex + 1}`,
      "big-padding": true
    }, {
      bin: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="p-2"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_TrashIcon, { class: "h-6 w-6" }, null, _parent2, _scopeId));
          _push2(`</button>`);
        } else {
          return [
            createVNode("button", {
              onClick: () => {
                _ctx.messages.splice(msgIndex, 1);
              },
              class: "p-2"
            }, [
              createVNode(_component_TrashIcon, { class: "h-6 w-6" })
            ], 8, ["onClick"])
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Menu, {
            as: "div",
            class: "relative inline-block text-left"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_MenuButton, { class: "flex cursor-pointer items-center gap-6 rounded-xl bg-white p-8 shadow-lg duration-200 ease-in hover:-translate-y-1 hover:shadow-xl dark:bg-dark-800 dark:hover:bg-dark-700" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_UploadIcon, { class: "h-8 w-8" }, null, _parent4, _scopeId3));
                      _push4(`<div class="flex flex-col gap-2 text-left"${_scopeId3}><div class="text-md font-semibold"${_scopeId3}> Charger un message </div><div class="text-sm"${_scopeId3}> Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l&#39;avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici. </div></div>`);
                    } else {
                      return [
                        createVNode(_component_UploadIcon, { class: "h-8 w-8" }),
                        createVNode("div", { class: "flex flex-col gap-2 text-left" }, [
                          createVNode("div", { class: "text-md font-semibold" }, " Charger un message "),
                          createVNode("div", { class: "text-sm" }, " Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l'avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici. ")
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(``);
                _push3(ssrRenderComponent(_component_MenuItems, { class: "absolute left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-800" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="flex flex-col gap-1 p-2"${_scopeId3}><div${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Input, {
                        placeholder: "URL du message...",
                        onChange: $options.loadMessageFromUrl
                      }, null, _parent4, _scopeId3));
                      _push4(`</div><div class="w-full"${_scopeId3}><div class="relative flex items-center"${_scopeId3}><div class="flex-grow border-t border-dark-700"${_scopeId3}></div><span class="mx-4 flex-shrink text-dark-700"${_scopeId3}>OU</span><div class="flex-grow border-t border-dark-700"${_scopeId3}></div></div></div><!--[-->`);
                      ssrRenderList($options.getSavedMessages(), (message2, index) => {
                        _push4(ssrRenderComponent(_component_MenuItem, { key: index }, {
                          default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="${ssrRenderClass([
                                active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                              ])}"${_scopeId4}>${ssrInterpolate(index)}</button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  class: [
                                    active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                  ],
                                  onClick: ($event) => $options.load(msgIndex, index)
                                }, toDisplayString(index), 11, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      });
                      _push4(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col gap-1 p-2" }, [
                          createVNode("div", null, [
                            createVNode(_component_Input, {
                              placeholder: "URL du message...",
                              onChange: $options.loadMessageFromUrl
                            }, null, 8, ["onChange"])
                          ]),
                          createVNode("div", { class: "w-full" }, [
                            createVNode("div", { class: "relative flex items-center" }, [
                              createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                              createVNode("span", { class: "mx-4 flex-shrink text-dark-700" }, "OU"),
                              createVNode("div", { class: "flex-grow border-t border-dark-700" })
                            ])
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList($options.getSavedMessages(), (message2, index) => {
                            return openBlock(), createBlock(_component_MenuItem, { key: index }, {
                              default: withCtx(({ active }) => [
                                createVNode("button", {
                                  class: [
                                    active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                  ],
                                  onClick: ($event) => $options.load(msgIndex, index)
                                }, toDisplayString(index), 11, ["onClick"])
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
                  createVNode(_component_MenuButton, { class: "flex cursor-pointer items-center gap-6 rounded-xl bg-white p-8 shadow-lg duration-200 ease-in hover:-translate-y-1 hover:shadow-xl dark:bg-dark-800 dark:hover:bg-dark-700" }, {
                    default: withCtx(() => [
                      createVNode(_component_UploadIcon, { class: "h-8 w-8" }),
                      createVNode("div", { class: "flex flex-col gap-2 text-left" }, [
                        createVNode("div", { class: "text-md font-semibold" }, " Charger un message "),
                        createVNode("div", { class: "text-sm" }, " Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l'avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici. ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, {
                    "enter-active-class": "transition duration-100 ease-out",
                    "enter-from-class": "transform scale-95 opacity-0",
                    "enter-to-class": "transform scale-100 opacity-100",
                    "leave-active-class": "transition duration-75 ease-in",
                    "leave-from-class": "transform scale-100 opacity-100",
                    "leave-to-class": "transform scale-95 opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_MenuItems, { class: "absolute left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-800" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col gap-1 p-2" }, [
                            createVNode("div", null, [
                              createVNode(_component_Input, {
                                placeholder: "URL du message...",
                                onChange: $options.loadMessageFromUrl
                              }, null, 8, ["onChange"])
                            ]),
                            createVNode("div", { class: "w-full" }, [
                              createVNode("div", { class: "relative flex items-center" }, [
                                createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                                createVNode("span", { class: "mx-4 flex-shrink text-dark-700" }, "OU"),
                                createVNode("div", { class: "flex-grow border-t border-dark-700" })
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList($options.getSavedMessages(), (message2, index) => {
                              return openBlock(), createBlock(_component_MenuItem, { key: index }, {
                                default: withCtx(({ active }) => [
                                  createVNode("button", {
                                    class: [
                                      active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                      "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    ],
                                    onClick: ($event) => $options.load(msgIndex, index)
                                  }, toDisplayString(index), 11, ["onClick"])
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
          _push2(`</div><div class="my-12 w-full"${_scopeId}><div class="relative flex items-center"${_scopeId}><div class="flex-grow border-t border-dark-700"${_scopeId}></div><span class="mx-4 flex-shrink text-dark-700"${_scopeId}>OU</span><div class="flex-grow border-t border-dark-700"${_scopeId}></div></div></div>`);
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".1",
            name: "Auteur du message",
            class: "pt-0"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Input, {
                  placeholder: "Nom de l'auteur...",
                  modelValue: message.username,
                  "onUpdate:modelValue": ($event) => message.username = $event
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_Input, {
                  class: "mt-3",
                  placeholder: "URL de l'avatar de l'auteur...",
                  modelValue: message.avatar_url,
                  "onUpdate:modelValue": ($event) => message.avatar_url = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_Input, {
                    placeholder: "Nom de l'auteur...",
                    modelValue: message.username,
                    "onUpdate:modelValue": ($event) => message.username = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_Input, {
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
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".2",
            name: "Contenu du message"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Textarea, {
                  placeholder: "Contenu du message...",
                  modelValue: message.content,
                  "onUpdate:modelValue": ($event) => message.content = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_Textarea, {
                    placeholder: "Contenu du message...",
                    modelValue: message.content,
                    "onUpdate:modelValue": ($event) => message.content = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".3",
            name: "Fichiers attach\xE9s au message"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b;
              if (_push3) {
                _push3(`<div class="relative shadow-sm duration-200 ease-in hover:-translate-y-1 hover:shadow-xl"${_scopeId2}><div class="flex w-full items-center gap-2 rounded-md border-2 border-dashed border-dark-400 bg-white p-6 text-sm font-semibold shadow-lg duration-200 ease-in focus:outline-none dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_UploadIcon, { class: "h-8 w-8" }, null, _parent3, _scopeId2));
                _push3(`<span class="ml-2"${_scopeId2}>${ssrInterpolate(((_a = message.files) == null ? void 0 : _a.length) > 0 ? `${message.files.length} fichiers attach\xE9s` : "Ajouter un fichier")}</span></div><input class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0" type="file" multiple${_scopeId2}></div>`);
                if (message.files) {
                  _push3(`<div class="mt-4 flex flex-wrap items-center gap-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(message.files, (file, index) => {
                    _push3(`<div class="flex"${_scopeId2}><div class="relative"${_scopeId2}>`);
                    if (file.type.startsWith("image") && file.type !== "image/svg+xml") {
                      _push3(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                        class: "h-24 w-24 rounded-lg object-cover",
                        file
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsFile, { file }, null, _parent3, _scopeId2));
                    }
                    _push3(`<div class="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-[4px] bg-transparent bg-black opacity-0 duration-200 ease-in hover:opacity-75"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_TrashIcon, { class: "h-12 w-12" }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  createVNode("div", { class: "relative shadow-sm duration-200 ease-in hover:-translate-y-1 hover:shadow-xl" }, [
                    createVNode("div", { class: "flex w-full items-center gap-2 rounded-md border-2 border-dashed border-dark-400 bg-white p-6 text-sm font-semibold shadow-lg duration-200 ease-in focus:outline-none dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300" }, [
                      createVNode(_component_UploadIcon, { class: "h-8 w-8" }),
                      createVNode("span", { class: "ml-2" }, toDisplayString(((_b = message.files) == null ? void 0 : _b.length) > 0 ? `${message.files.length} fichiers attach\xE9s` : "Ajouter un fichier"), 1)
                    ]),
                    createVNode("input", {
                      class: "absolute top-0 left-0 h-full w-full cursor-pointer opacity-0",
                      type: "file",
                      multiple: "",
                      onInput: (e) => $options.uploadFile(e, message)
                    }, null, 40, ["onInput"])
                  ]),
                  message.files ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4 flex flex-wrap items-center gap-3"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(message.files, (file, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "flex"
                      }, [
                        createVNode("div", { class: "relative" }, [
                          file.type.startsWith("image") && file.type !== "image/svg+xml" ? (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                            key: 0,
                            class: "h-24 w-24 rounded-lg object-cover",
                            file
                          }, null, 8, ["file"])) : (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                            key: 1,
                            file
                          }, null, 8, ["file"])),
                          createVNode("div", {
                            class: "absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-[4px] bg-transparent bg-black opacity-0 duration-200 ease-in hover:opacity-75",
                            onClick: ($event) => message.files.splice(index, 1)
                          }, [
                            createVNode(_component_TrashIcon, { class: "h-12 w-12" })
                          ], 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".4",
            name: "Embeds"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b;
              if (_push3) {
                _push3(`<div class="flex flex-col gap-4"${_scopeId2}><!--[-->`);
                ssrRenderList(message.embeds, (embed2, id) => {
                  _push3(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                    class: "rounded-l-md rounded-r-lg border-l-4 bg-white shadow-xl dark:bg-dark-800",
                    key: id,
                    name: `Embed n\xB0${id + 1}`,
                    trash: () => message.embeds.splice(id, 1),
                    style: `border-color: ${embed2.color}`
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                          name: "Auteur"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                placeholder: "Nom de l'auteur...",
                                modelValue: embed2.author.name,
                                "onUpdate:modelValue": ($event) => embed2.author.name = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL de l'avatar de l'auteur...",
                                modelValue: embed2.author.icon_url,
                                "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL de l'auteur...",
                                modelValue: embed2.author.url,
                                "onUpdate:modelValue": ($event) => embed2.author.url = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
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
                        _push4(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                          name: "Corps de l'embed"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                placeholder: "Titre...",
                                modelValue: embed2.title,
                                "onUpdate:modelValue": ($event) => embed2.title = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Textarea, {
                                class: "mt-3",
                                placeholder: "Description...",
                                modelValue: embed2.description,
                                "onUpdate:modelValue": ($event) => embed2.description = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL...",
                                modelValue: embed2.url,
                                "onUpdate:modelValue": ($event) => embed2.url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="mt-3 flex"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_ClientOnly, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ColorPicker, {
                                      pureColor: embed2.color,
                                      "onUpdate:pureColor": ($event) => embed2.color = $event,
                                      disableAlpha: true,
                                      shape: "circle",
                                      pickerType: "chrome",
                                      format: "hex"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="grid grid-cols-10 gap-2"${_scopeId5}><!--[-->`);
                                    ssrRenderList(_ctx.defaultColors, (color, index) => {
                                      _push6(`<div class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md" style="${ssrRenderStyle(`background: ${color};`)}"${_scopeId5}>`);
                                      if (embed2.color == color) {
                                        _push6(ssrRenderComponent(_component_CheckIcon, { class: "h-6 w-6" }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    });
                                    _push6(`<!--]--></div>`);
                                  } else {
                                    return [
                                      createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.defaultColors, (color, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (openBlock(), createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "h-6 w-6"
                                            })) : createCommentVNode("", true)
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
                                createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex" }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.defaultColors, (color, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (openBlock(), createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "h-6 w-6"
                                            })) : createCommentVNode("", true)
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
                        _push4(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                          name: "Fields"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a2, _b2;
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(embed2.fields, (field, id2) => {
                                _push5(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                  key: id2,
                                  class: "mb-2 rounded-lg bg-gray-200 dark:bg-dark-600",
                                  name: `Field n\xB0${id2 + 1}`,
                                  trash: () => embed2.fields.splice(id2, 1)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Input, {
                                        placeholder: "Titre...",
                                        modelValue: field.name,
                                        "onUpdate:modelValue": ($event) => field.name = $event
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_Input, {
                                        class: "mt-3 mb-3",
                                        placeholder: "Valeur...",
                                        modelValue: field.value,
                                        "onUpdate:modelValue": ($event) => field.value = $event
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_Toggle, {
                                        modelValue: field.inline,
                                        "onUpdate:modelValue": ($event) => field.inline = $event
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Toggle, {
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
                              _push5(ssrRenderComponent(_component_Button, {
                                class: "mx-auto mt-8 shadow-none",
                                color: "blurple",
                                text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(embed2.fields, (field, id2) => {
                                  return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                    key: id2,
                                    class: "mb-2 rounded-lg bg-gray-200 dark:bg-dark-600",
                                    name: `Field n\xB0${id2 + 1}`,
                                    trash: () => embed2.fields.splice(id2, 1)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Input, {
                                        placeholder: "Titre...",
                                        modelValue: field.name,
                                        "onUpdate:modelValue": ($event) => field.name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_Input, {
                                        class: "mt-3 mb-3",
                                        placeholder: "Valeur...",
                                        modelValue: field.value,
                                        "onUpdate:modelValue": ($event) => field.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_Toggle, {
                                        modelValue: field.inline,
                                        "onUpdate:modelValue": ($event) => field.inline = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                  }, 1032, ["name", "trash"]);
                                }), 128)),
                                createVNode(_component_Button, {
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
                        _push4(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                          name: "Images"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                placeholder: "Image de couverture...",
                                modelValue: embed2.thumbnail.url,
                                "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="mt-3 flex gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Input, {
                                class: "w-full",
                                placeholder: "Image...",
                                modelValue: embed2.image.url,
                                "onUpdate:modelValue": ($event) => embed2.image.url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Button, {
                                class: "text-xs font-normal",
                                color: "transparent",
                                text: "R\xE9duire la taille de l'embed",
                                small: true,
                                onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                style: { "padding": "0 !important" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex gap-4" }, [
                                  createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0 !important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                          name: "Footer"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, {
                                placeholder: "Texte...",
                                modelValue: embed2.footer.text,
                                "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "URL de l'icone...",
                                modelValue: embed2.footer.icon_url,
                                "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                class: "mt-3",
                                placeholder: "Timestamp...",
                                modelValue: embed2.timestamp,
                                "onUpdate:modelValue": ($event) => embed2.timestamp = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
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
                          createVNode("div", { class: "flex flex-col gap-4" }, [
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Auteur"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Corps de l'embed"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex" }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.defaultColors, (color, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (openBlock(), createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "h-6 w-6"
                                            })) : createCommentVNode("", true)
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
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Fields"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(embed2.fields, (field, id2) => {
                                    return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                      key: id2,
                                      class: "mb-2 rounded-lg bg-gray-200 dark:bg-dark-600",
                                      name: `Field n\xB0${id2 + 1}`,
                                      trash: () => embed2.fields.splice(id2, 1)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1032, ["name", "trash"]);
                                  }), 128)),
                                  createVNode(_component_Button, {
                                    class: "mx-auto mt-8 shadow-none",
                                    color: "blurple",
                                    text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                    onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                  }, null, 8, ["text", "onClick"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Images"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex gap-4" }, [
                                  createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0 !important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Footer"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
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
                _push3(ssrRenderComponent(_component_Button, {
                  class: "mx-auto mt-8",
                  color: "blurple",
                  text: `Ajouter un embed (${(_a = message.embeds) == null ? void 0 : _a.length}/10)`,
                  onClick: ($event) => message.embeds.length < 10 && $options.createEmptyEmbed(message)
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(message.embeds, (embed2, id) => {
                      return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                        class: "rounded-l-md rounded-r-lg border-l-4 bg-white shadow-xl dark:bg-dark-800",
                        key: id,
                        name: `Embed n\xB0${id + 1}`,
                        trash: () => message.embeds.splice(id, 1),
                        style: `border-color: ${embed2.color}`
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col gap-4" }, [
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Auteur"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Corps de l'embed"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex" }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.defaultColors, (color, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (openBlock(), createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "h-6 w-6"
                                            })) : createCommentVNode("", true)
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
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Fields"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(embed2.fields, (field, id2) => {
                                    return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                      key: id2,
                                      class: "mb-2 rounded-lg bg-gray-200 dark:bg-dark-600",
                                      name: `Field n\xB0${id2 + 1}`,
                                      trash: () => embed2.fields.splice(id2, 1)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1032, ["name", "trash"]);
                                  }), 128)),
                                  createVNode(_component_Button, {
                                    class: "mx-auto mt-8 shadow-none",
                                    color: "blurple",
                                    text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                    onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                  }, null, 8, ["text", "onClick"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Images"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex gap-4" }, [
                                  createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0 !important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Footer"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
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
                  createVNode(_component_Button, {
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
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".5",
            name: "Boutons",
            class: "relative"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                _push3(`<div${_scopeId2}><div class="flex flex-col gap-4"${_scopeId2}><!--[-->`);
                ssrRenderList((_a = message == null ? void 0 : message.components[0]) == null ? void 0 : _a.components, (button, id) => {
                  _push3(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                    class: "rounded-l-md rounded-r-lg bg-white shadow-xl dark:bg-dark-700",
                    key: id,
                    name: `Bouton n\xB0${id + 1}`,
                    trash: () => {
                      var _a2, _b2;
                      return (_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.splice(_ctx.index, 1);
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          placeholder: "Texte du bouton...",
                          modelValue: button.label,
                          "onUpdate:modelValue": ($event) => button.label = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Input, {
                          class: "mt-3",
                          placeholder: "URL du bouton...",
                          modelValue: button.url,
                          "onUpdate:modelValue": ($event) => button.url = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            placeholder: "Texte du bouton...",
                            modelValue: button.label,
                            "onUpdate:modelValue": ($event) => button.label = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Input, {
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
                _push3(ssrRenderComponent(_component_Button, {
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
                  _push3(`<div class="absolute top-0 flex h-full w-full items-center justify-center bg-background bg-opacity-95 dark:bg-dark-950 dark:bg-opacity-95"${_scopeId2}><div class="text-md font-semibold"${_scopeId2}> Tu dois utiliser un webhook cr\xE9\xE9 par un bot pour ajouter des boutons. </div></div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_c = message == null ? void 0 : message.components[0]) == null ? void 0 : _c.components, (button, id) => {
                        return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-l-md rounded-r-lg bg-white shadow-xl dark:bg-dark-700",
                          key: id,
                          name: `Bouton n\xB0${id + 1}`,
                          trash: () => {
                            var _a2, _b2;
                            return (_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.splice(_ctx.index, 1);
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              placeholder: "Texte du bouton...",
                              modelValue: button.label,
                              "onUpdate:modelValue": ($event) => button.label = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Input, {
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
                    createVNode(_component_Button, {
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
                  !_ctx.is_application_webhook ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute top-0 flex h-full w-full items-center justify-center bg-background bg-opacity-95 dark:bg-dark-950 dark:bg-opacity-95"
                  }, [
                    createVNode("div", { class: "text-md font-semibold" }, " Tu dois utiliser un webhook cr\xE9\xE9 par un bot pour ajouter des boutons. ")
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
            "step-id": msgIndex + 2 + ".6",
            name: "Finaliser le message"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex justify-center gap-4"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_Button, {
                  class: "mt-8",
                  color: "primary",
                  text: "Voir le JSON",
                  onClick: ($event) => _ctx.modalCode = true
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_TransitionRoot, {
                  appear: "",
                  show: _ctx.modalCode,
                  as: "template"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => _ctx.modalCode = false,
                        class: "relative z-10"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId5}></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`<div class="fixed inset-0 overflow-y-auto"${_scopeId4}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0 scale-95",
                              "enter-to": "opacity-100 scale-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100 scale-100",
                              "leave-to": "opacity-0 scale-95"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_DialogPanel, { class: "max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(` JSON du message `);
                                            } else {
                                              return [
                                                createTextVNode(" JSON du message ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        _push7(`<pre class="my-4 max-h-96 overflow-auto bg-dark-700"${_scopeId6}><code${_scopeId6}>${ssrInterpolate(message)}</code></pre><div class="mt-4 flex items-center justify-end gap-2"${_scopeId6}>`);
                                        _push7(ssrRenderComponent(_component_Button, {
                                          color: "transparent",
                                          text: "Fermer",
                                          onClick: ($event) => _ctx.modalCode = false
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_Button, {
                                          color: "primary",
                                          text: "Copier",
                                          onClick: ($event) => $options.setClipboardText(message)
                                        }, null, _parent7, _scopeId6));
                                        _push7(`</div>`);
                                      } else {
                                        return [
                                          createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" JSON du message ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("pre", { class: "my-4 max-h-96 overflow-auto bg-dark-700" }, [
                                            createVNode("code", null, toDisplayString(message), 1)
                                          ]),
                                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                            createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Fermer",
                                              onClick: ($event) => _ctx.modalCode = false
                                            }, null, 8, ["onClick"]),
                                            createVNode(_component_Button, {
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
                                    createVNode(_component_DialogPanel, { class: "max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" JSON du message ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("pre", { class: "my-4 max-h-96 overflow-auto bg-dark-700" }, [
                                          createVNode("code", null, toDisplayString(message), 1)
                                        ]),
                                        createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Fermer",
                                            onClick: ($event) => _ctx.modalCode = false
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_Button, {
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
                                      createVNode(_component_DialogPanel, { class: "max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" JSON du message ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("pre", { class: "my-4 max-h-96 overflow-auto bg-dark-700" }, [
                                            createVNode("code", null, toDisplayString(message), 1)
                                          ]),
                                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                            createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Fermer",
                                              onClick: ($event) => _ctx.modalCode = false
                                            }, null, 8, ["onClick"]),
                                            createVNode(_component_Button, {
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
                        createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => _ctx.modalCode = false,
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
                                    createVNode(_component_DialogPanel, { class: "max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" JSON du message ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("pre", { class: "my-4 max-h-96 overflow-auto bg-dark-700" }, [
                                          createVNode("code", null, toDisplayString(message), 1)
                                        ]),
                                        createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Fermer",
                                            onClick: ($event) => _ctx.modalCode = false
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_Button, {
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
                _push3(ssrRenderComponent(_component_Button, {
                  class: "mt-8",
                  color: "secondary",
                  text: "Sauvegarder ce message",
                  onClick: ($event) => $options.setIsOpen()
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_TransitionRoot, {
                  appear: "",
                  show: _ctx.isOpen,
                  as: "template"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => $options.setIsOpen(false),
                        class: "relative z-10"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId5}></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(`<div class="fixed inset-0 overflow-y-auto"${_scopeId4}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_TransitionChild, {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0 scale-95",
                              "enter-to": "opacity-100 scale-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100 scale-100",
                              "leave-to": "opacity-0 scale-95"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(` Voulez-vous vraiment sauvegarder ce message ? `);
                                            } else {
                                              return [
                                                createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        _push7(`<div class="mt-2"${_scopeId6}><p class="text-sm text-gray-500"${_scopeId6}> Vous pouvez choisir un nom pour la sauvegarde. `);
                                        _push7(ssrRenderComponent(_component_Input, {
                                          class: "mt-2",
                                          placeholder: "Nom de la sauvegarde...",
                                          modelValue: _ctx.savename,
                                          "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                        }, null, _parent7, _scopeId6));
                                        _push7(`</p></div><div class="mt-4 flex items-center justify-end gap-2"${_scopeId6}>`);
                                        _push7(ssrRenderComponent(_component_Button, {
                                          color: "transparent",
                                          text: "Annuler",
                                          onClick: $options.setIsOpen
                                        }, null, _parent7, _scopeId6));
                                        _push7(ssrRenderComponent(_component_Button, {
                                          color: "secondary",
                                          text: "Sauvegarder",
                                          onClick: ($event) => $options.save(message)
                                        }, null, _parent7, _scopeId6));
                                        _push7(`</div>`);
                                      } else {
                                        return [
                                          createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "mt-2" }, [
                                            createVNode("p", { class: "text-sm text-gray-500" }, [
                                              createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                              createVNode(_component_Input, {
                                                class: "mt-2",
                                                placeholder: "Nom de la sauvegarde...",
                                                modelValue: _ctx.savename,
                                                "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                            createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Annuler",
                                              onClick: $options.setIsOpen
                                            }, null, 8, ["onClick"]),
                                            createVNode(_component_Button, {
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
                                    createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "mt-2" }, [
                                          createVNode("p", { class: "text-sm text-gray-500" }, [
                                            createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                            createVNode(_component_Input, {
                                              class: "mt-2",
                                              placeholder: "Nom de la sauvegarde...",
                                              modelValue: _ctx.savename,
                                              "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Annuler",
                                            onClick: $options.setIsOpen
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_Button, {
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
                                        default: withCtx(() => [
                                          createVNode(_component_DialogTitle, {
                                            as: "h3",
                                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "mt-2" }, [
                                            createVNode("p", { class: "text-sm text-gray-500" }, [
                                              createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                              createVNode(_component_Input, {
                                                class: "mt-2",
                                                placeholder: "Nom de la sauvegarde...",
                                                modelValue: _ctx.savename,
                                                "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                            createVNode(_component_Button, {
                                              color: "transparent",
                                              text: "Annuler",
                                              onClick: $options.setIsOpen
                                            }, null, 8, ["onClick"]),
                                            createVNode(_component_Button, {
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
                        createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => $options.setIsOpen(false),
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
                                      default: withCtx(() => [
                                        createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "mt-2" }, [
                                          createVNode("p", { class: "text-sm text-gray-500" }, [
                                            createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                            createVNode(_component_Input, {
                                              class: "mt-2",
                                              placeholder: "Nom de la sauvegarde...",
                                              modelValue: _ctx.savename,
                                              "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Annuler",
                                            onClick: $options.setIsOpen
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_Button, {
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
                  createVNode("div", { class: "flex justify-center gap-4" }, [
                    createVNode(_component_Button, {
                      class: "mt-8",
                      color: "primary",
                      text: "Voir le JSON",
                      onClick: ($event) => _ctx.modalCode = true
                    }, null, 8, ["onClick"]),
                    createVNode(_component_TransitionRoot, {
                      appear: "",
                      show: _ctx.modalCode,
                      as: "template"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => _ctx.modalCode = false,
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
                                    createVNode(_component_DialogPanel, { class: "max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" JSON du message ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("pre", { class: "my-4 max-h-96 overflow-auto bg-dark-700" }, [
                                          createVNode("code", null, toDisplayString(message), 1)
                                        ]),
                                        createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Fermer",
                                            onClick: ($event) => _ctx.modalCode = false
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_Button, {
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
                    createVNode(_component_Button, {
                      class: "mt-8",
                      color: "secondary",
                      text: "Sauvegarder ce message",
                      onClick: ($event) => $options.setIsOpen()
                    }, null, 8, ["onClick"]),
                    createVNode(_component_TransitionRoot, {
                      appear: "",
                      show: _ctx.isOpen,
                      as: "template"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Dialog, {
                          as: "div",
                          onClose: ($event) => $options.setIsOpen(false),
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
                                      default: withCtx(() => [
                                        createVNode(_component_DialogTitle, {
                                          as: "h3",
                                          class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "mt-2" }, [
                                          createVNode("p", { class: "text-sm text-gray-500" }, [
                                            createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                            createVNode(_component_Input, {
                                              class: "mt-2",
                                              placeholder: "Nom de la sauvegarde...",
                                              modelValue: _ctx.savename,
                                              "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            color: "transparent",
                                            text: "Annuler",
                                            onClick: $options.setIsOpen
                                          }, null, 8, ["onClick"]),
                                          createVNode(_component_Button, {
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
            createVNode("div", null, [
              createVNode(_component_Menu, {
                as: "div",
                class: "relative inline-block text-left"
              }, {
                default: withCtx(() => [
                  createVNode(_component_MenuButton, { class: "flex cursor-pointer items-center gap-6 rounded-xl bg-white p-8 shadow-lg duration-200 ease-in hover:-translate-y-1 hover:shadow-xl dark:bg-dark-800 dark:hover:bg-dark-700" }, {
                    default: withCtx(() => [
                      createVNode(_component_UploadIcon, { class: "h-8 w-8" }),
                      createVNode("div", { class: "flex flex-col gap-2 text-left" }, [
                        createVNode("div", { class: "text-md font-semibold" }, " Charger un message "),
                        createVNode("div", { class: "text-sm" }, " Vous avez la possibilit\xE9 de sauvegarder votre message apr\xE8s l'avoir configur\xE9 afin de pouvoir le r\xE9cup\xE9rer plus tard ici. ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, {
                    "enter-active-class": "transition duration-100 ease-out",
                    "enter-from-class": "transform scale-95 opacity-0",
                    "enter-to-class": "transform scale-100 opacity-100",
                    "leave-active-class": "transition duration-75 ease-in",
                    "leave-from-class": "transform scale-100 opacity-100",
                    "leave-to-class": "transform scale-95 opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_MenuItems, { class: "absolute left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-800" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col gap-1 p-2" }, [
                            createVNode("div", null, [
                              createVNode(_component_Input, {
                                placeholder: "URL du message...",
                                onChange: $options.loadMessageFromUrl
                              }, null, 8, ["onChange"])
                            ]),
                            createVNode("div", { class: "w-full" }, [
                              createVNode("div", { class: "relative flex items-center" }, [
                                createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                                createVNode("span", { class: "mx-4 flex-shrink text-dark-700" }, "OU"),
                                createVNode("div", { class: "flex-grow border-t border-dark-700" })
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList($options.getSavedMessages(), (message2, index) => {
                              return openBlock(), createBlock(_component_MenuItem, { key: index }, {
                                default: withCtx(({ active }) => [
                                  createVNode("button", {
                                    class: [
                                      active ? "bg-blurple text-white" : "text-gray-900 dark:text-white",
                                      "group flex w-full items-center rounded-md px-2 py-2 text-sm"
                                    ],
                                    onClick: ($event) => $options.load(msgIndex, index)
                                  }, toDisplayString(index), 11, ["onClick"])
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
            createVNode("div", { class: "my-12 w-full" }, [
              createVNode("div", { class: "relative flex items-center" }, [
                createVNode("div", { class: "flex-grow border-t border-dark-700" }),
                createVNode("span", { class: "mx-4 flex-shrink text-dark-700" }, "OU"),
                createVNode("div", { class: "flex-grow border-t border-dark-700" })
              ])
            ]),
            createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".1",
              name: "Auteur du message",
              class: "pt-0"
            }, {
              default: withCtx(() => [
                createVNode(_component_Input, {
                  placeholder: "Nom de l'auteur...",
                  modelValue: message.username,
                  "onUpdate:modelValue": ($event) => message.username = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_Input, {
                  class: "mt-3",
                  placeholder: "URL de l'avatar de l'auteur...",
                  modelValue: message.avatar_url,
                  "onUpdate:modelValue": ($event) => message.avatar_url = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["step-id"]),
            createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".2",
              name: "Contenu du message"
            }, {
              default: withCtx(() => [
                createVNode(_component_Textarea, {
                  placeholder: "Contenu du message...",
                  modelValue: message.content,
                  "onUpdate:modelValue": ($event) => message.content = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["step-id"]),
            createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".3",
              name: "Fichiers attach\xE9s au message"
            }, {
              default: withCtx(() => {
                var _a;
                return [
                  createVNode("div", { class: "relative shadow-sm duration-200 ease-in hover:-translate-y-1 hover:shadow-xl" }, [
                    createVNode("div", { class: "flex w-full items-center gap-2 rounded-md border-2 border-dashed border-dark-400 bg-white p-6 text-sm font-semibold shadow-lg duration-200 ease-in focus:outline-none dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300" }, [
                      createVNode(_component_UploadIcon, { class: "h-8 w-8" }),
                      createVNode("span", { class: "ml-2" }, toDisplayString(((_a = message.files) == null ? void 0 : _a.length) > 0 ? `${message.files.length} fichiers attach\xE9s` : "Ajouter un fichier"), 1)
                    ]),
                    createVNode("input", {
                      class: "absolute top-0 left-0 h-full w-full cursor-pointer opacity-0",
                      type: "file",
                      multiple: "",
                      onInput: (e) => $options.uploadFile(e, message)
                    }, null, 40, ["onInput"])
                  ]),
                  message.files ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4 flex flex-wrap items-center gap-3"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(message.files, (file, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "flex"
                      }, [
                        createVNode("div", { class: "relative" }, [
                          file.type.startsWith("image") && file.type !== "image/svg+xml" ? (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                            key: 0,
                            class: "h-24 w-24 rounded-lg object-cover",
                            file
                          }, null, 8, ["file"])) : (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                            key: 1,
                            file
                          }, null, 8, ["file"])),
                          createVNode("div", {
                            class: "absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-[4px] bg-transparent bg-black opacity-0 duration-200 ease-in hover:opacity-75",
                            onClick: ($event) => message.files.splice(index, 1)
                          }, [
                            createVNode(_component_TrashIcon, { class: "h-12 w-12" })
                          ], 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ];
              }),
              _: 2
            }, 1032, ["step-id"]),
            createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".4",
              name: "Embeds"
            }, {
              default: withCtx(() => {
                var _a;
                return [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(message.embeds, (embed2, id) => {
                      return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                        class: "rounded-l-md rounded-r-lg border-l-4 bg-white shadow-xl dark:bg-dark-800",
                        key: id,
                        name: `Embed n\xB0${id + 1}`,
                        trash: () => message.embeds.splice(id, 1),
                        style: `border-color: ${embed2.color}`
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col gap-4" }, [
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Auteur"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Nom de l'auteur...",
                                  modelValue: embed2.author.name,
                                  "onUpdate:modelValue": ($event) => embed2.author.name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'avatar de l'auteur...",
                                  modelValue: embed2.author.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.author.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'auteur...",
                                  modelValue: embed2.author.url,
                                  "onUpdate:modelValue": ($event) => embed2.author.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Corps de l'embed"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Titre...",
                                  modelValue: embed2.title,
                                  "onUpdate:modelValue": ($event) => embed2.title = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Textarea, {
                                  class: "mt-3",
                                  placeholder: "Description...",
                                  modelValue: embed2.description,
                                  "onUpdate:modelValue": ($event) => embed2.description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL...",
                                  modelValue: embed2.url,
                                  "onUpdate:modelValue": ($event) => embed2.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex" }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ColorPicker, {
                                        pureColor: embed2.color,
                                        "onUpdate:pureColor": ($event) => embed2.color = $event,
                                        disableAlpha: true,
                                        shape: "circle",
                                        pickerType: "chrome",
                                        format: "hex"
                                      }, null, 8, ["pureColor", "onUpdate:pureColor"]),
                                      createVNode("div", { class: "grid grid-cols-10 gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.defaultColors, (color, index) => {
                                          return openBlock(), createBlock("div", {
                                            class: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md",
                                            key: index,
                                            style: `background: ${color};`,
                                            onClick: ($event) => embed2.color = color
                                          }, [
                                            embed2.color == color ? (openBlock(), createBlock(_component_CheckIcon, {
                                              key: 0,
                                              class: "h-6 w-6"
                                            })) : createCommentVNode("", true)
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
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Fields"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(embed2.fields, (field, id2) => {
                                    return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                                      key: id2,
                                      class: "mb-2 rounded-lg bg-gray-200 dark:bg-dark-600",
                                      name: `Field n\xB0${id2 + 1}`,
                                      trash: () => embed2.fields.splice(id2, 1)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Input, {
                                          placeholder: "Titre...",
                                          modelValue: field.name,
                                          "onUpdate:modelValue": ($event) => field.name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Input, {
                                          class: "mt-3 mb-3",
                                          placeholder: "Valeur...",
                                          modelValue: field.value,
                                          "onUpdate:modelValue": ($event) => field.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_Toggle, {
                                          modelValue: field.inline,
                                          "onUpdate:modelValue": ($event) => field.inline = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1032, ["name", "trash"]);
                                  }), 128)),
                                  createVNode(_component_Button, {
                                    class: "mx-auto mt-8 shadow-none",
                                    color: "blurple",
                                    text: `Ajouter un field (${(_a2 = embed2.fields) == null ? void 0 : _a2.length}/25)`,
                                    onClick: ($event) => embed2.fields.length < 25 && embed2.fields.push({})
                                  }, null, 8, ["text", "onClick"])
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Images"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Image de couverture...",
                                  modelValue: embed2.thumbnail.url,
                                  "onUpdate:modelValue": ($event) => embed2.thumbnail.url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "mt-3 flex gap-4" }, [
                                  createVNode(_component_Input, {
                                    class: "w-full",
                                    placeholder: "Image...",
                                    modelValue: embed2.image.url,
                                    "onUpdate:modelValue": ($event) => embed2.image.url = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_Button, {
                                    class: "text-xs font-normal",
                                    color: "transparent",
                                    text: "R\xE9duire la taille de l'embed",
                                    small: true,
                                    onClick: ($event) => embed2.image.url = "https://i.imgur.com/kdJejsd.png",
                                    style: { "padding": "0 !important" }
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                              class: "rounded-lg bg-gray-100 dark:bg-dark-700",
                              name: "Footer"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Input, {
                                  placeholder: "Texte...",
                                  modelValue: embed2.footer.text,
                                  "onUpdate:modelValue": ($event) => embed2.footer.text = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
                                  class: "mt-3",
                                  placeholder: "URL de l'icone...",
                                  modelValue: embed2.footer.icon_url,
                                  "onUpdate:modelValue": ($event) => embed2.footer.icon_url = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_Input, {
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
                  createVNode(_component_Button, {
                    class: "mx-auto mt-8",
                    color: "blurple",
                    text: `Ajouter un embed (${(_a = message.embeds) == null ? void 0 : _a.length}/10)`,
                    onClick: ($event) => message.embeds.length < 10 && $options.createEmptyEmbed(message)
                  }, null, 8, ["text", "onClick"])
                ];
              }),
              _: 2
            }, 1032, ["step-id"]),
            createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".5",
              name: "Boutons",
              class: "relative"
            }, {
              default: withCtx(() => {
                var _a, _b;
                return [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_a = message == null ? void 0 : message.components[0]) == null ? void 0 : _a.components, (button, id) => {
                        return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorCollapseCard, {
                          class: "rounded-l-md rounded-r-lg bg-white shadow-xl dark:bg-dark-700",
                          key: id,
                          name: `Bouton n\xB0${id + 1}`,
                          trash: () => {
                            var _a2, _b2;
                            return (_b2 = (_a2 = message == null ? void 0 : message.components[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.splice(_ctx.index, 1);
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              placeholder: "Texte du bouton...",
                              modelValue: button.label,
                              "onUpdate:modelValue": ($event) => button.label = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Input, {
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
                    createVNode(_component_Button, {
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
                  !_ctx.is_application_webhook ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute top-0 flex h-full w-full items-center justify-center bg-background bg-opacity-95 dark:bg-dark-950 dark:bg-opacity-95"
                  }, [
                    createVNode("div", { class: "text-md font-semibold" }, " Tu dois utiliser un webhook cr\xE9\xE9 par un bot pour ajouter des boutons. ")
                  ])) : createCommentVNode("", true)
                ];
              }),
              _: 2
            }, 1032, ["step-id"]),
            createVNode(_component_ToolsDiscordEmbedCreatorStep, {
              "step-id": msgIndex + 2 + ".6",
              name: "Finaliser le message"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "flex justify-center gap-4" }, [
                  createVNode(_component_Button, {
                    class: "mt-8",
                    color: "primary",
                    text: "Voir le JSON",
                    onClick: ($event) => _ctx.modalCode = true
                  }, null, 8, ["onClick"]),
                  createVNode(_component_TransitionRoot, {
                    appear: "",
                    show: _ctx.modalCode,
                    as: "template"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => _ctx.modalCode = false,
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
                                  createVNode(_component_DialogPanel, { class: "max-h-screen-padding w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_DialogTitle, {
                                        as: "h3",
                                        class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" JSON du message ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("pre", { class: "my-4 max-h-96 overflow-auto bg-dark-700" }, [
                                        createVNode("code", null, toDisplayString(message), 1)
                                      ]),
                                      createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                        createVNode(_component_Button, {
                                          color: "transparent",
                                          text: "Fermer",
                                          onClick: ($event) => _ctx.modalCode = false
                                        }, null, 8, ["onClick"]),
                                        createVNode(_component_Button, {
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
                  createVNode(_component_Button, {
                    class: "mt-8",
                    color: "secondary",
                    text: "Sauvegarder ce message",
                    onClick: ($event) => $options.setIsOpen()
                  }, null, 8, ["onClick"]),
                  createVNode(_component_TransitionRoot, {
                    appear: "",
                    show: _ctx.isOpen,
                    as: "template"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Dialog, {
                        as: "div",
                        onClose: ($event) => $options.setIsOpen(false),
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
                                    default: withCtx(() => [
                                      createVNode(_component_DialogTitle, {
                                        as: "h3",
                                        class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Voulez-vous vraiment sauvegarder ce message ? ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-2" }, [
                                        createVNode("p", { class: "text-sm text-gray-500" }, [
                                          createTextVNode(" Vous pouvez choisir un nom pour la sauvegarde. "),
                                          createVNode(_component_Input, {
                                            class: "mt-2",
                                            placeholder: "Nom de la sauvegarde...",
                                            modelValue: _ctx.savename,
                                            "onUpdate:modelValue": ($event) => _ctx.savename = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                                        createVNode(_component_Button, {
                                          color: "transparent",
                                          text: "Annuler",
                                          onClick: $options.setIsOpen
                                        }, null, 8, ["onClick"]),
                                        createVNode(_component_Button, {
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
  _push(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorStep, {
    "step-id": "finale",
    name: "Envoie tes messages !"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-8 flex items-center justify-center gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          color: "white",
          text: "Ajouter un message",
          onClick: $options.createEmptyMessage
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          color: "blurple",
          text: "Envoyer",
          onClick: $options.sendMessage
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-8 flex items-center justify-center gap-2" }, [
            createVNode(_component_Button, {
              color: "white",
              text: "Ajouter un message",
              onClick: $options.createEmptyMessage
            }, null, 8, ["onClick"]),
            createVNode(_component_Button, {
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
  _push(`</div><div><div class="relative hidden w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:flex lg:max-h-screen-padding lg:rounded-2xl"><!--[-->`);
  ssrRenderList(_ctx.messages, (message, index) => {
    _push(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeMessage, {
      key: index,
      data: message
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.mobile_preview_open,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TransitionChild, {
          as: "template",
          enter: "duration-300 ease-out",
          "enter-from": "opacity-0",
          "enter-to": "opacity-100",
          leave: "duration-200 ease-in",
          "leave-from": "opacity-100",
          "leave-to": "opacity-0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="fixed top-0 left-0 z-10 h-screen w-full lg:relative lg:block"${_scopeId2}><div class="relative flex h-screen w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:max-h-screen-padding lg:rounded-2xl"${_scopeId2}><div class="right-8 flex justify-end lg:hidden"${_scopeId2}><button class="group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 opacity-50 focus:bg-white focus:text-white dark:border-white"${_scopeId2}><svg class="h-5 w-5 fill-black group-focus:fill-black dark:fill-white" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"${_scopeId2}></path></svg></button></div><!--[-->`);
              ssrRenderList(_ctx.messages, (message, index) => {
                _push3(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeMessage, {
                  key: index,
                  data: message
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div></div>`);
            } else {
              return [
                createVNode("div", { class: "fixed top-0 left-0 z-10 h-screen w-full lg:relative lg:block" }, [
                  createVNode("div", { class: "relative flex h-screen w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:max-h-screen-padding lg:rounded-2xl" }, [
                    createVNode("div", { class: "right-8 flex justify-end lg:hidden" }, [
                      createVNode("button", {
                        class: "group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 opacity-50 focus:bg-white focus:text-white dark:border-white",
                        onClick: $options.toggleMobilePreview
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5 fill-black group-focus:fill-black dark:fill-white",
                          viewBox: "0 0 10 10",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.messages, (message, index) => {
                      return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorFakeMessage, {
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
              createVNode("div", { class: "fixed top-0 left-0 z-10 h-screen w-full lg:relative lg:block" }, [
                createVNode("div", { class: "relative flex h-screen w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:max-h-screen-padding lg:rounded-2xl" }, [
                  createVNode("div", { class: "right-8 flex justify-end lg:hidden" }, [
                    createVNode("button", {
                      class: "group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 opacity-50 focus:bg-white focus:text-white dark:border-white",
                      onClick: $options.toggleMobilePreview
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-5 w-5 fill-black group-focus:fill-black dark:fill-white",
                        viewBox: "0 0 10 10",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.messages, (message, index) => {
                    return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorFakeMessage, {
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
  _push(`<div class="fixed bottom-8 right-12 flex h-24 w-24 items-center justify-center rounded-full bg-dark-800 duration-200 ease-in hover:scale-125 hover:bg-dark-700 lg:hidden">`);
  _push(ssrRenderComponent(_component_EyeIcon, { class: "h-12 w-12" }, null, _parent));
  _push(`</div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools/discord/embed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const embed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  embed as default
};
