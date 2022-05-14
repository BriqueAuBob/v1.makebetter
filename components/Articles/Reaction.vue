<template>
    <div class="bg-gray-200 dark:bg-dark-700 px-4 py-3 rounded-full flex gap-2 items-center text-dark-900 dark:text-white text-md text-medium">
        <img class="w-6 h-6 object-contain" :src="`/objects/${reaction}.png`" />
        54
    </div>
</template>

<script>
export default {
    props: {
        reaction: {
            type: String,
            default: 'poop',
        }
    }
}
</script>