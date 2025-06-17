document.addEventListener('DOMContentLoaded', () => {
    // Traductions pour la page d'expérience
    const experienceTranslations = {
        fr: {
            'professional-experiences': 'Expériences Professionnelles',
            'internship-type-observation': 'Stage d\'observation',
            'internship-description-1': 'Conception et développement d\'expériences interactives et immersives',
            'internship-task-1-1': 'Modélisation d\'Objet 3D - SketchUp',
            'internship-task-1-2': 'Création d\'arborescence site web/application',
            'internship-type-seasonal': 'Job saisonnier',
            'job-waitress': 'Serveuse',
            'job-skill-1': 'Proactivité, sens de l\'hospitalité',
            'job-skill-2': 'Collaboration en équipe, service clientèle',
            'internship-type-intern': 'Stage conventionnée',
            'internship-description-3': 'Cybersécurité Réseaux',
            'internship-task-3-1': 'Migration de routage statique à routage dynamique',
            'internship-task-3-2': 'Déploiement et intégration d\'un SASE',
            'alternance-type': 'Alternance',
            'pending-project': 'Projet à venir',
            'read-report': 'Lire le rapport',
            'internship-report-title': 'Rapport de stage - Avant-Garde-Imaging',
            'report-section-1-title': 'Découverte de l\'Entreprise et de son Organisation',
            'report-section-1-content': 'L\'espace de travail est structuré de manière à favoriser la collaboration entre les différentes équipes : designers graphiques 2D/3D, développeurs, cheffe de projet, et ingénieurs. J\'ai pu observer la diversité des métiers et comprendre comment chaque poste contribue au bon déroulement des projets.',
            'report-section-1-content-2': 'L\'entreprise est spécialisée dans la création de concepts interactifs et innovants. Elle travaille sur des applications interactives destinées à la communication, au marketing et au commerce pour de grandes entreprises comme Airbus, Thales, le CNES et Google.'
        },
        en: {
            'professional-experiences': 'Professional Experiences',
            'internship-type-observation': 'Observation internship',
            'internship-description-1': 'Design and development of interactive and immersive experiences',
            'internship-task-1-1': '3D Object Modeling - SketchUp',
            'internship-task-1-2': 'Website/application tree structure creation',
            'internship-type-seasonal': 'Seasonal job',
            'job-waitress': 'Waitress',
            'job-skill-1': 'Proactivity, sense of hospitality',
            'job-skill-2': 'Team collaboration, customer service',
            'internship-type-intern': 'Convention internship',
            'internship-description-3': 'Network Cybersecurity',
            'internship-task-3-1': 'Migration from static routing to dynamic routing',
            'internship-task-3-2': 'Deployment and integration of a SASE',
            'alternance-type': 'Apprenticeship',
            'pending-project': 'Upcoming project',
            'read-report': 'Read the report',
            'internship-report-title': 'Internship report - Avant-Garde-Imaging',
            'report-section-1-title': 'Discovery of the Company and its Organization',
            'report-section-1-content': 'The workspace is structured to foster collaboration between different teams: 2D/3D graphic designers, developers, project manager, and engineers. I was able to observe the diversity of professions and understand how each position contributes to the smooth running of projects.',
            'report-section-1-content-2': 'The company specializes in creating interactive and innovative concepts. It works on interactive applications for communication, marketing, and commerce for large companies such as Airbus, Thales, CNES, and Google.'
        }
    };

    // Fonction de traduction
    function translateExperiencePage(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (experienceTranslations[lang] && experienceTranslations[lang][key]) {
                element.textContent = experienceTranslations[lang][key];
            }
        });
    }

    // Appliquer la traduction au chargement
    const savedLang = localStorage.getItem('language') || 'fr';
    translateExperiencePage(savedLang);

    // Gestion du changement de langue
    document.addEventListener('languageChanged', (event) => {
        translateExperiencePage(event.detail.lang);
    });

    // Animation de la timeline
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });

    // Gestion des flip cards
    document.querySelectorAll('.flip-card').forEach(card => {
        let isFlipped = false;
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a, button')) {
                isFlipped = !isFlipped;
                card.classList.toggle('flipped', isFlipped);
                
                if (!isFlipped) {
                    setTimeout(() => {
                        card.querySelector('.flip-card-inner').style.transform = '';
                    }, 600);
                }
            }
        });
    });

    // Gestion modale
    const modal = document.getElementById('reportModal');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Fermeture modale
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => e.target === modal && closeModal());
});