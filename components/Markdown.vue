<template>
  <div
    v-html="
      toHTML(content, {
        discordCallback: {
          user: (node) => '@user',
          role: (node) => '@role',
        },
        embed,
      })
    "
  ></div>
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

<style>
.d-mention {
  border-radius: 3px;
  padding: 0 2px;
  color: hsla(236, 83.3%, 92.9%);
}

.d-mention.d-user {
  background: hsla(235, 85.6%, 64.7%, 0.3);
}

.d-mention.d-role {
  background: rgba(242, 121, 88, 0.3);
}
</style>
