/**
 * Preferências compartilhadas por todas as páginas: idioma e tema.
 *
 * Cada página declara <div class="pref-menu" data-lang-menu></div> e
 * <div class="pref-menu" data-theme-menu></div> e chama
 * Preferences.init({ fallback, onChange }).
 *
 * As escolhas ficam salvas no navegador. Os parâmetros ?lang= e ?theme= são
 * aceitos na URL, aplicados e salvos, e em seguida removidos dela.
 */
(function () {
    const LANG_KEY = 'language';
    const THEME_KEY = 'theme';

    // Bandeiras em SVG inline: emojis de bandeira não aparecem no Windows.
    const FLAGS = {
        pt: '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#229e45"/><path d="M14 2.6 25.4 10 14 17.4 2.6 10z" fill="#f8e509"/><circle cx="14" cy="10" r="4.6" fill="#2b49a3"/><path d="M9.6 9.1c2.9-.5 6.2.1 8.8 1.6" stroke="#fff" stroke-width=".8" fill="none"/></svg>',
        en: '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#fff"/><g fill="#b22234"><rect width="28" height="1.54"/><rect y="3.08" width="28" height="1.54"/><rect y="6.15" width="28" height="1.54"/><rect y="9.23" width="28" height="1.54"/><rect y="12.31" width="28" height="1.54"/><rect y="15.38" width="28" height="1.54"/><rect y="18.46" width="28" height="1.54"/></g><rect width="12" height="10.77" fill="#3c3b6e"/></svg>',
        es: '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#c60b1e"/><rect y="5" width="28" height="10" fill="#ffc400"/></svg>'
    };

    const THEME_ICONS = {
        system: '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 16.5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        // Sol laranja e lua roxa clara, para o tema ser reconhecido de relance.
        light: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.5" fill="#ff9f0a" stroke="#ff9500" stroke-width="1.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M4.3 15.7l1.4-1.4M14.3 5.7l1.4-1.4" stroke="#ff9500" stroke-width="1.5" stroke-linecap="round"/></svg>',
        dark: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 12.3A6.8 6.8 0 0 1 7.7 3.5a6.8 6.8 0 1 0 8.8 8.8Z" fill="#c4b5fd" stroke="#a78bfa" stroke-width="1.5" stroke-linejoin="round"/></svg>'
    };

    const CARET = '<svg class="pref-menu-caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const LANGUAGES = [
        { code: 'pt', short: 'PT', name: 'Português' },
        { code: 'en', short: 'EN', name: 'English' },
        { code: 'es', short: 'ES', name: 'Español' }
    ];

    const THEMES = ['system', 'light', 'dark'];

    const THEME_LABELS = {
        pt: { menu: 'Tema', system: 'Automático', light: 'Claro', dark: 'Escuro' },
        en: { menu: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
        es: { menu: 'Tema', system: 'Automático', light: 'Claro', dark: 'Oscuro' }
    };

    const SUPPORTED = LANGUAGES.map(language => language.code);

    let onChangeHandler = null;
    let currentLang = null;
    let currentTheme = 'system';

    function readStorage(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }

    function writeStorage(key, value) {
        try {
            if (value === null) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, value);
            }
        } catch (e) {
            // Sem storage (aba privada, cookies bloqueados): vale só para esta página.
        }
    }

    function isSupported(lang) {
        return SUPPORTED.includes(lang);
    }

    function resolveInitialLanguage(params, fallback) {
        const urlLang = params.get('lang');
        if (isSupported(urlLang)) return urlLang;

        const savedLang = readStorage(LANG_KEY);
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

    function resolveInitialTheme(params) {
        const urlTheme = params.get('theme');
        if (urlTheme === 'light' || urlTheme === 'dark') return urlTheme;

        const savedTheme = readStorage(THEME_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

        return 'system';
    }

    // Remove ?lang= e ?theme= da URL sem recarregar, mantendo o resto.
    function cleanUrl() {
        const url = new URL(window.location.href);
        if (!url.searchParams.has('lang') && !url.searchParams.has('theme')) return;

        url.searchParams.delete('lang');
        url.searchParams.delete('theme');
        window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    }

    function buildMenu(container, items, onSelect) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'pref-menu-toggle';
        toggle.setAttribute('aria-haspopup', 'listbox');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = `<span class="pref-menu-icon"></span><span class="pref-menu-code"></span>${CARET}`;

        const list = document.createElement('ul');
        list.className = 'pref-menu-list';
        list.setAttribute('role', 'listbox');
        list.hidden = true;

        items.forEach(value => {
            const item = document.createElement('li');
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'pref-menu-option';
            option.setAttribute('role', 'option');
            option.dataset.value = value;
            option.innerHTML = '<span class="pref-menu-icon"></span><span class="pref-menu-label"></span>';
            option.addEventListener('click', () => {
                close(container);
                onSelect(value);
                toggle.focus({ preventScroll: true });
            });
            item.appendChild(option);
            list.appendChild(item);
        });

        toggle.addEventListener('click', () => {
            const wasClosed = list.hidden;
            closeAll();
            if (wasClosed) open(container);
        });

        list.addEventListener('keydown', (event) => {
            const options = Array.from(list.querySelectorAll('.pref-menu-option'));
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
        const list = container.querySelector('.pref-menu-list');
        list.hidden = false;
        container.classList.add('open');
        container.querySelector('.pref-menu-toggle').setAttribute('aria-expanded', 'true');

        // O foco não pode rolar a página: em páginas sem barra fixa, isso a levaria ao topo.
        const selected = list.querySelector('[aria-selected="true"]') || list.querySelector('.pref-menu-option');
        selected.focus({ preventScroll: true });
    }

    function close(container) {
        container.querySelector('.pref-menu-list').hidden = true;
        container.classList.remove('open');
        container.querySelector('.pref-menu-toggle').setAttribute('aria-expanded', 'false');
    }

    function closeAll() {
        document.querySelectorAll('.pref-menu.open').forEach(close);
    }

    function renderLanguage() {
        const language = LANGUAGES.find(item => item.code === currentLang);

        document.querySelectorAll('[data-lang-menu]').forEach(container => {
            const toggle = container.querySelector('.pref-menu-toggle');
            toggle.querySelector('.pref-menu-icon').innerHTML = FLAGS[currentLang];
            toggle.querySelector('.pref-menu-code').textContent = language.short;
            toggle.setAttribute('aria-label', language.name);

            container.querySelectorAll('.pref-menu-option').forEach(option => {
                const item = LANGUAGES.find(entry => entry.code === option.dataset.value);
                option.querySelector('.pref-menu-icon').innerHTML = FLAGS[item.code];
                option.querySelector('.pref-menu-label').textContent = item.name;
                option.setAttribute('aria-selected', option.dataset.value === currentLang ? 'true' : 'false');
            });
        });
    }

    // Os nomes das opções de tema dependem do idioma, então são redesenhados nos dois casos.
    function renderTheme() {
        const labels = THEME_LABELS[currentLang];

        document.querySelectorAll('[data-theme-menu]').forEach(container => {
            const toggle = container.querySelector('.pref-menu-toggle');
            toggle.querySelector('.pref-menu-icon').innerHTML = THEME_ICONS[currentTheme];
            toggle.setAttribute('aria-label', `${labels.menu}: ${labels[currentTheme]}`);

            container.querySelectorAll('.pref-menu-option').forEach(option => {
                const theme = option.dataset.value;
                option.querySelector('.pref-menu-icon').innerHTML = THEME_ICONS[theme];
                option.querySelector('.pref-menu-label').textContent = labels[theme];
                option.setAttribute('aria-selected', theme === currentTheme ? 'true' : 'false');
            });
        });
    }

    function setTheme(theme) {
        currentTheme = THEMES.includes(theme) ? theme : 'system';

        // "Automático" não grava atributo: o CSS segue prefers-color-scheme.
        if (currentTheme === 'system') {
            delete document.documentElement.dataset.theme;
            writeStorage(THEME_KEY, null);
        } else {
            document.documentElement.dataset.theme = currentTheme;
            writeStorage(THEME_KEY, currentTheme);
        }

        if (currentLang) renderTheme();
    }

    function setLanguage(lang) {
        if (!isSupported(lang)) lang = SUPPORTED[0];

        currentLang = lang;
        writeStorage(LANG_KEY, lang);
        document.documentElement.lang = lang;
        renderLanguage();
        renderTheme();

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

        const params = new URLSearchParams(window.location.search);
        const initialLang = resolveInitialLanguage(params, fallback);
        const initialTheme = resolveInitialTheme(params);
        cleanUrl();

        document.querySelectorAll('[data-lang-menu]').forEach(container => buildMenu(container, SUPPORTED, setLanguage));
        document.querySelectorAll('[data-theme-menu]').forEach(container => buildMenu(container, THEMES, setTheme));

        document.addEventListener('click', (event) => {
            document.querySelectorAll('.pref-menu.open').forEach(container => {
                if (!container.contains(event.target)) close(container);
            });
        });

        setTheme(initialTheme);
        setLanguage(initialLang);
    }

    /**
     * Aplica um dicionário { chave: texto } aos elementos com data-i18n e
     * data-i18n-aria (aria-label).
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

    window.Preferences = {
        init,
        applyTranslations,
        get language() {
            return currentLang;
        }
    };
})();
