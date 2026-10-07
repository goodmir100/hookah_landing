<script setup>
import { ref } from 'vue'
import { categories } from '../data/dubai'
import { bagCount } from '../store'

const open = ref(false)
const query = ref('')
const activeCat = ref(categories[0])
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <!-- region micro-strip -->
    <div class="hidden border-b border-white/5 bg-black/40 backdrop-blur-xl md:block">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 font-mono text-[11px] tracking-[0.2em] text-zinc-500"
      >
        <span>DELIVERY · DUBAI, UAE ONLY</span>
        <span class="flex items-center gap-2">
          <span class="size-1.5 animate-pulse rounded-full bg-cobalt shadow-[0_0_10px_#1A4BFF]"></span>
          AVG 45 MIN · +971 XX XXX XXXX
        </span>
      </div>
    </div>

    <nav class="border-b border-white/5 bg-black/30 backdrop-blur-2xl">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <!-- logo -->
        <a href="#" class="flex shrink-0 items-center gap-2.5">
          <span
            class="grid size-9 place-items-center rounded-2xl border border-cobalt/50 bg-cobalt/10 shadow-[0_0_20px_-4px_#1A4BFF]"
          >
            <svg viewBox="0 0 24 24" class="size-5 text-cobalt" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
              <path d="M12 3v7m0 0a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4Zm-3 5v9m6-9v9" />
            </svg>
          </span>
          <span class="font-display text-lg font-bold tracking-tight">SHISHA<span class="text-cobalt">·</span>DXB</span>
        </a>

        <!-- desktop categories -->
        <ul class="ml-4 hidden items-center gap-1 lg:flex">
          <li v-for="c in categories" :key="c">
            <button
              type="button"
              class="rounded-full px-3.5 py-2 text-sm font-medium transition"
              :class="activeCat === c
                ? 'bg-white/5 text-white ring-1 ring-cobalt/60'
                : 'text-zinc-500 hover:text-white'"
              @click="activeCat = c"
            >
              {{ c }}
            </button>
          </li>
        </ul>

        <div class="ml-auto flex items-center gap-2">
          <!-- search (md+) -->
          <label class="relative hidden items-center md:flex">
            <svg
              viewBox="0 0 24 24"
              class="pointer-events-none absolute left-3 size-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="6" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              v-model="query"
              type="search"
              placeholder="Search shisha, flavours…"
              class="w-48 rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cobalt focus:ring-2 focus:ring-cobalt/30 lg:w-64"
            />
          </label>

          <!-- shopping bag -->
          <button
            type="button"
            aria-label="Shopping bag"
            class="relative grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cobalt/60 hover:shadow-[0_0_20px_-4px_#1A4BFF]"
          >
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
            <Transition name="sheet">
              <span
                v-if="bagCount"
                class="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-cobalt font-mono text-[10px] font-semibold text-white shadow-[0_0_14px_#1A4BFF]"
              >
                {{ bagCount }}
              </span>
            </Transition>
          </button>

          <!-- mobile burger -->
          <button
            type="button"
            aria-label="Menu"
            class="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cobalt/60 lg:hidden"
            @click="open = !open"
          >
            <svg v-if="!open" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>

      <!-- mobile drawer -->
      <Transition name="sheet">
        <div v-if="open" class="border-t border-white/5 bg-black/80 backdrop-blur-2xl lg:hidden">
          <div class="space-y-1 px-4 py-4">
            <button
              v-for="c in categories"
              :key="c"
              type="button"
              class="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition"
              :class="activeCat === c
                ? 'bg-cobalt/15 text-white ring-1 ring-cobalt/50'
                : 'text-zinc-400 hover:text-white'"
              @click="activeCat = c; open = false"
            >
              {{ c }}
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
