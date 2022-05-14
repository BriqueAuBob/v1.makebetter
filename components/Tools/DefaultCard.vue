<template>
    <Card :color="false">
        <div class="p-8 text-white flex flex-col">
            <div class="font-semibold text-lg text-center">{{ name }}</div>
            <div class="bg-dark-900 text-4xl mt-5 rounded-3xl text-justify p-4 leading-loose h-full" style="text-align-last: center;">
                <slot name="illustration"></slot>
            </div>
        </div>
    </Card>
</template>

<script>
import { tools } from '~~/composables/Module';

export default {
    computed: {
        name() {
            return tools[this.$parent.$options.name] ?? 'Nom inconnu';
        }
    }
}
</script>