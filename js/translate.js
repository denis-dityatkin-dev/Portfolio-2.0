// ==================== ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ====================

// 1. Словарь переводов (все ключи из вашей разметки)
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.works': 'Works',
    'nav.about': 'About-Me',
    'nav.contacts': 'Contacts',
    'greeting': 'Hi, I\'m Denis',
    'subtitle': 'Web Developer',
    'footer_text': 'Goodbye'
  },
  uk: {
    'nav.home': 'Головна',
    'nav.works': 'Роботи',
    'nav.about': 'Про мене',
    'nav.contacts': 'Контакти',
    'greeting': 'Привіт, я Денис',
    'subtitle': 'Веб-розробник',
    'footer_text': 'До побачення'
  }
};

// 2. Определяем текущий язык (из localStorage или по умолчанию)
let currentLang = localStorage.getItem('preferredLang') || 'ru';

// 3. Функция применения языка
function setLanguage(lang) {
  if (!translations[lang]) return;

  // Меняем атрибут lang у <html>
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLang', lang);
  currentLang = lang;

  // Проходим по всем элементам с data-i18n и меняем текст
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Синхронизируем выпадающий список (select)
  const select = document.getElementById('lang-select');
  if (select) select.value = lang;
}

// 4. Обработчик изменения select
const select = document.getElementById('lang-select');
if (select) {
  select.addEventListener('change', function() {
    setLanguage(this.value);
  });
}

// 5. При загрузке страницы применяем сохранённый язык
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});