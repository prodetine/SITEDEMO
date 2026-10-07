(() => {
  'use strict';
  const config = window.FORGE_CONFIG || {};
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
  });
  const closeMenu = () => { menu?.setAttribute('aria-expanded', 'false'); if (menu) menu.textContent = 'Menu'; nav?.classList.remove('is-open'); };
  nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.querySelectorAll('[data-device]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-device]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#website-preview').classList.toggle('is-mobile', button.dataset.device === 'mobile');
  }));
  const form = document.querySelector('#project-form');
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { form.elements.service.value = link.dataset.service; }));
  document.querySelectorAll('[data-year]').forEach(item => { item.textContent = new Date().getFullYear(); });
  const email = typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email) ? config.email : '';
  const telegram = typeof config.telegram === 'string' ? config.telegram.replace(/^@/, '') : '';
  const hasTelegram = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(telegram);
  const status = document.querySelector('#form-status');
  const prepared = document.querySelector('#prepared-message');
  if (email || hasTelegram) {
    document.querySelector('#submit-button').firstChild.textContent = 'PREPARE MY MESSAGE ';
    document.querySelector('#delivery-note').textContent = email ? 'Prepare your brief, then open an email draft. You review and send it yourself.' : 'Prepare your brief, then open our Telegram chat. Paste the brief there to send it.';
  }
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = `Hi FORGE,\n\nI’d like to discuss a ${String(data.get('service')).toLowerCase()}.\n\nName: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim()}\n\nProject brief:\n${String(data.get('brief')).trim()}\n\nPlease reply in writing with next steps.`;
    prepared.value = message;
    document.querySelector('#brief-output').hidden = false;
    const link = document.querySelector('#contact-link');
    if (email) {
      link.href = `mailto:${email}?subject=${encodeURIComponent('Website project enquiry — FORGE')}&body=${encodeURIComponent(message)}`;
      link.textContent = 'Open email draft'; link.hidden = false;
    } else if (hasTelegram) {
      link.href = `https://t.me/${telegram}`; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = 'Open Telegram chat'; link.hidden = false;
    }
    status.textContent = email ? 'Your brief is ready. Open the email draft to review and send it.' : hasTelegram ? 'Your brief is ready. Copy it, open Telegram and paste it into the chat.' : 'Your brief is ready to copy. Contact delivery is not connected in this preview; nothing has been sent.';
    prepared.focus();
  });
  document.querySelector('#copy-brief')?.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(prepared.value);
      status.textContent = 'Brief copied. Paste it into your message when you’re ready.';
    } catch {
      prepared.focus(); prepared.select();
      status.textContent = 'Automatic copying is unavailable. The brief is selected: use your device’s copy command.';
    }
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      document.querySelector('.mobile-cta')?.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, {threshold: 0.05});
    observer.observe(document.querySelector('#start'));
  }
})();
