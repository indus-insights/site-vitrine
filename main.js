/* =========================================================
   Antonio Laisé · main.js
   Phase 2 : interactions discrètes
   - Scroll-spy sur la nav
   - Modales mentions légales / politique de confidentialité
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Scroll-spy nav ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = navLinks
    .map((a) => {
      const id = a.getAttribute('href').slice(1);
      return { link: a, el: document.getElementById(id) };
    })
    .filter((s) => s.el);

  if ('IntersectionObserver' in window && sections.length) {
    const setActive = (id) => {
      navLinks.forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
      });
    };

    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        });
        if (visible.size > 0) {
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setActive(top);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach((s) => io.observe(s.el));
  }

  /* ---------- Lightbox (captures dashboards) ---------- */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImage = lightbox.querySelector('.lightbox-image');
    const lbCaption = lightbox.querySelector('.lightbox-caption');
    const lbCounter = lightbox.querySelector('.lightbox-counter');
    const lbPrev = lightbox.querySelector('.lightbox-prev');
    const lbNext = lightbox.querySelector('.lightbox-next');
    const lbClose = lightbox.querySelector('.lightbox-close');

    // Only the 3 example dashboards form the gallery. Hero is not clickable.
    const galleryImages = Array.from(
      document.querySelectorAll('#exemples .dm-image')
    );

    let currentIndex = 0;

    function render() {
      const img = galleryImages[currentIndex];
      if (!img) return;
      // Reset src first to force the browser to repaint the new image,
      // avoiding any flash of the previous frame.
      lbImage.removeAttribute('src');
      lbImage.src = img.currentSrc || img.src;
      lbImage.alt = img.alt || '';
      lbCaption.textContent = img.alt || '';
      lbCounter.textContent =
        String(currentIndex + 1).padStart(2, '0') +
        ' / ' +
        String(galleryImages.length).padStart(2, '0');
    }

    function openAt(index) {
      if (index < 0 || index >= galleryImages.length) return;
      currentIndex = index;
      render();
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      lbImage.removeAttribute('src');
    }

    function go(delta) {
      if (galleryImages.length <= 1) return;
      currentIndex = (currentIndex + delta + galleryImages.length) % galleryImages.length;
      render();
    }

    // Attach click handler to each example article (event delegation):
    // a click anywhere on a dashboard card opens THAT card's image,
    // regardless of whether the actual click landed on the img, the chrome,
    // or the tab strip.
    galleryImages.forEach((img, idx) => {
      const card = img.closest('.dashboard-mock-img');
      if (!card) return;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', 'Voir la capture en grand : ' + (img.alt || ''));
      card.addEventListener('click', () => openAt(idx));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openAt(idx);
        }
      });
    });

    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', () => go(-1));
    lbNext.addEventListener('click', () => go(1));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    });
  }

  /* ---------- Demo prefill (CTA "Demander une démo interactive") ---------- */
  const demoTriggers = document.querySelectorAll('[data-prefill="demo"]');
  demoTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Pre-select "Créer un dashboard" radio
      const radio = document.querySelector('input[name="need"][value="dashboard"]');
      if (radio) radio.checked = true;

      // Pre-fill message if empty (don't overwrite user input)
      const message = document.getElementById('message');
      if (message && !message.value.trim()) {
        message.value =
          "Bonjour, je souhaite voir une démo interactive d'un de vos dashboards. " +
          "Merci de m'envoyer un lien d'accès ainsi qu'à la source de données associée.";
      }
    });
  });

  /* ---------- Cartes arguments (déplier le détail au clic) ---------- */
  const argCards = document.querySelectorAll('.arg-card');
  argCards.forEach((card) => {
    const toggle = () => {
      const open = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ---------- Modales ---------- */
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalCloses = document.querySelectorAll('[data-close]');

  function openModal(name) {
    const m = document.getElementById('modal-' + name);
    if (m) {
      m.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  }
  function closeAllModals() {
    document.querySelectorAll('.modal').forEach((m) => (m.hidden = true));
    document.body.style.overflow = '';
  }

  modalTriggers.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(t.dataset.modal);
    });
  });
  modalCloses.forEach((c) => c.addEventListener('click', closeAllModals));
  document.querySelectorAll('.modal').forEach((m) => {
    m.addEventListener('click', (e) => {
      if (e.target === m) closeAllModals();
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  /* ---------- Formulaire de contact (Netlify Forms, envoi AJAX + confirmation) ---------- */
  const cform = document.querySelector('form.contact-form');
  if (cform) {
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    const btn = cform.querySelector('button[type="submit"]');
    cform.addEventListener('submit', (e) => {
      e.preventDefault();
      if (errorEl) errorEl.hidden = true;
      if (btn) btn.disabled = true;
      const body = new URLSearchParams(new FormData(cform)).toString();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
      })
        .then((res) => {
          if (!res.ok) throw new Error('bad status ' + res.status);
          cform.hidden = true;
          if (successEl) {
            successEl.hidden = false;
            successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        })
        .catch(() => {
          if (btn) btn.disabled = false;
          if (errorEl) errorEl.hidden = false;
        });
    });
  }
})();
