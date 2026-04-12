<template>
  <main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
      <div>
        <span class="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
        <h1 class="text-5xl md:text-7xl font-headline font-bold text-on-background leading-tight mb-6">
          Let’s craft your <span class="italic text-primary">perfect fit</span> together.
        </h1>
        <p class="text-lg text-on-surface-variant max-w-md">
          Visit our atelier in Rajkot for personalized fittings, fabric selection, and expert tailoring advice.
        </p>
      </div>
      <div class="relative h-64 lg:h-80 w-full rounded-xl overflow-hidden shadow-xl">
        <img
          src="/Public/LadyOnMirror.png"
          alt="Professional tailoring and fashion fitting at our boutique atelier"
          class="w-full h-full object-cover"
          loading="lazy"/>
        <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
      </div>
    </div>

    <!-- Main Content Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div class="md:col-span-7 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm">
        <h2 class="text-3xl font-headline font-bold mb-8">Send an Inquiry</h2>
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
              <input
                type="text"
                placeholder="Rashmika Mandanna"
                class="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-4"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                class="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-4"
              />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Service Required</label>
            <select
              class="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-4"
            >
              <option>Wedding Sherwani</option>
              <option>Bespoke Suit</option>
              <option>Alterations</option>
              <option>Fabric Selection</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your requirements..."
              class="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-4"
            ></textarea>
          </div>
          <button
            type="button"
            class="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center gap-3"
          >
            Submit Inquiry
            <span class="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>

      <div class="md:col-span-5 lg:col-span-4 space-y-8">
        <div class="bg-secondary-container p-8 rounded-xl shadow-sm border-l-8 border-secondary flex flex-col items-start gap-4">
          <span class="bg-secondary text-on-secondary p-3 rounded-full material-symbols-outlined">call</span>
          <div>
            <h3 class="text-2xl font-bold text-on-secondary-container">Immediate Assistance?</h3>
            <p class="text-on-secondary-container/80 mb-6">Call us directly to schedule an urgent fitting or check status.</p>
            <a
              href="tel:+919376886810"
              class="inline-flex items-center gap-3 bg-on-secondary-container text-surface-bright px-8 py-3 rounded-full font-extrabold text-xl shadow-md hover:scale-105 transition-transform"
            >
              +91 93768 86810
            </a>
          </div>
        </div>

        <div class="bg-surface-container-high p-8 rounded-xl space-y-6">
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-secondary">schedule</span>
            <h3 class="text-xl font-bold uppercase tracking-tight">Atelier Hours</h3>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center border-b border-outline-variant pb-2">
              <span class="font-medium">Monday - Saturday</span>
              <span class="font-bold text-primary">9 AM - 9 PM</span>
            </div>
            <div class="flex justify-between items-center opacity-60">
              <span class="font-medium">Sunday</span>
              <span class="font-bold">9 AM - 6 PM</span>
            </div>
          </div>
          <div class="bg-surface-bright p-4 rounded-lg flex items-center gap-3">
            <span class="material-symbols-outlined text-secondary text-sm">info</span>
            <p class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Recommended: Book appointment for wedding consultations.</p>
          </div>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-sm space-y-4">
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-primary">location_on</span>
            <h3 class="text-xl font-bold">Main Boutique</h3>
          </div>
          <p class="text-lg leading-relaxed text-on-surface-variant italic">
            Street no.2/15 close street,<br />
            Gundawadi, Rajkot - 360002<br />
            Gujarat, India
          </p>
        </div>
      </div>
    </div>

    <div class="mt-20">
      <div class="flex items-center justify-between mb-8 flex-col gap-4 md:flex-row">
        <h2 class="text-3xl font-bold">Our Location in <span class="text-secondary italic">Gundawadi</span></h2>
        <div class="flex gap-2 flex-wrap">
          <span class="bg-surface-container-highest px-4 py-2 rounded-full text-sm font-bold">Landmark: Gundawadi Main Rd</span>
        </div>
      </div>
      <div class="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
          data-alt="Top down aesthetic map of an urban city with vibrant colored landmarks and elegant gold line street markings"
          class="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
         alt="Top down aesthetic map of an urban city with vibrant colored landmarks and elegant gold line street markings" loading="lazy"/>
        <div class="absolute inset-0 bg-black/5 flex items-center justify-center">
          <div class="bg-surface-bright p-6 rounded-2xl shadow-2xl border-4 border-primary/20 flex flex-col items-center text-center max-w-sm">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-4 animate-bounce">
              <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">location_on</span>
            </div>
            <h4 class="text-xl font-extrabold mb-1">Bhakti Tailors</h4>
            <p class="text-sm text-on-surface-variant mb-4">Gundawadi Street 2/15</p>
            <a href="https://maps.app.goo.gl/TrUY5ucAYatrmtjj8" target="_blank" class="bg-on-background text-surface-bright px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors">Open in Maps</a>
          </div>
        </div>
        <!-- <div class="absolute bottom-6 right-6 flex flex-col gap-2">
          <div class="bg-surface-bright/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span class="material-symbols-outlined text-secondary text-sm">directions_car</span>
            <span class="text-xs font-bold uppercase tracking-tighter">15m from Central Station</span>
          </div>
          <div class="bg-surface-bright/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span class="material-symbols-outlined text-secondary text-sm">local_parking</span>
            <span class="text-xs font-bold uppercase tracking-tighter">Valet Parking Available</span>
          </div>
        </div> -->
      </div>
    </div>

    <div class="mt-32 text-center bg-primary-container/10 py-16 rounded-[2rem] px-8 border border-primary/5">
      <h2 class="text-4xl font-headline font-bold mb-6 italic">Ready for a bespoke experience?</h2>
      <p class="text-on-surface-variant mb-10 max-w-xl mx-auto">Skip the queue and secure your slot with our master tailor for a one-on-one session.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button type="button" class="bg-primary text-on-primary px-12 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-primary/20">Book Consultation Now</button>
        <NuxtLink to="/gallery" class="bg-secondary-container text-on-secondary-container px-12 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-transform">Explore Styles</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Contact & Location | Bhakti Tailors',
  meta: [
    { name: 'description', content: 'Contact Bhakti Tailors in Rajkot to schedule a consultation, book a fitting, or inquire about bespoke bridal and couture tailoring services.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Contact & Location | Bhakti Tailors' },
    { property: 'og:description', content: 'Reach out to Bhakti Tailors in Rajkot for personalized fittings, bridal tailoring, and couture consultations.' },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: 'Contact & Location | Bhakti Tailors' },
    { property: 'twitter:description', content: 'Reach out to Bhakti Tailors in Rajkot for personalized fittings, bridal tailoring, and couture consultations.' }
  ]
})
</script>
