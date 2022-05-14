<template>
    <ToolsDefaultCard class="bg-teal-500">
        <template v-slot:illustration>
            <div class="grid grid-cols-2 gap-4 h-full">
                <div class="flex flex-col justify-between gap-4">
                    <div class="bg-dark-800 rounded-2xl p-4 flex flex-wrap gap-2">
                        <div v-for="i in 4" :key="i" class="w-8 h-8 bg-dark-700 rounded-xl"></div>
                    </div>
                    <div class="bg-dark-800 rounded-2xl p-4 flex flex-wrap gap-2 h-full">
                        <div v-for="i in 8" :key="i" class="w-8 h-8 bg-dark-700 rounded-xl"></div>
                    </div>
                </div>
                <div class="flex flex-col justify-between gap-4">
                    <div class="bg-dark-800 rounded-2xl p-4 flex flex-wrap gap-2">
                        <div class="bg-red-500 p-4 w-full rounded-2xl"></div>
                        <div class="bg-white p-4 w-full rounded-2xl"></div>
                    </div>
                    <div class="bg-dark-800 rounded-2xl p-4 flex flex-wrap gap-2 h-full">
                        <div class="mx-auto relative">
                            <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-red-500 w-12 h-12 rounded-2xl -rotate-45"></div>
                            <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ToolsDefaultCard>
</template>

<script>
export default {
    name: 'Badges'
}
</script>