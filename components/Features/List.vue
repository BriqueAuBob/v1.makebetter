<template>
    <div class="flex flex-col gap-8">
        <FeaturesItem v-for="(feature, index) of features" :key="index" :feature="feature" />
    </div>
</template>

<script>
import { CubeIcon } from '@heroicons/vue/outline';

export default {
    data() {
        return {
            features: [
                {
                    color: 'bg-green-500',
                    icon: CubeIcon,
                    name: 'Outils',
                    description: 'Nous sommes fier de pouvoir vous offrir des outils vous facilitant la gestion de votre projet',
                },
                {
                    color: 'bg-primary-500',
                    icon: CubeIcon,
                    name: 'Outils',
                    description: 'Nous sommes fier de pouvoir vous offrir des outils vous facilitant la gestion de votre projet',
                },
                {
                    color: 'bg-red-500',
                    icon: CubeIcon,
                    name: 'Outils',
                    description: 'Nous sommes fier de pouvoir vous offrir des outils vous facilitant la gestion de votre projet',
                },
            ]
        }
    }
}
</script>