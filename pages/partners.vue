<template>
  <div>
    <header
      class="border-b-8 border-primary-600 bg-gradient-to-br from-primary-500 to-primary-700 py-48"
    >
      <h1 class="text-center text-5xl font-extrabold text-white">
        Partenaires
      </h1>
      <h2
        class="mx-auto mt-6 max-w-2xl text-center text-3xl leading-relaxed text-white"
      >
        Découvre nos partenaires et découvre comment en faire partie
      </h2>
      <Button class="mx-auto mt-6" text="Devenir un partenaire"></Button>
    </header>
    <section class="container mx-auto max-w-3xl py-32">
      <h3 class="mx-auto mb-16 text-center text-3xl font-semibold">
        Nos partenaires
      </h3>
      <div class="grid grid-cols-2 gap-24 lg:grid-cols-3">
        <NuxtLink
          :to="partner.link"
          target="blank"
          class="mx-auto text-center"
          v-for="(partner, id) in partners"
          :key="id"
        >
          <img
            :src="partner.icon"
            class="mx-auto aspect-auto"
            :alt="partner.name"
          />
        </NuxtLink>
      </div>
    </section>
    <section
      class="container relative mx-auto mt-24 mb-24 rounded-2xl bg-primary-500 px-2 pb-48 pt-96 text-white shadow-md"
    >
      <div class="container mx-auto max-w-xl">
        <h4 class="mx-auto mb-16 text-center text-3xl font-semibold">
          Devenir partenaire
        </h4>
        <Input placeholder="Bientôt disponible..." :white="true" />
        <Button
          class="mx-auto mt-24"
          text="Envoyer ma demande"
          color="disabled"
        />
      </div>
      <div
        class="container absolute -top-24 left-1/2 mx-auto max-w-xl -translate-x-1/2 rounded-lg bg-primary-400 p-8"
      >
        <div class="text-xl font-medium">
          Les avantages à collaborer avec nous?
        </div>
        <div class="text-md mt-6 font-medium">Notre créativité</div>
        <p class="mt-2 text-sm">
          UMaestro est un groupe qui anticipe chacun de ses mouvements, et
          prévoit tout une suite de projets pour se construire un avenir
        </p>
        <div class="text-md mt-8 font-medium">Votre Visibilité</div>
        <p class="mt-2 text-sm">
          Nous vous proposons de la visibilité sur notre site et Discord
        </p>
        <div class="text-md mt-8 font-medium">Des Avantages</div>
        <p class="mt-2 text-sm">
          Vous pouvez obtenir des avantages concernant nos projets.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Partenaires",
    });
  },
  data: () => ({
    partners: [
      {
        name: "Discord Analytics",
        link: "https://discordanalytics.fr/",
        icon: "https://media.discordapp.net/attachments/717855648997441576/994001523065487360/imageonline-co-roundcorner_3.png?width=676&height=676",
      },
    ],
  }),
};
</script>
