import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translation from './translations';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translation: translation.en,
    },
    ua: {
      translation: translation.ua,
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
