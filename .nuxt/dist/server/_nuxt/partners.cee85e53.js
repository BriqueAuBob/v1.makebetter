import { _ as _export_sfc, h as useHead, v as vue_cjs_prod, c as __nuxt_component_1, d as __nuxt_component_0, b as __nuxt_component_4 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "@vue/server-renderer";
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
const _sfc_main = {
  setup() {
    useHead({
      title: "Partenaires"
    });
  },
  data: () => ({
    partners: [
      {
        name: "Trouve Ton Staff",
        link: "https://discord.gg/gcWzeg7kQP",
        icon: "https://cdn.discordapp.com/attachments/932195461668950036/996444263955050516/App_Icon_3.png"
      },
      {
        name: "Discord Analytics",
        link: "https://discordanalytics.fr/",
        icon: "https://media.discordapp.net/attachments/717855648997441576/994001523065487360/imageonline-co-roundcorner_3.png?width=676&height=676"
      }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Input = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="border-b-8 border-primary-600 bg-gradient-to-br from-primary-500 to-primary-700 py-48"><h1 class="text-center text-5xl font-extrabold text-white"> Partenaires </h1><h2 class="mx-auto mt-6 max-w-2xl text-center text-3xl leading-relaxed text-white"> D\xE9couvre nos partenaires et d\xE9couvre comment en faire partie </h2>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "mx-auto mt-6",
    text: "Devenir un partenaire"
  }, null, _parent));
  _push(`</header><section class="container mx-auto max-w-3xl py-32"><h3 class="mx-auto mb-16 text-center text-3xl font-semibold"> Nos partenaires </h3><div class="grid grid-cols-2 gap-24 lg:grid-cols-3"><!--[-->`);
  ssrRenderList(_ctx.partners, (partner, id) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: partner.link,
      target: "blank",
      class: "mx-auto text-center",
      key: id
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", partner.icon)} class="mx-auto aspect-auto"${ssrRenderAttr("alt", partner.name)}${_scopeId}>`);
        } else {
          return [
            vue_cjs_prod.createVNode("img", {
              src: partner.icon,
              class: "mx-auto aspect-auto",
              alt: partner.name
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></section><section class="container relative mx-auto mt-24 mb-24 rounded-2xl bg-primary-500 px-2 pb-48 pt-96 text-white shadow-md"><div class="container mx-auto max-w-xl"><h4 class="mx-auto mb-16 text-center text-3xl font-semibold"> Devenir partenaire </h4>`);
  _push(ssrRenderComponent(_component_Input, {
    placeholder: "Bient\xF4t disponible...",
    white: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_Button, {
    class: "mx-auto mt-24",
    text: "Envoyer ma demande",
    color: "disabled"
  }, null, _parent));
  _push(`</div><div class="container absolute -top-24 left-1/2 mx-auto max-w-xl -translate-x-1/2 rounded-lg bg-primary-400 p-8"><div class="text-xl font-medium"> Les avantages \xE0 collaborer avec nous? </div><div class="text-md mt-6 font-medium">Notre cr\xE9ativit\xE9</div><p class="mt-2 text-sm"> UMaestro est un groupe qui anticipe chacun de ses mouvements, et pr\xE9voit tout une suite de projets pour se construire un avenir </p><div class="text-md mt-8 font-medium">Votre Visibilit\xE9</div><p class="mt-2 text-sm"> Nous vous proposons de la visibilit\xE9 sur notre site et Discord </p><div class="text-md mt-8 font-medium">Des Avantages</div><p class="mt-2 text-sm"> Vous pouvez obtenir des avantages concernant nos projets. </p></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partners = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  partners as default
};
