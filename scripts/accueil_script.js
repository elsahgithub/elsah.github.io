document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded'); // Debug

    function updateContent(lang) {
        console.log('Updating content to:', lang); // Debug

        const translations = {
            fr: {
                'hero-subtitle': 'BIENVENUE DANS MON UNIVERS NUMÉRIQUE',
                'hero-title': 'Je suis ',
                'hero-text': 'Découvrez mon portfolio numérique, un espace dédié à mes réalisations et passions.',
                'eportfolio-title': "Qu'est-ce qu'un ePortfolio ?",
                'eportfolio-quote': '« Un ePortfolio est une collection d\'informations numériques décrivant et illustrant l\'apprentissage ou la carrière d\'une personne, son expérience et ses réussites. C\'est un espace privé dont le propriétaire contrôle totalement l\'accès. »',
                'eportfolio-text': "Il s'agit d'un dossier personnel évolutif organisant travaux, réalisations et réflexions sur un support numérique.",
            },
            en: {
                'hero-subtitle': 'WELCOME TO MY DIGITAL UNIVERSE',
                'hero-title': 'I am ',
                'hero-text': 'Discover my digital portfolio, a space dedicated to my achievements and passions.',
                'eportfolio-title': 'What is an ePortfolio?',
                'eportfolio-quote': '"An ePortfolio is a collection of digital information describing and illustrating a person\'s learning or career, their experience and achievements. It is a private space whose owner has total control over access."',
                'eportfolio-text': 'It is an evolving personal file organizing work, achievements, and reflections on a digital medium.',
            }
        };

        // Mettre à jour le contenu spécifique à la page d'accueil
        document.querySelector('.hero-subtitle').textContent = translations[lang]['hero-subtitle'];
        document.querySelector('.typing-animation').textContent = translations[lang]['hero-title'];
        document.querySelector('.hero-text').textContent = translations[lang]['hero-text'];
        document.querySelector('#eportfolio-definition h2').textContent = translations[lang]['eportfolio-title'];

        // Mettre à jour uniquement le texte de la citation, sans toucher au footer
        const blockquote = document.querySelector('#eportfolio-definition blockquote');
        blockquote.innerHTML = `${translations[lang]['eportfolio-quote']}<footer>- EIfEL (2009)</footer>`;

        document.querySelector('#eportfolio-definition p').textContent = translations[lang]['eportfolio-text'];
    }

    // Appliquer la langue sauvegardée au chargement de la page
    const savedLang = localStorage.getItem('language') || 'fr';
    updateContent(savedLang);

    // Écouter l'événement personnalisé pour mettre à jour le contenu lorsque la langue change
    document.addEventListener('languageChanged', function (e) {
        updateContent(e.detail.lang);
    });
});