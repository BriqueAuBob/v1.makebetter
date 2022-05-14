<template>
    <div v-html="toHTML(content)"></div>
</template>

<script>
import { toHTML } from 'discord-markdown'

export default {
    setup() {
        return { toHTML };
    },
    props: {
        content: {
            type: String,
            default: '',
        }
    }
}
</script>