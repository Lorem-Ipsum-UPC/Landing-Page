import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitBranch, Users, Target, Code, Repeat, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutProject.css';

const AboutProject = () => {
  const { t } = useTranslation();

  return (
    <div className="about-project-container">
      <Link to="/" className="back-to-top-btn" aria-label={t('aboutProject.backToTop')}>
        <ArrowLeft size={20} />
        <span>{t('aboutProject.backToTop')}</span>
      </Link>
      
      <div className="about-project-header">
        <Code className="about-project-icon" />
        <h1 className="about-project-title">{t('aboutProject.title')}</h1>
        <p className="about-project-subtitle">{t('aboutProject.subtitle')}</p>
      </div>

      <div className="about-project-content">
        <section className="about-project-section">
          <div className="about-project-section-icon">
            <Repeat />
          </div>
          <h2 className="about-project-section-title">{t('aboutProject.scrum.title')}</h2>
          <p className="about-project-text">{t('aboutProject.scrum.intro')}</p>
          
          <div className="scrum-phases">
            <div className="scrum-phase">
              <div className="scrum-phase-number">1</div>
              <h3 className="scrum-phase-title">{t('aboutProject.scrum.phase1.title')}</h3>
              <p className="scrum-phase-text">{t('aboutProject.scrum.phase1.description')}</p>
            </div>
            <div className="scrum-phase">
              <div className="scrum-phase-number">2</div>
              <h3 className="scrum-phase-title">{t('aboutProject.scrum.phase2.title')}</h3>
              <p className="scrum-phase-text">{t('aboutProject.scrum.phase2.description')}</p>
            </div>
            <div className="scrum-phase">
              <div className="scrum-phase-number">3</div>
              <h3 className="scrum-phase-title">{t('aboutProject.scrum.phase3.title')}</h3>
              <p className="scrum-phase-text">{t('aboutProject.scrum.phase3.description')}</p>
            </div>
            <div className="scrum-phase">
              <div className="scrum-phase-number">4</div>
              <h3 className="scrum-phase-title">{t('aboutProject.scrum.phase4.title')}</h3>
              <p className="scrum-phase-text">{t('aboutProject.scrum.phase4.description')}</p>
            </div>
            <div className="scrum-phase">
              <div className="scrum-phase-number">5</div>
              <h3 className="scrum-phase-title">{t('aboutProject.scrum.phase5.title')}</h3>
              <p className="scrum-phase-text">{t('aboutProject.scrum.phase5.description')}</p>
            </div>
          </div>
        </section>

        <section className="about-project-section">
          <div className="about-project-section-icon">
            <GitBranch />
          </div>
          <h2 className="about-project-section-title">{t('aboutProject.github.title')}</h2>
          <p className="about-project-text">{t('aboutProject.github.intro')}</p>
          
          <div className="github-features">
            <div className="github-feature">
              <CheckCircle className="github-feature-icon" />
              <div>
                <h3 className="github-feature-title">{t('aboutProject.github.feature1.title')}</h3>
                <p className="github-feature-text">{t('aboutProject.github.feature1.description')}</p>
              </div>
            </div>
            <div className="github-feature">
              <CheckCircle className="github-feature-icon" />
              <div>
                <h3 className="github-feature-title">{t('aboutProject.github.feature2.title')}</h3>
                <p className="github-feature-text">{t('aboutProject.github.feature2.description')}</p>
              </div>
            </div>
            <div className="github-feature">
              <CheckCircle className="github-feature-icon" />
              <div>
                <h3 className="github-feature-title">{t('aboutProject.github.feature3.title')}</h3>
                <p className="github-feature-text">{t('aboutProject.github.feature3.description')}</p>
              </div>
            </div>
            <div className="github-feature">
              <CheckCircle className="github-feature-icon" />
              <div>
                <h3 className="github-feature-title">{t('aboutProject.github.feature4.title')}</h3>
                <p className="github-feature-text">{t('aboutProject.github.feature4.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-project-section">
          <div className="about-project-section-icon">
            <Users />
          </div>
          <h2 className="about-project-section-title">{t('aboutProject.team.title')}</h2>
          <p className="about-project-text">{t('aboutProject.team.description')}</p>
        </section>

        <div className="about-project-footer">
          <Target className="about-project-footer-icon" />
          <h3 className="about-project-footer-title">{t('aboutProject.footer.title')}</h3>
          <p className="about-project-footer-text">{t('aboutProject.footer.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
