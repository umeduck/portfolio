<script setup lang="ts">
import { LINKS } from '../data/constants'

const highlights = [
  { label: '開発領域',  text: 'Rails / Vue / AWS を中心に、バックエンドからインフラまで幅広く対応' },
  { label: '工程',      text: '要件定義・設計・実装・テスト・リリースまで、上流から下流まで一貫して経験' },
  { label: '強み',      text: '業務改善・コスト削減といった事業インパクトのある課題解決が得意' },
  { label: '個人開発',  text: 'パーソナルナレッジベース「CrowNote」を個人で設計・開発・運営' },
]
</script>

<template>
  <section id="about" class="py-24 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <p class="section-label">About</p>
      <h2 class="section-title">エンジニアとして</h2>
      <p class="section-subtitle mb-12 max-w-xl">
        システムエンジニアとして、事業課題をコードで解決することにやりがいを感じています。
        技術だけでなく、ビジネスの文脈を読みながら開発を進めることを大切にしています。
      </p>

      <div class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="item in highlights"
          :key="item.label"
          class="card flex gap-4"
        >
          <div class="shrink-0 w-1 bg-accent-500 rounded-full self-stretch"></div>
          <div>
            <p class="font-mono text-xs text-accent-600 tracking-wider uppercase mb-1">{{ item.label }}</p>
            <p class="text-slate-700 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <!-- CrowNote CTA -->
      <div class="mt-10 p-6 bg-accent-50 border border-accent-100 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p class="font-medium text-slate-900 mb-1">個人開発プロダクト「CrowNote」</p>
          <p class="text-sm text-slate-600">会話・思考・メモを保存し、あとから検索できる「人生の検索エンジン」を目指して開発中。</p>
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
