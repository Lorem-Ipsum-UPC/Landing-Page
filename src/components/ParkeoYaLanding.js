import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Smartphone, CheckCircle, Menu, X, ChevronRight, Star, Zap, Shield, TrendingUp, Target, Award, BarChart3, Globe, Mail, Phone, MessageSquare, Camera, Cpu, Bell, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './ParkeoYaLanding.css';

const ParkeoYaLanding = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);
  
  // Estados del formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  // Funciones de validación y manejo del formulario
  const handleNameChange = (e) => {
    // Solo permitir letras y espacios, convertir a mayúsculas
    const value = e.target.value.replace(/[^a-zA-ZáéíóúñÑ\s]/g, '').toUpperCase();
    setFormData(prev => ({ ...prev, name: value }));
    
    // Validar que no esté vacío
    if (value.trim() === '') {
      setFormErrors(prev => ({ ...prev, name: t('contact.form.validation.nameRequired', 'El nombre es requerido') }));
    } else {
      setFormErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
      setFormErrors(prev => ({ ...prev, email: t('contact.form.validation.emailRequired', 'El email es requerido') }));
    } else if (!emailRegex.test(value)) {
      setFormErrors(prev => ({ ...prev, email: t('contact.form.validation.emailInvalid', 'Debe contener una @ y un formato válido') }));
    } else {
      setFormErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    // Solo permitir números, espacios, guiones y el símbolo +
    const value = e.target.value.replace(/[^0-9+\-\s]/g, '');
    setFormData(prev => ({ ...prev, phone: value }));
    
    // Validar que tenga al menos 7 dígitos
    const digitsOnly = value.replace(/[^0-9]/g, '');
    if (value === '') {
      setFormErrors(prev => ({ ...prev, phone: t('contact.form.validation.phoneRequired', 'El teléfono es requerido') }));
    } else if (digitsOnly.length < 7) {
      setFormErrors(prev => ({ ...prev, phone: t('contact.form.validation.phoneInvalid', 'Debe contener al menos 7 dígitos') }));
    } else {
      setFormErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, userType: value }));
    
    // Validar que se haya seleccionado una opción
    if (value === '') {
      setFormErrors(prev => ({ ...prev, userType: t('contact.form.validation.userTypeRequired', 'Debe seleccionar un tipo de usuario') }));
    } else {
      setFormErrors(prev => ({ ...prev, userType: '' }));
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, message: value }));
    
    // Validar que no esté vacío
    if (value.trim() === '') {
      setFormErrors(prev => ({ ...prev, message: t('contact.form.validation.messageRequired', 'El mensaje es requerido') }));
    } else {
      setFormErrors(prev => ({ ...prev, message: '' }));
    }
  };

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

  // Si no está listo i18n, mostrar loading
  if (!i18n.isInitialized) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h1>Cargando traducciones...</h1>
          <p>Please wait while we load the translations...</p>
        </div>
      </div>
    );
  }

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
              <button onClick={() => scrollToSection('inicio')} className="nav-button">{t('nav.inicio', 'Inicio')}</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="nav-button">{t('nav.sobreNosotros', 'Sobre Nosotros')}</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="nav-button">{t('nav.caracteristicas', 'Características')}</button>
              <button onClick={() => scrollToSection('casos-exito')} className="nav-button">{t('nav.casosExito', 'Casos de Éxito')}</button>
              <button onClick={() => scrollToSection('contacto')} className="nav-button">{t('nav.contacto', 'Contacto')}</button>
            </div>

            <div className="nav-actions">
              <LanguageSelector />
              <a href="https://parkeoya.vercel.app/login" rel="noopener noreferrer" target='_blank' className="btn-outline">
                {t('nav.iniciarSesion', 'Iniciar Sesión')}
              </a>
              <a href="https://parkeoya.vercel.app/register" rel="noopener noreferrer" target='_blank' className="btn-primary">
                {t('nav.registrarse', 'Registrarse')}
              </a>
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
              <button onClick={() => scrollToSection('inicio')} className="mobile-menu-item">{t('nav.inicio', 'Inicio')}</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="mobile-menu-item">{t('nav.sobreNosotros', 'Sobre Nosotros')}</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="mobile-menu-item">{t('nav.caracteristicas', 'Características')}</button>
              <button onClick={() => scrollToSection('casos-exito')} className="mobile-menu-item">{t('nav.casosExito', 'Casos de Éxito')}</button>
              <button onClick={() => scrollToSection('contacto')} className="mobile-menu-item">{t('nav.contacto', 'Contacto')}</button>
              <div className="mobile-menu-actions">
                <LanguageSelector />
                <a href="https://parkeoya.vercel.app/login" rel="noopener noreferrer" target='_blank' className="btn-outline">{t('nav.iniciarSesion', 'Iniciar Sesión')}</a>
                <a href="https://parkeoya.vercel.app/register" rel="noopener noreferrer" target='_blank' className="btn-primary">{t('nav.registrarse', 'Registrarse')}</a>
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
              <h1 className="hero-title">
                {t('hero.title', 'Encuentra Estacionamiento ')}
                <span className="hero-title-gradient">
                  {t('hero.titleGradient', 'en Tiempo Real')}
                </span>
              </h1>
              <p className="hero-description">
                {t('hero.description', 'Sensores IoT detectan disponibilidad al instante. Reserva, paga y estaciona sin dar vueltas. Optimiza tu tiempo y tus ingresos.')}
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
                  <span>{t('hero.conductorBtn', 'Soy Conductor')}</span>
                </button>
                <button 
                  onClick={() => {
                    setSelectedUserType('propietario');
                    scrollToSection('registro');
                  }}
                  className="btn-hero-secondary"
                >
                  <TrendingUp />
                  <span>{t('hero.propietarioBtn', 'Soy Propietario')}</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">30%</div>
                  <div className="hero-stat-label">{t('hero.stats.searchTime', 'Menos tiempo de búsqueda')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">15%</div>
                  <div className="hero-stat-label">{t('hero.stats.co2Reduction', 'Reducción de CO₂')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">20%</div>
                  <div className="hero-stat-label">{t('hero.stats.occupancy', 'Más ocupación')}</div>
                </div>
              </div>
            </div>
            <div className="hero-demo">
              <div className="hero-demo-bg"></div>
              <div className="hero-demo-card">
                <div className="demo-status">
                  <div className="demo-status-dot"></div>
                  <span className="demo-status-text">3 {t('hero.demoStatus', 'espacios disponibles cerca de ti')}</span>
                </div>
                <div className="demo-parking-list">
                  {['Estacionamiento Centro', 'Plaza San Isidro', 'Parqueo Express'].map((name, i) => (
                    <div key={i} className="demo-parking-item">
                      <div className="demo-parking-info">
                        <MapPin />
                        <div className="demo-parking-details">
                          <div className="demo-parking-name">{name}</div>
                          <div className="demo-parking-meta">{150 + i * 50}{t('hero.demoDistance', 'm')} • {t('hero.demoPrice', 'S/')} {3 + i}/{t('hero.demoPriceUnit', 'hora')}</div>
                        </div>
                      </div>
                      <a href="https://parkeoya.vercel.app/login" rel="noopener noreferrer" target='_blank' className="demo-reserve-btn">
                        {t('hero.reserveBtn', 'Reservar')}
                      </a>
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



      {/* Casos de Éxito */}
      <section id="casos-exito" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t('caseStudiesSummary.title', 'Resultados Comprobados')}</h2>
            <p className="section-description">
              {t('caseStudiesSummary.subtitle', 'Descubre cómo ParkeoYa ha transformado negocios reales')}
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
                    <div className="case-study-metric-label">{t('caseStudies.metrics.occupancy', 'Ocupación')}</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value positive">{study.results.revenue}</div>
                    <div className="case-study-metric-label">{t('caseStudies.metrics.revenue', 'Ingresos')}</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">{study.results.time}</div>
                    <div className="case-study-metric-label">{t('caseStudies.metrics.time', 'Tiempo')}</div>
                  </div>
                </div>

                <p className="case-study-testimonial">"{study.testimonial}"</p>
                <div className="case-study-author">
                  <div className="case-study-avatar">
                    {study.owner[0]}
                  </div>
                  <div className="case-study-author-info">
                    <div className="case-study-author-name">{study.owner}</div>
                    <div className="case-study-author-role">{t('caseStudies.ownerRole', 'Propietario')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="case-study-summary">
            <div className="text-center">
              <h3 className="case-study-summary-title">{t('caseStudiesSummary.summaryTitle', 'Resultados Promedio de Nuestros Clientes')}</h3>
              <div className="case-study-summary-stats">
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">{t('caseStudiesSummary.values.occupancyIncrease', '+24%')}</div>
                  <div className="case-study-summary-label">{t('caseStudiesSummary.metrics.occupancyIncrease', 'Aumento en Ocupación')}</div>
                </div>
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">{t('caseStudiesSummary.values.revenueGrowth', '+29%')}</div>
                  <div className="case-study-summary-label">{t('caseStudiesSummary.metrics.revenueGrowth', 'Crecimiento en Ingresos')}</div>
                </div>
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">{t('caseStudiesSummary.values.timeReduction', '-40%')}</div>
                  <div className="case-study-summary-label">{t('caseStudiesSummary.metrics.timeReduction', 'Reducción de Tiempo')}</div>
                </div>
                <div className="case-study-summary-stat">
                  <div className="case-study-summary-number">{t('caseStudiesSummary.values.avgROI', '4 meses')}</div>
                  <div className="case-study-summary-label">{t('caseStudiesSummary.metrics.avgROI', 'ROI Promedio')}</div>
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
                {t('conductors.badge', 'Para Conductores')}
              </div>
              <h2 className="user-section-title">{t('conductors.title', 'Estaciona Inteligente, Ahorra Tiempo')}</h2>
              <p className="user-section-description">
                {t('conductors.description', 'Olvídate de dar vueltas. Con ParkeoYa, encuentras y reservas tu espacio en segundos.')}
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
                <span>{t('conductors.downloadApp', 'Descargar App')}</span>
                <ChevronRight />
              </button>
            </div>
            <div className="user-section-demo">
              <div className="user-demo-benefits">
                <div className="user-demo-benefit">
                  <Clock className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">{t('conductors.benefits.saveTime', 'Ahorra 15 min diarios')}</div>
                    <div className="user-demo-benefit-description">{t('conductors.benefits.saveTimeDescription', 'Promedio en zonas urbanas')}</div>
                  </div>
                </div>
                <div className="user-demo-benefit">
                  <DollarSign className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">{t('conductors.benefits.fairPay', 'Paga lo justo')}</div>
                    <div className="user-demo-benefit-description">{t('conductors.benefits.fairPayDescription', 'Cobro automático por minuto')}</div>
                  </div>
                </div>
                <div className="user-demo-benefit">
                  <Shield className="user-demo-benefit-icon" />
                  <div className="user-demo-benefit-content">
                    <div className="user-demo-benefit-title">{t('conductors.benefits.guaranteed', '100% Garantizado')}</div>
                    <div className="user-demo-benefit-description">{t('conductors.benefits.guaranteedDescription', 'Compensación si falla sensor')}</div>
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
                    <div className="case-study-summary-number">{t('owners.values.occupancyIncrease', '+20%')}</div>
                    <div className="case-study-summary-label">{t('owners.occupancyIncrease', 'Aumento promedio en ocupación')}</div>
                  </div>
                </div>
                <div className="case-study-results">
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">{t('owners.values.commission', '5%')}</div>
                    <div className="case-study-metric-label">{t('owners.commission', 'Comisión por reserva')}</div>
                  </div>
                  <div className="case-study-metric">
                    <div className="case-study-metric-value neutral">{t('owners.values.monitoring', '24/7')}</div>
                    <div className="case-study-metric-label">{t('owners.monitoring', 'Monitoreo continuo')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-section-content">
              <div className="section-badge">
                {t('owners.badge', 'Para Propietarios')}
              </div>
              <h2 className="user-section-title">{t('owners.title', 'Maximiza tus Ingresos con IoT')}</h2>
              <p className="user-section-description">
                {t('owners.description', 'Automatiza la gestión, aumenta ocupación y genera ingresos pasivos con nuestra plataforma.')}
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
                <span>{t('owners.registerProperty', 'Registrar mi Playa')}</span>
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
            <h2 className="section-title">{t('testimonials.title', 'Lo que dicen nuestros usuarios')}</h2>
            <p className="section-description">{t('testimonials.subtitle', 'Experiencias reales, resultados medibles')}</p>
          </div>
          <div className="testimonials-grid">
            {getTestimonials().map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name[0]}
                  </div>
                  <div className="testimonial-author-info">
                    <div className="testimonial-author-name">{testimonial.name}</div>
                    <div className="testimonial-author-role">{testimonial.role}</div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="testimonial-star" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
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
              <h2 className="contact-title">{t('contact.title', 'Hablemos de tu Proyecto')}</h2>
              <p className="contact-description">
                {t('contact.description', '¿Tienes preguntas? ¿Quieres una demo personalizada? Nuestro equipo está listo para ayudarte.')}
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail className="contact-method-icon-svg" />
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-title">{t('contact.methods.email', 'Email')}</div>
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
                    <div className="contact-method-title">{t('contact.methods.phone', 'Teléfono')}</div>
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
                    <div className="contact-method-title">{t('contact.methods.office', 'Oficina')}</div>
                    <p className="contact-method-text">
                      {t('contact.address', 'Universidad Peruana de Ciencias Aplicadas\nAv. Primavera 2390, Santiago de Surco\nLima, Perú').split('\n').map((line, i) => (
                        <span key={i}>{line}{i < 2 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h3 className="contact-hours-title">{t('contact.hours.title', 'Horario de Atención')}</h3>
                <p className="contact-hours-text">{t('contact.hours.weekdays', 'Lunes a Viernes: 9:00 AM - 6:00 PM')}</p>
                <p className="contact-hours-text">{t('contact.hours.saturday', 'Sábados: 9:00 AM - 1:00 PM')}</p>
              </div>
            </div>

            <div className="contact-form">
              <h3 className="contact-form-title">{t('contact.form.title', 'Envíanos un Mensaje')}</h3>
              <form className="contact-form-fields">
                <div className="form-field">
                  <label className="form-label">{t('contact.form.fields.name', 'Nombre Completo')}</label>
                  <input
                    type="text"
                    className={`form-input ${formErrors.name ? 'form-input-error' : ''}`}
                    placeholder={t('contact.form.fields.namePlaceholder', 'Juan Pérez')}
                    value={formData.name}
                    onChange={handleNameChange}
                  />
                  {formErrors.name && <div className="form-error">{formErrors.name}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.form.fields.email', 'Email')}</label>
                  <input
                    type="email"
                    className={`form-input ${formErrors.email ? 'form-input-error' : ''}`}
                    placeholder={t('contact.form.fields.emailPlaceholder', 'juan@ejemplo.com')}
                    value={formData.email}
                    onChange={handleEmailChange}
                  />
                  {formErrors.email && <div className="form-error">{formErrors.email}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.form.fields.phone', 'Teléfono')}</label>
                  <input
                    type="tel"
                    className={`form-input ${formErrors.phone ? 'form-input-error' : ''}`}
                    placeholder={t('contact.form.fields.phonePlaceholder', '+51 999 888 777')}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                  {formErrors.phone && <div className="form-error">{formErrors.phone}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.form.fields.userType', 'Tipo de Usuario')}</label>
                  <select 
                    className={`form-select ${formErrors.userType ? 'form-input-error' : ''}`}
                    value={formData.userType}
                    onChange={handleSelectChange}
                  >
                    <option value="">{t('contact.form.fields.userTypes.select', 'Selecciona una opción')}</option>
                    <option value="conductor">{t('contact.form.fields.userTypes.conductor', 'Conductor')}</option>
                    <option value="propietario">{t('contact.form.fields.userTypes.propietario', 'Propietario de Estacionamiento')}</option>
                  </select>
                  {formErrors.userType && <div className="form-error">{formErrors.userType}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label">{t('contact.form.fields.message', 'Mensaje')}</label>
                  <textarea
                    className={`form-textarea ${formErrors.message ? 'form-input-error' : ''}`}
                    placeholder={t('contact.form.fields.messagePlaceholder', 'Cuéntanos cómo podemos ayudarte...')}
                    value={formData.message}
                    onChange={handleMessageChange}
                  />
                  {formErrors.message && <div className="form-error">{formErrors.message}</div>}
                </div>

                <button
                  type="submit"
                  className="form-submit"
                >
                  <MessageSquare />
                  <span>{t('contact.form.submitBtn', 'Enviar Mensaje')}</span>
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
            {selectedUserType === 'conductor' && t('cta.titles.conductor', '¿Listo para encontrar estacionamiento al instante?')}
            {selectedUserType === 'propietario' && t('cta.titles.propietario', '¿Listo para maximizar tus ingresos?')}
            {!selectedUserType && t('cta.titles.default', '¿Listo para empezar?')}
          </h2>
          <p className="cta-description">
            {t('cta.description', 'Únete a ParkeoYa hoy y experimenta la diferencia de la tecnología IoT')}
          </p>
          <div className="cta-actions">
            <button className="cta-btn-primary">
              <Users />
              <span>{t('cta.conductorBtn', 'Registrarme como Conductor')}</span>
            </button>
            <button className="cta-btn-secondary">
              <TrendingUp />
              <a href="https://parkeoya.vercel.app/register" rel="noopener noreferrer" target='_blank' className="btn-conductor-sec" >{t('cta.propietarioBtn', 'Registrarme como Propietario')}</a>
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
                <div className="logo">
                  <MapPin />
                </div>
                <span className="footer-logo-text">ParkeoYa</span>
              </div>
              <p className="footer-description">{t('footer.description', 'Estacionamiento inteligente con tecnología IoT para ciudades modernas.')}</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.sections.product', 'Producto')}</h3>
              <ul className="footer-links">
                <ul><button onClick={() => scrollToSection('caracteristicas')} className="footer-link">{t('footer.links.features', 'Características')}</button></ul>
                <ul><button onClick={() => scrollToSection('casos-exito')} className="footer-link">{t('footer.links.caseStudies', 'Casos de Éxito')}</button></ul>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.sections.support', 'Soporte')}</h3>
              <ul className="footer-links">
                <ul><button onClick={() => scrollToSection('contacto')} className="footer-link">{t('footer.links.help', 'Centro de Ayuda')}</button></ul>
                <ul><button onClick={() => scrollToSection('contacto')} className="footer-link">{t('footer.links.contact', 'Contacto')}</button></ul>
                <ul><button className="footer-link">{t('footer.links.faq', 'FAQ')}</button></ul>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.sections.company', 'Empresa')}</h3>
              <ul className="footer-links">
                <ul><button onClick={() => scrollToSection('sobre-nosotros')} className="footer-link">{t('footer.links.about', 'Sobre Nosotros')}</button></ul>
                <ul><button className="footer-link">{t('footer.links.blog', 'Blog')}</button></ul>
                <ul><button className="footer-link">{t('footer.links.careers', 'Trabaja con Nosotros')}</button></ul>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.copyright', '© 2025 ParkeoYa - Lorem Ipsum UPC. Todos los derechos reservados.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParkeoYaLanding;