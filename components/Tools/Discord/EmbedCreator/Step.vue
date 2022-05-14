<template>
    <div :class="bigPadding ? 'py-16' : 'py-6'">
        <div class="flex gap-2 text-lg">
            <span class="font-bold">Etape {{ stepId }}</span>
            <span class="font-semibold">-</span>
            <span class="font-medium">{{ name }}</span>
        </div>
        <p class="text-md">{{ description }}</p>
        <div class="mt-4">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stepId: {
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        bigPadding: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>