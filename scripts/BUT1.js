document.addEventListener('DOMContentLoaded', function() {
    // Gestion du clic sur les cartes SAE
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

    // Fermeture des modales
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.sae-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Fermeture des modales en cliquant à l'extérieur
    document.querySelectorAll('.sae-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Traductions complètes pour toutes les SAE
    const translations = {
        fr: {
            // Titres et descriptions généraux
            'but1-title': 'Bilan des SAEs - BUT1',
            'but1-description': 'Découvrez l\'ensemble des projets réalisés durant ma première année de BUT Réseaux et Télécommunications. Chaque SAE (Situation d\'Apprentissage et d\'Évaluation) représente une expérience unique qui a contribué à mon développement académique et professionnel.',
            
            // SAE 11
            'sae11-title': 'Sensibilisation à l\'hygiène informatique',
            'sae11-summary': 'Exploration approfondie des bonnes pratiques de sécurité informatique, des guides de l\'ANSSI, et participation au MOOC ANSSI et au challenge TryHackMe.',
            'modal-sae11-title': 'Sensibilisation à l\'hygiène informatique et à la cybersécurité',
            'sae11-context': 'Le projet SAÉ11 vise à approfondir les compétences en sécurité informatique. Il commence par l\'examen des bonnes pratiques de l\'ANSSI, explore des applications concrètes comme le DHCP Snooping et le cracking de mots de passe, et s\'engage dans des initiatives comme le MOOC de l\'ANSSI et le challenge TryHackMe.',
            'sae11-impression1': 'J\'étais préoccupé par la multitude des aspects à considérer et par l\'absence d\'un plan ou de consignes détaillés.',
            'sae11-impression2': 'Ce projet m\'a permis d\'avoir une compréhension globale des réseaux informatiques. Je n\'ai pas eu l\'impression d\'en avoir pu en tirer davantage en raison de mes incertitudes.',
            'sae11-autonomy': 'J\'ai dû prendre l\'initiative d\'explorer et d\'apprendre de manière autonome. Cela m\'a permis de développer ma capacité à apprendre de manière indépendante.',
            'sae11-problem': 'J\'ai été confronté à divers défis tout au long du projet, que ce soit pour comprendre des concepts complexes ou pour résoudre des problèmes techniques.',
            'sae11-practical': 'Grâce à des activités comme le challenge TryHackMe, nous pouvons appliquer concrètement les concepts et les techniques appris.',
            'sae11-conclusion': 'C\'est la SAÉ que j\'ai préférée, j\'ai bien aimé cette expérience. Avec le MOOC, on suit pas à pas l\'apprentissage, ce qui est bien. J\'ai développé une perspective plus nuancée et informée sur les questions de sécurité.',
            
            // SAE 12
            'sae12-title': 'Initiation aux réseaux informatiques',
            'sae12-summary': 'Étude des réseaux informatiques à différents niveaux, conception d\'un réseau d\'entreprise et application des connaissances à des situations réelles.',
            'modal-sae12-title': 'S\'initier aux réseaux informatiques',
            'sae12-context': 'La SAÉ 12 est une série d\'activités conçues pour explorer et comprendre les réseaux informatiques, tant au niveau local (dans une salle de TP) qu\'au niveau domestique. Elle comprend également une activité de conception d\'un réseau d\'entreprise.',
            'sae12-impression1': 'J\'étais préoccupé par la multitude des aspects à considérer et par l\'absence d\'un plan ou de consignes détaillés.',
            'sae12-impression2': 'Ce projet m\'a permis d\'avoir une compréhension globale des réseaux informatiques. Je n\'ai pas eu l\'impression d\'en avoir pu en tirer davantage en raison de mes incertitudes.',
            'sae12-knowledge': 'Pour réaliser ce travail, j\'ai utilisé des compétences acquises lors de mes cours de R106 et des recherches sur internet.',
            'sae12-implementation': 'J\'ai appris à être plus patient et à approfondir mes recherches pour résoudre les problèmes rencontrés.',
            'sae12-conclusion': 'La SAÉ 12 m\'a quand même permis d\'apprendre et de comprendre les réseaux informatiques à différents niveaux. J\'aime seulement bien le fait d\'appliquer ces connaissances à des situations réelles mais cela ne m\'a pas énormément apporté.',
            
            // SAE 13
            'sae13-title': 'Étude bibliographique',
            'sae13-summary': 'Recherche approfondie sur le son, les microphones et les haut-parleurs, avec une exploration des caractéristiques des ondes sonores et des processus de conversion.',
            'modal-sae13-title': 'Étude bibliographique',
            'sae13-context': 'Dans le cadre de la SAé13, nous devions réaliser l\'étude bibliographique sur le son, le microphone et le haut-parleur.',
            'sae13-explanation': 'Le son a été étudié en termes de sa nature ondulatoire, avec une exploration sur les caractéristiques des ondes sonores. Le microphone a été défini comme un dispositif qui convertit les variations de pression acoustique en signaux électriques. Le haut-parleur a été défini comme un dispositif qui convertit les signaux électriques en vibrations mécaniques produisant des ondes sonores.',
            'sae13-impression1': 'Je pensais que ce serait un projet intéressant mais potentiellement complexe.',
            'sae13-impression2': 'La SAé13 a été une bonne expérience d\'apprentissage. J\'ai trouvé cette SAé enrichissante pour approfondir ma compréhension du son, du microphone et du haut-parleur.',
            'sae13-difficulties': 'La SAé13 a été un défi en raison de sa longueur et du manque d\'indications précises sur le contenu à inclure. Le nombre de pages à fournir et la nécessité d\'un plan structuré dès le début ont ajouté à la difficulté.',
            'sae13-conclusion': 'Je suis satisfaite des connaissances acquises et j\'ai pu revoir des notions et concepts de base qui se sont révélés utiles pour la suite de mon parcours.',
            
            // SAE 15
            'sae15-title': 'Traitement des données',
            'sae15-summary': 'Gestion énergétique d\'un bâtiment via l\'exploitation de données de capteurs, développement d\'une interface de suivi et traitement des données en temps réel.',
            'modal-sae15-title': 'Traiter des données',
            'sae15-context': 'L\'objectif principal était d\'aider le service technique dans la gestion énergétique du bâtiment R&T en exploitant les données provenant de capteurs répartis dans le bâtiment. Ces données, au format JSON et accessibles via le protocole MQTT, ont été traitées afin de calculer une moyenne et de déterminer le minimum et le maximum.',
            'sae15-impression1': 'Je pensais dès le départ que ce serait le projet le plus difficile à faire. J\'étais déjà partie défaitiste au niveau de la note finale car j\'ai beaucoup de difficulté en langage bash.',
            'sae15-impression2': 'La SAé 15 a été la plus difficile pour moi. J\'ai rencontré des difficultés au niveau des codes et de la compréhension des commandes mosquitto en bash.',
            'sae15-knowledge': 'Le premier TP m\'a été utile pour avoir les bases du projet même si j\'ai dû le reprendre plusieurs fois pour mieux comprendre.',
            'sae15-difficulties': 'J\'ai rencontré des problèmes techniques tout au long du projet, notamment des erreurs dans le code et des difficultés à comprendre les commandes mosquitto en bash.',
            'sae15-improvements': 'J\'aurais dû consacrer plus de temps à ce travail mais je reste satisfait des compétences acquises même si je ne les maîtrise pas totalement.',
            'sae15-conclusion': 'Pour surmonter ces difficultés, j\'ai dû consacrer plus de temps à l\'analyse des erreurs, en me référant à la documentation et en sollicitant l\'aide de ressources en ligne. Cette expérience m\'a appris la persévérance face aux défis techniques.',
            
            // SAE 21
            'sae21-title': 'Réseau pour petite structure',
            'sae21-summary': 'Conception et configuration d\'un réseau complet pour une ONG fictive avec gestion des VLANs, routage inter-VLAN, et mise en place de services essentiels (DHCP, DNS).',
            'modal-sae21-title': 'Construire un réseau informatique pour une petite structure',
            'sae21-context': 'Concevoir et configurer un réseau informatique complet et sécurisé pour une organisation fictive (ONG Picon21) répartie sur plusieurs sites. Il s\'agissait d\'appliquer des compétences techniques comme l\'adressage IP, la gestion des VLANs, le routage inter-VLAN, et la mise en place de services essentiels (DHCP, DNS, HTTP…).',
            'sae21-impression1': 'Dès le début, le projet s\'est révélé ambitieux et dense. Il a nécessité de nombreuses compétences techniques en simultané.',
            'sae21-impression2': 'Cette SAÉ a clairement été l\'une des plus exigeantes en termes de charge de travail. Malgré la difficulté, le projet a été bien réalisé dans l\'ensemble.',
            'sae21-autonomy': 'Il a fallu faire preuve de rigueur dans la répartition des tâches et dans le suivi du projet. Chacun a joué un rôle dans l\'avancement, mais l\'ampleur des tâches demandait parfois plus de coordination.',
            'sae21-technical': 'Cette SAÉ a mis en jeu une grande variété de compétences techniques : configuration des VLANs, mise en place de services réseau, utilisation de Packet Tracer et déploiement en salle de TP réelle.',
            'sae21-difficulties': 'Manque de temps pour tout tester en profondeur, complexité du plan d\'adressage, et quelques problèmes de configuration en salle.',
            'sae21-conclusion': 'La SAÉ21 a été très formatrice, mais aussi très exigeante. C\'est celle qui a demandé le plus d\'investissement en temps, en autonomie, et en compétences techniques. Malgré les défis, le travail accompli est satisfaisant, car le réseau a bien fonctionné dans l\'ensemble et les services essentiels étaient opérationnels.',
            
            // SAE 22
            'sae22-title': 'Mesure et caractérisation',
            'sae22-summary': 'Étude approfondie de l\'électricité, de la lumière et de l\'électromagnétisme, avec une approche historique et scientifique des phénomènes physiques.',
            'modal-sae22-title': 'Mesurer et caractériser un signal ou un système',
            'sae22-context': 'La SAÉ22 avait pour but d\'approfondir les notions fondamentales de l\'électricité, de la lumière et de l\'électromagnétisme. Elle mêlait une approche historique et scientifique avec des apports théoriques solides et une dimension documentaire soutenue.',
            'sae22-explanation': 'Le travail a été organisé autour de plusieurs grands thèmes : histoire de l\'électricité, nature et propriétés de la lumière, interaction lumière-matière et ondes électromagnétiques, applications pratiques, et étude approfondie des antennes.',
            'sae22-impression1': 'Je pensais que ce serait un projet intéressant mais très théorique.',
            'sae22-impression2': 'La SAÉ22 n\'a pas été difficile techniquement, mais elle a été très longue et dense à réaliser, en raison de la quantité importante de notions à intégrer.',
            'sae22-knowledge': 'Approfondissement important de mes connaissances en physique appliquée (ondes, antennes, lumière…).',
            'sae22-structuring': 'Renforcement de ma capacité à structurer un projet long et à produire un travail clair et synthétique.',
            'sae22-conclusion': 'La SAÉ22 a représenté un travail conséquent, long mais formateur, qui m\'a permis d\'explorer en profondeur des concepts complexes, tout en développant mes compétences de synthèse, d\'organisation et de rigueur documentaire. Malgré le stress lié à la densité du projet, je suis globalement satisfaite de cette expérience.',
            
            // SAE 23
            'sae23-title': 'Solution informatique d\'entreprise',
            'sae23-summary': 'Développement d\'une chaîne complète de traitement et visualisation de données IoT avec MQTT, Docker, Node-RED, InfluxDB et Grafana.',
            'modal-sae23-title': 'Mettre en place une solution informatique pour l\'entreprise',
            'sae23-context': 'L\'objectif était de développer une chaîne complète de traitement, de stockage et de visualisation des données issues de capteurs via MQTT, le tout intégré dans une interface web dynamique et un dashboard Grafana.',
            'sae23-explanation': 'Nous devions concevoir une solution clé en main pour que deux gestionnaires de bâtiments puissent accéder aux mesures de leurs capteurs. Mise en œuvre technique : création d\'une VM sous Lubuntu, installation de Docker et conteneurs Mosquitto, Node-RED, InfluxDB, Grafana, développement d\'un site web dynamique en PHP/HTML/CSS avec base MySQL.',
            'sae23-impression1': 'Je pensais que ce serait un projet technique stimulant mais réalisable.',
            'sae23-impression2': 'Cette SAÉ n\'a pas été particulièrement difficile sur le plan technique, mais elle a été très longue à réaliser, ce qui a pu provoquer un certain stress.',
            'sae23-positives': 'Compréhension claire des flux de données en environnement IoT, utilisation de technologies professionnelles, répartition efficace des tâches.',
            'sae23-difficulties': 'La prise en main de Node-RED, le développement du site web dynamique, la gestion des scripts Bash, et la coordination du projet.',
            'sae23-contribution': 'Meilleure maîtrise des outils d\'intégration, confort renforcé en développement web, renforcement de la patience et de l\'endurance.',
            'sae23-conclusion': 'La SAÉ23 a représenté un projet complet, dense et riche en apprentissages techniques, demandant beaucoup de temps et d\'autonomie. Si certaines parties ont été longues et parfois stressantes à gérer, le résultat final est fonctionnel et satisfaisant. C\'est une SAÉ que je retiens comme très utile et professionnalisante.',
            
            // SAE 24
            'sae24-title': 'Écoconception d\'un smartphone',
            'sae24-summary': 'Analyse du Fairphone 3+ sous l\'angle de l\'écoconception, développement d\'un site web éco-responsable et réflexion sur l\'impact environnemental des technologies.',
            'modal-sae24-title': 'Réflexion sur l\'écoconception d\'un smartphone',
            'sae24-context': 'La SAÉ24 avait pour objectif de sensibiliser les étudiants à l\'écoconception dans les projets techniques, en prenant comme support d\'étude le Fairphone 3+, un smartphone conçu de manière éthique et durable.',
            'sae24-explanation': 'Le projet s\'articulait autour de plusieurs grandes actions : démontage du Fairphone 3+, recherche documentaire sur ses composants, comparaison avec un smartphone non éco-conçu, développement d\'un site web statique éco-conçu, et mise en ligne via un hébergeur écologique.',
            'sae24-impression1': 'Je pensais que ce serait un projet intéressant et différent des autres SAÉs.',
            'sae24-impression2': 'Cette SAÉ n\'a pas été difficile sur le plan technique, mais elle s\'est révélée très dense et longue à réaliser. La multiplicité des aspects à traiter a demandé une organisation rigoureuse.',
            'sae24-environment': 'Meilleure compréhension des enjeux sociaux et environnementaux liés à l\'électronique.',
            'sae24-ecodesign': 'Montée en compétences sur l\'écoconception web (compression, arborescence, limitation des scripts…).',
            'sae24-management': 'Expérience concrète de gestion de projet collaboratif, entre documentation, technique, design et soutenance.',
            'sae24-conclusion': 'La SAÉ24 a été un projet très formateur, à la fois multidisciplinaire, collectif et engagé. Elle nous a permis de développer une pensée critique sur l\'industrie du numérique, tout en explorant des alternatives responsables. Même si elle a demandé beaucoup de travail, nous avons mené le projet à terme avec succès. C\'est une SAÉ que je considère comme utile et pertinente.',
            
            // Titres génériques
            'context-title': 'Contexte et objectif',
            'initial-impression': 'Impression initiale',
            'current-impression': 'Impression actuelle',
            'experience-title': 'Bilan d\'expérience',
            'autonomy': 'Autonomie et initiative',
            'problem-solving': 'Recherche et résolution de problèmes',
            'practical-application': 'Application pratique',
            'conclusion-title': 'Conclusion',
            'analysis-title': 'Analyse',
            'difficulties-title': 'Difficultés rencontrées',
            'positive-points': 'Points positifs',
            'personal-contribution': 'Apport personnel',
            'key-points': 'Points clés',
            'explanation-title': 'Explication'
        },
        en: {
            // General titles and descriptions
            'but1-title': 'SAE Review - BUT1',
            'but1-description': 'Discover all the projects carried out during my first year of BUT Networks and Telecommunications. Each SAE (Learning and Evaluation Situation) represents a unique experience that contributed to my academic and professional development.',
            
            // SAE 11
            'sae11-title': 'Introduction to IT hygiene',
            'sae11-summary': 'In-depth exploration of IT security best practices, ANSSI guidelines, and participation in the ANSSI MOOC and TryHackMe challenge.',
            'modal-sae11-title': 'Introduction to IT hygiene and cybersecurity',
            'sae11-context': 'The SAE11 project aims to deepen IT security skills. It begins with a review of ANSSI best practices, explores concrete applications such as DHCP Snooping and password cracking, and engages in initiatives like the ANSSI MOOC and TryHackMe challenge.',
            'sae11-impression1': 'I was concerned about the multitude of aspects to consider and the lack of a detailed plan or instructions.',
            'sae11-impression2': 'This project gave me a global understanding of computer networks. I didn\'t feel I could get more out of it due to my uncertainties.',
            'sae11-autonomy': 'I had to take the initiative to explore and learn independently. This helped me develop my ability to learn on my own.',
            'sae11-problem': 'I faced various challenges throughout the project, whether in understanding complex concepts or solving technical problems.',
            'sae11-practical': 'Through activities like the TryHackMe challenge, we can concretely apply the concepts and techniques learned.',
            'sae11-conclusion': 'This was my favorite SAE, I really enjoyed this experience. With the MOOC, learning is step by step, which is good. I developed a more nuanced and informed perspective on security issues.',
            
            // SAE 12
            'sae12-title': 'Introduction to computer networks',
            'sae12-summary': 'Study of computer networks at different levels, design of a company network and application of knowledge to real situations.',
            'modal-sae12-title': 'Getting started with computer networks',
            'sae12-context': 'SAE 12 is a series of activities designed to explore and understand computer networks, both locally (in a lab) and at home. It also includes a company network design activity.',
            'sae12-impression1': 'I was concerned about the multitude of aspects to consider and the lack of a detailed plan or instructions.',
            'sae12-impression2': 'This project gave me a global understanding of computer networks. I didn\'t feel I could get more out of it due to my uncertainties.',
            'sae12-knowledge': 'To carry out this work, I used skills acquired during my R106 courses and online research.',
            'sae12-implementation': 'I learned to be more patient and to deepen my research to solve the problems encountered.',
            'sae12-conclusion': 'SAE 12 still allowed me to learn and understand computer networks at different levels. I only really like applying this knowledge to real situations, but it didn\'t bring me much overall.',
            
            // SAE 13
            'sae13-title': 'Bibliographic study',
            'sae13-summary': 'In-depth research on sound, microphones and loudspeakers, with an exploration of the characteristics of sound waves and conversion processes.',
            'modal-sae13-title': 'Bibliographic study',
            'sae13-context': 'As part of SAE13, we had to carry out a bibliographic study on sound, microphones and loudspeakers.',
            'sae13-explanation': 'Sound was studied in terms of its wave nature, with an exploration of the characteristics of sound waves. The microphone was defined as a device that converts acoustic pressure variations into electrical signals. The loudspeaker was defined as a device that converts electrical signals into mechanical vibrations producing sound waves.',
            'sae13-impression1': 'I thought it would be an interesting but potentially complex project.',
            'sae13-impression2': 'SAE13 was a good learning experience. I found this SAE enriching for deepening my understanding of sound, microphones and loudspeakers.',
            'sae13-difficulties': 'SAE13 was a challenge due to its length and the lack of precise instructions on what content to include. The number of pages required and the need for a structured plan from the outset added to the difficulty.',
            'sae13-conclusion': 'I am satisfied with the knowledge acquired and was able to review basic concepts that proved useful for the rest of my studies.',
            
            // SAE 15
            'sae15-title': 'Data processing',
            'sae15-summary': 'Energy management of a building through sensor data exploitation, development of a monitoring interface and real-time data processing.',
            'modal-sae15-title': 'Process data',
            'sae15-context': 'The main objective was to assist the technical department in the energy management of the R&T building by exploiting data from sensors distributed throughout the building. This data, in JSON format and accessible via the MQTT protocol, was processed to calculate an average and determine minimum and maximum values.',
            'sae15-impression1': 'From the start, I thought this would be the most difficult project to do. I was already pessimistic about the final grade because I have a lot of difficulty with bash scripting.',
            'sae15-impression2': 'SAE 15 was the most difficult for me. I encountered difficulties with the codes and understanding mosquitto commands in bash.',
            'sae15-knowledge': 'The first lab was useful for getting the basics of the project even though I had to redo it several times to better understand.',
            'sae15-difficulties': 'I encountered technical problems throughout the project, including code errors and difficulties understanding mosquitto commands in bash.',
            'sae15-improvements': 'I should have devoted more time to this work but I am satisfied with the skills acquired even if I don\'t fully master them.',
            'sae15-conclusion': 'To overcome these difficulties, I had to spend more time analyzing errors, referring to documentation and seeking help from online resources. This experience taught me perseverance in the face of technical challenges.',
            
            // SAE 21
            'sae21-title': 'Network for small organization',
            'sae21-summary': 'Design and configuration of a complete network for a fictional NGO with VLAN management, inter-VLAN routing, and implementation of essential services (DHCP, DNS).',
            'modal-sae21-title': 'Build a computer network for a small organization',
            'sae21-context': 'Design and configure a complete and secure computer network for a fictional organization (NGO Picon21) spread over several sites. This involved applying technical skills such as IP addressing, VLAN management, inter-VLAN routing, and implementation of essential services (DHCP, DNS, HTTP…).',
            'sae21-impression1': 'From the beginning, the project proved to be ambitious and dense. It required many technical skills simultaneously.',
            'sae21-impression2': 'This SAE was clearly one of the most demanding in terms of workload. Despite the difficulty, the project was well executed overall.',
            'sae21-autonomy': 'It was necessary to demonstrate rigor in task distribution and project tracking. Everyone played a role in progress, but the magnitude of the tasks sometimes required more coordination.',
            'sae21-technical': 'This SAE involved a wide variety of technical skills: VLAN configuration, network service implementation, use of Packet Tracer and deployment in a real lab.',
            'sae21-difficulties': 'Lack of time to test everything thoroughly, complexity of the addressing plan, and some configuration problems in the lab.',
            'sae21-conclusion': 'SAE21 was very formative, but also very demanding. It required the most investment in time, autonomy, and technical skills. Despite the challenges, the work accomplished is satisfactory as the network worked well overall and essential services were operational.',
            
            // SAE 22
            'sae22-title': 'Measurement and characterization',
            'sae22-summary': 'In-depth study of electricity, light and electromagnetism, with a historical and scientific approach to physical phenomena.',
            'modal-sae22-title': 'Measure and characterize a signal or system',
            'sae22-context': 'SAE22 aimed to deepen the fundamental concepts of electricity, light and electromagnetism. It combined a historical and scientific approach with solid theoretical contributions and sustained documentary work.',
            'sae22-explanation': 'The work was organized around several major themes: history of electricity, nature and properties of light, light-matter interaction and electromagnetic waves, practical applications, and in-depth study of antennas.',
            'sae22-impression1': 'I thought it would be an interesting but very theoretical project.',
            'sae22-impression2': 'SAE22 was not technically difficult, but it was very long and dense to complete, due to the large amount of concepts to integrate.',
            'sae22-knowledge': 'Significant deepening of my knowledge in applied physics (waves, antennas, light…).',
            'sae22-structuring': 'Strengthening my ability to structure a long project and produce clear and synthetic work.',
            'sae22-conclusion': 'SAE22 represented a substantial, long but formative work, which allowed me to explore complex concepts in depth, while developing my synthesis, organization and documentary rigor skills. Despite the stress related to the density of the project, I am generally satisfied with this experience.',
            
            // SAE 23
            'sae23-title': 'Business IT solution',
            'sae23-summary': 'Development of a complete IoT data processing and visualization chain with MQTT, Docker, Node-RED, InfluxDB and Grafana.',
            'modal-sae23-title': 'Implement an IT solution for the company',
            'sae23-context': 'The goal was to develop a complete chain for processing, storing and visualizing data from sensors via MQTT, all integrated into a dynamic web interface and a Grafana dashboard.',
            'sae23-explanation': 'We had to design a turnkey solution so that two building managers could access measurements from their sensors. Technical implementation: creation of a VM under Lubuntu, installation of Docker and Mosquitto, Node-RED, InfluxDB, Grafana containers, development of a dynamic website in PHP/HTML/CSS with MySQL database.',
            'sae23-impression1': 'I thought it would be a stimulating but feasible technical project.',
            'sae23-impression2': 'This SAE was not particularly difficult technically, but it was very time-consuming to complete, which could cause some stress.',
            'sae23-positives': 'Clear understanding of data flows in IoT environments, use of professional technologies, efficient task distribution.',
            'sae23-difficulties': 'Learning Node-RED, developing the dynamic website, managing Bash scripts, and project coordination.',
            'sae23-contribution': 'Better mastery of integration tools, increased comfort in web development, strengthening of patience and endurance.',
            'sae23-conclusion': 'SAE23 represented a complete, dense project rich in technical learning, requiring a lot of time and autonomy. While some parts were long and sometimes stressful to manage, the final result is functional and satisfactory. I consider this SAE as very useful and professionalizing.',
            
            // SAE 24
            'sae24-title': 'Eco-design of a smartphone',
            'sae24-summary': 'Analysis of the Fairphone 3+ from an eco-design perspective, development of an eco-responsible website and reflection on the environmental impact of technologies.',
            'modal-sae24-title': 'Reflection on the eco-design of a smartphone',
            'sae24-context': 'SAE24 aimed to raise student awareness of eco-design in technical projects, using the Fairphone 3+ as a case study, an ethically and sustainably designed smartphone.',
            'sae24-explanation': 'The project was structured around several main actions: disassembly of the Fairphone 3+, documentary research on its components, comparison with a non-eco-designed smartphone, development of an eco-designed static website, and deployment via an ecological host.',
            'sae24-impression1': 'I thought it would be an interesting and different project from other SAEs.',
            'sae24-impression2': 'This SAE was not technically difficult, but it turned out to be very dense and time-consuming to complete. The multiplicity of aspects to address required rigorous organization.',
            'sae24-environment': 'Better understanding of social and environmental issues related to electronics.',
            'sae24-ecodesign': 'Skills development in web eco-design (compression, structure, script limitation…).',
            'sae24-management': 'Practical experience in collaborative project management, between documentation, technical, design and presentation.',
            'sae24-conclusion': 'SAE24 was a very formative project, multidisciplinary, collective and committed. It allowed us to develop critical thinking about the digital industry while exploring responsible alternatives. Although it required a lot of work, we successfully completed the project. I consider this SAE useful and relevant.',
            
            // Generic titles
            'context-title': 'Context and objective',
            'initial-impression': 'Initial impression',
            'current-impression': 'Current impression',
            'experience-title': 'Experience review',
            'autonomy': 'Autonomy and initiative',
            'problem-solving': 'Research and problem solving',
            'practical-application': 'Practical application',
            'conclusion-title': 'Conclusion',
            'analysis-title': 'Analysis',
            'difficulties-title': 'Difficulties encountered',
            'positive-points': 'Positive points',
            'personal-contribution': 'Personal contribution',
            'key-points': 'Key points',
            'explanation-title': 'Explanation'
        }
    };

    // Fonction pour traduire le contenu spécifique à BUT1
    function translateBUT1Content(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Écouter l'événement de changement de langue de main.js
    document.addEventListener('languageChanged', function(e) {
        translateBUT1Content(e.detail.lang);
    });

    // Appliquer les traductions au chargement initial
    const currentLang = document.documentElement.getAttribute('lang') || 'fr';
    translateBUT1Content(currentLang);
});