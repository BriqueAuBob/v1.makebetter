<template>
  <footer
    class="relative overflow-x-hidden bg-primary-600 text-white lg:grid lg:grid-cols-2"
  >
    <div class="col-span-2 border-2 border-primary-700 py-24">
      <div class="mx-auto mb-4 text-center text-xl font-semibold">
        Nous recrutons
      </div>
      <div class="mx-auto max-w-3xl text-center">
        UMaestro est à la recherche de multiples personnes dans divers domaines,
        il se pourrais que tu sois <span class="font-bold">LA</span> personne
        que l’on recherche alors n’hésite pas à postuler
      </div>
      <NuxtLink to="hire">
        <Button
          color="white"
          text="Voir les postes disponible"
          :small="true"
          class="mx-auto mt-8"
        />
      </NuxtLink>
    </div>
    <div class="border-2 border-primary-700 px-24 py-12">
      <div class="font-semibold">umaestro.fr</div>
      <p class="text-md mt-2 max-w-2xl leading-relaxed">
        Nous sommes un groupe sur Internet, plus communément appelé Network,
        nous proposons plusieurs projets en rapport avec le net.
        <br /><br />
        <span class="text-sm font-light text-gray-200"
          >Nous ne sommes pas affiliés avec les services pour lesquels nous
          fournissons des outils.</span
        >
      </p>
    </div>
    <div class="border-2 border-primary-700 px-24 py-12">
      <div class="font-semibold">Liens utiles</div>
      <ul class="mt-4 flex flex-col gap-2 text-sm text-gray-100">
        <li><NuxtLink to="partners">Nos partenaires</NuxtLink></li>
        <li><NuxtLink to="hire">Recrutement</NuxtLink></li>
      </ul>
    </div>
    <div class="border-2 border-primary-700 px-24 py-12">
      <div class="font-semibold">Nos réseaux</div>
      <ul class="mt-4 flex items-center gap-8 text-gray-100">
        <li>
          <a href="https://discord.gg/umaestro" target="_blank"
            ><img class="w-10" src="/icons/discord.svg"
          /></a>
        </li>
        <li>
          <a href="https://twitter.com/gumaestro/" target="_blank"
            ><img class="w-10" src="/icons/twitter.svg"
          /></a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCCMNETJ3w46A6-E55g6GYPg"
            target="_blank"
            ><img class="w-10" src="/icons/youtube.svg"
          /></a>
        </li>
      </ul>
    </div>
    <div class="border-2 border-primary-700 px-24 py-12">
      <div class="font-semibold">Confidentialité et sécurité</div>
      <ul class="mt-4 flex flex-col gap-2 text-sm text-gray-100">
        <li>
          <NuxtLink to="cgu">Conditions générales d'utilisation</NuxtLink>
        </li>
        <li class="text-gray-400">Politique de confidentialité</li>
      </ul>
    </div>
    <div
      class="col-span-2 flex justify-end border-2 border-primary-700 px-24 py-8"
    >
      umaestro.fr - 2022
    </div>

    <img class="absolute -left-64 -top-64 w-1/3" src="/star_footer.svg" />
    <img class="absolute -right-64 top-4 w-1/3" src="/star_footer.svg" />
  </footer>
</template>
