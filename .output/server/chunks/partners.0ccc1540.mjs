import { _ as _export_sfc, u as useHead, v as vue_cjs_prod, d as __nuxt_component_1$1, f as __nuxt_component_0$6, g as __nuxt_component_4$2 } from './server.mjs';
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
  const _component_Button = __nuxt_component_1$1;
  const _component_NuxtLink = __nuxt_component_0$6;
  const _component_Input = __nuxt_component_4$2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="bg-primary-500 border-b-8 border-primary-400 py-48"><h1 class="font-extrabold text-5xl text-white text-center">Partenaires</h1><h2 class="text-3xl max-w-2xl text-center mx-auto mt-6 leading-relaxed text-white">D\xE9couvre nos partenaires et d\xE9couvre comment en faire partie</h2>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "mx-auto mt-6",
    text: "Devenir un partenaire"
  }, null, _parent));
  _push(`</header><section class="container mx-auto max-w-3xl py-32"><h3 class="mx-auto text-center font-semibold text-3xl mb-16">Nos partenaires</h3><div class="grid grid-cols-2 lg:grid-cols-3 gap-24"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.partners, (partner, id) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
      to: partner.link,
      target: "blank",
      class: "mx-auto text-center",
      key: id
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", partner.icon)} class="mx-auto aspect-auto"${serverRenderer.exports.ssrRenderAttr("alt", partner.name)}${_scopeId}>`);
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
  _push(`<!--]--></div></section><section class="bg-primary-500 pb-48 mt-24 pt-96 relative px-2"><div class="container mx-auto max-w-xl"><h4 class="mx-auto text-center font-semibold text-3xl mb-16">Devenir partenaire</h4>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Input, {
    placeholder: "Bient\xF4t disponible...",
    white: true
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "mx-auto mt-24",
    text: "Envoyer ma demande",
    color: "disabled"
  }, null, _parent));
  _push(`</div><div class="container mx-auto max-w-xl bg-primary-400 absolute -top-24 left-1/2 -translate-x-1/2 p-8 rounded-lg"><div class="text-xl font-medium">Les avantages \xE0 collaborer avec nous?</div><div class="text-md font-medium mt-6">Notre cr\xE9ativit\xE9</div><p class="text-sm mt-2">UMaestro est un groupe qui anticipe chacun de ses mouvements, et pr\xE9voit tout une suite de projets pour se construire un avenir</p><div class="text-md font-medium mt-8">Votre Visibilit\xE9</div><p class="text-sm mt-2">Nous vous proposons de la visibilit\xE9 sur notre site et Discord</p><div class="text-md font-medium mt-8">Des Avantages</div><p class="text-sm mt-2">Vous pouvez obtenir des avantages concernant nos projets.</p></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partners = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { partners as default };
//# sourceMappingURL=partners.0ccc1540.mjs.map
