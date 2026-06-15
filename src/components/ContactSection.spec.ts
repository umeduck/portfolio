import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  it('公開状態（メール未設定）では Email カードを表示しない', () => {
    // profile.ts の初期状態は公開用データ（LINKS.email は空）
    const wrapper = mount(ContactSection, {
      global: { directives: { reveal: {} } },
    })
    const labels = wrapper.findAll('p.font-semibold').map((n) => n.text())
    expect(labels).not.toContain('Email')
    expect(labels).toContain('GitHub')
    expect(labels).toContain('CrowNote')
  })
})
