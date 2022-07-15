<template>
    <footer class="bg-white dark:bg-dark-800 py-12">
        <div class="container mx-auto flex justify-between px-4">
            <div>
                <div class="font-semibold text-lg">UMaestro</div>
                <p class="text-md mt-2 max-w-md leading-relaxed">
                    Nous sommes un groupe sur Internet, plus communément appelé Network, nous proposons plusieurs projets en rapport avec le net.
                    <br/><br/>
                    <span class="text-sm font-light text-gray-400">Nous ne sommes pas affiliés avec les services pour lesquels nous fournissons des outils.</span>
                </p>
            </div>
            <div>
                <div class="font-semibold text-lg">Liens utiles</div>
                <ul class="mt-4 flex flex-col gap-2 text-gray-500">
                    <li><NuxtLink to="partners">Nos partenaires</NuxtLink></li>
                    <!-- <li><NuxtLink to="#">Articles</NuxtLink></li> -->
                </ul>
            </div>
            <div>
                <div class="font-semibold text-lg">Confidentialité & Sécurité</div>
                <ul class="mt-4 flex flex-col gap-2 text-gray-500">
                    <li><NuxtLink to="#">Politique de confidentialité</NuxtLink></li>
                    <li><NuxtLink to="#">Conditions générales d’utilisation</NuxtLink></li>
                </ul>
            </div>
        </div>
        <div class="container mx-auto flex justify-between mt-16 px-4">
            <div class="flex gap-2"></div>
            <div class="flex gap-2 items-center">
                <button class="bg-gray-400 px-4 py-2 text-white rounded-md" @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'">TOGGLE DARK MODE</button>
                <span class="text-md font-medium">- 2022</span>
            </div>
        </div>
    </footer>
</template>