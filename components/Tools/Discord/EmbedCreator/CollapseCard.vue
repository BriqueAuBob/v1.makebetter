<template>
  <div class="px-6 py-4">
    <div class="flex items-center justify-between font-semibold">
      {{ name }}
      <div class="flex items-center gap-1">
        <button v-if="down" @click="down" class="p-2">
          <ArrowDownIcon class="h-6 w-6" />
        </button>
        <button v-if="up" @click="up" class="p-2">
          <ArrowUpIcon class="h-6 w-6" />
        </button>
        <button v-if="trash" @click="trash" class="p-2">
          <TrashIcon class="h-6 w-6" />
        </button>
        <button @click="open = !open" class="p-2">
          <ChevronDownIcon
            class="h-6 w-6 duration-300 ease-in-out"
            :class="!open && 'rotate-90'"
          />
        </button>
      </div>
    </div>
    <div
      class="duration-300 ease-in-out"
      :class="!open ? 'max-h-0 overflow-hidden' : 'mt-4 mb-2 max-h-[300rem]'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  ChevronDownIcon,
  TrashIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/vue/24/outline/esm/index.js";

export default {
  components: { ChevronDownIcon, TrashIcon, ArrowDownIcon, ArrowUpIcon },
  data: () => ({
    open: false,
  }),
  props: {
    name: {
      type: String,
    },
    trash: {
      type: Function,
    },
    up: {
      type: Function,
    },
    down: {
      type: Function,
    },
  },
};
</script>
