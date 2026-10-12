document.addEventListener('DOMContentLoaded', () => {
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    setupFooterHeight();
    setupScrollSpy();
    setupCopyButtons();
    setupTechToggle();
});

// Expõe a altura do rodapé para o CSS da última seção (ver styles.css).
function setupFooterHeight() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    const update = () => document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
    update();
    new ResizeObserver(update).observe(footer);
}

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

            // A troca do texto do botão não é anunciada; a região aria-live avisa o leitor de tela.
            const status = document.getElementById('copy-status');
            if (status) {
                status.textContent = '';
                setTimeout(() => { status.textContent = t('copied_status'); }, 50);
            }

            setTimeout(() => {
                button.textContent = t('copy');
                button.classList.remove('copied');
            }, 2000);
        });
    });
}

// Pausa e retoma o carrossel de tecnologias. O rótulo acessível segue o estado
// pela chave data-i18n-aria, então também acompanha a troca de idioma.
function setupTechToggle() {
    const button = document.querySelector('.tech-toggle');
    const marquee = document.querySelector('.tech-marquee');
    if (!button || !marquee) return;

    button.addEventListener('click', () => {
        const paused = marquee.classList.toggle('paused');
        button.classList.toggle('paused', paused);
        button.dataset.i18nAria = paused ? 'tech_play' : 'tech_pause';
        button.setAttribute('aria-label', t(button.dataset.i18nAria));
    });
}
