<template>
  <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <header class="mb-16 max-w-2xl">
      <span class="font-label text-sm tracking-[0.2em] uppercase text-secondary font-bold mb-4 block">Visual Excellence</span>
      <h1 class="font-headline text-5xl md:text-6xl font-bold text-on-surface leading-tight mb-6">The Art of <span class="italic text-primary">Bespoke</span> Tailoring</h1>
      <p class="text-lg text-on-surface-variant leading-relaxed">Explore our curated portfolio of handcrafted garments, from traditional bridal wear to contemporary silhouettes. Witness the precision of our Rajkot atelier where every stitch tells a story of heritage.</p>
    </header>

    <!-- <div class="flex flex-wrap gap-4 mb-12">
      <button class="px-6 py-2 rounded-full bg-primary text-on-primary font-medium">All Works</button>
      <button class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all">Bridal</button>
      <button class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all">Formal Wear</button>
      <button class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all">Our Atelier</button>
    </div> -->

    <div class="masonry-grid">
      <div class="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl">
        <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Luxurious interior of a boutique tailor shop with wooden counters, rolls of fine silk fabric, and warm ambient lighting in Rajkot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsxeNMmNiLpwPA7CUHf0pqAmiUv6bQD03kqVD7q3cP2ulQ9bDdUSUOOrTm3wIX2b29uCWW9mt0r8GzvpqGhuZDg94_AeyJG8KKtsq_NOwwMYj7N_CWjYLk8eGG2tYkpHK4aUnKP8l_fvFrcS26-pwcRU_GWpmiEMKiwQ10SSkSVNyvfyKebD_hidlUwM55IABfJOTL0Ku-xuzVlVANF35TX8LapGr7t-UJFn4Nak1LnpRV35r2unFs_rBtdZUhx0-fU0S4-tbIYO0"  alt="Luxurious interior of a boutique tailor shop with wooden counters, rolls of fine silk fabric, and warm ambient lighting in Rajkot" loading="lazy"/>
        <div class="p-6">
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">Our Boutique Interior</h3>
          <p class="font-label text-xs uppercase tracking-wider text-secondary">The Atelier • Rajkot</p>
        </div>
      </div>

      <div class="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl">
        <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of intricate gold zardosi embroidery on deep crimson velvet fabric for a traditional bridal lehenga" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDC0eAiwFGUnc30WR5TeIZwZpG6wq-ZVePYbpHDeiEhjF0m2hLXunwmsP_ngkAGxvbgJfEyHz4NUlXrxZTUXk-qPK-90N4YygK29omHTo2GydAJIYkO_idDP5tauQpXfugXeo2OGcpZtaNSlebbfpVBN5g5Pjin4YbJksyGACO8k82o1D0eBr4Ns_JxCx8Dq-rMMuREoj3GI8tETmJxBuT3NTd51LFBHdhKL0C7b2GHp7aZDh5Uc5HE01eCnPBzgUuQrg4U3QNEeo"  alt="Close-up of intricate gold zardosi embroidery on deep crimson velvet fabric for a traditional bridal lehenga" loading="lazy"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span class="text-white font-headline italic">Exquisite Zardosi Detailing</span>
        </div>
      </div>

      <div class="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl">
        <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Elegant storefront of Bhakti Tailors with clean modern signage and mannequins dressed in handcrafted ethnic couture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_lqmAjM1nGFTA3e1WHU_nuN7kF4D8mJSRnLn1jJWMKgErEYrfNYRR2TNe7TyZYyEDgarwQf3dX9Di-i8BlxhojnCKO3g72k4ZjinrUygaRAgV07niBfJLGgK0Rp8b07OLa4lKrUjvFUqf8FjsMFiFSwm-1Jo2xfHT8LtjHBucDJD58Dr1UT36cgTJEw27dSgg2bUV_XC0JZoO4Vrmv3kyx4r-jezjo-o2GmzQdAefKdBivB2zrGY85STV5xckASIIQYEXRq_rang"  alt="Elegant storefront of Bhakti Tailors with clean modern signage and mannequins dressed in handcrafted ethnic couture" loading="lazy"/>
        <div class="p-6">
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">Heritage Storefront</h3>
          <p class="font-label text-xs uppercase tracking-wider text-secondary">Est. 2010</p>
        </div>
      </div>

      <!-- <div class="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl">
        <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A man in a sharp bespoke charcoal grey suit with perfect tailoring and subtle pinstripes standing in a soft-focus studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAskiVpU0eSzNs1XeAcBMPdlA0q_pHUURxOdeOuFq164MLK_Vzc9HwzVCJAj4_Qcn7HOsmBX7brf0CU_SJ4nSPCiRqZQD4NJyHBgpx4WHTTzEldiA1yKBKU3VdwctvgYoJLnl3T52TEBeqKnBloK3cRJXU62DT2Z7Vtqo8a1lgdva4ZpWV5LgUlbjo5Hig8Vv-ob6BPKYVxN3ueOBib4S1PCpkyDQvJqfxAjeKNoNM7dI2vcOKn1i0xrIuccGWQwLhhu6-ux58eN8"  alt="A man in a sharp bespoke charcoal grey suit with perfect tailoring and subtle pinstripes standing in a soft-focus studio" loading="lazy"/>
        <div class="p-6">
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">Modern Menswear</h3>
          <p class="font-label text-xs uppercase tracking-wider text-secondary">Premium Suiting</p>
        </div>
      </div> -->

      <div class="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl">
        <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Vintage sewing machine on a wooden table with chalk marks on fabric and measuring tapes, warm cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDydUDVVMIlRbayO_C2_jS4YA16x1Np6yf9XGTeGH7kSBru_ucTDJW3xujGKU0oS9M-PHo-SJUkgEjInOn_L9VzA7LRPDUXoVD22A15OWqnwg8cDt4vT2biMhtBZO3yveyjgpqiYUFqACppotah_If-qrj5CtPSVvTN7CdFlUkLEZS9GhNjkjN4z7tzBZ-Yyb5aBe_xZ0obydNUJQ1x9kMcGwnNzCDNo3lc6Q2WmtO8HKJkmBsJNm0euvDLejPE0lsomP3mSB_5oys"  alt="Vintage sewing machine on a wooden table with chalk marks on fabric and measuring tapes, warm cinematic lighting" loading="lazy"/>
        <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="p-6">
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">The Crafting Process</h3>
          <p class="font-label text-xs uppercase tracking-wider text-secondary">Handmade Precision</p>
        </div>
      </div>

      <div class="masonry-item group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl">
        <img class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A woman draped in a royal blue Banarasi silk saree with gold border, showcasing the drape and tailoring quality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDky_TJUbwdqMF9W74225updkv22Y1X9vve2k5rF1zSIXu12YrA5psB0G63pKy2JyEPqe_Su9Vxr3REMk7rDG_YjmfGWaAIm_gj3Et_w46X0_pQLNODPUTP5sdXl5U9UdMJn85F5vVtJVspFyX-e7kHz_eFD-nG1sEtpm5NL0dNNERb3U6zQl_baHh7yD8tsrQXTSIWz18ob0uH-CzZOHWWQPVxJQVQhDAKYro1aP66uB4eiy9ziaXjefYIFndU5DwqKAFk-ZENOMM"  alt="A woman draped in a royal blue Banarasi silk saree with gold border, showcasing the drape and tailoring quality" loading="lazy"/>
        <div class="p-6">
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">Silk Masterpieces</h3>
          <p class="font-label text-xs uppercase tracking-wider text-secondary">Traditional Drape</p>
        </div>
      </div>
    </div>

    <section class="mt-32 p-12 rounded-[2rem] bg-surface-container-high relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="font-headline text-3xl font-bold text-on-surface mb-6">Experience the Quality in Person</h2>
          <p class="text-on-surface-variant mb-8 leading-relaxed">Digital images only tell half the story. Visit our Rajkot boutique to feel the fabrics, see the meticulous handiwork, and discuss your vision with our master tailors.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                <span class="material-symbols-outlined">verified</span>
              </span>
              <div>
                <p class="font-bold text-on-surface">Certified Artisans</p>
                <p class="text-xs text-on-surface-variant">12+ Years Experience</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span class="material-symbols-outlined">schedule</span>
              </span>
              <div>
                <p class="font-bold text-on-surface">Timed Delivery</p>
                <p class="text-xs text-on-surface-variant">Guaranteed on time</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-2xl shadow-sm rotate-2">
          <img class="rounded-xl w-full h-64 object-cover" data-alt="A customer during a garment fitting, looking into a large ornate mirror with a tailor adjusting the sleeve" src="/Public/LadyOnMirror.png"  alt="A customer during a garment fitting, looking into a large ornate mirror with a tailor adjusting the sleeve" loading="lazy"/>
          <p class="mt-4 text-center font-headline italic text-primary">Personalized Fitting Sessions</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Gallery | Bhakti Tailors',
  meta: [
    { name: 'description', content: 'View the Bhakti Tailors gallery showcasing handcrafted bridal wear, contemporary couture, and traditional tailoring work from Rajkot.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Gallery | Bhakti Tailors' },
    { property: 'og:description', content: 'Browse our curated portfolio of handcrafted garments, bridal wear, and bespoke couture from Rajkot.' },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: 'Gallery | Bhakti Tailors' },
    { property: 'twitter:description', content: 'Browse our curated portfolio of handcrafted garments, bridal wear, and bespoke couture from Rajkot.' }
  ]
})
</script>
