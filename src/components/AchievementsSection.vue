<script setup lang="ts">
import { ACHIEVEMENTS } from '../data/constants'
</script>

<template>
  <section id="achievements" class="py-24 bg-ink-900/40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div v-reveal>
        <p class="section-label">Achievements</p>
        <h2 class="section-title">実績・成果</h2>
        <p class="section-subtitle mb-12">業務で取り組んできた具体的な成果の一部。</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, i) in ACHIEVEMENTS"
          :key="item.title"
          v-reveal="(i % 3) * 100"
          class="card flex flex-col gap-3"
        >
          <span class="text-2xl">{{ item.icon }}</span>
          <h3 class="font-semibold text-zinc-100 text-sm leading-snug">{{ item.title }}</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
