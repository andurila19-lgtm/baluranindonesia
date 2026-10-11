import { translations } from '../data/translations';

export type Language = 'id' | 'en';

export function getCurrentLang(): Language {
  if (typeof window === 'undefined') return 'id';
  try {
    const saved = localStorage.getItem('baluran_lang') as Language;
    if (saved === 'id' || saved === 'en') return saved;
  } catch (e) {
    // ignore
  }
  return 'id';
}

export function setLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('baluran_lang', lang);
  } catch (e) {
    // ignore
  }
  document.documentElement.lang = lang;

  // Update button active states across desktop & mobile
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
        if (text.includes('<') || text.includes('\n')) {
          el.innerHTML = text.replace(/\n/g, '<br/>');
        } else {
          el.textContent = text;
        }
      }
    }
  });

  // Broadcast event
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

export function toggleLanguage() {
  const current = getCurrentLang();
  const next: Language = current === 'id' ? 'en' : 'id';
  setLanguage(next);
}

export function initI18n() {
  if (typeof window === 'undefined') return;
  const initial = getCurrentLang();
  setLanguage(initial);
}

// Auto-run when script loads or DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initI18n());
  } else {
    initI18n();
  }
}
