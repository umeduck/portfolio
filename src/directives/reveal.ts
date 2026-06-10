import type { Directive } from 'vue'

// v-reveal: 要素がビューポートに入ったら .is-visible を付与してフェードインさせる。
// 値に数値を渡すと transition-delay(ms) として適用される。
const observer = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      // 背の高い要素でも確実に発火するよう threshold は 0 にし、
      // 画面下端から少し入った時点で表示を開始する
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
  : null

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`
    }
    if (observer) {
      observer.observe(el)
    } else {
      el.classList.add('is-visible')
    }
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
