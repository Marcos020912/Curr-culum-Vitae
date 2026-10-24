/* ============================================================
   i18n — ES / EN / PT para el CV de Marcos Alejandro Fernandez Piñero
   El español (ES) es el idioma fuente del HTML; EN y PT viven en dict.
   ============================================================ */
(function () {
    'use strict';

    var STORAGE_KEY = 'cv-lang';

    /* ---------- Edad (12 sep 2002) ---------- */
    function computeAge() {
        var birth = new Date(2002, 8, 12);
        var now = new Date();
        var age = now.getFullYear() - birth.getFullYear();
        var m = now.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
        return age;
    }
    var AGE = computeAge();
    var AGE_FMT = {
        es: function (n) { return n + ' años'; },
        en: function (n) { return n + ' years'; },
        pt: function (n) { return n + ' anos'; }
    };

    /* ---------- Títulos de pestaña ---------- */
    var TITLES = {
        es: 'Currículum Vitae — Marcos Alejandro Fernandez Piñero',
        en: 'Curriculum Vitae — Marcos Alejandro Fernandez Piñero',
        pt: 'Currículo — Marcos Alejandro Fernandez Piñero'
    };

    /* ---------- Diccionarios ---------- */
    var dict = {
        en: {
            'loc': 'Passo Fundo, RS — Brazil',
            'tagline': 'Computer Engineer — Backend · Product Owner · Enterprise Agentic AI',
            'h2.about': 'General Information',
            'about.intro': 'Developer with a multi-role profile focused on three complementary areas: <strong>Backend</strong>, <strong>Product Owner</strong>, and the <strong>implementation of agentic AI systems in enterprise environments</strong>.',
            'role.backend': '<b>Backend Development</b>I design and build robust APIs and systems (Java, Spring Boot, Python, Go), focused on security, performance, versioning, and testing.',
            'role.po': '<b>Product Owner</b>I create application prototypes to validate them with users and stakeholders before investing in full development: from idea to validated product.',
            'role.ai': '<b>Agentic AI in Enterprise Environments</b>I implement AI systems in real business processes: agentic workflows, RAG systems, MCP servers, and skills that integrate LLMs into the company.',
            'lbl.availability': 'Availability',
            'val.availability': 'Open to on-site or remote opportunities',
            'h2.education': 'Education',
            'edu.degree': 'Computer Engineering',
            'edu.institution': 'CUJAE — José Antonio Echeverría University of Technology (Havana)',
            'edu.desc': 'Specialization in software development and computer systems with a focus on backend technologies and data management. Participation in real projects with Cuban companies.',
            'h2.experience': 'Work Experience',
            'exp.citmatel.title': 'Thesis Project — Data Lake',
            'date.citmatel': 'Oct 2025 – Jul 2026',
            'exp.citmatel.desc': 'Work carried out as an <strong>undergraduate thesis project</strong>: creation of a Data Lake for the company CITMATEL, handling large volumes of data with the Scrum methodology.',
            'exp.mm.title': 'Multiple Technology Roles',
            'date.mm': '2023 – Oct 2026',
            'exp.mm.b1': 'CRM Operator (GoHighLevel)',
            'exp.mm.b2': 'Building basic corporate websites',
            'exp.mm.b3': 'Implementation of chatbots and voicebots',
            'exp.mm.b4': '2026: development of the Health Care Solution platform (patients, forms, and appointments), sales opportunity pipeline, GHL/Freedcamp automations, internal AI tools (MCP), and social media content production.',
            'exp.mes.title': 'Scientific Repository and Certificates Center',
            'date.mes': 'Sep 2025 – Aug 2026',
            'exp.mes.company': 'Ministry of Higher Education (MES) — Professional Internship',
            'exp.mes.desc': 'Development of two projects for the MES: the <strong>scientific repository</strong> (a Java/Spring Boot microservice to manage research metadata and content) and the <strong>certificates center</strong> (a web application to search, download, and manage PDF certificates of academic works).',
            'grp.independent': 'Independent Work',
            'exp.ve.title': 'Ventas Express — Offline Sales Mobile App',
            'date.present': '2026 – Present',
            'exp.ve.company': 'Independent project',
            'exp.ve.intro': 'Mobile application (Android APK) for <strong>sales management in physical stores in fully disconnected environments</strong>, such as Cuba: 100% offline, no backend or internet, with all data persisted on the device.',
            'exp.ve.b1': 'POS with barcode scanner, invoicing, and mixed payment (cash + transfer)',
            'exp.ve.b2': 'Cash register with 3-step opening/closing and money and merchandise reconciliation; store and warehouse inventory',
            'exp.ve.b3': 'License plans with encrypted codes and HMAC signature verified offline',
            'exp.ve.b4': 'Data exchange between devices via file export/import with integrity checks',
            'exp.ve.b5': 'Stack: Flutter/Dart, local SQLite, and <em>mobile_scanner</em>; <em>flutter test</em> suite passing',
            'h2.projects': 'Featured Projects',
            'proj.hcs.title': 'Health Care Solution — Clinic Management Platform',
            'proj.hcs.sub': 'Project built entirely by me — from idea to initial launch — with <strong>artificial intelligence</strong> support for rapid prototyping and the entire technical side of the platform.',
            'proj.hcs.b1': '<strong>Monorepo</strong> (pnpm + Turborepo): frontend, backend, and analytics in a single repository with a unified development environment',
            'proj.hcs.b2': '<strong>Next.js frontend</strong> and <strong>NestJS backend</strong> with a REST API on <strong>PostgreSQL</strong>',
            'proj.hcs.b3': '<strong>Microkernel architecture with plugins</strong>: a stable core and modules activated per organization',
            'proj.hcs.b4': 'Background workers and independent analytics modules',
            'proj.hcs.b5': '<strong>Docker Compose</strong> for the local environment; strict TypeScript validation and testing with <strong>Vitest</strong>',
            'proj.hcs.b6': 'Security by design: secrets and data kept out of Git, private configuration, and deployment plan on <strong>Google Cloud</strong>',
            'proj.hcs.b7': 'Prototyping and initial launch accelerated with AI as a copilot: from validated concept to version 0.11',
            'proj.hcs.ai': 'AI · Prototyping',
            'h2.skills': 'Skills',
            'sk.langs': 'Programming Languages',
            'sk.frameworks': 'Frameworks and Technologies',
            'sk.tools': 'Tools and Methodologies',
            'sk.specs': 'Specializations',
            'lvl.medium': 'Medium',
            'lvl.basic': 'Basic',
            'docker.basic': 'Docker — Basic',
            'spec.po': 'Product Owner · App Prototyping',
            'spec.ai': 'Agentic AI in Enterprise Environments',
            'h2.languages': 'Languages',
            'lang.es': 'Spanish',
            'lang.es.level': 'Native',
            'lang.en': 'English',
            'lang.en.level': 'Basic',
            'lang.pt': 'Portuguese',
            'lang.pt.level': 'Minimum'
        },
        pt: {
            'loc': 'Passo Fundo, RS — Brasil',
            'tagline': 'Engenheiro Informático — Backend · Product Owner · IA Agêntica Empresarial',
            'h2.about': 'Informações Gerais',
            'about.intro': 'Desenvolvedor com perfil multi-rol centrado em três áreas complementares: <strong>Backend</strong>, <strong>Product Owner</strong> e <strong>implementação de sistemas de IA agêntica em ambientes empresariais</strong>.',
            'role.backend': '<b>Backend Development</b>Projeto e construo APIs e sistemas robustos (Java, Spring Boot, Python, Go), com foco em segurança, performance, versionamento e testes.',
            'role.po': '<b>Product Owner</b>Crio protótipos de aplicações para validá-los com usuários e stakeholders antes de investir no desenvolvimento completo: da ideia ao produto validado.',
            'role.ai': '<b>IA Agêntica em Ambientes Empresariais</b>Implemento sistemas de IA em processos reais de negócio: fluxos agênticos, sistemas RAG, servidores MCP e skills que integram LLMs na empresa.',
            'lbl.availability': 'Disponibilidade',
            'val.availability': 'Aberto a oportunidades presenciais ou remotas',
            'h2.education': 'Formação',
            'edu.degree': 'Engenharia Informática',
            'edu.institution': 'CUJAE — Universidade Tecnológica de Havana José Antonio Echeverría',
            'edu.desc': 'Especialização em desenvolvimento de software e sistemas informáticos com foco em tecnologias backend e tratamento de dados. Participação em projetos reais com empresas cubanas.',
            'h2.experience': 'Experiência Profissional',
            'exp.citmatel.title': 'Projeto de Tese — Data Lake',
            'date.citmatel': 'Out 2025 – Jul 2026',
            'exp.citmatel.desc': 'Trabalho realizado como <strong>projeto de tese de graduação</strong>: criação de um Data Lake para a empresa CITMATEL, com tratamento de grandes volumes de dados e metodologia Scrum.',
            'exp.mm.title': 'Vários Papéis Tecnológicos',
            'date.mm': '2023 – Out 2026',
            'exp.mm.b1': 'Operador de CRM (GoHighLevel)',
            'exp.mm.b2': 'Criação de sites corporativos básicos',
            'exp.mm.b3': 'Implementação de chatbots e voicebots',
            'exp.mm.b4': '2026: desenvolvimento da plataforma Health Care Solution (pacientes, formulários e agendamentos), pipeline de oportunidades de vendas, automações com GHL/Freedcamp, ferramentas internas de IA (MCP) e produção de conteúdo para redes sociais.',
            'exp.mes.title': 'Repositório Científico e Centro de Certificados',
            'date.mes': 'Set 2025 – Ago 2026',
            'exp.mes.company': 'Ministério do Ensino Superior (MES) — Estágio Profissional',
            'exp.mes.desc': 'Desenvolvimento de dois projetos para o MES: o <strong>repositório científico</strong> (microsserviço Java/Spring Boot para gerenciar metadados e conteúdos de pesquisa) e o <strong>centro de certificados</strong> (aplicação web para buscar, baixar e gerenciar certificados PDF de obras acadêmicas).',
            'grp.independent': 'Trabalhos Independentes',
            'exp.ve.title': 'Ventas Express — Aplicativo Móvel de Vendas Offline',
            'date.present': '2026 – Atual',
            'exp.ve.company': 'Projeto independente',
            'exp.ve.intro': 'Aplicação móvel (APK Android) para a <strong>gestão de vendas em lojas físicas em ambientes de total desconexão</strong>, como Cuba: 100% offline, sem backend ou internet, com todos os dados persistidos no dispositivo.',
            'exp.ve.b1': 'POS com leitor de código de barras, faturamento e pagamento misto (dinheiro + transferência)',
            'exp.ve.b2': 'Caixa com abertura/fechamento em 3 etapas e conciliação de dinheiro e mercadoria; estoque de loja e armazém',
            'exp.ve.b3': 'Licenciamento por planos com códigos criptografados e assinatura HMAC verificada offline',
            'exp.ve.b4': 'Troca de dados entre dispositivos via exportação/importação de arquivos com integridade',
            'exp.ve.b5': 'Stack: Flutter/Dart, SQLite local e <em>mobile_scanner</em>; suite de testes <em>flutter test</em> aprovando',
            'h2.projects': 'Projetos em Destaque',
            'proj.hcs.title': 'Health Care Solution — Plataforma de Gestão Clínica',
            'proj.hcs.sub': 'Projeto criado integralmente por mim — da ideia ao lançamento inicial — com apoio de <strong>inteligência artificial</strong> para a prototipagem rápida e toda a parte técnica da plataforma.',
            'proj.hcs.b1': '<strong>Monorepo</strong> (pnpm + Turborepo): frontend, backend e análise de dados em um único repositório com ambiente de desenvolvimento unificado',
            'proj.hcs.b2': '<strong>Frontend Next.js</strong> e <strong>backend NestJS</strong> com API REST sobre <strong>PostgreSQL</strong>',
            'proj.hcs.b3': 'Arquitetura de <strong>micronúcleo com complementos (plugins)</strong>: núcleo estável e módulos ativados por organização',
            'proj.hcs.b4': 'Workers em segundo plano e módulos analíticos independentes',
            'proj.hcs.b5': '<strong>Docker Compose</strong> para o ambiente local; validação com TypeScript estrito e testes com <strong>Vitest</strong>',
            'proj.hcs.b6': 'Segurança por design: segredos e dados fora do Git, configuração privada e plano de implantação no <strong>Google Cloud</strong>',
            'proj.hcs.b7': 'Prototipagem e lançamento inicial acelerados com IA como copiloto: do conceito validado à versão 0.11',
            'proj.hcs.ai': 'IA · Prototipagem',
            'h2.skills': 'Habilidades',
            'sk.langs': 'Linguagens de Programação',
            'sk.frameworks': 'Frameworks e Tecnologias',
            'sk.tools': 'Ferramentas e Metodologias',
            'sk.specs': 'Especializações',
            'lvl.medium': 'Médio',
            'lvl.basic': 'Básico',
            'docker.basic': 'Docker — Básico',
            'spec.po': 'Product Owner · Prototipagem de Apps',
            'spec.ai': 'IA Agêntica em Ambientes Empresariais',
            'h2.languages': 'Idiomas',
            'lang.es': 'Espanhol',
            'lang.es.level': 'Nativo',
            'lang.en': 'Inglês',
            'lang.en.level': 'Básico',
            'lang.pt': 'Português',
            'lang.pt.level': 'Mínimo'
        }
    };

    /* ---------- Texto original (ES) capturado del HTML ---------- */
    var originals = {};

    function collect() {
        var nodes = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute('data-i18n');
            if (!(key in originals)) {
                originals[key] = nodes[i].innerHTML;
            }
        }
    }

    function apply(lang) {
        if (lang !== 'es' && !dict[lang]) lang = 'es';
        var d = dict[lang] || {};

        var nodes = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute('data-i18n');
            if (key === 'edad') {
                nodes[i].textContent = AGE_FMT[lang](AGE);
                continue;
            }
            var text = (lang === 'es') ? originals[key] : (key in d ? d[key] : originals[key]);
            if (text !== undefined) nodes[i].innerHTML = text;
        }

        document.documentElement.setAttribute('lang', lang);
        document.title = TITLES[lang] || TITLES.es;

        var buttons = document.querySelectorAll('.lang-switcher button');
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.toggle('active', buttons[j].getAttribute('data-lang') === lang);
        }

        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
    }

    function detect() {
        var fromUrl = /[?&]lang=(es|en|pt)\b/.exec(window.location.search);
        if (fromUrl) return fromUrl[1];
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved && (saved === 'es' || saved === 'en' || saved === 'pt')) return saved;
        } catch (e) { /* ignorar */ }
        var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
        return (nav === 'en' || nav === 'pt') ? nav : 'es';
    }

    function init() {
        collect();
        var buttons = document.querySelectorAll('.lang-switcher button');
        for (var i = 0; i < buttons.length; i++) {
            (function (btn) {
                btn.addEventListener('click', function () {
                    apply(btn.getAttribute('data-lang'));
                });
            })(buttons[i]);
        }
        apply(detect());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
