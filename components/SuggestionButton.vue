<template>
    <div>
        <Button class="mx-auto" text="Faire une suggestion" color="white" @click="isOpen = true">
            <template v-slot:icon_left>
                <LightBulbIcon class="mr-3 w-8 h-8" />
            </template>
        </Button>
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="isOpen = false" class="relative z-10">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all"
                            >
                            <DialogTitle
                                as="h3"
                                class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            >
                                Créer une suggestion
                            </DialogTitle>
                            <div class="mt-2">
                                <Input class="mt-4" placeholder="Entrez votre suggestion..." v-model="suggestion" />
                                <div class="text-red-400 text-sm mt-1 mb-4" v-for="(error, id) of errors" :key="id"><i>{{ error }}</i></div>
                                <p class="text-sm text-gray-500 mt-2 leading-loose">
                                    Ta suggestion sera envoyée sur le serveur Discord dans le salon <span class="bg-dark-800 rounded-md p-1">#suggestions</span>
                                </p>
                            </div>
                            <div class="flex gap-2 items-center mt-4 justify-end">
                                <Button
                                    color="transparent"
                                    text="Annuler"
                                    @click="isOpen = false"
                                />
                                <Button
                                    color="primary"
                                    text="Envoyer ma suggestion"
                                    @click="sendSuggestion"
                                />
                            </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import { LightBulbIcon } from '@heroicons/vue/outline/esm/index.js';
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import axios from '@/composables/Axios'

export default {
    components: { 
        LightBulbIcon,
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle 
    },
    data: () => ({
        isOpen: false,
        suggestion: '',
        errors: []
    }),
    methods: {
        async sendSuggestion() {
            try {
                await axios.post('/suggestions', {
                    content: this.suggestion
                }, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token')
                    }
                })
            } catch(e) {
                this.errors = e.response.data.errors.map((error) => error.message)
            }
        }
    }
}
</script>