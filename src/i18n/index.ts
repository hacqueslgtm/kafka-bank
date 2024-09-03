import { createI18n } from 'vue-i18n';

import en from './lang/en.json';
import tw from './lang/tw.json';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    en: en,
    tw: tw
  }
});

export default i18n;
