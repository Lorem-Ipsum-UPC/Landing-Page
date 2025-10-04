import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Smartphone, CheckCircle, Menu, X, ChevronRight, Star, Zap, Shield, TrendingUp, Target, Award, BarChart3, Globe, Mail, Phone, MessageSquare, Camera, Cpu, Bell, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './ParkeoYaLanding.css';

const ParkeoYaLanding = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('conductor');

  const features = [
    {
      icon: <Zap className="feature-icon-large" />,
      title: t('features.realTime.title'),
      description: t('features.realTime.description')
    },
    {
      icon: <MapPin className="feature-icon-large" />,
      title: t('features.geolocation.title'),
      description: t('features.geolocation.description')
    },
    {
      icon: <Shield className="feature-icon-large" />,
      title: t('features.guarantee.title'),
      description: t('features.guarantee.description')
    },
    {
      icon: <TrendingUp className="feature-icon-large" />,
      title: t('features.revenue.title'),
      description: t('features.revenue.description')
    }
  ];

  const detailedFeatures = [
    {
      icon: <Camera className="detailed-feature-icon" />,
      title: t('detailedFeatures.sensors.title'),
      description: t('detailedFeatures.sensors.description')
    },
    {
      icon: <Smartphone className="detailed-feature-icon" />,
      title: t('detailedFeatures.app.title'),
      description: t('detailedFeatures.app.description')
    },
    {
      icon: <Bell className="detailed-feature-icon" />,
      title: t('detailedFeatures.notifications.title'),
      description: t('detailedFeatures.notifications.description')
    },
    {
      icon: <Lock className="detailed-feature-icon" />,
      title: t('detailedFeatures.payments.title'),
      description: t('detailedFeatures.payments.description')
    },
    {
      icon: <BarChart3 className="detailed-feature-icon" />,
      title: t('detailedFeatures.analytics.title'),
      description: t('detailedFeatures.analytics.description')
    },
    {
      icon: <Cpu className="detailed-feature-icon" />,
      title: t('detailedFeatures.edge.title'),
      description: t('detailedFeatures.edge.description')
    }
  ];

  const getPricingPlans = () => ({
    conductor: [
      {
        name: t('pricing.conductor.basic.name'),
        price: t('pricing.conductor.basic.price'),
        period: t('pricing.conductor.basic.period'),
        features: t('pricing.conductor.basic.features', { returnObjects: true }),
        recommended: false
      },
      {
        name: t('pricing.conductor.premium.name'),
        price: t('pricing.conductor.premium.price'),
        period: t('pricing.conductor.premium.period'),
        features: t('pricing.conductor.premium.features', { returnObjects: true }),
        recommended: true
      }
    ],
    propietario: [
      {
        name: t('pricing.propietario.starter.name'),
        price: t('pricing.propietario.starter.price'),
        period: t('pricing.propietario.starter.period'),
        features: t('pricing.propietario.starter.features', { returnObjects: true }),
        recommended: false
      },
      {
        name: t('pricing.propietario.business.name'),
        price: t('pricing.propietario.business.price'),
        period: t('pricing.propietario.business.period'),
        features: t('pricing.propietario.business.features', { returnObjects: true }),
        recommended: true
      },
      {
        name: t('pricing.propietario.enterprise.name'),
        price: t('pricing.propietario.enterprise.price'),
        period: t('pricing.propietario.enterprise.period'),
        features: t('pricing.propietario.enterprise.features', { returnObjects: true }),
        recommended: false
      }
    ]
  });

  const getCaseStudies = () => [
    {
      company: t('caseStudies.companies.0.name'),
      location: t('caseStudies.companies.0.location'),
      image: "🏢",
      results: {
        occupancy: "+25%",
        revenue: "+30%",
        time: "-40%"
      },
      testimonial: t('caseStudies.companies.0.testimonial'),
      owner: t('caseStudies.companies.0.owner')
    },
    {
      company: t('caseStudies.companies.1.name'),
      location: t('caseStudies.companies.1.location'),
      image: "🏬",
      results: {
        occupancy: "+18%",
        revenue: "+22%",
        time: "-35%"
      },
      testimonial: t('caseStudies.companies.1.testimonial'),
      owner: t('caseStudies.companies.1.owner')
    },
    {
      company: t('caseStudies.companies.2.name'),
      location: t('caseStudies.companies.2.location'),
      image: "🚗",
      results: {
        occupancy: "+30%",
        revenue: "+35%",
        time: "-45%"
      },
      testimonial: t('caseStudies.companies.2.testimonial'),
      owner: t('caseStudies.companies.2.owner')
    }
  ];

  const getConductorBenefits = () => t('pricing.conductorBenefits', { returnObjects: true });
  const getPropietarioBenefits = () => t('pricing.propietarioBenefits', { returnObjects: true });

  const getTestimonials = () => t('testimonials.items', { returnObjects: true }).map(item => ({
    ...item,
    rating: 5
  }));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-container">
              <div className="logo">
                <MapPin />
              </div>
              <span className="logo-text">
                ParkeoYa
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              <button onClick={() => scrollToSection('inicio')} className="nav-button">{t('nav.inicio')}</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="nav-button">{t('nav.sobreNosotros')}</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="nav-button">{t('nav.caracteristicas')}</button>
              <button onClick={() => scrollToSection('precios')} className="nav-button">{t('nav.precios')}</button>
              <button onClick={() => scrollToSection('casos-exito')} className="nav-button">{t('nav.casosExito')}</button>
              <button onClick={() => scrollToSection('contacto')} className="nav-button">{t('nav.contacto')}</button>
            </div>

            <div className="nav-actions">
              <LanguageSelector />
              <button className="btn-outline">
                {t('nav.iniciarSesion')}
              </button>
              <button className="btn-primary">
                {t('nav.registrarse')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <button onClick={() => scrollToSection('inicio')} className="mobile-menu-item">{t('nav.inicio')}</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="mobile-menu-item">{t('nav.sobreNosotros')}</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="mobile-menu-item">{t('nav.caracteristicas')}</button>
              <button onClick={() => scrollToSection('precios')} className="mobile-menu-item">{t('nav.precios')}</button>
              <button onClick={() => scrollToSection('casos-exito')} className="mobile-menu-item">{t('nav.casosExito')}</button>
              <button onClick={() => scrollToSection('contacto')} className="mobile-menu-item">{t('nav.contacto')}</button>
              <div className="mobile-menu-actions">
                <LanguageSelector />
                <button className="btn-outline">{t('nav.iniciarSesion')}</button>
                <button className="btn-primary">{t('nav.registrarse')}</button>
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
                  {t('hero.titleGradient')}
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
                  <span>{t('hero.conductorBtn')}</span>
                </button>
                <button 
                  onClick={() => {
                    setSelectedUserType('propietario');
                    scrollToSection('registro');
                  }}
                  className="btn-hero-secondary"
                >
                  <TrendingUp />
                  <span>{t('hero.propietarioBtn')}</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">30%</div>
                  <div className="hero-stat-label">{t('hero.stats.searchTime')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">15%</div>
                  <div className="hero-stat-label">{t('hero.stats.co2Reduction')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">20%</div>
                  <div className="hero-stat-label">{t('hero.stats.occupancy')}</div>
                </div>
              </div>
            </div>
            <div className="hero-demo">
              <div className="hero-demo-bg"></div>
              <div className="hero-demo-card">
                <div className="demo-status">
                  <div className="demo-status-dot"></div>
                  <span className="demo-status-text">3 {t('hero.demoStatus')}</span>
                </div>
                <div className="demo-parking-list">
                  {['Estacionamiento Centro', 'Plaza San Isidro', 'Parqueo Express'].map((name, i) => (
                    <div key={i} className="demo-parking-item">
                      <div className="demo-parking-info">
                        <MapPin />
                        <div className="demo-parking-details">
                          <div className="demo-parking-name">{name}</div>
                          <div className="demo-parking-meta">{150 + i * 50}m • S/ {3 + i}/hora</div>
                        </div>
                      </div>
                      <button className="demo-reserve-btn">
                        {t('hero.reserveBtn')}
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
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
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
                  {t('about.problem.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="problem-item">
                      <CheckCircle className="problem-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="problem-stats">
                <div className="problem-stat-card">
                  <div className="problem-stat-number">100,000+</div>
                  <div className="problem-stat-label">{t('about.problem.stats.vehicles')}</div>
                </div>
                <div className="problem-stat-card">
                  <div className="problem-stat-number">20 min</div>
                  <div className="problem-stat-label">{t('about.problem.stats.time')}</div>
                </div>
                <div className="problem-stat-card">
                  <div className="problem-stat-number">60%</div>
                  <div className="problem-stat-label">{t('about.problem.stats.traffic')}</div>
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
              {t('detailedFeatures.subtitle')}
            </p>
          </div>

          <div className="detailed-feature-grid">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="detailed-feature-card">
                <div className="detailed-feature-icon">{feature.icon}</div>
                <h3 className="detailed-feature-title">{feature.title}</h3>
                <p className="detailed-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="tech-process">
            <h3 className="tech-process-title">{t('detailedFeatures.processTitle')}</h3>
            <p className="tech-process-description">
              {t('detailedFeatures.processDescription')}
            </p>
            <div className="tech-process-steps">
              <div className="tech-step">
                <div className="tech-step-number">1</div>
                <div className="tech-step-label">{t('detailedFeatures.processSteps.detect')}</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">2</div>
                <div className="tech-step-label">{t('detailedFeatures.processSteps.process')}</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">3</div>
                <div className="tech-step-label">{t('detailedFeatures.processSteps.sync')}</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">4</div>
                <div className="tech-step-label">{t('detailedFeatures.processSteps.update')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section id="precios" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              {t('pricing.badge')}
            </div>
            <h2 className="section-title">{t('pricing.title')}</h2>
            <p className="section-description">
              {t('pricing.subtitle')}
            </p>
            <div className="pricing-toggle">
              <button
                onClick={() => setSelectedPlan('conductor')}
                className={`pricing-toggle-btn ${selectedPlan === 'conductor' ? 'active' : ''}`}
              >
                {t('pricing.conductorTab')}
              </button>
              <button
                onClick={() => setSelectedPlan('propietario')}
                className={`pricing-toggle-btn ${selectedPlan === 'propietario' ? 'active' : ''}`}
              >
                {t('pricing.propietarioTab')}
              </button>
            </div>
          </div>

          <div className="pricing-grid" data-plan={selectedPlan}>
            {getPricingPlans()[selectedPlan].map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              >
                {plan.recommended && (
                  <div className="pricing-recommended-badge">
                    {t('pricing.recommended')}
                  </div>
                )}
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="pricing-amount">{plan.price}</span>
                    {plan.period && <span className="pricing-period">/ {plan.period}</span>}
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="pricing-feature">
                      <CheckCircle className="pricing-feature-icon" />
                      <span className="pricing-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`pricing-cta ${plan.recommended ? 'primary' : 'secondary'}`}
                >
                  {plan.name === t('pricing.propietario.enterprise.name') ? t('pricing.contactBtn') : t('pricing.selectBtn')}
                </button>
              </div>
            ))}
          </div>

          <div className="pricing-footer">
            <p className="pricing-footer-text">
              ¿Necesitas un plan personalizado? Contáctanos para obtener una cotización especial.
            </p>
            <button className="pricing-contact-link">
              <span>Hablar con Ventas</span>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos-exito" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              Casos de Éxito
            </div>
            <h2 className="section-title">Resultados Comprobados</h2>
            <p className="section-description">
              Descubre cómo ParkeoYa ha transformado negocios reales
            </p>
          </div>

          <div className="case-studies-grid">
            {getCaseStudies().map((study, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-image">{study.image}</div>
                <h3 className="case-study-title">{study.company}</h3>
                <p className="case-study-location">{study.location}</p>
                
                <div className="case-study-results">
                  <div className="case-study-metric">
                    <div className="case-study-metric-value positive">{study.results.occupancy}</div>
                    <div className="case-study-metric-label">Ocupación</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value positive">{study.results.revenue}</div>
                    <div className="case-study-metric-label">Ingresos</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">{study.results.time}</div>
                    <div className="case-study-metric-label">Tiempo</div>
                  </div>
                </div>

                <p className="case-study-testimonial">"{study.testimonial}"</p>
                <div className="case-study-author">
                  <div className="case-study-avatar">
                    {study.owner[0]}
                  </div>
                  <div className="case-study-author-info">
                    <div className="case-study-author-name">{study.owner}</div>
                    <div className="case-study-author-role">Propietario</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="case-study-summary">
            <div className="text-center">
              <h3 className="case-study-summary-title">Resultados Promedio de Nuestros Clientes</h3>
              <div className="case-study-summary-stats">
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">+24%</div>
                  <div className="case-study-summary-label">Aumento en Ocupación</div>
                </div>
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">+29%</div>
                  <div className="case-study-summary-label">Crecimiento en Ingresos</div>
                </div>
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">-40%</div>
                  <div className="case-study-summary-label">Reducción de Tiempo</div>
                </div>
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">4 meses</div>
                  <div className="case-study-summary-label">ROI Promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conductores Section */}
      <section id="conductores" className="section">
        <div className="section-container">
          <div className="user-section-grid">
            <div className="user-section-content">
              <div className="section-badge">
                Para Conductores
              </div>
              <h2 className="user-section-title">Estaciona Inteligente, Ahorra Tiempo</h2>
              <p className="user-section-description">
                Olvídate de dar vueltas. Con ParkeoYa, encuentras y reservas tu espacio en segundos.
              </p>
              <div className="user-benefits">
                {getConductorBenefits().map((benefit, index) => (
                  <div key={index} className="user-benefit">
                    <CheckCircle className="user-benefit-icon" />
                    <span className="user-benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="user-section-cta">
                <Smartphone />
                <span>Descargar App</span>
                <ChevronRight />
              </button>
            </div>
            <div className="user-section-demo">
              <div className="user-demo-benefits">
                <div className="user-demo-benefit">
                  <Clock className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">Ahorra 15 min diarios</div>
                    <div className="user-demo-benefit-description">Promedio en zonas urbanas</div>
                  </div>
                </div>
                <div className="user-demo-benefit">
                  <DollarSign className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">Paga lo justo</div>
                    <div className="user-demo-benefit-description">Cobro automático por minuto</div>
                  </div>
                </div>
                <div className="user-demo-benefit">
                  <Shield className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">100% Garantizado</div>
                    <div className="user-demo-benefit-description">Compensación si falla sensor</div>
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
                    <div className="case-study-summary-label">Aumento promedio en ocupación</div>
                  </div>
                </div>
                <div className="case-study-results">
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">5%</div>
                    <div className="case-study-metric-label">Comisión por reserva</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">24/7</div>
                    <div className="case-study-metric-label">Monitoreo continuo</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-section-content">
              <div className="section-badge">
                Para Propietarios
              </div>
              <h2 className="user-section-title">Maximiza tus Ingresos con IoT</h2>
              <p className="user-section-description">
                Automatiza la gestión, aumenta ocupación y genera ingresos pasivos con nuestra plataforma.
              </p>
              <div className="user-benefits">
                {getPropietarioBenefits().map((benefit, index) => (
                  <div key={index} className="user-benefit">
                    <CheckCircle className="user-benefit-icon" />
                    <span className="user-benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="user-section-cta">
                <TrendingUp />
                <span>Registrar mi Playa</span>
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
            <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
            <p className="section-description">Experiencias reales, resultados medibles</p>
          </div>
          <div className="testimonials-grid">
            {getTestimonials().map((testimonial, index) => (
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
                Contacto
              </div>
              <h2 className="contact-title">Hablemos de tu Proyecto</h2>
              <p className="contact-description">
                ¿Tienes preguntas? ¿Quieres una demo personalizada? Nuestro equipo está listo para ayudarte.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail className="contact-method-icon-svg" />
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-title">Email</div>
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
                    <div className="contact-method-title">Teléfono</div>
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
                    <div className="contact-method-title">Oficina</div>
                    <p className="contact-method-text">
                      Universidad Peruana de Ciencias Aplicadas<br />
                      Av. Primavera 2390, Santiago de Surco<br />
                      Lima, Perú
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h3 className="contact-hours-title">Horario de Atención</h3>
                <p className="contact-hours-text">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="contact-hours-text">Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="contact-form">
              <h3 className="contact-form-title">Envíanos un Mensaje</h3>
              <form className="contact-form-fields">
                <div className="form-field">
                  <label className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+51 999 888 777"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Tipo de Usuario</label>
                  <select className="form-select">
                    <option>Conductor</option>
                    <option>Propietario de Estacionamiento</option>
                    <option>Empresa</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit"
                >
                  <MessageSquare />
                  <span>Enviar Mensaje</span>
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
            {selectedUserType === 'conductor' && '¿Listo para encontrar estacionamiento al instante?'}
            {selectedUserType === 'propietario' && '¿Listo para maximizar tus ingresos?'}
            {!selectedUserType && '¿Listo para empezar?'}
          </h2>
          <p className="cta-description">
            Únete a ParkeoYa hoy y experimenta la diferencia de la tecnología IoT
          </p>
          <div className="cta-actions">
            <button className="cta-btn-primary">
              <Users />
              <span>Registrarme como Conductor</span>
            </button>
            <button className="cta-btn-secondary">
              <TrendingUp />
              <span>Registrarme como Propietario</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <MapPin />
                </div>
                <span className="footer-logo-text">ParkeoYa</span>
              </div>
              <p className="footer-description">Estacionamiento inteligente con tecnología IoT para ciudades modernas.</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Producto</h3>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('caracteristicas')} className="footer-link">Características</button></li>
                <li><button onClick={() => scrollToSection('precios')} className="footer-link">Precios</button></li>
                <li><button onClick={() => scrollToSection('casos-exito')} className="footer-link">Casos de Éxito</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Soporte</h3>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('contacto')} className="footer-link">Centro de Ayuda</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="footer-link">Contacto</button></li>
                <li><button className="footer-link">FAQ</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Empresa</h3>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('sobre-nosotros')} className="footer-link">Sobre Nosotros</button></li>
                <li><button className="footer-link">Blog</button></li>
                <li><button className="footer-link">Trabaja con Nosotros</button></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ParkeoYa - Lorem Ipsum UPC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParkeoYaLanding;