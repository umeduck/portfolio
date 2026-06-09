# Portfolio

梅村の個人ポートフォリオサイト。Vue 3 + TypeScript + Vite + Tailwind CSS で構築。

## 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:5173）
npm run dev

# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 構成

```
src/
├── data/
│   └── constants.ts      # 名前・リンク・スキル・実績など全データ
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   ├── AchievementsSection.vue
│   ├── ProjectsSection.vue
│   ├── CareerSection.vue
│   ├── ContactSection.vue
│   └── FooterSection.vue
├── App.vue
├── main.ts
└── style.css
```

## カスタマイズ

- **テキスト・リンクの変更** → `src/data/constants.ts` を編集
- **実績・プロジェクトの追加** → `constants.ts` の `ACHIEVEMENTS` / `PROJECTS` 配列に追記
- **スキルの追加** → `constants.ts` の `SKILLS` 配列に追記

## デプロイ

`npm run build` で `dist/` に静的ファイルが生成されます。
Netlify / Vercel / GitHub Pages などにそのままデプロイ可能です。
