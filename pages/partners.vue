<template>
    <div>
        <header class="bg-primary-500 border-b-8 border-primary-400 py-48">
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
        <section class="bg-primary-500 pb-48 mt-24 pt-96 relative px-2">
            <div class="container mx-auto max-w-xl">
                <h4 class="mx-auto text-center font-semibold text-3xl mb-16">Devenir partenaire</h4>
                <Input placeholder="Bientôt disponible..." :white="true" />
                <Button class="mx-auto mt-24" text="Envoyer ma demande" color="disabled" />
            </div>
            <div class="container mx-auto max-w-xl bg-primary-400 absolute -top-24 left-1/2 -translate-x-1/2 p-8 rounded-lg">
                <div class="text-xl font-medium">Les avantages à collaborer avec nous?</div>
                <div class="text-md font-medium mt-6">Mise en avant de votre projet</div>
                <p class="text-sm mt-2">Lorem ipsum dolor sit amet bla bla bla bla bla bla bla bla bal bfz hbioggf gfz gfz gufzu hgfzh uygfzhyu gyhz yugfhz yugfz.</p>
                <div class="text-md font-medium mt-8">Mise en avant de votre projet</div>
                <p class="text-sm mt-2">Lorem ipsum dolor sit amet bla bla bla bla bla bla bla bla bal bfz hbioggf gfz gfz gufzu hgfzh uygfzhyu gyhz yugfhz yugfz.</p>
                <div class="text-md font-medium mt-8">Mise en avant de votre projet</div>
                <p class="text-sm mt-2">Lorem ipsum dolor sit amet bla bla bla bla bla bla bla bla bal bfz hbioggf gfz gfz gufzu hgfzh uygfzhyu gyhz yugfhz yugfz.</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data: () => ({
        partners: [
            {
                name: 'Meta',
                link: 'https://meta.com',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
            },
            {
                name: 'Meta',
                link: 'https://meta.com',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
            },
            {
                name: 'Meta',
                link: 'https://meta.com',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
            },
            {
                name: 'Meta',
                link: 'https://meta.com',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
            },
            {
                name: 'Meta',
                link: 'https://meta.com',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
            },
            {
                name: 'Meta',
                link: 'https://meta.com',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
            },
        ]
    })
}
</script>