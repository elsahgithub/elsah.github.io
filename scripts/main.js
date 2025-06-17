document.addEventListener('DOMContentLoaded', function () {
    // Gestion du menu et autres fonctionnalités communes
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('mainNav');

    // Gestion du menu principal
    menuToggle.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mainNav.classList.toggle('active');
    });

    // Gestion des sous-menus
    function setupDropdowns() {
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.classList.toggle('show');
                this.querySelector('i').classList.toggle('fa-rotate-180');
            });
        });
    }

    // Initialisation des dropdowns
    setupDropdowns();

    // Fermeture au clic externe
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.main-nav') && !e.target.closest('#menu-toggle')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            
            // Fermer tous les sous-menus
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
            
            // Réinitialiser les icônes
            document.querySelectorAll('.dropdown-toggle i').forEach(icon => {
                icon.classList.remove('fa-rotate-180');
            });
        }
    });

    // Gestion du thème avec localStorage
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Mettre à jour l'icône
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    }

    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        htmlElement.setAttribute('data-theme', savedTheme);
        
        // Mettre à jour l'icône en fonction du thème
        const icon = themeToggle.querySelector('i');
        if (savedTheme === 'dark') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
    applySavedTheme();

    // Gestion de la langue avec localStorage
    const translations = {
        fr: {
            title: 'Stage 2025 - Elsa HOM',
            logo: 'PORTFOLIO',
            home: 'Accueil',
            about: 'À propos',
            training: 'Formations',
            experience: 'Expériences',
            contact: 'Contact',
            SAE43: 'SAE43',
            stage2025: 'stage2025',
            CV: 'CV',
            'sae-analysis': 'Analyse SAE', // NOUVEAU: Ajout de la traduction pour Analyse SAE
            BUT1: 'BUT1',
            BUT2: 'BUT2',
            'lang-toggle': 'FR/EN',
            'validate-html': 'Valider HTML',
            'validate-css': 'Valider CSS',
            'footer-info-1': 'IUT de Blagnac',
            'footer-info-2': 'Département Réseaux et Télécommunications',
            'footer-info-3': 'BUT 2',
        },
        en: {
            title: 'Internship 2025 - Elsa HOM',
            logo: 'PORTFOLIO',
            home: 'Home',
            about: 'About',
            training: 'Education',
            experience: 'Experience',
            contact: 'Contact',
            SAE43: 'SAE43',
            stage2025: 'stage2025',
            CV: 'CV',
            'sae-analysis': 'SAE Analysis', // NOUVEAU: Ajout de la traduction pour Analyse SAE
            BUT1: 'BUT1',
            BUT2: 'BUT2',
            'lang-toggle': 'EN/FR',
            'validate-html': 'Validate HTML',
            'validate-css': 'Validate CSS',
            'footer-info-1': 'Institute of Technology Blagnac',
            'footer-info-2': 'Networks and Telecommunications Department',
            'footer-info-3': 'BUT 2',
        }
    };

    function translatePage(lang) {
        // Mettre à jour les éléments communs
        document.title = translations[lang]['title'];
        document.querySelector('.logo').textContent = translations[lang]['logo'];
        
        // Mettre à jour les éléments de navigation
        document.querySelectorAll('.nav-item:not(.dropdown) .nav-link').forEach((el, index) => {
            const keys = ['home', 'about', 'training', 'experience', 'contact'];
            if (index < keys.length) {
                el.textContent = translations[lang][keys[index]];
            }
        });

        // Mettre à jour le texte du dropdown-toggle avec l'icône
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
            dropdownToggle.innerHTML = `${translations[lang]['SAE43']} <i class="fas fa-chevron-down"></i>`;
        }

        // Mettre à jour les sous-menus de SAE43
        const dropdownItems = document.querySelectorAll('.dropdown-menu a');
        const subMenuKeys = ['stage2025', 'CV', 'sae-analysis', 'BUT1', 'BUT2']; // MODIF: Remplacement de SAE-BUT2 par sae-analysis
        dropdownItems.forEach((el, index) => {
            if (index < subMenuKeys.length) {
                const key = subMenuKeys[index];
                if (translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Mettre à jour le footer
        const footerItems = document.querySelectorAll('.footer-info li');
        if (footerItems.length > 0) {
            footerItems.forEach((el, index) => {
                const key = `footer-info-${index + 1}`;
                if (translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
        }

        // Mettre à jour les boutons de validation
        document.querySelectorAll('.validator-btn').forEach((el, index) => {
            const keys = ['validate-html', 'validate-css'];
            if (index < keys.length) {
                el.textContent = translations[lang][keys[index]];
            }
        });

        // Mettre à jour le bouton de langue
        document.querySelector('#lang-toggle').textContent = translations[lang]['lang-toggle'];

        // Réattacher les événements des dropdowns
        setupDropdowns();
    }

    function toggleLanguage() {
        const currentLang = htmlElement.getAttribute('lang');
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        htmlElement.setAttribute('lang', newLang);
        localStorage.setItem('language', newLang);
        translatePage(newLang);

        // Déclencher un événement personnalisé pour notifier les autres scripts
        const langChangeEvent = new CustomEvent('languageChanged', { detail: { lang: newLang } });
        document.dispatchEvent(langChangeEvent);
    }

    function applySavedLanguage() {
        const savedLang = localStorage.getItem('language') || 'fr';
        htmlElement.setAttribute('lang', savedLang);
        translatePage(savedLang);
    }

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    applySavedLanguage();

    // Mise en évidence du menu actif
    function highlightActiveMenu() {
        const currentPage = window.location.pathname.split('/').pop();
        const menuItems = document.querySelectorAll('.nav-link');
        
        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage) {
                item.parentElement.classList.add('active');
            } else {
                item.parentElement.classList.remove('active');
            }
        });
        
        // Gestion spéciale pour SAE43 et ses sous-menus
        if (currentPage === 'stage2025.html' || 
            currentPage === 'CV.html' || 
            currentPage === 'analyse_sae.html' || // MODIF: Remplacement de SAE-BUT2.html par analyse_sae.html
            currentPage === 'BUT1.html' || 
            currentPage === 'BUT2.html') {
            const dropdown = document.querySelector('.nav-item.dropdown');
            if (dropdown) {
                dropdown.classList.add('active');
                
                // Mettre en évidence le sous-menu actif
                const subMenuItems = document.querySelectorAll('.dropdown-menu li');
                subMenuItems.forEach(li => {
                    const link = li.querySelector('a');
                    if (link && link.getAttribute('href') === currentPage) {
                        li.classList.add('active');
                    } else {
                        li.classList.remove('active');
                    }
                });
            }
        }
    }

    highlightActiveMenu();
});