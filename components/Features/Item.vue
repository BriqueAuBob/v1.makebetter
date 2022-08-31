<template>
  <div class="flex gap-6">
    <div>
      <div
        :class="`rounded-3xl ${feature.color} h-20 w-20 p-5 text-white shadow-lg`"
      >
        <!-- <img :src="`/icons/${feature.icon}`" class="w-10 h-10" alt="cube" /> -->
        <component :is="feature.icon" class="h-10 w-10" />
      </div>
    </div>
    <div class="flex flex-col justify-center gap-1">
      <div class="font-semibold leading-relaxed">
        {{ feature.name }}
      </div>
      <div class="max-w-xl">
        {{ feature.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
};
</script>
