import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Configuración de i18next
i18n
  .use(HttpApi) // Carga traducciones desde archivos JSON
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Pasa la instancia i18n a react-i18next
  .init({
    // Configuración por defecto
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
    debug: process.env.NODE_ENV === 'development', // Debug solo en desarrollo

    // Configuración de detección de idioma
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    // Configuración de backend (carga de archivos)
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Configuración de namespaces
    defaultNS: 'translation',
    ns: ['translation'],

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    // Configuración de React
    react: {
      useSuspense: false, // Deshabilitamos Suspense para evitar problemas
    },

    // Idiomas soportados
    supportedLngs: ['es', 'en'],
    nonExplicitSupportedLngs: true,
  });

export default i18n;