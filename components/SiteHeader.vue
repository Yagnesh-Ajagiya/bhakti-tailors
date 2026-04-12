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
        <button class="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary-container transition-all duration-200 shadow-sm active:scale-95 hidden sm:block">
          Book Consultation
        </button>
        <!-- Mobile menu button -->
        <button
          @click="toggleSidebar"
          class="md:hidden p-2 text-[#1d1c12] hover:text-[#b80049] transition-all duration-200 rounded-lg hover:bg-[#b80049]/10"
          aria-label="Toggle menu">
          <svg class="w-6 h-6 transition-transform duration-200" :class="{ 'rotate-90': isSidebarOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isSidebarOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Sidebar -->
    <div
      class="fixed inset-0 z-50 md:hidden h-screen w-screen"
      :class="{ 'pointer-events-none': !isSidebarOpen }"
      @click="closeSidebar">
      <!-- Backdrop overlay -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        :class="{ 'opacity-0': !isSidebarOpen, 'opacity-100': isSidebarOpen }"
        @click="closeSidebar"></div>

      <!-- Sidebar panel -->
      <div
        class="absolute right-0 top-0 h-full w-72 bg-[#fff9e9] shadow-2xl border-l border-[#1d1c12]/10 transform transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }"
        @click.stop>
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex justify-between items-center p-6 border-b border-[#1d1c12]/10">
            <div class="text-xl font-headline font-bold text-primary italic">Bhakti Tailors</div>
            <button
              @click="closeSidebar"
              class="p-2 text-[#1d1c12] hover:text-[#b80049] transition-colors rounded-lg hover:bg-[#b80049]/10"
              aria-label="Close menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Navigation Links -->
          <div class="flex-1 px-6 py-6">
            <div class="space-y-2">
              <template v-for="(item, index) in navLinks" :key="item.label">
                <NuxtLink
                  v-if="item.to"
                  :to="item.to"
                  @click="closeSidebar"
                  class="block py-3 px-4 text-[#1d1c12] hover:text-[#b80049] hover:bg-[#b80049]/10 rounded-lg transition-all duration-200 font-headline font-medium transform hover:translate-x-1"
                  :style="{ transitionDelay: `${index * 50}ms` }">
                  {{ item.label }}
                </NuxtLink>
                <a
                  v-else
                  :href="item.href"
                  @click="closeSidebar"
                  class="block py-3 px-4 text-[#1d1c12] hover:text-[#b80049] hover:bg-[#b80049]/10 rounded-lg transition-all duration-200 font-headline font-medium transform hover:translate-x-1"
                  :style="{ transitionDelay: `${index * 50}ms` }">
                  {{ item.label }}
                </a>
              </template>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="px-6 pb-6 border-t border-[#1d1c12]/10">
            <div class="flex items-center gap-4 mb-6">
              <a href="https://maps.app.goo.gl/TrUY5ucAYatrmtjj8" target="_blank" class="flex items-center gap-2 text-secondary hover:text-[#b80049] transition-colors">
                <span class="material-symbols-outlined">location_on</span>
                <span class="text-sm">Location</span>
              </a>
              <a href="tel:+919376886810" target="_blank" class="flex items-center gap-2 text-secondary hover:text-[#b80049] transition-colors">
                <span class="material-symbols-outlined">call</span>
                <span class="text-sm">Call</span>
              </a>
            </div>
            <button class="w-full bg-primary text-on-primary px-6 py-3 rounded-xl font-medium hover:bg-primary-container transition-all duration-200 shadow-sm active:scale-95">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { navLinks } from '~/data/navigation'
import { useRoute } from '#app'

const route = useRoute()
const { isOpen: isSidebarOpen, toggle: toggleSidebar, close: closeSidebar } = inject('sidebarState')

const linkClass = (item) => {
  const base = 'transition-colors'
  if (item.to && route.path === item.to) {
    return `${base} text-[#b80049] border-b-2 border-[#b80049] pb-1`
  }
  return `${base} text-[#1d1c12] hover:text-[#b80049]`
}

// Close sidebar when route changes
watch(() => route.path, () => {
  closeSidebar()
})
</script>
