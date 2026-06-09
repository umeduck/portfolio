<script setup lang="ts">
import { ACHIEVEMENTS } from '../data/constants'
</script>

<template>
  <section id="achievements" class="py-24 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <p class="section-label">Achievements</p>
      <h2 class="section-title">実績・成果</h2>
      <p class="section-subtitle mb-12">業務で取り組んできた具体的な成果の一部。</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="item in ACHIEVEMENTS"
          :key="item.title"
          class="card flex flex-col gap-3"
        >
          <span class="text-2xl">{{ item.icon }}</span>
          <h3 class="font-semibold text-slate-900 text-sm leading-snug">{{ item.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
