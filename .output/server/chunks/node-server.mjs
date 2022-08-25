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
    description: "",
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
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error2) => {
    console.error("[nitro] Error while generating error response", error2);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/createur_embed.png": {
    "type": "image/png",
    "etag": "\"10e17-fAe2uS56d0OyWLOwbhpnbi6/pRE\"",
    "mtime": "2022-08-22T14:26:09.734Z",
    "path": "../public/createur_embed.png"
  },
  "/default_avatar.svg": {
    "type": "image/svg+xml",
    "etag": "\"30c-69k7PAnibZ6byAZIe8Vj/8rmlbI\"",
    "mtime": "2022-08-23T16:14:32.874Z",
    "path": "../public/default_avatar.svg"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"28b-M3zf0ONne5glDC1znIsiA75+tUg\"",
    "mtime": "2022-07-15T15:13:59.000Z",
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"440-yzjkHCZZrLHPlvtZbGIdxlNVXfg\"",
    "mtime": "2022-07-15T15:13:59.000Z",
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-QUzo6tRl/J6FR7TT1g9WhJpICJc\"",
    "mtime": "2022-07-15T15:13:59.000Z",
    "path": "../public/favicon.ico"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a1-qJmyW6bbzsGnpnSa96wAYZW5ZVU\"",
    "mtime": "2022-08-22T12:55:05.268Z",
    "path": "../public/logo.svg"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"24e1-5nhL+SfKdgJR1YXmnarKrbKZAOQ\"",
    "mtime": "2022-08-25T13:00:19.231Z",
    "path": "../public/manifest.json"
  },
  "/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"10a9-hDQltTMqBH0hho8wNKdDQlK9tEk\"",
    "mtime": "2022-07-15T15:14:00.000Z",
    "path": "../public/mstile-150x150.png"
  },
  "/myd.png": {
    "type": "image/png",
    "etag": "\"b5d-wzjZpQbQh94Z3C1alp8t4rUXLJ4\"",
    "mtime": "2022-04-25T20:58:00.571Z",
    "path": "../public/myd.png"
  },
  "/star_footer.svg": {
    "type": "image/svg+xml",
    "etag": "\"32e-KMEAX3Inop4tHdBaAvgy/u18mmg\"",
    "mtime": "2022-08-22T20:10:41.373Z",
    "path": "../public/star_footer.svg"
  },
  "/transparent.svg": {
    "type": "image/svg+xml",
    "etag": "\"262-X+vY4XIvTlJaFs3oEQgqebqugSo\"",
    "mtime": "2022-08-15T12:20:26.817Z",
    "path": "../public/transparent.svg"
  },
  "/umaestro_banner.png": {
    "type": "image/png",
    "etag": "\"1970a-CBpnwBk/B9n+GmE5uG3QnGKPpic\"",
    "mtime": "2022-06-20T12:33:04.803Z",
    "path": "../public/umaestro_banner.png"
  },
  "/characters/red_pink_group.png": {
    "type": "image/png",
    "etag": "\"63c53-iNl2cu9qv88+NAXc45coRsoA1Eg\"",
    "mtime": "2022-04-26T08:38:47.275Z",
    "path": "../public/characters/red_pink_group.png"
  },
  "/characters/robot_blue.png": {
    "type": "image/png",
    "etag": "\"20b7a-QzkpDBR4DQ7U+W8sTA1hloucN0w\"",
    "mtime": "2022-04-17T20:57:00.540Z",
    "path": "../public/characters/robot_blue.png"
  },
  "/characters/robot_yellow.png": {
    "type": "image/png",
    "etag": "\"2bdf3-bXN6M0IDxtcHocfUYCpgIusTh8M\"",
    "mtime": "2022-04-17T19:57:29.385Z",
    "path": "../public/characters/robot_yellow.png"
  },
  "/characters/tchating_character.png": {
    "type": "image/png",
    "etag": "\"259cd-00oJVg2EIoxRcD7D8FbXLrb9RFk\"",
    "mtime": "2022-04-09T16:33:09.964Z",
    "path": "../public/characters/tchating_character.png"
  },
  "/characters/wave_character.png": {
    "type": "image/png",
    "etag": "\"2d246-tzDL5RgAB8dig7VxjTcZ0xFpj3c\"",
    "mtime": "2022-04-09T23:00:12.777Z",
    "path": "../public/characters/wave_character.png"
  },
  "/fonts/whitney-300.woff": {
    "type": "font/woff",
    "etag": "\"137f0-rzV939yynDhLb2Q10+CKh9Zp1MQ\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-300.woff"
  },
  "/fonts/whitney-300.woff2": {
    "type": "font/woff2",
    "etag": "\"5b94-isyJBePWH+wOeYKMjmZga8WEgLw\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-300.woff2"
  },
  "/fonts/whitney-400.woff": {
    "type": "font/woff",
    "etag": "\"12fd8-VQcBVZWZF24W8al1c0UF/YicpzQ\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-400.woff"
  },
  "/fonts/whitney-400.woff2": {
    "type": "font/woff2",
    "etag": "\"5ef8-6p/lFmOY6jy3aXsmIau6J6i6Rqk\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-400.woff2"
  },
  "/fonts/whitney-500.woff": {
    "type": "font/woff",
    "etag": "\"12bc8-biypbp7JWV0XOdkqZ3URsisc/Vk\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-500.woff"
  },
  "/fonts/whitney-500.woff2": {
    "type": "font/woff2",
    "etag": "\"5b18-Q99AsfqrNrGV1DfPi+r4tldp4o8\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-500.woff2"
  },
  "/fonts/whitney-600.woff": {
    "type": "font/woff",
    "etag": "\"14300-UuBPEEJELLz5xoAtLrI4GHS5QLs\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-600.woff"
  },
  "/fonts/whitney-600.woff2": {
    "type": "font/woff2",
    "etag": "\"6448-b0sd6UFLoFuhVOw+5Qs3XxrUVBI\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-600.woff2"
  },
  "/fonts/whitney-700.woff": {
    "type": "font/woff",
    "etag": "\"13880-/b2yGJ+1wdhSbqUHlhHKoY9QlZ8\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-700.woff"
  },
  "/fonts/whitney-700.woff2": {
    "type": "font/woff2",
    "etag": "\"5f7c-wQQwHhgSK6N7cBzkqguci6Wilqc\"",
    "mtime": "2021-11-24T15:02:43.000Z",
    "path": "../public/fonts/whitney-700.woff2"
  },
  "/icons/bars.svg": {
    "type": "image/svg+xml",
    "etag": "\"421-CDAjgz1VmxkCNgpd1LZWvw7lTjM\"",
    "mtime": "2022-04-10T17:22:44.083Z",
    "path": "../public/icons/bars.svg"
  },
  "/icons/brackets.svg": {
    "type": "image/svg+xml",
    "etag": "\"5b8-UW4TMFynHdhPGld9kEnkoFTbvKQ\"",
    "mtime": "2022-04-09T16:11:06.308Z",
    "path": "../public/icons/brackets.svg"
  },
  "/icons/cube.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b1-kzJIJCXi2T/fw/fiXbl4tavssUo\"",
    "mtime": "2022-04-09T15:12:27.187Z",
    "path": "../public/icons/cube.svg"
  },
  "/icons/discord.svg": {
    "type": "image/svg+xml",
    "etag": "\"870-kv6argDpeRF+FIwuRXLt8gZc4XY\"",
    "mtime": "2022-08-22T13:26:09.909Z",
    "path": "../public/icons/discord.svg"
  },
  "/icons/double_chevron.svg": {
    "type": "image/svg+xml",
    "etag": "\"6bc-9QgAjDNTvVE8S2sJzMP/DcodVJs\"",
    "mtime": "2022-08-23T20:49:48.656Z",
    "path": "../public/icons/double_chevron.svg"
  },
  "/icons/eye.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d2-LvT6y9qqlZjIlzpaIvQznujAr1Y\"",
    "mtime": "2022-04-09T15:35:05.980Z",
    "path": "../public/icons/eye.svg"
  },
  "/icons/palette.svg": {
    "type": "image/svg+xml",
    "etag": "\"5fe-PImueV9DFTGl7s/ohJPmX5zSxQY\"",
    "mtime": "2022-04-09T16:11:19.965Z",
    "path": "../public/icons/palette.svg"
  },
  "/icons/star.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-07-20T16:57:27.970Z",
    "path": "../public/icons/star.svg"
  },
  "/icons/times.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-04-10T17:24:41.642Z",
    "path": "../public/icons/times.svg"
  },
  "/icons/twitter.svg": {
    "type": "image/svg+xml",
    "etag": "\"42d-OlZMUNdpgT2ZHi73HSvZbBo5q9k\"",
    "mtime": "2022-08-22T15:12:21.402Z",
    "path": "../public/icons/twitter.svg"
  },
  "/icons/user.svg": {
    "type": "image/svg+xml",
    "etag": "\"484-QKuyGefHw+oAdsGW9Oy8JzzIPmo\"",
    "mtime": "2022-04-09T15:09:33.997Z",
    "path": "../public/icons/user.svg"
  },
  "/icons/youtube.svg": {
    "type": "image/svg+xml",
    "etag": "\"295-VYiFTDtVJsRSUVaXw80pOKrNfh0\"",
    "mtime": "2022-08-22T15:12:54.418Z",
    "path": "../public/icons/youtube.svg"
  },
  "/objects/cry.png": {
    "type": "image/png",
    "etag": "\"5ab-J17gR4UbgSGQE2WFf2mW4fgF6xQ\"",
    "mtime": "2022-04-16T22:09:04.740Z",
    "path": "../public/objects/cry.png"
  },
  "/objects/fire.png": {
    "type": "image/png",
    "etag": "\"3f7-Yxdh3PIWHGmKIy4nz7D+bguB9kQ\"",
    "mtime": "2022-04-16T22:09:04.745Z",
    "path": "../public/objects/fire.png"
  },
  "/objects/happy.png": {
    "type": "image/png",
    "etag": "\"547-wfNwHg21M1aAmz7C1OggWqP9jLE\"",
    "mtime": "2022-04-16T22:09:04.742Z",
    "path": "../public/objects/happy.png"
  },
  "/objects/love.png": {
    "type": "image/png",
    "etag": "\"5b3-OItCu0byagmL+kXyf8rQJSXZXi0\"",
    "mtime": "2022-04-16T22:09:04.743Z",
    "path": "../public/objects/love.png"
  },
  "/objects/poop.png": {
    "type": "image/png",
    "etag": "\"623-fnEQSlVZ45RSnkayHqJXbNaeN2w\"",
    "mtime": "2022-04-16T22:03:01.369Z",
    "path": "../public/objects/poop.png"
  },
  "/objects/sad.png": {
    "type": "image/png",
    "etag": "\"2511-sonlk6u/Mllu6CxKqlA5qOWaK8E\"",
    "mtime": "2022-05-01T18:41:29.347Z",
    "path": "../public/objects/sad.png"
  },
  "/objects/star.png": {
    "type": "image/png",
    "etag": "\"20a8-hBLQeMtd5/ApT6lyv1+wmNiztEQ\"",
    "mtime": "2022-04-09T17:40:43.452Z",
    "path": "../public/objects/star.png"
  },
  "/objects/star2.png": {
    "type": "image/png",
    "etag": "\"2d27-mySwv/E4eHtf5sg+zPrXkzPsuTE\"",
    "mtime": "2022-04-09T17:43:53.447Z",
    "path": "../public/objects/star2.png"
  },
  "/objects/star3.png": {
    "type": "image/png",
    "etag": "\"12da-EhZypoALujrKbF3cdQTirsDWPg8\"",
    "mtime": "2022-04-09T17:45:17.372Z",
    "path": "../public/objects/star3.png"
  },
  "/objects/surprised.png": {
    "type": "image/png",
    "etag": "\"56b-TcpeeXU6/S/Ci0T/xupuHSYMXC4\"",
    "mtime": "2022-04-16T22:09:04.742Z",
    "path": "../public/objects/surprised.png"
  },
  "/objects/thinking.png": {
    "type": "image/png",
    "etag": "\"5ce-7K9Gpw620ZIX5JGN6gGBcNeF6XE\"",
    "mtime": "2022-04-16T22:09:04.742Z",
    "path": "../public/objects/thinking.png"
  },
  "/objects/tired.png": {
    "type": "image/png",
    "etag": "\"59f-7lDrje7tPdQy1ZRYWQ68yBA0/vw\"",
    "mtime": "2022-04-16T22:09:04.741Z",
    "path": "../public/objects/tired.png"
  },
  "/objects/tools.png": {
    "type": "image/png",
    "etag": "\"1c1f8e-5kENGrG4lYOD6sLttqRgPxPVhms\"",
    "mtime": "2022-04-09T15:25:59.708Z",
    "path": "../public/objects/tools.png"
  },
  "/shapes/arrow_l.svg": {
    "type": "image/svg+xml",
    "etag": "\"f4-avNQTmY6eup3LoMlYRT2SS4D04s\"",
    "mtime": "2022-08-22T13:27:22.460Z",
    "path": "../public/shapes/arrow_l.svg"
  },
  "/shapes/arrow_r.svg": {
    "type": "image/svg+xml",
    "etag": "\"f2-RNHDvcf35lqDkdfiE3/VUyE73pE\"",
    "mtime": "2022-08-22T13:27:27.938Z",
    "path": "../public/shapes/arrow_r.svg"
  },
  "/shapes/squares.svg": {
    "type": "image/svg+xml",
    "etag": "\"93b-/vZFwG6YRqVxGjCHeWiU9l8lT/A\"",
    "mtime": "2022-08-22T13:37:35.643Z",
    "path": "../public/shapes/squares.svg"
  },
  "/shapes/tri_rect.svg": {
    "type": "image/svg+xml",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-04-09T17:12:54.418Z",
    "path": "../public/shapes/tri_rect.svg"
  },
  "/tools/badges_discord_dark.png": {
    "type": "image/png",
    "etag": "\"881f-p+DfbuJ9ujZoGgLjaRYxY1K7rW0\"",
    "mtime": "2022-08-22T17:18:59.063Z",
    "path": "../public/tools/badges_discord_dark.png"
  },
  "/tools/badges_discord_light.png": {
    "type": "image/png",
    "etag": "\"7d68-TRl7PCE9Kr7h/7fzD+vFOwrqXJ4\"",
    "mtime": "2022-08-22T17:19:35.832Z",
    "path": "../public/tools/badges_discord_light.png"
  },
  "/tools/embed_discord_dark.png": {
    "type": "image/png",
    "etag": "\"14f19-dRRqJTMMPpQP5ar+5LWAROVU5Bk\"",
    "mtime": "2022-08-22T16:31:13.973Z",
    "path": "../public/tools/embed_discord_dark.png"
  },
  "/tools/embed_discord_light.png": {
    "type": "image/png",
    "etag": "\"10e17-fAe2uS56d0OyWLOwbhpnbi6/pRE\"",
    "mtime": "2022-08-22T16:31:21.678Z",
    "path": "../public/tools/embed_discord_light.png"
  },
  "/_nuxt/404.71f5e8d7.mjs": {
    "type": "application/javascript",
    "etag": "\"3d9-I6UUIapU2YBC6lXWyhibjDgWN6g\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/404.71f5e8d7.mjs"
  },
  "/_nuxt/auth.34672cb0.mjs": {
    "type": "application/javascript",
    "etag": "\"a8-FFDpd/4CmtDXXpCGvkl9g9uv5/U\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/auth.34672cb0.mjs"
  },
  "/_nuxt/badges.55edeeff.mjs": {
    "type": "application/javascript",
    "etag": "\"92a9-4KLMsAn7LxYvgxqYVRklt8JDRYI\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/badges.55edeeff.mjs"
  },
  "/_nuxt/badges.8903f354.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"373-4gCrlYoCNpz9Kbb/V18xFg8P70E\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/badges.8903f354.css"
  },
  "/_nuxt/bots.3e1492b3.mjs": {
    "type": "application/javascript",
    "etag": "\"1229-i/ul1pDJoXbuktHFGsK9ED2a/kE\"",
    "mtime": "2022-08-25T13:00:19.228Z",
    "path": "../public/_nuxt/bots.3e1492b3.mjs"
  },
  "/_nuxt/callback.c44c4625.mjs": {
    "type": "application/javascript",
    "etag": "\"28c-cI8gTXr425Nqy9Ivg1Cl7HHkwZM\"",
    "mtime": "2022-08-25T13:00:19.184Z",
    "path": "../public/_nuxt/callback.c44c4625.mjs"
  },
  "/_nuxt/Card.a028af25.mjs": {
    "type": "application/javascript",
    "etag": "\"19b-S/K5YwNEXvdku1HEZv4UifemEh8\"",
    "mtime": "2022-08-25T13:00:19.183Z",
    "path": "../public/_nuxt/Card.a028af25.mjs"
  },
  "/_nuxt/cgu.48a696df.mjs": {
    "type": "application/javascript",
    "etag": "\"2819-VmZiRtu4a1XygXZnLMpGZms6/5k\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/cgu.48a696df.mjs"
  },
  "/_nuxt/default.0653bdef.mjs": {
    "type": "application/javascript",
    "etag": "\"4792-y4UOnvkwUFBykvl4YNp4Eq6D/iU\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/default.0653bdef.mjs"
  },
  "/_nuxt/discord.9c29bdc4.mjs": {
    "type": "application/javascript",
    "etag": "\"4d-+bHNeYOFxwy+6WITU48NVgzmS6M\"",
    "mtime": "2022-08-25T13:00:19.187Z",
    "path": "../public/_nuxt/discord.9c29bdc4.mjs"
  },
  "/_nuxt/embed.4c2b2a55.mjs": {
    "type": "application/javascript",
    "etag": "\"8794-dgjv2s/G0Zg8wEoG3M0u3sdDUsc\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/embed.4c2b2a55.mjs"
  },
  "/_nuxt/embed.a608e693.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15c-5GzNTpDYQf+5V52hLTN76THN/Yg\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/embed.a608e693.css"
  },
  "/_nuxt/empty.41fce550.mjs": {
    "type": "application/javascript",
    "etag": "\"d6-RESC/06OEwmzyjFheWULbjx8il0\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/empty.41fce550.mjs"
  },
  "/_nuxt/entry.1c481fd3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10a4d-F2rrqDkSVby/NLFShHWbtv25dDs\"",
    "mtime": "2022-08-25T13:00:19.231Z",
    "path": "../public/_nuxt/entry.1c481fd3.css"
  },
  "/_nuxt/entry.751c4a66.mjs": {
    "type": "application/javascript",
    "etag": "\"1676826-Ic0OYKG/VjC6+cO/gbZi2x+UEMU\"",
    "mtime": "2022-08-25T13:00:19.255Z",
    "path": "../public/_nuxt/entry.751c4a66.mjs"
  },
  "/_nuxt/error-404.31c055db.mjs": {
    "type": "application/javascript",
    "etag": "\"8b0-rr3IgPN1JVUhNI5e/7FzO7tpiV0\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/error-404.31c055db.mjs"
  },
  "/_nuxt/error-404.7ac8d696.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-hMaHvGSS567GOQu1fyihVNKt+g0\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/error-404.7ac8d696.css"
  },
  "/_nuxt/error-500.58c33041.mjs": {
    "type": "application/javascript",
    "etag": "\"759-CilzSOsuNC5we4KB/hxYLWIF8YE\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/error-500.58c33041.mjs"
  },
  "/_nuxt/error-500.df34e930.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-souUGRz1nN84Czc1X+mQFJyAKYM\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/error-500.df34e930.css"
  },
  "/_nuxt/error-component.408a55e3.mjs": {
    "type": "application/javascript",
    "etag": "\"44f-rQjrunu0hkfNkl9xv58ZECi1AJc\"",
    "mtime": "2022-08-25T13:00:19.180Z",
    "path": "../public/_nuxt/error-component.408a55e3.mjs"
  },
  "/_nuxt/footer.5f67210c.mjs": {
    "type": "application/javascript",
    "etag": "\"156-llzb+If05VYy/B17wvhvRz3u1hw\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/footer.5f67210c.mjs"
  },
  "/_nuxt/Header.5efce0a7.mjs": {
    "type": "application/javascript",
    "etag": "\"511-uhdS+x43runiALh0lv4GmnwBW3A\"",
    "mtime": "2022-08-25T13:00:19.228Z",
    "path": "../public/_nuxt/Header.5efce0a7.mjs"
  },
  "/_nuxt/hire.a63e2f9c.mjs": {
    "type": "application/javascript",
    "etag": "\"1a26-rkeHGexTTBOKO4hURY1J+Fb/JYI\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/hire.a63e2f9c.mjs"
  },
  "/_nuxt/index.6783e5d5.mjs": {
    "type": "application/javascript",
    "etag": "\"8ac-NTRMmbS5Cca7Pmy3L9PxLB1vCK4\"",
    "mtime": "2022-08-25T13:00:19.184Z",
    "path": "../public/_nuxt/index.6783e5d5.mjs"
  },
  "/_nuxt/index.68b15e44.mjs": {
    "type": "application/javascript",
    "etag": "\"1d16-hkceJlLdRxufZ2DQjOItjFqwWFM\"",
    "mtime": "2022-08-25T13:00:19.181Z",
    "path": "../public/_nuxt/index.68b15e44.mjs"
  },
  "/_nuxt/index.9209a67f.mjs": {
    "type": "application/javascript",
    "etag": "\"13a5-855CoZZb8WY4usTxS4G4Vj34x9o\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/index.9209a67f.mjs"
  },
  "/_nuxt/index.a51f8a0e.mjs": {
    "type": "application/javascript",
    "etag": "\"15d48-EJAWLZtVQNG0ljd2QicePX5bOdg\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/index.a51f8a0e.mjs"
  },
  "/_nuxt/index.ffc78539.mjs": {
    "type": "application/javascript",
    "etag": "\"ef8-uIOSHJR2TMlvHM1jTjyo45ZnD4c\"",
    "mtime": "2022-08-25T13:00:19.182Z",
    "path": "../public/_nuxt/index.ffc78539.mjs"
  },
  "/_nuxt/logo.a1814e05.mjs": {
    "type": "application/javascript",
    "etag": "\"44-JaHdJS7b3GJj6sfvIwWhgQhdHoE\"",
    "mtime": "2022-08-25T13:00:19.228Z",
    "path": "../public/_nuxt/logo.a1814e05.mjs"
  },
  "/_nuxt/Navbar.538af840.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31-ld8aH1U1Q+NXnTUbM4hi0KJan7k\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/Navbar.538af840.css"
  },
  "/_nuxt/Navbar.eece70ef.mjs": {
    "type": "application/javascript",
    "etag": "\"15c5-Go028DGmKGwJQIBCasMILOAij7s\"",
    "mtime": "2022-08-25T13:00:19.229Z",
    "path": "../public/_nuxt/Navbar.eece70ef.mjs"
  },
  "/_nuxt/partners.74dc8936.mjs": {
    "type": "application/javascript",
    "etag": "\"a8c-QE5s6/LtH8SshNaiE2ArsgiLI5Q\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/partners.74dc8936.mjs"
  },
  "/_nuxt/rates.80a0ff66.mjs": {
    "type": "application/javascript",
    "etag": "\"f23-Ql5oEsBX+1tB08smkYCaDpTF69w\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/rates.80a0ff66.mjs"
  },
  "/_nuxt/Slider.8bca60d7.mjs": {
    "type": "application/javascript",
    "etag": "\"359-ZmVaQkUruIVCbfy774wTL7qBbLM\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/Slider.8bca60d7.mjs"
  },
  "/_nuxt/squares.870ee49e.mjs": {
    "type": "application/javascript",
    "etag": "\"4e-ZkGZLqO3P3a/cseLlZHOoNY7SZw\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/squares.870ee49e.mjs"
  },
  "/_nuxt/style.2fb9c27a.mjs": {
    "type": "application/javascript",
    "etag": "\"154-3Y3eTEOzs1i1+YJxD0Xr9gQMi8E\"",
    "mtime": "2022-08-25T13:00:19.228Z",
    "path": "../public/_nuxt/style.2fb9c27a.mjs"
  },
  "/_nuxt/style.8118ace9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f08-8ymOsnbKCs7l2zX8+9ka7v8jhMk\"",
    "mtime": "2022-08-25T13:00:19.230Z",
    "path": "../public/_nuxt/style.8118ace9.css"
  },
  "/_nuxt/SunIcon.f1343996.mjs": {
    "type": "application/javascript",
    "etag": "\"312-LRs1l4t0V/ssgfQT29lPzuGAFHY\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/SunIcon.f1343996.mjs"
  },
  "/_nuxt/Testimonial.8c4673fa.mjs": {
    "type": "application/javascript",
    "etag": "\"730-JoggFVaWCnnD7mbjLRlQL9B4SOA\"",
    "mtime": "2022-08-25T13:00:19.196Z",
    "path": "../public/_nuxt/Testimonial.8c4673fa.mjs"
  },
  "/_nuxt/_slug_.42528e42.mjs": {
    "type": "application/javascript",
    "etag": "\"c34-MGhEGOnyarAVxGN/eAEouob/ly8\"",
    "mtime": "2022-08-25T13:00:19.180Z",
    "path": "../public/_nuxt/_slug_.42528e42.mjs"
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
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
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
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_vFcjKY = () => import('./message.mjs');
const _lazy_cMyDJ0 = () => import('./roles.mjs');
const _lazy_OKh16V = () => import('./_role_.patch.mjs');
const _lazy_ckSEWR = () => import('./renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/message', handler: _lazy_vFcjKY, lazy: true, middleware: false, method: undefined },
  { route: '/api/guilds/:id/roles', handler: _lazy_cMyDJ0, lazy: true, middleware: false, method: undefined },
  { route: '/api/guilds/:id/:role', handler: _lazy_OKh16V, lazy: true, middleware: false, method: "patch" },
  { route: '/__nuxt_error', handler: _lazy_ckSEWR, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ckSEWR, lazy: true, middleware: false, method: undefined }
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
