<script setup lang="ts">
// 画面全体に羽が舞い降りる背景レイヤー＋大きなカラスの影。
// 羽はマウント時に一度だけランダム生成する。
// カラス: Font Awesome Free "crow" (CC BY 4.0) / 羽: Feather Icons "feather" (MIT)
interface Feather {
  id: number
  left: number      // vw
  size: number      // px
  fall: number      // s
  sway: number      // s
  delay: number     // s
  opacity: number
  hue: 'indigo' | 'violet' | 'sky'
}

const COLORS: Record<Feather['hue'], string> = {
  indigo: '#818cf8',
  violet: '#a78bfa',
  sky: '#38bdf8',
}

const HUES: Feather['hue'][] = ['indigo', 'violet', 'sky']

const feathers: Feather[] = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 16 + Math.random() * 24,
  fall: 14 + Math.random() * 18,
  sway: 2.2 + Math.random() * 2.4,
  delay: -Math.random() * 30,
  opacity: 0.14 + Math.random() * 0.32,
  hue: HUES[i % HUES.length],
}))

// Font Awesome Free 5 solid "crow" — CC BY 4.0 (fontawesome.com/license/free)
const CROW_PATH = 'M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.216 30.216 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64zm-80 72c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.75 24-24 24z'
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <!-- 大きなカラスの影 (Font Awesome "crow")：頭まで見えるよう画面内に収める -->
    <svg
      class="absolute bottom-2 right-2 w-[min(58vw,760px)] text-ink-800"
      style="opacity: 0.6;"
      viewBox="0 0 640 512"
      fill="currentColor"
    >
      <path :d="CROW_PATH" />
    </svg>

    <!-- 舞い降りる羽（羽ペン型） -->
    <span
      v-for="f in feathers"
      :key="f.id"
      class="feather"
      :style="{
        left: f.left + 'vw',
        animationDuration: f.fall + 's',
        animationDelay: f.delay + 's',
        '--feather-opacity': f.opacity,
      }"
    >
      <!--
        羽ペン型の羽根：
        - 大きくカーブした羽軸（クイル）が下まで貫く
        - 羽弁は軸の片側に流れるように付く（非対称）
        - 下側の縁に切れ込み
      -->
      <svg
        :width="f.size"
        :height="f.size * 2"
        viewBox="0 0 32 64"
        fill="none"
        :style="{ animationDuration: f.sway + 's', animationDelay: f.delay + 's' }"
      >
        <!-- vane: 軸に沿って片側に流れる -->
        <path
          d="M26 3
             C17 6 9.5 16 7 30
             C5.5 38 5.5 46 7.5 52
             L9.5 49.5 L10 55 L12.5 51.5 L13 56.5
             C17 53 21 47 23.5 39
             C26.5 30 27.5 17 26 3 Z"
          :fill="COLORS[f.hue]"
          fill-opacity="0.45"
        />
        <!-- quill: S字にカーブして羽弁の外まで伸びる -->
        <path
          d="M26 4 C20 18 14.5 36 10 50 C8.5 54.5 7 58.5 5.5 62"
          :stroke="COLORS[f.hue]"
          stroke-width="1.2"
          stroke-opacity="0.95"
          stroke-linecap="round"
        />
        <!-- barbs: 軸から先端方向へ流れる細い線 -->
        <g :stroke="COLORS[f.hue]" stroke-width="0.45" stroke-opacity="0.55">
          <path d="M23 12 L26.5 8" />
          <path d="M20.5 19 L25.5 14" />
          <path d="M18 26 L24 20" />
          <path d="M15.5 33 L22 26.5" />
          <path d="M13 40 L19.5 33.5" />
          <path d="M11 46 L16.5 40.5" />
          <path d="M23 12 L17 9" />
          <path d="M20.5 19 L13 15" />
          <path d="M18 26 L9.5 22" />
          <path d="M15.5 33 L7.5 30" />
          <path d="M13 40 L7 38" />
        </g>
      </svg>
    </span>
  </div>
</template>
