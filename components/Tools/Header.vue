<template>
  <header class="relative overflow-hidden py-48 text-white">
    <div
      class="absolute top-full -z-10 h-full w-full -translate-y-full"
      :style="`background: ${color};`"
    ></div>
    <!-- prettier-ignore -->
    <div
      class="absolute left-1/2 top-full -z-1 h-full w-1/2 -translate-x-1/2 -translate-y-full rounded-full"
      :style="`background: radial-gradient(50% 50% at 50% 50%, ${color} 70.83%, transparent 100%);`"
    ></div>
    <svg
      id="squares"
      class="absolute -top-48 -left-12 -z-10 h-[90rem] min-h-screen w-screen rotate-12 scale-125"
    >
      <g v-for="n in 16" :key="n">
        <rect
          :x="100 * (i - 1)"
          :y="100 * (n - 1)"
          v-for="i in 24"
          :key="i"
          width="100"
          height="100"
          :fill="
            Math.floor(Math.random() * 8) % 3 === 2 ? color : lightColor(-15)
          "
          :stroke="lightColor(20)"
          stroke-width="2"
        />
      </g>
    </svg>
    <div class="container mx-auto px-4 text-center">
      <slot></slot>
    </div>
    <div
      class="absolute top-0 h-52 w-full"
      :style="`background: linear-gradient(to bottom, ${color}, transparent);`"
    ></div>
    <div
      class="absolute top-full h-52 w-full -translate-y-full"
      :style="`background: linear-gradient(to top, ${color}, transparent);`"
    ></div>
  </header>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#5865F2",
    },
  },
  methods: {
    lightColor(magnitude) {
      const hexColor = this.color.replace("#", "");
      const decimalColor = parseInt(hexColor, 16);
      let r = (decimalColor >> 16) + magnitude;
      r > 255 && (r = 255);
      r < 0 && (r = 0);
      let g = (decimalColor & 0x0000ff) + magnitude;
      g > 255 && (g = 255);
      g < 0 && (g = 0);
      let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
      b > 255 && (b = 255);
      b < 0 && (b = 0);
      return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    },
  },
};
</script>
