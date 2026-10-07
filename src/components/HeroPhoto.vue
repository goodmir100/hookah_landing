<script setup>
import { onMounted, ref } from 'vue'
import { CURRENCY, zones } from '../data/dubai'
import { addToBag } from '../store'

const ready = ref(false)
const saved = ref(false)
const zone = ref(zones.value[1])
const price = 249

/* mouse-responsive parallax displacement (-0.5 → 0.5) */
const px = ref(0)
const py = ref(0)

onMounted(() => requestAnimationFrame(() => (ready.value = true)))

function move(e) {
  const r = e.currentTarget.getBoundingClientRect()
  px.value = (e.clientX - r.left) / r.width - 0.5
  py.value = (e.clientY - r.top) / r.height - 0.5
}

function reset() {
  px.value = 0
  py.value = 0
}
</script>

<template>
  <section
    class="relative isolate flex min-h-svh items-center overflow-hidden pb-16 pt-28 md:pt-32"
    @mousemove="move"
    @mouseleave="reset"
  >
    <!-- studio banner plate: spotlighted luxury hardware, deep penthouse bokeh -->
    <img
      src="/media/shisha-hero.svg"
      alt="Luxury hookah studio shot under spotlight"
      class="absolute inset-0 -z-20 size-full object-cover transition-transform duration-500 ease-out will-change-transform"
      :style="{ transform: `translate3d(${px * -14}px, ${py * -14}px, 0) scale(1.08)` }"
    />

    <div class="absolute inset-0 -z-10 bg-ink/70"></div>
    <!-- sharp accent spotlight -->
    <div
      class="absolute inset-0 -z-10"
      style="background: radial-gradient(58% 52% at 50% 38%, rgba(255, 255, 255, 0.16), transparent 70%)"
    ></div>

    <!-- parallax bokeh field -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 transition-transform duration-300 ease-out will-change-transform"
      :style="{ transform: `translate3d(${px * 26}px, ${py * 26}px, 0)` }"
    >
      <span class="absolute left-[12%] top-[20%] size-40 animate-ember rounded-full bg-cobalt/20 blur-3xl"></span>
      <span class="absolute right-[8%] top-[28%] size-56 rounded-full bg-white/5 blur-3xl"></span>
      <span class="absolute bottom-[12%] left-[42%] size-52 rounded-full bg-cobalt/10 blur-3xl"></span>
    </div>
    <div class="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-ink via-ink/70 to-transparent"></div>

    <div class="mx-auto w-full max-w-7xl px-4 md:px-6">
      <Transition name="rise" appear>
        <div v-if="ready" class="mx-auto max-w-2xl text-center">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-cobalt/40 bg-cobalt/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] text-white"
          >
            <span class="size-1.5 rounded-full bg-cobalt shadow-[0_0_10px_#1A4BFF]"></span>
            DUBAI EXCLUSIVE
          </span>

          <h1
            class="mt-6 bg-linear-to-r from-white via-white to-zinc-500 bg-clip-text font-display text-4xl font-bold leading-[0.95] tracking-tight text-transparent transition-all duration-700 hover:from-cobalt hover:via-white hover:to-cobalt sm:text-5xl lg:text-6xl"
          >
            The Penthouse Collection
          </h1>

          <p class="mx-auto mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
            Studio-crafted luxury hardware, spotlighted and sealed for a single-night experience —
            delivered to your door anywhere in Dubai.
          </p>

          <!-- price + CTAs -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
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

          <!-- zone selection -->
          <div class="mt-10 flex flex-wrap justify-center gap-2 rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
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
        </div>
      </Transition>
    </div>
  </section>
</template>
