import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language || 'en';
  const nextLang = currentLang === 'es' ? 'EN' : 'ES';

  return (
    <button 
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={`Switch to ${nextLang === 'EN' ? 'English' : 'Spanish'} / Cambiar a ${nextLang === 'EN' ? 'Inglés' : 'Español'}`}
      aria-pressed="false"
    >
      <Globe className="language-icon" aria-hidden="true" />
      <span className="language-text" aria-label={`Current language: ${currentLang.toUpperCase()}`}>
        {nextLang}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
