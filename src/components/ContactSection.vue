<script setup lang="ts">
import { computed } from 'vue'
import { LINKS } from '../data/profile'

// メールは限定公開ページ解錠後のみ表示されるため、href が空の項目は除外する
const contacts = computed(() => [
  {
    label: 'GitHub',
    description: 'コード・個人開発',
    href: LINKS.github,
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  {
    label: 'X (Twitter)',
    description: '技術発信・近況',
    href: LINKS.twitter,
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>`,
  },
  {
    label: 'Email',
    description: '採用・協業のご相談',
    href: LINKS.email,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: 'CrowNote',
    description: '個人開発プロダクト',
    href: LINKS.crownoteLp,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  },
].filter((contact) => contact.href))
</script>

<template>
  <section id="contact" class="py-24">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div v-reveal>
        <p class="section-label">Contact</p>
        <h2 class="section-title">連絡先・リンク</h2>
        <p class="section-subtitle mb-12">
          お気軽にご連絡ください。採用・協業・フィードバックなど、何でも歓迎です。
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          v-for="(contact, i) in contacts"
          :key="contact.label"
          :href="contact.href"
          target="_blank"
          rel="noopener"
          v-reveal="i * 100"
          class="card flex flex-col items-center text-center gap-3 group"
        >
          <span class="text-zinc-500 group-hover:text-accent-300 transition-colors" v-html="contact.icon"></span>
          <div>
            <p class="font-semibold text-zinc-200 text-sm">{{ contact.label }}</p>
            <p class="text-xs text-zinc-500 mt-0.5">{{ contact.description }}</p>
          </div>
          <svg class="w-3.5 h-3.5 text-ink-600 group-hover:text-accent-400 transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
