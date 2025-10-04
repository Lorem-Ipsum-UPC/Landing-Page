import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="language-selector">
      <div className="language-dropdown">
        <button className="language-trigger">
          <Globe size={16} />
          <span className="current-language">
            {languages.find(lang => lang.code === i18n.language)?.name}
          </span>
        </button>
        <div className="language-options">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
            >
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;