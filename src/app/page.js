"use client";
import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  useEffect(() => {
    // We will initialize main logic after component mounts
    // by loading main.js
  }, []);

  return (
    <>
      
    {/**/}
    <div id="preloader" className="preloader">
        <div className="preloader-content">
            <svg className="preloader-logo" viewBox="0 0 100 120" fill="none" stroke="none"
                xmlns="http://www.w3.org/2000/svg" style={{ width: '80px', height: '96px' }}>
                {/**/}
                <path d="M50 5 L15 25 L15 45 L50 25 Z" fill="#2A9D8F" />
                <path d="M50 5 L85 25 L85 45 L50 25 Z" fill="#48BCAA" />
                {/**/}
                <path d="M15 60 L50 80 L50 65 L15 45 Z" fill="#1D5294" />
                <path d="M85 60 L50 80 L50 65 L85 45 Z" fill="#287FBD" />
                {/**/}
                <path d="M50 80 L35 71 L50 62 L65 71 Z" fill="#181A1F" />
                {/**/}
                <path d="M15 60 L50 80 L50 85 L15 65 Z" fill="#CBD0D4" />
                <path d="M85 60 L50 80 L50 85 L85 65 Z" fill="#4A81B8" />
                {/**/}
                <path d="M15 65 L50 85 L50 110 L15 90 Z" fill="#1A2663" />
                <path d="M85 65 L50 85 L50 110 L85 90 Z" fill="#245B99" />
            </svg>
            <div className="preloader-text">
                <span className="typing">Iniciando NEXUS Core...</span>
            </div>
            <div className="preloader-progress">
                <div className="progress-bar"></div>
            </div>
        </div>
    </div>

    <canvas id="particle-canvas"></canvas>
    <div className="tech-grid-bg"></div>
    <div className="glow-bg"></div>

    {/**/}
    <div className="announcement-bar">
        <span className="pulse-dot"></span>
        <p><strong>Novedad:</strong> Conoce NEXUS ERP, el único sistema administrativo multiempresa en Venezuela. <a
                href="#nexus-erp">Saber más <span>→</span></a></p>
    </div>

    <nav className="navbar" id="navbar">
        <a href="#" className="logo">
            <img src="images/logo.png" alt="NEXUS Technology" className="logo-img" />
        </a>
        <div className="nav-links">
            <a href="#inicio" className="active">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="https://wa.me/584121234567" target="_blank" className="btn-contact">Chat de WhatsApp</a>
        </div>
        {/**/}
        <button className="hamburger" id="hamburger" aria-label="Abrir menú">
            <span></span><span></span><span></span>
        </button>
    </nav>
    {/**/}
    <div className="nav-overlay" id="nav-overlay"></div>

    <main>
        <section id="inicio" className="hero">
            <div className="hero-content reveal">
                <div className="badge" style={{ marginBottom: '1rem' }}>NEXUS ERP</div>
                <h1>El Mejor <span>Sistema Administrativo</span></h1>
                <p>NEXUS Technology desarrolla el <strong>sistema administrativo</strong> más avanzado de Venezuela. Un
                    ERP multiempresa con Inteligencia Artificial que escala junto a tu negocio. Velocidad, seguridad y
                    control total.</p>
                <div className="hero-btns">
                    <a href="https://wa.me/584121234567" target="_blank" className="btn-main cyber-btn"
                        style={{ textDecoration: 'none', display: 'inline-block' }}>Chatea con un Asesor</a>
                    <a href="#servicios" className="btn-ghost cyber-btn"
                        style={{ textDecoration: 'none', display: 'inline-block' }}>Descubre Nuestras Soluciones</a>
                </div>
            </div>
            <div className="hero-visual reveal">
                <div className="visual-orb"></div>
                <img src="images/robot.png" alt="Nexus AI Robot" className="robot-mascot" />
                <div className="glass-card hud-box">
                    <div className="scanner">
                        <div className="scanner-line"></div>
                    </div>
                    <div className="code-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <pre><code id="typewriter-code" dangerouslySetInnerHTML={{ __html: `<span class="keyword">const</span> nexus = {\n  Nuestra Visión: <span class="string">'Innovar para el Futuro'</span>,\n  Nuestra Misión: <span class="string">'Ecosistemas escalables'</span>,\n  Nuestros Valores: <span class="string">'Excelencia y calidad'</span>,\n  status: <span class="variable">true</span>\n};\n\n<span class="function">async function</span> <span class="function">evolve</span>() {\n  <span class="keyword">await</span> nexus.<span class="method">launch</span>();\n}` }}></code><span className="typewriter-cursor"></span></pre>
                </div>
            </div>
        </section>

        {/**/}
        <section id="nexus-erp" className="launch-section">
            <div className="launch-container hud-box reveal">
                <div className="scanner">
                    <div className="scanner-line"></div>
                </div>
                <div className="launch-content">
                    <div className="launch-badge">LANZAMIENTO EXCLUSIVO</div>
                    <h2 className="glitch-title">Presentamos <span>NEXUS ERP</span></h2>
                    <p className="launch-desc">El primer y único sistema administrativo multiempresa nativo en Venezuela.
                        Escalable desde un pequeño negocio hasta grandes empresas, con Inteligencia Artificial integrada
                        que automatiza y optimiza cada proceso administrativo.</p>
                    <ul className="launch-features">
                        <li><i className="icon">✓</i> Gestión Multi-Sucursal en tiempo real</li>
                        <li><i className="icon">✓</i> Arquitectura Cloud de alta seguridad</li>
                        <li><i className="icon">✓</i> Facturación Electrónica Nativa</li>
                        <li><i className="icon">✓</i> Inteligencia Artificial integrada para análisis y decisiones</li>
                        <li><i className="icon">✓</i> Motor Multimoneda con tasas de cambio en tiempo real</li>
                        <li><i className="icon">✓</i> Escalable: desde PYMES hasta grandes empresas</li>
                        <li><i className="icon">✓</i> Homologado ante el SENIAT</li>
                        <li><i className="icon">✓</i> Certificación ISO:9001</li>
                        <li><i className="icon">✓</i> Certificación ISO:27001</li>
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                        <a href="https://wa.me/584121234567" target="_blank" className="btn-main cyber-btn"
                            style={{ textDecoration: 'none', display: 'inline-block' }}>Solicitar Demo GRATIS</a>
                        <a href="documents/Whitepaper_NEXUS_ERP.pdf" download className="btn-ghost cyber-btn"
                            style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Ver White Paper
                        </a>
                    </div>
                </div>
                <div className="launch-visual">
                    <img src="images/nexus-erp-screen.jpg" alt="NEXUS ERP Dashboard" className="erp-screenshot" />
                    <div className="cert-badges">
                        <div className="cert-badge">
                            <img src="images/seniat-badge.png" alt="Homologado SENIAT" />
                            <span>Homologado SENIAT</span>
                        </div>
                        <div className="cert-badge">
                            <img src="images/iso9001-badge.png" alt="ISO 9001 Certificado" />
                            <span>ISO 9001</span>
                        </div>
                        <div className="cert-badge">
                            <img src="images/iso27001-badge.png" alt="ISO 27001 Certificado" />
                            <span>ISO 27001</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="servicios">
            <div className="section-header reveal">
                <div className="badge">Nuestros Servicios</div>
                <h2>Soluciones de <span data-text="Vanguardia">Vanguardia</span></h2>
                <p>Desarrollamos ecosistemas digitales e infraestructuras físicas con las tecnologías más modernas del
                    mercado.</p>
            </div>

            <div className="grid-services">
                {/**/}
                <div className="service-card hud-box reveal">
                    <div className="service-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3EB4AC" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    </div>
                    <h3>Diseño de Páginas Web</h3>
                    <p>Creamos sitios web corporativos y tiendas online con diseño moderno, rápido y optimizado para
                        SEO.</p>
                </div>

                {/**/}
                <div className="service-card hud-box reveal">
                    <div className="service-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3EB4AC" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                    </div>
                    <h3>Diseño de Apps Android/iOS</h3>
                    <p>Desarrollo de aplicaciones móviles nativas e híbridas para llevar tu negocio al bolsillo de tus
                        clientes.</p>
                </div>

                {/**/}
                <div className="service-card hud-box reveal">
                    <div className="service-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3EB4AC" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z">
                            </path>
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                    </div>
                    <h3>Sistemas CCTV</h3>
                    <p>Instalación profesional de cámaras de seguridad y circuitos cerrados para la protección total de
                        tus espacios.</p>
                </div>

                {/**/}
                <div className="service-card hud-box reveal">
                    <div className="service-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3EB4AC" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                            <line x1="6" y1="6" x2="6.01" y2="6" />
                            <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>
                    </div>
                    <h3>Cableado Estructurado</h3>
                    <p>Diseño e instalación de redes de datos y voz robustas para garantizar la conectividad de tu
                        empresa.</p>
                </div>

                {/**/}
                <div className="service-card hud-box reveal">
                    <div className="service-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3EB4AC" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                            <path d="M12 8v4" />
                            <path d="M12 16h.01" />
                        </svg>
                    </div>
                    <h3>Consultoría Tecnológica</h3>
                    <p>Asesoría experta para la transformación digital, optimización de recursos y adopción de nuevas
                        tecnologías.</p>
                </div>

                {/**/}
                <div className="service-card hud-box reveal featured-service"
                    style={{ gridColumn: '1 / -1', marginTop: '2rem' }}>
                    <div className="featured-service-content"
                        style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'left' }}>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div className="service-icon" style={{ flexShrink: '0' }}>
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3EB4AC"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <polyline points="8 21 12 17 16 21" />
                                    <line x1="3" y1="8" x2="21" y2="8" />
                                </svg>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text)' }}>Desarrollo de
                                    Software Empresarial a Medida</h3>
                                <p style={{ color: 'var(--text-muted)', maxWidth: '800px' }}>Construimos ecosistemas digitales
                                    de misión crítica, programados bajo la lógica única de tu organización — desde
                                    automatización de procesos internos hasta plataformas B2B de escala global.</p>
                            </div>
                        </div>

                        <div
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <div
                                style={{ background: 'rgba(62,180,172,0.03)', border: '1px solid rgba(62,180,172,0.1)', borderRadius: '16px', padding: '1.5rem', transition: 'transform 0.3s ease' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                                <h4
                                    style={{ color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                                    Pequeña Empresa</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Sistemas de
                                    punto de venta, control de inventario inteligente, gestión de nómina y reportes
                                    automatizados. Tecnología de clase mundial adaptada a tu crecimiento.</p>
                            </div>
                            <div
                                style={{ background: 'rgba(62,180,172,0.06)', border: '1px solid rgba(62,180,172,0.2)', borderRadius: '16px', padding: '1.5rem', transition: 'transform 0.3s ease' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                </div>
                                <h4
                                    style={{ color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                                    Mediana Empresa</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Plataformas
                                    integradas con CRM personalizado, gestión de flujos de trabajo, portales B2B para
                                    clientes y paneles de Business Intelligence con datos en tiempo real.</p>
                            </div>
                            <div
                                style={{ background: 'rgba(43,74,140,0.1)', border: '1px solid rgba(43,74,140,0.2)', borderRadius: '16px', padding: '1.5rem', transition: 'transform 0.3s ease' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 17 12 22 22 17" />
                                        <polyline points="2 12 12 17 22 12" />
                                    </svg>
                                </div>
                                <h4
                                    style={{ color: 'var(--secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                                    Gran Empresa</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Arquitecturas
                                    basadas en microservicios, integraciones con APIs gubernamentales y bancarias,
                                    sistemas de cadena de suministro y plataformas SaaS multi-sucursal de alta
                                    resiliencia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="nosotros">
            <div className="about-header reveal">
                <div className="badge">Nuestra Identidad</div>
                <h2>Conectando el <br /><span>Presente con el Futuro</span></h2>
            </div>

            <div className="about-profile reveal">
                <div className="profile-text">
                    <p><strong>NEXUS TECHNOLOGY</strong> es una organización en crecimiento dedicada al desarrollo de soluciones tecnológicas de vanguardia, especializada en la creación de ecosistemas digitales que unifican la información fragmentada de las empresas.</p>
                    <p>A través de su Departamento de Desarrollo, la empresa transforma desafíos operativos en flujos continuos de inteligencia de negocio. El nombre <strong>"NEXUS"</strong> proviene del latín, significando "conexión" o "enlace", representando nuestra capacidad para unir necesidades complejas con soluciones tecnológicas eficientes.</p>
                </div>
            </div>

            <div className="mission-vision-grid">
                <div className="mv-card hud-box reveal">
                    <div className="scanner"><div className="scanner-line"></div></div>
                    <div className="mv-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3>MISIÓN</h3>
                    <p>Nuestra misión es construir el puente definitivo entre los desafíos operativos actuales de las organizaciones y las oportunidades estratégicas del futuro. Nos enfocamos en transformar el caos de los datos aislados en una arquitectura de unificación que permita a las empresas trabajar en perfecta sintonía.</p>
                </div>
                <div className="mv-card hud-box reveal">
                    <div className="scanner"><div className="scanner-line"></div></div>
                    <div className="mv-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                        </svg>
                    </div>
                    <h3>VISIÓN</h3>
                    <p>Ser el referente global en el desarrollo de software de gestión, liderando el cambio hacia un mundo donde la tecnología y el ingenio humano converjan para generar valor infinito. Aspiramos a que cada organización deje de ser un conjunto de partes aisladas para convertirse en un organismo inteligente y sincronizado.</p>
                </div>
            </div>

            <div className="values-section">
                <div className="section-header reveal" style={{ marginTop: '60px', marginBottom: '40px' }}>
                    <div className="badge">Pilares</div>
                    <h3>Valores Corporativos</h3>
                </div>
                <div className="values-grid">
                    <div className="value-card hud-box reveal">
                        <div className="value-number">01</div>
                        <h4>Innovación Continua</h4>
                        <p>No solo nos adaptamos al cambio, lo lideramos. Buscamos constantemente nuevas formas de resolver problemas complejos mediante el uso creativo de la tecnología.</p>
                    </div>
                    <div className="value-card hud-box reveal">
                        <div className="value-number">02</div>
                        <h4>Conectividad (Nexus)</h4>
                        <p>Creemos en el poder de los vínculos sólidos. Priorizamos la integración fluida entre sistemas, procesos y personas.</p>
                    </div>
                    <div className="value-card hud-box reveal">
                        <div className="value-number">03</div>
                        <h4>Integridad y Transparencia</h4>
                        <p>Actuamos con rectitud y claridad en cada proyecto. La confianza de nuestros clientes es el activo más valioso que poseemos.</p>
                    </div>
                    <div className="value-card hud-box reveal">
                        <div className="value-number">04</div>
                        <h4>Excelencia en la Ejecución</h4>
                        <p>Nos distingue la precisión técnica. Cada solución entregada debe cumplir con los más altos estándares de calidad y eficiencia.</p>
                    </div>
                    <div className="value-card hud-box reveal">
                        <div className="value-number">05</div>
                        <h4>Escalabilidad</h4>
                        <p>Diseñamos soluciones pensando en el mañana. Creemos en el crecimiento sostenible y en la capacidad de nuestras soluciones para evolucionar junto con el cliente.</p>
                    </div>
                </div>
            </div>

            <div className="value-proposition reveal">
                <div className="vp-content">
                    <blockquote>"En NEXUS TECHNOLOGY, no solo implementamos tecnología; construimos el puente entre los desafíos actuales y las oportunidades del futuro."</blockquote>
                </div>
            </div>
        </section>

        <section id="tecnologias">
            <div className="section-header reveal">
                <div className="badge">Ecosistema Tecnológico</div>
                <h2>Dominio <span>Full-Stack</span></h2>
                <p>Utilizamos las herramientas más potentes del mercado para garantizar rendimiento, seguridad y
                    mantenibilidad a largo plazo.</p>
            </div>

            <div className="tech-stack-container reveal">
                <div className="tech-tabs">
                    <button className="tech-tab active" data-category="backend">Backend & Logic</button>
                    <button className="tech-tab" data-category="frontend">Frontend & Mobile</button>
                    <button className="tech-tab" data-category="cloud">Cloud & Infrastructure</button>
                </div>

                <div className="tech-display">
                    {/**/}
                    <div className="tech-category active" id="backend">
                        <div className="tech-grid-enhanced">
                            <div className="tech-card-interactive" data-tech="Node.js">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <span>Node.js</span>
                                <p>Arquitecturas asíncronas de alto rendimiento y escalabilidad masiva.</p>
                            </div>
                            <div className="tech-card-interactive" data-tech="Python">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path
                                            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <span>Python</span>
                                <p>Motores de IA, procesamiento de datos y automatización avanzada.</p>
                            </div>
                            <div className="tech-card-interactive" data-tech="Kafka">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <span>Apache Kafka</span>
                                <p>Streaming de eventos y mensajería en tiempo real para sistemas distribuidos.</p>
                            </div>
                        </div>
                    </div>

                    {/**/}
                    <div className="tech-category" id="frontend">
                        <div className="tech-grid-enhanced">
                            <div className="tech-card-interactive" data-tech="React">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="2" />
                                        <path
                                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        <path d="M2 12h20" />
                                        <path
                                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                            transform="rotate(60 12 12)" />
                                        <path
                                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                            transform="rotate(-60 12 12)" />
                                    </svg>
                                </div>
                                <span>Next.js / React</span>
                                <p>Interfaces Ultra-Fast con SSR y optimización SEO de grado militar.</p>
                            </div>
                            <div className="tech-card-interactive" data-tech="Flutter">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span>Flutter</span>
                                <p>Aplicaciones móviles nativas multiplataforma con rendimiento nativo.</p>
                            </div>
                        </div>
                    </div>

                    {/**/}
                    <div className="tech-category" id="cloud">
                        <div className="tech-grid-enhanced">
                            <div className="tech-card-interactive" data-tech="AWS">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <span>Amazon AWS</span>
                                <p>Infraestructura global elástica y servicios en la nube de alta disponibilidad.</p>
                            </div>
                            <div className="tech-card-interactive" data-tech="DigitalOcean">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
                                        <path d="M2 12h20" />
                                    </svg>
                                </div>
                                <span>Digital Ocean</span>
                                <p>Despliegue rápido de microservicios y bases de datos gestionadas.</p>
                            </div>
                            <div className="tech-card-interactive" data-tech="Proxmox">
                                <div className="tech-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                                        <path d="M12 18V6M6 12h12" />
                                    </svg>
                                </div>
                                <span>PROXMOX</span>
                                <p>Virtualización de clase empresarial y gestión de contenedores locales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/**/}
        <section id="metodologia" style={{ position: 'relative', overflow: 'hidden', padding: '100px 8%' }}>
            <div className="section-header reveal">
                <div className="badge">Ingeniería de Clase Mundial</div>
                <h2>Nuestra <span>Ruta al Éxito</span></h2>
                <p>Un proceso refinado para transformar ideas complejas en infraestructuras digitales resilientes.</p>
            </div>

            <div className="process-roadmap reveal">
                <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                        <h4>Discovery & Blueprint</h4>
                        <p>Analizamos profundamente tu lógica de negocio y procesos actuales para diseñar el mapa
                            arquitectónico ideal.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                        <h4>Agile Development</h4>
                        <p>Desarrollo iterativo con entregas continuas, permitiéndote ver y probar el sistema mientras
                            se construye.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                        <h4>Quality Assurance</h4>
                        <p>Pruebas de estrés, auditorías de seguridad y optimización de código bajo estándares
                            internacionales.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                        <h4>Nexus Deployment</h4>
                        <p>Lanzamiento controlado con monitoreo proactivo y soporte técnico especializado 24/7.</p>
                    </div>
                </div>
                <div className="roadmap-line"></div>
            </div>

            {/**/}
            <div className="comparison-container reveal" style={{ marginTop: '80px' }}>
                <div className="comparison-grid">
                    <div className="comparison-card legacy">
                        <h4>Sistemas Tradicionales</h4>
                        <ul>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4b2b"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                Rígidos y difíciles de escalar.
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4b2b"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                Soporte técnico limitado (horario oficina).
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4b2b"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                Tecnología obsoleta y lenta.
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4b2b"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                Desconexión con normativas SENIAT.
                            </li>
                        </ul>
                    </div>
                    <div className="comparison-card nexus-vs hud-box">
                        <div className="vs-badge">VS</div>
                        <h4>El Estándar NEXUS</h4>
                        <ul>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Arquitectura Cloud Nativa 100% elástica.
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Soporte Crítico 24/7 garantizado.
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Inteligencia Artificial Predictiva integrada.
                            </li>
                            <li>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: '0', marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Cumplimiento Legal y Fiscal automático.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="metricas" className="metrics-section">
            <div className="metrics-grid">
                <div className="metric-card hud-box reveal">
                    <div className="number counter" data-target="99.9">0</div><span
                        style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '800' }}>%</span>
                    <div className="label">Uptime Garantizado</div>
                </div>
                <div className="metric-card hud-box reveal">
                    <div className="number counter" data-target="50">0</div><span
                        style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '800' }}>+</span>
                    <div className="label">Sistemas Desplegados</div>
                </div>
                <div className="metric-card hud-box reveal">
                    <div className="number counter" data-target="24">0</div><span
                        style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '800' }}>/7</span>
                    <div className="label">Soporte Técnico</div>
                </div>
                <div className="metric-card hud-box reveal">
                    <div className="number counter" data-target="100">0</div><span
                        style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '800' }}>%</span>
                    <div className="label">Código Optimizado</div>
                </div>
            </div>
        </section>

        {/**/}
        <section id="clientes"
            style={{ padding: '100px 0', overflow: 'hidden', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'linear-gradient(to bottom, rgba(5,7,10,1), rgba(43,74,140,0.05))' }}>
            <div className="section-header reveal" style={{ marginBottom: '4rem' }}>
                <div className="badge" style={{ background: 'rgba(212, 175, 55, 0.1)', borderColor: 'rgba(212, 175, 55, 0.3)', color: '#D4AF37' }}>EXCLUSIVIDAD</div>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Ecosistema de Éxito: <span className="vip-gold">Clientes VIP</span></h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Únase al selecto grupo de organizaciones que están definiendo el nuevo estándar de eficiencia tecnológica en Venezuela.
                </p>
            </div>
            
            <div className="carousel-track-wrapper" style={{ marginBottom: '4rem' }}>
                <div className="carousel-track">
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Distribuidora Nacional C.A.</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Farmacia San Martín</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Constructora Horizonte</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> LogiVen Express</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Grupo Gastronómico Caracas</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Clínica Los Andes</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Academia TechVen</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Industrias Bolívar</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> RetailCorp Venezuela</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Inversiones Del Sur</span>
                    {/**/}
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Distribuidora Nacional C.A.</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Farmacia San Martín</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Constructora Horizonte</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> LogiVen Express</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Grupo Gastronómico Caracas</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Clínica Los Andes</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Academia TechVen</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Industrias Bolívar</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> RetailCorp Venezuela</span>
                    <span className="carousel-item VIP-item"><span className="vip-star">★</span> Inversiones Del Sur</span>
                </div>
            </div>

            <div className="reveal" style={{ textAlign: 'center' }}>
                <a href="https://wa.me/584121234567?text=Quiero%20ser%20parte%20del%20cambio%20y%20unirme%20al%20ecosistema%20VIP%20de%20NEXUS" 
                   target="_blank" className="btn-ghost cyber-btn" 
                   style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', color: '#D4AF37', borderColor: 'rgba(212, 175, 55, 0.5)', textDecoration: 'none', display: 'inline-block' }}>
                   Sea Parte del Cambio Ahora →
                </a>
            </div>
        </section>

        {/**/}
        <section id="testimonios">
            <div className="section-header reveal">
                <div className="badge">Casos de Éxito</div>
                <h2>Lo que dicen <span>Nuestros Clientes</span></h2>
                <p>Empresas venezolanas que ya transformaron su gestión con NEXUS ERP.</p>
            </div>
            <div className="testimonials-grid">
                <div className="testimonial-card hud-box reveal">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">NEXUS ERP unificó las 5 sucursales de nuestra cadena de farmacias en
                        tiempo real. La visibilidad del inventario centralizado nos ahorró más del 30% en pérdidas por
                        desabastecimiento.</p>
                    <div className="testimonial-author">
                        <div className="author-avatar"
                            style={{ backgroundImage: "url('https://ui-avatars.com/api/?name=Carlos+M&background=0D7C6B&color=fff')" }}>
                        </div>
                        <div className="author-info">
                            <h4>Carlos Mendoza</h4>
                            <span>Director Financiero, RetailCorp</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card hud-box reveal">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">La arquitectura híbrida que NEXUS implementó para nuestra distribuidora
                        soporta miles de transacciones por segundo sin caídas. El uptime garantizado es real.</p>
                    <div className="testimonial-author">
                        <div className="author-avatar"
                            style={{ backgroundImage: "url('https://ui-avatars.com/api/?name=Ana+R&background=2B4A8C&color=fff')" }}>
                        </div>
                        <div className="author-info">
                            <h4>Ana Rodríguez</h4>
                            <span>Gerente de Operaciones, Logística C.A.</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card hud-box reveal">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">El soporte técnico 24/7 es excepcional. La integración del sistema de
                        facturación electrónica con el SENIAT fue transparente y rápida. Recomendados al 100%.</p>
                    <div className="testimonial-author">
                        <div className="author-avatar"
                            style={{ backgroundImage: "url('https://ui-avatars.com/api/?name=Roberto+V&background=1E2A5E&color=fff')" }}>
                        </div>
                        <div className="author-info">
                            <h4>Roberto Vargas</h4>
                            <span>CEO, Vargas &amp; Asociados</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/**/}
        <section id="faq">
            <div className="section-header reveal">
                <div className="badge">Soporte</div>
                <h2>Preguntas <span>Frecuentes</span></h2>
                <p>Todo lo que necesitas saber sobre nuestra tecnología y servicios.</p>
            </div>
            <div className="faq-container reveal">
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>¿NEXUS ERP se instala de forma local o funciona en la nube?</h3>
                        <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>NEXUS ERP utiliza una arquitectura híbrida de vanguardia. Opera principalmente en la nube
                            (Cloud Native) para permitirte acceso remoto desde cualquier lugar del mundo. Sin embargo,
                            también instalamos un servidor local sincronizado en tu empresa, lo que <strong>garantiza
                                que tu facturación y operaciones nunca se detengan</strong>, incluso durante caídas
                            severas de internet o cortes de fibra óptica.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>¿Cuánto tiempo tarda la implementación del sistema?</h3>
                        <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Gracias a nuestra arquitectura de unificación y despliegue continuo, el tiempo de
                            implementación es extremadamente ágil. <strong>El proceso completo toma un máximo de 3 días
                                hábiles</strong>, incluyendo la configuración inicial y la capacitación básica de tu
                            equipo.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>¿El sistema está homologado para facturación fiscal en Venezuela?</h3>
                        <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Sí. NEXUS ERP cuenta con facturación electrónica nativa y soporte para impresoras fiscales,
                            cumpliendo al 100% con las normativas actuales del SENIAT. Además, maneja múltiples monedas
                            con tasas actualizadas automáticamente.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>¿Ofrecen desarrollos de software a medida?</h3>
                        <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Absolutamente. Aunque NEXUS ERP es nuestro producto estrella, contamos con un equipo de
                            ingenieros especializados en Arquitectura Web, Apps Móviles (iOS/Android) y software
                            empresarial programado desde cero bajo la lógica exacta de tu negocio.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="innovacion" style={{ background: 'rgba(43, 74, 140, 0.03)' }}>
        </section>
        
        <section id="final-cta"
                style={{ position: 'relative', overflow: 'hidden', padding: '120px 8%', background: 'linear-gradient(135deg, rgba(5, 7, 10, 0.95), rgba(62, 180, 172, 0.1))', borderTop: '1px solid var(--glass-border)' }}>
                <div className="tech-grid-bg" style={{ opacity: '0.15' }}></div>
                <div className="container reveal"
                    style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: '10' }}>
                    <div className="badge" style={{ marginBottom: '2rem' }}>IMPULSO EMPRESARIAL</div>
                    <h2
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '2rem', lineHeight: '1.1', fontWeight: '800' }}>
                        ¿Listo para <span>Liderar su Industria?</span></h2>
                    <p
                        style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--text-muted)', marginBottom: '4rem', lineHeight: '1.6', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        No deje su crecimiento al azar. Unifique su visión, automatice sus procesos y tome el control
                        total con la tecnología más avanzada de Venezuela.
                        <strong>Implementación garantizada en máximo 3 días hábiles.</strong>
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
                        <a href="https://wa.me/584121234567?text=Hola%2C%20estoy%20listo%20para%20transformar%20mi%20empresa%20con%20NEXUS%20ERP.%20Deseo%20más%20información."
                            target="_blank" className="btn-main cyber-btn"
                            style={{ padding: '1.5rem 4rem', fontSize: '1.3rem', textDecoration: 'none', boxShadow: '0 0 50px rgba(62, 180, 172, 0.3)', borderRadius: '15px' }}>
                            ¡Transformar Mi Empresa Ahora!
                        </a>

                        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', opacity: '0.8' }}>
                            <div
                                style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Implementación en 3 Días
                            </div>
                            <div
                                style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Soporte Crítico 24/7
                            </div>
                            <div
                                style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Escalabilidad Infinita
                            </div>
                        </div>
                    </div>
                </div>

                {/**/}
                <div className="visual-orb"
                    style={{ top: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', opacity: '0.05' }}>
                </div>
                <div className="visual-orb"
                    style={{ bottom: '-20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', opacity: '0.05' }}>
                </div>
            </section>
            <section id="ubicacion"
                style={{ padding: '80px 8%', borderTop: '1px solid var(--glass-border)', background: 'rgba(5, 7, 10, 0.4)', position: 'relative' }}>
                <div className="container"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div className="reveal">
                        <div className="badge">¿Dónde nos ubicamos?</div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>NEXUS <span>Technology</span></h2>
                        <p
                            style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.15rem', lineHeight: '1.6' }}>
                            Visite nuestras oficinas en Caracas - Venezuela, para una consultoría estratégica
                            presencial.
                            Diseñamos el futuro de su empresa desde nuestro centro de innovación.
                            <strong style={{ color: 'var(--primary)' }}>¡Agenda tu visita hoy mismo!</strong>
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                <div
                                    style={{ color: 'var(--primary)', background: 'rgba(62, 180, 172, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        style={{ marginBottom: '0.4rem', color: 'var(--text)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                        Dirección Física</h4>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Edificio
                                        Tecoteca, Av. Francisco de Miranda, Los Palos Grandes. Caracas, Venezuela.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                <div
                                    style={{ color: 'var(--primary)', background: 'rgba(62, 180, 172, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        style={{ marginBottom: '0.4rem', color: 'var(--text)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                        Líneas Directas</h4>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                        <span style={{ color: 'var(--primary)' }}>Ventas:</span> +58 (412) 123-4567<br />
                                        <span style={{ color: 'var(--primary)' }}>Soporte:</span> +58 (412) 765-4321
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal"
                        style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', height: '450px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846.10548852936!2d-66.8459024259865!3d10.496508464296577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59b20e79a01b%3A0x611267d82a15c181!2sEdificio%20Tecoteca!5e0!3m2!1ses!2sus!4v1778298861730!5m2!1ses!2sus"
                            width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>

    </main>

    <div className="security-ribbon reveal"
        style={{ background: 'rgba(62, 180, 172, 0.05)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '1rem 0', textAlign: 'center' }}>
        <div className="container"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12" />
                    <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z">
                    </path>
                </svg>
                <span style={{ letterSpacing: '0.5px', fontWeight: '500' }}>El futuro no espera. Conecte su presente,
                    unifique su visión y tome el liderazgo hoy mismo.</span>
            </div>
            <a href="https://wa.me/584121234567?text=Hola%20equipo%20de%20NEXUS%20Technology%2C%20deseo%20cotizar%20el%20sistema%20administrativo%20NEXUS%20ERP"
                target="_blank" className="btn-main cyber-btn"
                style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', textDecoration: 'none' }}>Contáctanos</a>
        </div>
    </div>

    <footer className="site-footer">
        {/**/}
        <div className="footer-top">
            <div className="footer-brand">
                <a href="#" className="logo" style={{ textDecoration: 'none' }}>
                    <img src="images/logo.png" alt="NEXUS Technology" className="logo-img" />
                </a>
                <p className="footer-tagline">Arquitectura digital de clase mundial para empresas venezolanas que buscan
                    escalar sin límites.</p>
                {/**/}
                <div className="footer-social">
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="social-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                    <a href="https://tiktok.com" target="_blank" aria-label="TikTok" className="social-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </a>
                    <a href="https://wa.me/584121234567" target="_blank" aria-label="WhatsApp" className="social-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="footer-links-group">
                <h4>Servicios</h4>
                <ul>
                    <li><a href="#servicios">NEXUS ERP</a></li>
                    <li><a href="#servicios">Diseño Web</a></li>
                    <li><a href="#servicios">Apps Móviles</a></li>
                    <li><a href="#servicios">Sistemas CCTV</a></li>
                    <li><a href="#servicios">Cableado Estructurado</a></li>
                    <li><a href="#servicios">Software a Medida</a></li>
                </ul>
            </div>

            <div className="footer-links-group">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#tecnologias">Tecnologías</a></li>
                    <li><a href="#testimonios">Casos de Éxito</a></li>
                    <li><a href="#faq">Soporte & FAQ</a></li>
                    <li><a href="https://wa.me/584121234567" target="_blank">Contacto WhatsApp</a></li>
                </ul>
            </div>

            <div className="footer-links-group">
                <h4>Certificaciones</h4>
                <div className="footer-certs">
                    <div className="cert-pill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                            strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        ISO 9001:2015
                    </div>
                    <div className="cert-pill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                            strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        ISO 27001
                    </div>
                    <div className="cert-pill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                            strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        SENIAT Homologado
                    </div>
                    <div className="cert-pill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                            strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        SSL / TLS Cifrado
                    </div>
                    <div className="cert-pill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)"
                            strokeWidth="2">
                            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 1 0 12 2z" />
                            <path d="M2 12h20" />
                            <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                            </path>
                        </svg>
                        GDPR Compliant
                    </div>
                </div>
            </div>
        </div>

        {/**/}
        <div className="footer-bottom">
            <p>© 2026 NEXUS Technology, C.A. · RIF: J-XXXXXXXXX-X · Todos los derechos reservados.</p>
            <div className="footer-legal-links">
                <a href="legal.html?page=privacidad">Política de Privacidad</a>
                <span className="footer-divider">·</span>
                <a href="legal.html?page=terminos">Términos de Servicio</a>
                <span className="footer-divider">·</span>
                <a href="legal.html?page=sla">SLA</a>
                <span className="footer-divider">·</span>
                <a href="#" id="cookie-settings-btn">Gestión de Cookies</a>
            </div>
        </div>
    </footer>

    {/**/}
    <div className="cookie-banner hidden" id="cookie-banner">
        <div className="cookie-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"
                style={{ flexShrink: '0' }}>
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
                <path d="M12 8v4l3 3" />
            </svg>
            <p>Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. Al continuar
                navegando aceptas nuestra <a href="legal.html?page=privacidad" style={{ color: 'var(--primary)' }}>Política de
                    Privacidad</a>.</p>
            <div style={{ display: 'flex', gap: '10px', flexShrink: '0' }}>
                <button className="btn-main cyber-btn" id="cookie-accept"
                    style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>Aceptar</button>
                <button className="btn-ghost" id="cookie-reject"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>Rechazar</button>
            </div>
        </div>
    </div>

    {/**/}
    <div id="sound-toggle" className="sound-control" title="Activar/Desactivar Sonido">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
    </div>

    {/**/}
    <div className="chatbot-widget">
        <div className="chat-toggle" id="chat-toggle">
            <div className="toggle-glow"></div>
            <img src="images/nexia-avatar.png" alt="NEX-IA Avatar" className="chat-avatar" />
            <span className="status-dot"></span>
        </div>

        <div className="chat-panel hud-box" id="chat-panel">
            <div className="chat-header">
                <div className="chat-header-info">
                    <img src="images/nexia-avatar.png" alt="NEX-IA" />
                    <div>
                        <h4>NEX-IA</h4>
                        <span>Online</span>
                    </div>
                </div>
                <button className="close-chat" id="close-chat">×</button>
            </div>

            <div className="chat-messages" id="chat-messages">
                {/**/}
            </div>

            <div className="chat-input-area">
                <input type="text" id="chat-input" placeholder="Transmite un comando..." autoComplete="off" />
                <button id="send-chat" className="cyber-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    {/**/}
    <a href="https://wa.me/584121234567?text=Hola%20equipo%20de%20NEXUS%20Technology%2C%20deseo%20cotizar%20el%20sistema%20administrativo%20NEXUS%20ERP"
        target="_blank" className="whatsapp-float" aria-label="Contactar por WhatsApp" id="whatsapp-btn">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    </a>

    {/**/}
    <div className="video-modal-overlay" id="video-modal">
        <div className="video-modal-content hud-box">
            <button className="video-close-btn" id="btn-close-demo" aria-label="Cerrar video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
            <div className="video-container">
                <iframe id="demo-iframe" src={null} title="NEXUS ERP Demo" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    </div>

    

      <Script src="/main.js" strategy="afterInteractive" />
    </>
  );
}
