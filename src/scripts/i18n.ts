import { translations } from '../data/translations';

export type Language = 'id' | 'en';

export function getCurrentLang(): Language {
  if (typeof window === 'undefined') return 'id';
  const saved = localStorage.getItem('baluran_lang') as Language;
  if (saved === 'id' || saved === 'en') return saved;
  return 'id';
}

export function setLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('baluran_lang', lang);
  document.documentElement.lang = lang;

  // Update buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[key]) {
      const text = translations[key][lang];
      if (text) {
        // If it contains newlines, replace with <br/> or textContent
        if (text.includes('\n')) {
          el.innerHTML = text.replace(/\n/g, '<br/>');
        } else {
          el.textContent = text;
        }
      }
    }
  });

  // Dispatch global event for other components if needed
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Auto initialize on DOMContentLoaded or immediate execution
export function initI18n() {
  if (typeof window === 'undefined') return;
  const initial = getCurrentLang();
  setLanguage(initial);
}
