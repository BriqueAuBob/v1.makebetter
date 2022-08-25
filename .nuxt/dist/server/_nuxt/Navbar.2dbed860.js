import { v as vue_cjs_prod, _ as _export_sfc, u as useAuthStore, d as __nuxt_component_0$1, c as __nuxt_component_1 } from "../server.mjs";
import { MoonIcon, SunIcon } from "@heroicons/vue/outline/esm/index.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from "@vue/server-renderer";
import { _ as _imports_0 } from "./logo.d2eabc24.js";
const _imports_1 = "" + globalThis.__publicAssetsURL("icons/bars.svg");
const Navbar_vue_vue_type_style_index_0_scoped_9e0851a8_lang = "";
const _sfc_main = {
  components: {
    MoonIcon,
    SunIcon
  },
  data: () => ({
    menuOpen: false,
    height: 70,
    navigation: [
      {
        name: "Partenaires",
        href: "/partners"
      },
      {
        name: "Recrutements",
        href: "/hire"
      },
      {
        name: "Outils",
        href: "/",
        hash: "#tools"
      }
    ],
    authenticated: false,
    user: {}
  }),
  async mounted() {
    const content = document.getElementById("content");
    content.classList.add("ease-in", "duration-300");
    content.style.marginTop = "0vh";
    const nuxt = document.getElementById("__nuxt");
    nuxt.appendChild(this.$refs.menu);
    const store = useAuthStore();
    this.authenticated = store.hasToken();
    this.user = await store.getUser;
  },
  methods: {
    toggleMobileMenu() {
      document.body.classList.toggle("overflow-hidden");
      const content = document.getElementById("content");
      content.classList.toggle("-translate-x-3/4");
      content.classList.toggle("rounded-3xl");
      content.style.maxHeight = content.style.maxHeight === this.height + "vh" ? "100vh" : this.height + "vh";
      content.style.marginTop = content.style.marginTop === (100 - this.height) / 2 + "vh" ? "0vh" : (100 - this.height) / 2 + "vh";
      content.classList.add("overflow-hidden");
      this.menuOpen = !this.menuOpen;
      if (!this.menuOpen) {
        setTimeout(() => {
          content.classList.remove("overflow-hidden");
        }, 300);
      }
    },
    $t() {
      return "navigation";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_MoonIcon = vue_cjs_prod.resolveComponent("MoonIcon");
  const _component_SunIcon = vue_cjs_prod.resolveComponent("SunIcon");
  const _component_Button = __nuxt_component_1;
  _push(`<nav${ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "absolute top-0 w-full z-10" }, _attrs))} data-v-9e0851a8><div class="container mx-auto flex items-center justify-between py-6 text-white px-4" data-v-9e0851a8><div class="flex basis-0 grow" data-v-9e0851a8>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex gap-4 items-center font-bold tracking-widest"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-10"${ssrRenderAttr("src", _imports_0)} data-v-9e0851a8${_scopeId}> umaestro.fr `);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            class: "h-10",
            src: _imports_0
          }),
          vue_cjs_prod.createTextVNode(" umaestro.fr ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="gap-12 items-center hidden lg:flex" data-v-9e0851a8><!--[-->`);
  ssrRenderList(_ctx.navigation, (link, index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: index,
      to: { path: link.href, hash: link.hash },
      class: "text-gray-400"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="ease-in duration-300 hover:text-white" data-v-9e0851a8${_scopeId}>${ssrInterpolate(link.name)}</li>`);
        } else {
          return [
            vue_cjs_prod.createVNode("li", { class: "ease-in duration-300 hover:text-white" }, vue_cjs_prod.toDisplayString(link.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></ul><div class="gap-6 items-center hidden lg:flex basis-0 grow justify-end" data-v-9e0851a8><span class="cursor-pointer"${ssrRenderAttr("small", true)} data-v-9e0851a8>`);
  if (_ctx.$colorMode.value === "light") {
    _push(ssrRenderComponent(_component_MoonIcon, { class: "w-8 h-8" }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_SunIcon, { class: "w-8 h-8" }, null, _parent));
  }
  _push(`</span>`);
  if (!_ctx.authenticated) {
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/authentification" }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Button, {
            class: "bg-white bg-opacity-75 hover:bg-opacity-100 hover:bg-white text-black",
            icon: "user",
            text: "Acc\xE9der \xE0 mon compte",
            small: true
          }, null, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_Button, {
              class: "bg-white bg-opacity-75 hover:bg-opacity-100 hover:bg-white text-black",
              icon: "user",
              text: "Acc\xE9der \xE0 mon compte",
              small: true
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<div class="flex rounded-xl border-2 border-white px-3 py-2 ease-in-out duration-300 text-white hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" data-v-9e0851a8>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      activeClass: "profile",
      to: "/account",
      class: "flex items-center font-medium text-md gap-2"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b, _c, _d;
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", (_a = _ctx.user) == null ? void 0 : _a.avatar)} class="w-6 h-6 rounded-full" data-v-9e0851a8${_scopeId}> ${ssrInterpolate((_b = _ctx.user) == null ? void 0 : _b.username)}`);
        } else {
          return [
            vue_cjs_prod.createVNode("img", {
              src: (_c = _ctx.user) == null ? void 0 : _c.avatar,
              class: "w-6 h-6 rounded-full"
            }, null, 8, ["src"]),
            vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString((_d = _ctx.user) == null ? void 0 : _d.username), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  }
  _push(`</div><button class="lg:hidden px-4 py-2" data-v-9e0851a8><img${ssrRenderAttr("src", _imports_1)} class="w-8 h-8" data-v-9e0851a8></button><div class="${ssrRenderClass([!_ctx.menuOpen && "-z-1 opacity-0", "ease-in duration-300 absolute top-0 left-0 w-full h-screen p-8 flex flex-col"])}" data-v-9e0851a8><div class="flex justify-between" data-v-9e0851a8>`);
  if (!_ctx.authenticated) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/authentification",
      onClick: $options.toggleMobileMenu
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Button, {
            class: "bg-white hover:bg-white text-black",
            icon: "user",
            text: "Acc\xE9der \xE0 mon compte",
            small: true
          }, null, _parent2, _scopeId));
        } else {
          return [
            vue_cjs_prod.createVNode(_component_Button, {
              class: "bg-white hover:bg-white text-black",
              icon: "user",
              text: "Acc\xE9der \xE0 mon compte",
              small: true
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/account",
      class: "flex items-center font-medium text-xl gap-2 px-3 py-2 border-2 border-dark-700 rounded-xl"
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b, _c, _d;
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", (_a = _ctx.user) == null ? void 0 : _a.avatar)} class="w-8 h-8 rounded-full" data-v-9e0851a8${_scopeId}> ${ssrInterpolate((_b = _ctx.user) == null ? void 0 : _b.username)}`);
        } else {
          return [
            vue_cjs_prod.createVNode("img", {
              src: (_c = _ctx.user) == null ? void 0 : _c.avatar,
              class: "w-8 h-8 rounded-full"
            }, null, 8, ["src"]),
            vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString((_d = _ctx.user) == null ? void 0 : _d.username), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`<button class="rounded-full border-2 border-dark-700 dark:border-dark-700 p-4 focus:bg-dark-700 focus:text-white flex items-center justify-center group" data-v-9e0851a8><svg class="fill-black dark:fill-dark-700 group-focus:fill-white w-5 h-5" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" data-v-9e0851a8><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z" data-v-9e0851a8></path></svg></button></div><div class="w-2/3 self-end mt-8" data-v-9e0851a8><ul data-v-9e0851a8><!--[-->`);
  ssrRenderList(_ctx.navigation, (link, index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: index,
      to: { path: link.href, hash: link.hash },
      class: "text-gray-400 dark:text-gray-500",
      onClick: $options.toggleMobileMenu
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="text-xl font-medium py-4 ease-in duration-300 hover:text-gray-900 dark:hover:text-dark-100" data-v-9e0851a8${_scopeId}>${ssrInterpolate(link.name)}</li>`);
        } else {
          return [
            vue_cjs_prod.createVNode("li", { class: "text-xl font-medium py-4 ease-in duration-300 hover:text-gray-900 dark:hover:text-dark-100" }, vue_cjs_prod.toDisplayString(link.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></ul></div></div></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9e0851a8"]]);
export {
  __nuxt_component_0 as _
};
