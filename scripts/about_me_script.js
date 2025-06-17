document.getElementById('kaizenImage').addEventListener('click', function() {
        var kaizenText = document.getElementById('kaizenText');
        if (kaizenText.style.display === 'none' || kaizenText.style.display === '') {
            kaizenText.style.display = 'block';
        } else {
            kaizenText.style.display = 'none';
        }
    });
	
// about_me_script.js
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded'); // Debug

    function updateContent(lang) {
        console.log('Updating content to:', lang); // Debug

        const translations = {
            fr: {
                'about-me-title': 'À propos de moi',
                'about-me-intro': 'Je m\'appelle Elsa HOM, j\'ai 18 ans et je vis à Portet. Ce portfolio est un aperçu de mon parcours, mettant en avant mes compétences techniques et mes divers centres d\'intérêt, de l\'art aux activités physiques.',
                'personal-characteristics-title': 'Caractéristiques personnelles',
                'personal-characteristics-description': 'Je me décris comme une personne très simple et calme. Cependant, au fond, je suis très passionnée. Guidée par une curiosité profonde et un talent pour la résolution de problèmes, je navigue dans les domaines de la cybersécurité. En tant que personne déterminée et persévérante, je m\'investis beaucoup dans ce que j\'entreprends.',
                'why-but-title': 'Pourquoi le BUT et le BUT R&T',
                'why-but-description': 'Je suis étudiante à l\'IUT de Blagnac, où je poursuis un diplôme en réseaux et télécommunications. L\'IUT est un institut universitaire de technologie qui propose une formation technique et théorique dans des domaines tels que les réseaux informatiques. J\'ai choisi ces études parce que j\'aimerais devenir ingénieure en cybersécurité à l\'avenir. En général, je trouve que l\'ingénierie est une profession très intéressante en raison de son aspect polyvalent, et c\'est une carrière qui nous pousse à nous enrichir constamment. L\'une des raisons pour lesquelles j\'ai choisi le BUT R&T est l\'évolution constante du secteur informatique et des technologies, ce qui implique un besoin important de main-d\'œuvre pour garantir la sécurité informatique. Les opportunités professionnelles et la variété des tâches sont ce qui m\'intéressent le plus, car je peux apprendre quelque chose de nouveau chaque jour.',
                'center-of-interest-title': 'Centres d\'intérêt',
                'some-videos-title': 'Quelques vidéos',
                'visit-to-versailles': 'Visite de Versailles',
                'tour-of-northern-france': 'Tour du nord de la France',
                'video-editing-description': 'En ce qui concerne mon intérêt pour le montage vidéo, c\'est une passion que j\'ai développée au fil du temps. J\'ai toujours été fascinée par la possibilité de raconter des histoires et de captiver les gens à travers des images animées.',
                'cardboard-cut-outs-title': 'Découpages en carton',
                'cardboard-cut-outs-description': 'Dans mon portfolio, mes centres d\'intérêt sont les piliers qui définissent ma personnalité et mes passions. Ma polyvalence se reflète dans une variété d\'activités, allant de la création artistique à l\'exploration numérique. Ma passion pour les arts visuels tels que le dessin, l\'origami et le montage vidéo révèle mon identité créative, tandis que mon attrait pour les activités manuelles souligne mon engagement envers la précision et la patience.',
                'extra-curricular-activities-title': 'Activités extra-scolaires',
                'extra-curricular-activities-description': 'En ce qui concerne les activités, j\'ai fait 2 ans de natation et 3 ans de gymnastique quand j\'étais plus jeune. J\'ai aussi fait de l\'escalade une fois. Actuellement, j\'aime faire du sport même si je ne suis pas dans un club. Je fais souvent des activités chez moi, comme jouer au badminton avec des amis, faire du vélo ou d\'autres exercices physiques pour me vider l\'esprit et rester active.',
                'mindset-title': 'État d\'esprit',
                'click-here': 'Cliquez ici -->',
                'kaizen-definition': '→ Un mot JAPONAIS qui signifie : Chaque jour est une opportunité de vous améliorer, même si cela ne représente que 1 % par jour, chaque petit effort combiné représentera un effort d\'un grand impact.',
                'kaizen-description': 'Cela signifie beaucoup pour moi. C\'est comme un état d\'esprit que j\'essaie d\'avoir : pas seulement en termes de capacité ou de connaissances, cela couvre tous les aspects, de l\'essai d\'avoir plus de confiance en ce que je fais, à toujours être moi-même. C\'est aussi relationnel, j\'essaie toujours de devenir meilleur mentalement, d\'avoir un bon impact sur les autres, d\'être plus compréhensif, plus conscient, ou d\'être plus reconnaissant par exemple.'
            },
            en: {
                'about-me-title': 'About me',
                'about-me-intro': 'My name is Elsa HOM, and I am an 18-year-old student living in Portet. This portfolio is a glimpse into my journey, highlighting both technical skills and diverse interests, from art to physical activities.',
                'personal-characteristics-title': 'Personal Characteristics',
                'personal-characteristics-description': 'I\'d describe myself as very simple, and a very calm person. Otherwise, I\'d say that deep down, I\'m very passionate. Driven by a deep curiosity and a flair for problem-solving, I navigate the realms of cybersecurity. As a determined and persevering person, I remain very involved in what I undertake.',
                'why-but-title': 'Why BUT and BUT R&T',
                'why-but-description': 'I am a student from the school ‘IUT blagnac’ where I\'m pursuing a degree in networks and telecommunications. So it\'s a University Institute of Technology, which offers technical and theoretical training in areas such as computer networks. I chose these studies because I\'d like to become a cybersecurity engineer in the future if that\'s possible. Overall, I find that engineering is a very interesting profession because of its versatile aspect and I find that it\'s a career that pushes us to constantly enrich ourselves. One of the reasons I\'d like to choose BUT R&T is because of the constant evolution of the IT sector and technologies, which implies a strong need for manpower to guarantee IT security. The job opportunities, the variety of tasks are what interest me most, because I can learn something new every day.',
                'center-of-interest-title': 'Center of Interest',
                'some-videos-title': 'Some videos',
                'visit-to-versailles': 'Visit to Versailles',
                'tour-of-northern-france': 'Tour of northern France',
                'video-editing-description': 'As for my interest in video editing, it\'s a passion I\'ve developed over time. I\'ve always been fascinated by the possibility of telling stories and captivating people through moving images.',
                'cardboard-cut-outs-title': 'Cardboard Cut-Outs',
                'cardboard-cut-outs-description': 'In my portfolio, my interests are the pillars that define my personality and my passions. My versatility is reflected in a variety of activities, from artistic creation to digital exploration. My passion for visual arts such as drawing, origami and video editing reveals my creative identity, while my attraction to manual activities underlines my commitment to precision and patience.',
                'extra-curricular-activities-title': 'Extra-Curricular Activities',
                'extra-curricular-activities-description': 'Then, in terms of activities, I did 2 years of swimming and 3 years of gymnastics when I was younger. I\'ve also done climbing once. At the moment, I like doing sports even though I\'m not currently in a club. I often do activities on my own at home, like playing badminton with friends, cycling, or other physical exercises to clear my mind and stay active.',
                'mindset-title': 'Mindset',
                'click-here': 'Click here -->',
                'kaizen-definition': '→ A JAPANESE WORD which means : Each day is an opportunity to improve yourself for the better, even if it only represents 1 % a day, every tiny effort combined will represent an effort of great impact.',
                'kaizen-description': 'That means a lot to me. It\'s like a mindset that I try to have: not only in terms of ability or knowledge, it covers all aspects, from trying to have more confidence in what I do, to always being myself. It\'s also relationally, I\'m always trying to become better mentally, to have a good impact on others, to be more understanding, more aware, or to be more grateful for example.'
            }
        };

        // Mettre à jour le contenu spécifique à la page "À propos"
        document.querySelector('[data-lang="about-me-title"]').textContent = translations[lang]['about-me-title'];
        document.querySelector('[data-lang="about-me-intro"]').textContent = translations[lang]['about-me-intro'];
        document.querySelector('[data-lang="personal-characteristics-title"]').textContent = translations[lang]['personal-characteristics-title'];
        document.querySelector('[data-lang="personal-characteristics-description"]').textContent = translations[lang]['personal-characteristics-description'];
        document.querySelector('[data-lang="why-but-title"]').textContent = translations[lang]['why-but-title'];
        document.querySelector('[data-lang="why-but-description"]').textContent = translations[lang]['why-but-description'];
        document.querySelector('[data-lang="center-of-interest-title"]').textContent = translations[lang]['center-of-interest-title'];
        document.querySelector('[data-lang="some-videos-title"]').textContent = translations[lang]['some-videos-title'];
        document.querySelector('[data-lang="visit-to-versailles"]').textContent = translations[lang]['visit-to-versailles'];
        document.querySelector('[data-lang="tour-of-northern-france"]').textContent = translations[lang]['tour-of-northern-france'];
        document.querySelector('[data-lang="video-editing-description"]').textContent = translations[lang]['video-editing-description'];
        document.querySelector('[data-lang="cardboard-cut-outs-title"]').textContent = translations[lang]['cardboard-cut-outs-title'];
        document.querySelector('[data-lang="cardboard-cut-outs-description"]').textContent = translations[lang]['cardboard-cut-outs-description'];
        document.querySelector('[data-lang="extra-curricular-activities-title"]').textContent = translations[lang]['extra-curricular-activities-title'];
        document.querySelector('[data-lang="extra-curricular-activities-description"]').textContent = translations[lang]['extra-curricular-activities-description'];
        document.querySelector('[data-lang="mindset-title"]').textContent = translations[lang]['mindset-title'];
        document.querySelector('[data-lang="click-here"]').textContent = translations[lang]['click-here'];
        document.querySelector('[data-lang="kaizen-definition"]').textContent = translations[lang]['kaizen-definition'];
        document.querySelector('[data-lang="kaizen-description"]').textContent = translations[lang]['kaizen-description'];
    }

    // Appliquer la langue sauvegardée au chargement de la page
    const savedLang = localStorage.getItem('language') || 'fr';
    updateContent(savedLang);

    // Écouter l'événement personnalisé pour mettre à jour le contenu lorsque la langue change
    document.addEventListener('languageChanged', function (e) {
        updateContent(e.detail.lang);
    });
});