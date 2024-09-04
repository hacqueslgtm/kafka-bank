import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import tw from './locales/tw.json';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    tw
  }
});

export default i18n;

