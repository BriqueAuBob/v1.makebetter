import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "empty" | "footer"
declare module "D:/umaestro/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}