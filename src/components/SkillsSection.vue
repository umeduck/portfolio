<script setup lang="ts">
import { SKILLS } from '../data/constants'

const categoryColors: Record<string, string> = {
  'Backend':               'text-emerald-300 border-emerald-400/25 bg-emerald-400/10',
  'Frontend':              'text-sky-300 border-sky-400/25 bg-sky-400/10',
  'Infrastructure':        'text-orange-300 border-orange-400/25 bg-orange-400/10',
  'Business / Management': 'text-violet-300 border-violet-400/25 bg-violet-400/10',
}

const categoryIcons: Record<string, string> = {
  'Backend':               '⚙️',
  'Frontend':              '🖥️',
  'Infrastructure':        '☁️',
  'Business / Management': '📐',
}
</script>

<template>
  <section id="skills" class="py-24">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div v-reveal>
        <p class="section-label">Skills</p>
        <h2 class="section-title">技術スタック</h2>
        <p class="section-subtitle mb-12">業務・個人開発を通じて習得してきた技術領域。</p>
      </div>

      <div class="grid sm:grid-cols-2 gap-5">
        <div
          v-for="(skill, i) in SKILLS"
          :key="skill.category"
          v-reveal="i * 100"
          class="card"
        >
          <div class="flex items-center gap-2 mb-4">
            <span class="text-lg">{{ categoryIcons[skill.category] }}</span>
            <h3 class="font-semibold text-zinc-200 text-sm">{{ skill.category }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in skill.items"
              :key="item"
              :class="['skill-tag', categoryColors[skill.category]]"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
