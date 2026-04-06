/* Guild of Opulence™ — Landing Page Scripts */

// ── Year in footer ──────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Nav scroll effect ───────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10,10,10,0.98)';
    nav.style.borderBottomColor = 'rgba(201,168,76,0.3)';
  } else {
    nav.style.background = 'rgba(10,10,10,0.92)';
    nav.style.borderBottomColor = 'rgba(201,168,76,0.2)';
  }
}, { passive: true });

// ── Fade-up scroll animations ───────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.problem__card, .pillar, .component__card, .offer__card, .opulence__item, .about__content, .about__image-wrap'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// ── Form submission handler ─────────────────────────────────────────────
const form = document.getElementById('applyForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Submitting...';
    btn.disabled = true;

    // Replace this with your actual form endpoint (GoHighLevel, Typeform, etc.)
    // For now, simulate a brief delay and show success
    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align:center; padding: 48px 24px;">
          <div style="font-size: 3rem; margin-bottom: 24px;">✦</div>
          <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #f5f0e8; margin-bottom: 16px;">
            Application Received
          </h3>
          <p style="color: #c8c0b0; font-size: 1rem; line-height: 1.8; max-width: 480px; margin: 0 auto 24px;">
            Thank you for applying to the Guild of Opulence™. A member of our team will be in touch within 24–48 hours to discuss your application.
          </p>
          <p style="color: #c9a84c; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">
            You Were Built For Opulence.
          </p>
        </div>
      `;
    }, 1200);
  });
}

// ── Smooth scroll for anchor links ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
