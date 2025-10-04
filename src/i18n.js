import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  // Carga los archivos de traducción desde la carpeta public
  .use(HttpBackend)
  // Conecta con react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    // Idioma por defecto (cambiado a inglés)
    lng: 'en',
    // Idioma de respaldo si no se encuentra una traducción
    fallbackLng: 'en',
    // Idiomas disponibles
    supportedLngs: ['es', 'en'],
    // Configuración del backend para cargar los archivos JSON
    backend: {
      // Ruta donde se encuentran los archivos de traducción
      loadPath: '/assets/i18n/{{lng}}.json',
    },
    // Configuración de detección de idioma
    detection: {
      // Orden de detección: localStorage, navegador
      order: ['localStorage', 'navigator'],
      // Cache del idioma seleccionado
      caches: ['localStorage'],
    },
    // Interpolación
    interpolation: {
      // React ya hace el escaping por defecto
      escapeValue: false,
    },
    // Debug mode (puedes desactivarlo en producción)
    debug: false,
    // React options
    react: {
      // Suspense habilitado para mostrar un loading mientras carga las traducciones
      useSuspense: true,
    },
  });

export default i18n;
