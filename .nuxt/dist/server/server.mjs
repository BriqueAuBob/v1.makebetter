import { getCurrentInstance, reactive, toRef, isRef, inject, defineComponent, computed, h, resolveComponent, shallowRef, unref, watchEffect, ref, markRaw, provide, Suspense, Transition, useSSRContext, mergeProps, effectScope, toRaw, watch, isReactive, nextTick, onUnmounted, toRefs, withCtx, createVNode, createElementBlock, resolveDynamicComponent, createTextVNode, openBlock, createBlock, Fragment as Fragment$1, renderList, toDisplayString, createCommentVNode, defineAsyncComponent, onErrorCaptured, createApp } from "vue";
import { $fetch as $fetch$1 } from "ohmyfetch";
import { joinURL, hasProtocol, parseURL, isEqual } from "ufo";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { createHooks } from "hookable";
import { getContext, executeAsync } from "unctx";
import { RouterView, createMemoryHistory, createRouter } from "vue-router";
import "destr";
import { createError as createError$1, sendRedirect } from "h3";
import defu, { defuFn } from "defu";
import { isFunction } from "@vue/shared";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrRenderSuspense } from "vue/server-renderer";
import axios from "axios";
import { setupDevtoolsPlugin } from "@vue/devtools-api";
import * as Icons from "@heroicons/vue/outline/esm/index.js";
import { LightBulbIcon, ChevronDownIcon, TrashIcon } from "@heroicons/vue/outline/esm/index.js";
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, Switch } from "@headlessui/vue";
import pkg from "discord-markdown";
import "vue3-colorpicker";
import "save-svg-as-png";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !options.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  if (!isExternal && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  if (isExternal) {
    if (options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$5 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  const resolvedMeta = isFunction(meta2) ? computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const tailwind = "";
const style = "";
const aos = "";
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script2) => ({
    script: [script2]
  }))
});
const NoScript = defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style2 = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style2.children = textContent;
    }
    return {
      style: [style2]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const appHead = { "meta": [{ "property": "og:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "og:type", "content": "product" }, { "property": "og:description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "property": "twitter:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "twitter:description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "property": "og:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "name": "twitter:card", "content": "summary" }], "link": [{ "rel": "icon", "type": "image/png", "href": "/favicon-32x32.png" }], "style": [], "script": [], "noscript": [], "titleTemplate": "UMaestro - %s", "bodyAttrs": { "class": "bg-background dark:bg-dark-950 dark:text-white transition ease-in duration-100" }, "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2 = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_a = routeProps.route.meta.pageTransition) != null ? _a : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_b = routeProps.route.meta.keepalive) != null ? _b : appKeepalive,
              isNested && nuxtApp.isHydrating ? h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) : h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$v = {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    big: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><input${ssrRenderAttr("placeholder", $props.placeholder)} type="text" class="${ssrRenderClass([[
    $props.big ? "text-md px-6 py-5" : "px-6 py-4 text-sm",
    $props.white ? "bg-white text-black" : "border-dark-800 bg-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-900",
    $props.classes
  ], "w-full rounded-lg border text-sm focus:outline-none"])}"${ssrRenderAttr("value", $props.modelValue)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __nuxt_component_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$u = {
  data: () => ({
    btnColors: {
      transparent: "bg-transparent shadow-none",
      primary: "bg-primary-500 hover:bg-primary-400 text-white",
      secondary: "bg-secondary-500 hover:bg-secondary-600 text-black",
      white: "bg-white hover:bg-gray-100 text-black",
      blurple: "bg-blurple text-white",
      yellow: "bg-yellow-500 text-white hover:bg-white hover:text-black",
      red: "bg-red-500 text-white",
      disabled: "bg-gray-200 text-black opacity-50",
      theme: "bg-white hover:bg-gray-100 dark:bg-dark-900 dark:hover:bg-dark-800"
    }
  }),
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    },
    centerText: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colors() {
      return this.disabled ? this.btnColors["disabled"] : this.btnColors[this.color];
    }
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["flex items-center rounded-md text-base font-medium shadow-xl duration-300 ease-in", [
      $options.colors,
      $props.small ? "px-5 py-3" : "px-6 py-4",
      $props.centerText && "justify-center"
    ]]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "icon_left", {}, null, _push, _parent);
  _push(`<span class="${ssrRenderClass(["whitespace-pre-line", $props.centerText ? "text-center" : "text-left"])}">${ssrInterpolate($props.text)}</span>`);
  ssrRenderSlot(_ctx.$slots, "icon_right", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$r]]);
