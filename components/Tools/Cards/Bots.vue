<template>
    <ToolsDefaultCard class="bg-blurple">
        <template v-slot:illustration>
            <div class="grid grid-cols-2 gap-4">
                <div v-for="i in 2" :key="i">
                    <header :class="[i == 1 ? 'bg-teal-500' : 'bg-blurple']" class="h-12 rounded-t-2xl p-6 relative shadow-xl">
                        <div :class="[i == 1 ? 'bg-teal-500' : 'bg-blurple']" class="absolute top-1/2 w-12 h-12 rounded-3xl border-4 border-dark-800" />
                    </header>
                    <div class="bg-dark-800 p-6 rounded-b-2xl shadow-xl">
                        <main>
                            <div class="bg-dark-700 w-full mt-4 h-4 rounded-md"></div>
                            <div class="bg-dark-700 w-3/4 mt-4 h-2 rounded-md"></div>
                            <div class="bg-dark-700 w-3/4 mt-2 h-2 rounded-md"></div>
                        </main>
                        <footer class="flex flex-wrap gap-2 mt-4">
                            <div class="w-24 h-4 bg-primary-500 bg-opacity-25 rounded-md"></div>
                        </footer>
                    </div>
                </div>
            </div>
        </template>
    </ToolsDefaultCard>
</template>

<script>
export default {
    name: 'Bots'
}
</script>