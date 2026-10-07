<script setup>
import { onMounted, ref } from 'vue'
import { CURRENCY, PHONE_MASK, zones } from '../data/dubai'
import { addToBag } from '../store'

const ready = ref(false)
const saved = ref(false)
const zone = ref(zones.value[0])
const phone = ref('')
const price = 189

onMounted(() => requestAnimationFrame(() => (ready.value = true)))
</script>

<template>
  <section class="relative isolate flex min-h-svh items-center overflow-hidden pb-16 pt-28 md:pt-32">
    <!-- cinematic plate: metallic shisha hardware, glowing embers, dark ambient smoke, blurred Downtown Dubai skyline -->
    <img
      src="/media/hero-video-poster.webp"
      alt="Luxury metallic hookah with glowing embers against a blurred Downtown Dubai night skyline"
      class="absolute inset-0 -z-20 size-full animate-kenburns object-cover"
    />

    <!-- heavy dark backdrop layer -->
    <div class="absolute inset-0 -z-10 bg-black/65 backdrop-blur-[2px]"></div>
    <div class="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/40 to-ink/70"></div>
    <div class="pointer-events-none absolute -left-24 top-1/4 -z-10 size-112 animate-ember rounded-full bg-cobalt/20 blur-[120px]"></div>
    <div class="pointer-events-none absolute right-0 top-0 -z-10 size-72 rounded-full bg-cobalt/10 blur-[100px]"></div>

    <div class="mx-auto w-full max-w-7xl px-4 md:px-6">
      <Transition name="rise" appear>
        <div v-if="ready" class="max-w-3xl">
          <!-- micro-badge -->
          <span
            class="inline-flex items-center gap-2 rounded-full border border-cobalt/40 bg-cobalt/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] text-white"
          >
            <span class="size-1.5 rounded-full bg-cobalt shadow-[0_0_10px_#1A4BFF]"></span>
            DUBAI EXCLUSIVE
          </span>

          <h1 class="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            Premium Hookah,<br />
            <span class="text-cobalt">Delivered</span> Across Dubai.
          </h1>

          <p class="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Cinematic hardware, hand-picked flavours and same-night delivery to your marina, penthouse
            or desert lounge — anywhere inside the emirate.
          </p>

          <!-- price + CTAs -->
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <div class="mr-2 font-mono">
              <span class="text-xs tracking-widest text-zinc-500">FROM</span>
              <div class="text-2xl font-semibold tracking-tight text-white">
                {{ price }} <span class="text-cobalt">{{ CURRENCY }}</span>
              </div>
            </div>

            <button
              type="button"
              class="group inline-flex items-center gap-2 rounded-2xl bg-cobalt px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:animate-glow-pulse"
              @click="addToBag"
            >
              Order Now
              <svg viewBox="0 0 24 24" class="size-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur transition hover:border-cobalt/60"
            >
              Browse Menu
            </button>

            <button
              type="button"
              aria-label="Save"
              class="grid size-12 place-items-center rounded-2xl border transition"
              :class="saved
                ? 'border-cobalt bg-cobalt/15 text-cobalt shadow-[0_0_18px_-4px_#1A4BFF]'
                : 'border-white/15 bg-white/5 text-zinc-400 hover:text-white'"
              @click="saved = !saved"
            >
              <svg viewBox="0 0 24 24" class="size-5" :fill="saved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20s-7-4.4-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7C19 15.6 12 20 12 20Z" />
              </svg>
            </button>
          </div>

          <!-- zone selection + UAE phone -->
          <div
            class="mt-10 grid gap-3 rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div class="flex flex-wrap gap-2">
              <button
                v-for="z in zones"
                :key="z"
                type="button"
                class="rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wide transition"
                :class="zone === z
                  ? 'border-cobalt bg-cobalt/15 text-white shadow-[0_0_16px_-6px_#1A4BFF]'
                  : 'border-white/10 text-zinc-500 hover:text-white'"
                @click="zone = z"
              >
                {{ z }}
              </button>
            </div>

            <div
              class="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 transition focus-within:border-cobalt focus-within:ring-2 focus-within:ring-cobalt/30"
            >
              <span class="font-mono text-sm text-zinc-500">+971</span>
              <input
                v-model="phone"
                type="tel"
                inputmode="numeric"
                :placeholder="PHONE_MASK.slice(5)"
                class="w-full bg-transparent py-3 font-mono text-sm text-white outline-none placeholder:text-zinc-600 sm:w-40"
              />
            </div>
          </div>

          <!-- stats -->
          <dl class="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-white/5 pt-6">
            <div>
              <dt class="font-mono text-[11px] tracking-widest text-zinc-500">DELIVERY</dt>
              <dd class="mt-1 text-lg font-semibold">45 min</dd>
            </div>
            <div>
              <dt class="font-mono text-[11px] tracking-widest text-zinc-500">AREAS</dt>
              <dd class="mt-1 text-lg font-semibold">{{ zones.length }} zones</dd>
            </div>
            <div>
              <dt class="font-mono text-[11px] tracking-widest text-zinc-500">RATING</dt>
              <dd class="mt-1 text-lg font-semibold">4.9 ★</dd>
            </div>
          </dl>
        </div>
      </Transition>
    </div>
  </section>
</template>