const client = axios.create({
  baseURL: "https://api.umaestro.fr/"
});
client.interceptors.request.use(function(config) {
  return config;
});
client.interceptors.response.use(
  async function(value) {
    return value;
  },
  function(error) {
  }
);
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
  * pinia v2.0.20
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = false;
const USE_DEVTOOLS = (process.env.NODE_ENV !== "production" || false) && !(process.env.NODE_ENV === "test") && IS_CLIENT;
const saveAs = () => {
};
function toastMessage(message, type) {
  const piniaMessage = "\u{1F34D} " + message;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o) {
  return "_a" in o && "install" in o;
}
function checkClipboardAccess() {
  if (!("clipboard" in navigator)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    pinia.state.value = JSON.parse(await navigator.clipboard.readText());
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve(null);
        const file = files.item(0);
        if (!file)
          return resolve(null);
        return resolve({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open = await getFileOpener();
    const result = await open();
    if (!result)
      return;
    const { text, file } = result;
    pinia.state.value = JSON.parse(text);
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "\u{1F34D} Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
  return isPinia(store) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store.$id,
    label: store.$id
  };
}
function formatStoreForInspectorState(store) {
  if (isPinia(store)) {
    const storeNames = Array.from(store._s.keys());
    const storeMap = store._s;
    const state2 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store2 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store2._getters.reduce((getters, key) => {
            getters[key] = store2[key];
            return getters;
          }, {})
        };
      })
    };
    return state2;
  }
  const state = {
    state: Object.keys(store.$state).map((key) => ({
      editable: true,
      key,
      value: store.$state[key]
    }))
  };
  if (store._getters && store._getters.length) {
    state.getters = store._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store[getterName]
    }));
  }
  if (store._customProperties.size) {
    state.customProperties = Array.from(store._customProperties).map((key) => ({
      editable: true,
      key,
      value: store[key]
    }));
  }
  return state;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data, event) => {
      data.keys.push(event.key);
      data.operations.push(event.type);
      data.oldValue[event.key] = event.oldValue;
      data.newValue[event.key] = event.newValue;
      return data;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const getStoreType = (id) => "\u{1F34D} " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia \u{1F34D}`,
      color: 15064968
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (nodeId) => {
            const store = pinia._s.get(nodeId);
            if (!store) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (!store._isOptionsAPI) {
              toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
            } else {
              store.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store) => {
          payload.instanceData.state.push({
            type: getStoreType(store.$id),
            key: "state",
            editable: true,
            value: store._isOptionsAPI ? {
              _custom: {
                value: toRaw(store.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store.$reset()
                  }
                ]
              }
            } : Object.keys(store.$state).reduce((state, key) => {
              state[key] = store.$state[key];
              return state;
            }, {})
          });
          if (store._getters && store._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "getters",
              editable: false,
              value: store._getters.reduce((getters, key) => {
                try {
                  getters[key] = store[key];
                } catch (error) {
                  getters[key] = error;
                }
                return getters;
              }, {})
            });
          }
        });
      }
    });
    api.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api.on.editComponentState((payload) => {
      if (payload.type.startsWith("\u{1F34D}")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store = pinia._s.get(storeId);
        if (!store) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
    }
  }, (api) => {
    const now = typeof api.now === "function" ? api.now.bind(api) : Date.now;
    store.$onAction(({ after, onError, name, args }) => {
      const groupId = runningActionId++;
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now(),
          title: "\u{1F6EB} " + name,
          subtitle: "start",
          data: {
            store: formatDisplay(store.$id),
            action: formatDisplay(name),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now(),
            title: "\u{1F6EC} " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now(),
            logType: "error",
            title: "\u{1F4A5} " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store._customProperties.forEach((name) => {
      watch(() => unref(store[name]), (newValue, oldValue) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now(),
              title: "Change",
              subtitle: name,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store.$subscribe(({ events, type }, state) => {
      api.notifyComponentUpdate();
      api.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now(),
        title: formatMutationType(type),
        data: {
          store: formatDisplay(store.$id),
          ...formatEventData(events)
        },
        groupId: activeAction
      };
      activeAction = void 0;
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "\u2935\uFE0F";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "\u{1F9E9}";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate = store._hotUpdate;
    store._hotUpdate = markRaw((newStore) => {
      hotUpdate(newStore);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now(),
          title: "\u{1F525} " + store.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store;
    store.$dispose = () => {
      $dispose();
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store \u{1F5D1}`);
    };
    api.notifyComponentUpdate();
    api.sendInspectorTree(INSPECTOR_ID);
    api.sendInspectorState(INSPECTOR_ID);
    api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed \u{1F195}`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store, actionNames) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = new Proxy(store, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      });
      return actions[actionName].apply(trackedStore, arguments);
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  if (options.state) {
    store._isOptionsAPI = true;
  }
  if (typeof options.state === "function") {
    patchActionForGrouping(
      store,
      Object.keys(options.actions)
    );
    const originalHotUpdate = store._hotUpdate;
    toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
    };
  }
  addStoreToDevtools(
    app,
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(app, pinia);
        }
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = process.env.NODE_ENV !== "production" && hot ? toRefs(ref(state ? state() : {}).value) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (process.env.NODE_ENV !== "production" && name in localState) {
        console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (process.env.NODE_ENV !== "production" && !pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
  };
  if (process.env.NODE_ENV !== "production" && !isVue2) {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!(process.env.NODE_ENV !== "production") || !hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (process.env.NODE_ENV !== "production") {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
  } : noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    process.env.NODE_ENV !== "production" && IS_CLIENT ? {
      _customProperties: markRaw(/* @__PURE__ */ new Set()),
      _hmrPayload
    } : {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (process.env.NODE_ENV !== "production" && hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = process.env.NODE_ENV !== "production" && hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      if (process.env.NODE_ENV !== "production") {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else if (process.env.NODE_ENV !== "production") {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => process.env.NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (process.env.NODE_ENV !== "production" && hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? computed(() => {
          setActivePinia(pinia);
          return getter.call(store, store);
        }) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  pinia._p.forEach((extender) => {
    if (process.env.NODE_ENV !== "production" && IS_CLIENT) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
      assign(store, extensions);
    } else {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (process.env.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = (process.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    if (process.env.NODE_ENV !== "production" && !activePinia) {
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      if (process.env.NODE_ENV !== "production") {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (process.env.NODE_ENV !== "production" && hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (process.env.NODE_ENV !== "production" && IS_CLIENT && currentInstance && currentInstance.proxy && !hot) {
      const vm = currentInstance.proxy;
      const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
      cache[id] = store;
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = toRef(store, key);
      }
    }
    return refs;
  }
}
const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  getters: {
    getUser: async (state) => {
      if (state.isAuthenticated && !state.user) {
        try {
          const { data } = await client.get("/auth/user");
          state.user = data.user;
        } catch (err) {
          state.isAuthenticated = false;
          localStorage.removeItem("access_token");
          return;
        }
      }
      return state.user;
    }
  },
  actions: {
    hasToken() {
      this.isAuthenticated = localStorage.getItem("access_token") ? true : false;
      return this.isAuthenticated;
    },
    login(user, token = null) {
      this.isAuthenticated = true;
      this.user = user;
      if (token) {
        localStorage.setItem("access_token", token);
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem("access_token");
    }
  }
});
const meta$f = {
  middleware: ["auth"]
};
const _sfc_main$t = {
  props: {
    reaction: {
      type: String,
      default: "poop"
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-md text-medium flex items-center gap-2 rounded-full bg-gray-200 px-4 py-3 text-dark-900 dark:bg-dark-700 dark:text-white" }, _attrs))}><img class="h-6 w-6 object-contain"${ssrRenderAttr("src", `/objects/${$props.reaction}.png`)}> 54 </div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Reaction.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$q]]);
const meta$e = void 0;
const _sfc_main$s = {
  props: {
    color: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["h-full cursor-pointer rounded-3xl shadow-lg duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl", $props.color && "bg-white dark:bg-dark-900 hover:dark:bg-dark-800"]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$r = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Card = __nuxt_component_4$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/articles/slug" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, { class: "p-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<header${_scopeId2}><img src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png" class="max-h-52 w-full rounded-xl object-cover" alt="Article Image"${_scopeId2}></header><main class="py-4"${_scopeId2}><div class="mb-2 text-xl font-semibold"${_scopeId2}>Titre de l&#39;article</div><div class="text-md dark:text-gray-300"${_scopeId2}> Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro </div></main><footer${_scopeId2}><span class="text-sm dark:text-gray-400"${_scopeId2}>le 27/03/2022</span></footer>`);
            } else {
              return [
                createVNode("header", null, [
                  createVNode("img", {
                    src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                    class: "max-h-52 w-full rounded-xl object-cover",
                    alt: "Article Image"
                  })
                ]),
                createVNode("main", { class: "py-4" }, [
                  createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                  createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro ")
                ]),
                createVNode("footer", null, [
                  createVNode("span", { class: "text-sm dark:text-gray-400" }, "le 27/03/2022")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, { class: "p-6" }, {
            default: withCtx(() => [
              createVNode("header", null, [
                createVNode("img", {
                  src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                  class: "max-h-52 w-full rounded-xl object-cover",
                  alt: "Article Image"
                })
              ]),
              createVNode("main", { class: "py-4" }, [
                createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro ")
              ]),
              createVNode("footer", null, [
                createVNode("span", { class: "text-sm dark:text-gray-400" }, "le 27/03/2022")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Thumbnails/Big.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$q = {
  props: {
    superSmall: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Card = __nuxt_component_4$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/articles/slug" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, { class: "flex gap-6 p-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png" class="${ssrRenderClass([$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"])}" alt="Article Image"${_scopeId2}><div${_scopeId2}><div class="mb-2 text-xl font-semibold"${_scopeId2}>Titre de l&#39;article</div><div class="text-md dark:text-gray-300"${_scopeId2}> Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro </div><span class="mt-4 block text-sm dark:text-gray-400"${_scopeId2}>le 27/03/2022</span></div>`);
            } else {
              return [
                createVNode("img", {
                  src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                  class: [$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"],
                  alt: "Article Image"
                }, null, 2),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                  createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro "),
                  createVNode("span", { class: "mt-4 block text-sm dark:text-gray-400" }, "le 27/03/2022")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, { class: "flex gap-6 p-6" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                class: [$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"],
                alt: "Article Image"
              }, null, 2),
              createVNode("div", null, [
                createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro "),
                createVNode("span", { class: "mt-4 block text-sm dark:text-gray-400" }, "le 27/03/2022")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Thumbnails/Small.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$n]]);
const meta$d = void 0;
const meta$c = {
  layout: "empty"
};
const meta$b = {
  layout: "footer"
};
const meta$a = void 0;
const Slider_vue_vue_type_style_index_0_scoped_487323f9_lang = "";
const _sfc_main$p = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    barStyle: Object,
    duration: { type: String, default: "12s" },
    direction: { type: String, default: "normal" },
    delay: { type: String, default: "0s" }
  },
  setup(__props) {
    const props = __props;
    const customStyle = computed(() => {
      return Object.assign({}, props.barStyle, {
        "animation-duration": props.duration,
        "animation-direction": props.direction,
        "animation-delay": props.delay
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `vifnslb-container-${__props.direction === "vertical" ? "vertical" : "horizontal"}`
      }, _attrs))} data-v-487323f9><div class="${ssrRenderClass(`vifnslb-element-${__props.direction === "vertical" ? "vertical" : "horizontal"}`)}" style="${ssrRenderStyle(unref(customStyle))}" data-v-487323f9><!--[-->`);
      ssrRenderList(2, (i) => {
        _push(`<div class="${ssrRenderClass(`vifnslb-bar-${__props.direction === "vertical" ? "vertical" : "horizontal"}`)}" data-v-487323f9>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-487323f9"]]);
const __nuxt_component_9 = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const meta$9 = void 0;
const _sfc_main$o = {
  data: () => ({ Icons }),
  props: {
    icon: {
      type: String,
      default: "user"
    },
    name: {
      type: String,
      default: "Utilisateurs"
    },
    value: {
      default: 0
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.Icons[$props.icon]), { class: "mx-auto mb-4 h-12 w-12" }, null), _parent);
  _push(`<div class="text-2xl font-extrabold">${ssrInterpolate($props.value)}</div><div class="text-lg">${ssrInterpolate($props.name)}</div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Stat.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$n = {
  props: {
    color: {
      type: String,
      default: "#9ca3af"
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 21 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path${ssrRenderAttr("fill", $props.color)} d="M20 8.09994C20.1 7.59994 19.7 6.99994 19.2 6.99994L13.5 6.19994L10.9 0.999938C10.8 0.799938 10.7 0.699938 10.5 0.599938C10 0.299938 9.4 0.499938 9.1 0.999938L6.6 6.19994L0.9 6.99994C0.6 6.99994 0.4 7.09994 0.3 7.29994C-0.1 7.69994 -0.1 8.29994 0.3 8.69994L4.4 12.6999L3.4 18.3999C3.4 18.5999 3.4 18.7999 3.5 18.9999C3.8 19.4999 4.4 19.6999 4.9 19.3999L10 16.6999L15.1 19.3999C15.2 19.4999 15.4 19.4999 15.6 19.4999C15.7 19.4999 15.7 19.4999 15.8 19.4999C16.3 19.3999 16.7 18.8999 16.6 18.2999L15.6 12.5999L19.7 8.59994C19.9 8.49994 20 8.29994 20 8.09994Z"></path></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Star.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$m = {
  props: {
    rate: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  const _component_Star = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-white p-8 shadow-sm dark:bg-dark-900" }, _attrs))}><div class="flex items-center gap-2 font-medium"><img${ssrRenderAttr("src", ((_b = (_a = $props.rate) == null ? void 0 : _a.author) == null ? void 0 : _b.avatar) || "/default_avatar.svg")} class="mr-2 h-8 w-8 rounded-full" alt="Avatar"> ${ssrInterpolate(((_d = (_c = $props.rate) == null ? void 0 : _c.author) == null ? void 0 : _d.username) || "Utilisateur supprim\xE9")} <span>-</span><div class="flex items-center gap-1"><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(ssrRenderComponent(_component_Star, {
      class: "w-6",
      color: $props.rate.star >= i ? "#BB900D" : "#9ca3af",
      key: i
    }, null, _parent));
  });
  _push(`<!--]--></div></div><p class="mt-4 text-gray-700 dark:text-gray-300">${ssrInterpolate($props.rate.message)}</p><span class="mt-4 block text-sm text-gray-400">le ${ssrInterpolate(new Date($props.rate.created_at).toLocaleDateString("fr-FR"))}</span></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonial.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$l = {
  props: {
    tool: {
      type: Object,
      default: {
        name: "Unknown",
        description: "No",
        uuid: "badges_discord"
      }
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative transition duration-200 ease-in hover:-translate-y-4",
    id: "card"
  }, _attrs))}><img class="w-full rounded-3xl shadow-lg"${ssrRenderAttr("src", `/tools/${$props.tool.uuid}_${_ctx.$colorMode.value}.png`)}><div class="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-2 rounded-3xl bg-gradient-to-t from-dark-950 to-dark-400 p-8 opacity-80 backdrop-blur-md dark:to-dark-800"><div class="text-2xl font-semibold text-white">${ssrInterpolate($props.tool.name)}</div><div class="text-lg text-white">${ssrInterpolate($props.tool.description)}</div></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/DefaultCard.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$k = {
  name: "Badges"
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "Cr\xE9ateur de badges",
    description: "Cr\xE9\xE9e les icones de tes r\xF4les Discord",
    uuid: "badges_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Badges.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Badges = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$j = {
  name: "Bots"
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "R\xE9f\xE9rencement de bots",
    description: "R\xE9f\xE9rence ton bot",
    uuid: "bots_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Bots.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Bots = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$i = {
  name: "Embed"
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "Cr\xE9ateur d'embeds",
    description: "Cr\xE9\xE9e et envoie tes embeds sur ton serveur Discord",
    uuid: "embed_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Embed.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Embed = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$h = {
  name: "Emojis"
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "R\xE9f\xE9rencement d'emojis",
    description: "R\xE9f\xE9rence ton emoji",
    uuid: "emojis_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Emojis.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Emojis = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
const meta$8 = void 0;
const meta$7 = void 0;
const meta$6 = void 0;
const _sfc_main$g = {
  components: {
    LightBulbIcon,
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
    isOpen: false,
    suggestion: "",
    errors: []
  }),
  methods: {
    async sendSuggestion() {
      try {
        await client.post(
          "/suggestions",
          {
            content: this.suggestion
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token")
            }
          }
        );
      } catch (e) {
        this.errors = e.response.data.errors.map((error) => error.message);
      }
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1$3;
  const _component_LightBulbIcon = resolveComponent("LightBulbIcon");
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_Input = __nuxt_component_4$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "mx-auto",
    text: "Faire une suggestion",
    color: "white",
    onClick: ($event) => _ctx.isOpen = true
  }, {
    icon_left: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_LightBulbIcon, { class: "mr-3 h-8 w-8" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_LightBulbIcon, { class: "mr-3 h-8 w-8" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.isOpen,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: ($event) => _ctx.isOpen = false,
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
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Cr\xE9er une suggestion `);
                              } else {
                                return [
                                  createTextVNode(" Cr\xE9er une suggestion ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="mt-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Input, {
                            class: "mt-4",
                            placeholder: "Entrez votre suggestion...",
                            modelValue: _ctx.suggestion,
                            "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                          }, null, _parent5, _scopeId4));
                          _push5(`<!--[-->`);
                          ssrRenderList(_ctx.errors, (error, id) => {
                            _push5(`<div class="mt-1 mb-4 text-sm text-red-400"${_scopeId4}><i${_scopeId4}>${ssrInterpolate(error)}</i></div>`);
                          });
                          _push5(`<!--]--><p class="mt-2 text-sm leading-loose text-gray-500"${_scopeId4}> Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon <span class="rounded-md bg-dark-800 p-1"${_scopeId4}>#suggestions</span></p></div><div class="mt-4 flex items-center justify-end gap-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "transparent",
                            text: "Annuler",
                            onClick: ($event) => _ctx.isOpen = false
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "primary",
                            text: "Envoyer ma suggestion",
                            onClick: $options.sendSuggestion
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cr\xE9er une suggestion ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: "Entrez votre suggestion...",
                                modelValue: _ctx.suggestion,
                                "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                                return openBlock(), createBlock("div", {
                                  class: "mt-1 mb-4 text-sm text-red-400",
                                  key: id
                                }, [
                                  createVNode("i", null, toDisplayString(error), 1)
                                ]);
                              }), 128)),
                              createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                                createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                                createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
                                color: "primary",
                                text: "Envoyer ma suggestion",
                                onClick: $options.sendSuggestion
                              }, null, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cr\xE9er une suggestion ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: "Entrez votre suggestion...",
                              modelValue: _ctx.suggestion,
                              "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                              return openBlock(), createBlock("div", {
                                class: "mt-1 mb-4 text-sm text-red-400",
                                key: id
                              }, [
                                createVNode("i", null, toDisplayString(error), 1)
                              ]);
                            }), 128)),
                            createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                              createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                              createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                            createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            createVNode(_component_Button, {
                              color: "primary",
                              text: "Envoyer ma suggestion",
                              onClick: $options.sendSuggestion
                            }, null, 8, ["onClick"])
                          ])
                        ]),
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
                          default: withCtx(() => [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cr\xE9er une suggestion ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: "Entrez votre suggestion...",
                                modelValue: _ctx.suggestion,
                                "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                                return openBlock(), createBlock("div", {
                                  class: "mt-1 mb-4 text-sm text-red-400",
                                  key: id
                                }, [
                                  createVNode("i", null, toDisplayString(error), 1)
                                ]);
                              }), 128)),
                              createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                                createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                                createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
                                color: "primary",
                                text: "Envoyer ma suggestion",
                                onClick: $options.sendSuggestion
                              }, null, 8, ["onClick"])
                            ])
                          ]),
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
            onClose: ($event) => _ctx.isOpen = false,
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
                              createTextVNode(" Cr\xE9er une suggestion ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: "Entrez votre suggestion...",
                              modelValue: _ctx.suggestion,
                              "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                              return openBlock(), createBlock("div", {
                                class: "mt-1 mb-4 text-sm text-red-400",
                                key: id
                              }, [
                                createVNode("i", null, toDisplayString(error), 1)
                              ]);
                            }), 128)),
                            createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                              createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                              createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                            createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            createVNode(_component_Button, {
                              color: "primary",
                              text: "Envoyer ma suggestion",
                              onClick: $options.sendSuggestion
                            }, null, 8, ["onClick"])
                          ])
                        ]),
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
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuggestionButton.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_6$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$f = {
  props: {
    id: {
      type: String,
      required: true
    },
    suggestion: {
      type: Object,
      required: true
    },
    reactions: {
      type: Array,
      required: false,
      default: []
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `https://discord.com/channels/905842698626428928/1015968524923052083/${$props.id}`,
    target: "_blank"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition duration-200 ease-in hover:-translate-y-1 hover:bg-gray-100 dark:bg-dark-900 hover:dark:bg-dark-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-4 font-semibold"${_scopeId}><img class="h-8 w-8 rounded-full"${ssrRenderAttr("src", $props.suggestion.author.icon_url)}${_scopeId}> ${ssrInterpolate($props.suggestion.author.name.replace("Suggestion de ", ""))}</div><p class="mt-4"${_scopeId}>${ssrInterpolate($props.suggestion.description)}</p></div><div class="flex gap-2"${_scopeId}><!--[-->`);
        ssrRenderList($props.reactions, (reaction, index) => {
          _push2(`<div class="mt-4 flex gap-1 rounded-md bg-gray-200 bg-opacity-50 px-2 py-1 dark:bg-dark-800"${_scopeId}>${ssrInterpolate(reaction.emoji.name)} ${ssrInterpolate(reaction.count)}</div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition duration-200 ease-in hover:-translate-y-1 hover:bg-gray-100 dark:bg-dark-900 hover:dark:bg-dark-800" }, [
            createVNode("div", null, [
              createVNode("div", { class: "flex items-center gap-4 font-semibold" }, [
                createVNode("img", {
                  class: "h-8 w-8 rounded-full",
                  src: $props.suggestion.author.icon_url
                }, null, 8, ["src"]),
                createTextVNode(" " + toDisplayString($props.suggestion.author.name.replace("Suggestion de ", "")), 1)
              ]),
              createVNode("p", { class: "mt-4" }, toDisplayString($props.suggestion.description), 1)
            ]),
            createVNode("div", { class: "flex gap-2" }, [
              (openBlock(true), createBlock(Fragment$1, null, renderList($props.reactions, (reaction, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  class: "mt-4 flex gap-1 rounded-md bg-gray-200 bg-opacity-50 px-2 py-1 dark:bg-dark-800"
                }, toDisplayString(reaction.emoji.name) + " " + toDisplayString(reaction.count), 1);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Suggestion.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const meta$5 = void 0;
const meta$4 = void 0;
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-48 text-white" }, _attrs))}><div class="absolute top-full -z-10 h-full w-full -translate-y-full bg-[#5C6AF6]"></div><div class="absolute left-1/2 top-full -z-1 h-full w-1/2 -translate-x-1/2 -translate-y-full rounded-full" style="${ssrRenderStyle({ "background": "radial-gradient(" })}"></div><svg id="squares" class="absolute -top-48 -left-12 -z-10 h-[90rem] min-h-screen w-screen rotate-12 scale-125"><!--[-->`);
  ssrRenderList(16, (n) => {
    _push(`<g><!--[-->`);
    ssrRenderList(24, (i) => {
      _push(`<rect${ssrRenderAttr("x", 100 * (i - 1))}${ssrRenderAttr("y", 100 * (n - 1))} width="100" height="100"${ssrRenderAttr(
        "fill",
        Math.floor(Math.random() * 8) % 3 === 2 ? "#5F6CF7" : "#5664F9"
      )} stroke="#5F6DF9" stroke-width="2"></rect>`);
    });
    _push(`<!--]--></g>`);
  });
  _push(`<!--]--></svg><div class="container mx-auto px-4 text-center">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="absolute top-0 h-52 w-full" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, #5865f6, transparent)" })}"></div><div class="absolute top-full h-52 w-full -translate-y-full" style="${ssrRenderStyle({ "background": "linear-gradient(to top, #5865f6, transparent)" })}"></div></header>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Header.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const _imports_0 = "" + globalThis.__publicAssetsURL("objects/sad.png");
const _sfc_main$d = {
  props: {
    text: {
      type: String,
      default: "Nous n'avons pas trouv\xE9 de r\xE9sultats..."
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><img class="mx-auto mb-4 h-12 w-12"${ssrRenderAttr("src", _imports_0)}><div class="mx-auto max-w-xs text-center text-sm leading-6">${ssrInterpolate($props.text)}</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Empty.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const meta$3 = void 0;
const _sfc_main$c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative h-32 rounded-t-2xl bg-blurple p-6 shadow-xl"><img class="absolute top-1/2 h-24 w-24 rounded-3xl border-4 border-white dark:border-dark-800" src="https://cdn.discordapp.com/avatars/908347266727813160/139394a36c0c1bdd6cec0aaa8db66d6c.png?size=4096"></header><div class="rounded-b-2xl bg-white p-6 shadow-xl dark:bg-dark-800"><main><div class="mt-4 text-lg font-bold">Maky</div><div class="text-md mt-2"> Bot de cr\xE9ation de serveur Discord. Il vous permet de cr\xE9er vos channels, vos r\xF4les... </div></main><footer class="mt-4 flex flex-wrap gap-2"><div class="rounded-lg bg-primary-500 bg-opacity-20 px-2 py-1 text-xs italic"> Mod\xE9ration </div><div class="rounded-lg bg-primary-500 bg-opacity-20 px-2 py-1 text-xs italic"> Mod\xE9ration </div><div class="rounded-lg bg-primary-500 bg-opacity-20 px-2 py-1 text-xs italic"> Mod\xE9ration </div></footer></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bots/Card.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
const meta$2 = void 0;
const _sfc_main$b = {
  props: {
    stepId: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    bigPadding: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $props.bigPadding ? "py-16" : "py-6"
  }, _attrs))}><div class="flex gap-2 text-lg"><span class="font-bold">Etape ${ssrInterpolate($props.stepId)}</span><span class="font-semibold">-</span><span class="font-medium">${ssrInterpolate($props.name)}</span></div><p class="text-md">${ssrInterpolate($props.description)}</p><div class="mt-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Step.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$a = {
  components: { Switch },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("change", value);
      this.$emit("update:modelValue", value);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Switch = resolveComponent("Switch");
  _push(ssrRenderComponent(_component_Switch, mergeProps({
    modelValue: $props.modelValue,
    "onUpdate:modelValue": ($event) => $props.modelValue = $event,
    class: [$props.modelValue ? "bg-teal-500" : "bg-red-500", "relative inline-flex h-[38px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"],
    onChange: $options.handleInput($props.modelValue)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([$props.modelValue ? "translate-x-10" : "translate-x-1", "pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Use setting"),
          createVNode("span", {
            "aria-hidden": "true",
            class: [$props.modelValue ? "translate-x-10" : "translate-x-1", "pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"]
          }, null, 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toggle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const Markdown_vue_vue_type_style_index_0_lang = "";
const { toHTML: toHTML$1 } = pkg;
const _sfc_main$9 = {
  setup() {
    return { toHTML: toHTML$1 };
  },
  props: {
    content: {
      type: String,
      default: ""
    },
    embed: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>${$setup.toHTML($props.content, {
    discordCallback: {
      user: (node) => "@user",
      role: (node) => "@role"
    },
    embed: $props.embed
  })}</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Markdown.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const meta$1 = void 0;
const _sfc_main$8 = {
  props: {
    stepId: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    bigPadding: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $props.bigPadding ? "py-16" : "py-6"
  }, _attrs))}><div class="flex items-center justify-between"><div class="flex gap-2 text-lg"><span class="font-bold">Etape ${ssrInterpolate($props.stepId)}</span><span class="font-semibold">-</span><span class="font-medium">${ssrInterpolate($props.name)}</span></div><div>`);
  ssrRenderSlot(_ctx.$slots, "bin", {}, null, _push, _parent);
  _push(`</div></div><p class="text-md">${ssrInterpolate($props.description)}</p><div class="mt-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Step.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    big: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><textarea${ssrRenderAttr("placeholder", $props.placeholder)} type="text" class="${ssrRenderClass([$props.big ? "text-md px-6 py-5" : "px-6 py-4 text-sm", "w-full rounded-lg border border-dark-900 bg-transparent text-sm focus:border-primary-500 focus:bg-white focus:outline-none dark:focus:bg-dark-900"])}">${ssrInterpolate($props.modelValue)}</textarea></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Textarea.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {
  props: {
    file: {
      required: true
    }
  },
  computed: {
    fileBlob() {
      return URL.createObjectURL(this.file);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    class: "rounded-[4px]",
    src: $options.fileBlob,
    style: { "max-width": "400px", "max-height": "300px" }
  }, _attrs))}>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Attachments/Image.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const File_vue_vue_type_style_index_0_scoped_d55f93ac_lang = "";
const _sfc_main$5 = {
  props: {
    file: {
      required: true
    }
  },
  computed: {
    fileSize() {
      const size = this.file.size;
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "KB", "MB", "GB", "TB"][i];
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between gap-4 rounded-[4px] border border-[#292B2F] bg-[#2F3136] px-4 py-3 dark:fill-white" }, _attrs))} data-v-d55f93ac><div class="flex" data-v-d55f93ac><svg width="28" height="40" viewBox="0 0 28 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-d55f93ac><defs data-v-d55f93ac><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter" data-v-d55f93ac><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter" data-v-d55f93ac></feOffset><feGaussianBlur stdDeviation="0" in="shadowOffsetOuter" result="shadowBlurOuter" data-v-d55f93ac></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" in="shadowBlurOuter" type="matrix" result="shadowMatrixOuter" data-v-d55f93ac></feColorMatrix><feMerge data-v-d55f93ac><feMergeNode in="shadowMatrixOuter" data-v-d55f93ac></feMergeNode><feMergeNode in="SourceGraphic" data-v-d55f93ac></feMergeNode></feMerge></filter></defs><g stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" transform="translate(2, 2)" data-v-d55f93ac><path d="M0,3.00741988 C0,1.34646775 1.34252415,0 2.99998588,0 L15.1166483,0 C17.0807354,0 24,6.91885725 24,8.87457593 L24,33.0035574 C24,34.6584469 22.6582294,36 21.0089096,36 L2.99109042,36 C1.33915679,36 0,34.6544607 0,32.9925801 L0,3.00741988 Z" stroke="#7289da" fill="#f4f6fc" data-v-d55f93ac></path><path d="M17,1.09677336 C17,0.542040316 17.3147964,0.407097791 17.7133118,0.80556379 L23.1952031,6.28677654 C23.5891543,6.68067898 23.4552279,7 22.9039575,7 L18.0045574,7 C17.4497557,7 17,6.54676916 17,5.99556698 L17,1.09677336 Z" stroke="#7289da" fill="#f4f6fc" filter="url(#filter)" data-v-d55f93ac></path><path d="M13,3 L4.49710104,3 C3.67027497,3 3,3.66579723 3,4.5 L3,6" stroke="#c9d2f0" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" data-v-d55f93ac></path><text opacity="0.8" font-family="Source Code Pro" font-size="12" font-weight="420" letter-spacing="-0.3" fill="#697ec4" data-v-d55f93ac><tspan x="5.2690141" y="26.4705882" data-v-d55f93ac>||</tspan></text></g></svg><div class="ml-2 flex flex-col justify-between" data-v-d55f93ac><div class="text-md link hover:underline" data-v-d55f93ac>${ssrInterpolate($props.file.name)}</div><div class="text-xs text-gray-600" data-v-d55f93ac>${ssrInterpolate($options.fileSize)}</div></div></div><svg class="downloadButton-2HLFWN" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" data-v-d55f93ac><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z" data-v-d55f93ac></path></svg></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Attachments/File.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d55f93ac"]]);
const _sfc_main$4 = {
  components: { ChevronDownIcon, TrashIcon },
  data: () => ({
    open: false
  }),
  props: {
    name: {
      type: String
    },
    trash: {
      type: Function
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 py-4" }, _attrs))}><div class="flex items-center justify-between font-semibold">${ssrInterpolate($props.name)} <div class="flex items-center gap-1">`);
  if ($props.trash) {
    _push(`<button class="p-2">`);
    _push(ssrRenderComponent(_component_TrashIcon, { class: "h-6 w-6" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="p-2">`);
  _push(ssrRenderComponent(_component_ChevronDownIcon, {
    class: ["h-6 w-6 duration-300 ease-in-out", !_ctx.open && "rotate-90"]
  }, null, _parent));
  _push(`</button></div></div><div class="${ssrRenderClass([!_ctx.open ? "max-h-0 overflow-hidden" : "mt-4 mb-2 max-h-[300rem]", "duration-300 ease-in-out"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/CollapseCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const FakeEmbed_vue_vue_type_style_index_0_lang = "";
const { toHTML } = pkg;
const _sfc_main$3 = {
  setup() {
    return { toHTML };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getFieldColumn(field) {
      const MAX_FIELDS_PER_ROW = 3;
      const FIELD_GRID_SIZE = 12;
      const embed = this.data;
      const fieldIndex = embed.fields.indexOf(field);
      if (!field.inline)
        return `1/${FIELD_GRID_SIZE + 1}`;
      let startingField = fieldIndex;
      while (startingField > 0 && embed.fields[startingField - 1].inline) {
        startingField--;
      }
      let totalInlineFields = 0;
      while (embed.fields.length > startingField + totalInlineFields && embed.fields[startingField + totalInlineFields].inline) {
        totalInlineFields++;
      }
      const indexInSequence = fieldIndex - startingField;
      const currentRow = indexInSequence / MAX_FIELDS_PER_ROW;
      const indexOnRow = indexInSequence % MAX_FIELDS_PER_ROW;
      const totalOnLastRow = totalInlineFields % MAX_FIELDS_PER_ROW || MAX_FIELDS_PER_ROW;
      const fullRows = (totalInlineFields - totalOnLastRow) / MAX_FIELDS_PER_ROW;
      const totalOnRow = currentRow >= fullRows ? totalOnLastRow : MAX_FIELDS_PER_ROW;
      const columnSpan = FIELD_GRID_SIZE / totalOnRow;
      const start = indexOnRow * columnSpan + 1;
      const end = start + columnSpan;
      return `${start}/${end}`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Markdown = __nuxt_component_6$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "embed border-l-4 bg-[#F2F3F5] dark:bg-[#2F3136]",
    style: `border-color: ${$props.data.color}; max-width: ${$props.data.image.url ? "432" : "516"}px;`
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      if (_push2) {
        if (((_a = $props.data.author) == null ? void 0 : _a.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 || ((_b = $props.data.thumbnail) == null ? void 0 : _b.url)) {
          _push2(`<div class="flex justify-between"${_scopeId}><div class="mr-2 py-2"${_scopeId}>`);
          if (((_c = $props.data.author) == null ? void 0 : _c.icon_url) || ((_d = $props.data.author) == null ? void 0 : _d.name)) {
            _push2(`<div class="mb-2 flex items-center text-sm font-semibold"${_scopeId}>`);
            if ($props.data.author.icon_url) {
              _push2(`<img class="mr-2 h-6 w-6 rounded-full"${ssrRenderAttr("src", $props.data.author.icon_url)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate((_e = $props.data.author) == null ? void 0 : _e.name)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.title && $props.data.url) {
            _push2(`<a href="#" target="_blank" class="${ssrRenderClass([$props.data.author.url && "title hover:underline", "block font-semibold"])}"${_scopeId}>${ssrInterpolate($props.data.title)}</a>`);
          } else if ($props.data.title) {
            _push2(`<div class="font-semibold"${_scopeId}>${ssrInterpolate($props.data.title)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.description) {
            _push2(ssrRenderComponent(_component_Markdown, {
              class: "mt-2 box-border whitespace-pre-wrap break-words text-sm leading-snug",
              embed: true,
              content: $props.data.description
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="grid gap-x-6 gap-y-2"${_scopeId}><!--[-->`);
          ssrRenderList($props.data.fields, (field, key) => {
            _push2(`<div class="mt-2 text-sm" style="${ssrRenderStyle(`grid-column: ${$options.getFieldColumn(field)};`)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Markdown, {
              content: field.name,
              class: "font-semibold",
              embed: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Markdown, {
              content: field.value,
              class: "font-normal",
              embed: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div>`);
          if ((_f = $props.data.thumbnail) == null ? void 0 : _f.url) {
            _push2(`<div class="flex-none"${_scopeId}><img class="w-20 rounded-[4px]"${ssrRenderAttr("src", $props.data.thumbnail.url)}${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ((_g = $props.data.image) == null ? void 0 : _g.url) {
          _push2(`<div${_scopeId}><img class="${ssrRenderClass([
            ((_h = $props.data.author) == null ? void 0 : _h.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 ? "mt-1" : "mt-4",
            "w-full rounded-[4px]"
          ])}"${ssrRenderAttr("src", $props.data.image.url)}${_scopeId}></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.data.timestamp || ((_i = $props.data.footer) == null ? void 0 : _i.text) || ((_j = $props.data.footer) == null ? void 0 : _j.icon_url)) {
          _push2(`<footer class="mt-2 flex items-center"${_scopeId}>`);
          if ((_k = $props.data.footer) == null ? void 0 : _k.icon_url) {
            _push2(`<img class="mr-2 h-5 w-5 rounded-full"${ssrRenderAttr("src", $props.data.footer.icon_url)}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<span class="text-xs text-gray-200"${_scopeId}>`);
          if ((_l = $props.data.footer) == null ? void 0 : _l.text) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_m = $props.data.footer) == null ? void 0 : _m.text)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.timestamp && ((_n = $props.data.footer) == null ? void 0 : _n.text)) {
            _push2(`<span class="mx-1"${_scopeId}>\u2022</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.timestamp) {
            _push2(`<span${_scopeId}>${ssrInterpolate($props.data.timestamp)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</span></footer>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          ((_o = $props.data.author) == null ? void 0 : _o.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 || ((_p = $props.data.thumbnail) == null ? void 0 : _p.url) ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex justify-between"
          }, [
            createVNode("div", { class: "mr-2 py-2" }, [
              ((_q = $props.data.author) == null ? void 0 : _q.icon_url) || ((_r = $props.data.author) == null ? void 0 : _r.name) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-2 flex items-center text-sm font-semibold"
              }, [
                $props.data.author.icon_url ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "mr-2 h-6 w-6 rounded-full",
                  src: $props.data.author.icon_url
                }, null, 8, ["src"])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString((_s = $props.data.author) == null ? void 0 : _s.name), 1)
              ])) : createCommentVNode("", true),
              $props.data.title && $props.data.url ? (openBlock(), createBlock("a", {
                key: 1,
                href: "#",
                target: "_blank",
                class: ["block font-semibold", $props.data.author.url && "title hover:underline"]
              }, toDisplayString($props.data.title), 3)) : $props.data.title ? (openBlock(), createBlock("div", {
                key: 2,
                class: "font-semibold"
              }, toDisplayString($props.data.title), 1)) : createCommentVNode("", true),
              $props.data.description ? (openBlock(), createBlock(_component_Markdown, {
                key: 3,
                class: "mt-2 box-border whitespace-pre-wrap break-words text-sm leading-snug",
                embed: true,
                content: $props.data.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("div", { class: "grid gap-x-6 gap-y-2" }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.fields, (field, key) => {
                  return openBlock(), createBlock("div", {
                    key,
                    class: "mt-2 text-sm",
                    style: `grid-column: ${$options.getFieldColumn(field)};`
                  }, [
                    createVNode(_component_Markdown, {
                      content: field.name,
                      class: "font-semibold",
                      embed: true
                    }, null, 8, ["content"]),
                    createVNode(_component_Markdown, {
                      content: field.value,
                      class: "font-normal",
                      embed: true
                    }, null, 8, ["content"])
                  ], 4);
                }), 128))
              ])
            ]),
            ((_t = $props.data.thumbnail) == null ? void 0 : _t.url) ? (openBlock(), createBlock("div", {
              key: 0,
              class: "flex-none"
            }, [
              createVNode("img", {
                class: "w-20 rounded-[4px]",
                src: $props.data.thumbnail.url
              }, null, 8, ["src"])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          ((_u = $props.data.image) == null ? void 0 : _u.url) ? (openBlock(), createBlock("div", { key: 1 }, [
            createVNode("img", {
              class: [
                "w-full rounded-[4px]",
                ((_v = $props.data.author) == null ? void 0 : _v.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 ? "mt-1" : "mt-4"
              ],
              src: $props.data.image.url
            }, null, 10, ["src"])
          ])) : createCommentVNode("", true),
          $props.data.timestamp || ((_w = $props.data.footer) == null ? void 0 : _w.text) || ((_x = $props.data.footer) == null ? void 0 : _x.icon_url) ? (openBlock(), createBlock("footer", {
            key: 2,
            class: "mt-2 flex items-center"
          }, [
            ((_y = $props.data.footer) == null ? void 0 : _y.icon_url) ? (openBlock(), createBlock("img", {
              key: 0,
              class: "mr-2 h-5 w-5 rounded-full",
              src: $props.data.footer.icon_url
            }, null, 8, ["src"])) : createCommentVNode("", true),
            createVNode("span", { class: "text-xs text-gray-200" }, [
              ((_z = $props.data.footer) == null ? void 0 : _z.text) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_A = $props.data.footer) == null ? void 0 : _A.text), 1)) : createCommentVNode("", true),
              $props.data.timestamp && ((_B = $props.data.footer) == null ? void 0 : _B.text) ? (openBlock(), createBlock("span", {
                key: 1,
                class: "mx-1"
              }, "\u2022")) : createCommentVNode("", true),
              $props.data.timestamp ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString($props.data.timestamp), 1)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/FakeEmbed.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const FakeMessage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Markdown = __nuxt_component_6$1;
  const _component_ToolsDiscordEmbedCreatorAttachmentsImage = __nuxt_component_6;
  const _component_ToolsDiscordEmbedCreatorAttachmentsFile = __nuxt_component_7;
  const _component_ToolsDiscordEmbedCreatorFakeEmbed = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", $props.data.avatar_url)}${_scopeId}><div class="whitney w-full"${_scopeId}><div class="flex items-center gap-1 text-base"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate($props.data.username)}</span><span class="rounded-sm bg-blurple px-1 text-[10px] font-medium leading-4 text-white"${_scopeId}>BOT</span><span class="ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200"${_scopeId}>12/08/2022</span></div><div class="mt-1 flex w-full flex-col gap-1"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Markdown, {
          class: "whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300",
          content: $props.data.content
        }, null, _parent2, _scopeId));
        if ($props.data.files) {
          _push2(`<div class="flex flex-col gap-1"${_scopeId}><!--[-->`);
          ssrRenderList($props.data.files, (file, index) => {
            _push2(`<div class="flex"${_scopeId}>`);
            if (file.type.startsWith("image") && file.type !== "image/svg+xml") {
              _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsImage, { file }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsFile, { file }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<!--[-->`);
        ssrRenderList($props.data.embeds, (embed, id) => {
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeEmbed, {
            key: id,
            class: "w-full",
            data: embed
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
        if ($props.data.components[0].components) {
          _push2(`<div class="mt-2 flex"${_scopeId}><!--[-->`);
          ssrRenderList($props.data.components[0].components, (component, id) => {
            _push2(`<a${ssrRenderAttr("href", component.url)} target="_blank" class="relative ml-0 mr-2 flex items-center gap-2 rounded-sm bg-[#4F545C] px-4 py-1 font-medium text-white duration-200 ease-in hover:bg-[#686D73]"${_scopeId}>${ssrInterpolate(component.label)} <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"${_scopeId}></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"${_scopeId}></path></svg></a>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-10 w-10 rounded-full",
            src: $props.data.avatar_url
          }, null, 8, ["src"]),
          createVNode("div", { class: "whitney w-full" }, [
            createVNode("div", { class: "flex items-center gap-1 text-base" }, [
              createVNode("span", { class: "font-medium" }, toDisplayString($props.data.username), 1),
              createVNode("span", { class: "rounded-sm bg-blurple px-1 text-[10px] font-medium leading-4 text-white" }, "BOT"),
              createVNode("span", { class: "ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200" }, "12/08/2022")
            ]),
            createVNode("div", { class: "mt-1 flex w-full flex-col gap-1" }, [
              createVNode(_component_Markdown, {
                class: "whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300",
                content: $props.data.content
              }, null, 8, ["content"]),
              $props.data.files ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col gap-1"
              }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.files, (file, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "flex"
                  }, [
                    file.type.startsWith("image") && file.type !== "image/svg+xml" ? (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                      key: 0,
                      file
                    }, null, 8, ["file"])) : (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                      key: 1,
                      file
                    }, null, 8, ["file"]))
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.embeds, (embed, id) => {
                return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorFakeEmbed, {
                  key: id,
                  class: "w-full",
                  data: embed
                }, null, 8, ["data"]);
              }), 128))
            ]),
            $props.data.components[0].components ? (openBlock(), createBlock("div", {
              key: 0,
              class: "mt-2 flex"
            }, [
              (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.components[0].components, (component, id) => {
                return openBlock(), createBlock("a", {
                  href: component.url,
                  target: "_blank",
                  class: "relative ml-0 mr-2 flex items-center gap-2 rounded-sm bg-[#4F545C] px-4 py-1 font-medium text-white duration-200 ease-in hover:bg-[#686D73]",
                  key: id
                }, [
                  createTextVNode(toDisplayString(component.label) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    "aria-hidden": "false",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                    }),
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                    })
                  ]))
                ], 8, ["href"]);
              }), 128))
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/FakeMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const meta = void 0;
const routes = [
  {
    name: "account",
    path: "/account",
    file: "D:/umaestro/frontend/pages/account/index.vue",
    children: [],
    meta: meta$f,
    alias: (meta$f == null ? void 0 : meta$f.alias) || [],
    component: () => import("./_nuxt/index.af293f59.js").then((m) => m.default || m)
  },
  {
    name: "articles-slug",
    path: "/articles/:slug",
    file: "D:/umaestro/frontend/pages/articles/[slug].vue",
    children: [],
    meta: meta$e,
    alias: (meta$e == null ? void 0 : meta$e.alias) || [],
    component: () => import("./_nuxt/_slug_.3f208f47.js").then((m) => m.default || m)
  },
  {
    name: "articles",
    path: "/articles",
    file: "D:/umaestro/frontend/pages/articles/index.vue",
    children: [],
    meta: meta$d,
    alias: (meta$d == null ? void 0 : meta$d.alias) || [],
    component: () => import("./_nuxt/index.f11a5ace.js").then((m) => m.default || m)
  },
  {
    name: "authentification-callback",
    path: "/authentification/callback",
    file: "D:/umaestro/frontend/pages/authentification/callback.vue",
    children: [],
    meta: meta$c,
    alias: (meta$c == null ? void 0 : meta$c.alias) || [],
    component: () => import("./_nuxt/callback.e8ed47dc.js").then((m) => m.default || m)
  },
  {
    name: "authentification",
    path: "/authentification",
    file: "D:/umaestro/frontend/pages/authentification/index.vue",
    children: [],
    meta: meta$b,
    alias: (meta$b == null ? void 0 : meta$b.alias) || [],
    component: () => import("./_nuxt/index.3d8a68b7.js").then((m) => m.default || m)
  },
  {
    name: "cgu",
    path: "/cgu",
    file: "D:/umaestro/frontend/pages/cgu.vue",
    children: [],
    meta: meta$a,
    alias: (meta$a == null ? void 0 : meta$a.alias) || [],
    component: () => import("./_nuxt/cgu.e47aa60d.js").then((m) => m.default || m)
  },
  {
    name: "hire",
    path: "/hire",
    file: "D:/umaestro/frontend/pages/hire.vue",
    children: [],
    meta: meta$9,
    alias: (meta$9 == null ? void 0 : meta$9.alias) || [],
    component: () => import("./_nuxt/hire.423846c0.js").then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "D:/umaestro/frontend/pages/index.vue",
    children: [],
    meta: meta$8,
    alias: (meta$8 == null ? void 0 : meta$8.alias) || [],
    component: () => import("./_nuxt/index.fd24bed8.js").then((m) => m.default || m)
  },
  {
    name: "partners",
    path: "/partners",
    file: "D:/umaestro/frontend/pages/partners.vue",
    children: [],
    meta: meta$7,
    alias: (meta$7 == null ? void 0 : meta$7.alias) || [],
    component: () => import("./_nuxt/partners.c610eec0.js").then((m) => m.default || m)
  },
  {
    name: "rates",
    path: "/rates",
    file: "D:/umaestro/frontend/pages/rates.vue",
    children: [],
    meta: meta$6,
    alias: (meta$6 == null ? void 0 : meta$6.alias) || [],
    component: () => import("./_nuxt/rates.c3a52fa7.js").then((m) => m.default || m)
  },
  {
    name: "suggestions",
    path: "/suggestions",
    file: "D:/umaestro/frontend/pages/suggestions.vue",
    children: [],
    meta: meta$5,
    alias: (meta$5 == null ? void 0 : meta$5.alias) || [],
    component: () => import("./_nuxt/suggestions.fd17c0f5.js").then((m) => m.default || m)
  },
  {
    name: "tools-404",
    path: "/tools/404",
    file: "D:/umaestro/frontend/pages/tools/404.vue",
    children: [],
    meta: meta$4,
    alias: (meta$4 == null ? void 0 : meta$4.alias) || [],
    component: () => import("./_nuxt/404.ea9eb6b9.js").then((m) => m.default || m)
  },
  {
    name: "tools-slug",
    path: "/tools/:slug",
    file: "D:/umaestro/frontend/pages/tools/[slug]/index.vue",
    children: [],
    meta: meta$3,
    alias: (meta$3 == null ? void 0 : meta$3.alias) || [],
    component: () => import("./_nuxt/index.82d9ad16.js").then((m) => m.default || m)
  },
  {
    name: "tools-bots",
    path: "/tools/bots",
    file: "D:/umaestro/frontend/pages/tools/bots.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    component: () => import("./_nuxt/bots.248cd023.js").then((m) => m.default || m)
  },
  {
    name: "tools-discord-badges",
    path: "/tools/discord/badges",
    file: "D:/umaestro/frontend/pages/tools/discord/badges.vue",
    children: [],
    meta: meta$1,
    alias: (meta$1 == null ? void 0 : meta$1.alias) || [],
    component: () => import("./_nuxt/badges.297c7192.js").then((m) => m.default || m)
  },
  {
    name: "tools-discord-embed",
    path: "/tools/discord/embed",
    file: "D:/umaestro/frontend/pages/tools/discord/embed.vue",
    children: [],
    meta,
    alias: (meta == null ? void 0 : meta.alias) || [],
    component: () => import("./_nuxt/embed.fa514b57.js").then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ el: to.hash });
        } else {
          window.scrollTo(0, 0);
        }
      }, 200);
    });
  }
};
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const globalMiddleware = [];
const namedMiddleware = {
  auth: () => import("./_nuxt/auth.97853ab8.js")
};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout", "$0JR5xvAX5a");
  router.beforeEach(async (to, from) => {
    var _a, _b;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a = initialLayout.value) != null ? _a : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b = namedMiddleware[entry2]) == null ? void 0 : _b.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const preference = "system";
const script = 'const w=window,de=document.documentElement,knownColorSchemes=["dark","light"],preference=window.localStorage.getItem("color_theme")||"system";let value=preference==="system"?getColorScheme():preference;const forcedColorMode=de.getAttribute("data-color-mode-forced");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w["__NUXT_COLOR_MODE__"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=""+e+"",t="";de.classList?de.classList.add(o):de.className+=" "+o,de.setAttribute("data-"+t,e)}function removeColorScheme(e){const o=""+e+"",t="";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,"g"),""),de.removeAttribute("data-"+t)}function prefersColorScheme(e){return w.matchMedia("(prefers-color-scheme"+e+")")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme("").media!=="not all"){for(const e of knownColorSchemes)if(prefersColorScheme(":"+e).matches)return e}return"light"}\n';
const node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  }), "$LHDClCOF8Q").value;
  const htmlAttrs = {};
  {
    useHead({
      htmlAttrs,
      script: [{ children: script }]
    });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const _plugins = [
  preload,
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import("./_nuxt/error-component.617133ac.js"));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layouts = {
  default: defineAsyncComponent(() => import("./_nuxt/default.f13ae4e1.js")),
  empty: defineAsyncComponent(() => import("./_nuxt/empty.8cc8bfc9.js")),
  footer: defineAsyncComponent(() => import("./_nuxt/footer.35954309.js"))
};
const __nuxt_component_0 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      const transitionProps = (_c = route.meta.layoutTransition) != null ? _c : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => {
          return _wrapIf(layouts[layout], hasLayout, context.slots).default();
        }
      }).default();
    };
  }
});
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = resolveComponent("NuxtPage");
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", _sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  __nuxt_component_6$1 as A,
  Badges as B,
  __nuxt_component_3 as C,
  __nuxt_component_5 as D,
  Emojis as E,
  __nuxt_component_6 as F,
  __nuxt_component_7 as G,
  __nuxt_component_8 as H,
  __nuxt_component_11 as I,
  defineNuxtRouteMiddleware as J,
  storeToRefs as K,
  _export_sfc as _,
  __nuxt_component_4$2 as a,
  __nuxt_component_1$3 as b,
  client as c,
  __nuxt_component_0$5 as d,
  entry$1 as default,
  __nuxt_component_0$4 as e,
  __nuxt_component_0$3 as f,
  __nuxt_component_1$2 as g,
  useHead as h,
  __nuxt_component_2$2 as i,
  __nuxt_component_9 as j,
  __nuxt_component_4$1 as k,
  __nuxt_component_2$1 as l,
  __nuxt_component_3$2 as m,
  navigateTo as n,
  useNuxtApp as o,
  Bots as p,
  Embed as q,
  __nuxt_component_1$1 as r,
  __nuxt_component_6$2 as s,
  __nuxt_component_1 as t,
  useAuthStore as u,
  __nuxt_component_0$1 as v,
  __nuxt_component_5$1 as w,
  __nuxt_component_2 as x,
  __nuxt_component_3$1 as y,
  __nuxt_component_10 as z
};
