import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ChevronDown, Menu, X, Code, Brain, Shield, ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';


function TechStackMarquee() {
  // Linha 1: Focada em Web e Software
  const techRow1 = ['JavaScript', 'TypeScript', 'Node.js', 'C++', 'Tailwind CSS', 'Docker'];
  // Linha 2: Focada em IA, IoT e Dados (Projeto Energisa)
  const techRow2 = ['Python', 'TensorFlow', 'IoT', 'Machine Learning', 'FastAPI', 'AWS'];

  return (
    <section className={styles.techSection}>
      <div className={styles.navContainer}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Tech <span className={styles.highlightTextInline}>Stack</span>
        </h2>
      </div>

      {/* Container com máscara de degradê nas bordas */}
      <div className={styles.marqueeContainer}>
        
        {/* Esteira 1: Esquerda para Direita */}
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {[...techRow1, ...techRow1].map((item, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.techDot}></span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Esteira 2: Direita para Esquerda (Reverse) */}
        <div className={styles.marquee}>
          <div className={`${styles.marqueeInner} ${styles.marqueeReverse}`}>
            {[...techRow2, ...techRow2].map((item, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.techDot}></span> {item}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'portfolio', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <h1 className={styles.logo}>
                Gabriel Machado
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              <div className={styles.desktopNavLinks}>
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'sobre', label: 'Sobre' },
                  { id: 'portfolio', label: 'Portfólio' },
                  { id: 'contato', label: 'Contato' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`${styles.navButton} ${activeSection === id ? styles.activeNavButton : ''}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */} 
            <div className={styles.mobileNav}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.mobileMenuButton}
              >
                {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`${styles.mobileNav} ${styles.mobileMenuContainer}`}>
              <div className={styles.mobileMenuLinks}>
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'sobre', label: 'Sobre' },
                  { id: 'portfolio', label: 'Portfólio' },
                  { id: 'contato', label: 'Contato' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={styles.mobileNavButton}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className={styles.heroSection}>
        <div className={styles.heroBgGradient}></div>
        <div className={styles.heroBgRadial}></div>
        
        <div className={styles.heroContent}>
          {/* Profile Photo */}
          <div className={styles.profilePhotoContainer}>
            <div className={styles.profilePhotoGradient}>
              <div className={styles.profilePhoto}> 
                <img
                src="/ProfilePhoto.jpeg"
                alt="Gabriel Machado"
                className={styles.profileImage}
                />
              </div>
            </div>
        </div>

          <div className={styles.fadeInUpDelay1}>
            <h1 className={styles.mainTitle}>
              Software
              <span className={styles.highlightText}>
                Engineer
              </span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              <p className={styles.heroSubtitle}>
                Estudante de Ciência da Computação pela UFRRJ, focado em desenvolver soluções de software para <strong>infraestruturas críticas</strong>. Especialista em unir <strong>IA e IoT</strong> para promover a <strong>segurança e a preservação da vida</strong> em ambientes de risco.
</p>
            </p>

            <div className={styles.heroActions}>
              <button
                onClick={() => scrollToSection('sobre')}
                className={styles.primaryButton}
              >
                Conheça meu trabalho
              </button>
              
              <button
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className={styles.secondaryButton}
              >
                Entre em contato
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className={styles.sectionAbout}>
        <div className={styles.navContainer}>
          <div className={styles.sectionTitleContainer}>
            <h2 className={styles.sectionTitle}>
              Sobre <span className={styles.highlightTextInline}>Mim</span> {/* caso de erro, mude para styles.textBlue, e adicione .textBlue no .module.css*/}
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.aboutContentGrid}>
            <div className={styles.textContainer}>
              <p className={styles.paragraph}>
                Sou graduando em <strong className={styles.highlightText}>Ciência da Computação</strong> pela UFRRJ, 
                com foco em transformar tecnologia em <strong>segurança e preservação da vida</strong>. 
                Desenvolvo sistemas que unem software de alta performance a infraestruturas críticas.
              </p>
              
              <p className={styles.paragraph}>
                Atuo na intersecção entre hardware e software, colaborando em equipes multidisciplinares 
                para criar ferramentas que detectam riscos e previnem acidentes com a rede elétrica em tempo real, 
                priorizando a <strong>viabilidade técnica e a escalabilidade</strong>.
              </p>
            </div>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Code className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>IoT & Monitoramento</h3>
                </div>
                <p className={styles.skillCardText}>
                  Criação de dashboards inteligentes e integração de sensores (como DAS) para visualização de dados críticos da rede elétrica em tempo real.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Brain className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>IA Preventiva</h3>
                </div>
                <p className={styles.skillCardText}>
                  Uso de Machine Learning e processamento de sinais para identificar padrões de risco.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Shield className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>Segurança de Sistemas</h3>
                </div>
                <p className={styles.skillCardText}>
                  Desenvolvimento de arquiteturas robustas para garantir a integridade de dados e a continuidade de serviços em sistemas de missão crítica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.sectionPortfolio}>
        <div className={styles.navContainer}>
          <div className={styles.sectionTitleContainer}>
            <h2 className={styles.sectionTitle}>
              Meu <span className={styles.highlightTextInline}>Portfólio</span>
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Projetos que estou começando a desenvolver, executando minhas habilidades e paixão por tecnologia.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {/* Project Card Template */}
            {[
              {
                title: "E-commerce Moderno",
                description: "Plataforma completa de e-commerce com React, Node.js e payment gateway integrado.",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Sistema Blockchain",
                description: "Smart contract para votação descentralizada com interface web intuitiva.",
                tech: ["Solidity", "Web3.js", "Next.js"]
              },
              {
                title: "App Mobile",
                description: "Aplicativo mobile híbrido para gestão de tarefas com sincronização em tempo real.",
                tech: ["React Native", "Firebase", "TypeScript"]
              },
              {
                title: "VisionSafe AI",
                description: "Modelo de visão computacional treinado para identificar a proximidade de risco entre máquinas pesadas (guindastes e escavadeiras) e redes elétricas em imagens de canteiros de obra.",
                tech: ["Python", "OpenCV", "TensorFlow"]
              },
              {
                title: "SafeGrid IoT Monitor",
                description: "Protótipo de sistema sensorial para detecção de inclinação e vibrações anômalas em estruturas de utilidade pública, com alertas automáticos via protocolo MQTT.",
                tech: ["C++", "MQTT", "Node.js"]
              },
              {
                title: "Infrastructure OpsCenter",
                description: "Plataforma distribuída para reporte geolocalizado de incidentes de infraestrutura, com arquitetura resiliente projetada para operar com baixa latência em situações críticas.",
                tech: ["Go", "React", "PostgreSQL"]
              } 
            ].map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
              >
                <div className={styles.projectImagePlaceholder}>
                  <Code />
                </div>
                
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                
                <div className={styles.projectTechTagsContainer}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex} className={styles.projectTechTag}>
                        {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectActions}>
                  <button className={styles.projectButton}>
                    <ExternalLink className={styles.buttonIcon}/>
                    <span>Demo</span>
                  </button>
                  <button className={styles.projectButton}>
                    <Github className={styles.buttonIcon}/>
                    Código
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStackMarquee />

      {/* Contact Section */}
      <section id="contato" className={styles.sectionAbout}>
        <div className={styles.contactContainer}>
          <div className={styles.sectionTitleContainer}>
            <h2 className={styles.sectionTitle}>
              Vamos <span className={styles.highlightTextInline}>Conversar</span>
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.paragraph}>
              Estou sempre aberto a novas oportunidades e colaborações interessantes. 
              Entre em contato comigo!
            </p>
          </div>

          <div className={styles.contactInfoBox}>
            <div className={styles.contactInfoGrid}>
              {/* Em App.jsx, dentro da Seção de Contato */}

              <a href="mailto:bielmachado09@hotmail.com" className={styles.contactCard}>
                <div className={styles.contactCardIconWrapper} style={{backgroundColor: '#1d4ed8'}}>
                  <Mail className={styles.contactCardIcon} />
                </div>
                <h3 className={styles.contactCardTitle}>E-mail</h3>
                <p className={styles.contactCardText}>bielmachado09@hotmail.com</p>
              </a>

              <a
                href="https://github.com/whois-machado" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIconWrapper} style={{backgroundColor: '#111827'}}>
                  <Github className={styles.contactCardIcon} />
                </div>
                <h3 className={styles.contactCardTitle}>Github</h3>
                <p className={styles.contactCardText}>@whois-machado</p>
              </a>

              <a
                href="https://www.linkedin.com/in/gabrielmachadodecarvalho/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIconWrapper} style={{backgroundColor: '#1e40af'}}>
                  <Linkedin className={styles.contactCardIcon} />
                </div>
                <h3 className={styles.contactCardTitle}>Linkedin</h3>
                <p className={styles.contactCardText}>/in/gabrielmachadodecarvalho  </p>
              </a>
            </div>
          </div>

          <div className={styles.centeredContent}>
            <button
              onClick={() => window.location.href = 'mailto:bielmachado09@hotmail.com'} className={styles.largePrimaryButton}
            >
              Enviar E-mail
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.navContainer}>
          <p className={styles.footerText}>
            © 2025 Gabriel Machado | React • CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
