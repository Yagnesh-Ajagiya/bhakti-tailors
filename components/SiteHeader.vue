<template>
  <nav class="fixed top-0 w-full z-50 bg-[#fff9e9]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(29,28,18,0.06)]">
    <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <div class="text-2xl font-headline font-bold text-primary italic">Bhakti Tailors</div>
      <div class="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight">
        <template v-for="item in navLinks" :key="item.label">
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            :class="linkClass(item)">
            {{ item.label }}
          </NuxtLink>
          <a
            v-else
            :href="item.href"
            class="text-[#1d1c12] hover:text-[#b80049] transition-colors">
            {{ item.label }}
          </a>
        </template>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden sm:flex items-center gap-2 text-secondary">
          <a href="https://maps.app.goo.gl/TrUY5ucAYatrmtjj8" target="_blank" class="material-symbols-outlined cursor-pointer">location_on</a>
          <a href="tel:+919376886810" target="_blank" class="material-symbols-outlined cursor-pointer">call</a>
        </div>
        <button class="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary-container transition-all duration-200 shadow-sm active:scale-95">
          Book Consultation
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { navLinks } from '~/data/navigation'
import { useRoute } from '#app'

const route = useRoute()

const linkClass = (item) => {
  const base = 'transition-colors'
  if (item.to && route.path === item.to) {
    return `${base} text-[#b80049] border-b-2 border-[#b80049] pb-1`
  }
  return `${base} text-[#1d1c12] hover:text-[#b80049]`
}
</script>
