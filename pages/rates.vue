<template>
  <div>
    <header class="pt-48 pb-8">
      <h1
        class="text-center text-5xl font-extrabold text-black dark:text-white"
      >
        Avis des utilisateurs
      </h1>
      <Button
        text="Publier mon avis"
        class="mx-auto mt-8"
        color="yellow"
        @click="isOpen = !isOpen"
      ></Button>
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
            <div
              class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            />
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
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900"
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Mon avis
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="mt-2 text-sm text-gray-500">
                      Combien d'étoiles souhaites-tu nous attribuer?
                    </p>
                    <div class="mt-4 mb-8 flex justify-between gap-1">
                      <Star
                        class="w-12 cursor-pointer"
                        :color="star >= i ? '#BB900D' : '#9ca3af'"
                        v-for="i in 5"
                        :key="i"
                        @click="star = i"
                      />
                    </div>
                    <Input
                      class="mt-4"
                      :placeholder="`Pourquoi ${star} étoiles?`"
                      v-model="rate"
                    />
                    <div
                      class="mt-1 mb-4 text-sm text-red-400"
                      v-for="(error, id) of errors"
                      :key="id"
                    >
                      <i>{{ error }}</i>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Ton avis nous aidera à améliorer notre service.
                    </p>
                  </div>
                  <div class="mt-4 flex items-center justify-end gap-2">
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
      <div class="mt-8 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Testimonial
          v-for="(rate, id) in testimonials"
          :key="id"
          :rate="rate"
          data-aos="fade-up"
          :data-aos-delay="200 + id * 100"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/composables/Axios";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

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
    DialogTitle,
  },
  async setup() {
    useHead({
      title: "Avis",
    });

    const testimonials = await useAsyncData(async () => {
      try {
        const { data } = await axios.get("testimonials");
        return data.testimonials;
      } catch (e) {
        return [];
      }
    });

    return { testimonials: testimonials.data };
  },
  data: () => ({
    isOpen: false,
    rate: "",
    star: 5,
    errors: [],
  }),
  methods: {
    async addTestimonial() {
      try {
        const token = localStorage.getItem("access_token");
        await axios.post(
          "testimonials",
          {
            message: this.rate,
            star: this.star,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.isOpen = false;
        const { data } = await axios.get("testimonials");
        this.testimonials = data.testimonials;
      } catch (e) {
        this.errors = e.response.data.errors.map((error) => error.message);
      }
    },
  },
};
</script>
