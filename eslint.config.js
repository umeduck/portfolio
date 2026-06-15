import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  // 対象外
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],
  },
  // Vue 3 推奨ルール
  pluginVue.configs['flat/recommended'],
  // TypeScript 推奨ルール（型情報なしの軽量版）
  vueTsConfigs.recommended,
  // プロジェクト独自の調整
  {
    rules: {
      // 単語1つのコンポーネント名（HeroSection 等は複数語なので実質緩和用）
      'vue/multi-word-component-names': 'off',
      // 整形系ルールは無効化（バグ検出に集中。整形は手動 / エディタに委ねる）
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/attributes-order': 'off',
    },
  },
)
