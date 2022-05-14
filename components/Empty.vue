<template>
    <div>
        <img class="w-12 h-12 mx-auto mb-4" src="/objects/sad.png" />
        <div class="text-sm mx-auto text-center max-w-xs leading-6">{{ text }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Nous n\'avons pas trouvé de résultats...'
        }
    }
}
</script>