import type { LocationQuery, LocationQueryValue } from 'vue-router'

export type WebsiteLocale = 'zh-TW' | 'en'
type LanguageQuery = LocationQueryValue | LocationQueryValue[] | undefined
export interface WebsiteLocation {
  path: string
  query: LocationQuery
  hash: string
}

export function resolveLocale(lang: LanguageQuery): WebsiteLocale {
  return lang === 'en' ? 'en' : 'zh-TW'
}

export function normalizeLocaleRoute(to: WebsiteLocation) {
  const path = to.path === '/' ? '/' : to.path.replace(/\/+$/, '') || '/'
  const invalidLanguage = 'lang' in to.query && to.query.lang !== 'en' && to.query.lang !== 'zh-TW'
  if (path === to.path && !invalidLanguage) return
  const query = { ...to.query }
  if (invalidLanguage) delete query.lang
  return { path, query, hash: to.hash, replace: true }
}

export function localizedTarget(target: WebsiteLocation, current: Pick<WebsiteLocation, 'query'>): WebsiteLocation {
  const query = { ...target.query }
  if (!('lang' in query) && (current.query.lang === 'en' || current.query.lang === 'zh-TW')) {
    query.lang = current.query.lang
  }
  return { path: target.path, query, hash: target.hash }
}

export function switchLocaleTarget(current: WebsiteLocation, locale: WebsiteLocale): WebsiteLocation {
  return { path: current.path, query: { ...current.query, lang: locale }, hash: current.hash }
}
