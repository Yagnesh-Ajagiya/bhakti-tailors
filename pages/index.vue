<template>
  <main class="pt-24">
    <section class="relative px-8 py-16 md:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full mb-6">
            <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
            <span class="text-xs font-bold uppercase tracking-wider font-label">Google Business Verified Profile</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-headline font-bold leading-tight mb-6 text-on-background">
            Crafting <span class="text-primary italic">Bespoke Elegance</span> for Every Occasion.
          </h1>
          <p class="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Precision tailoring and professional alterations located in the heart of Gundawadi, Rajkot. We bring your dream designs to life with handcrafted perfection.
          </p>
          <div class="flex flex-wrap gap-4">
            <button type="button" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
              Book a Consultation
            </button>
            <NuxtLink to="/services" class="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-variant transition-all">
              View Services
            </NuxtLink>
          </div>
          <div class="mt-12 flex items-center gap-4">
            <div class="flex -space-x-3">
              <div class="w-10 h-10 rounded-full border-2 border-surface bg-primary-fixed"></div>
              <div class="w-10 h-10 rounded-full border-2 border-surface bg-secondary-fixed"></div>
              <div class="w-10 h-10 rounded-full border-2 border-surface bg-tertiary-fixed"></div>
            </div>
            <p class="text-sm font-medium text-on-surface-variant">Trusted by 500+ happy ladies in Rajkot</p>
          </div>
        </div>
        <div class="lg:col-span-5 relative">
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface-container">
            <img class="w-full h-full object-cover" alt="Close-up of a high-quality brand logo for Bhakti Tailors embroidered onto premium silk fabric with gold thread accents" data-alt="Close-up of a high-quality brand logo for Bhakti Tailors embroidered onto premium silk fabric with gold thread accents" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALkoo0hxEl86RDFP2KrRJb7ylkNFFgrxtN2_Dxtc-rswjWb6LGISYeWuM2WAzWBvwoy_XqsOafxt4enh5OI1SHyyNrNPxexGoEut40gfIA5-N5mjrFUU7Mc1lXMJTW0ql_WiD2XEdOwpXWiOGts8YGCLnEGX0zAVEZj5Ziu184RkeEbrHE2wIFXxsVLhNK06JdQnuuQGmoGs_KJseBPTKvupoGBJhv2pzT2skqcmzn894XQHqo5GWRfG889moBRMWxzz7fNF62Zjc" />
          </div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container rounded-2xl -z-10 rotate-12"></div>
          <div class="absolute -top-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-full -z-10"></div>
        </div>
      </div>
    </section>

    <section class="bg-surface-container-low py-24 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-headline text-4xl md:text-5xl font-bold mb-4">Our Craftsmanship</h2>
          <p class="text-on-surface-variant max-w-2xl mx-auto">From traditional Indian wear to modern western silhouettes, our expertise covers every stitch.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span class="material-symbols-outlined">straighten</span>
              </div>
              <h3 class="font-headline text-3xl font-bold mb-4">Expert Ladies' Tailoring</h3>
              <p class="text-on-surface-variant mb-8 max-w-md">Bespoke stitching for Blouses, Salwar Kameez, Lehengas, and Designer Gowns. Every garment is measured and cut to accentuate your unique silhouette.</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-surface-container px-4 py-3 rounded-full flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="text-xs font-bold uppercase tracking-wider font-label">Custom Patterns</span>
              </div>
              <div class="bg-surface-container px-4 py-3 rounded-full flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-sm" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="text-xs font-bold uppercase tracking-wider font-label">Silk &amp; Brocade</span>
              </div>
            </div>
          </div>

          <div class="bg-primary text-on-primary p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <span class="material-symbols-outlined">content_cut</span>
              </div>
              <h3 class="font-headline text-3xl font-bold mb-4 text-white">Professional Alterations</h3>
              <p class="text-on-primary/80 mb-8">Fast and precise resizing, hem adjustments, and repair services for your favorite wardrobe pieces.</p>
            </div>
            <button type="button" class="w-full py-4 bg-white text-primary rounded-xl font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Quick Fix Quote</button>
          </div>

          <div class="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/30">
            <h4 class="font-headline text-xl font-bold mb-4">Handcrafted in Rajkot</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed mb-6">We take pride in our local heritage, serving the vibrant community of Gundawadi with personal attention that large chains can't match.</p>
            <a href="https://share.google/IgABcyAG3H6apjobj" target="_blank" class="flex items-center gap-3 text-primary">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">location_on</span>
              <span class="font-bold font-label text-sm tracking-tight">2/15 Gundawadi, Rajkot</span>
            </a>
          </div>

          <div class="md:col-span-2 relative h-64 rounded-3xl overflow-hidden group">
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Atmospheric interior view of Bhakti Tailors boutique in Rajkot showing organized spools of colorful thread and traditional sewing machines" data-alt="Atmospheric interior view of Bhakti Tailors boutique in Rajkot showing organized spools of colorful thread and traditional sewing machines" loading="lazy" src="/Public/SticthingMachine.png" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h4 class="text-white font-headline text-2xl font-bold">Visit Our Atelier</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

  <script setup>
definePageMeta({
  title: 'Bhakti Tailors | Premier Ladies\' Tailoring in Rajkot',
  meta: [
    { name: 'description', content: 'Bhakti Tailors offers bespoke ladies tailoring, bridal blouses, and custom couture services in Rajkot with expert fittings and premium craftsmanship.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Bhakti Tailors | Premier Ladies\' Tailoring in Rajkot' },
    { property: 'og:description', content: 'Crafting bespoke dresses, bridal wear, and precision tailoring for women across Rajkot.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/Public/SticthingMachine.png' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: 'Bhakti Tailors | Premier Ladies\' Tailoring in Rajkot' },
    { property: 'twitter:description', content: 'Crafting bespoke dresses, bridal wear, and precision tailoring for women across Rajkot.' },
    { property: 'twitter:image', content: '/Public/SticthingMachine.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Bhakti Tailors',
        description: 'Premier ladies tailoring and custom couture services in Rajkot, specializing in bridal wear, blouses, and bespoke dresses.',
        url: 'https://bhakti-tailors.vercel.app/',
        telephone: '+91-9376886810', // Replace with actual phone
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2/15 Gundawadi',
          addressLocality: 'Rajkot',
          addressRegion: 'Gujarat',
          postalCode: '360002',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.2880126, // Replace with actual coordinates
          longitude: 70.8050336 // Replace with actual coordinates
        },
        openingHours: [
          'Mo-Sa 09:00-19:00',
          'Su 10:00-16:00'
        ],
        priceRange: '₹₹',
        image: '/Public/SticthingMachine.png',
        sameAs: [
          'https://www.google.com/maps/place/Bhakti+Tailor/data=!4m2!3m1!1s0x0:0xd006e10ef49fef5d?sa=X&ved=1t:2428&ictx=111' // Add your Google Business profile URL
        ]
      })
    }
  ]
})
</script>
