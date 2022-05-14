<template>
    <div class="rounded-3xl shadow-lg cursor-pointer ease-in duration-300 hover:shadow-2xl hover:-translate-y-1 h-full" :class="color && 'bg-white dark:bg-dark-800 hover:dark:bg-dark-700'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: Boolean,
            default: true
        }
    }
}
</script>