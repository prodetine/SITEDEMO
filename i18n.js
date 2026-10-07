(() => {
  'use strict';
  const dictionary = window.FORGE_TRANSLATIONS;
  if (!dictionary) return;
  const selector = document.querySelector('#language-select');
  const supported = Object.keys(dictionary);
  const normalize = value => typeof value === 'string' ? value.toLowerCase().split('-')[0] : '';
  let saved = '';
  try { saved = localStorage.getItem('forge-language') || ''; } catch { /* Storage may be disabled. */ }
  const requested = normalize(new URL(location.href).searchParams.get('lang'));
  const browserLanguage = normalize(navigator.language);
  let language = supported.includes(requested) ? requested : supported.includes(saved) ? saved : supported.includes(browserLanguage) ? browserLanguage : 'en';
  const t = key => dictionary[language]?.[key] ?? dictionary.en[key] ?? '';
  const apply = () => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(Number(el.dataset.i18n)); });
    for (const attribute of ['aria-label', 'placeholder', 'alt', 'content']) {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(el => el.setAttribute(attribute, t(Number(el.getAttribute(`data-i18n-${attribute}`)))));
    }
    document.title = `FORGE — ${t(document.querySelector('.privacy-page') ? 142 : 143)}`;
    if (selector) selector.value = language;
    document.querySelectorAll('a[href^="index.html"],a[href^="privacy.html"]').forEach(link => {
      const url = new URL(link.href); url.searchParams.set('lang', language); link.href = url.pathname.split('/').pop() + url.search + url.hash;
    });
    document.dispatchEvent(new CustomEvent('forge:language'));
  };
  window.FORGE_I18N = { t, get language() { return language; } };
  selector?.addEventListener('change', () => {
    if (!supported.includes(selector.value)) return;
    language = selector.value;
    try { localStorage.setItem('forge-language', language); } catch { /* URL keeps the language when storage is unavailable. */ }
    const url = new URL(location.href); url.searchParams.set('lang', language);
    try { history.replaceState(null, '', url); } catch { /* A file preview may restrict history changes. */ }
    apply();
  });
  apply();
})();
