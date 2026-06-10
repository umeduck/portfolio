<script setup lang="ts">
import { CAREER } from '../data/constants'
</script>

<template>
  <section id="career" class="py-24 bg-ink-900/40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div v-reveal>
        <p class="section-label">Career</p>
        <h2 class="section-title">経歴・活動</h2>
        <p class="section-subtitle mb-12">これまでの主な取り組みと経験。</p>
      </div>

      <div class="relative max-w-2xl">
        <!-- Timeline line -->
        <div class="absolute left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-ink-700 to-transparent hidden sm:block"></div>

        <div class="flex flex-col gap-6">
          <div
            v-for="(item, index) in CAREER"
            :key="index"
            v-reveal="index * 80"
            class="flex gap-6"
          >
            <!-- Period label -->
            <div class="shrink-0 w-28 text-right pt-1 hidden sm:block">
              <span class="font-mono text-xs text-zinc-500">{{ item.period }}</span>
            </div>

            <!-- Dot -->
            <div class="relative shrink-0 hidden sm:flex items-start pt-1.5">
              <div class="w-3 h-3 rounded-full bg-accent-400 border-2 border-ink-950 shadow-[0_0_10px_rgba(129,140,248,0.6)] relative z-10"></div>
            </div>

            <!-- Content -->
            <div class="card flex-1 sm:ml-0">
              <p class="font-mono text-xs text-zinc-500 mb-1 sm:hidden">{{ item.period }}</p>
              <h3 class="font-semibold text-zinc-100 text-sm mb-1">{{ item.title }}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
