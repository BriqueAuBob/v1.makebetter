<template>
    <div>
        <header class="bg-gradient-to-b from-red-500 to-red-700 pt-48 pb-48 relative text-white">
            <h1 class="font-extrabold text-4xl leading-[3.5rem] text-center max-w-xl mx-auto">Désolé, nous ne proposons pas d’outils pour cette plateforme pour le moment</h1>
            <h2 class="text-2xl leading-relaxed mt-4 text-center max-w-2xl mx-auto">Tu peux faire une suggestion pour nous faire part de tes idées. Il se peut que nous serions enchantés de travailler sur l’ajout d’outils concernant "<span class="capitalize">{{ moduleName }}</span>" !</h2>
            <SuggestionButton class="mt-4" />
        </header>
    </div>
</template>


<script>
import { LightBulbIcon } from "@heroicons/vue/outline/esm/index.js"

export default {
    components: { LightBulbIcon },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.moduleName = from.params.slug || vm.moduleName
        })
    },
    data: () => ({
        moduleName: 'inconnu'
    })
}
</script>