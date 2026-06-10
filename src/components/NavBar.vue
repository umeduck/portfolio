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
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-ink-950/85 backdrop-blur border-b border-ink-800' : 'bg-transparent',
    ]"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
      <!-- Logo -->
      <a href="#" class="font-mono text-sm font-medium text-zinc-100 tracking-tight hover:text-accent-300 transition-colors flex items-center gap-2">
        <!-- crow mark (Font Awesome Free "crow" / CC BY 4.0) -->
        <svg class="w-4 h-4 text-accent-400" viewBox="0 0 640 512" fill="currentColor" aria-hidden="true">
          <path d="M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.216 30.216 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64zm-80 72c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.75 24-24 24z" />
        </svg>
        {{ PROFILE.nameEn }}
        <span class="text-accent-400">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a
          v-for="item in NAV_ITEMS"
          :key="item.href"
          :href="item.href"
          class="text-sm text-zinc-400 hover:text-accent-300 transition-colors font-medium"
        >
          {{ item.label }}
        </a>
        <a :href="LINKS.crownoteLp" target="_blank" rel="noopener" class="btn-primary text-xs px-4 py-2">
          CrowNote
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-lg text-zinc-400 hover:bg-ink-800 transition-colors"
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
    <div v-if="menuOpen" class="md:hidden bg-ink-950/95 backdrop-blur border-b border-ink-800 px-4 pb-4">
      <nav class="flex flex-col gap-1 pt-2">
        <a
          v-for="item in NAV_ITEMS"
          :key="item.href"
          :href="item.href"
          class="text-sm text-zinc-300 hover:text-accent-300 px-2 py-2 rounded-md hover:bg-ink-800 transition-colors font-medium"
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
