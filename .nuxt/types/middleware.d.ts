import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/laragon/www/maeyourdiscord/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}