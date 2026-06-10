<script setup lang="ts">
import { LINKS } from '../data/constants'

const highlights = [
  { label: '開発領域',  text: 'Rails / PHP(Zend Framework) / Vue.js を中心に、AWSインフラまで幅広く対応' },
  { label: '工程',      text: '要件定義・基本設計・詳細設計・実装・テスト・リリース・運用保守まで一貫して経験' },
  { label: '強み',      text: 'AWSコスト最適化（年間約560万円削減）やDBチューニングなど、技術と運用両面からの改善提案' },
  { label: '個人開発',  text: '「人生を検索する」をコンセプトにCrowNoteを企画・開発・AWS構築・運営まで一人で担当' },
]
</script>

<template>
  <section id="about" class="py-24 bg-ink-900/40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div v-reveal>
        <p class="section-label">About</p>
        <h2 class="section-title">エンジニアとして</h2>
        <p class="section-subtitle mb-12 max-w-xl">
          システムエンジニアとして、事業課題をコードで解決することにやりがいを感じています。
          技術だけでなく、ビジネスの文脈を読みながら開発を進めることを大切にしています。
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="(item, i) in highlights"
          :key="item.label"
          v-reveal="i * 100"
          class="card flex gap-4"
        >
          <div class="shrink-0 w-1 bg-gradient-to-b from-accent-400 to-sheen-violet rounded-full self-stretch"></div>
          <div>
            <p class="font-mono text-xs text-accent-300 tracking-wider uppercase mb-1">{{ item.label }}</p>
            <p class="text-zinc-300 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <!-- CrowNote CTA -->
      <div v-reveal class="mt-10 p-6 bg-ink-800/60 border border-accent-500/25 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p class="font-medium text-zinc-100 mb-1">個人開発プロダクト「CrowNote」</p>
          <p class="text-sm text-zinc-400">録音した会話を文字起こしし、あとから検索できるサービス。「人生を検索する」をコンセプトに開発中。</p>
        </div>
        <a :href="LINKS.crownoteLp" target="_blank" rel="noopener" class="btn-primary shrink-0">
          LP を見る
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
