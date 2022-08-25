import { Q as defineNuxtRouteMiddleware } from './server.mjs';
import 'unenv/runtime/mock/proxy';
import './renderer.mjs';
import 'ufo';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';
import 'unctx';
import 'defu';
import 'axios';
import '@heroicons/vue/outline/esm/index.js';
import 'discord-markdown';

const auth = defineNuxtRouteMiddleware((to, from) => {
  return;
});

export { auth as default };
//# sourceMappingURL=auth.73204761.mjs.map
