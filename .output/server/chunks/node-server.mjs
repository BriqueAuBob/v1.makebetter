globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('./error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/createur_embed.png": {
    "type": "image/png",
    "etag": "\"10e17-fAe2uS56d0OyWLOwbhpnbi6/pRE\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 69143,
    "path": "../public/createur_embed.png"
  },
  "/default_avatar.svg": {
    "type": "image/svg+xml",
    "etag": "\"30c-69k7PAnibZ6byAZIe8Vj/8rmlbI\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 780,
    "path": "../public/default_avatar.svg"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"28b-M3zf0ONne5glDC1znIsiA75+tUg\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 651,
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"440-yzjkHCZZrLHPlvtZbGIdxlNVXfg\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 1088,
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-QUzo6tRl/J6FR7TT1g9WhJpICJc\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a1-qJmyW6bbzsGnpnSa96wAYZW5ZVU\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 929,
    "path": "../public/logo.svg"
  },
  "/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"10a9-hDQltTMqBH0hho8wNKdDQlK9tEk\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 4265,
    "path": "../public/mstile-150x150.png"
  },
  "/myd.png": {
    "type": "image/png",
    "etag": "\"b5d-wzjZpQbQh94Z3C1alp8t4rUXLJ4\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 2909,
    "path": "../public/myd.png"
  },
  "/star_footer.svg": {
    "type": "image/svg+xml",
    "etag": "\"330-Kk4P9sbA8YE4USdDBUFyH7dkEV4\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 816,
    "path": "../public/star_footer.svg"
  },
  "/transparent.svg": {
    "type": "image/svg+xml",
    "etag": "\"26b-s30Eo0i+BdjmdTjQ74R3mK57S50\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 619,
    "path": "../public/transparent.svg"
  },
  "/umaestro_banner.png": {
    "type": "image/png",
    "etag": "\"1970a-CBpnwBk/B9n+GmE5uG3QnGKPpic\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 104202,
    "path": "../public/umaestro_banner.png"
  },
  "/characters/red_pink_group.png": {
    "type": "image/png",
    "etag": "\"63c53-iNl2cu9qv88+NAXc45coRsoA1Eg\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 408659,
    "path": "../public/characters/red_pink_group.png"
  },
  "/characters/robot_blue.png": {
    "type": "image/png",
    "etag": "\"20b7a-QzkpDBR4DQ7U+W8sTA1hloucN0w\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 134010,
    "path": "../public/characters/robot_blue.png"
  },
  "/characters/robot_yellow.png": {
    "type": "image/png",
    "etag": "\"2bdf3-bXN6M0IDxtcHocfUYCpgIusTh8M\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 179699,
    "path": "../public/characters/robot_yellow.png"
  },
  "/characters/tchating_character.png": {
    "type": "image/png",
    "etag": "\"259cd-00oJVg2EIoxRcD7D8FbXLrb9RFk\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 154061,
    "path": "../public/characters/tchating_character.png"
  },
  "/characters/wave_character.png": {
    "type": "image/png",
    "etag": "\"2d246-tzDL5RgAB8dig7VxjTcZ0xFpj3c\"",
    "mtime": "2022-08-31T20:12:23.110Z",
    "size": 184902,
    "path": "../public/characters/wave_character.png"
  },
  "/fonts/whitney-300.woff": {
    "type": "font/woff",
    "etag": "\"137f0-rzV939yynDhLb2Q10+CKh9Zp1MQ\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 79856,
    "path": "../public/fonts/whitney-300.woff"
  },
  "/fonts/whitney-300.woff2": {
    "type": "font/woff2",
    "etag": "\"5b94-isyJBePWH+wOeYKMjmZga8WEgLw\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 23444,
    "path": "../public/fonts/whitney-300.woff2"
  },
  "/fonts/whitney-400.woff": {
    "type": "font/woff",
    "etag": "\"12fd8-VQcBVZWZF24W8al1c0UF/YicpzQ\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 77784,
    "path": "../public/fonts/whitney-400.woff"
  },
  "/fonts/whitney-400.woff2": {
    "type": "font/woff2",
    "etag": "\"5ef8-6p/lFmOY6jy3aXsmIau6J6i6Rqk\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 24312,
    "path": "../public/fonts/whitney-400.woff2"
  },
  "/fonts/whitney-500.woff": {
    "type": "font/woff",
    "etag": "\"12bc8-biypbp7JWV0XOdkqZ3URsisc/Vk\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 76744,
    "path": "../public/fonts/whitney-500.woff"
  },
  "/fonts/whitney-500.woff2": {
    "type": "font/woff2",
    "etag": "\"5b18-Q99AsfqrNrGV1DfPi+r4tldp4o8\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 23320,
    "path": "../public/fonts/whitney-500.woff2"
  },
  "/fonts/whitney-600.woff": {
    "type": "font/woff",
    "etag": "\"14300-UuBPEEJELLz5xoAtLrI4GHS5QLs\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 82688,
    "path": "../public/fonts/whitney-600.woff"
  },
  "/fonts/whitney-600.woff2": {
    "type": "font/woff2",
    "etag": "\"6448-b0sd6UFLoFuhVOw+5Qs3XxrUVBI\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 25672,
    "path": "../public/fonts/whitney-600.woff2"
  },
  "/fonts/whitney-700.woff": {
    "type": "font/woff",
    "etag": "\"13880-/b2yGJ+1wdhSbqUHlhHKoY9QlZ8\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 80000,
    "path": "../public/fonts/whitney-700.woff"
  },
  "/fonts/whitney-700.woff2": {
    "type": "font/woff2",
    "etag": "\"5f7c-wQQwHhgSK6N7cBzkqguci6Wilqc\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 24444,
    "path": "../public/fonts/whitney-700.woff2"
  },
  "/shapes/arrow_l.svg": {
    "type": "image/svg+xml",
    "etag": "\"f7-m0rei9Jg+T6TuhWxiEJRV5/3WLQ\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 247,
    "path": "../public/shapes/arrow_l.svg"
  },
  "/shapes/arrow_r.svg": {
    "type": "image/svg+xml",
    "etag": "\"f5-fCf4s4pxBAXRQ90aEmFclVzExSw\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 245,
    "path": "../public/shapes/arrow_r.svg"
  },
  "/shapes/squares.svg": {
    "type": "image/svg+xml",
    "etag": "\"95d-+pVNulPO8M8zmRusj3p8/91DT8o\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 2397,
    "path": "../public/shapes/squares.svg"
  },
  "/shapes/tri_rect.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 0,
    "path": "../public/shapes/tri_rect.svg"
  },
  "/icons/bars.svg": {
    "type": "image/svg+xml",
    "etag": "\"424-m4JCMxBJC4OTbn5RJ4QxPts1y1Q\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1060,
    "path": "../public/icons/bars.svg"
  },
  "/icons/brackets.svg": {
    "type": "image/svg+xml",
    "etag": "\"5bc-mHUk5j+H9vd3G6BwulBYvJlFUoI\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1468,
    "path": "../public/icons/brackets.svg"
  },
  "/icons/cube.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b5-WxW0bY09IZmQcBwTiz4PI3eXYJY\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1205,
    "path": "../public/icons/cube.svg"
  },
  "/icons/discord.svg": {
    "type": "image/svg+xml",
    "etag": "\"87a-7FdF+OU6+fW1W0AMAFwTBMmpcaY\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 2170,
    "path": "../public/icons/discord.svg"
  },
  "/icons/double_chevron.svg": {
    "type": "image/svg+xml",
    "etag": "\"6c0-leZhjyHLJsiWUUm9VfC5SmJURBs\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1728,
    "path": "../public/icons/double_chevron.svg"
  },
  "/icons/eye.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d6-08Me9/rjsL0Stj3MJXDpJZMZr9Y\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 726,
    "path": "../public/icons/eye.svg"
  },
  "/icons/palette.svg": {
    "type": "image/svg+xml",
    "etag": "\"604-YRa6x/8RGDSvOKjGcYtiMhthaZo\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1540,
    "path": "../public/icons/palette.svg"
  },
  "/icons/star.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 0,
    "path": "../public/icons/star.svg"
  },
  "/icons/times.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 0,
    "path": "../public/icons/times.svg"
  },
  "/icons/twitter.svg": {
    "type": "image/svg+xml",
    "etag": "\"430-GD5mtYGTqPVixKEgSXrn9hlFRx0\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1072,
    "path": "../public/icons/twitter.svg"
  },
  "/icons/user.svg": {
    "type": "image/svg+xml",
    "etag": "\"487-n36z78bM1s/bRQs3Kv0W52Ct2Ys\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1159,
    "path": "../public/icons/user.svg"
  },
  "/icons/youtube.svg": {
    "type": "image/svg+xml",
    "etag": "\"298-pzPK42/f8ESTx+o3sp03MFr1YlA\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 664,
    "path": "../public/icons/youtube.svg"
  },
  "/tools/badges_discord_dark.png": {
    "type": "image/png",
    "etag": "\"881f-p+DfbuJ9ujZoGgLjaRYxY1K7rW0\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 34847,
    "path": "../public/tools/badges_discord_dark.png"
  },
  "/tools/badges_discord_light.png": {
    "type": "image/png",
    "etag": "\"7d68-TRl7PCE9Kr7h/7fzD+vFOwrqXJ4\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 32104,
    "path": "../public/tools/badges_discord_light.png"
  },
  "/tools/embed_discord_dark.png": {
    "type": "image/png",
    "etag": "\"14f19-dRRqJTMMPpQP5ar+5LWAROVU5Bk\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 85785,
    "path": "../public/tools/embed_discord_dark.png"
  },
  "/tools/embed_discord_light.png": {
    "type": "image/png",
    "etag": "\"10e17-fAe2uS56d0OyWLOwbhpnbi6/pRE\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 69143,
    "path": "../public/tools/embed_discord_light.png"
  },
  "/objects/cry.png": {
    "type": "image/png",
    "etag": "\"5ab-J17gR4UbgSGQE2WFf2mW4fgF6xQ\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1451,
    "path": "../public/objects/cry.png"
  },
  "/objects/fire.png": {
    "type": "image/png",
    "etag": "\"3f7-Yxdh3PIWHGmKIy4nz7D+bguB9kQ\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1015,
    "path": "../public/objects/fire.png"
  },
  "/objects/happy.png": {
    "type": "image/png",
    "etag": "\"547-wfNwHg21M1aAmz7C1OggWqP9jLE\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1351,
    "path": "../public/objects/happy.png"
  },
  "/objects/love.png": {
    "type": "image/png",
    "etag": "\"5b3-OItCu0byagmL+kXyf8rQJSXZXi0\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1459,
    "path": "../public/objects/love.png"
  },
  "/objects/poop.png": {
    "type": "image/png",
    "etag": "\"623-fnEQSlVZ45RSnkayHqJXbNaeN2w\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1571,
    "path": "../public/objects/poop.png"
  },
  "/objects/sad.png": {
    "type": "image/png",
    "etag": "\"2511-sonlk6u/Mllu6CxKqlA5qOWaK8E\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 9489,
    "path": "../public/objects/sad.png"
  },
  "/objects/star.png": {
    "type": "image/png",
    "etag": "\"20a8-hBLQeMtd5/ApT6lyv1+wmNiztEQ\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 8360,
    "path": "../public/objects/star.png"
  },
  "/objects/star2.png": {
    "type": "image/png",
    "etag": "\"2d27-mySwv/E4eHtf5sg+zPrXkzPsuTE\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 11559,
    "path": "../public/objects/star2.png"
  },
  "/objects/star3.png": {
    "type": "image/png",
    "etag": "\"12da-EhZypoALujrKbF3cdQTirsDWPg8\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 4826,
    "path": "../public/objects/star3.png"
  },
  "/objects/surprised.png": {
    "type": "image/png",
    "etag": "\"56b-TcpeeXU6/S/Ci0T/xupuHSYMXC4\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1387,
    "path": "../public/objects/surprised.png"
  },
  "/objects/thinking.png": {
    "type": "image/png",
    "etag": "\"5ce-7K9Gpw620ZIX5JGN6gGBcNeF6XE\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1486,
    "path": "../public/objects/thinking.png"
  },
  "/objects/tired.png": {
    "type": "image/png",
    "etag": "\"59f-7lDrje7tPdQy1ZRYWQ68yBA0/vw\"",
    "mtime": "2022-08-31T20:12:23.126Z",
    "size": 1439,
    "path": "../public/objects/tired.png"
  },
  "/objects/tools.png": {
    "type": "image/png",
    "etag": "\"1c1f8e-5kENGrG4lYOD6sLttqRgPxPVhms\"",
    "mtime": "2022-08-31T20:12:23.142Z",
    "size": 1843086,
    "path": "../public/objects/tools.png"
  },
  "/_nuxt/404.e3f881b1.js": {
    "type": "application/javascript",
    "etag": "\"3dc-Dq1147gDp6a/zf6rII5+vr5pZeo\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 988,
    "path": "../public/_nuxt/404.e3f881b1.js"
  },
  "/_nuxt/auth.7a0efc4b.js": {
    "type": "application/javascript",
    "etag": "\"a6-UlrC1G+3sRYlA0V4TLrsGloOW7U\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 166,
    "path": "../public/_nuxt/auth.7a0efc4b.js"
  },
  "/_nuxt/badges.8903f354.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"373-4gCrlYoCNpz9Kbb/V18xFg8P70E\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 883,
    "path": "../public/_nuxt/badges.8903f354.css"
  },
  "/_nuxt/badges.e25bf705.js": {
    "type": "application/javascript",
    "etag": "\"92be-OC0aOvjO3+ENyK819Ac68yaYznQ\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 37566,
    "path": "../public/_nuxt/badges.e25bf705.js"
  },
  "/_nuxt/bots.3e2b0b01.js": {
    "type": "application/javascript",
    "etag": "\"1235-Gw7JyF5Xtblds9EeRMvFJVRUzx0\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 4661,
    "path": "../public/_nuxt/bots.3e2b0b01.js"
  },
  "/_nuxt/callback.862201de.js": {
    "type": "application/javascript",
    "etag": "\"2c2-r7zy8G6ayFsXBmNRmMhJFvqbRYc\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 706,
    "path": "../public/_nuxt/callback.862201de.js"
  },
  "/_nuxt/Card.99373d40.js": {
    "type": "application/javascript",
    "etag": "\"19a-e0/U7tx2zU1RZbLLU2Xa3WMh7e0\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 410,
    "path": "../public/_nuxt/Card.99373d40.js"
  },
  "/_nuxt/cgu.8686cdf5.js": {
    "type": "application/javascript",
    "etag": "\"282d-AHPFwu7CMrYU5zcKU1wH4MAC8pU\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 10285,
    "path": "../public/_nuxt/cgu.8686cdf5.js"
  },
  "/_nuxt/default.6438c009.js": {
    "type": "application/javascript",
    "etag": "\"47a3-T/oY9d/R9mo2SWmlHm9ba2KetR0\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 18339,
    "path": "../public/_nuxt/default.6438c009.js"
  },
  "/_nuxt/discord.6d29de38.js": {
    "type": "application/javascript",
    "etag": "\"4d-+bHNeYOFxwy+6WITU48NVgzmS6M\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 77,
    "path": "../public/_nuxt/discord.6d29de38.js"
  },
  "/_nuxt/embed.10003036.js": {
    "type": "application/javascript",
    "etag": "\"87b6-EtO4CWi7vXPVAdh1/Fru1Yj9VgY\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 34742,
    "path": "../public/_nuxt/embed.10003036.js"
  },
  "/_nuxt/embed.a608e693.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15c-5GzNTpDYQf+5V52hLTN76THN/Yg\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 348,
    "path": "../public/_nuxt/embed.a608e693.css"
  },
  "/_nuxt/empty.1888cb12.js": {
    "type": "application/javascript",
    "etag": "\"d5-JdW0I9tqzt2uaINGdBLp9bAv1Go\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 213,
    "path": "../public/_nuxt/empty.1888cb12.js"
  },
  "/_nuxt/entry.9d2c9a03.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13e4f-KohAFoLOIQ2VLh6Z88I5fZUIGU8\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 81487,
    "path": "../public/_nuxt/entry.9d2c9a03.css"
  },
  "/_nuxt/entry.d35adefc.js": {
    "type": "application/javascript",
    "etag": "\"194b6e-BCdwSDegyhHlAz3cup15NWxw1po\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 1657710,
    "path": "../public/_nuxt/entry.d35adefc.js"
  },
  "/_nuxt/error-404.4e208112.js": {
    "type": "application/javascript",
    "etag": "\"8af-T0ywPIzC6cmgjWlmAxUSkgfgWUE\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 2223,
    "path": "../public/_nuxt/error-404.4e208112.js"
  },
  "/_nuxt/error-404.7ac8d696.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-hMaHvGSS567GOQu1fyihVNKt+g0\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.7ac8d696.css"
  },
  "/_nuxt/error-500.c47d1582.js": {
    "type": "application/javascript",
    "etag": "\"758-XpGB+Kc8aUpZQ0qY+KeQdTkEisc\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 1880,
    "path": "../public/_nuxt/error-500.c47d1582.js"
  },
  "/_nuxt/error-500.df34e930.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-souUGRz1nN84Czc1X+mQFJyAKYM\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.df34e930.css"
  },
  "/_nuxt/error-component.cac4983c.js": {
    "type": "application/javascript",
    "etag": "\"439-SwgpT9PLsjfN4x+0K/9Q/qp0y+c\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.cac4983c.js"
  },
  "/_nuxt/footer.b38d2261.js": {
    "type": "application/javascript",
    "etag": "\"14d-DzbLLig4TEi8TH8TljYLZgs/pbg\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 333,
    "path": "../public/_nuxt/footer.b38d2261.js"
  },
  "/_nuxt/Header.274e1e0e.js": {
    "type": "application/javascript",
    "etag": "\"4db-miGXJtLUiFG/dLqx6kQyHz+faCQ\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 1243,
    "path": "../public/_nuxt/Header.274e1e0e.js"
  },
  "/_nuxt/hire.29ac45a2.js": {
    "type": "application/javascript",
    "etag": "\"1a27-0t5IYgsLHCPDNQPdcUQOrI7e8E4\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 6695,
    "path": "../public/_nuxt/hire.29ac45a2.js"
  },
  "/_nuxt/index.443d9e85.js": {
    "type": "application/javascript",
    "etag": "\"f04-XQVBI/ijRJYjZzHxM0GjOB/wB8I\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 3844,
    "path": "../public/_nuxt/index.443d9e85.js"
  },
  "/_nuxt/index.613217c2.js": {
    "type": "application/javascript",
    "etag": "\"15d26-9191gY6kpSUCoWJIytnw047VL/0\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 89382,
    "path": "../public/_nuxt/index.613217c2.js"
  },
  "/_nuxt/index.88acc1b4.js": {
    "type": "application/javascript",
    "etag": "\"1cd0-1t0/TPmTH4Hb0PAJScnk+geR+ss\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 7376,
    "path": "../public/_nuxt/index.88acc1b4.js"
  },
  "/_nuxt/index.c0f10174.js": {
    "type": "application/javascript",
    "etag": "\"13a7-ywFlWJR5TJ1KUi6LcMtVroFx9Ho\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 5031,
    "path": "../public/_nuxt/index.c0f10174.js"
  },
  "/_nuxt/index.d2d0727c.js": {
    "type": "application/javascript",
    "etag": "\"8ac-JZRRuShkNFlb5Y/v9DsHoHokNHs\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 2220,
    "path": "../public/_nuxt/index.d2d0727c.js"
  },
  "/_nuxt/logo.9a76964f.js": {
    "type": "application/javascript",
    "etag": "\"44-JaHdJS7b3GJj6sfvIwWhgQhdHoE\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 68,
    "path": "../public/_nuxt/logo.9a76964f.js"
  },
  "/_nuxt/Navbar.1c01d054.js": {
    "type": "application/javascript",
    "etag": "\"1638-NYuEtK8gGyUHn/OIGgJ67Gs5uIg\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 5688,
    "path": "../public/_nuxt/Navbar.1c01d054.js"
  },
  "/_nuxt/Navbar.4d970144.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31-cRTzijSVm48YRwuyiVcgL8mTaHo\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 49,
    "path": "../public/_nuxt/Navbar.4d970144.css"
  },
  "/_nuxt/partners.baf5199f.js": {
    "type": "application/javascript",
    "etag": "\"a9b-oso3QeXxzmQRL95ceNAD+j6A/do\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 2715,
    "path": "../public/_nuxt/partners.baf5199f.js"
  },
  "/_nuxt/rates.063ab222.js": {
    "type": "application/javascript",
    "etag": "\"f29-aJC5VdtVuVpU3TsRQ799CopACMc\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 3881,
    "path": "../public/_nuxt/rates.063ab222.js"
  },
  "/_nuxt/Slider.082f2047.js": {
    "type": "application/javascript",
    "etag": "\"358-Ee0jWn72nAySjBU06vQu/mF1aDM\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 856,
    "path": "../public/_nuxt/Slider.082f2047.js"
  },
  "/_nuxt/squares.236acb7f.js": {
    "type": "application/javascript",
    "etag": "\"4e-ZkGZLqO3P3a/cseLlZHOoNY7SZw\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 78,
    "path": "../public/_nuxt/squares.236acb7f.js"
  },
  "/_nuxt/style.8118ace9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f08-8ymOsnbKCs7l2zX8+9ka7v8jhMk\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 32520,
    "path": "../public/_nuxt/style.8118ace9.css"
  },
  "/_nuxt/style.e3aa46e1.js": {
    "type": "application/javascript",
    "etag": "\"18a-xcNkSnb1v9xYSQ3Vw90hJq311ko\"",
    "mtime": "2022-09-04T16:16:42.204Z",
    "size": 394,
    "path": "../public/_nuxt/style.e3aa46e1.js"
  },
  "/_nuxt/suggestions.619cb9d8.js": {
    "type": "application/javascript",
    "etag": "\"7bc-uK8/00JGLkrbCS0nqp4K58RyifA\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 1980,
    "path": "../public/_nuxt/suggestions.619cb9d8.js"
  },
  "/_nuxt/SunIcon.b52a9eb5.js": {
    "type": "application/javascript",
    "etag": "\"311-1vepVheZmrj6jGsptKwMyAbYFFw\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 785,
    "path": "../public/_nuxt/SunIcon.b52a9eb5.js"
  },
  "/_nuxt/Testimonial.54153cf3.js": {
    "type": "application/javascript",
    "etag": "\"72f-tuuv5tCwrMaB5m3kotmYkVnScPc\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 1839,
    "path": "../public/_nuxt/Testimonial.54153cf3.js"
  },
  "/_nuxt/_slug_.6ce71552.js": {
    "type": "application/javascript",
    "etag": "\"c35-iHKxS+I76Ux/qT8YoBCEMel7dCA\"",
    "mtime": "2022-09-04T16:16:42.201Z",
    "size": 3125,
    "path": "../public/_nuxt/_slug_.6ce71552.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, id + "/index.html" + encoding]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_tIfWpD = () => import('./message.mjs');
const _lazy_NQyDO0 = () => import('./roles.mjs');
const _lazy_Yae2oU = () => import('./_role_.patch.mjs');
const _lazy_8kEJbu = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/message', handler: _lazy_tIfWpD, lazy: true, middleware: false, method: undefined },
  { route: '/api/guilds/:id/roles', handler: _lazy_NQyDO0, lazy: true, middleware: false, method: undefined },
  { route: '/api/guilds/:id/:role', handler: _lazy_Yae2oU, lazy: true, middleware: false, method: "patch" },
  { route: '/__nuxt_error', handler: _lazy_8kEJbu, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_8kEJbu, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
