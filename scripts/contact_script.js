document.addEventListener('DOMContentLoaded', function () {
    // Étendre l'objet translations de main.js
    const mainTranslations = window.translations || { fr: {}, en: {} };
    
    // Traductions spécifiques à la page contact
    mainTranslations.fr = {
        ...mainTranslations.fr,
        'contact-title': 'Contactez-moi',
        'name-placeholder': 'Votre nom',
        'email-placeholder': 'Votre email',
        'subject-placeholder': 'Sujet',
        'phone-placeholder': 'Numéro de téléphone',
        'message-placeholder': 'Votre message',
        'send-button': 'Envoyer'
    };

    mainTranslations.en = {
        ...mainTranslations.en,
        'contact-title': 'Contact me',
        'name-placeholder': 'Your name',
        'email-placeholder': 'Your email',
        'subject-placeholder': 'Subject',
        'phone-placeholder': 'Phone number',
        'message-placeholder': 'Your message',
        'send-button': 'Send'
    };

    // Mettre à jour le dictionnaire global
    window.translations = mainTranslations;

    // Fonction de traduction spécifique à cette page
    function translateContactPage(lang) {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                // Traitement spécial pour les placeholders
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } 
                // Traitement standard pour les autres éléments
                else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // Synchroniser les traductions au changement de langue
    document.addEventListener('languageChanged', function(e) {
        translateContactPage(e.detail.lang);
    });

    // Appliquer les traductions au chargement
    const savedLang = localStorage.getItem('language') || 'fr';
    translateContactPage(savedLang);
});