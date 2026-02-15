import React, { useState, useEffect } from 'react'; 
import { Mail, Github, Linkedin, BookOpen, ChevronDown, Menu, X, LayoutDashboard, Code, Layers, ChartBar, ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';
import { useTranslation } from 'react-i18next';



function TechStackMarquee() {
  const techRow1 = ['Java', 'Spring Boot', 'REST APIs', 'JUnit 5', 'Docker'];
  const techRow2 = ['JavaScript', 'Next.js', 'TypeScript', 'Node.js'];
  const techRow3 = ['SOLID', 'Clean Code', 'Software Design'];
  const techRow4 = ['Python', 'Machine Learning', 'NetworkX', 'ETL (Pandas)', 'AWS'];

  // Função para renderizar a esteira com repetição tripla para evitar buracos
  const renderMarquee = (items, reverse = false) => (
    <div className={styles.marquee}>
      <div className={`${styles.marqueeInner} ${reverse ? styles.marqueeReverse : ''}`}>
        {/* Triplicamos os itens para garantir preenchimento total em qualquer resolução */}
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className={styles.marqueeItem}>
            <span className={styles.techDot}></span> {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={styles.techSection}>
      <div className={styles.navContainer}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Tech <span className={styles.highlightTextInline}>Stack</span>
        </h2>
      </div>

      <div className={styles.marqueeContainer}>
        {renderMarquee(techRow1)}
        {renderMarquee(techRow2, true)}
        {renderMarquee(techRow3)}
        {renderMarquee(techRow4, true)}
      </div>
    </section>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const toggleLanguage = () => {
  const newLang = i18n.language === 'en' ? 'pt' : 'en';
  i18n.changeLanguage(newLang);
};

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
                  { id: 'inicio', label: t('nav.home') },
                  { id: 'sobre', label: t('nav.about') },
                  { id: 'portfolio', label: t('nav.projects') },
                  { id: 'contato', label: t('nav.contact') }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`${styles.navButton} ${activeSection === id ? styles.activeNavButton : ''}`}
                  >
                    {label}
                  </button>
                ))}
                <button 
                  onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
                  className={styles.navButton}
                  style={{ marginLeft: '1rem', fontWeight: 'bold', color: '#3b82f6' }}
                >
                  {i18n.language === 'en' ? 'PT' : 'EN'}
                </button>
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
              {t('hero.title')}
              <span className={styles.highlightText}>
                {t('hero.highlight')}
              </span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              {t('hero.subtitle')}
            </p>

            <div className={styles.heroActions}>
              <button
                onClick={() => scrollToSection('sobre')}
                className={styles.primaryButton}
              >
               {t('hero.btnWork')}
              </button>
              
              <button
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className={styles.secondaryButton}
              >
                {t('hero.btnContact')}
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
              {t('about.title')}  
              <span className={styles.highlightTextInline}> 
                {t('about.highlight')}
              </span> 
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.aboutContentGrid}>
            <div className={styles.textContainer}>
              <p className={styles.paragraph}>
                {t('about.p1')}
              </p>
              
              <p className={styles.paragraph}>
                {t('about.p2')}
              </p>
            </div>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <Layers className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>
                    {t('about.cardTitle1')}
                  </h3>
                </div>
                <p className={styles.skillCardText}>
                  {t('about.pCard1')}
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <LayoutDashboard className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>
                    {t('about.cardTitle2')}
                  </h3>
                </div>
                <p className={styles.skillCardText}>
                  {t('about.pCard2')}
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillCardHeader}>
                  <ChartBar className={styles.skillCardIcon} />
                  <h3 className={styles.skillCardTitle}>
                    {t('about.cardTitle3')}
                  </h3>
                </div>
                <p className={styles.skillCardText}>
                  {t('about.pCard3')}
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
              {t('projects.title')} 
              <span className={styles.highlightTextInline}>
                {t('projects.highlight')}
              </span>
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              {t('projects.subtitle')}
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {[
              {
                title: "LedgerFlow",
                description: t('projects.ledgerflow.description'),
                tech: ["Java", "Spring Boot", "MySQL", "JUnit 5"],
                githubUrl: "https://github.com/whois-machado/LedgerFlow"
              },
              {
                title: "UrbanStore",
                description: t('projects.urbanstore.description'),
                tech: ["Next.js", "Node.js", "TypeScript"]
              },
              {
                title: "UniHub",
                description: t('projects.unihub.description'),
                tech: ["Python", "NetworkX", "Machine Learning"]
              },
    
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
                
                <div className={styles.cardFooter}>
                <div className={styles.projectTechTagsContainer}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex} className={styles.projectTechTag}>
                        {tech}
                    </span>
                  ))}
                </div>
                </div>
                
                <div className={styles.projectActions}>
                  <button 
                    className={styles.projectButton}
                    onClick={() => project.githubUrl !== "#" && window.open(project.githubUrl, "_blank")}
                  >
                    <Github className={styles.buttonIcon}/>
                    {t('projects.btnIcon')}
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
              {t('contacts.title')} 
              <span className={styles.highlightTextInline}>
                {t('contacts.highlight')}
              </span>
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.paragraph}>
              {t('contacts.p')}
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

              <a href="https://dev.to/whoismachado" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIconWrapper} style={{backgroundColor: '#000000'}}>
                  <BookOpen className={styles.contactCardIcon} />
                </div>
                <h3 className={styles.contactCardTitle}>Dev.to</h3>
                <p className={styles.contactCardText}>Artigos Técnicos</p>
              </a>
            </div>
          </div>

          <div className={styles.centeredContent}>
            <button
              onClick={() => window.location.href = 'mailto:bielmachado09@hotmail.com'} className={styles.largePrimaryButton}
            >
              {t('contacts.btnContact')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.navContainer}>
          <p className={styles.footerText}>
            © 2026 Gabriel Machado | React • CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
