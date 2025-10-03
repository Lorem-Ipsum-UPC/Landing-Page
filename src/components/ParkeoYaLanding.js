import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Smartphone, CheckCircle, Menu, X, ChevronRight, Star, Zap, Shield, TrendingUp, Target, Award, BarChart3, Globe, Mail, Phone, MessageSquare, Camera, Cpu, Bell, Lock } from 'lucide-react';
import './ParkeoYaLanding.css';

const ParkeoYaLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('conductor');

  const features = [
    {
      icon: <Zap className="feature-icon-large" />,
      title: "Disponibilidad en Tiempo Real",
      description: "Sensores IoT detectan espacios libres al instante. Ahorra hasta 15 minutos por búsqueda."
    },
    {
      icon: <MapPin className="feature-icon-large" />,
      title: "Geolocalización Inteligente",
      description: "Encuentra estacionamientos cercanos con distancias exactas y navegación integrada."
    },
    {
      icon: <Shield className="feature-icon-large" />,
      title: "Reserva Garantizada",
      description: "Tu espacio confirmado por sensores. Sin sorpresas, sin dar vueltas."
    },
    {
      icon: <TrendingUp className="feature-icon-large" />,
      title: "Maximiza Ingresos",
      description: "Para propietarios: aumenta ocupación hasta 20% con gestión automatizada."
    }
  ];

  const detailedFeatures = [
    {
      icon: <Camera className="detailed-feature-icon" />,
      title: "Sensores IoT Avanzados",
      description: "Tecnología de detección en tiempo real con precisión del 99.9%. Cada espacio cuenta con sensores que comunican su estado instantáneamente."
    },
    {
      icon: <Smartphone className="detailed-feature-icon" />,
      title: "App Multiplataforma",
      description: "Experiencia fluida en iOS, Android y Web. Sincronización automática entre todos tus dispositivos."
    },
    {
      icon: <Bell className="detailed-feature-icon" />,
      title: "Notificaciones Inteligentes",
      description: "Alertas personalizables para vencimiento de reserva, nuevos espacios cercanos y promociones especiales."
    },
    {
      icon: <Lock className="detailed-feature-icon" />,
      title: "Pagos Seguros",
      description: "Transacciones encriptadas con los más altos estándares de seguridad. Múltiples métodos de pago disponibles."
    },
    {
      icon: <BarChart3 className="detailed-feature-icon" />,
      title: "Analytics en Tiempo Real",
      description: "Dashboard completo con métricas de ocupación, ingresos y tendencias. Reportes descargables en Excel."
    },
    {
      icon: <Cpu className="detailed-feature-icon" />,
      title: "Edge Computing",
      description: "Procesamiento distribuido para respuestas instantáneas incluso sin conexión a internet."
    }
  ];

  const pricingPlans = {
    conductor: [
      {
        name: "Básico",
        price: "Gratis",
        period: "siempre",
        features: [
          "Búsqueda ilimitada de estacionamientos",
          "Reservas en tiempo real",
          "Pago por uso (sin comisiones)",
          "Historial de reservas",
          "Soporte por email"
        ],
        recommended: false
      },
      {
        name: "Premium",
        price: "S/ 9.90",
        period: "mes",
        features: [
          "Todo lo del plan Básico",
          "Descuentos exclusivos (hasta 15%)",
          "Reservas prioritarias",
          "Sin anuncios",
          "Soporte prioritario 24/7",
          "Programa de fidelización"
        ],
        recommended: true
      }
    ],
    propietario: [
      {
        name: "Starter",
        price: "S/ 49",
        period: "mes",
        features: [
          "Hasta 20 espacios",
          "Comisión 5% por reserva",
          "1 Edge Server incluido",
          "Dashboard básico",
          "Soporte por email",
          "Sensores IoT (alquiler incluido)"
        ],
        recommended: false
      },
      {
        name: "Business",
        price: "S/ 149",
        period: "mes",
        features: [
          "Hasta 100 espacios",
          "Comisión 4% por reserva",
          "3 Edge Servers incluidos",
          "Analytics avanzado",
          "Soporte prioritario",
          "API access",
          "Reportes personalizados"
        ],
        recommended: true
      },
      {
        name: "Enterprise",
        price: "Personalizado",
        period: "",
        features: [
          "Espacios ilimitados",
          "Comisión negociable",
          "Infraestructura dedicada",
          "Soporte 24/7 dedicado",
          "Integración personalizada",
          "SLA garantizado",
          "Consultoría incluida"
        ],
        recommended: false
      }
    ]
  };

  const caseStudies = [
    {
      company: "Estacionamiento Centro",
      location: "San Isidro, Lima",
      image: "🏢",
      results: {
        occupancy: "+25%",
        revenue: "+30%",
        time: "-40%"
      },
      testimonial: "ParkeoYa transformó completamente nuestro negocio. La automatización nos permitió reducir personal y aumentar ingresos simultáneamente.",
      owner: "Carlos Mendoza"
    },
    {
      company: "Plaza Mall Parking",
      location: "Miraflores, Lima",
      image: "🏬",
      results: {
        occupancy: "+18%",
        revenue: "+22%",
        time: "-35%"
      },
      testimonial: "Los clientes valoran muchísimo poder reservar antes de llegar. Hemos eliminado colas y mejorado la experiencia.",
      owner: "María Torres"
    },
    {
      company: "Express Park",
      location: "San Miguel, Lima",
      image: "🚗",
      results: {
        occupancy: "+30%",
        revenue: "+35%",
        time: "-45%"
      },
      testimonial: "La inversión se recuperó en 4 meses. Los reportes en tiempo real nos ayudan a tomar mejores decisiones.",
      owner: "Roberto Silva"
    }
  ];

  const conductorBenefits = [
    "Encuentra estacionamiento en segundos",
    "Reserva anticipada con código QR",
    "Pago automático por tiempo real",
    "Notificaciones de vencimiento",
    "Historial y reseñas de estacionamientos"
  ];

  const propietarioBenefits = [
    "Panel de control con métricas en tiempo real",
    "Gestión automatizada de espacios",
    "Reportes de ingresos y ocupación",
    "Comisión transparente del 5%",
    "Instalación de sensores IoT incluida"
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
              <button onClick={() => scrollToSection('inicio')} className="nav-button">Inicio</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="nav-button">Sobre Nosotros</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="nav-button">Características</button>
              <button onClick={() => scrollToSection('precios')} className="nav-button">Precios</button>
              <button onClick={() => scrollToSection('casos-exito')} className="nav-button">Casos de Éxito</button>
              <button onClick={() => scrollToSection('contacto')} className="nav-button">Contacto</button>
            </div>

            <div className="nav-actions">
              <button className="btn-outline">
                Iniciar Sesión
              </button>
              <button className="btn-primary">
                Registrarse
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
              <button onClick={() => scrollToSection('inicio')} className="mobile-menu-item">Inicio</button>
              <button onClick={() => scrollToSection('sobre-nosotros')} className="mobile-menu-item">Sobre Nosotros</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="mobile-menu-item">Características</button>
              <button onClick={() => scrollToSection('precios')} className="mobile-menu-item">Precios</button>
              <button onClick={() => scrollToSection('casos-exito')} className="mobile-menu-item">Casos de Éxito</button>
              <button onClick={() => scrollToSection('contacto')} className="mobile-menu-item">Contacto</button>
              <div className="mobile-menu-actions">
                <button className="btn-outline">Iniciar Sesión</button>
                <button className="btn-primary">Registrarse</button>
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
                Tecnología IoT para Movilidad Urbana
              </div>
              <h1 className="hero-title">
                Encuentra Estacionamiento 
                <span className="hero-title-gradient">
                  en Tiempo Real
                </span>
              </h1>
              <p className="hero-description">
                Sensores IoT detectan disponibilidad al instante. Reserva, paga y estaciona sin dar vueltas. 
                Optimiza tu tiempo y tus ingresos.
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
                  <span>Soy Conductor</span>
                </button>
                <button 
                  onClick={() => {
                    setSelectedUserType('propietario');
                    scrollToSection('registro');
                  }}
                  className="btn-hero-secondary"
                >
                  <TrendingUp />
                  <span>Soy Propietario</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">30%</div>
                  <div className="hero-stat-label">Menos tiempo de búsqueda</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">15%</div>
                  <div className="hero-stat-label">Reducción de CO₂</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">20%</div>
                  <div className="hero-stat-label">Más ocupación</div>
                </div>
              </div>
            </div>
            <div className="hero-demo">
              <div className="hero-demo-bg"></div>
              <div className="hero-demo-card">
                <div className="demo-status">
                  <div className="demo-status-dot"></div>
                  <span className="demo-status-text">3 espacios disponibles cerca de ti</span>
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
                        Reservar
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
            <h2 className="section-title">Tecnología IoT que Funciona</h2>
            <p className="section-description">Sensores inteligentes para una experiencia sin fricciones</p>
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
              Quiénes Somos
            </div>
            <h2 className="section-title">Revolucionando la Movilidad Urbana</h2>
            <p className="section-description">
              Somos Lorem-Ipsum-UPC, un equipo de estudiantes de Ingeniería de Software de la UPC comprometidos con crear soluciones tecnológicas que mejoren la calidad de vida en las ciudades.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="value-card">
              <Target className="value-icon" />
              <h3 className="value-title">Misión</h3>
              <p className="value-description">
                Revolucionar la experiencia de aparcamiento conectando a conductores y administradores mediante una plataforma inteligente que optimice el uso del espacio y reduzca tiempos de búsqueda.
              </p>
            </div>
            <div className="value-card">
              <Award className="value-icon" />
              <h3 className="value-title">Visión</h3>
              <p className="value-description">
                Consolidarnos como la startup líder en soluciones de gestión de estacionamientos a nivel nacional, aportando a la movilidad eficiente mediante tecnología innovadora y sostenible.
              </p>
            </div>
            <div className="value-card">
              <Globe className="value-icon" />
              <h3 className="value-title">Valores</h3>
              <p className="value-description">
                Innovación, transparencia, sostenibilidad y compromiso con la mejora continua. Priorizamos la experiencia del usuario y el impacto positivo en el medio ambiente.
              </p>
            </div>
          </div>

          <div className="problem-section">
            <div className="problem-grid">
              <div>
                <h3 className="problem-title">El Problema que Resolvemos</h3>
                <p className="problem-description">
                  En Lima, más de 100,000 vehículos se suman al parque automotor cada año. Los conductores pierden hasta 20 minutos buscando estacionamiento en horas pico, generando:
                </p>
                <ul className="problem-list">
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>60% del tráfico en zonas céntricas por búsqueda de parking</span>
                  </li>
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>Aumento de emisiones de CO₂ y contaminación</span>
                  </li>
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>Estrés y frustración en conductores diarios</span>
                  </li>
                  <li className="problem-item">
                    <CheckCircle className="problem-check" />
                    <span>Baja rentabilidad para propietarios de playas</span>
                  </li>
                </ul>
              </div>
              <div className="problem-stats">
                <div className="problem-stat-card">
                  <div className="problem-stat-number">100,000+</div>
                  <div className="problem-stat-label">Vehículos nuevos por año en Lima</div>
                </div>
                <div className="problem-stat-card">
                  <div className="problem-stat-number">20 min</div>
                  <div className="problem-stat-label">Tiempo promedio de búsqueda</div>
                </div>
                <div className="problem-stat-card">
                  <div className="problem-stat-number">60%</div>
                  <div className="problem-stat-label">Del tráfico busca estacionamiento</div>
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
              Características
            </div>
            <h2 className="section-title">Tecnología de Vanguardia</h2>
            <p className="section-description">
              Integramos las últimas innovaciones en IoT, edge computing y aplicaciones móviles para ofrecerte la mejor experiencia.
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
            <h3 className="tech-process-title">¿Cómo Funciona la Tecnología IoT?</h3>
            <p className="tech-process-description">
              Cada espacio de estacionamiento cuenta con sensores que detectan la presencia de vehículos. Los datos se procesan en edge servers locales y se sincronizan con la nube en tiempo real, permitiendo actualizaciones instantáneas en la aplicación.
            </p>
            <div className="tech-process-steps">
              <div className="tech-step">
                <div className="tech-step-number">1</div>
                <div className="tech-step-label">Sensor detecta vehículo</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">2</div>
                <div className="tech-step-label">Edge server procesa</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">3</div>
                <div className="tech-step-label">Cloud sincroniza</div>
              </div>
              <div className="tech-step">
                <div className="tech-step-number">4</div>
                <div className="tech-step-label">App actualiza</div>
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
              Precios
            </div>
            <h2 className="section-title">Planes para Todos</h2>
            <p className="section-description">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
            <div className="pricing-toggle">
              <button
                onClick={() => setSelectedPlan('conductor')}
                className={`pricing-toggle-btn ${selectedPlan === 'conductor' ? 'active' : ''}`}
              >
                Para Conductores
              </button>
              <button
                onClick={() => setSelectedPlan('propietario')}
                className={`pricing-toggle-btn ${selectedPlan === 'propietario' ? 'active' : ''}`}
              >
                Para Propietarios
              </button>
            </div>
          </div>

          <div className="pricing-grid" data-plan={selectedPlan}>
            {pricingPlans[selectedPlan].map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              >
                {plan.recommended && (
                  <div className="pricing-recommended-badge">
                    Recomendado
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
                  {plan.name === 'Enterprise' ? 'Contactar Ventas' : 'Comenzar Ahora'}
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
            {caseStudies.map((study, index) => (
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
                {conductorBenefits.map((benefit, index) => (
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
                {propietarioBenefits.map((benefit, index) => (
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