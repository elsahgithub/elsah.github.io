document.addEventListener('DOMContentLoaded', function() {
    // SAE Card Click Handlers
    document.querySelectorAll('.sae-card').forEach(card => {
        card.addEventListener('click', function() {
            const saeId = this.getAttribute('data-sae');
            const modal = document.getElementById(`sae-modal-${saeId}`);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close Modal Handlers
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.sae-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside content
    document.querySelectorAll('.sae-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Translations for BUT2 page
    const translations = {
        fr: {
            // Titres et descriptions généraux
            'but2-title': 'Bilan des SAEs - BUT2',
            'but2-description': 'Découvrez l\'ensemble des projets réalisés durant ma deuxième année de BUT Réseaux et Télécommunications. Chaque SAE représente une expérience unique qui a contribué à mon développement académique et professionnel.',
            
            // SAE 31
            'sae31-title': 'Système de transmission',
            'sae31-summary': 'Conception d\'un brouilleur FM fonctionnel sur une radio logicielle avec GNU Radio.',
            'modal-sae31-title': 'Mettre en oeuvre un système de transmission',
            'sae31-context': 'Cette SAE nous a confrontées à un sujet technique particulièrement complexe et stimulant : concevoir un brouilleur FM fonctionnel sur une radio logicielle à l\'aide de GNU Radio. Contrairement à d\'autres projets plus orientés réseau ou infrastructure, celui-ci s\'inscrivait pleinement dans le domaine des télécommunications et du traitement du signal, où la compréhension théorique est aussi essentielle que la capacité à expérimenter en environnement simulé.',
            'sae31-impression1': 'Je redoutais un peu la diversité des challenges et leur complexité technique, surtout ceux qui impliquaient des outils que je ne maîtrisais pas.',
            'sae31-impression2': 'C\'est clairement l\'une des SAE que j\'ai le plus appréciées. Le fait de trouver les solutions par soi-même était vraiment stimulant.',
            'sae31-learning': 'Apprentissage et recherches',
            'sae31-learning-text': 'Nous avons mené de nombreuses recherches documentaires pour comprendre le fonctionnement de la FM, la règle de Carson, les effets du rapport signal/bruit, et les paramètres critiques.',
            'sae31-implementation': 'Implémentation et rigueur technique',
            'sae31-implementation-text': 'L\'implémentation sur GNU Radio ne s\'est pas faite sans difficulté. L\'interface requiert une rigueur dans la manipulation des types de données et dans le choix des paramètres de chaque bloc.',
            'sae31-validation': 'Validation et retours',
            'sae31-validation-text': 'Un moment clé du projet a été notre échange avec M. Andrieux, qui nous a permis de valider notre démarche et de corriger certains points délicats.',
            'sae31-conclusion': 'Ce projet nous a permis de renforcer notre compréhension des systèmes de transmission analogique et de maîtriser des outils logiciels spécialisés comme GNU Radio. Bien que ce projet ait été parmi les plus exigeants sur le plan technique, il a aussi été l\'un des plus enrichissants.',
            
            // SAE 32
            'sae32-title': 'Applications communicantes',
            'sae32-summary': 'Développement d\'une application IoT avec modules LoRa et protocole personnalisé.',
            'modal-sae32-title': 'Développer des applications communicantes',
            'sae32-context': 'L\'objectif était de développer une application communicante IoT, en utilisant des modules LoRa (M5Stack) et le langage C. Il s\'agissait de concevoir un protocole de communication personnalisé, en intégrant des mécanismes de contrôle de flux, d\'acquittement, d\'adressage et de routage, sur plusieurs couches du modèle OSI.',
            'sae32-impression1': 'Avant de commencer, j\'appréhendais ce projet car je savais que l\'IoT impliquait beaucoup de contraintes. Je craignais surtout le niveau de programmation en C, les délais courts, et le volume de code à écrire.',
            'sae32-impression2': 'Au final, cette SAE s\'est révélée extrêmement complète et formatrice. J\'ai réellement pris conscience de l\'enjeu de robustesse dans un système communicant.',
            'sae32-realization': 'Réalisation et contenu',
            'sae32-realization-text': 'Le projet s\'est articulé autour de plusieurs phases : analyse des vidéos pédagogiques, travail préparatoire en groupe, développement du code en langage C, mise en place des fonctionnalités et tests croisés avec d\'autres groupes.',
            'sae32-difficulties': 'Volume de travail conséquent, syntaxe des trames à normaliser, gestion des erreurs asynchrones, difficulté à organiser le projet au départ, nécessité de reprendre régulièrement nos cours théoriques.',
            'sae32-contribution': 'Approfondissement des compétences en IoT, rigueur en développement logiciel, renforcement de la patience et persévérance, amélioration de la collaboration en groupe, gain en autonomie technique.',
            'sae32-conclusion': 'La SAE32 est sans doute l\'un des projets les plus riches et complets de la formation jusqu\'à présent. Elle combine rigueur de la programmation, logique de communication réseau, collaboration inter-groupes, et défis concrets du monde de l\'IoT.',
            
            // SAE 33
            'sae33-title': 'Réseau sécurisé multi-sites',
            'sae33-summary': 'Conception et configuration d\'un réseau sécurisé interconnecté entre plusieurs sites.',
            'modal-sae33-title': 'Concevoir un réseau informatique sécurisé multi-sites',
            'sae33-context': 'La SAE33 visait à concevoir et configurer un réseau informatique sécurisé et interconnecté entre plusieurs sites distants, pour le compte d\'une entreprise fictive. L\'objectif était d\'intégrer plusieurs technologies avancées de niveau professionnel.',
            'sae33-impression1': 'À première vue, le projet nous semblait très ambitieux, notamment à cause du nombre de technologies différentes à maîtriser. L\'aspect "sécurité multi-sites" apportait une couche supplémentaire de difficulté.',
            'sae33-impression2': 'Cette SAE s\'est révélée extrêmement formatrice et enrichissante, car elle nous a permis d\'appliquer concrètement et globalement nos connaissances. Malgré les difficultés, nous avons réussi à mettre en œuvre presque tous les éléments du cahier des charges.',
            'sae33-realization': 'Réalisation',
            'sae33-realization-text': 'Nous avons structuré notre travail autour de plusieurs axes : installation de GNS3, conception de l\'architecture réseau multi-sites, configuration du LAN, mise en place des ACLs, interconnexion opérateur, sécurisation des communications entre sites, implémentation de QoS.',
            'sae33-difficulties': 'Volume de configurations très important, défaillances au redémarrage des équipements, mise en place du tunnel IPv6-over-IPv4, manque de temps pour approfondir certaines options, complexité des ACLs, compréhension fine du fonctionnement de BGP et MPLS.',
            'sae33-contribution': 'Maîtrise de la conception et configuration d\'un réseau d\'entreprise multi-sites, approfondissement des protocoles de routage, découverte de la sécurité réseau à grande échelle, gestion de configurations complexes, travail en binôme efficace, acquisition d\'une vision d\'ensemble de l\'architecture réseau moderne.',
            'sae33-conclusion': 'La SAE33 est probablement l\'un des projets les plus complets et professionnalisants du BUT2. Elle nous a plongées dans une situation proche de celle qu\'un administrateur réseau pourrait rencontrer en entreprise. Nous ressortons de ce projet avec un sentiment de progression technique réel et une meilleure compréhension des réseaux sécurisés multi-sites.',
            
            // SAE 34
            'sae34-title': 'Découvrir le pentesting',
            'sae34-summary': 'Résolution de challenges Root-Me pour développer des compétences en cybersécurité offensive.',
            'modal-sae34-title': 'Découvrir le pentesting',
            'sae34-context': 'L\'objectif de la SAE34 était de développer nos compétences en cybersécurité offensive en résolvant une série de challenges sur la plateforme pédagogique Root-Me, répartis en différents domaines : Web client/serveur, réseau, forensic, RF, LDAP, SIP, etc.',
            'sae34-impression1': 'Je redoutais un peu la diversité des challenges et leur complexité technique, surtout ceux qui impliquaient des outils que je ne maîtrisais pas. Je m\'attendais à une SAE un peu linéaire, mais j\'étais curieuse.',
            'sae34-impression2': 'C\'est clairement l\'une des SAE que j\'ai le plus appréciées. Le fait de trouver les solutions par soi-même était vraiment stimulant. C\'était gratifiant de voir que je pouvais résoudre des challenges que je trouvais inaccessibles au départ.',
            'sae34-realization': 'Réalisation et déroulement',
            'sae34-realization-text': 'En équipe, nous avons travaillé sur une large gamme de challenges répartis en deux parcours (Base et Avancé). Le projet s\'est étalé sur plusieurs semaines, avec une alternance entre phases de résolution individuelle, entraide collective, puis documentation des méthodes utilisées.',
            'sae34-difficulties': 'Un rythme de travail élevé, trop de challenges en parallèle avec d\'autres SAE, un niveau parfois très exigeant, risques de dispersion.',
            'sae34-contribution': 'Renforcement des compétences techniques, autonomie dans la résolution de problèmes complexes, amélioration du travail en équipe.',
            'sae34-conclusion': 'La SAE34 a été un projet très enrichissant sur le plan personnel et technique. Elle a confirmé mon intérêt pour la cybersécurité et m\'a montré tout ce que je pouvais apprendre par la pratique. C\'était une SAE exigeante, dense, mais aussi très formatrice et ludique.',
            
            // SAE 41
            'sae41-title': 'Sécuriser un SI',
            'sae41-summary': 'Conception d\'une architecture réseau sécurisée et segmentée pour une entreprise multi-sites.',
            'modal-sae41-title': 'Sécuriser un système d\'information',
            'sae41-context': 'L\'objectif principal de la SAE41 était de concevoir une architecture réseau sécurisée et segmentée pour une entreprise nationale répartie sur plusieurs sites. Le projet visait à mettre en œuvre des solutions professionnelles telles que la segmentation des flux via VLAN et VRF, le routage dynamique (OSPF), l\'interconnexion sécurisée des sites par IPSec, l\'optimisation de la résilience réseau avec le SD-WAN, et le contrôle des flux par pare-feu (Fortinet FortiGate).',
            'sae41-impression1': 'J\'étais enthousiaste à l\'idée de manipuler Fortinet, un environnement que je connaissais moins. Le projet me semblait technique, mais j\'étais motivée par la découverte de nouvelles technologies professionnelles.',
            'sae41-impression2': 'Cette SAE a été l\'une de mes préférées. Elle m\'a permis d\'explorer à la fois la sécurité réseau, l\'analyse du trafic, la segmentation avancée, et de voir concrètement le rôle du pare-feu dans l\'architecture globale.',
            'sae41-realization': 'Réalisation et déroulement',
            'sae41-realization-text': 'La SAE a été structurée en plusieurs étapes : création de l\'architecture réseau, configuration des VRF, mise en place du routage dynamique OSPF, création de règles de pare-feu, implémentation partielle de tunnels IPSec, préparation de l\'environnement SD-WAN.',
            'sae41-difficulties': 'Certaines commandes incompatibles avec la version des équipements virtuels, complexité de la configuration IPSec, gestion simultanée des autres SAE.',
            'sae41-contribution': 'Manipulation avancée d\'un pare-feu Fortinet, mise en œuvre de segmentation réseau sécurisée, routage dynamique OSPF, gestion du trafic réseau, approche professionnelle du réseau multi-sites sécurisé, connaissance des outils industriels modernes.',
            'sae41-conclusion': 'La SAE41 a été riche et formatrice, tant sur le plan technique que méthodologique. Elle m\'a permis d\'appréhender concrètement la sécurisation d\'un système d\'information, et de mettre en œuvre des mécanismes que l\'on retrouve dans les réseaux d\'entreprise.',
            
            // SAE 42
            'sae42-title': 'Stage professionnel',
            'sae42-summary': 'Migration d\'infrastructure réseau et déploiement d\'une solution SASE cloud.',
            'modal-sae42-title': 'Stage professionnel',
            'sae42-context': 'Dans le cadre de ma deuxième année de BUT Réseaux & Télécommunications, j\'ai effectué un stage de deux mois au sein de l\'entreprise SecInfra, spécialisée dans la cybersécurité réseau. Mon rôle consistait à accompagner la migration d\'une infrastructure réseau basée sur du routage statique vers un routage dynamique BGP, tout en participant au déploiement d\'une solution SASE cloud (Prisma Access - Palo Alto Networks).',
            'sae42-impression': 'Ce stage a été pour moi l\'expérience la plus formatrice de mon parcours à l\'IUT. J\'ai eu l\'impression de progresser énormément, aussi bien sur le plan technique que professionnel. La diversité des missions, l\'exigence du contexte et l\'encadrement m\'ont permis de développer des compétences concrètes, tout en renforçant ma confiance.',
            'sae42-explanation': 'Explication',
            'sae42-explanation-text': 'Le stage s\'est structuré autour de trois missions techniques principales : mise en place du protocole BGP, configuration de tunnels VPN IPsec, déploiement de Prisma Access (SASE) et gestion via Strata Cloud Manager.',
            'sae42-difficulties': 'La prise en main de Prisma Access et de ses outils, la gestion du temps entre les tâches techniques et la documentation, la complexité du protocole BGP, la rédaction du rapport.',
            'sae42-positives': 'Stage en totale adéquation avec mes aspirations, réelle progression technique, bonne intégration à l\'équipe, encadrement pédagogique stimulant, acquisition de compétences en diagnostic réseau.',
            'sae42-contribution': 'Maîtrise concrète du routage dynamique BGP et des VPN IPsec, familiarisation avec les environnements de cybersécurité cloud, développement de compétences transversales, amélioration de ma capacité à rédiger et structurer un rapport professionnel, confirmation de mon orientation vers la cybersécurité réseau.',
            'sae42-conclusion': 'Ce stage a été une véritable opportunité et une expérience décisive dans mon parcours. Il m\'a permis de mettre en application les compétences acquises au cours de ma formation, d\'en apprendre bien plus que prévu, et de confirmer mon intérêt pour la cybersécurité des réseaux. Malgré le temps et l\'effort que la rédaction du rapport a demandé, le travail accompli a été à la hauteur de mes attentes.',
            
            // Titres génériques
            'context-title': 'Contexte et objectif',
            'initial-impression': 'Impression initiale',
            'current-impression': 'Impression actuelle',
            'key-points': 'Points clés',
            'difficulties-title': 'Difficultés rencontrées',
            'personal-contribution': 'Apports personnels',
            'conclusion-title': 'Conclusion',
            'positive-points': 'Points positifs',
            'validate-html': 'Valider HTML',
            'validate-css': 'Valider CSS',
            'footer-info-1': 'IUT de Blagnac',
            'footer-info-2': 'Département Réseaux et Télécommunications',
            'footer-info-3': 'BUT 2'
        },
        en: {
            // General titles and descriptions
            'but2-title': 'SAE Review - BUT2',
            'but2-description': 'Discover all the projects carried out during my second year of BUT Networks and Telecommunications. Each SAE represents a unique experience that contributed to my academic and professional development.',
            
            // SAE 31
            'sae31-title': 'Transmission system',
            'sae31-summary': 'Design of a functional FM jammer on a software radio using GNU Radio.',
            'modal-sae31-title': 'Implement a transmission system',
            'sae31-context': 'This SAE confronted us with a particularly complex and stimulating technical subject: designing a functional FM jammer on a software radio using GNU Radio. Unlike other projects more focused on networking or infrastructure, this one was fully in the field of telecommunications and signal processing, where theoretical understanding is as essential as the ability to experiment in a simulated environment.',
            'sae31-impression1': 'I was a bit apprehensive about the diversity of the challenges and their technical complexity, especially those involving tools I didn\'t master.',
            'sae31-impression2': 'It\'s clearly one of the SAEs I enjoyed the most. Finding solutions on my own was really stimulating.',
            'sae31-learning': 'Learning and research',
            'sae31-learning-text': 'We conducted extensive documentary research to understand the functioning of FM, Carson\'s rule, signal-to-noise ratio effects, and critical parameters.',
            'sae31-implementation': 'Implementation and technical rigor',
            'sae31-implementation-text': 'Implementation on GNU Radio was not without difficulty. The interface requires rigor in handling data types and in choosing the parameters for each block.',
            'sae31-validation': 'Validation and feedback',
            'sae31-validation-text': 'A key moment in the project was our exchange with Mr. Andrieux, which allowed us to validate our approach and correct some tricky points.',
            'sae31-conclusion': 'This project allowed us to strengthen our understanding of analog transmission systems and to master specialized software tools like GNU Radio. Although this project was among the most technically demanding, it was also one of the most rewarding.',
            
            // SAE 32
            'sae32-title': 'Communicating applications',
            'sae32-summary': 'Development of an IoT application with LoRa modules and custom protocol.',
            'modal-sae32-title': 'Develop communicating applications',
            'sae32-context': 'The goal was to develop a communicating IoT application using LoRa modules (M5Stack) and the C language. The aim was to design a custom communication protocol, integrating flow control mechanisms, acknowledgment, addressing, and routing, across several layers of the OSI model.',
            'sae32-impression1': 'Before starting, I was apprehensive about this project because I knew IoT involved many constraints. I was particularly concerned about the level of programming in C, the tight deadlines, and the amount of code to write.',
            'sae32-impression2': 'In the end, this SAE proved to be extremely comprehensive and formative. I really became aware of the robustness challenge in a communicating system.',
            'sae32-realization': 'Achievement and content',
            'sae32-realization-text': 'The project was structured around several phases: analysis of educational videos, preparatory work in groups, development of code in C language, implementation of functionalities, and cross-testing with other groups.',
            'sae32-difficulties': 'Significant workload, frame syntax to standardize, management of asynchronous errors, difficulty in organizing the project initially, need to regularly review our theoretical courses.',
            'sae32-contribution': 'Deepening IoT skills, rigor in software development, strengthening patience and perseverance, improving group collaboration, gaining technical autonomy.',
            'sae32-conclusion': 'SAE32 is undoubtedly one of the richest and most complete projects of the training so far. It combines programming rigor, network communication logic, inter-group collaboration, and concrete challenges of the IoT world.',
            
            // SAE 33
            'sae33-title': 'Secure multi-site network',
            'sae33-summary': 'Design and configuration of a secure network interconnected between multiple sites.',
            'modal-sae33-title': 'Design a secure multi-site computer network',
            'sae33-context': 'SAE33 aimed to design and configure a secure computer network interconnected between several remote sites for a fictional company. The objective was to integrate several advanced professional-level technologies.',
            'sae33-impression1': 'At first glance, the project seemed very ambitious, especially due to the number of different technologies to master. The "multi-site security" aspect added an extra layer of difficulty.',
            'sae33-impression2': 'This SAE proved to be extremely formative and enriching, as it allowed us to apply our knowledge concretely and comprehensively. Despite the difficulties, we managed to implement almost all the elements of the specifications.',
            'sae33-realization': 'Achievement',
            'sae33-realization-text': 'We structured our work around several axes: installation of GNS3, design of the multi-site network architecture, LAN configuration, implementation of ACLs, operator interconnection, securing communications between sites, QoS implementation.',
            'sae33-difficulties': 'Very large volume of configurations, equipment failures on reboot, setup of IPv6-over-IPv4 tunnel, lack of time to explore some options, complexity of ACLs, detailed understanding of BGP and MPLS operation.',
            'sae33-contribution': 'Mastery of designing and configuring a multi-site enterprise network, deepening routing protocols, discovery of large-scale network security, management of complex configurations, effective teamwork, acquisition of an overall vision of modern network architecture.',
            'sae33-conclusion': 'SAE33 is probably one of the most complete and professional projects of the BUT2. It immersed us in a situation close to what a network administrator might encounter in a company. We come out of this project with a real sense of technical progress and a better understanding of secure multi-site networks.',
            
            // SAE 34
            'sae34-title': 'Discover pentesting',
            'sae34-summary': 'Solving Root-Me challenges to develop offensive cybersecurity skills.',
            'modal-sae34-title': 'Discover pentesting',
            'sae34-context': 'The goal of SAE34 was to develop our offensive cybersecurity skills by solving a series of challenges on the Root-Me educational platform, divided into different domains: client/server web, network, forensic, RF, LDAP, SIP, etc.',
            'sae34-impression1': 'I was a bit apprehensive about the diversity of the challenges and their technical complexity, especially those involving tools I didn\'t master. I expected a somewhat linear SAE, but I was curious.',
            'sae34-impression2': 'It\'s clearly one of the SAEs I enjoyed the most. Finding solutions on my own was really stimulating. It was rewarding to see that I could solve challenges that I initially found inaccessible.',
            'sae34-realization': 'Achievement and progress',
            'sae34-realization-text': 'As a team, we worked on a wide range of challenges divided into two tracks (Basic and Advanced). The project spanned several weeks, alternating between individual resolution phases, collective mutual aid, and documentation of methods used.',
            'sae34-difficulties': 'A high work pace, too many challenges in parallel with other SAEs, sometimes very demanding level, risks of dispersion.',
            'sae34-contribution': 'Strengthening technical skills, autonomy in solving complex problems, improving teamwork.',
            'sae34-conclusion': 'SAE34 was a very enriching project on a personal and technical level. It confirmed my interest in cybersecurity and showed me everything I could learn through practice. It was a demanding, dense SAE, but also very formative and fun.',
            
            // SAE 41
            'sae41-title': 'Secure an IS',
            'sae41-summary': 'Design of a secure and segmented network architecture for a multi-site company.',
            'modal-sae41-title': 'Secure an information system',
            'sae41-context': 'The main objective of SAE41 was to design a secure and segmented network architecture for a national company spread over several sites. The project aimed to implement professional solutions such as flow segmentation via VLAN and VRF, dynamic routing (OSPF), secure interconnection of sites via IPSec, optimization of network resilience with SD-WAN, and flow control via firewall (Fortinet FortiGate).',
            'sae41-impression1': 'I was excited to work with Fortinet, an environment I was less familiar with. The project seemed technical, but I was motivated by the discovery of new professional technologies.',
            'sae41-impression2': 'This SAE was one of my favorites. It allowed me to explore network security, traffic analysis, advanced segmentation, and to see concretely the role of the firewall in the overall architecture.',
            'sae41-realization': 'Achievement and progress',
            'sae41-realization-text': 'The SAE was structured in several steps: creation of the network architecture, VRF configuration, implementation of dynamic OSPF routing, creation of firewall rules, partial implementation of IPSec tunnels, preparation of the SD-WAN environment.',
            'sae41-difficulties': 'Some commands incompatible with the version of virtual equipment, complexity of IPSec configuration, simultaneous management of other SAEs.',
            'sae41-contribution': 'Advanced manipulation of a Fortinet firewall, implementation of secure network segmentation, dynamic OSPF routing, network traffic management, professional approach to secure multi-site network, knowledge of modern industrial tools.',
            'sae41-conclusion': 'SAE41 was rich and formative, both technically and methodologically. It allowed me to concretely understand the securing of an information system and to implement mechanisms found in corporate networks.',
            
            // SAE 42
            'sae42-title': 'Professional internship',
            'sae42-summary': 'Network infrastructure migration and deployment of a SASE cloud solution.',
            'modal-sae42-title': 'Professional internship',
            'sae42-context': 'As part of my second year of BUT Networks & Telecommunications, I did a two-month internship at SecInfra, a company specialized in network cybersecurity. My role was to support the migration of a network infrastructure based on static routing to dynamic BGP routing, while participating in the deployment of a SASE cloud solution (Prisma Access - Palo Alto Networks).',
            'sae42-impression': 'This internship was the most formative experience of my course at the IUT. I felt I progressed enormously, both technically and professionally. The diversity of the missions, the demanding context and the supervision allowed me to develop concrete skills, while strengthening my confidence.',
            'sae42-explanation': 'Explanation',
            'sae42-explanation-text': 'The internship was structured around three main technical missions: implementation of the BGP protocol, configuration of VPN IPsec tunnels, deployment of Prisma Access (SASE) and management via Strata Cloud Manager.',
            'sae42-difficulties': 'Getting to grips with Prisma Access and its tools, time management between technical tasks and documentation, complexity of the BGP protocol, writing the report.',
            'sae42-positives': 'Internship perfectly matching my aspirations, real technical progress, good integration into the team, stimulating educational supervision, acquisition of network diagnostic skills.',
            'sae42-contribution': 'Concrete mastery of dynamic BGP routing and VPN IPsec, familiarity with cloud cybersecurity environments, development of transversal skills, improvement of my ability to write and structure a professional report, confirmation of my orientation towards network cybersecurity.',
            'sae42-conclusion': 'This internship was a real opportunity and a decisive experience in my career. It allowed me to apply the skills acquired during my training, to learn much more than expected, and to confirm my interest in network cybersecurity. Despite the time and effort the report writing required, the work accomplished lived up to my expectations.',
            
            // Generic titles
            'context-title': 'Context and objective',
            'initial-impression': 'Initial impression',
            'current-impression': 'Current impression',
            'key-points': 'Key points',
            'difficulties-title': 'Difficulties encountered',
            'personal-contribution': 'Personal contributions',
            'conclusion-title': 'Conclusion',
            'positive-points': 'Positive points',
            'validate-html': 'Validate HTML',
            'validate-css': 'Validate CSS',
            'footer-info-1': 'Institute of Technology Blagnac',
            'footer-info-2': 'Networks and Telecommunications Department',
            'footer-info-3': 'BUT 2'
        }
    };

    // Function to translate BUT2 specific content
    function translateBUT2Content(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Listen for language change event from main.js
    document.addEventListener('languageChanged', function(e) {
        translateBUT2Content(e.detail.lang);
    });

    // Apply translations on initial load
    const currentLang = document.documentElement.getAttribute('lang') || 'fr';
    translateBUT2Content(currentLang);
});