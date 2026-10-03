import { describe, expect, it } from 'vitest'
import i18n from '../src/i18n'
import zhTW from '../src/i18n/locales/zh-TW'
import en from '../src/i18n/locales/en'

function messageKeys(group: object, prefix = ''): string[] {
  return Object.entries(group).flatMap(([name, value]) => {
    const key = prefix ? `${prefix}.${name}` : name
    return typeof value === 'string' ? [key] : messageKeys(value, key)
  })
}

describe('approved bilingual content', () => {
  it('preserves employment dates when month names are localized', () => {
    expect(zhTW.when.previousRole.highlight).toBe('2021 年 12 月–2026 年 5 月')
    expect(en.when.previousRole.highlight).toBe('Dec 2021–May 2026')
  })

  it.each(['zh-TW', 'en'] as const)('compiles every %s message without exposing message syntax', locale => {
    i18n.global.locale.value = locale
    for (const key of messageKeys(zhTW)) {
      const text = i18n.global.t(key, { email: 'fay@example.com', vue: 'Vue 3', react: 'React', location: '(Taipei, Taiwan)' })
      expect(text).not.toBe(key)
      expect(text).not.toMatch(/[{}]/)
    }
  })

  it('retains approved English wording and the updated Resume vocabulary', () => {
    expect(en.who.identity.design).toContain('design systems')
    expect(en.what.beyondFrontend.flutter).toBe('Used on a project in my previous role.')
    expect(en.where.social.linkedin).toBe('Professional experience and connections.')
    expect(en.how.website.scope).toBe('I defined the website’s purpose, target devices, technologies, and deployment approach, and used specifications to guide AI-assisted implementation.')
    expect(en.resume).not.toHaveProperty('who')
    expect(zhTW.resume).not.toHaveProperty('who')
  })
})
