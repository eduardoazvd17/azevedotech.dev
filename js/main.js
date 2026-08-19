document.addEventListener('DOMContentLoaded', () => {
    document.body.setAttribute('data-theme', 'dark');

    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    setupTabNavigation();
    setupContactForm();
    setupBackToTop();
    setupProfileImageFlip();
    setupMobileMenu();
    setupCopyEmailButtons();
});

const sectionToPageMap = {
    'about': 'aboutMe',
    'projects': 'myProjects',
    'contact': 'contact'
};

const pageToSectionMap = {
    'aboutMe': 'about',
    'myProjects': 'projects',
    'contact': 'contact'
};

function setupTabNavigation() {
    const navLinks = document.querySelectorAll('#nav-menu a');
    const sections = document.querySelectorAll('.section');

    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');

    let targetSectionId;

    if (pageParam && pageToSectionMap[pageParam]) {
        targetSectionId = pageToSectionMap[pageParam];
    } else {
        targetSectionId = 'about';

        updateURLParameter('page', 'aboutMe');
    }

    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Remove o # do início
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                sections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');

                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');

                const pageValue = sectionToPageMap[targetId] || 'aboutMe';
                updateURLParameter('page', pageValue);
                scrollToContentTop();
            }
        });
    });
}

function updateURLParameter(key, value) {
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;

    urlParams.set(key, value);

    window.history.pushState({}, '', url.toString());
}

function scrollToContentTop() {
    const hero = document.querySelector('.hero-section');
    const stickyPoint = hero ? hero.offsetHeight : 0;

    window.scrollTo({
        top: stickyPoint,
        behavior: 'smooth'
    });
}

function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    const clearFormButton = document.getElementById('clear-form');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            if (subject && message) {
                const mailtoLink = `mailto:eduardoazvd17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
                window.location.href = mailtoLink;
                clearForm();
            }
        });
    }

    if (clearFormButton) {
        clearFormButton.addEventListener('click', clearForm);
    }

    function clearForm() {
        if (subjectInput) subjectInput.value = '';
        if (messageInput) messageInput.value = '';
    }
}

function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function setupProfileImageFlip() {
    // Animação de flip removida por preferência do usuário
}

function setupMobileMenu() {
    const header = document.querySelector('.hero-section');
    const menu = document.getElementById('nav-menu');

    if (header && menu) {
        const menuHeight = menu.offsetHeight;

        function checkScroll() {
            if (window.pageYOffset > header.offsetHeight) {
                menu.style.position = 'fixed';
                menu.style.top = '0';
                menu.style.left = '0';
                menu.style.width = '100%';

                document.body.style.paddingTop = menuHeight + 'px';
            } else {
                menu.style.position = 'static';
                document.body.style.paddingTop = '0';
            }
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        checkScroll();
    }
}

function setupCopyEmailButtons() {
    const copyButtons = document.querySelectorAll('.copy-email-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const email = button.getAttribute('data-email');
            const icon = button.querySelector('i');
            
            try {
                await navigator.clipboard.writeText(email);
                
                // Feedback visual
                const originalClass = icon.className;
                button.classList.add('copied');
                icon.className = 'fas fa-check';
                
                // Restaurar após 2 segundos
                setTimeout(() => {
                    button.classList.remove('copied');
                    icon.className = originalClass;
                }, 2000);
                
            } catch (err) {
                console.error('Erro ao copiar email:', err);
                
                // Fallback para navegadores mais antigos
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    
                    // Feedback visual
                    const originalClass = icon.className;
                    button.classList.add('copied');
                    icon.className = 'fas fa-check';
                    
                    setTimeout(() => {
                        button.classList.remove('copied');
                        icon.className = originalClass;
                    }, 2000);
                    
                } catch (err) {
                    console.error('Erro ao copiar email (fallback):', err);
                }
                
                document.body.removeChild(textArea);
            }
        });
    });
} 