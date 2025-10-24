function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".main-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
    nav.style.backdropFilter = 'blur(20px)';
  } else {
    nav.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    nav.style.backdropFilter = 'blur(10px)';
  }
});

// Add typing animation to title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title');
  if (title && title.textContent === 'Erdison Malko') {
    const originalText = title.textContent;
    typeWriter(title, originalText, 150);
  }
});
