<template>
    <div class="embed bg-[#F2F3F5] dark:bg-[#2F3136] border-l-4" :style="`border-color: ${data.color}; max-width: ${data.image.url ? '432' : '516'}px;`">
        <ClientOnly>
            <div v-if="data.author?.name || data.title || data.description || data.fields.length > 0 || data.thumbnail?.url" class="flex justify-between">
                <div class="py-2 mr-2">
                    <div v-if="data.author?.icon_url || data.author?.name" class="flex items-center font-semibold text-sm mb-2">
                        <img v-if="data.author.icon_url" class="w-6 h-6 rounded-full mr-2" :src="data.author.icon_url" />
                        {{ data.author?.name }}
                    </div>
                    <a v-if="data.title" href="#" target="_blank" class="block font-semibold" :class="data.author.url && 'title hover:underline'">
                        {{ data.title }}
                    </a>
                    <div v-if="data.description" class="text-sm mt-2 box-border leading-snug whitespace-pre-wrap break-words" v-html="toHTML(data.description)"></div>
                    <div class="grid gap-x-6 gap-y-2">
                        <div v-for="(field, key) in data.fields" :key="key" class="text-sm mt-2" :style="`grid-column: ${getFieldColumn(field)};`">
                            <Markdown :content="field.name" class="font-semibold"/>
                            <Markdown :content="field.value" class="font-normal" />
                        </div>
                    </div>
                </div>
                <div class="flex-none" v-if="data.thumbnail?.url">
                    <img class="w-20 rounded-[4px]" :src="data.thumbnail.url" />
                </div>
            </div>
            <div v-if="data.image?.url">
                <img class="w-full rounded-[4px]" :class="data.author?.name || data.title || data.description || data.fields.length > 0 ? 'mt-1' : 'mt-4'" :src="data.image.url" />
            </div>
            <footer v-if="data.timestamp || data.footer?.text || data.footer?.icon_url" class="flex mt-2 items-center">
                <img v-if="data.footer?.icon_url" class="w-5 h-5 rounded-full mr-2" :src="data.footer.icon_url" />
                <span class="text-xs text-gray-200">
                    <span v-if="data.footer?.text">{{ data.footer?.text }}</span> 
                    <span class="mx-1" v-if="data.timestamp && data.footer?.text">•</span> 
                    <span v-if="data.timestamp">{{ data.timestamp }}</span>
                </span>
            </footer>
        </ClientOnly>
    </div>
</template>

<script>
import { toHTML } from 'discord-markdown'

export default {
    setup() {
        return { toHTML };
    },
    props: {
        data: {
            type: Object,
            default: {},
        }
    },
    methods: {
        getFieldColumn(field) {
            const MAX_FIELDS_PER_ROW = 3
            const FIELD_GRID_SIZE = 12

            const embed = this.data
            const fieldIndex = embed.fields.indexOf(field)

            if (!field.inline) return `1/${FIELD_GRID_SIZE + 1}`

            let startingField = fieldIndex
            while (startingField > 0 && embed.fields[startingField - 1].inline) {
                startingField--
            }

            let totalInlineFields = 0
            while (
                embed.fields.length > startingField + totalInlineFields &&
                embed.fields[startingField + totalInlineFields].inline
            ) {
                totalInlineFields++
            }

            const indexInSequence = fieldIndex - startingField
            const currentRow = indexInSequence / MAX_FIELDS_PER_ROW
            const indexOnRow = indexInSequence % MAX_FIELDS_PER_ROW
            const totalOnLastRow =
                totalInlineFields % MAX_FIELDS_PER_ROW || MAX_FIELDS_PER_ROW
            const fullRows = (totalInlineFields - totalOnLastRow) / MAX_FIELDS_PER_ROW
            const totalOnRow =
                currentRow >= fullRows ? totalOnLastRow : MAX_FIELDS_PER_ROW

            const columnSpan = FIELD_GRID_SIZE / totalOnRow
            const start = indexOnRow * columnSpan + 1
            const end = start + columnSpan

            return `${start}/${end}`
        }
    }
}
</script>

<style scoped>
.embed {
    padding: .5rem 1rem 1rem .75rem;
    border-radius: 4px;
    max-width: 428px;
}

.title {
    color: #0897D1;
}
</style>