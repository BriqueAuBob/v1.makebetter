<template>
  <div v-html="toHTML(content, { embed })"></div>
</template>

<script>
import pkg from "discord-markdown";
const { toHTML } = pkg;

export default {
  setup() {
    return { toHTML };
  },
  props: {
    content: {
      type: String,
      default: "",
    },
    embed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
