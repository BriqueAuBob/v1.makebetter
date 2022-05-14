<template>
    <header class="py-48 relative text-white overflow-hidden">
        <div class="absolute top-full -translate-y-full w-full h-full bg-[#5C6AF6] -z-10"></div>
        <div class="absolute left-1/2 -translate-x-1/2 top-full -translate-y-full w-1/2 rounded-full h-full -z-1" style="background: radial-gradient(50% 50% at 50% 50%, #5664F9 70.83%, transparent 100%);"></div>
        <svg id="squares" class="absolute -top-48 -left-12 rotate-12 min-h-screen h-[90rem] w-screen scale-125 -z-10">
            <g v-for="n in 16" :key="n" >
                <rect :x="100*(i-1)" :y="100*(n-1)" v-for="i in 24" :key="i" width="100" height="100" :fill="(Math.floor(Math.random() * 8))%3 === 2 ? '#5F6CF7' : '#5664F9'" stroke="#5F6DF9" stroke-width="2" />
            </g>
        </svg>
        <div class="container mx-auto px-4 text-center">
            <slot></slot>
        </div>
        <div class="absolute top-0 w-full h-52" style="background: linear-gradient(to bottom, #5865F6, transparent);"></div>
        <div class="absolute top-full -translate-y-full w-full h-52" style="background: linear-gradient(to top, #5865F6, transparent);"></div>
    </header>
</template>