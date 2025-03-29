document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    
    if (expanded) {
      mobileMenu.classList.remove('active');
    } else {
      mobileMenu.classList.add('active');
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: targetPosition - navbarHeight - 20, // Offset for fixed header plus a little extra space
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate elements when they scroll into view
  const animateOnScroll = function() {
    const projectCards = document.querySelectorAll('.project-card');
    const involvementCards = document.querySelectorAll('.involvement-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const triggerBottom = window.innerHeight * 0.8;
    
    // Animate project cards
    projectCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      
      if (cardTop < triggerBottom) {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      } else {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
      }
    });
    
    // Animate involvement cards
    involvementCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      
      if (cardTop < triggerBottom) {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      } else {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
      }
    });
    
    // Animate timeline items
    timelineItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      
      if (itemTop < triggerBottom) {
        setTimeout(() => {
          item.style.opacity = 1;
          item.style.transform = 'translateX(0)';
        }, index * 150);
      } else {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)';
      }
    });
  };
  
  // Set initial states for animated elements
  document.querySelectorAll('.project-card, .involvement-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Run animations on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  // Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
  
  // Check if browser supports SVG
  function supportsSVG() {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
  }
  
  if (!supportsSVG()) {
    document.documentElement.className += ' no-svg';
  }
});
