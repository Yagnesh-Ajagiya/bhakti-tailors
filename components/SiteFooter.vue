<template>
  <footer class="w-full border-t border-[#1d1c12]/10 bg-[#fff9e9]">
    <div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
      <div class="text-lg font-headline text-[#1d1c12] font-bold italic flex flex-col gap-2">
        <span>Bhakti Tailors</span>
        <p class="text-secondary font-body text-sm tracking-wide uppercase">© {{ currentYear }} Bhakti Tailors. Handcrafted in Rajkot.</p>
      </div>
      <!-- <div class="flex gap-8">
        <a class="font-label text-sm tracking-wide uppercase text-[#1d1c12]/60 hover:text-[#b80049] transition-opacity" href="#">Privacy Policy</a>
        <a class="font-label text-sm tracking-wide uppercase text-[#1d1c12]/60 hover:text-[#b80049] transition-opacity" href="#">Terms of Service</a>
        <a class="font-label text-sm tracking-wide uppercase text-[#1d1c12]/60 hover:text-[#b80049] transition-opacity" href="#">Style Guide</a>
      </div> -->
      <div class="text-[#1d1c12]/60 font-label text-xs tracking-widest text-center md:text-right">
        © {{ currentYear }} Bhakti Tailors. Handcrafted in Rajkot.
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>