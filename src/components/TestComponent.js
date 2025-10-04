import React from 'react';
import { useTranslation } from 'react-i18next';

const TestComponent = () => {
  const { t, i18n } = useTranslation();

  console.log('i18n ready:', i18n.isInitialized);
  console.log('Current language:', i18n.language);
  console.log('Test translation:', t('nav.inicio'));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Prueba de Traducción</h1>
      <p>Idioma actual: {i18n.language}</p>
      <p>¿i18n inicializado?: {i18n.isInitialized ? 'Sí' : 'No'}</p>
      <p>Traducción de prueba: "{t('nav.inicio')}"</p>
      <p>Navegación completa:</p>
      <ul>
        <li>Inicio: {t('nav.inicio')}</li>
        <li>Sobre Nosotros: {t('nav.sobreNosotros')}</li>
        <li>Características: {t('nav.caracteristicas')}</li>
      </ul>
      <button onClick={() => i18n.changeLanguage('en')}>
        Cambiar a Inglés
      </button>
      <button onClick={() => i18n.changeLanguage('es')} style={{ marginLeft: '10px' }}>
        Cambiar a Español
      </button>
    </div>
  );
};

export default TestComponent;