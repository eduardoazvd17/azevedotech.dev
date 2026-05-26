const translations = {
    // Português (padrão)
    'pt': {
        // Navegação
        'nav_about': 'Sobre mim',
        'nav_projects': 'Meus projetos',
        'nav_contact': 'Contato',

        // Cabeçalho
        'profile_title': 'Engenheiro de Software | Cross-Platform | Full Stack | Especialista em Flutter',

        // Sobre mim
        'about': 'Sobre mim',
        'presentation_text_1': 'Sou um engenheiro de software com 7 anos de experiência profissional, especializado no desenvolvimento de soluções mobile multiplataforma com o framework Flutter. Ao longo da minha carreira, liderei projetos mobile de forma independente, desenvolvi soluções para instituições financeiras e implementei melhorias significativas que otimizaram a performance de aplicativos. Meu foco está na criação de soluções performáticas, inovadoras e escaláveis, sempre priorizando alta qualidade e melhoria contínua da experiência do usuário.',
        'presentation_text_2': 'Possuo ampla experiência em diversas áreas do Flutter, incluindo internacionalização, modularização, gerenciamento de estados e rotas, criação de widgets personalizados, desenvolvimento de packages reutilizáveis, automação de pipelines CI/CD com Codemagic, publicação de aplicativos nas lojas e realização de testes unitários e de widgets. Sigo práticas rigorosas de gerenciamento eficiente de memória para evitar memory leaks, e adoto os princípios SOLID e Clean Code para garantir um código limpo, bem estruturado e de fácil manutenção.',
        'presentation_text_3': 'Valorizo a comunicação clara e o trabalho colaborativo em equipe, sempre buscando contribuir de forma eficiente e construtiva para garantir entregas de alta qualidade e alinhamento entre os times. Acredito que a sinergia entre profissionais é fundamental para o sucesso de qualquer projeto.',
        'presentation_text_4': 'Além da minha expertise em Flutter, possuo conhecimento sólido em linguagens como Java, C#, Kotlin e Swift, o que me permite atuar com versatilidade em diferentes tecnologias e stacks, atendendo a diversas demandas no desenvolvimento de software.',
        'skills_title': 'Linguagens e Tecnologias',

        // Projetos
        'projects': 'Meus projetos',
        'project_preview': 'Website',
        'project_repository': 'Repositório',
        'project_download': 'Download',
        'project_android': 'Android',
        'project_ios': 'iOS',

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

        // NutriUtils
        'nutriutils_title': 'NutriUtils',
        'nutriutils_description': 'NutriUtils é a ferramenta essencial para nutricionistas criarem dietas personalizadas e gerenciarem seus pacientes de forma eficiente. Simplifica o planejamento alimentar e o acompanhamento do progresso dos pacientes.',

        // GitF
        'gitf_title': 'GitF',
        'gitf_description': 'Um gerenciador de repositórios Git para iniciantes. Esse projeto foi criado apenas para testar o desenvolvimento de apps desktop com o Flutter.',

        // credentials_manager
        'credentials_manager_title': 'credentials_manager',
        'credentials_manager_description': 'Uma biblioteca para gerenciar de forma fácil as credenciais do seu app Flutter localmente, utilizando autenticação biométrica. Ela foi criada com o intuito de agilizar a solução de um problema, no qual eu precisava armazenar credenciais de forma segura em um dispositivo, permitindo que o usuário fizesse login com essas credenciais utilizando a biometria.',

        // simple_overlay
        'simple_overlay_title': 'simple_overlay',
        'simple_overlay_description': 'Uma biblioteca simples e prática para criar sobreposições de forma fácil no seu app Flutter. Com ele, você pode sobrepor um widget personalizado a qualquer outro widget. O foco deste pacote é agilizar a criação e gerenciamento do ciclo de vida de um Overlay.',

        // Pokedex
        'pokedex_title': 'Pokedex',
        'pokedex_description': 'Um app de Pokémon desenvolvido com flutter. Desafio proposto pela empresa Guarani Sistemas. A aplicação foi desenvolvida utilizando flutter e adotando padrões de código limpo, seguindo a arquitetura Clean com Modular para o gerenciamento de rotas e GetX para gerenciamento de estado e injeção de dependencias, obtendo dados da API "pokeapi.com" utlizando a biblioteca http.',

        // Contato
        'contact': 'Contato',
        'contact_intro': 'Fique a vontade para entrar em contato comigo usando uma das opções abaixo:',
        'contact_social': 'Me encontre nas redes:',
        'contact_email': 'Me envie um e-mail:',
        'contactVia': 'Entre em contato por:',
        'sendEmail': 'Me envie um email:',
        'subject': 'Assunto',
        'message': 'Mensagem',
        'clear_fields': 'Limpar campos',
        'send': 'Enviar',

        // Configurações
        'settings': 'Configurações',
        'change_theme': 'Mudar tema',
        'theme_system': 'Sistema',
        'theme_light': 'Claro',
        'theme_dark': 'Escuro',
        'change_language': 'Mudar idioma',
        'language_pt': 'Português',
        'language_en': 'Inglês',
        'language_es': 'Espanhol',
        'close': 'Fechar',

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

        // Cabeçalho
        'profile_title': 'Software Engineer | Cross-Platform | Full Stack | Flutter Specialist',

        // Sobre mim
        'about': 'About me',
        'presentation_text_1': 'I am a software engineer with 7 years of professional experience, specialized in developing cross-platform mobile solutions with the Flutter framework. Throughout my career, I have led mobile projects independently, developed solutions for financial institutions, and implemented significant improvements that optimized app performance. My focus is on creating high-performance, innovative, and scalable solutions, always prioritizing high quality and continuous improvement of user experience.',
        'presentation_text_2': 'I have extensive experience in various areas of Flutter, including internationalization, modularization, state and route management, creation of custom widgets, development of reusable packages, automation of CI/CD pipelines with Codemagic, publishing applications to stores, and conducting unit and widget tests. I follow rigorous efficient memory management practices to avoid memory leaks, and adopt SOLID principles and Clean Code to ensure clean, well-structured, and easily maintainable code.',
        'presentation_text_3': 'I value clear communication and collaborative teamwork, always seeking to contribute efficiently and constructively to ensure high-quality deliveries and alignment between teams. I believe that synergy between professionals is fundamental to the success of any project.',
        'presentation_text_4': 'Beyond my expertise in Flutter, I have solid knowledge in languages such as Java, C#, Kotlin, and Swift, which allows me to work with versatility across different technologies and stacks, meeting various demands in software development.',
        'skills_title': 'Languages and Technologies',

        // Projetos
        'projects': 'My projects',
        'project_preview': 'Website',
        'project_repository': 'Repository',
        'project_download': 'Download',
        'project_android': 'Android',
        'project_ios': 'iOS',

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

        // NutriUtils
        'nutriutils_title': 'NutriUtils',
        'nutriutils_description': 'NutriUtils is the essential tool for nutritionists to create personalized diets and efficiently manage their patients. It simplifies meal planning and tracking patient progress.',

        // GitF
        'gitf_title': 'GitF',
        'gitf_description': 'A Git repository manager for beginners. This project was created just to test desktop app development with Flutter.',

        // credentials_manager
        'credentials_manager_title': 'credentials_manager',
        'credentials_manager_description': 'A library to easily manage your Flutter app credentials locally, using biometric authentication. It was created to expedite the solution to a problem where I needed to securely store credentials on a device, allowing the user to log in with those credentials using biometrics.',

        // simple_overlay
        'simple_overlay_title': 'simple_overlay',
        'simple_overlay_description': 'A simple and practical library to easily create overlays in your Flutter app. With it, you can overlay a custom widget on any other widget. The focus of this package is to streamline the creation and lifecycle management of an Overlay.',

        // Pokedex
        'pokedex_title': 'Pokedex',
        'pokedex_description': 'A Pokémon app developed with Flutter. Challenge proposed by Guarani Sistemas company. The application was developed using Flutter and adopting clean code patterns, following the Clean architecture with Modular for route management and GetX for state management and dependency injection, obtaining data from the "pokeapi.com" API using the http library.',

        // Contato
        'contact': 'Contact',
        'contact_intro': 'Feel free to contact me using one of the options below:',
        'contact_social': 'Find me on social media:',
        'contact_email': 'Send me an email:',
        'contactVia': 'Contact me via:',
        'sendEmail': 'Send me an email:',
        'subject': 'Subject',
        'message': 'Message',
        'clear_fields': 'Clear fields',
        'send': 'Send',

        // Configurações
        'settings': 'Settings',
        'change_theme': 'Change theme',
        'theme_system': 'System',
        'theme_light': 'Light',
        'theme_dark': 'Dark',
        'change_language': 'Change language',
        'language_pt': 'Portuguese',
        'language_en': 'English',
        'language_es': 'Spanish',
        'close': 'Close',

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
    },

    // Espanhol
    'es': {
        // Navegação
        'nav_about': 'Sobre mí',
        'nav_projects': 'Mis proyectos',
        'nav_contact': 'Contacto',

        // Cabeçalho
        'profile_title': 'Ingeniero de Software | Multiplataforma | Full Stack | Especialista en Flutter',

        // Sobre mim
        'about': 'Sobre mí',
        'presentation_text_1': 'Soy un ingeniero de software con 7 años de experiencia profesional, especializado en el desarrollo de soluciones móviles multiplataforma con el framework Flutter. A lo largo de mi carrera, lideré proyectos móviles de forma independiente, desarrollé soluciones para instituciones financieras e implementé mejoras significativas que optimizaron el rendimiento de aplicaciones. Mi enfoque está en crear soluciones performantes, innovadoras y escalables, siempre priorizando alta calidad y mejora continua de la experiencia del usuario.',
        'presentation_text_2': 'Poseo amplia experiencia en diversas áreas de Flutter, incluyendo internacionalización, modularización, gestión de estados y rutas, creación de widgets personalizados, desarrollo de paquetes reutilizables, automatización de pipelines CI/CD con Codemagic, publicación de aplicaciones en tiendas y realización de pruebas unitarias y de widgets. Sigo prácticas rigurosas de gestión eficiente de memoria para evitar fugas de memoria, y adopto los principios SOLID y Clean Code para garantizar un código limpio, bien estructurado y de fácil mantenimiento.',
        'presentation_text_3': 'Valoro la comunicación clara y el trabajo colaborativo en equipo, siempre buscando contribuir de manera eficiente y constructiva para garantizar entregas de alta calidad y alineamiento entre los equipos. Creo que la sinergia entre profesionales es fundamental para el éxito de cualquier proyecto.',
        'presentation_text_4': 'Además de mi experiencia en Flutter, poseo conocimientos sólidos en lenguajes como Java, C#, Kotlin y Swift, lo que me permite actuar con versatilidad en diferentes tecnologías y stacks, atendiendo a diversas demandas en el desarrollo de software.',
        'skills_title': 'Lenguajes y Tecnologías',

        // Projetos
        'projects': 'Mis proyectos',
        'project_preview': 'Sitio web',
        'project_repository': 'Repositorio',
        'project_download': 'Descargar',
        'project_android': 'Android',
        'project_ios': 'iOS',

        // More Projects
        'more_projects_title': 'Explora más proyectos',
        'more_projects_description': '¿Quieres conocer más proyectos en los que trabajé? Visita mi perfil en GitHub para descubrir otros repositorios, contribuciones y proyectos en desarrollo.',
        'more_projects_link': 'Ver más proyectos',

        // Investhelper
        'investhelper_title': 'InvestHelper',
        'investhelper_description': 'Una aplicación para controlar tus inversiones y tener una visión completa que contiene todos los valores necesarios para el control de compras, ventas, ganancias, precio promedio y precio de compra y venta. También genera informes para facilitar la visualización en la computadora.',

        // FCryptor
        'fcryptor_title': 'FCryptor',
        'fcryptor_description': 'FCryptor es una aplicación de cifrado de archivos multiplataforma desarrollada con Flutter. Con soporte para dispositivos móviles, web y escritorio, ofrece una manera segura y práctica de proteger tus archivos con cifrado AES-256 y una interfaz intuitiva.',

        // slider_bar_chart
        'slider_bar_chart_title': 'slider_bar_chart',
        'slider_bar_chart_description': 'Una forma simplificada de crear gráficos de barras en Flutter, permitiendo desplazamiento horizontal y algunas opciones de personalización como colores, textos y tooltips. Esta biblioteca fue creada para resolver un problema en el que necesitaba un gráfico de barras para mostrar datos de dos fuentes de manera espejada y que permitiera desplazamiento.',

        // AudioTexter
        'audiotexter_title': 'AudioTexter',
        'audiotexter_description': 'AudioTexter es una aplicación desarrollada en Flutter que permite grabar audios y transcribirlos a texto.',

        // My Finances
        'myfinances_title': 'My Finances',
        'myfinances_description': 'Una aplicación para el control financiero que te permite controlar tus gastos mensuales, inversiones y guardar notas importantes.',

        // NutriUtils
        'nutriutils_title': 'NutriUtils',
        'nutriutils_description': 'NutriUtils es la herramienta esencial para que los nutricionistas creen dietas personalizadas y gestionen a sus pacientes de manera eficiente. Simplifica la planificación alimentaria y el seguimiento del progreso de los pacientes.',

        // GitF
        'gitf_title': 'GitF',
        'gitf_description': 'Un gestor de repositorios Git para principiantes. Este proyecto fue creado solo para probar el desarrollo de aplicaciones de escritorio con Flutter.',

        // credentials_manager
        'credentials_manager_title': 'credentials_manager',
        'credentials_manager_description': 'Una biblioteca para gestionar fácilmente las credenciales de tu aplicación Flutter localmente, utilizando autenticación biométrica. Fue creada para agilizar la solución de un problema donde necesitaba almacenar credenciales de forma segura en un dispositivo, permitiendo al usuario iniciar sesión con esas credenciales usando biometría.',

        // simple_overlay
        'simple_overlay_title': 'simple_overlay',
        'simple_overlay_description': 'Una biblioteca simple y práctica para crear superposiciones fácilmente en tu aplicación Flutter. Con ella, puedes superponer un widget personalizado sobre cualquier otro widget. El enfoque de este paquete es agilizar la creación y gestión del ciclo de vida de un Overlay.',

        // Pokedex
        'pokedex_title': 'Pokedex',
        'pokedex_description': 'Una aplicación de Pokémon desarrollada con Flutter. Desafío propuesto por la empresa Guarani Sistemas. La aplicación fue desarrollada utilizando Flutter y adoptando patrones de código limpio, siguiendo la arquitectura Clean con Modular para la gestión de rutas y GetX para la gestión de estado e inyección de dependencias, obteniendo datos de la API "pokeapi.com" utilizando la biblioteca http.',

        // Contato
        'contact': 'Contacto',
        'contact_intro': 'Siéntete libre de contactarme usando una de las opciones a continuación:',
        'contact_social': 'Encuéntrame en las redes sociales:',
        'contact_email': 'Envíame un correo electrónico:',
        'contactVia': 'Contáctame a través de:',
        'sendEmail': 'Envíame un email:',
        'subject': 'Asunto',
        'message': 'Mensaje',
        'clear_fields': 'Limpiar campos',
        'send': 'Enviar',

        // Configurações
        'settings': 'Configuración',
        'change_theme': 'Cambiar tema',
        'theme_system': 'Sistema',
        'theme_light': 'Claro',
        'theme_dark': 'Oscuro',
        'change_language': 'Cambiar idioma',
        'language_pt': 'Portugués',
        'language_en': 'Inglés',
        'language_es': 'Español',
        'close': 'Cerrar',

        // Rodapé
        'back_to_top': 'Volver arriba',
        'copyright': 'Todos los derechos reservados.',
        'company_name': 'Azevedo Tech Solutions',
        'company_cnpj': 'CNPJ: 55.705.600/0001-47',

        // MoveRio
        'moverio_title': 'MoveRio',
        'moverio_description': 'Aplicación gratuita que facilita tu movilidad en Río de Janeiro. Consulta líneas de autobús, visualiza itinerarios completos, encuentra paradas cercanas, abre rutas en la app de mapas de tu dispositivo y acompaña tu trayecto en tiempo real usando la ubicación de tu dispositivo. Ideal para el día a día de quienes dependen del transporte público.',

        // easy_binding
        'easy_binding_title': 'easy_binding',
        'easy_binding_description': 'Un paquete Flutter ligero para gestionar el ciclo de vida de dependencias en rutas. Inspirado en los bindings de GetX, pero agnóstico de framework - funciona con cualquier solución de inyección de dependencias como GetIt, Provider o Riverpod.',

        // StackBudget
        'stackbudget_title': 'StackBudget',
        'stackbudget_description': 'Una aplicación de planificación financiera que permite a los usuarios controlar sus gastos mensuales de manera organizada y eficiente. Con interfaz intuitiva y herramientas para control de presupuesto, ayudando en la gestión financiera personal.',

        // AutoCarefy
        'autocarefy_title': 'AutoCarefy',
        'autocarefy_description': 'AutoCarefy te ayuda a cuidar tu auto de manera simple, moderna e inteligente. Controla el mantenimiento, realiza seguimiento de revisiones, monitorea gastos y consulta la tabla FIPE de tu vehículo en segundos. Mantén toda la información importante de tu auto organizada en un solo lugar y recibe recordatorios para nunca olvidar un mantenimiento importante.',
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
        applyLanguage('en');
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
        } else if (projectId === 'nutri utils') {
            projectId = 'nutriutils';
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

    const themeTitle = document.querySelector('#theme-modal h3');
    if (themeTitle) themeTitle.textContent = translations[lang].change_theme;

    const languageTitle = document.querySelector('#language-modal h3');
    if (languageTitle) languageTitle.textContent = translations[lang].change_language;

    document.querySelectorAll('.theme-option span').forEach(span => {
        const theme = span.parentElement.getAttribute('data-theme');
        if (theme === 'system') span.textContent = translations[lang].theme_system;
        if (theme === 'light') span.textContent = translations[lang].theme_light;
        if (theme === 'dark') span.textContent = translations[lang].theme_dark;
    });

    document.querySelectorAll('.lang-option .lang-name').forEach(span => {
        const langCode = span.parentElement.getAttribute('data-lang');
        if (langCode === 'pt') span.textContent = translations[lang].language_pt;
        if (langCode === 'en') span.textContent = translations[lang].language_en;
        if (langCode === 'es') span.textContent = translations[lang].language_es;
    });

    document.querySelectorAll('.close-modal').forEach(button => {
        button.textContent = translations[lang].close;
    });

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
    const langButtons = document.querySelectorAll('.lang-option');

    langButtons.forEach(button => {
        const buttonLang = button.getAttribute('data-lang');

        if (buttonLang === activeLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-option');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
} 
