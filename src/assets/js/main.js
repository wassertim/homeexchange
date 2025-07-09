// ==========================================================================
// MAIN JAVASCRIPT
// HomeExchange Guide Interactive Features
// ==========================================================================

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initBurgerMenu();
  initAccessibility();
});

/**
 * Initialize burger menu functionality
 */
function initBurgerMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.main-nav');
  const body = document.body;
  
  if (!navToggle || !navigation) return;
  
  // Toggle navigation on burger menu click
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    
    const isOpen = navigation.classList.contains('nav-open');
    
    if (isOpen) {
      closeNavigation();
    } else {
      openNavigation();
    }
  });
  
  // Close navigation when clicking outside
  document.addEventListener('click', function(e) {
    if (!navigation.contains(e.target) && !navToggle.contains(e.target)) {
      closeNavigation();
    }
  });
  
  // Close navigation on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeNavigation();
    }
  });
  
  // Close navigation when window is resized to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      closeNavigation();
    }
  });
  
  function openNavigation() {
    navigation.classList.add('nav-open');
    body.classList.add('nav-open');
    navToggle.setAttribute('aria-expanded', 'true');
    
    // Focus first navigation link
    const firstLink = navigation.querySelector('.nav-link');
    if (firstLink) {
      firstLink.focus();
    }
  }
  
  function closeNavigation() {
    navigation.classList.remove('nav-open');
    body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Initialize accessibility features
 */
function initAccessibility() {
  // Add keyboard navigation support
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
  
  // Add focus management
  const focusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.classList.add('focus-visible');
    });
    
    element.addEventListener('blur', function() {
      this.classList.remove('focus-visible');
    });
  });
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}