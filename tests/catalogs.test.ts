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
  it.each(['zh-TW', 'en'] as const)('compiles every %s message without exposing message syntax', locale => {
    i18n.global.locale.value = locale
    for (const key of messageKeys(zhTW)) {
      const text = i18n.global.t(key, { email: 'fay@example.com', vue: 'Vue 3', react: 'React', location: '(Taipei, Taiwan)' })
      expect(text).not.toBe(key)
      expect(text).not.toMatch(/[{}]/)
    }
  })

  it('retains the manually edited English wording and shares the updated Who vocabulary with Resume', () => {
    expect(en.who.identity.design).toContain('design systems')
    expect(en.what.beyondFrontend.flutter).toBe('A cross-platform development toolkit from Google. One project at my previous job used it.')
    expect(en.where.social.linkedin).toBe('Professional experience and connections.')
    expect(en.how.website.highlight).toBe('I do the thinking; the agent handles the execution.')
    expect(en.resume).not.toHaveProperty('who')
    expect(zhTW.resume).not.toHaveProperty('who')
  })
})
