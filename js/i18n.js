const translations = {
    // Português (padrão)
    'pt': {
        // Navegação
        'nav_about': 'Sobre mim',
        'nav_projects': 'Meus projetos',
        'nav_contact': 'Contato',

        // Marca / Hero
        'hero_tagline': 'Soluções mobile e software sob medida, do MVP à publicação nas lojas.',
        'stat_experience_label': 'anos de experiência',
        'stat_projects_label': 'projetos entregues',

        // Cabeçalho
        'profile_title': 'Engenheiro de Software | Cross-Platform | Full Stack | Especialista em Flutter',

        // Sobre mim
        'about': 'Sobre mim',
        'eyebrow_about': 'Sobre',
        'presentation_text_1': 'Sou um engenheiro de software com 7 anos de experiência profissional, especializado no desenvolvimento de soluções mobile multiplataforma com o framework Flutter. Ao longo da minha carreira, liderei projetos mobile de forma independente, desenvolvi soluções para instituições financeiras e implementei melhorias significativas que otimizaram a performance de aplicativos. Meu foco está na criação de soluções performáticas, inovadoras e escaláveis, sempre priorizando alta qualidade e melhoria contínua da experiência do usuário.',
        'presentation_text_2': 'Possuo ampla experiência em diversas áreas do Flutter, incluindo internacionalização, modularização, gerenciamento de estados e rotas, criação de widgets personalizados, desenvolvimento de packages reutilizáveis, automação de pipelines CI/CD com Codemagic, publicação de aplicativos nas lojas e realização de testes unitários e de widgets. Sigo práticas rigorosas de gerenciamento eficiente de memória para evitar memory leaks, e adoto os princípios SOLID e Clean Code para garantir um código limpo, bem estruturado e de fácil manutenção.',
        'presentation_text_3': 'Valorizo a comunicação clara e o trabalho colaborativo em equipe, sempre buscando contribuir de forma eficiente e construtiva para garantir entregas de alta qualidade e alinhamento entre os times. Acredito que a sinergia entre profissionais é fundamental para o sucesso de qualquer projeto.',
        'presentation_text_4': 'Além da minha expertise em Flutter, possuo conhecimento sólido em linguagens como Java, C#, Kotlin e Swift, o que me permite atuar com versatilidade em diferentes tecnologias e stacks, atendendo a diversas demandas no desenvolvimento de software.',
        'skills_title': 'Linguagens e Tecnologias',

        // Projetos
        'projects': 'Meus projetos',
        'eyebrow_projects': 'Portfólio',
        'project_preview': 'Website',
        'project_repository': 'Repositório',
        'project_download': 'Download',
        'project_android': 'Android',
        'project_ios': 'iOS',

        // Badges de categoria
        'badge_mobile': 'App Mobile',
        'badge_flutter_package': 'Pacote Flutter',
        'badge_desktop': 'App Desktop',
        'badge_web': 'App Web',
        'badge_cross_platform': 'Multiplataforma',

        // More Projects
        'more_projects_title': 'Conheça mais projetos',
        'more_projects_description': 'Quer conhecer mais projetos em que trabalhei? Visite meu perfil no GitHub para descobrir outros repositórios, contribuições e projetos em desenvolvimento.',
        'more_projects_link': 'Ver mais projetos',

        // Investhelper
        'investhelper_title': 'InvestHelper',
        'investhelper_description': 'Um app para controlar seus investimentos e ter um panorama completo contendo todos os valores necessários para o controle de compra, venda, lucro, preço médio e preço de compra e venda. Além de gerar relatórios para facilitar a visualização pelo computador.',

        // FCryptor
        'fcryptor_title': 'FCryptor',
        'fcryptor_description': 'FCryptor é um aplicativo de criptografia de arquivos multiplataforma desenvolvido com Flutter. Com suporte para dispositivos móveis, web e desktop, ele oferece uma maneira segura e prática de proteger seus arquivos com criptografia AES-256 e uma interface intuitiva.',

        // slider_bar_chart
        'slider_bar_chart_title': 'slider_bar_chart',
        'slider_bar_chart_description': 'Uma forma simplificada de se criar gráficos de barra no Flutter, permitindo scroll na horizontal e algumas opções de customização como cores, textos e tooltips. Essa lib foi criada com o intuito de resolver um problema, no qual eu precisava de um gráfico de barra para exibir dados de 2 fontes de forma espelhada e que habilitasse scroll.',

        // AudioTexter
        'audiotexter_title': 'AudioTexter',
        'audiotexter_description': 'AudioTexter é um aplicativo desenvolvido em Flutter que permite gravar áudios e transcrevê-los em texto.',

        // My Finances
        'myfinances_title': 'My Finances',
        'myfinances_description': 'Um aplicativo para controle de finanças no qual te permitirá controlar seus gastos mensais, investimentos e salvar anotações importantes.',

        // GitF
        'gitf_title': 'GitF',
        'gitf_description': 'Um gerenciador de repositórios Git para iniciantes. Esse projeto foi criado apenas para testar o desenvolvimento de apps desktop com o Flutter.',

        // credentials_manager
        'credentials_manager_title': 'credentials_manager',
        'credentials_manager_description': 'Uma biblioteca para gerenciar de forma fácil as credenciais do seu app Flutter localmente, utilizando autenticação biométrica. Ela foi criada com o intuito de agilizar a solução de um problema, no qual eu precisava armazenar credenciais de forma segura em um dispositivo, permitindo que o usuário fizesse login com essas credenciais utilizando a biometria.',

        // simple_overlay
        'simple_overlay_title': 'simple_overlay',
        'simple_overlay_description': 'Uma biblioteca simples e prática para criar sobreposições de forma fácil no seu app Flutter. Com ele, você pode sobrepor um widget personalizado a qualquer outro widget. O foco deste pacote é agilizar a criação e gerenciamento do ciclo de vida de um Overlay.',

        // Contato
        'contact': 'Contato',
        'eyebrow_contact': 'Contato',
        'contact_intro': 'Fique a vontade para entrar em contato comigo usando uma das opções abaixo:',
        'contact_social': 'Me encontre nas redes:',
        'contact_email': 'Me envie um e-mail:',
        'contactVia': 'Entre em contato por:',
        'sendEmail': 'Me envie um email:',
        'subject': 'Assunto',
        'message': 'Mensagem',
        'clear_fields': 'Limpar campos',
        'send': 'Enviar',

        // Rodapé
        'back_to_top': 'Voltar ao topo',
        'copyright': 'Todos os direitos reservados.',
        'company_name': 'Azevedo Tech Solutions',
        'company_cnpj': 'CNPJ: 55.705.600/0001-47',

        // MoveRio
        'moverio_title': 'MoveRio',
        'moverio_description': 'Aplicativo gratuito que facilita sua mobilidade no Rio de Janeiro. Consulte linhas de ônibus, visualize itinerários completos, encontre pontos de parada próximos, abra rotas no app de mapas do seu dispositivo e acompanhe seu trajeto em tempo real usando a localização do seu dispositivo. Ideal para o dia a dia de quem depende do transporte público.',

        // easy_binding
        'easy_binding_title': 'easy_binding',
        'easy_binding_description': 'Um pacote Flutter leve para gerenciar o ciclo de vida de dependências em rotas. Inspirado nos bindings do GetX, mas agnóstico de framework - funciona com qualquer solução de injeção de dependências como GetIt, Provider ou Riverpod.',

        // StackBudget
        'stackbudget_title': 'StackBudget',
        'stackbudget_description': 'Um aplicativo de planejamento financeiro que permite aos usuários acompanhar seus gastos mensais de forma organizada e eficiente. Com interface intuitiva e ferramentas para controle de orçamento, ajudando na gestão financeira pessoal.',

        // AutoCarefy
        'autocarefy_title': 'AutoCarefy',
        'autocarefy_description': 'AutoCarefy ajuda você a cuidar do seu carro de forma simples, moderna e inteligente. Controle manutenções, acompanhe revisões, monitore gastos e consulte a tabela FIPE do seu veículo em segundos. Mantenha todas as informações importantes do seu carro organizadas em um só lugar e receba lembretes para nunca esquecer uma manutenção importante.',
    },

    // Inglês
    'en': {
        // Navegação
        'nav_about': 'About me',
        'nav_projects': 'My projects',
        'nav_contact': 'Contact',

        // Marca / Hero
        'hero_tagline': 'Custom mobile and software solutions, from MVP to store publication.',
        'stat_experience_label': 'years of experience',
        'stat_projects_label': 'projects delivered',

        // Cabeçalho
        'profile_title': 'Software Engineer | Cross-Platform | Full Stack | Flutter Specialist',

        // Sobre mim
        'about': 'About me',
        'eyebrow_about': 'About',
        'presentation_text_1': 'I am a software engineer with 7 years of professional experience, specialized in developing cross-platform mobile solutions with the Flutter framework. Throughout my career, I have led mobile projects independently, developed solutions for financial institutions, and implemented significant improvements that optimized app performance. My focus is on creating high-performance, innovative, and scalable solutions, always prioritizing high quality and continuous improvement of user experience.',
        'presentation_text_2': 'I have extensive experience in various areas of Flutter, including internationalization, modularization, state and route management, creation of custom widgets, development of reusable packages, automation of CI/CD pipelines with Codemagic, publishing applications to stores, and conducting unit and widget tests. I follow rigorous efficient memory management practices to avoid memory leaks, and adopt SOLID principles and Clean Code to ensure clean, well-structured, and easily maintainable code.',
        'presentation_text_3': 'I value clear communication and collaborative teamwork, always seeking to contribute efficiently and constructively to ensure high-quality deliveries and alignment between teams. I believe that synergy between professionals is fundamental to the success of any project.',
        'presentation_text_4': 'Beyond my expertise in Flutter, I have solid knowledge in languages such as Java, C#, Kotlin, and Swift, which allows me to work with versatility across different technologies and stacks, meeting various demands in software development.',
        'skills_title': 'Languages and Technologies',

        // Projetos
        'projects': 'My projects',
        'eyebrow_projects': 'Portfolio',
        'project_preview': 'Website',
        'project_repository': 'Repository',
        'project_download': 'Download',
        'project_android': 'Android',
        'project_ios': 'iOS',

        // Badges de categoria
        'badge_mobile': 'Mobile App',
        'badge_flutter_package': 'Flutter Package',
        'badge_desktop': 'Desktop App',
        'badge_web': 'Web App',
        'badge_cross_platform': 'Cross-Platform',

        // More Projects
        'more_projects_title': 'Explore more projects',
        'more_projects_description': 'Want to know more about the projects I worked on? Visit my GitHub profile to discover other repositories, contributions, and projects in development.',
        'more_projects_link': 'See more projects',

        // Investhelper
        'investhelper_title': 'InvestHelper',
        'investhelper_description': 'An app to control your investments and have a complete overview containing all the necessary values for controlling purchases, sales, profits, average price, and buy/sell prices. It also generates reports to facilitate visualization on the computer.',

        // FCryptor
        'fcryptor_title': 'FCryptor',
        'fcryptor_description': 'FCryptor is a cross-platform file encryption application developed with Flutter. With support for mobile devices, web, and desktop, it offers a secure and practical way to protect your files with AES-256 encryption and an intuitive interface.',

        // slider_bar_chart
        'slider_bar_chart_title': 'slider_bar_chart',
        'slider_bar_chart_description': 'A simplified way to create bar charts in Flutter, allowing horizontal scrolling and some customization options such as colors, texts, and tooltips. This library was created to solve a problem where I needed a bar chart to display data from two sources in a mirrored way and that enabled scrolling.',

        // AudioTexter
        'audiotexter_title': 'AudioTexter',
        'audiotexter_description': 'AudioTexter is an application developed in Flutter that allows you to record audio and transcribe it into text.',

        // My Finances
        'myfinances_title': 'My Finances',
        'myfinances_description': 'A finance control application that allows you to track your monthly expenses, investments, and save important notes.',

        // GitF
        'gitf_title': 'GitF',
        'gitf_description': 'A Git repository manager for beginners. This project was created just to test desktop app development with Flutter.',

        // credentials_manager
        'credentials_manager_title': 'credentials_manager',
        'credentials_manager_description': 'A library to easily manage your Flutter app credentials locally, using biometric authentication. It was created to expedite the solution to a problem where I needed to securely store credentials on a device, allowing the user to log in with those credentials using biometrics.',

        // simple_overlay
        'simple_overlay_title': 'simple_overlay',
        'simple_overlay_description': 'A simple and practical library to easily create overlays in your Flutter app. With it, you can overlay a custom widget on any other widget. The focus of this package is to streamline the creation and lifecycle management of an Overlay.',

        // Contato
        'contact': 'Contact',
        'eyebrow_contact': 'Contact',
        'contact_intro': 'Feel free to contact me using one of the options below:',
        'contact_social': 'Find me on social media:',
        'contact_email': 'Send me an email:',
        'contactVia': 'Contact me via:',
        'sendEmail': 'Send me an email:',
        'subject': 'Subject',
        'message': 'Message',
        'clear_fields': 'Clear fields',
        'send': 'Send',

        // Rodapé
        'back_to_top': 'Back to top',
        'copyright': 'All rights reserved.',
        'company_name': 'Azevedo Tech Solutions',
        'company_cnpj': 'CNPJ: 55.705.600/0001-47',

        // MoveRio
        'moverio_title': 'MoveRio',
        'moverio_description': 'Free app that facilitates your mobility in Rio de Janeiro. Check bus lines, view complete itineraries, find nearby bus stops, open routes on your device\'s map app, and track your route in real-time using your device\'s location. Ideal for everyday use by those who depend on public transportation.',

        // easy_binding
        'easy_binding_title': 'easy_binding',
        'easy_binding_description': 'A lightweight Flutter package for managing dependencies lifecycle in routes. Inspired by GetX bindings but framework-agnostic - works with any dependency injection solution like GetIt, Provider, or Riverpod.',

        // StackBudget
        'stackbudget_title': 'StackBudget',
        'stackbudget_description': 'A financial planning application that allows users to track their monthly expenses in an organized and efficient way. With an intuitive interface and budget control tools, helping with personal financial management.',

        // AutoCarefy
        'autocarefy_title': 'AutoCarefy',
        'autocarefy_description': 'AutoCarefy helps you take care of your car in a simple, modern, and intelligent way. Control maintenance, track servicing, monitor expenses, and consult your vehicle\'s FIPE table in seconds. Keep all your important car information organized in one place and receive reminders so you never forget important maintenance.',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    setupLanguageButtons();
});

