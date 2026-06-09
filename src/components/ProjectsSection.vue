<script setup lang="ts">
import { PROJECTS } from '../data/constants'
</script>

<template>
  <section id="projects" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <p class="section-label">Projects</p>
      <h2 class="section-title">個人開発</h2>
      <p class="section-subtitle mb-12">自分の課題意識から生まれたプロダクト。</p>

      <div class="flex flex-col gap-6">
        <article
          v-for="project in PROJECTS"
          :key="project.id"
          class="card"
        >
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="text-xl font-bold text-slate-900">{{ project.name }}</h3>
                <span class="font-mono text-xs bg-accent-50 text-accent-600 border border-accent-100 px-2 py-0.5 rounded">
                  {{ project.tagline }}
                </span>
              </div>
              <p class="text-slate-600 text-sm leading-relaxed max-w-2xl">{{ project.description }}</p>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="btn-primary shrink-0 self-start"
            >
              LP を見る
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Detail grid -->
          <div class="grid sm:grid-cols-3 gap-4 mb-6">
            <div class="bg-slate-50 rounded-lg p-4">
              <p class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">開発背景</p>
              <p class="text-sm text-slate-600 leading-relaxed">{{ project.background }}</p>
            </div>
            <div class="bg-slate-50 rounded-lg p-4">
              <p class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">解決したい課題</p>
              <p class="text-sm text-slate-600 leading-relaxed">{{ project.problem }}</p>
            </div>
            <div class="bg-slate-50 rounded-lg p-4">
              <p class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">今後の展望</p>
              <p class="text-sm text-slate-600 leading-relaxed">{{ project.vision }}</p>
            </div>
          </div>

          <!-- Stack -->
          <div>
            <p class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">使用技術</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="skill-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>

        <!-- Placeholder for future projects -->
        <div class="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
          <p class="text-slate-400 text-sm font-mono">// next project coming soon</p>
        </div>
      </div>
    </div>
  </section>
</template>
