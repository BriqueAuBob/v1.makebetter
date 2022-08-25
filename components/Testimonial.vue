<template>
    <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-sm p-8">
        <div class="flex gap-2 items-center font-medium">
            <img :src="rate?.author?.avatar || '/default_avatar.svg'" class="w-8 h-8 rounded-full mr-2" alt="Avatar" />
            {{ rate?.author?.username || 'Utilisateur supprimé' }}
            <span>-</span>
            <div class="flex items-center gap-1">
                <Star class="w-6" :color="rate.star >= i ? '#BB900D' : '#9ca3af'" v-for="i in 5" :key="i" />
            </div>
        </div>
        <p class="text-gray-800 dark:text-gray-300 mt-4">{{ rate.message }}</p>
        <span class="block mt-4 text-sm text-gray-400">le {{ new Date(rate.created_at).toLocaleDateString('fr-FR') }}</span>
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