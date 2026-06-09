<script setup lang="ts">
import { PROFILE, LINKS } from '../data/constants'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Subtle grid background -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px); background-size: 48px 48px;"
    ></div>
    <!-- Gradient fade at bottom -->
    <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 py-32 w-full">
      <div class="max-w-2xl">
        <!-- Label -->
        <p class="section-label mb-6">Portfolio</p>

        <!-- Name -->
        <h1 class="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-none mb-3">
          {{ PROFILE.name }}
          <span class="text-accent-600">.</span>
        </h1>

        <!-- Title -->
        <div class="mb-6">
          <p class="text-xl font-medium text-slate-700">{{ PROFILE.title }}</p>
          <p class="font-mono text-sm text-slate-400 mt-1">{{ PROFILE.titleEn }}</p>
        </div>

        <!-- Bio -->
        <p class="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
          {{ PROFILE.bio }}
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap gap-3 mb-12">
          <a :href="LINKS.crownoteLp" target="_blank" rel="noopener" class="btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            CrowNote を見る
          </a>
          <a :href="LINKS.email" class="btn-outline">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </a>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-5">
          <a
            :href="LINKS.github"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span class="text-slate-200">|</span>
          <a
            :href="LINKS.twitter"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
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
