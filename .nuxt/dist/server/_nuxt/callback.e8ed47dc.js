import { _ as _export_sfc, c as client, n as navigateTo } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import "vue-router";
import "destr";
import { ssrRenderAttrs } from "vue/server-renderer";
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
import "@headlessui/vue";
import "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const _sfc_main = {
  async mounted() {
    const route = this.$route;
    const code = route.query.code;
    const { data } = await client.get(
      `auth/oauth2/discord/callback?code=${code}`
    );
    localStorage.setItem("access_token", data.token.token);
    document.cookie = "access_token=Bearer " + data.token.token + "; expires=" + data.token.expires_at;
    localStorage.setItem("user_guilds", JSON.stringify(data.guilds));
    this.$toast.show({
      message: `Hey ${data.user.username}!`,
      timeout: 6,
      icon: false
    });
    return navigateTo("/");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen items-center justify-center bg-primary-500 text-center text-3xl font-bold text-white" }, _attrs))}> Chargement en cours... </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authentification/callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const callback = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  callback as default
};
