<template>
    <div v-html="toHTML(content)"></div>
</template>

<script>
import pkg from 'discord-markdown'
const { toHTML } = pkg

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