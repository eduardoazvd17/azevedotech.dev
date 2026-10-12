// Páginas de detalhes de projeto. Cada página define window.PROJECT_I18N
// com { pt, en, es } e os textos são trocados pelos atributos data-i18n.
document.addEventListener('DOMContentLoaded', () => {
    const dictionaries = window.PROJECT_I18N;

    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();

    // "Voltar ao topo" rola a página em JS: no 404 o <base href="/"> faria o #top abrir a home.
    document.querySelectorAll('[data-scroll-top]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0 });
        });
    });

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
