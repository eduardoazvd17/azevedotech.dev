// Páginas de detalhes de projeto. Cada página define window.PROJECT_I18N
// com { pt, en, es } e os textos são trocados pelos atributos data-i18n.
document.addEventListener('DOMContentLoaded', () => {
    const dictionaries = window.PROJECT_I18N;

    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();

    Preferences.init({
        fallback: 'en',
        onChange: (lang) => {
            const dictionary = dictionaries[lang];
            Preferences.applyTranslations(dictionary);

            document.title = dictionary.meta_title;
            document.querySelector('meta[name="description"]').setAttribute('content', dictionary.meta_description);
        }
    });
});
