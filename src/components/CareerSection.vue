<script setup lang="ts">
import { CAREER } from '../data/constants'
</script>

<template>
  <section id="career" class="py-24 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <p class="section-label">Career</p>
      <h2 class="section-title">経歴・活動</h2>
      <p class="section-subtitle mb-12">これまでの主な取り組みと経験。</p>

      <div class="relative max-w-2xl">
        <!-- Timeline line -->
        <div class="absolute left-[7.5rem] top-0 bottom-0 w-px bg-slate-200 hidden sm:block"></div>

        <div class="flex flex-col gap-6">
          <div
            v-for="(item, index) in CAREER"
            :key="index"
            class="flex gap-6"
          >
            <!-- Period label -->
            <div class="shrink-0 w-28 text-right pt-1 hidden sm:block">
              <span class="font-mono text-xs text-slate-400">{{ item.period }}</span>
            </div>

            <!-- Dot -->
            <div class="relative shrink-0 hidden sm:flex items-start pt-1.5">
              <div class="w-3 h-3 rounded-full bg-accent-500 border-2 border-white shadow ring-1 ring-accent-200 relative z-10"></div>
            </div>

            <!-- Content -->
            <div class="card flex-1 sm:ml-0">
              <p class="font-mono text-xs text-slate-400 mb-1 sm:hidden">{{ item.period }}</p>
              <h3 class="font-semibold text-slate-900 text-sm mb-1">{{ item.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
