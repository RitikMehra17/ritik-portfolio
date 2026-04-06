/* =========================================
   RITIK MEHRA PORTFOLIO — main.js
   ========================================= */

/* ── SCROLL FADE-IN ANIMATION ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade').forEach((el) => observer.observe(el));


/* ── ACTIVE NAV LINK ON SCROLL ── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((sec) => sectionObserver.observe(sec));


/* ── SMOOTH SCROLL FOR NAV LINKS ── */
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


/* ── NAVBAR HIDE ON SCROLL DOWN / SHOW ON SCROLL UP ── */
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});
