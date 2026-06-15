import { reactive, ref } from 'vue'
import {
  PROFILE as PUBLIC_PROFILE,
  LINKS as PUBLIC_LINKS,
  CAREER as PUBLIC_CAREER,
} from './constants'

export interface CareerItem {
  period: string
  title: string
  description: string
}

export interface PrivateData {
  profile?: Partial<typeof PUBLIC_PROFILE>
  links?: Partial<typeof PUBLIC_LINKS>
  career?: CareerItem[]
}

// 公開用データで初期化し、パスワード解錠後に完全版を上書きする
export const PROFILE = reactive({ ...PUBLIC_PROFILE })
export const LINKS = reactive({ ...PUBLIC_LINKS })
export const CAREER = reactive<CareerItem[]>([...PUBLIC_CAREER])

export const isUnlocked = ref(false)

const SESSION_KEY = 'portfolio-private-data'

export function applyPrivateData(data: PrivateData) {
  if (data.profile) Object.assign(PROFILE, data.profile)
  if (data.links) Object.assign(LINKS, data.links)
  if (data.career) CAREER.splice(0, CAREER.length, ...data.career)
  isUnlocked.value = true
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(data))
}

// タブを閉じるまでは解錠状態を維持する
export function restoreFromSession(): boolean {
  const cached = sessionStorage.getItem(SESSION_KEY)
  if (!cached) return false
  try {
    applyPrivateData(JSON.parse(cached) as PrivateData)
    return true
  } catch {
    sessionStorage.removeItem(SESSION_KEY)
    return false
  }
}
