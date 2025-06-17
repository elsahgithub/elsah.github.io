document.addEventListener('DOMContentLoaded', function() {
    // Étendre le dictionnaire de traduction existant
    const mainTranslations = window.translations || { fr: {}, en: {} };
    
    // Ajouter les nouvelles traductions spécifiques à stage2025
    mainTranslations.fr = {
        ...mainTranslations.fr,
        // Titres et descriptions
        'stage-title': 'Stage Professionnel 2025 - SecInfra',
        'stage-desc': 'Cybersécurité réseau : migration de routage statique à routage dynamique, déploiement et intégration d\'un SASE',
        'presentation-title': 'Présentation du stage',
        'presentation-text': 'Dans le cadre de ma deuxième année de BUT Réseaux et Télécommunications à l\'IUT de Blagnac, j\'ai effectué un stage de 2 mois au sein de SecInfra, une entreprise spécialisée dans les métiers de la cybersécurité. Ma mission principale consistait à accompagner la migration de l\'infrastructure réseau d\'un routage statique vers un routage dynamique via le protocole BGP, en s\'appuyant sur la solution SASE Prisma Access de Palo Alto Networks.',
        'details-title': 'Informations clés',
        'company-label': 'Entreprise :',
        'period-label': 'Période :',
        'mentor-label': 'Maître de stage :',
        'tutor-label': 'Tuteur pédagogique :',
        'domain-label': 'Domaine :',
        'goals-title': 'Objectifs du stage',
        'goals-desc': 'Ce stage visait à moderniser et sécuriser les connexions entre les différents sites du réseau de SecInfra, tout en facilitant leur administration centralisée.',
        'goal1-title': 'Migration BGP',
        'goal1-desc': 'Passer d\'un routage statique à un routage dynamique BGP pour plus de flexibilité et d\'automatisation',
        'goal2-title': 'Sécurisation VPN',
        'goal2-desc': 'Configurer et tester des tunnels VPN IPsec pour sécuriser les communications inter-sites',
        'goal3-title': 'Intégration SASE',
        'goal3-desc': 'Déployer la solution Prisma Access pour centraliser la gestion de la sécurité dans le cloud',
        'goal4-title': 'Topologie résiliente',
        'goal4-desc': 'Mettre en place une architecture réseau plus flexible et résiliente face aux pannes',
        'skills-title': 'Compétences développées',
        'skills-desc': 'Ce stage m\'a permis d\'approfondir mes connaissances techniques et de développer de nouvelles compétences professionnelles.',
        'skill1-title': 'Routage dynamique BGP',
        'skill2-title': 'Configuration VPN IPsec',
        'skill3-title': 'Strata Cloud Manager - Prisma Access',
        'skill4-title': 'Parefeux Palo Alto Networks',
        'skill5-title': 'Pare-feux OPNsense',
        'skill6-title': 'Troubleshooting réseau',
        'conclusion-title': 'Bilan du stage',
        'achievements-title': 'Réalisations techniques',
        'achievements-text': 'Durant ce stage, j\'ai pu mettre en œuvre plusieurs aspects techniques clés de la migration réseau. J\'ai d\'abord suivi une formation approfondie sur les outils Palo Alto via la plateforme Beacon, me permettant de maîtriser les concepts SASE et la gestion centralisée via Strata Cloud Manager. J\'ai ensuite configuré des tunnels VPN IPsec entre différents sites, en définissant les paramètres cryptographiques appropriés et en établissant les sessions BGP pour l\'échange dynamique des routes.',
        'environments-title': 'Environnements et technologies',
        'environments-text': 'J\'ai travaillé sur plusieurs plateformes complémentaires : Prisma Access pour la gestion cloud, OPNsense pour les pare-feux open source, Panorama pour la gestion centralisée Palo Alto, et FRRouting pour le BGP. Cette diversité m\'a permis de comprendre les interactions entre différentes technologies et de développer une vision globale de l\'architecture réseau sécurisée. Les phases de test en environnement simulé ont été particulièrement instructives pour anticiper et résoudre les problèmes avant déploiement en production.',
        'acquired-title': 'Compétences acquises',
        'acquired-text': 'Ce stage a considérablement renforcé mes compétences techniques en réseaux, notamment dans la compréhension du routage asymétrique, la configuration d\'interfaces graphiques spécialisées, et les méthodes de dépannage avec analyse des journaux. J\'ai également développé mon autonomie, ma rigueur et ma capacité d\'analyse face à des problèmes complexes. La rédaction de documentation technique claire et l\'intégration au sein d\'une équipe opérationnelle ont complété mon apprentissage professionnel.',
        'personal-title': 'Conclusion personnelle',
        'personal-text': 'Cette expérience chez SecInfra a pleinement consolidé ma formation et m\'a confortée dans mon projet professionnel dans le domaine de la cybersécurité réseau. La confrontation aux défis techniques réels, la collaboration avec des experts du domaine, et la réalisation d\'un projet concret ont été extrêmement enrichissantes. Ce stage m\'a permis de faire le lien entre les connaissances théoriques acquises à l\'IUT et leur application pratique en entreprise, tout en me donnant une vision plus précise des métiers de la cybersécurité.'
    };

    mainTranslations.en = {
        ...mainTranslations.en,
        'stage-title': 'Professional Internship 2025 - SecInfra',
        'stage-desc': 'Network cybersecurity: migration from static to dynamic routing, SASE deployment and integration',
        'presentation-title': 'Internship Overview',
        'presentation-text': 'During my second year of BUT Networks and Telecommunications at IUT Blagnac, I completed a 2-month internship at SecInfra, a company specializing in cybersecurity. My main mission was to assist in migrating the network infrastructure from static routing to dynamic routing using the BGP protocol, leveraging the SASE solution Prisma Access from Palo Alto Networks.',
        'details-title': 'Key Information',
        'company-label': 'Company:',
        'period-label': 'Period:',
        'mentor-label': 'Internship Supervisor:',
        'tutor-label': 'Academic Tutor:',
        'domain-label': 'Domain:',
        'goals-title': 'Internship Goals',
        'goals-desc': 'This internship aimed to modernize and secure connections between different sites of SecInfra\'s network while facilitating centralized administration.',
        'goal1-title': 'BGP Migration',
        'goal1-desc': 'Transition from static to dynamic BGP routing for increased flexibility and automation',
        'goal2-title': 'VPN Security',
        'goal2-desc': 'Configure and test IPsec VPN tunnels to secure inter-site communications',
        'goal3-title': 'SASE Integration',
        'goal3-desc': 'Deploy the Prisma Access solution to centralize security management in the cloud',
        'goal4-title': 'Resilient Topology',
        'goal4-desc': 'Implement a more flexible and failure-resistant network architecture',
        'skills-title': 'Developed Skills',
        'skills-desc': 'This internship allowed me to deepen my technical knowledge and develop new professional skills.',
        'skill1-title': 'Dynamic BGP Routing',
        'skill2-title': 'IPsec VPN Configuration',
        'skill3-title': 'Strata Cloud Manager - Prisma Access',
        'skill4-title': 'Palo Alto Networks Firewalls',
        'skill5-title': 'OPNsense Firewalls',
        'skill6-title': 'Network Troubleshooting',
        'conclusion-title': 'Internship Conclusion',
        'achievements-title': 'Technical Achievements',
        'achievements-text': 'During this internship, I implemented several key technical aspects of the network migration. I first completed in-depth training on Palo Alto tools via the Beacon platform, allowing me to master SASE concepts and centralized management through Strata Cloud Manager. I then configured IPsec VPN tunnels between different sites, defining appropriate cryptographic parameters and establishing BGP sessions for dynamic route exchange.',
        'environments-title': 'Environments and Technologies',
        'environments-text': 'I worked on several complementary platforms: Prisma Access for cloud management, OPNsense for open-source firewalls, Panorama for centralized Palo Alto management, and FRRouting for BGP. This diversity allowed me to understand interactions between different technologies and develop a global vision of secure network architecture. Testing phases in simulated environments were particularly instructive for anticipating and resolving issues before production deployment.',
        'acquired-title': 'Acquired Skills',
        'acquired-text': 'This internship significantly strengthened my networking technical skills, particularly in understanding asymmetric routing, configuring specialized graphical interfaces, and troubleshooting methods with log analysis. I also developed my autonomy, rigor, and analytical skills when facing complex problems. Writing clear technical documentation and integrating into an operational team complemented my professional learning.',
        'personal-title': 'Personal Conclusion',
        'personal-text': 'This experience at SecInfra fully consolidated my training and confirmed my career path in network cybersecurity. Facing real technical challenges, collaborating with domain experts, and completing a concrete project were extremely enriching. This internship allowed me to connect the theoretical knowledge acquired at IUT with its practical application in a business environment, while giving me a clearer vision of cybersecurity professions.'
    };

    // Mettre à jour le dictionnaire global
    window.translations = mainTranslations;

    // Fonction de traduction pour la page stage2025
    function translateStageContent(lang) {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                // Gestion spéciale pour les éléments avec HTML interne
                if (el.classList.contains('dropdown-toggle')) {
                    const icon = el.querySelector('i');
                    if (icon) {
                        el.innerHTML = `${translations[lang][key]} ${icon.outerHTML}`;
                    } else {
                        el.textContent = translations[lang][key];
                    }
                } 
                // Gestion standard
                else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // Synchroniser avec le changement de langue global
    document.addEventListener('languageChanged', function(e) {
        translateStageContent(e.detail.lang);
    });

    // Appliquer la traduction au chargement
    const savedLang = localStorage.getItem('language') || 'fr';
    translateStageContent(savedLang);
});