import { describe, it, expect, beforeEach, vi } from 'vitest'

// profile.ts はモジュールスコープでリアクティブな状態を保持するため、
// テストごとにモジュールを読み直して状態を初期化する
async function freshProfile() {
  vi.resetModules()
  return import('./profile')
}

describe('profile store', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  it('初期状態は公開用データで未解錠', async () => {
    const { PROFILE, LINKS, isUnlocked } = await freshProfile()
    expect(PROFILE.name).toBe('Ume')
    expect(LINKS.email).toBe('')
    expect(isUnlocked.value).toBe(false)
  })

  it('applyPrivateData で完全版データに上書きし解錠状態になる', async () => {
    const { PROFILE, LINKS, CAREER, isUnlocked, applyPrivateData } = await freshProfile()
    applyPrivateData({
      profile: { name: '本名 太郎' },
      links: { email: 'mailto:test@example.com' },
      career: [{ period: '2020', title: 'タイトル', description: '説明' }],
    })
    expect(PROFILE.name).toBe('本名 太郎')
    expect(LINKS.email).toBe('mailto:test@example.com')
    expect(CAREER).toHaveLength(1)
    expect(CAREER[0].title).toBe('タイトル')
    expect(isUnlocked.value).toBe(true)
  })

  it('applyPrivateData は sessionStorage に永続化する', async () => {
    const { applyPrivateData } = await freshProfile()
    applyPrivateData({ profile: { name: '本名 太郎' } })
    const cached = sessionStorage.getItem('portfolio-private-data')
    expect(cached).toBeTruthy()
    expect(JSON.parse(cached!).profile.name).toBe('本名 太郎')
  })

  it('restoreFromSession はキャッシュが無ければ false', async () => {
    const { restoreFromSession, isUnlocked } = await freshProfile()
    expect(restoreFromSession()).toBe(false)
    expect(isUnlocked.value).toBe(false)
  })

  it('restoreFromSession はキャッシュ済みデータを復元する', async () => {
    sessionStorage.setItem(
      'portfolio-private-data',
      JSON.stringify({ profile: { name: '復元 太郎' } }),
    )
    const { restoreFromSession, PROFILE, isUnlocked } = await freshProfile()
    expect(restoreFromSession()).toBe(true)
    expect(PROFILE.name).toBe('復元 太郎')
    expect(isUnlocked.value).toBe(true)
  })

  it('restoreFromSession は壊れたキャッシュを破棄して false', async () => {
    sessionStorage.setItem('portfolio-private-data', '{壊れたJSON')
    const { restoreFromSession } = await freshProfile()
    expect(restoreFromSession()).toBe(false)
    expect(sessionStorage.getItem('portfolio-private-data')).toBeNull()
  })
})
