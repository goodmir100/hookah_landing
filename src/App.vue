<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroVideo from './components/HeroVideo.vue'
import HeroPhoto from './components/HeroPhoto.vue'

const heroVariant = ref('video')
</script>

<template>
  <div class="min-h-screen bg-ink font-display text-white antialiased selection:bg-cobalt/30">
    <Navbar />

    <main>
      <Transition name="hero" mode="out-in">
        <HeroVideo v-if="heroVariant === 'video'" key="video" />
        <HeroPhoto v-else key="photo" />
      </Transition>
    </main>

    <!-- variant switch control -->
    <div
      class="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full border border-white/10 bg-black/60 p-1 backdrop-blur-xl"
    >
      <button
        v-for="v in ['video', 'photo']"
        :key="v"
        type="button"
        class="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition"
        :class="heroVariant === v
          ? 'bg-cobalt text-white shadow-[0_0_20px_-4px_#1A4BFF]'
          : 'text-zinc-500 hover:text-white'"
        @click="heroVariant = v"
      >
        {{ v }}
      </button>
    </div>
  </div>
</template>
