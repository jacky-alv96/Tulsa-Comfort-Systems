const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const body = document.body
const mobileHeader = document.querySelector('.mobile-header')

const navSlideIn = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(0%)"
  body.classList.add('menu-open')
  if (mobileHeader) {
    mobileHeader.style.display = 'none'
    mobileHeader.style.visibility = 'hidden'
    mobileHeader.style.opacity = '0'
  }
}
const navSlideOut = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(-100%)"
  body.classList.remove('menu-open')
  if (mobileHeader) {
    mobileHeader.style.display = ''
    mobileHeader.style.visibility = ''
    mobileHeader.style.opacity = ''
  }
}

burger.addEventListener('click', function() {
  if(navLinks.style.transform == "translateY(0%)") {
    navSlideOut();
  } else {
    navSlideIn();
  }
});

// Close menu when clicking on a link
const navLinksList = document.querySelectorAll('.nav-links a')
navLinksList.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    
    // For anchor links on the same page (#reviews), handle scroll manually
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        navSlideOut();
        // Wait for menu to close, then scroll
        setTimeout(() => {
          const offset = 100; // Account for fixed nav bars
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 400);
      }
    } 
    // For links to other pages with anchors (index.html#reviews)
    else if (href && href.includes('#') && href.includes('index.html')) {
      e.preventDefault();
      const parts = href.split('#');
      if (parts.length === 2 && window.location.pathname.includes('index.html')) {
        // Already on index page, just scroll
        const targetElement = document.getElementById(parts[1]);
        if (targetElement) {
          navSlideOut();
          setTimeout(() => {
            const offset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 400);
        }
      } else {
        // Navigate to index page first, then scroll
        window.location.href = href;
      }
    } 
    // For other links, close menu after a short delay
    else {
      setTimeout(() => {
        navSlideOut();
      }, 100);
    }
  });
});
