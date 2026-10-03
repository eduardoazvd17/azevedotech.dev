document.addEventListener('DOMContentLoaded', () => {
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    setupScrollSpy();
    setupCopyButtons();
});

function setupScrollSpy() {
    const navLinks = document.querySelectorAll('#nav-menu a[data-section]');
    const sections = document.querySelectorAll('main .section');

    if (!navLinks.length || !sections.length) return;

    const linkBySection = {};
    navLinks.forEach(link => {
        linkBySection[link.dataset.section] = link;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = linkBySection[entry.target.id];
            if (!link) return;

            if (entry.isIntersecting) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
}

function setupCopyButtons() {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(button.dataset.copy);
            } catch (err) {
                // Sem permissão para a área de transferência: o link mailto continua disponível.
                return;
            }

            button.textContent = t('copied');
            button.classList.add('copied');

            setTimeout(() => {
                button.textContent = t('copy');
                button.classList.remove('copied');
            }, 2000);
        });
    });
}
