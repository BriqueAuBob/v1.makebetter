<template>
    <div class="bg-white dark:bg-dark-800 rounded-2xl shadow-sm p-8">
        <div class="flex gap-2 items-center font-medium">
            <img :src="rate.avatar" class="w-8 h-8 rounded-full mr-2" alt="Avatar" />
            {{ rate.username }}
            <span>-</span>
            <div class="flex gap-1">
                <img src="/icons/star.svg" v-for="i in 5" :key="i" />
            </div>
        </div>
        <p class="text-gray-800 dark:text-gray-300 mt-4">Je viens de tester le service d'évaluation je trouve ça super, je ne parle pas de ma note mais des aspects notés. Ce sont juste des  atouts donc si la personne ne veus pas utiliser cet atout il perds des points de notes.</p>
        <span class="block mt-4 text-sm text-gray-400">le 24/12/2022</span>
    </div>
</template>

<script>
export default {
    props: {
        rate: {
            type: Object,
            required: true
        }
    }
}
</script>