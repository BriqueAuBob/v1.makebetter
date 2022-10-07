<template>
  <div>
    <header
      class="relative flex flex-col items-center justify-center overflow-y-hidden bg-dark-900 pt-48 pb-32"
    >
      <div
        class="absolute top-0 left-0 z-0 h-full w-full bg-dark-950 bg-cover bg-center opacity-75 blur-xl"
        :style="`background-image: url(${user?.avatar});`"
      ></div>
      <Avatar
        class="z-10 border-white"
        :src="user?.avatar"
        :user="user"
        size="xl"
        :border="true"
      />
      <div
        class="z-10 mx-auto mt-4 text-center text-2xl font-semibold text-white"
      >
        {{ user?.username }}
      </div>
      <div
        class="z-10 mx-auto mt-1 text-center text-xl font-medium text-gray-400"
      >
        #{{ user?.discriminator }}
      </div>
    </header>
    <section class="container mx-auto py-32 px-4 lg:px-16 xl:px-32">
      <div class="mb-2 text-lg font-semibold">Mes informations</div>
      <p class="mb-4 text-gray-500">
        Ici, vous pouvez voir toutes les informations que nous sauvegardons à
        propos de votre profil.
      </p>
      <div class="grid gap-4 italic md:grid-cols-2">
        <div>
          <span class="ml-2">ID</span>
          <Input :placeholder="user?.id.toString()" :disabled="true" />
        </div>
        <div>
          <span class="ml-2">ID Discord</span>
          <Input :placeholder="user?.discord_id.toString()" :disabled="true" />
        </div>
        <div>
          <span class="ml-2">Email</span>
          <Input :placeholder="hideEmail(user?.email)" :disabled="true" />
        </div>
        <div></div>
        <div>
          <span class="ml-2">Nom d'utilisateur</span>
          <Input :placeholder="user?.username" :disabled="true" />
        </div>
        <div>
          <span class="ml-2">Tag Discord</span>
          <Input :placeholder="'#' + user?.discriminator" :disabled="true" />
        </div>
      </div>

      <div class="mb-2 mt-12 text-lg font-semibold">
        Vos utilisations des outils
      </div>
      <p class="mb-4 text-gray-500">Vois ce que t'as fait sur notre site!</p>
      <div v-if="logs.length > 0">
        <div
          v-for="(log, id) in logsFilter"
          :key="id"
          class="mt-2 flex items-center gap-1 rounded-lg bg-white p-4 shadow-sm dark:bg-dark-900"
        >
          <div>
            Utilisation de
            <span class="font-medium">{{
              log.tool === "discord_embed"
                ? "Créateur d'embeds"
                : "Créateur de badges"
            }}</span>
          </div>
          <div class="italic">
            le
            <span class="font-medium">{{
              new Date(log.created_at).toLocaleString("fr-FR")
            }}</span>
          </div>
        </div>
        <Button
          v-if="length < logs.length"
          @click="length += 4"
          text="Voir plus"
          class="mr-auto mt-4"
          color="primary"
        />
      </div>
      <div v-else>
        <div class="mt-4 mb-2 font-medium text-gray-400">
          Tu n'as jamais utilisé nos outils...
        </div>
        <NuxtLink to="/#tools">
          <Button text="Trouver un outil" :small="true" color="secondary" />
        </NuxtLink>
      </div>

      <div class="mt-12 mb-4 text-lg font-semibold">Déconnexion</div>
      <Button @click="logout" :small="true" color="red" text="Se déconnecter" />

      <div class="mb-2 mt-12 text-lg font-semibold">
        Suppression du compte<span
          class="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold"
          >ZONE DE DANGER</span
        >
      </div>
      <p class="mb-4 text-gray-500">
        Attention! Cette action est irreversible, elle entrainera la destruction
        permanente de vos données dans notre base de données.
      </p>
      <Button
        @click="deleteAccountModal = true"
        :small="true"
        color="red"
        text="Supprimer mon compte"
      />
      <TransitionRoot appear :show="deleteAccountModal" as="template">
        <Dialog
          as="div"
          @close="deleteAccountModal = false"
          class="relative z-10"
        >
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
                    Êtes-vous sur de vouloir supprimer votre compte?
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="mt-2 text-sm text-gray-500">
                      Cette action est irreversible, il sera impossible de
                      retrouver vos données après avoir supprimer votre compte.
                    </p>
                    <p class="mt-4 text-sm text-gray-500">
                      Si vous êtes certain de votre choix, veuillez recopier
                      <span class="italic text-white"
                        >{{ user?.username }}#{{ user?.discriminator }}</span
                      >
                      et cliquer sur le bouton pour supprimer votre compte.
                    </p>
                    <Input
                      v-model="confirmText"
                      class="mt-4 mb-8"
                      classes="focus:border-red-500"
                      placeholder="Recopier le texte indiqué..."
                    />
                  </div>
                  <div class="mt-4 flex items-center justify-end gap-2">
                    <Button
                      color="transparent"
                      text="Annuler"
                      @click="deleteAccountModal = false"
                    />
                    <Button
                      text="Supprimer mon compte"
                      :color="
                        confirmText !==
                        user?.username + '#' + user?.discriminator
                          ? 'disabled'
                          : 'red'
                      "
                      @click="deleteAccount"
                    />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </section>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";
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
import axios from "~~/composables/Axios";

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
  data: () => ({
    user: null,
    logs: [],
    length: 4,
    deleteAccountModal: false,
    confirmText: "",
  }),
  async setup() {
    definePageMeta({
      middleware: ["auth"],
    });
  },
  computed: {
    logsFilter() {
      return this.logs.splice(0, this.length);
    },
  },
  async mounted() {
    this.user = await useAuthStore().getUser;

    try {
      const { data } = await axios.get("auth/user/logs");
      this.logs = data.usages;
    } catch (e) {
      console.log(e);
    }

    if (!this.user?.id) {
      return (window.location = "https://umaestro.fr");
    }
  },
  methods: {
    async deleteAccount() {
      if (
        this.confirmText !==
        this.user?.username + "#" + this.user?.discriminator
      )
        return;
      try {
        await axios.delete("auth/user");
        this.logout();
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      const store = useAuthStore();
      this.$toast.show({
        message: `A bientôt ${this.user.username} !`,
        icon: false,
        timeout: 6,
      });
      store.logout();
      return navigateTo("/");
    },
    hideEmail(email) {
      if (!email) return "";
      const [user, domain] = email.split("@");
      return `${user[0]}${new Array(user.length).join("*")}@${domain}`;
    },
  },
};
</script>
