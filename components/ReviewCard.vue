<template>
  <div class="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10 flex flex-col">
    <!-- Star Rating -->
    <div class="flex gap-1 mb-4">
      <template v-for="i in 5" :key="i">
        <span
          v-if="i <= Math.floor(review.rating)"
          class="material-symbols-outlined text-secondary"
          style="font-variation-settings: 'FILL' 1;"
        >
          star
        </span>
        <span
          v-else-if="i - review.rating < 1 && review.rating % 1 !== 0"
          class="material-symbols-outlined text-secondary"
          style="font-variation-settings: 'FILL' 0.5;"
        >
          star
        </span>
        <span v-else class="material-symbols-outlined text-secondary/40">
          star
        </span>
      </template>
    </div>

    <!-- Review Text -->
    <p class="text-on-surface-variant mb-6 flex-grow leading-relaxed">
      "{{ review.text }}"
    </p>

    <!-- Author -->
    <p class="font-headline font-bold text-on-surface">{{ review.author }}</p>
    <p class="text-xs text-on-surface-variant">{{ formatDate(review.date) }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '~/data/reviews'

interface Props {
  review: Review
}

defineProps<Props>()

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>
