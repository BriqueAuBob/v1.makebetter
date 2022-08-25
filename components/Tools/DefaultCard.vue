<template>
    <div class="relative transition ease-in duration-200 hover:-translate-y-4" id="card">
        <img class="rounded-3xl w-full shadow-lg" :src="`/tools/${tool.uuid}_${$colorMode.value}.png`" />
        <div class="absolute rounded-3xl top-0 left-0 bg-gradient-to-t from-dark-950 to-dark-400 dark:to-dark-800 opacity-80 backdrop-blur-md h-full w-full flex flex-col justify-end p-8 gap-2">
            <div class="text-2xl font-semibold text-white">{{ tool.name }}</div>
            <div class="text-lg text-white">{{ tool.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tool: {
            type: Object,
            default: {
                name: 'Unknown',
                description: 'No',
                uuid: 'badges_discord'
            }
        }
    }
}
</script>