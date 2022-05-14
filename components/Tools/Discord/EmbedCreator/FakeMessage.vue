<template>
    <div class="flex gap-3">
        <ClientOnly>
            <img class="w-10 h-10 rounded-full" :src="data.avatar_url" />
            <div class="w-full whitney">
                <div class="flex gap-1 text-base items-center">
                    <span class="font-medium">{{ data.username }}</span>
                    <span class="bg-blurple px-1 leading-4 font-medium rounded-sm text-white text-[10px]">BOT</span>
                    <span class="ml-1 rounded-md text-gray-600 dark:text-gray-200 text-xs self-end">12/08/2022</span>
                </div>
                <div class="flex flex-col gap-1 w-full mt-1">
                    <Markdown class="font-normal text-base text-gray-300 whitespace-pre-line break-words leading-snug" :content="data.content"></Markdown>
                    <div v-if="data.files" class="flex flex-col gap-1">
                        <div v-for="(file, index) of data.files" :key="index" class="flex">
                            <ToolsDiscordEmbedCreatorAttachmentsImage v-if="file.type.startsWith('image') && file.type !== 'image/svg+xml'" :file="file" />
                            <ToolsDiscordEmbedCreatorAttachmentsFile v-else :file="file" />
                        </div>
                    </div>
                    <ToolsDiscordEmbedCreatorFakeEmbed v-for="(embed, id) in data.embeds" :key="id" class="w-full" :data="embed" />
                </div>
                <div v-if="data.components[0].components" class="flex mt-2">
                    <a 
                        :href="component.url" 
                        target="_blank" 
                        class="bg-[#4F545C] hover:bg-[#686D73] ease-in duration-200 rounded-sm flex font-medium ml-0 mr-2 px-4 py-1 relative text-white items-center gap-2"
                        v-for="(component, id) of data.components[0].components" 
                        :key="id" 
                    >
                        {{ component.label }}
                        <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path></svg>
                    </a>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: {},
        }
    }
}
</script>

<style>
@font-face {
    font-family: "Whitney";
    src: url("/fonts/Whitney-300.woff2") format("woff2");
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: "Whitney";
    src: url("/fonts/Whitney-400.woff2") format("woff2");
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: "Whitney";
    src: url("/fonts/Whitney-500.woff2") format("woff2");
    font-weight: 500;
    font-display: swap;
}

@font-face {
    font-family: "Whitney";
    src: url("/fonts/Whitney-600.woff2") format("woff2");
    font-weight: 600;
    font-display: swap;
}

@font-face {
    font-family: "Whitney";
    src: url("/fonts/Whitney-700.woff2") format("woff2");
    font-weight: 700;
    font-display: swap;
}

.whitney {
    font-family: "Whitney", sans-serif;
}

.d-emoji {
    height: 1.375em;
    width: 1.375em;
    object-fit: contain;
    vertical-align: bottom;
    display: inline;
}
</style>