function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    // Se não houver parâmetro 'page', adiciona com o valor padrão 'aboutMe'
    if (!urlParams.has('page')) {
        // Atualiza a URL sem recarregar a página
        const url = new URL(window.location.href);
        url.searchParams.set('page', 'aboutMe');
        window.history.replaceState({}, '', url.toString());
    }

    if (urlLang && translations[urlLang]) {
        applyLanguage(urlLang);
    } else if (urlLang && !translations[urlLang]) {
        applyLanguage('pt');
    } else {
        const savedLang = localStorage.getItem('language');

        if (savedLang && translations[savedLang]) {
            applyLanguage(savedLang);
        } else {
            const browserLang = navigator.language.split('-')[0];
            const lang = translations[browserLang] ? browserLang : 'pt';
            applyLanguage(lang);
        }
    }
}

function applyLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Idioma '${lang}' não suportado. Usando o padrão (pt).`);
        lang = 'pt';
    }

    localStorage.setItem('language', lang);
    updateLanguageButtons(lang);

    // Atualiza o parâmetro 'lang' na URL, mantendo o parâmetro 'page'
    updateURLWithLanguage(lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    translateSpecificElements(lang);
}

/**
 * Atualiza a URL com o idioma selecionado, mantendo outros parâmetros
 * @param {string} lang - O código do idioma
 */
function updateURLWithLanguage(lang) {
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;

    // Salva o valor atual da página, se existir
    const currentPage = urlParams.get('page');

    urlParams.set('lang', lang);

    // Se não houver parâmetro 'page', adiciona com o valor padrão 'aboutMe'
    if (!currentPage) {
        urlParams.set('page', 'aboutMe');
    }

    // Atualiza a URL sem recarregar a página
    window.history.pushState({}, '', url.toString());
}

/**
 * Traduz elementos específicos que não usam o atributo data-i18n
 * @param {string} lang - O código do idioma
 */
function translateSpecificElements(lang) {
    document.querySelectorAll('#nav-menu a span').forEach(element => {
        const section = element.parentElement.getAttribute('data-section');
        if (section === 'about') element.textContent = translations[lang].nav_about;
        if (section === 'projects') element.textContent = translations[lang].nav_projects;
        if (section === 'contact') element.textContent = translations[lang].nav_contact;
    });

    document.querySelectorAll('.section-title').forEach(element => {
        const section = element.closest('.section').id;
        if (section === 'about') element.textContent = translations[lang].about;
        if (section === 'projects') element.textContent = translations[lang].projects;
        if (section === 'contact') element.textContent = translations[lang].contact;
    });

    const presentationTexts = document.querySelectorAll('.presentation-text');
    if (presentationTexts.length >= 4) {
        presentationTexts[0].textContent = translations[lang].presentation_text_1;
        presentationTexts[1].textContent = translations[lang].presentation_text_2;
        presentationTexts[2].textContent = translations[lang].presentation_text_3;
        presentationTexts[3].textContent = translations[lang].presentation_text_4;
    }

    const skillsTitle = document.querySelector('.skills-section h3');
    if (skillsTitle) skillsTitle.textContent = translations[lang].skills_title;

    const profileTitle = document.querySelector('.profile-info h2');
    if (profileTitle) profileTitle.textContent = translations[lang].profile_title;

    document.querySelectorAll('.project-card').forEach(card => {
        const title = card.querySelector('h3');
        const description = card.querySelector('p');

        if (!title || !description) return;

        let projectId = title.textContent.trim().toLowerCase();

        if (projectId === 'my finances') {
            projectId = 'myfinances';
        } else if (projectId === 'audiotext' || projectId === 'audiotexter') {
            projectId = 'audiotexter';
        } else {
            projectId = projectId.replace(/\s+/g, '_');
        }

        const titleKey = `${projectId}_title`;
        const descKey = `${projectId}_description`;

        if (translations[lang][titleKey]) {
            title.textContent = translations[lang][titleKey];
        }

        if (translations[lang][descKey]) {
            description.textContent = translations[lang][descKey];
        }

        card.querySelectorAll('.project-link').forEach(link => {
            const linkText = link.textContent.trim();
            if (linkText.includes('Preview')) {
                link.innerHTML = `<i class="fas fa-eye"></i> ${translations[lang].project_preview}`;
            } else if (linkText.includes('Repositório') || linkText.includes('Repository')) {
                link.innerHTML = `<i class="fab fa-github"></i> ${translations[lang].project_repository}`;
            } else if (linkText.includes('Download')) {
                link.innerHTML = `<i class="fas fa-download"></i> ${translations[lang].project_download}`;
            } else if (linkText.includes('Android')) {
                link.innerHTML = `<i class="fab fa-android"></i> ${translations[lang].project_android}`;
            } else if (linkText.includes('iOS')) {
                link.innerHTML = `<i class="fab fa-apple"></i> ${translations[lang].project_ios}`;
            }
        });
    });

    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) contactIntro.textContent = translations[lang].contact_intro;

    const contactSocial = document.querySelector('.contact-social-section h3');
    if (contactSocial) contactSocial.textContent = translations[lang].contact_social;

    const contactEmail = document.querySelector('.contact-form-section h3');
    if (contactEmail) contactEmail.textContent = translations[lang].contact_email;

    const subjectLabel = document.querySelector('label[for="subject"]');
    if (subjectLabel) subjectLabel.textContent = translations[lang].subject;

    const messageLabel = document.querySelector('label[for="message"]');
    if (messageLabel) messageLabel.textContent = translations[lang].message;

    const clearButton = document.querySelector('.btn-clear');
    if (clearButton) clearButton.innerHTML = `<i class="fas fa-times"></i> ${translations[lang].clear_fields}`;

    const sendButton = document.querySelector('.btn-send');
    if (sendButton) sendButton.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[lang].send}`;

    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) backToTopBtn.setAttribute('aria-label', translations[lang].back_to_top);

    const copyright = document.querySelector('footer p.copyright');
    const footerCompany = document.getElementById('footer-company');
    if (copyright && footerCompany) {
        const year = document.getElementById('current-year').textContent;
        footerCompany.innerHTML = `${translations[lang].company_name}. ${translations[lang].copyright}<br>${translations[lang].company_cnpj}`;
    }
}

function updateLanguageButtons(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-lang') === activeLang);
    });
}

function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            applyLanguage(button.getAttribute('data-lang'));
        });
    });
}
