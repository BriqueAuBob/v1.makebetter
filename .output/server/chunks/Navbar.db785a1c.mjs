import { _ as _export_sfc, u as useAuthStore, S as storeToRefs, e as __nuxt_component_0$5, d as __nuxt_component_1$3 } from './server.mjs';
import { MoonIcon, SunIcon } from '@heroicons/vue/outline/esm/index.js';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.9a76964f.mjs';

const _imports_1 = "" + globalThis.__publicAssetsURL("icons/bars.svg");
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
      },
      {
        name: "Suggestions",
        href: "/suggestions"
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
    useAuthStore().hasToken();
    await useAuthStore().getUser;
    const store = storeToRefs(useAuthStore());
    this.authenticated = store.isAuthenticated;
    this.user = store.user;
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
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_MoonIcon = resolveComponent("MoonIcon");
  const _component_SunIcon = resolveComponent("SunIcon");
  const _component_Button = __nuxt_component_1$3;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "absolute top-0 z-10 w-full" }, _attrs))} data-v-0b6d67e7><div class="container mx-auto flex items-center justify-between py-6 px-4 text-white" data-v-0b6d67e7><div class="flex grow basis-0" data-v-0b6d67e7>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-4 font-bold tracking-widest"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-10"${ssrRenderAttr("src", _imports_0)} data-v-0b6d67e7${_scopeId}> umaestro.fr `);
      } else {
        return [
          createVNode("img", {
            class: "h-10",
            src: _imports_0
          }),
          createTextVNode(" umaestro.fr ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="hidden items-center gap-12 lg:flex" data-v-0b6d67e7><!--[-->`);
  ssrRenderList(_ctx.navigation, (link, index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: index,
      to: { path: link.href, hash: link.hash },
      class: "text-gray-400"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="duration-300 ease-in hover:text-white" data-v-0b6d67e7${_scopeId}>${ssrInterpolate(link.name)}</li>`);
        } else {
          return [
            createVNode("li", { class: "duration-300 ease-in hover:text-white" }, toDisplayString(link.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></ul><div class="hidden grow basis-0 items-center justify-end gap-6 lg:flex" data-v-0b6d67e7><span class="cursor-pointer"${ssrRenderAttr("small", true)} data-v-0b6d67e7>`);
  if (_ctx.$colorMode.value === "light") {
    _push(ssrRenderComponent(_component_MoonIcon, { class: "h-8 w-8" }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_SunIcon, { class: "h-8 w-8" }, null, _parent));
  }
  _push(`</span>`);
  if (!_ctx.authenticated) {
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/authentification" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Button, {
            class: "bg-white bg-opacity-75 text-black hover:bg-white hover:bg-opacity-100",
            icon: "user",
            text: "Acc\xE9der \xE0 mon compte",
            small: true
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Button, {
              class: "bg-white bg-opacity-75 text-black hover:bg-white hover:bg-opacity-100",
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
    _push(`<div class="flex rounded-xl border-2 border-white px-3 py-2 text-white duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl" data-v-0b6d67e7>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      activeClass: "profile",
      to: "/account",
      class: "text-md flex items-center gap-2 font-medium"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b, _c, _d;
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", (_a = _ctx.user) == null ? void 0 : _a.avatar)} class="h-6 w-6 rounded-full" data-v-0b6d67e7${_scopeId}> ${ssrInterpolate((_b = _ctx.user) == null ? void 0 : _b.username)}`);
        } else {
          return [
            createVNode("img", {
              src: (_c = _ctx.user) == null ? void 0 : _c.avatar,
              class: "h-6 w-6 rounded-full"
            }, null, 8, ["src"]),
            createTextVNode(" " + toDisplayString((_d = _ctx.user) == null ? void 0 : _d.username), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  }
  _push(`</div><button class="px-4 py-2 lg:hidden" data-v-0b6d67e7><img${ssrRenderAttr("src", _imports_1)} class="h-8 w-8" data-v-0b6d67e7></button><div class="${ssrRenderClass([
    !_ctx.menuOpen && "-z-1 opacity-0",
    "absolute top-0 left-0 flex h-screen w-full flex-col p-8 duration-300 ease-in"
  ])}" data-v-0b6d67e7><div class="flex justify-between" data-v-0b6d67e7>`);
  if (!_ctx.authenticated) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/authentification",
      onClick: $options.toggleMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Button, {
            class: "bg-white text-black hover:bg-white",
            icon: "user",
            text: "Acc\xE9der \xE0 mon compte",
            small: true
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Button, {
              class: "bg-white text-black hover:bg-white",
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
      class: "flex items-center gap-2 rounded-xl border-2 border-dark-700 px-3 py-2 text-xl font-medium",
      onClick: $options.toggleMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b, _c, _d;
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", (_a = _ctx.user) == null ? void 0 : _a.avatar)} class="h-8 w-8 rounded-full" data-v-0b6d67e7${_scopeId}> ${ssrInterpolate((_b = _ctx.user) == null ? void 0 : _b.username)}`);
        } else {
          return [
            createVNode("img", {
              src: (_c = _ctx.user) == null ? void 0 : _c.avatar,
              class: "h-8 w-8 rounded-full"
            }, null, 8, ["src"]),
            createTextVNode(" " + toDisplayString((_d = _ctx.user) == null ? void 0 : _d.username), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`<button class="group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 focus:bg-dark-700 focus:text-white dark:border-dark-700" data-v-0b6d67e7><svg class="h-5 w-5 fill-black group-focus:fill-white dark:fill-dark-700" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" data-v-0b6d67e7><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z" data-v-0b6d67e7></path></svg></button></div><div class="mt-8 w-2/3 self-end" data-v-0b6d67e7><ul data-v-0b6d67e7><!--[-->`);
  ssrRenderList(_ctx.navigation, (link, index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: index,
      to: { path: link.href, hash: link.hash },
      class: "text-gray-400 dark:text-gray-500",
      onClick: $options.toggleMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li class="py-4 text-xl font-medium duration-300 ease-in hover:text-gray-900 dark:hover:text-dark-100" data-v-0b6d67e7${_scopeId}>${ssrInterpolate(link.name)}</li>`);
        } else {
          return [
            createVNode("li", { class: "py-4 text-xl font-medium duration-300 ease-in hover:text-gray-900 dark:hover:text-dark-100" }, toDisplayString(link.name), 1)
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0b6d67e7"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Navbar.db785a1c.mjs.map
