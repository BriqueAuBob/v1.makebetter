<template>
    <img class="rounded-[4px]" :src="fileBlob" style="max-width: 400px; max-height: 300px;" />
</template>

<script>
export default {
    props: {
        file: {
            required: true
        }
    },
    computed: {
        fileBlob() {
            return URL.createObjectURL(this.file);
        }
    }
}
</script>