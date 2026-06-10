<script setup lang="ts">
import { PROFILE } from '../data/constants'
</script>

<template>
  <footer class="border-t border-ink-800 py-8">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p class="font-mono text-xs text-zinc-500">
        © {{ new Date().getFullYear() }} {{ PROFILE.nameEn }}. All rights reserved.
      </p>
      <p class="font-mono text-xs text-zinc-600">
        Built with Vue 3 + Vite + Tailwind CSS
      </p>
    </div>
  </footer>
</template>
