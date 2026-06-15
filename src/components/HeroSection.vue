<script setup lang="ts">
import { PROFILE, LINKS } from '../data/profile'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- subtle grid -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: linear-gradient(rgba(129,140,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.05) 1px, transparent 1px); background-size: 48px 48px;"
    ></div>
    <!-- glow orb -->
    <div class="absolute -top-32 right-[-10%] w-[36rem] h-[36rem] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(167,139,250,0.07) 40%, transparent 70%);"
    ></div>
    <!-- crow silhouette (Font Awesome Free "crow" / CC BY 4.0) -->
    <svg
      class="absolute right-[4%] top-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[28rem] text-ink-800/70 pointer-events-none select-none hidden md:block"
      viewBox="0 0 640 512" fill="currentColor" aria-hidden="true"
    >
      <path d="M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.216 30.216 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64zm-80 72c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.75 24-24 24z" />
    </svg>
    <!-- bottom fade -->
    <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 py-32 w-full">
      <div class="max-w-2xl">
        <p class="section-label mb-6 hero-stagger" style="--i: 0">Portfolio</p>

        <h1 class="font-serif text-5xl sm:text-6xl font-bold text-zinc-100 tracking-wider leading-tight mb-4 hero-stagger" style="--i: 1">
          {{ PROFILE.name }}<span class="sheen-text">.</span>
        </h1>

        <div class="mb-6 hero-stagger" style="--i: 2">
          <p class="text-xl font-medium text-zinc-300">{{ PROFILE.title }}</p>
          <p class="font-mono text-sm text-zinc-500 mt-1">{{ PROFILE.titleEn }}</p>
        </div>

        <p class="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl hero-stagger" style="--i: 3">
          {{ PROFILE.bio }}
        </p>

        <div class="flex flex-wrap gap-3 mb-12 hero-stagger" style="--i: 4">
          <a :href="LINKS.crownoteLp" target="_blank" rel="noopener" class="btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            CrowNote を見る
          </a>
          <a v-if="LINKS.email" :href="LINKS.email" class="btn-outline">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </a>
        </div>

        <div class="flex items-center gap-5 hero-stagger" style="--i: 5">
          <a
            :href="LINKS.github"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span class="text-ink-700">|</span>
          <a
            :href="LINKS.twitter"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
            X
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-stagger {
  opacity: 0;
  transform: translateY(20px);
  animation: hero-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i) * 130ms);
}

@keyframes hero-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-stagger {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
