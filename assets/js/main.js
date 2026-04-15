/**
 * Farejô — shared site behaviors
 * - Header shadow on scroll
 * - Mobile menu toggle
 * - FAQ accordion (data-faq-question / data-faq-answer)
 */
(function () {
  'use strict';

  // -------- Header scroll state --------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // -------- Mobile menu --------
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menuList = document.querySelector('[data-menu-target]');
  if (menuButton && menuList) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuList.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    // Fecha menu ao clicar em link
    menuList.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        menuList.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -------- FAQ accordion --------
  const questions = document.querySelectorAll('[data-faq-question]');
  questions.forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const next = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', String(!expanded));
      if (next) {
        next.hidden = expanded;
      }
    });
  });
})();
