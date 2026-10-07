<script setup>
import { PHONE_MASK, zones } from '../data/dubai'
</script>

<template>
  <footer class="border-t border-white/5 bg-black/60">
    <div class="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
      <div class="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-2.5">
            <span
              class="grid size-9 place-items-center rounded-2xl border border-cobalt/50 bg-cobalt/10 shadow-[0_0_20px_-4px_#1A4BFF]"
            >
              <svg viewBox="0 0 24 24" class="size-5 text-cobalt" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
                <path d="M12 3v7m0 0a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4Zm-3 5v9m6-9v9" />
              </svg>
            </span>
            <span class="font-display text-lg font-bold tracking-tight">SHISHA<span class="text-cobalt">·</span>DXB</span>
          </div>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            Premium hookah delivery, exclusive to Dubai, UAE. Same-night service across the emirate.
          </p>
          <p class="mt-4 font-mono text-sm text-white">{{ PHONE_MASK }}</p>
        </div>

        <div>
          <h4 class="font-mono text-[11px] tracking-[0.2em] text-zinc-500">DELIVERY ZONES</h4>
          <ul class="mt-4 grid grid-cols-1 gap-2 text-sm text-zinc-400 sm:grid-cols-2">
            <li v-for="z in zones" :key="z" class="transition hover:text-white">{{ z }}</li>
          </ul>
        </div>

        <div>
          <h4 class="font-mono text-[11px] tracking-[0.2em] text-zinc-500">COMPANY</h4>
          <ul class="mt-4 space-y-2 text-sm text-zinc-400">
            <li class="transition hover:text-white">About</li>
            <li class="transition hover:text-white">How it works</li>
            <li class="transition hover:text-white">Support</li>
            <li class="transition hover:text-white">Terms &amp; Privacy</li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 font-mono text-[11px] tracking-wide text-zinc-500 sm:flex-row sm:items-center"
      >
        <span>© {{ new Date().getFullYear() }} SHISHA·DXB — ALL RIGHTS RESERVED</span>
        <span>PAYMENTS IN AED · DUBAI, UNITED ARAB EMIRATES</span>
      </div>
    </div>
  </footer>
</template>
