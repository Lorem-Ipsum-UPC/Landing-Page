import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    lng: 'es', 
    fallbackLng: 'es', 
    debug: process.env.NODE_ENV === 'development',

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    defaultNS: 'translation',
    ns: ['translation'],

    interpolation: {
      escapeValue: false, 
    },

    react: {
      useSuspense: false,
    },

    supportedLngs: ['es', 'en'],
    nonExplicitSupportedLngs: true,
  });

export default i18n;