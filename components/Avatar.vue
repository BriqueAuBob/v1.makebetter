<template>
  <div>
    <ClientOnly>
      <img
        v-if="!failure"
        :src="src"
        class="rounded-full"
        :class="[size, border && 'border-8 border-white']"
        alt="Avatar"
        @error="onFail"
    /></ClientOnly>
    <div
      v-if="failure"
      class="flex items-center justify-center rounded-full bg-dark-700 text-sm font-semibold"
      :class="[size, border && 'border-8 border-white']"
    >
      {{ initial }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    user: {
      type: Object,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    failure: false,
  }),
  computed: {
    initial() {
      return this.user.username.toUpperCase().substr(0, 1);
    },
    size() {
      return {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-48 w-48",
      }[this.size];
    },
  },
  methods: {
    onFail() {
      this.failure = true;
    },
  },
};
</script>
