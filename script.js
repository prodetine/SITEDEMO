(() => {
  'use strict';
  const config = window.FORGE_CONFIG || {};
  const t = key => window.FORGE_I18N?.t(key) || window.FORGE_TRANSLATIONS?.en[key] || '';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const form = document.querySelector('#project-form');
  const status = document.querySelector('#form-status');
  const prepared = document.querySelector('#prepared-message');
  const email = typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email) ? config.email : '';
  const telegram = typeof config.telegram === 'string' ? config.telegram.replace(/^@/, '') : '';
  const hasTelegram = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(telegram);
  let statusKey = null;
  const setStatus = key => { statusKey = key; status.textContent = t(key); };
  const setMenuText = () => { if (menu) menu.textContent = t(menu.getAttribute('aria-expanded') === 'true' ? 162 : 2); };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); setMenuText(); nav.classList.toggle('is-open', open);
  });
  const closeMenu = () => { menu?.setAttribute('aria-expanded', 'false'); setMenuText(); nav?.classList.remove('is-open'); };
  nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { form.elements.service.value = link.dataset.service; }));
  document.querySelectorAll('[data-year]').forEach(item => { item.textContent = new Date().getFullYear(); });
  const validate = () => {
    if (!form) return;
    const { name, email: emailInput, brief } = form.elements;
    name.setCustomValidity(name.value.trim() ? '' : t(173));
    emailInput.setCustomValidity('');
    emailInput.setCustomValidity(emailInput.validity.valid ? '' : t(174));
    brief.setCustomValidity(brief.value.trim().length >= 20 ? '' : t(175));
  };
  const localizeRuntime = () => {
    setMenuText();
    if (!form) return;
    const submitText = document.querySelector('#submit-button [data-i18n]');
    if (submitText) { submitText.dataset.i18n = email || hasTelegram ? '163' : '136'; submitText.textContent = t(Number(submitText.dataset.i18n)); }
    document.querySelector('#delivery-note').textContent = t(email ? 165 : hasTelegram ? 164 : 137);
    document.querySelector('#contact-link').textContent = t(email ? 140 : 166);
    if (statusKey !== null) status.textContent = t(statusKey);
    if (Array.from(form.elements).some(el => el.validity?.customError)) validate();
  };
  document.addEventListener('forge:language', localizeRuntime); localizeRuntime();
  form?.addEventListener('input', event => { event.target.setCustomValidity?.(''); });
  form?.addEventListener('submit', event => {
    event.preventDefault(); validate(); if (!form.reportValidity()) return;
    const data = new FormData(form);
    const serviceKey = { 'Business website':130, 'Landing page':131, 'Website redesign':132, 'Let’s figure it out':133 }[data.get('service')] || 133;
    const message = `${t(178)}\n\n${t(129)} ${t(serviceKey)}\n${t(127)}: ${String(data.get('name')).trim()}\n${t(128)}: ${String(data.get('email')).trim()}\n\n${t(134)}:\n${String(data.get('brief')).trim()}\n\n${t(176)}`;
    prepared.value = message; document.querySelector('#brief-output').hidden = false;
    const link = document.querySelector('#contact-link');
    if (email) { link.href = `mailto:${email}?subject=${encodeURIComponent(t(177))}&body=${encodeURIComponent(message)}`; link.hidden = false; }
    else if (hasTelegram) { link.href = `https://t.me/${telegram}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.hidden = false; }
    setStatus(email ? 168 : hasTelegram ? 167 : 169); prepared.focus();
  });
  document.querySelector('#copy-brief')?.addEventListener('click', async () => {
    try { if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(prepared.value); setStatus(170); }
    catch { prepared.focus(); prepared.select(); setStatus(171); }
  });
  if ('IntersectionObserver' in window && document.querySelector('#start')) {
    const observer = new IntersectionObserver(entries => { document.querySelector('.mobile-cta')?.classList.toggle('is-hidden', entries[0].isIntersecting); }, {threshold: 0.05});
    observer.observe(document.querySelector('#start'));
  }
})();
