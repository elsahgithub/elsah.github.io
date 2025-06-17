document.addEventListener('DOMContentLoaded', function () {
    // ======================================================================
    // PARTIE TRADUCTION
    // ======================================================================
    
    // Étendre l'objet translations de main.js
    const mainTranslations = window.translations || { fr: {}, en: {} };
    
    // Traductions spécifiques à la page formation.html
    mainTranslations.fr = {
        ...mainTranslations.fr,
        // Titres et descriptions
        'certifications-title': 'Mes Certifications',
        'certifications-desc': 'Cliquez ou survolez les cartes pour découvrir mes certifications et en savoir plus sur ce qu\'elles représentent.',
        'attestation-title': 'Attestation',
        'attestation-desc': 'Voici l\'attestation de suivi du MOOC SecNumacadémie délivrée par l\'ANSSI obtenue en 2023.',
        'parcours-title': 'Parcours Pré-BUT',
        'lycee-title': 'Lycée Général',
        'lycee-text': 'Après avoir suivi une première année de spécialité NSI (Numérique et Sciences Informatiques) en classe de première, j\'ai choisi de poursuivre en terminale avec des matières scientifiques telles que les mathématiques et la physique, en optant pour un enseignement plus approfondi avec les mathématiques expertes.',
        'lycee-text2': 'Le lycée a également été l\'occasion d\'approfondir mes compétences en langues, notamment en anglais et en allemand. J\'ai toujours aimé les langues étrangères, et je continue aujourd\'hui à m\'exercer en dehors du cadre scolaire.',
        'attestation-allemand-title': 'Attestation de compétences en allemand',
        'prepa-title': 'Prépa Intégrée',
        'prepa-text': 'Optant pour une prépa intégrée, j\'ai ensuite passé le concours Geipi Polytech pour intégrer le PeiP à Paris Saclay. Cela a été une période d\'exploration où j\'ai eu l\'opportunité d\'approfondir mes connaissances, mais également de réfléchir à mes aspirations professionnelles. J\'ai réalisé que mon intérêt particulier pour les réseaux et les télécommunications nécessitait une formation plus spécifique et orientée vers la pratique.',
        'but-title': 'BUT Réseaux et Télécommunications - Parcours Cybersécurité',
        'formation-title': 'La formation',
        'formation-text1': 'En tant qu\'étudiant à l\'IUT Blagnac, je suis actuellement en cours de formation dans le domaine des Réseaux et Télécommunications. Le choix d\'entreprendre ce parcours académique a été motivé par mon aspiration à devenir ingénieur en cybersécurité ou à travailler dans l\'expertise à l\'avenir. Je suis fasciné par la perspective de contribuer à la sécurité des systèmes d\'information, c\'est donc naturellement que j\'ai fait ce choix.',
        'formation-text2': 'L\'ingénierie, en tant que profession, me captive en raison de sa polyvalence intrinsèque. Elle met constamment au défi les individus d\'élargir leur base de connaissances, offrant un parcours professionnel stimulant et en constante évolution.',
        'formation-text3': 'Quant à ma vision pour l\'avenir, je me projette dans la finalité en tant qu\'expert en sécurité des systèmes d\'information, cela étant dans le domaine des Réseaux et Télécommunications, avec une expertise particulière en cybersécurité. Je souhaite jouer un rôle essentiel dans la protection des réseaux et des données contre les attaques malveillantes, contribuant ainsi à préserver l\'intégrité et la confidentialité des organisations.',
        'information-desc': 'Cliquez sur les boutons ci-dessous pour en savoir plus sur la formation, le bilan de compétences et les projets du BUT.',
        'modal-title': 'Attestation de compétences en allemand (session 2019)',
        
        // Cartes de certification
        'ccna1-title': 'Certification Cisco CCNA1',
        'ccna1-status': 'Acquise en 2023',
        'ccna1-desc': 'La certification CCNA1 valide mes compétences en réseaux informatiques, notamment la configuration et la gestion des routeurs et commutateurs Cisco.',
        'ccna2-title': 'Certification Cisco CCNA2',
        'ccna2-status': 'En cours d\'acquisition',
        'ccna2-desc': 'La certification CCNA2 approfondit les concepts de routage et de commutation avancés. Je suis actuellement en train de préparer cette certification.',
        'ccna3-title': 'Certification Cisco CCNA3',
        'ccna3-status': 'En cours d\'apprentissage',
        'ccna3-desc': 'La certification CCNA3 se concentre sur les réseaux étendus (WAN) et les technologies de sécurité. Je suis en phase d\'apprentissage.',
        'ethical-title': 'Certification en Ethical Hacking',
        'ethical-status': 'En cours d\'apprentissage',
        'ethical-desc': 'Cette certification couvre les techniques de test d\'intrusion et de sécurisation des systèmes. Je suis en train de maîtriser les concepts.',
        
        // Boutons et liens
        'certificate-preview': 'Aperçu du certificat',
        'view-attestation': 'Voir l\'attestation',
        'in-progress': 'En cours d\'acquisition',
        'learning': 'En cours d\'apprentissage',
        'fiche-formation': 'Fiche Formation',
        'bilan-formation': 'Bilan de Formation',
        'projet-but': 'Projet du BUT',
        
        // Bilan de formation
        'bilan-title': 'Bilan de Formation',
        'bilan-desc': 'Voici un aperçu des compétences et connaissances acquises au cours de ma formation en BUT Réseaux et Télécommunications.',
        'bilan-subtitle1': '1. Apports de la formation en BUT R&T',
        'bilan-text1': 'Le BUT Réseaux & Télécommunications, parcours Cybersécurité, suivi à l’IUT de Blagnac, m’a permis d’acquérir des compétences techniques et humaines solides, essentielles pour évoluer dans le domaine de la cybersécurité et des réseaux. Ce cursus, motivé par mon ambition de devenir ingénieur en cybersécurité, m’a offert une vision concrète des enjeux liés à la sécurité des systèmes d’information et m’a permis de développer une polyvalence recherchée dans l’ingénierie moderne.',
        'bilan-subtitle2': 'Compétences techniques acquises',
        'bilan-item1': 'Cybersécurité et hygiène informatique :',
        'bilan-item2': 'Réseaux informatiques :',
        'bilan-item3': 'Traitement & visualisation de données :',
        'bilan-item4': 'Physique appliquée :',
        'bilan-subtitle3': 'Compétences transversales et personnelles',
        'bilan-item5': 'Autonomie et organisation :',
        'bilan-item6': 'Travail en équipe :',
        'bilan-item7': 'Gestion du stress et persévérance :',
        'bilan-item8': 'Esprit critique et curiosité :',
        'bilan-subtitle4': '2. Apport personnel de la formation',
        'bilan-text2': 'Cette formation m’a permis de mieux me connaître, d’identifier mes forces (autonomie, esprit d’analyse, curiosité) et mes points d’amélioration (gestion du temps, approfondir certains outils). J’ai gagné en confiance, adaptabilité et capacité à apprendre seul.',
        'bilan-subtitle5': '3. Choix de poursuite en prépa ATS et projet professionnel',
        'bilan-text3': 'J’ai choisi de poursuivre en prépa ATS pour renforcer mes bases scientifiques et préparer l’intégration d’une école d’ingénieur en cybersécurité. L\'objectif : devenir ingénieur en cybersécurité, capable de protéger les systèmes et infrastructures critiques.'
    };

    mainTranslations.en = {
        ...mainTranslations.en,
        // Titres et descriptions
        'certifications-title': 'My Certifications',
        'certifications-desc': 'Click or hover over the cards to discover my certifications and learn more about what they represent.',
        'attestation-title': 'Certificate',
        'attestation-desc': 'Here is the SecNumacademy MOOC certificate issued by ANSSI, obtained in 2023.',
        'parcours-title': 'Pre-BUT Path',
        'lycee-title': 'High School',
        'lycee-text': 'After completing a first year in NSI specialty (Digital and Computer Sciences) in the first year of high school, I chose to continue in the final year with scientific subjects such as mathematics and physics, opting for more in-depth teaching with advanced mathematics.',
        'lycee-text2': 'High school was also an opportunity to deepen my language skills, particularly in English and German. I have always loved foreign languages, and I continue to practice outside of school today.',
        'attestation-allemand-title': 'German Language Skills Certificate',
        'prepa-title': 'Integrated Preparatory Class',
        'prepa-text': 'Opting for an integrated preparatory class, I then took the Geipi Polytech competition to join the PeiP at Paris Saclay. This was a period of exploration where I had the opportunity to deepen my knowledge but also reflect on my professional aspirations. I realized that my particular interest in networks and telecommunications required more specific and practice-oriented training.',
        'but-title': 'BUT Networks and Telecommunications - Cybersecurity Track',
        'formation-title': 'The Training',
        'formation-text1': 'As a student at IUT Blagnac, I am currently undergoing training in the field of Networks and Telecommunications. The choice to undertake this academic path was motivated by my aspiration to become a cybersecurity engineer or work in expertise in the future. I am fascinated by the prospect of contributing to information system security, so I naturally made this choice.',
        'formation-text2': 'Engineering as a profession captivates me because of its intrinsic versatility. It constantly challenges individuals to broaden their knowledge base, offering a stimulating and ever-evolving professional journey.',
        'formation-text3': 'As for my vision for the future, I see myself as an information systems security expert in the field of Networks and Telecommunications, with a particular expertise in cybersecurity. I wish to play an essential role in protecting networks and data against malicious attacks, thus helping to preserve the integrity and confidentiality of organizations.',
        'information-desc': 'Click on the buttons below to learn more about the training, skills assessment, and BUT projects.',
        'modal-title': 'German Language Skills Certificate (2019 session)',
        
        // Cartes de certification
        'ccna1-title': 'Cisco CCNA1 Certification',
        'ccna1-status': 'Acquired in 2023',
        'ccna1-desc': 'The CCNA1 certification validates my skills in computer networking, including the configuration and management of Cisco routers and switches.',
        'ccna2-title': 'Cisco CCNA2 Certification',
        'ccna2-status': 'In progress',
        'ccna2-desc': 'The CCNA2 certification delves into advanced routing and switching concepts. I am currently preparing for this certification.',
        'ccna3-title': 'Cisco CCNA3 Certification',
        'ccna3-status': 'Learning in progress',
        'ccna3-desc': 'The CCNA3 certification focuses on wide area networks (WAN) and security technologies. I am in the learning phase.',
        'ethical-title': 'Ethical Hacking Certification',
        'ethical-status': 'Learning in progress',
        'ethical-desc': 'This certification covers penetration testing and system security techniques. I am in the process of mastering the concepts.',
        
        // Boutons et liens
        'certificate-preview': 'View Certificate',
        'view-attestation': 'View Certificate',
        'in-progress': 'In progress',
        'learning': 'Learning in progress',
        'fiche-formation': 'Training Sheet',
        'bilan-formation': 'Skills Assessment',
        'projet-but': 'BUT Project',
        
        // Bilan de formation
        'bilan-title': 'Training Assessment',
        'bilan-desc': 'Here is an overview of the skills and knowledge acquired during my BUT Networks and Telecommunications training.',
        'bilan-subtitle1': '1. Contributions of the BUT R&T Training',
        'bilan-text1': 'The BUT Networks & Telecommunications, Cybersecurity track, followed at IUT Blagnac, allowed me to acquire solid technical and human skills essential to evolve in the field of cybersecurity and networks. This curriculum, motivated by my ambition to become a cybersecurity engineer, gave me a concrete vision of the challenges related to information system security and allowed me to develop a versatility sought in modern engineering.',
        'bilan-subtitle2': 'Acquired Technical Skills',
        'bilan-item1': 'Cybersecurity and IT hygiene:',
        'bilan-item2': 'Computer networks:',
        'bilan-item3': 'Data processing & visualization:',
        'bilan-item4': 'Applied physics:',
        'bilan-subtitle3': 'Transferable and Personal Skills',
        'bilan-item5': 'Autonomy and organization:',
        'bilan-item6': 'Teamwork:',
        'bilan-item7': 'Stress management and perseverance:',
        'bilan-item8': 'Critical thinking and curiosity:',
        'bilan-subtitle4': '2. Personal Contribution of the Training',
        'bilan-text2': 'This training allowed me to know myself better, to identify my strengths (autonomy, analytical mind, curiosity) and my areas for improvement (time management, deepening certain tools). I gained confidence, adaptability and ability to learn on my own.',
        'bilan-subtitle5': '3. Choice to Continue in ATS Prep and Professional Project',
        'bilan-text3': 'I chose to continue in ATS prep to strengthen my scientific foundations and prepare for integration into an engineering school in cybersecurity. The goal: to become a cybersecurity engineer capable of protecting systems and critical infrastructure.'
    };

    // Mettre à jour le dictionnaire global
    window.translations = mainTranslations;

    // Fonction de traduction spécifique à cette page
    function translateFormationPage(lang) {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT') {
                    el.value = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // Synchroniser les traductions au changement de langue
    document.addEventListener('languageChanged', function(e) {
        translateFormationPage(e.detail.lang);
    });

    // Appliquer les traductions au chargement
    const savedLang = localStorage.getItem('language') || 'fr';
    translateFormationPage(savedLang);

    // ======================================================================
    // PARTIE INTERACTIONS DE LA PAGE
    // ======================================================================
    
    // Gestion de la fenêtre modale
    const modal = document.getElementById('modal');
    const viewButton = document.querySelector('.view-button');
    const closeButton = document.querySelector('.close');

    // Ouvrir la fenêtre modale
    if (viewButton) {
        viewButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    }

    // Fermer la fenêtre modale
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Fermer la fenêtre modale en cliquant en dehors
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Gestion des boutons de la section BUT
    const ficheFormationBtn = document.getElementById('fiche-formation-btn');
    const bilanFormationBtn = document.getElementById('bilan-formation-btn');
    const projetButBtn = document.getElementById('projet-but-btn');
    const ficheFormationContent = document.getElementById('fiche-formation-content');
    const bilanFormationContent = document.getElementById('bilan-formation-content');
    const contentContainer = document.getElementById('content-container');
    const pdfViewer = document.getElementById('pdf-viewer');
    const nextPdfBtn = document.getElementById('next-pdf-btn');
    const prevPdfBtn = document.getElementById('prev-pdf-btn');

    // Masquer initialement le content-container
    if (contentContainer) contentContainer.style.display = 'none';

    // Variable pour suivre l'état d'affichage
    let ficheFormationVisible = false;
    let bilanFormationVisible = false;

    if (ficheFormationBtn) {
        ficheFormationBtn.addEventListener('click', function () {
            if (ficheFormationVisible) {
                // Si déjà visible, on masque tout
                contentContainer.style.display = 'none';
                ficheFormationContent.style.display = 'none';
                ficheFormationVisible = false;
            } else {
                // Sinon, on affiche la fiche de formation
                contentContainer.style.display = 'block';
                ficheFormationContent.style.display = 'block';
                if (bilanFormationContent) bilanFormationContent.style.display = 'none';
                pdfViewer.setAttribute('src', 'docs/fiche_formation.pdf');
                prevPdfBtn.style.display = 'none';
                nextPdfBtn.style.display = 'block';
                contentContainer.scrollIntoView({ behavior: 'smooth' });
                ficheFormationVisible = true;
                bilanFormationVisible = false;
            }
        });
    }

    if (bilanFormationBtn) {
        bilanFormationBtn.addEventListener('click', function () {
            if (bilanFormationVisible) {
                // Si déjà visible, on masque tout
                contentContainer.style.display = 'none';
                bilanFormationContent.style.display = 'none';
                bilanFormationVisible = false;
            } else {
                // Sinon, on affiche le bilan de formation
                contentContainer.style.display = 'block';
                if (ficheFormationContent) ficheFormationContent.style.display = 'none';
                bilanFormationContent.style.display = 'block';
                contentContainer.scrollIntoView({ behavior: 'smooth' });
                bilanFormationVisible = true;
                ficheFormationVisible = false;
            }
        });
    }

    if (projetButBtn) {
        projetButBtn.addEventListener('click', function () {
            window.location.href = 'BUT1.html';
        });
    }

    // Gestion des flèches pour basculer entre les PDF
    if (nextPdfBtn) {
        nextPdfBtn.addEventListener('click', function () {
            pdfViewer.setAttribute('src', 'docs/connaissances.pdf');
            nextPdfBtn.style.display = 'none';
            prevPdfBtn.style.display = 'block';
        });
    }

    if (prevPdfBtn) {
        prevPdfBtn.addEventListener('click', function () {
            pdfViewer.setAttribute('src', 'docs/fiche_formation.pdf');
            prevPdfBtn.style.display = 'none';
            nextPdfBtn.style.display = 'block';
        });
    }
});