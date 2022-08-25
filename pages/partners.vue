<template>
    <div>
        <header class="bg-gradient-to-br from-primary-500 to-primary-700 border-b-8 border-primary-600 py-48">
            <h1 class="font-extrabold text-5xl text-white text-center">Partenaires</h1>
            <h2 class="text-3xl max-w-2xl text-center mx-auto mt-6 leading-relaxed text-white">Découvre nos partenaires et découvre comment en faire partie</h2>
            <Button class="mx-auto mt-6" text="Devenir un partenaire"></Button>
        </header>
        <section class="container mx-auto max-w-3xl py-32">
            <h3 class="mx-auto text-center font-semibold text-3xl mb-16">Nos partenaires</h3>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-24">
                <NuxtLink :to="partner.link" target="blank" class="mx-auto text-center" v-for="(partner, id) in partners" :key="id">
                    <img :src="partner.icon" class="mx-auto aspect-auto" :alt="partner.name" />
                </NuxtLink>
            </div>
        </section>
        <section class="bg-primary-500 pb-48 mt-24 pt-96 relative px-2 text-white container mx-auto mb-24 rounded-2xl shadow-md">
            <div class="container mx-auto max-w-xl">
                <h4 class="mx-auto text-center font-semibold text-3xl mb-16">Devenir partenaire</h4>
                <Input placeholder="Bientôt disponible..." :white="true" />
                <Button class="mx-auto mt-24" text="Envoyer ma demande" color="disabled" />
            </div>
            <div class="container mx-auto max-w-xl bg-primary-400 absolute -top-24 left-1/2 -translate-x-1/2 p-8 rounded-lg">
                <div class="text-xl font-medium">Les avantages à collaborer avec nous?</div>
                <div class="text-md font-medium mt-6">Notre créativité</div>
                <p class="text-sm mt-2">UMaestro est un groupe qui anticipe chacun de ses mouvements, et prévoit tout une suite de projets pour se construire un avenir</p>
                <div class="text-md font-medium mt-8">Votre Visibilité</div>
                <p class="text-sm mt-2">Nous vous proposons de la visibilité sur notre site et Discord</p>
                <div class="text-md font-medium mt-8">Des Avantages</div>
                <p class="text-sm mt-2">Vous pouvez obtenir des avantages concernant nos projets.</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        useHead({
            title: 'Partenaires',
        })
    },
    data: () => ({
        partners: [
            {
                name: 'Trouve Ton Staff',
                link: 'https://discord.gg/gcWzeg7kQP',
                icon: 'https://cdn.discordapp.com/attachments/932195461668950036/996444263955050516/App_Icon_3.png'
            },
            {
                name: 'Discord Analytics',
                link: 'https://discordanalytics.fr/',
                icon: 'https://media.discordapp.net/attachments/717855648997441576/994001523065487360/imageonline-co-roundcorner_3.png?width=676&height=676'
            }
        ]
    })
}
</script>