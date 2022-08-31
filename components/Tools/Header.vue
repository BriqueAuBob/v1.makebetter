<template>
  <header class="relative overflow-hidden py-48 text-white">
    <div
      class="absolute top-full -z-10 h-full w-full -translate-y-full bg-[#5C6AF6]"
    ></div>
    <div
      class="absolute left-1/2 top-full -z-1 h-full w-1/2 -translate-x-1/2 -translate-y-full rounded-full"
      style="
        background: radial-gradient(
          50% 50% at 50% 50%,
          #5664f9 70.83%,
          transparent 100%
        );
      "
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
            Math.floor(Math.random() * 8) % 3 === 2 ? '#5F6CF7' : '#5664F9'
          "
          stroke="#5F6DF9"
          stroke-width="2"
        />
      </g>
    </svg>
    <div class="container mx-auto px-4 text-center">
      <slot></slot>
    </div>
    <div
      class="absolute top-0 h-52 w-full"
      style="background: linear-gradient(to bottom, #5865f6, transparent)"
    ></div>
    <div
      class="absolute top-full h-52 w-full -translate-y-full"
      style="background: linear-gradient(to top, #5865f6, transparent)"
    ></div>
  </header>
</template>
