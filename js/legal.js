// Páginas de Termos de Uso e Política de Privacidade: cada idioma é um
// <article class="legal-doc" data-doc-lang="..."> e só o ativo fica visível.
document.addEventListener('DOMContentLoaded', () => {
    const backLink = document.querySelector('.legal-back-link');
    const backLabels = backLink ? JSON.parse(backLink.dataset.backLabel) : {};

    LangMenu.init({
        // Os apps abrem esta página sem ?lang: vale o idioma salvo, depois o do
        // dispositivo e, se nenhum for suportado, o inglês.
        fallback: 'en',
        onChange: (lang) => {
            document.querySelectorAll('.legal-doc').forEach(doc => {
                const isActive = doc.dataset.docLang === lang;
                doc.classList.toggle('active', isActive);
                if (isActive) {
                    document.title = doc.dataset.title;
                    document.querySelector('meta[name="description"]').setAttribute('content', doc.dataset.title);
                }
            });

            if (backLink) {
                backLink.querySelector('span').textContent = backLabels[lang];
                backLink.setAttribute('href', `../?lang=${lang}`);
            }
        }
    });
});
