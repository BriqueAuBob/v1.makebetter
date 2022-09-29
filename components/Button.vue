<template>
  <button
    class="flex items-center rounded-md text-base font-medium shadow-xl duration-300 ease-in"
    :class="[
      colors,
      small ? 'px-5 py-3' : 'px-6 py-4',
      centerText && 'justify-center',
    ]"
  >
    <slot name="icon_left"></slot>
    <span
      :class="['whitespace-pre-line', centerText ? 'text-center' : 'text-left']"
      v-html="text"
    ></span>
    <slot name="icon_right"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  data: () => ({
    btnColors: {
      transparent: "bg-transparent shadow-none",
      primary: "bg-primary-500 hover:bg-primary-400 text-white",
      secondary: "bg-secondary-500 hover:bg-secondary-600 text-black",
      white: "bg-white hover:bg-gray-100 text-black",
      blurple: "bg-blurple text-white",
      yellow: "bg-yellow-500 text-white hover:bg-white hover:text-black",
      red: "bg-red-500 text-white",
      disabled: "bg-gray-200 text-black opacity-50",
      none: "",
      theme:
        "bg-white hover:bg-gray-100 dark:bg-dark-900 dark:hover:bg-dark-800",
    },
  }),
  props: {
    color: {
      type: String,
      default: "secondary",
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    small: {
      type: Boolean,
      default: false,
    },
    centerText: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colors() {
      return this.disabled
        ? this.btnColors["disabled"]
        : this.btnColors[this.color];
    },
  },
};
</script>
