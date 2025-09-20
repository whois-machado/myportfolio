import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ChevronDown, Menu, X, Code, Brain, Shield, ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';


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
                <span className={styles.profileInitials}>GM</span>
              </div>
            </div>
        </div>

          <div className={styles.fadeInUpDelay1}>
            <h1 className={styles.mainTitle}>
              Desenvolvedor
              <span className={styles.highlightText}>
                Full Stack
              </span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Estudante de Ciência da Computação, com foco em desenvolvimento de software e interesse em tecnologias emergentes como IA, blockchain e segurança cibernética.
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
                Sou graduando em <strong className={styles.highlightText}>Ciência da Computação</strong> pela 
                Universidade Federal Rural do Rio de Janeiro (UFRRJ), com paixão por desenvolvimento 
                web e tecnologias emergentes.
              </p>
              
              <p className={styles.paragraph}>
                Tenho experiência em desenvolvimento full stack, com foco especial em tecnologias 
                modernas e práticas de desenvolvimento ágil. Busco constantemente aprender e aplicar 
                novos conhecimentos em projetos reais.
              </p>

              <div className={styles.techTagsContainer}>
                <div className={styles.techTag}>
                  <span className={styles.highlightText}>JavaScript</span>
                </div>
                <div className={styles.techTag}>
                  <span className={styles.highlightText}>React</span>
                </div>
                <div className={styles.techTag}>
                  <span className={styles.highlightText}>Node.js</span>
                </div>
                <div className={styles.techTag}>
                  <span className={styles.highlightText}>Python</span>
                </div>
              </div>
            </div>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Code className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>Desenvolvimento Web</h3>
                </div>
                <p className={styles.skillCardText}>
                  Experiência em desenvolvimento full stack com foco em interfaces modernas e APIs robustas.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Brain className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>Inteligência Artificial</h3>
                </div>
                <p className={styles.skillCardText}>
                  Interesse crescente em IA e machine learning, explorando aplicações práticas e inovadoras.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Shield className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>Blockchain & Segurança</h3>
                </div>
                <p className={styles.skillCardText}>
                  Estudando blockchain e cibersegurança para construir soluções mais seguras e descentralizadas.
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
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e paixão por tecnologia.
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
                title: "Dashboard Analytics",
                description: "Sistema de análise de dados com visualizações interativas e relatórios em tempo real.",
                tech: ["Vue.js", "Python", "PostgreSQL"]
              },
              {
                title: "App Mobile",
                description: "Aplicativo mobile híbrido para gestão de tarefas com sincronização em tempo real.",
                tech: ["React Native", "Firebase", "TypeScript"]
              },
              {
                title: "Sistema Blockchain",
                description: "Smart contract para votação descentralizada com interface web intuitiva.",
                tech: ["Solidity", "Web3.js", "Next.js"]
              },
              {
                title: "IA Chatbot",
                description: "Chatbot inteligente com processamento de linguagem natural para atendimento ao cliente.",
                tech: ["Python", "TensorFlow", "FastAPI"]
              },
              {
                title: "Security Scanner",
                description: "Ferramenta de análise de segurança para identificar vulnerabilidades em aplicações web.",
                tech: ["Python", "Docker", "React"]
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
