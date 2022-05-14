<template>
    <div>
        <header class="bg-primary-500 border-b-8 border-primary-400 py-48">
            <h1 class="font-extrabold text-5xl text-white text-center">Nos articles</h1>
            <h2 class="text-3xl max-w-2xl text-center mx-auto mt-6 leading-relaxed text-white">On écrit régulièrement des articles pour mettre notre communauté au courant de certaines choses</h2>
            <div class="container mx-auto px-4 mt-12 mb-52 lg:mb-0 pb-96 lg:pb-32">
                <div class="relative">
                    <div class="absolute w-full grid lg:grid-cols-2 gap-8">
                        <ArticlesThumbnailsBig />
                        <div class="flex flex-col gap-8">
                            <ArticlesThumbnailsSmall />
                            <ArticlesThumbnailsSmall />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="pt-32 lg:pt-48 pb-4 container mx-auto px-4">
            <div class="font-semibold text-2xl leading-relaxed">Articles de Discord Décrypte</div>
            <p class="text-xl leading-relaxed max-w-2xl mt-3">Ce sont les articles qui sortent tout les samedi et qui vous informent pas forcément sur quelque chose de lié à Maestro</p>
            <div class="grid lg:grid-cols-3 gap-8 mt-8">
                <ArticlesThumbnailsBig />
                <ArticlesThumbnailsBig />
                <ArticlesThumbnailsBig />
            </div>
            <div class="grid lg:grid-cols-2 gap-8 mt-8">
                <ArticlesThumbnailsSmall v-for="i in 4" :key="i" />
            </div>
            <Button class="bg-white mx-auto mt-12" text="En voir d'avantage" />
        </section>
        <section class="pt-24 pb-48 relative">
            <div class="absolute w-full h-[70rem] md:h-[66rem] lg:h-[42rem] bg-primary-500 -z-1"></div>
            <div class="container mx-auto py-12 px-4">
                <div class="font-semibold text-2xl leading-relaxed text-white">Informations relatives à UMaestro</div>
                <p class="text-xl leading-relaxed max-w-2xl mt-3 text-white">Ce sont les articles qui vous informent des nouveautés qui sortent/sortiront sur le site.</p>
                <div class="grid lg:grid-cols-2 gap-8 mt-8">
                    <ArticlesThumbnailsBig />
                    <div class="flex flex-col gap-8">
                        <ArticlesThumbnailsSmall :superSmall="true" v-for="i in 3" :key="i" />
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 gap-8 mt-8">
                    <ArticlesThumbnailsSmall v-for="i in 6" :key="i" />
                </div>
            </div>
            <Button class="bg-white mx-auto" text="En voir d'avantage" />
        </section>
    </div>
</template>