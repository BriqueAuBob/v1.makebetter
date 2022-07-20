<template>
    <div>
        <header class="pt-48 pb-8">
            <h1 class="font-extrabold text-5xl text-white text-center">Avis des utilisateurs</h1>
            <Button text="Publier mon avis" class="mx-auto mt-8" color="yellow" @click="isOpen = !isOpen"></Button>
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
                                Mon avis
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500 mt-2">
                                    Combien d'étoiles souhaites-tu nous attribuer?
                                </p>
                                <div class="flex gap-1 justify-between mt-4 mb-8">
                                    <Star class="w-12 cursor-pointer" :color="star >= i ? '#BB900D' : '#9ca3af'" v-for="i in 5" :key="i" @click="star = i" />
                                </div>
                                <Input class="mt-4" :placeholder="`Pourquoi ${star} étoiles?`" v-model="rate" />
                                <p class="text-sm text-gray-500 mt-2">
                                    Ton avis nous aidera à améliorer notre service.
                                </p>
                            </div>
                            <div class="flex gap-2 items-center mt-4 justify-end">
                                <Button
                                    color="transparent"
                                    text="Annuler"
                                    @click="isOpen = false"
                                />
                                <Button
                                    color="yellow"
                                    text="Publier mon avis"
                                    @click="addTestimonial"
                                />
                            </div>
                            </DialogPanel>
                        </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </header>
        <section class="container mx-auto px-2 pt-16 pb-48">
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-8">
                <Testimonial v-for="(rate, id) in testimonials" :key="id" :rate="rate" />
            </div>
        </section>
    </div>
</template>

<script>
import axios from '@/composables/Axios'
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

export default {
    components: {
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
    async setup() {
        const testimonials = await useAsyncData(async () => {
            try {
                const { data } = await axios.get('testimonials')
                return data.testimonials
            } catch (e) {
                return []
            }
        })

        return { testimonials: testimonials.data }
    },
    data: () => ({
        isOpen: false,
        rate: '',
        star: 5
    }),
    methods: {
        async addTestimonial() {
            try {
                const token = localStorage.getItem('access_token')
                await axios.post('testimonials', {
                    message: this.rate,
                    star: this.star
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            } catch (e) {
                console.log(e)
            } finally {
                this.isOpen = false
                const { data } = await axios.get('testimonials')
                this.testimonials = data.testimonials
            }
        }
    }
}
</script>