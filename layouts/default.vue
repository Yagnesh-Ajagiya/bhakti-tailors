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
        telephone: '+91 9376886810',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Street no.2/15 close street',
          addressLocality: 'Gundawadi, Rajkot',
          addressRegion: 'Gujarat',
          postalCode: '360002',
          addressCountry: 'IN'
        },
        openingHours: 'Mo-Sa 09:00-21:00',
        priceRange: '₹₹',
        sameAs: []
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
