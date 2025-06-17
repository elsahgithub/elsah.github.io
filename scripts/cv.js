document.addEventListener('DOMContentLoaded', function() {
    // Traductions spécifiques à la page CV
    const cvTranslations = {
        fr: {
            'cv-french': 'Version Française',
            'cv-english': 'Version Anglaise',
            'download-cv': 'Télécharger le CV',
            'view-fullscreen': 'Voir en plein écran',
            'cv-summary': 'Résumé de mon parcours',
            'cv-education': 'Formation',
            'cv-education-desc': 'BUT Réseaux et Télécommunications - Spécialisation Cybersécurité',
            'cv-experience': 'Expérience',
            'cv-experience-desc': 'Stage en administration réseau - 3 mois',
            'cv-certifications': 'Certifications',
            'cv-certifications-desc': 'CCNA1, SecNum Académie',
            'cv-skills': 'Compétences',
            'cv-skills-desc': 'Réseaux, Cybersécurité, Programmation, Télécoms'
        },
        en: {
            'cv-french': 'French Version',
            'cv-english': 'English Version',
            'download-cv': 'Download CV',
            'view-fullscreen': 'View Fullscreen',
            'cv-summary': 'Career Summary',
            'cv-education': 'Education',
            'cv-education-desc': 'Networks and Telecommunications Degree - Cybersecurity Specialization',
            'cv-experience': 'Experience',
            'cv-experience-desc': 'Network administration internship - 3 months',
            'cv-certifications': 'Certifications',
            'cv-certifications-desc': 'CCNA1, SecNum Academy',
            'cv-skills': 'Skills',
            'cv-skills-desc': 'Networking, Security, Programming, Telecoms'
        }
    };

    // Gestion du sélecteur de langue pour les CV
    const cvLangButtons = document.querySelectorAll('.cv-lang-btn');
    
    cvLangButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Retirer la classe active de tous les boutons
            cvLangButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Afficher le CV correspondant à la langue sélectionnée
            document.querySelectorAll('.cv-pdf-container').forEach(container => {
                container.classList.remove('active');
            });
            
            document.getElementById(`cv-${lang}`).classList.add('active');
        });
    });
    
    // Fonction pour appliquer les traductions à la page CV
    function applyCVTranslations(lang) {
        // Récupérer les traductions pour la langue spécifiée
        const translations = cvTranslations[lang];
        
        // Traduire tous les éléments avec des attributs data-lang
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Traduction spéciale pour les boutons de langue des CV
        const cvLangButtons = document.querySelectorAll('.cv-lang-btn span');
        cvLangButtons.forEach(btn => {
            const key = btn.getAttribute('data-lang');
            if (translations[key]) {
                btn.textContent = translations[key];
            }
        });
    }
    
    // Synchroniser avec la langue globale
    function syncWithGlobalLanguage() {
        const currentLang = document.documentElement.getAttribute('lang');
        const defaultLang = currentLang === 'fr' ? 'fr' : 'en';
        
        // Mettre à jour le sélecteur de CV
        cvLangButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === defaultLang) {
                btn.classList.add('active');
            }
        });
        
        // Afficher le CV correspondant
        document.querySelectorAll('.cv-pdf-container').forEach(container => {
            container.classList.remove('active');
        });
        
        document.getElementById(`cv-${defaultLang}`).classList.add('active');
        
        // Appliquer les traductions
        applyCVTranslations(defaultLang);
    }
    
    // Appliquer au chargement
    syncWithGlobalLanguage();
    
    // Écouter les changements de langue globale
    document.addEventListener('languageChanged', function(event) {
        syncWithGlobalLanguage();
    });
    
    // Initialisation supplémentaire au cas où la page serait chargée après le main.js
    setTimeout(() => {
        const lang = document.documentElement.getAttribute('lang') || 'fr';
        applyCVTranslations(lang);
    }, 100);
});