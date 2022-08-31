<template>
  <div>
    <img class="mx-auto mb-4 h-12 w-12" src="/objects/sad.png" />
    <div class="mx-auto max-w-xs text-center text-sm leading-6">{{ text }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Nous n'avons pas trouvé de résultats...",
    },
  },
};
</script>
