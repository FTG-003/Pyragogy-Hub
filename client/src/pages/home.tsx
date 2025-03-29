import React, { useState, useEffect } from 'react';
import "../styles/pyragogy.css";

// SVG Components
const PyragogyLogo = () => (
  <svg className="logo-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="200" r="180" fill="#EFF6FF" />
    <path d="M200 80 L320 200 L200 320 L80 200 Z" fill="#BFDBFE" />
    <circle cx="200" cy="200" r="100" fill="#93C5FD" />
    <path d="M200 120 L260 200 L200 280 L140 200 Z" fill="#3B82F6" />
    <circle cx="200" cy="200" r="40" fill="#1D4ED8" />
    <path d="M200 170 L215 200 L200 230 L185 200 Z" fill="#8B5CF6" />
    <circle cx="200" cy="200" r="15" fill="#6D28D9" />
  </svg>
);

const CheckIcon = () => (
  <span className="check-icon">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </span>
);

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll for animations
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      animateOnScroll();
    };

    // Animate elements when they scroll into view
    const animateOnScroll = () => {
      const projectCards = document.querySelectorAll('.project-card');
      const involvementCards = document.querySelectorAll('.involvement-card');
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      const triggerBottom = window.innerHeight * 0.8;
      
      // Animate project cards
      projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < triggerBottom) {
          card.classList.add('animate-in');
        }
      });
      
      // Animate involvement cards
      involvementCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < triggerBottom) {
          card.classList.add('animate-in');
        }
      });
      
      // Animate timeline items
      timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        
        if (itemTop < triggerBottom) {
          setTimeout(() => {
            item.classList.add('animate-in');
          }, index * 150);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize animations
    setTimeout(animateOnScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetPosition - navbarHeight - 20,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="pyragogy-site">
      {/* Navbar */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav>
            <div className="logo">
              <span className="accent">P</span>yragogy
            </div>
            
            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <a href="#about" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#about')}>About</a>
              <a href="#founder" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#founder')}>Founder</a>
              <a href="#projects" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#projects')}>Projects</a>
              <a href="#join" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#join')}>Join</a>
              <a href="#donate" className="cta-button" onClick={(e) => handleNavLinkClick(e, '#donate')}>Support Pyragogy</a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="mobile-menu-button" 
              aria-expanded={isMobileMenuOpen}
              aria-label="Open menu"
              onClick={toggleMobileMenu}
            >
              <svg className="hamburger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#about')}>About</a>
            <a href="#founder" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#founder')}>Founder</a>
            <a href="#projects" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#projects')}>Projects</a>
            <a href="#join" className="nav-link" onClick={(e) => handleNavLinkClick(e, '#join')}>Join</a>
            <a href="#donate" className="cta-button" onClick={(e) => handleNavLinkClick(e, '#donate')}>Support Pyragogy</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Pyragogy
                <span className="gradient-text">The Future of Learning Is Here</span>
              </h1>
              <p>
                Discover the revolutionary concept of collaborative learning between humans and AI. Pyragogy redefines education for the age of artificial intelligence.
              </p>
              <div className="hero-buttons">
                <a href="#join" className="primary-button" onClick={(e) => handleNavLinkClick(e, '#join')}>
                  <span>Join the Movement</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#about" className="secondary-button" onClick={(e) => handleNavLinkClick(e, '#about')}>
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-logo">
              <PyragogyLogo />
              <div className="version-badge">
                <span className="code">v1.0.0 Beta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="tag primary-tag">Our Vision</span>
            <h2>About Pyragogy</h2>
            <p>
              Pyragogy represents a paradigm shift in education, where humans and AI collaborate to create unprecedented learning experiences and knowledge systems.
            </p>
          </div>

          <div className="about-content">
            {/* Timeline */}
            <div className="timeline-container">
              <h3>The Evolution of Learning</h3>
              
              {/* Timeline items */}
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4>Pedagogy</h4>
                  <p>Traditional teacher-centered approach where knowledge flows in one direction.</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4>Andragogy</h4>
                  <p>Adult learning theory that acknowledges experience and self-direction.</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4>Heutagogy</h4>
                  <p>Self-determined learning where learners are highly autonomous.</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot secondary"></div>
                  <h4>Peeragogy</h4>
                  <p>Peer-based learning where knowledge is co-created by equals.</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot accent"></div>
                  <h4 className="accent-text">Pyragogy</h4>
                  <p>Human-AI collaborative learning ecosystem that transcends traditional boundaries.</p>
                </div>
              </div>
            </div>
            
            {/* Concept Map */}
            <div className="concept-map">
              <h3>The Pyragogy Framework</h3>
              
              <div className="framework-container">
                <div className="framework-card">
                  <h4 className="primary-text">AI-Human Co-Creation</h4>
                  <p>Collaborative knowledge generation through synergistic interaction between AI and human intelligence.</p>
                </div>
                
                <div className="framework-card">
                  <h4 className="secondary-text">Adaptive Learning Pathways</h4>
                  <p>Personalized educational journeys that evolve based on real-time feedback and changing objectives.</p>
                </div>
                
                <div className="framework-card">
                  <h4 className="accent-text">Cognitive Enhancement</h4>
                  <p>Leveraging AI capabilities to extend human cognitive abilities and unlock new forms of understanding.</p>
                </div>
                
                <div className="framework-card">
                  <h4 className="dark-text">Ethical Framework</h4>
                  <p>Ensuring responsible development and application of AI in educational contexts, prioritizing human well-being.</p>
                </div>
              </div>
              
              <div className="quote-container">
                <blockquote>
                  "Pyragogy isn't just a new educational methodology; it's a fundamental reimagining of how humans and machines can learn together, creating something greater than either could alone."
                </blockquote>
                <div className="quote-author">— Fabrizio Terzi (FTG-003)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="founder">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image">
              <div className="founder-image-container">
                <svg width="100%" height="100%" className="img-cover" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#E5E7EB"/>
                  <text x="50%" y="50%" fontFamily="Arial, sans-serif" fontSize="24" fill="#6B7280" textAnchor="middle" dominantBaseline="middle">Founder Image Placeholder</text>
                  <text x="50%" y="58%" fontFamily="Arial, sans-serif" fontSize="16" fill="#6B7280" textAnchor="middle" dominantBaseline="middle">Replace with your image</text>
                </svg>
              </div>
              <div className="founder-quote">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  The integration of AI into learning is not just inevitable—it's essential for educational evolution.
                </p>
              </div>
            </div>
            
            <div className="founder-bio">
              <span className="tag accent-tag">The Visionary</span>
              <h2>Fabrizio Terzi (FTG-003)</h2>
              
              <div className="bio-text">
                <p className="lead">
                  Fabrizio Terzi is a pioneer in the field of human-AI collaborative learning, whose groundbreaking work has established the foundation for what we now know as Pyragogy.
                </p>
                
                <p>
                  With a background spanning education, technology, and cognitive science, Fabrizio identified the transformative potential of AI not merely as a tool, but as a collaborative partner in the learning process.
                </p>
                
                <p>
                  His research focuses on creating symbiotic educational environments where human creativity and AI capabilities enhance one another, leading to unprecedented knowledge creation and skills development.
                </p>
                
                <div className="contributions">
                  <h3>Key Contributions</h3>
                  <ul>
                    <li>
                      <CheckIcon />
                      <span>Developed the PeerGang System for AI-enhanced collaborative learning</span>
                    </li>
                    <li>
                      <CheckIcon />
                      <span>Authored numerous papers on cognitive augmentation through AI partnership</span>
                    </li>
                    <li>
                      <CheckIcon />
                      <span>Pioneered methodologies for adaptive AI-human feedback loops in education</span>
                    </li>
                  </ul>
                </div>
                
                <div className="founder-cta">
                  <a href="https://ftg-003.github.io/siar/" target="_blank" rel="noopener noreferrer" className="accent-button">
                    <span>Visit Fabrizio's Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="tag secondary-tag">Initiatives</span>
            <h2>Open Source Projects</h2>
            <p>
              Explore our growing ecosystem of Pyragogy initiatives. Each project represents a facet of our vision for human-AI collaborative learning.
            </p>
          </div>
          
          {/* Project Grid */}
          <div className="project-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="project-icon primary-gradient">
                <i className="fas fa-robot"></i>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>PeeragogyBot AI</h3>
                  <span className="project-id">PROJ-001</span>
                </div>
                <p>
                  An AI assistant specifically designed to facilitate collaborative learning environments and optimize peer-to-peer educational experiences.
                </p>
                <div className="project-footer">
                  <span className="project-license">
                    <i className="fas fa-code-branch"></i> Open Source
                  </span>
                  <a href="#" className="project-link">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="project-card">
              <div className="project-icon secondary-gradient">
                <i className="fas fa-book"></i>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>Peeragogy Handbook AI Edition</h3>
                  <span className="project-id">PROJ-002</span>
                </div>
                <p>
                  A comprehensive guide to peer learning methodologies, enhanced with AI-powered insights, interactive exercises, and adaptive content.
                </p>
                <div className="project-footer">
                  <span className="project-license">
                    <i className="fas fa-code-branch"></i> Open Source
                  </span>
                  <a href="#" className="project-link">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="project-card">
              <div className="project-icon accent-gradient">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>PeerGang System</h3>
                  <span className="project-id">PROJ-003</span>
                </div>
                <p>
                  A framework for creating dynamic learning communities where AI agents and human participants collaborate in structured knowledge building activities.
                </p>
                <div className="project-footer">
                  <span className="project-license">
                    <i className="fas fa-code-branch"></i> Open Source
                  </span>
                  <a href="#" className="project-link">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="project-card">
              <div className="project-icon mixed-gradient-1">
                <i className="fas fa-bug"></i>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>Cosmic Peer Review – Error:42</h3>
                  <span className="project-id">PROJ-004</span>
                </div>
                <p>
                  A collaborative error detection and correction platform that combines human insight with AI pattern recognition to identify cognitive gaps and misconceptions.
                </p>
                <div className="project-footer">
                  <span className="project-license">
                    <i className="fas fa-code-branch"></i> Open Source
                  </span>
                  <a href="#" className="project-link">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="project-card">
              <div className="project-icon mixed-gradient-2">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>PyragogyBook OS</h3>
                  <span className="project-id">PROJ-005</span>
                </div>
                <p>
                  An open-source operating system designed specifically for educational environments, with built-in AI collaborative tools and learning resources.
                </p>
                <div className="project-footer">
                  <span className="project-license">
                    <i className="fas fa-code-branch"></i> Open Source
                  </span>
                  <a href="#" className="project-link">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="project-card">
              <div className="project-icon mixed-gradient-3">
                <i className="fas fa-route"></i>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>Learning Path: Imparo con la PeerGang</h3>
                  <span className="project-id">PROJ-007</span>
                </div>
                <p>
                  A self-directed learning journey that introduces beginners to the concepts of Pyragogy through hands-on projects and AI-facilitated group learning.
                </p>
                <div className="project-footer">
                  <span className="project-license">
                    <i className="fas fa-code-branch"></i> Open Source
                  </span>
                  <a href="#" className="project-link">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="join">
        <div className="container">
          <div className="section-header">
            <span className="tag accent-tag">Community</span>
            <h2>Join the Movement</h2>
            <p>
              Pyragogy is more than a concept—it's a growing community of educators, technologists, researchers, and learners who believe in the transformative power of human-AI collaboration.
            </p>
          </div>
          
          <div className="join-container">
            <div className="involvement-options">
              <div className="involvement-card">
                <div className="involvement-icon primary">
                  <i className="fas fa-code"></i>
                </div>
                <h3>Contribute Code</h3>
                <p>
                  Help develop the technological infrastructure that powers Pyragogy platforms. Whether you're a front-end developer, AI specialist, or UX designer, your skills can help build the future of learning.
                </p>
                <a href="#" className="involvement-link primary">
                  <span>View GitHub Repos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="involvement-card">
                <div className="involvement-icon secondary">
                  <i className="fas fa-pen"></i>
                </div>
                <h3>Create Content</h3>
                <p>
                  Develop learning resources, curricula, and guides that implement Pyragogy principles. Your expertise in education, subject matter knowledge, or instructional design can help shape how people learn.
                </p>
                <a href="#" className="involvement-link secondary">
                  <span>Join Content Team</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="involvement-card">
                <div className="involvement-icon accent">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Build Community</h3>
                <p>
                  Organize events, facilitate discussions, and help grow the Pyragogy community. Your passion for connecting people and fostering collaboration can help spread these ideas globally.
                </p>
                <a href="#" className="involvement-link accent">
                  <span>Join Discord</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="involvement-card">
                <div className="involvement-icon dark">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Research & Innovate</h3>
                <p>
                  Conduct research on the effectiveness and potential of Pyragogy approaches. Your background in academia, educational psychology, or AI ethics can help us refine and expand our understanding.
                </p>
                <a href="#" className="involvement-link dark">
                  <span>Research Opportunities</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Donation Section */}
            <div id="donate" className="donation-container">
              <div className="donation-content">
                <h3>Support Pyragogy</h3>
                <p>
                  Your financial contribution helps fund open-source development, educational programs, and community initiatives that advance the mission of Pyragogy.
                </p>
                <a href="#" className="donation-button">
                  <span>Make a Donation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo">
                <span className="accent">P</span>yragogy
              </div>
              <p className="tagline">
                The Future of Learning Is Here
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Explore</h4>
                <ul>
                  <li><a href="#about">About Pyragogy</a></li>
                  <li><a href="#founder">Our Founder</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#join">Join Us</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Discord</a></li>
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">YouTube</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Research Papers</a></li>
                  <li><a href="#">Learning Paths</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              &copy; {new Date().getFullYear()} Pyragogy. All rights reserved. Licensed under <a href="#">MIT License</a>.
            </div>
            <div className="footer-tagline">
              Powered by PeerGang – AI Co-Editing HyperMode™
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;