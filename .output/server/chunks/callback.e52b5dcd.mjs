import { _ as _export_sfc, e as axios, v as vue_cjs_prod } from './server.mjs';
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
  async mounted() {
    const route = this.$route;
    const code = route.query.code;
    const { data } = await axios.get(`auth/oauth2/discord/callback?code=${code}`);
    localStorage.setItem("access_token", data.token.token);
    document.cookie = "access_token=Bearer " + data.token.token + "; expires=" + data.token.expires_at;
    localStorage.setItem("user_guilds", JSON.stringify(data.guilds));
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-primary-500 text-white text-3xl h-screen text-center flex justify-center items-center font-bold" }, _attrs))}> Chargement en cours... </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authentification/callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const callback = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { callback as default };
//# sourceMappingURL=callback.e52b5dcd.mjs.map
