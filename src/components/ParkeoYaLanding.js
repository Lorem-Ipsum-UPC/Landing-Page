import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Smartphone, CheckCircle, Menu, X, ChevronRight, Star, Zap, Shield, TrendingUp, Target, Award, BarChart3, Globe, Mail, Phone, MessageSquare, Camera, Cpu, Bell, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './ParkeoYaLanding.css';

const ParkeoYaLanding = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);

  const features = [
    {
      icon: <Zap className="feature-icon-large" />,
      titleKey: "features.feature1.title",
      descriptionKey: "features.feature1.description"
    },
    {
      icon: <MapPin className="feature-icon-large" />,
      titleKey: "features.feature2.title",
      descriptionKey: "features.feature2.description"
    },
    {
      icon: <Shield className="feature-icon-large" />,
      titleKey: "features.feature3.title",
      descriptionKey: "features.feature3.description"
    },
    {
      icon: <TrendingUp className="feature-icon-large" />,
      titleKey: "features.feature4.title",
      descriptionKey: "features.feature4.description"
    }
  ];

  const detailedFeatures = [
    {
      icon: <Camera className="detailed-feature-icon" />,
      titleKey: "detailedFeatures.feature1.title",
      descriptionKey: "detailedFeatures.feature1.description"
    },
    {
      icon: <Smartphone className="detailed-feature-icon" />,
      titleKey: "detailedFeatures.feature2.title",
      descriptionKey: "detailedFeatures.feature2.description"
    },
    {
      icon: <Bell className="detailed-feature-icon" />,
      titleKey: "detailedFeatures.feature3.title",
      descriptionKey: "detailedFeatures.feature3.description"
    },
    {
      icon: <Lock className="detailed-feature-icon" />,
      titleKey: "detailedFeatures.feature4.title",
      descriptionKey: "detailedFeatures.feature4.description"
    },
    {
      icon: <BarChart3 className="detailed-feature-icon" />,
      titleKey: "detailedFeatures.feature5.title",
      descriptionKey: "detailedFeatures.feature5.description"
    },
    {
      icon: <Cpu className="detailed-feature-icon" />,
      titleKey: "detailedFeatures.feature6.title",
      descriptionKey: "detailedFeatures.feature6.description"
    }
  ];

  const testimonials = [
    {
      name: "Joan Talizo",
      role: "Conductor Urbano",
      content: "Reduje 15 minutos de búsqueda diaria. La app es súper intuitiva y los sensores son precisos.",
      rating: 5
    },
    {
      name: "Rafael Soto",
      role: "Propietario de Estacionamiento",
      content: "Aumenté mi ocupación en 20% y automaticé todo. Los reportes son claros y detallados.",
      rating: 5
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navigation" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-container">
              <div className="logo" aria-hidden="true">
                <MapPin />
              </div>
              <span className="logo-text">
                ParkeoYa
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu" role="menubar" aria-label="Main menu">
              <button onClick={() => scrollToSection('inicio')} className="nav-button" role="menuitem" aria-label={`Navigate to ${t('nav.home')}`}>{t('nav.home')}</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="nav-button" role="menuitem" aria-label={`Navigate to ${t('nav.about')}`}>{t('nav.about')}</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="nav-button" role="menuitem" aria-label={`Navigate to ${t('nav.features')}`}>{t('nav.features')}</button>
              <button onClick={() => scrollToSection('about-product')} className="nav-button" role="menuitem" aria-label="Navigate to Product Video">{t('videos.productTitle')}</button>
              <button onClick={() => scrollToSection('about-team')} className="nav-button" role="menuitem" aria-label="Navigate to Team Video">{t('videos.teamTitle')}</button>
              <button onClick={() => scrollToSection('contacto')} className="nav-button" role="menuitem" aria-label={`Navigate to ${t('nav.contact')}`}>{t('nav.contact')}</button>
            </div>

            <div className="nav-actions">
              <LanguageSwitcher />
              <button className="btn-outline" aria-label={t('nav.login')}>
                {t('nav.login')}
              </button>
              <button className="btn-primary" aria-label={t('nav.register')}>
                {t('nav.register')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu" id="mobile-menu" role="menu" aria-label="Mobile navigation">
            <div className="mobile-menu-content">
              <button onClick={() => scrollToSection('inicio')} className="mobile-menu-item" role="menuitem">{t('nav.home')}</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="mobile-menu-item" role="menuitem">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="mobile-menu-item" role="menuitem">{t('nav.features')}</button>
              <button onClick={() => scrollToSection('about-product')} className="mobile-menu-item" role="menuitem">{t('videos.productTitle')}</button>
              <button onClick={() => scrollToSection('about-team')} className="mobile-menu-item" role="menuitem">{t('videos.teamTitle')}</button>
              <button onClick={() => scrollToSection('contacto')} className="mobile-menu-item" role="menuitem">{t('nav.contact')}</button>
              <div className="mobile-menu-actions">
                <LanguageSwitcher />
                <button className="btn-outline" aria-label={t('nav.login')}>{t('nav.login')}</button>
                <button className="btn-primary" aria-label={t('nav.register')}>{t('nav.register')}</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                {t('hero.badge')}
              </div>
              <h1 className="hero-title">
                {t('hero.title')} 
                <span className="hero-title-gradient">
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              <p className="hero-description">
                {t('hero.description')}
              </p>
              <div className="hero-actions">
                <button 
                  onClick={() => {
                    setSelectedUserType('conductor');
                    scrollToSection('registro');
                  }}
                  className="btn-hero-primary"
                >
                  <Users />
                  <span>{t('hero.btnDriver')}</span>
                </button>
                <button 
                  onClick={() => {
                    setSelectedUserType('propietario');
                    scrollToSection('registro');
                  }}
                  className="btn-hero-secondary"
                >
                  <TrendingUp />
                  <span>{t('hero.btnOwner')}</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">30%</div>
                  <div className="hero-stat-label">{t('hero.stat1')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">15%</div>
                  <div className="hero-stat-label">{t('hero.stat2')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">20%</div>
                  <div className="hero-stat-label">{t('hero.stat3')}</div>
                </div>
              </div>
            </div>
            <div className="hero-demo">
              <div className="hero-demo-bg"></div>
              <div className="hero-demo-card">
                <div className="demo-status">
                  <div className="demo-status-dot"></div>
                  <span className="demo-status-text">3 {t('hero.availableSpaces')}</span>
                </div>
                <div className="demo-parking-list">
                  {[
                    { nameKey: 'hero.parking1', distance: 150, price: 3 },
                    { nameKey: 'hero.parking2', distance: 200, price: 4 },
                    { nameKey: 'hero.parking3', distance: 250, price: 5 }
                  ].map((parking, i) => (
                    <div key={i} className="demo-parking-item">
                      <div className="demo-parking-info">
                        <MapPin />
                        <div className="demo-parking-details">
                          <div className="demo-parking-name">{t(parking.nameKey)}</div>
                          <div className="demo-parking-meta">{parking.distance}m • S/ {parking.price}/{t('hero.hour')}</div>
                        </div>
                      </div>
                      <button className="demo-reserve-btn">
                        {t('hero.reserve')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="como-funciona" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-description">{t('features.subtitle')}</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{t(feature.titleKey)}</h3>
                <p className="feature-description">{t(feature.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              {t('about.badge')}
            </div>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-description">
              {t('about.description')}
            </p>
          </div>

          <div className="about-values-grid">
            <div className="value-card">
              <Target className="value-icon" />
              <h3 className="value-title">{t('about.mission.title')}</h3>
              <p className="value-description">
                {t('about.mission.description')}
              </p>
            </div>
            <div className="value-card">
              <Award className="value-icon" />
              <h3 className="value-title">{t('about.vision.title')}</h3>
              <p className="value-description">
                {t('about.vision.description')}
              </p>
            </div>
            <div className="value-card">
              <Globe className="value-icon" />
              <h3 className="value-title">{t('about.values.title')}</h3>
              <p className="value-description">
                {t('about.values.description')}
              </p>
            </div>
          </div>

          <div className="problem-section">
            <div className="problem-grid">
              <div>
                <h3 className="problem-title">{t('about.problem.title')}</h3>
                <p className="problem-description">
                  {t('about.problem.description')}
                </p>
                <ul className="problem-list">
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>{t('about.problem.point1')}</span>
                  </li>
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>{t('about.problem.point2')}</span>
                  </li>
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>{t('about.problem.point3')}</span>
                  </li>
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>{t('about.problem.point4')}</span>
                  </li>
                </ul>
              </div>
              <div className="problem-stats">
                <div className="problem-stat-card">
                  <div className="problem-stat-number">100,000+</div>
                  <div className="problem-stat-label">{t('about.problem.stat1Label')}</div>
                </div>
                <div className="problem-stat-card">
                  <div className="problem-stat-number">20 min</div>
                  <div className="problem-stat-label">{t('about.problem.stat2Label')}</div>
                </div>
                <div className="problem-stat-card">
                  <div className="problem-stat-number">60%</div>
                  <div className="problem-stat-label">{t('about.problem.stat3Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Detalladas */}
      <section id="caracteristicas" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              {t('detailedFeatures.badge')}
            </div>
            <h2 className="section-title">{t('detailedFeatures.title')}</h2>
            <p className="section-description">
              {t('detailedFeatures.description')}
            </p>
          </div>

          <div className="detailed-feature-grid">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="detailed-feature-card">
                <div className="detailed-feature-icon">{feature.icon}</div>
                <h3 className="detailed-feature-title">{t(feature.titleKey)}</h3>
                <p className="detailed-feature-description">{t(feature.descriptionKey)}</p>
              </div>
            ))}
          </div>

          <div className="tech-process">
            <h3 className="tech-process-title">{t('detailedFeatures.techTitle')}</h3>
            <p className="tech-process-description">
              {t('detailedFeatures.techDescription')}
            </p>
            <div className="tech-process-steps">
              <div className="tech-step">
                <div className="tech-step-number">1</div>
                <div className="tech-step-label">{t('detailedFeatures.step1')}</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">2</div>
                <div className="tech-step-label">{t('detailedFeatures.step2')}</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">3</div>
                <div className="tech-step-label">{t('detailedFeatures.step3')}</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">4</div>
                <div className="tech-step-label">{t('detailedFeatures.step4')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios Section */}
      {/* About the Product Video */}
      <section id="about-product" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              {t('videos.badge')}
            </div>
            <h2 className="section-title">{t('videos.productTitle')}</h2>
            <p className="section-description">
              {t('videos.productDescription')}
            </p>
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="About the Product"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* About the Team Video */}
      <section id="about-team" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              {t('videos.badge')}
            </div>
            <h2 className="section-title">{t('videos.teamTitle')}</h2>
            <p className="section-description">
              {t('videos.teamDescription')}
            </p>
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="About the Team"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Conductores Section */}
      <section id="conductores" className="section">
        <div className="section-container">
          <div className="user-section-grid">
            <div className="user-section-content">
              <div className="section-badge">
                {t('drivers.badge')}
              </div>
              <h2 className="user-section-title">{t('drivers.title')}</h2>
              <p className="user-section-description">
                {t('drivers.description')}
              </p>
              <div className="user-benefits">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="user-benefit">
                    <CheckCircle className="user-benefit-icon" />
                    <span className="user-benefit-text">{t(`drivers.benefit${num}`)}</span>
                  </div>
                ))}
              </div>
              <button className="user-section-cta">
                <Smartphone />
                <span>{t('drivers.btnDownload')}</span>
                <ChevronRight />
              </button>
            </div>
            <div className="user-section-demo">
              <div className="user-demo-benefits">
                <div className="user-demo-benefit">
                  <Clock className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">{t('drivers.save15')}</div>
                    <div className="user-demo-benefit-description">{t('drivers.save15Desc')}</div>
                  </div>
                </div>
                <div className="user-demo-benefit">
                  <DollarSign className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">{t('drivers.payFair')}</div>
                    <div className="user-demo-benefit-description">{t('drivers.payFairDesc')}</div>
                  </div>
                </div>
                <div className="user-demo-benefit">
                  <Shield className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">{t('drivers.guaranteed')}</div>
                    <div className="user-demo-benefit-description">{t('drivers.guaranteedDesc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propietarios Section */}
      <section id="propietarios" className="section section-alt">
        <div className="section-container">
          <div className="user-section-grid">
            <div className="user-section-demo">
              <div className="user-demo-benefits">
                <div className="text-center">
                  <div className="case-study-summary-stat">
                    <div className="case-study-summary-number">+20%</div>
                    <div className="case-study-summary-label">{t('owners.avgIncrease')}</div>
                  </div>
                </div>
                <div className="case-study-results">
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">5%</div>
                    <div className="case-study-metric-label">{t('owners.commission')}</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">24/7</div>
                    <div className="case-study-metric-label">{t('owners.monitoring')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-section-content">
              <div className="section-badge">
                {t('owners.badge')}
              </div>
              <h2 className="user-section-title">{t('owners.title')}</h2>
              <p className="user-section-description">
                {t('owners.description')}
              </p>
              <div className="user-benefits">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="user-benefit">
                    <CheckCircle className="user-benefit-icon" />
                    <span className="user-benefit-text">{t(`owners.benefit${num}`)}</span>
                  </div>
                ))}
              </div>
              <button className="user-section-cta">
                <TrendingUp />
                <span>{t('owners.btnRegister')}</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t('testimonials.title')}</h2>
            <p className="section-description">{t('testimonials.description')}</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="testimonial-star" />
                  ))}
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name[0]}
                  </div>
                  <div className="testimonial-author-info">
                    <div className="testimonial-author-name">{testimonial.name}</div>
                    <div className="testimonial-author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="section section-alt">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-badge">
                {t('contact.badge')}
              </div>
              <h2 className="contact-title">{t('contact.title')}</h2>
              <p className="contact-description">
                {t('contact.description')}
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail className="contact-method-icon-svg" />
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-title">{t('contact.email')}</div>
                    <a href="mailto:contacto@parkeoya.com" className="contact-method-link">
                      contacto@parkeoya.com
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Phone className="contact-method-icon-svg" />
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-title">{t('contact.phone')}</div>
                    <a href="tel:+51999888777" className="contact-method-link">
                      +51 999 888 777
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <MapPin className="contact-method-icon-svg" />
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-title">{t('contact.office')}</div>
                    <p className="contact-method-text">
                      {t('contact.officeAddress')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h3 className="contact-hours-title">{t('contact.hoursTitle')}</h3>
                <p className="contact-hours-text">{t('contact.hoursWeekday')}</p>
                <p className="contact-hours-text">{t('contact.hoursSaturday')}</p>
              </div>
            </div>

            <div className="contact-form">
              <h3 className="contact-form-title">{t('contact.formTitle')}</h3>
              <form className="contact-form-fields">
                <div className="form-field">
                  <label className="form-label">{t('contact.formName')}</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder={t('contact.formNamePlaceholder')}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.formEmail')}</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder={t('contact.formEmailPlaceholder')}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.formPhone')}</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder={t('contact.formPhonePlaceholder')}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.formUserType')}</label>
                  <select className="form-select">
                    <option>{t('contact.formUserDriver')}</option>
                    <option>{t('contact.formUserOwner')}</option>
                    <option>{t('contact.formUserCompany')}</option>
                    <option>{t('contact.formUserOther')}</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.formMessage')}</label>
                  <textarea
                    className="form-textarea"
                    placeholder={t('contact.formMessagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit"
                >
                  <MessageSquare />
                  <span>{t('contact.formSubmit')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="registro" className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            {selectedUserType === 'conductor' && t('cta.titleDriver')}
            {selectedUserType === 'propietario' && t('cta.titleOwner')}
            {!selectedUserType && t('cta.titleDefault')}
          </h2>
          <p className="cta-description">
            {t('cta.description')}
          </p>
          <div className="cta-actions">
            <button className="cta-btn-primary">
              <Users />
              <span>{t('cta.btnDriver')}</span>
            </button>
            <button className="cta-btn-secondary">
              <TrendingUp />
              <span>{t('cta.btnOwner')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo" aria-label="Site footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-icon" aria-hidden="true">
                  <MapPin />
                </div>
                <span className="footer-logo-text">ParkeoYa</span>
              </div>
              <p className="footer-description">{t('footer.description')}</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.product')}</h3>
              <div className="footer-links">
                <button onClick={() => scrollToSection('caracteristicas')} className="footer-link" aria-label={`Navigate to ${t('footer.features')}`}>{t('footer.features')}</button>
                <button onClick={() => scrollToSection('about-product')} className="footer-link" aria-label="Navigate to About the Product">{t('videos.productTitle')}</button>
                <button onClick={() => scrollToSection('about-team')} className="footer-link" aria-label="Navigate to About the Team">{t('videos.teamTitle')}</button>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.support')}</h3>
              <div className="footer-links">
                <button onClick={() => scrollToSection('contacto')} className="footer-link" aria-label={`Navigate to ${t('footer.helpCenter')}`}>{t('footer.helpCenter')}</button>
                <button onClick={() => scrollToSection('contacto')} className="footer-link" aria-label={`Navigate to ${t('footer.contact')}`}>{t('footer.contact')}</button>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.company')}</h3>
              <div className="footer-links">
                <button onClick={() => scrollToSection('sobre-nosotros')} className="footer-link" aria-label={`Navigate to ${t('footer.about')}`}>{t('footer.about')}</button>
                <a href="https://github.com/Lorem-Ipsum-UPC" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label={`Navigate to ${t('footer.aboutProject')}`}>{t('footer.aboutProject')}</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.copyright')}</p>
            <Link to="/terms" className="footer-link footer-terms" aria-label={`Navigate to ${t('footer.terms')}`}>{t('footer.terms')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParkeoYaLanding;