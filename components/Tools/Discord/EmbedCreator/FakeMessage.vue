<template>
  <div class="flex gap-3">
    <ClientOnly>
      <img class="h-10 w-10 rounded-full" :src="data.avatar_url" />
      <div class="whitney w-full">
        <div class="flex items-center gap-1 text-base">
          <span class="font-medium">{{ data.username }}</span>
          <span
            class="rounded-sm bg-blurple px-1 text-[10px] font-medium leading-4 text-white"
            >BOT</span
          >
          <span
            class="ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200"
            >12/08/2022</span
          >
        </div>
        <div class="mt-1 flex w-full flex-col gap-1">
          <Markdown
            class="whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300"
            :content="data.content"
          ></Markdown>
          <div v-if="data.files" class="flex flex-col gap-1">
            <div v-for="(file, index) of data.files" :key="index" class="flex">
              <ToolsDiscordEmbedCreatorAttachmentsImage
                v-if="
                  file.type.startsWith('image') && file.type !== 'image/svg+xml'
                "
                :file="file"
              />
              <ToolsDiscordEmbedCreatorAttachmentsFile v-else :file="file" />
            </div>
          </div>
          <ToolsDiscordEmbedCreatorFakeEmbed
            v-for="(embed, id) in data.embeds"
            :key="id"
            class="w-full"
            :data="embed"
          />
        </div>
        <div v-if="data.components[0].components" class="mt-2 flex">
          <a
            :href="component.url"
            target="_blank"
            class="relative ml-0 mr-2 flex items-center gap-2 rounded-sm bg-[#4F545C] px-4 py-1 font-medium text-white duration-200 ease-in hover:bg-[#686D73]"
            v-for="(component, id) of data.components[0].components"
            :key="id"
          >
            {{ component.label }}
            <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
              ></path>
              <path
                fill="currentColor"
                d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
              ></path>
            </svg>
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
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-300.woff2") format("woff2");
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-400.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-500.woff2") format("woff2");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-600.woff2") format("woff2");
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-700.woff2") format("woff2");
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
