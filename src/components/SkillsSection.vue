<script setup lang="ts">
import { SKILLS } from '../data/constants'

const categoryColors: Record<string, string> = {
  'Backend':              'text-emerald-600 border-emerald-200 bg-emerald-50',
  'Frontend':             'text-blue-600 border-blue-200 bg-blue-50',
  'Infrastructure':       'text-orange-600 border-orange-200 bg-orange-50',
  'Business / Management':'text-violet-600 border-violet-200 bg-violet-50',
}

const categoryIcons: Record<string, string> = {
  'Backend':              '⚙️',
  'Frontend':             '🖥️',
  'Infrastructure':       '☁️',
  'Business / Management':'📐',
}
</script>

<template>
  <section id="skills" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <p class="section-label">Skills</p>
      <h2 class="section-title">技術スタック</h2>
      <p class="section-subtitle mb-12">業務・個人開発を通じて習得してきた技術領域。</p>

      <div class="grid sm:grid-cols-2 gap-5">
        <div
          v-for="skill in SKILLS"
          :key="skill.category"
          class="card"
        >
          <div class="flex items-center gap-2 mb-4">
            <span class="text-lg">{{ categoryIcons[skill.category] }}</span>
            <h3 class="font-semibold text-slate-800 text-sm">{{ skill.category }}</h3>
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
