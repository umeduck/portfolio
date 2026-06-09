<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { NAV_ITEMS, PROFILE, LINKS } from '../data/constants'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-200',
      scrolled ? 'bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm' : 'bg-transparent',
    ]"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
      <!-- Logo -->
      <a href="#" class="font-mono text-sm font-medium text-slate-900 tracking-tight hover:text-accent-600 transition-colors">
        {{ PROFILE.nameEn }}
        <span class="text-accent-600">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a
          v-for="item in NAV_ITEMS"
          :key="item.href"
          :href="item.href"
          class="text-sm text-slate-600 hover:text-accent-600 transition-colors font-medium"
        >
          {{ item.label }}
        </a>
        <a :href="LINKS.crownoteLp" target="_blank" rel="noopener" class="btn-primary text-xs px-4 py-2">
          CrowNote
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        @click="menuOpen = !menuOpen"
        aria-label="メニュー"
      >
        <svg v-if="!menuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-white border-b border-slate-100 px-4 pb-4">
      <nav class="flex flex-col gap-1 pt-2">
        <a
          v-for="item in NAV_ITEMS"
          :key="item.href"
          :href="item.href"
          class="text-sm text-slate-700 hover:text-accent-600 px-2 py-2 rounded-md hover:bg-slate-50 transition-colors font-medium"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
        <a
          :href="LINKS.crownoteLp"
          target="_blank"
          rel="noopener"
          class="btn-primary mt-2 justify-center"
          @click="menuOpen = false"
        >
          CrowNote を見る
        </a>
      </nav>
    </div>
  </header>
</template>
