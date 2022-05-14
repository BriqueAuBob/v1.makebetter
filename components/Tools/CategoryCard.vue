<template>
    <NuxtLink :to="`/tools/${category.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`" :class="[`rounded-xl shadow-xl min-w-[10rem] cursor-pointer`, category.disabled ? 'p-5 opacity-25' : 'p-6 transition ease-in duration-200 hover:shadow-2xl hover:-translate-y-1']" :style="`background-color: ${category.color}`">
        <div :class="['rounded-full bg-white', category.disabled ? 'p-2 w-10 h-10' : 'p-4 w-16 h-16']" :style="`color: ${category.color}`">
            <img v-if="typeof category.icon === 'string'" :src="`/icons/${category.icon}`" :class="[category.disabled ? 'w-6 h-6' : 'w-8 h-8']" />
            <component v-else :is="category.icon" :class="[category.disabled ? 'w-6 h-6' : 'w-8 h-8']" />
        </div>
        <div :class="['text-white font-semibold', category.disabled ? 'text-sm mt-2' : 'mt-4']">{{ category.name }}</div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            required: true,
        },
    }
}
</script>