<template>
  <div class="min-h-screen bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed" :class="{ 'overflow-hidden': isSidebarOpen }">
    <SiteHeader />
    <div class="pt-20">
      <NuxtPage />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

const isSidebarOpen = ref(false)

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Bhakti Tailors',
        description: 'Premier ladies tailoring and custom couture services in Rajkot, specializing in bridal wear, blouses, and bespoke dresses.',
        url: 'https://bhakti-tailors.vercel.app/',
        telephone: '+91-9376886810',
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
          latitude: 22.2880126,
          longitude: 70.8050336
        },
        openingHours: ['Mo-Sa 09:00-19:00', 'Su 10:00-16:00'],
        priceRange: '₹₹',
        image: 'https://bhakti-tailors.vercel.app/SticthingMachine.png',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.8,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 16
        },
        sameAs: [
          'https://www.google.com/maps/place/Bhakti+Tailor/data=!4m2!3m1!1s0x0:0xd006e10ef49fef5d?sa=X&ved=1t:2428&ictx=111'
        ]
      })
    }
  ]
})

// Provide sidebar state to child components
provide('sidebarState', {
  isOpen: readonly(isSidebarOpen),
  toggle: () => isSidebarOpen.value = !isSidebarOpen.value,
  close: () => isSidebarOpen.value = false
})
</script>
