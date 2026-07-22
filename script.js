document.addEventListener('DOMContentLoaded', () => {

  // Année automatique dans le footer
  try {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  } catch (e) { console.error('year', e); }

  // Menu mobile
  try {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
      });

      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('is-open');
          toggle.classList.remove('is-active');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  } catch (e) { console.error('nav-toggle', e); }

  // Ombre légère sur le header au scroll
  try {
    const header = document.getElementById('site-header');
    if (header) {
      const onScroll = () => {
        header.style.boxShadow = window.scrollY > 8 ? '0 4px 18px rgba(33,27,22,0.08)' : 'none';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  } catch (e) { console.error('scroll-shadow', e); }

});
