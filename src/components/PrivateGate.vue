<script setup lang="ts">
import { ref } from 'vue'
import { applyPrivateData } from '../data/profile'
import { fetchAndDecrypt } from '../data/privateCrypto'

const emit = defineEmits<{ unlocked: [] }>()

const password = ref('')
const error = ref('')
const loading = ref(false)

async function submit() {
  if (!password.value || loading.value) return
  loading.value = true
  error.value = ''
  try {
    const data = await fetchAndDecrypt(password.value)
    if (data === null) {
      error.value = 'パスワードが違います。'
      return
    }
    applyPrivateData(data)
    emit('unlocked')
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'エラーが発生しました。'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="card max-w-sm w-full text-center">
      <!-- crow silhouette (Font Awesome Free "crow" / CC BY 4.0) -->
      <svg class="w-12 h-12 mx-auto mb-6 text-accent-400" viewBox="0 0 640 512" fill="currentColor" aria-hidden="true">
        <path d="M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.216 30.216 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64zm-80 72c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.75 24-24 24z" />
      </svg>

      <p class="section-label mb-2">Private</p>
      <h1 class="font-serif text-2xl font-bold text-zinc-100 mb-3">限定公開ページ</h1>
      <p class="text-sm text-zinc-400 leading-relaxed mb-8">
        このページには氏名・連絡先などの詳細プロフィールが含まれます。<br />
        共有されたパスワードを入力してください。
      </p>

      <form @submit.prevent="submit" class="flex flex-col gap-3">
        <input
          v-model="password"
          type="password"
          autocomplete="off"
          placeholder="パスワード"
          class="w-full px-4 py-2.5 rounded-lg bg-ink-900 border border-ink-700 text-zinc-200 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-accent-400 transition-colors"
          :disabled="loading"
        />
        <button type="submit" class="btn-primary justify-center" :disabled="loading || !password">
          {{ loading ? '確認中…' : '表示する' }}
        </button>
      </form>

      <p v-if="error" class="text-sm text-red-400 mt-4">{{ error }}</p>

      <a href="#" class="inline-block text-xs text-zinc-500 hover:text-zinc-300 transition-colors mt-8">
        ← 公開版ポートフォリオへ戻る
      </a>
    </div>
  </div>
</template>
