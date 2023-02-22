import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './en/translation.json';
import translationUA from './ua/translation.json';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ua: {
      translation: translationUA,
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
