import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'

export const SUPPORT_LOCALES = ['en', 'zh-TW']

export function setupI18n(options: I18nOptions = { legacy: false }) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale || 'en')
  return i18n
}

export function setI18nLanguage(i18n: any, locale: string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: any, locale: string) {
  // 加載共用的翻譯
  const commonMessages = await import(`./locales/${locale}/common.json`)
  i18n.global.setLocaleMessage(locale, commonMessages.default)

  // 動態加載其他翻譯文件
  const modules = import.meta.glob('./locales/**/*.json')
  for (const path in modules) {
    if (path.includes(`${locale}/`) && !path.endsWith('common.json')) {
      const mod = await modules[path]()
      const namespace = path.split('/').slice(-1)[0].replace('.json', '')
      i18n.global.mergeLocaleMessage(locale, { [namespace]: mod.default })
    }
  }

  return nextTick()
}

