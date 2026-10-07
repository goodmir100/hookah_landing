<script setup>
import { ref } from 'vue'
import { CURRENCY, products } from '../data/dubai'
import { addToBag } from '../store'

const savedIds = ref([])

function toggleSave(id) {
  savedIds.value = savedIds.value.includes(id)
    ? savedIds.value.filter((x) => x !== id)
    : [...savedIds.value, id]
}
</script>

<template>
  <section id="menu" class="relative border-t border-white/5 bg-ink py-20 md:py-28">
    <div class="mx-auto w-full max-w-7xl px-4 md:px-6">
      <!-- section header -->
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span
            class="inline-flex items-center gap-2 rounded-full border border-cobalt/40 bg-cobalt/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] text-white"
          >
            <span class="size-1.5 rounded-full bg-cobalt shadow-[0_0_10px_#1A4BFF]"></span>
            FEATURED IN DUBAI
          </span>
          <h2 class="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tonight's Selection
          </h2>
          <p class="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
            Hand-picked hardware and flavours, delivered across the emirate in under 45 minutes.
          </p>
        </div>

        <button
          type="button"
          class="hidden rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cobalt/60 sm:inline-flex"
        >
          View all
        </button>
      </div>

      <!-- product grid -->
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="p in products"
          :key="p.id"
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 transition duration-300 hover:border-cobalt/60 hover:shadow-[0_0_40px_-12px_#1A4BFF]"
        >
          <!-- media -->
          <div class="relative aspect-4/5 overflow-hidden bg-black">
            <img
              :src="p.img"
              :alt="p.name"
              loading="lazy"
              class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <span
              v-if="p.exclusive"
              class="absolute left-3 top-3 rounded-full border border-cobalt/50 bg-black/60 px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-white backdrop-blur"
            >
              DUBAI EXCLUSIVE
            </span>

            <!-- bookmark -->
            <button
              type="button"
              :aria-label="`Save ${p.name}`"
              class="absolute right-3 top-3 grid size-9 place-items-center rounded-2xl border backdrop-blur transition"
              :class="savedIds.includes(p.id)
                ? 'border-cobalt bg-cobalt/20 text-cobalt'
                : 'border-white/15 bg-black/50 text-zinc-300 hover:text-white'"
              @click="toggleSave(p.id)"
            >
              <svg viewBox="0 0 24 24" class="size-4.5" :fill="savedIds.includes(p.id) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20s-7-4.4-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7C19 15.6 12 20 12 20Z" />
              </svg>
            </button>
          </div>

          <!-- body -->
          <div class="p-5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-[11px] tracking-[0.2em] text-cobalt">{{ p.tag.toUpperCase() }}</span>
              <span class="font-mono text-[11px] text-zinc-500">{{ p.rating }} ★</span>
            </div>

            <h3 class="mt-2 font-display text-lg font-semibold leading-snug text-white">{{ p.name }}</h3>

            <div class="mt-4 flex items-center justify-between gap-3">
              <div class="font-mono">
                <span class="text-lg font-semibold text-white">{{ p.price }}</span>
                <span class="ml-1 text-xs tracking-widest text-cobalt">{{ CURRENCY }}</span>
              </div>

              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-2xl bg-cobalt px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:animate-glow-pulse"
                @click="addToBag"
              >
                Add
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
