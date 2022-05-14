import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@intlify/nuxt3'],
    
    app: {
        head: {
            titleTemplate: 'UMaestro - %s',
            bodyAttrs: {
                class: 'bg-background dark:bg-dark-900 dark:text-white transition ease-in duration-100'
            }
        }
    },

    colorMode: {
        preference: 'system',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'color_theme'
    },

    // pageTransition: {
    //     name: 'page',
    //     mode: 'out-in'
    // },

    intlify: {
        vueI18n: {
            locale: 'fr',
            fallbackLocale: 'fr',
            localeDir: 'locales'
        }
    }
})