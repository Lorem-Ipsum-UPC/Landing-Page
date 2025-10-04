import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="terms-container">
      <Link to="/" className="back-to-top-btn" aria-label={t('terms.backHome')}>
        <ArrowLeft size={20} />
        <span>{t('terms.backHome')}</span>
      </Link>
      
      <div className="terms-header">
        <Shield className="terms-icon" />
        <h1 className="terms-title">{t('terms.title')}</h1>
        <p className="terms-subtitle">{t('terms.subtitle')}</p>
        <p className="terms-date">{t('terms.lastUpdated')}: {t('terms.date')}</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2 className="terms-section-title">{t('terms.acceptance.title')}</h2>
          <p className="terms-text">{t('terms.acceptance.content')}</p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">{t('terms.service.title')}</h2>
          <p className="terms-text">{t('terms.service.content')}</p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">{t('terms.responsibilities.title')}</h2>
          <p className="terms-text">{t('terms.responsibilities.content')}</p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">{t('terms.privacy.title')}</h2>
          <p className="terms-text">{t('terms.privacy.content')}</p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">{t('terms.modifications.title')}</h2>
          <p className="terms-text">{t('terms.modifications.content')}</p>
        </section>

        <div className="terms-ethics">
          <h3 className="terms-ethics-title">{t('terms.ethics.title')}</h3>
          <p className="terms-text">{t('terms.ethics.content')}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
