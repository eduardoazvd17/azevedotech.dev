/**
 * Seletor de idioma compartilhado por todas as páginas do site.
 *
 * Cada página declara um <div class="lang-menu" data-lang-menu></div> e chama
 * LangMenu.init({ fallback, onChange }). O idioma escolhido fica salvo em
 * localStorage e no parâmetro ?lang= da URL, então a escolha feita na home
 * acompanha o usuário nas páginas de projeto e nos termos.
 */
(function () {
    const STORAGE_KEY = 'language';

    // Bandeiras em SVG inline: emojis de bandeira não aparecem no Windows.
    const FLAGS = {
        pt: '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#229e45"/><path d="M14 2.6 25.4 10 14 17.4 2.6 10z" fill="#f8e509"/><circle cx="14" cy="10" r="4.6" fill="#2b49a3"/><path d="M9.6 9.1c2.9-.5 6.2.1 8.8 1.6" stroke="#fff" stroke-width=".8" fill="none"/></svg>',
        en: '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#fff"/><g fill="#b22234"><rect width="28" height="1.54"/><rect y="3.08" width="28" height="1.54"/><rect y="6.15" width="28" height="1.54"/><rect y="9.23" width="28" height="1.54"/><rect y="12.31" width="28" height="1.54"/><rect y="15.38" width="28" height="1.54"/><rect y="18.46" width="28" height="1.54"/></g><rect width="12" height="10.77" fill="#3c3b6e"/></svg>',
        es: '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#c60b1e"/><rect y="5" width="28" height="10" fill="#ffc400"/></svg>'
    };

    const LANGUAGES = [
        { code: 'pt', short: 'PT', name: 'Português' },
        { code: 'en', short: 'EN', name: 'English' },
        { code: 'es', short: 'ES', name: 'Español' }
    ];

    const SUPPORTED = LANGUAGES.map(language => language.code);

    let onChangeHandler = null;
    let currentLang = null;

    function readStorage() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function writeStorage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // Sem storage (aba privada, cookies bloqueados): segue só com a URL.
        }
    }

    function isSupported(lang) {
        return SUPPORTED.includes(lang);
    }

    function resolveInitial(fallback) {
        const urlLang = new URLSearchParams(window.location.search).get('lang');
        if (isSupported(urlLang)) return urlLang;

        const savedLang = readStorage();
        if (isSupported(savedLang)) return savedLang;

        // Percorre os idiomas preferidos do dispositivo, na ordem definida pelo usuário.
        const deviceLangs = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || ''];

        for (const deviceLang of deviceLangs) {
            const code = deviceLang.toLowerCase().split('-')[0];
            if (isSupported(code)) return code;
        }

        return fallback;
    }

    function syncUrl(lang) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
    }

    function buildMenu(container) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'lang-menu-toggle';
        toggle.setAttribute('aria-haspopup', 'listbox');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<span class="lang-flag"></span><span class="lang-menu-code"></span>' +
            '<svg class="lang-menu-caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

        const list = document.createElement('ul');
        list.className = 'lang-menu-list';
        list.setAttribute('role', 'listbox');
        list.hidden = true;

        LANGUAGES.forEach(language => {
            const item = document.createElement('li');
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'lang-menu-option';
            option.setAttribute('role', 'option');
            option.dataset.lang = language.code;
            option.innerHTML = `<span class="lang-flag">${FLAGS[language.code]}</span><span>${language.name}</span>`;
            option.addEventListener('click', () => {
                close(container);
                setLanguage(language.code);
                toggle.focus({ preventScroll: true });
            });
            item.appendChild(option);
            list.appendChild(item);
        });

        toggle.addEventListener('click', () => {
            if (list.hidden) {
                open(container);
            } else {
                close(container);
            }
        });

        list.addEventListener('keydown', (event) => {
            const options = Array.from(list.querySelectorAll('.lang-menu-option'));
            const index = options.indexOf(document.activeElement);

            if (event.key === 'ArrowDown') {
                event.preventDefault();
                options[(index + 1) % options.length].focus({ preventScroll: true });
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                options[(index - 1 + options.length) % options.length].focus({ preventScroll: true });
            }
        });

        container.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !list.hidden) {
                close(container);
                toggle.focus({ preventScroll: true });
            }
        });

        container.appendChild(toggle);
        container.appendChild(list);
    }

    function open(container) {
        const list = container.querySelector('.lang-menu-list');
        list.hidden = false;
        container.classList.add('open');
        container.querySelector('.lang-menu-toggle').setAttribute('aria-expanded', 'true');

        const selected = list.querySelector('[aria-selected="true"]') || list.querySelector('.lang-menu-option');
        selected.focus({ preventScroll: true });
    }

    function close(container) {
        container.querySelector('.lang-menu-list').hidden = true;
        container.classList.remove('open');
        container.querySelector('.lang-menu-toggle').setAttribute('aria-expanded', 'false');
    }

    function render(lang) {
        const language = LANGUAGES.find(item => item.code === lang);

        document.querySelectorAll('[data-lang-menu]').forEach(container => {
            const toggle = container.querySelector('.lang-menu-toggle');
            toggle.querySelector('.lang-flag').innerHTML = FLAGS[lang];
            toggle.querySelector('.lang-menu-code').textContent = language.short;
            toggle.setAttribute('aria-label', language.name);

            container.querySelectorAll('.lang-menu-option').forEach(option => {
                option.setAttribute('aria-selected', option.dataset.lang === lang ? 'true' : 'false');
            });
        });
    }

    function setLanguage(lang) {
        if (!isSupported(lang)) lang = SUPPORTED[0];

        currentLang = lang;
        writeStorage(lang);
        syncUrl(lang);
        render(lang);
        document.documentElement.lang = lang;

        if (onChangeHandler) keepScrollPosition(() => onChangeHandler(lang));
    }

    // Os textos mudam de tamanho entre idiomas e empurram o conteúdo. Guarda o
    // elemento que está no topo da tela e o recoloca no mesmo lugar depois.
    function keepScrollPosition(change) {
        const header = document.querySelector('.site-header, .project-topbar');
        const top = header && getComputedStyle(header).position === 'sticky' ? header.offsetHeight : 0;
        const anchor = window.scrollY > 0 ? document.elementFromPoint(window.innerWidth / 2, top + 1) : null;
        const before = anchor ? anchor.getBoundingClientRect().top : 0;

        change();

        if (anchor && anchor.isConnected && anchor.checkVisibility()) {
            const delta = anchor.getBoundingClientRect().top - before;
            if (delta) window.scrollTo({ top: window.scrollY + delta, behavior: 'instant' });
        }
    }

    function init({ fallback = 'en', onChange } = {}) {
        onChangeHandler = onChange;

        document.querySelectorAll('[data-lang-menu]').forEach(buildMenu);

        document.addEventListener('click', (event) => {
            document.querySelectorAll('[data-lang-menu].open').forEach(container => {
                if (!container.contains(event.target)) close(container);
            });
        });

        setLanguage(resolveInitial(fallback));
    }

    /**
     * Aplica um dicionário { chave: texto } aos elementos com data-i18n.
     * Usado pelas páginas de projeto, que trazem as próprias traduções.
     */
    function applyTranslations(dictionary) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const value = dictionary[element.dataset.i18n];
            if (value !== undefined) element.textContent = value;
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const value = dictionary[element.dataset.i18nAria];
            if (value !== undefined) element.setAttribute('aria-label', value);
        });
    }

    window.LangMenu = {
        init,
        setLanguage,
        applyTranslations,
        get current() {
            return currentLang;
        }
    };
})();
