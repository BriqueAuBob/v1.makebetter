<template>
    <ToolsDefaultCard class="bg-red-500">
        <template v-slot:illustration>
            <div class="flex gap-3 p-3">
                <div>
                    <div class="bg-blurple w-10 h-10 rounded-full"></div>
                </div>
                <div class="w-full">
                    <div class="flex items-end gap-2 w-full">
                        <div class="bg-dark-700 w-1/3 h-4 rounded-sm"></div>
                        <div class="bg-blurple w-8 h-4 rounded-sm"></div>
                        <div class="bg-dark-800 w-24 h-3 rounded-sm"></div>
                    </div>
                    <div class="mt-3 flex flex-col gap-1">
                        <div class="bg-dark-800 w-full h-2 rounded-sm"></div>
                        <div class="bg-dark-800 w-1/3 h-2 rounded-sm"></div>
                        <div class="bg-dark-800 w-3/4 h-2 rounded-sm"></div>
                        <div class="bg-dark-800 border-l-2 border-blurple px-2 py-2 rounded-md mt-1">
                            <div class="flex justify-between gap-4">
                                <div class="flex flex-col gap-1 w-full">
                                    <div class="bg-dark-700 w-full h-2 rounded-sm"></div>
                                    <div class="bg-dark-700 w-3/4 h-2 rounded-sm"></div>
                                    <div class="bg-dark-700 w-full h-2 rounded-sm"></div>
                                    <div class="bg-dark-700 w-1/2 h-2 rounded-sm"></div>
                                </div>
                                <div class="w-3/4 h-12 rounded-md bg-dark-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ToolsDefaultCard>
</template>

<script>
export default {
    name: 'Embed'
}
</script>