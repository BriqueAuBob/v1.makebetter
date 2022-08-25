<template>
    <div class="text-center">
        <!-- <img :src="`/icons/${icon}.svg`" :alt="`${icon} icon`" class="mx-auto w-8 h-8 mb-4" /> -->
        <component :is="Icons[icon]" class="mx-auto w-12 h-12 mb-4" />
        <div class="font-extrabold text-2xl">{{ value }}</div>
        <div class="text-lg">{{ name }}</div>
    </div>
</template>

<script>
import * as Icons from '@heroicons/vue/outline/esm/index.js'

export default {
    data: () =>  ({ Icons }),
    props: {
        icon: {
            type: String,
            default: 'user'
        },
        name: {
            type: String,
            default: 'Utilisateurs'
        },
        value: {
            default: 0
        }
    }
}
</script>