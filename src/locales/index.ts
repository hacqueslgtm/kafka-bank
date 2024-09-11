import loadLangMsg from '@/utils/loadLangMsg'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'

const locale = import.meta.env ? 'en-US' : navigator.language

const i18nOptions: I18nOptions = {
  legacy: false,
  locale: locale,
  fallbackLocale: locale,
  messages: {
    'en-US': {},
    'zh-TW': {}
  }
}

const message = await loadLangMsg(locale)
if (i18nOptions.messages) {
  i18nOptions.messages[locale] = message
}

const i18n = createI18n(i18nOptions)
export default i18n

