// ==================== ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ====================

const translations = {
	en: {
		// ==================== HEADER ====================

		navHome: 'home',
		navWorks: 'works',
		navAbout: 'about-me',
		navContacts: 'contacts',

		// ==================== HOME ====================

		heroTitle: "Hi, I'm Denis — ",
		heroDeveloper: 'Frontend Developer',
		heroText:
			'I create fast, responsive websites and landing pages from Figma designs using HTML, SCSS and JavaScript.',
		heroButton: "Let's work together",
		heroAvailable: 'Available for ',
		heroFreelance: 'Freelance',

		whoText: 'Small steps lead to big goals',
		whoAuthor: '- Dr. Who',

		projectsTitle: 'projects',
		viewAll: 'View all →',

		liveDemo: 'Live Demo →',
		github: 'GitHub →',

		arctTitle: 'Arct Website',
		arctText:
			'Responsive website built from a Figma design with a clean layout, reusable components and mobile-friendly structure.',

		arikTitle: 'Arik Website',
		arikText:
			'Modern responsive landing page focused on visual presentation, smooth animations and interactive elements.',

		gronbergTitle: 'Gronberg Website',
		gronbergText:
			'Fully responsive website with structured SCSS styling, adaptive layouts and JavaScript functionality for a better user experience.',

		skillsTitle: 'skills',
		frontend: 'Frontend',
		tools: 'Tools',
		currentlyLearning: 'Currently Learning',

		aboutTitle: 'about-me',
		aboutHello: "Hello, I'm Denis",
		aboutText1:
			"I'm a self-taught front-end developer based in Ukraine. I build responsive websites and landing pages from scratch, focusing on clean code, modern design and a smooth user experience.",
		aboutText2:
			"Web development has been my passion for over a year. I'm constantly improving my skills, learning new technologies and turning ideas into functional, user-friendly websites.",
		readMore: 'Read more →',

		contactsTitle: 'contacts',
		contactsText:
			"I'm currently available for freelance opportunities. Have a project in mind or a question? Feel free to get in touch with me.",
		messageMe: 'Message me here',

		footerText:
			'Frontend Developer specializing in responsive websites and landing pages.',
		media: 'Media',
		copyright: '© 2026 Denis. All rights reserved.',

		// ==================== ABOUT PAGE ====================

		aboutPageSubtitle: 'Who am I?',

		aboutPageHello: "Hello, I’m Denis",

		aboutPageText1:
			'I got into web development because I enjoy creating things from scratch and seeing an idea turn into a real website. I started with HTML and CSS and gradually moved into SCSS and JavaScript.',

		aboutPageText2:
			'I pay close attention to details, responsive layouts and how a website feels to use on different devices. Outside of coding, I enjoy basketball, cycling and solving mechanical puzzles, which keep me curious and motivated to learn.',

		aboutPageSkillsTitle: 'skills',
		aboutPageFrontend: 'Frontend',
		aboutPageTools: 'Tools',
		aboutPageCurrentlyLearning: 'Currently Learning',

		aboutPageFactsTitle: 'my-fun-facts',

		factAutumn: 'I enjoy autumn more than summer',
		factCycling: 'I often go cycling in my free time',
		factPuzzles: 'I collect and solve mechanical puzzles',
		factLearning: 'I enjoy learning new things',
		factBasketball: 'I hold a sports rank in basketball',
		factPizza: 'I can never say no to pizza',
		factMovie: 'My favorite movie is Jumanji',
		factHabits: 'I don’t have any bad habits',
		factWorkStudy:
			'I balance my work and studies with my passion for web development',

		// ==================== WORKS PAGE ====================

		worksTitle: 'projects',
		worksSubtitle: 'List of my projects',
		completeSites: 'complete-sites',

		arctWorkTitle: 'Arct Website',
		arctWorkText:
			'Responsive website built from a Figma design with a clean layout, reusable components and mobile-friendly structure.',

		arikWorkTitle: 'Arik Website',
		arikWorkText:
			'Modern responsive landing page focused on visual presentation, smooth animations and interactive elements.',

		gronbergWorkTitle: 'Gronberg Website',
		gronbergWorkText:
			'Fully responsive website with structured SCSS styling, adaptive layouts and JavaScript functionality for a better user experience.',

		weebWorkTitle: 'Weeb Website',
		weebWorkText:
			'Clean and responsive website with a modern interface, organized content sections and adaptive layout for different screen sizes.',

		saulDesignWorkTitle: 'SaulDesign Website',
		saulDesignWorkText:
			'Responsive portfolio-style website with a clear visual hierarchy, reusable layout elements and smooth transitions between sections.',

		minimalBlogWorkTitle: 'MinimalBlog Website',
		minimalBlogWorkText:
			'Minimalistic blog layout focused on readability, clean typography, structured content and responsive behavior across devices.',

		freedomWorkTitle: 'Freedom Website',
		freedomWorkText:
			'Responsive landing page with a structured layout, attention to spacing and typography, and adaptive sections optimized for mobile devices.',

		debonaireWorkTitle: 'The Debonaire Website',
		debonaireWorkText:
			'Animated responsive website focused on visual presentation, dynamic interactions and smooth transitions between interface elements.',

		wildKingdomWorkTitle: 'The Wild Kingdom Website',
		wildKingdomWorkText:
			'Interactive website with animated sections, responsive layout and a strong visual concept designed to create an engaging browsing experience.',

		growfyWorkTitle: 'Growfy Website',
		growfyWorkText:
			'Modern business landing page with responsive sections, animated elements and a clean structure focused on presenting services and content clearly.',

		homeServicesWorkTitle: 'HomeServices Website',
		homeServicesWorkText:
			'Service-focused responsive website with structured content, animated interface elements and adaptive layouts for a consistent experience on desktop and mobile.',

		lidiaWorkTitle: 'Lidia Website',
		lidiaWorkText:
			'Responsive website with a modern visual layout, animated components and carefully structured sections designed for an engaging user experience.'
	},

	// ==================================================
	// UKRAINIAN
	// ==================================================

	uk: {
		// ==================== HEADER ====================

		navHome: 'головна',
		navWorks: 'роботи',
		navAbout: 'про мене',
		navContacts: 'контакти',

		// ==================== HOME ====================

		heroTitle: 'Привіт, я Денис — ',
		heroDeveloper: 'Frontend-розробник',
		heroText:
			'Я створюю швидкі адаптивні сайти та лендінги за макетами Figma, використовуючи HTML, SCSS та JavaScript.',
		heroButton: 'Давайте працювати разом',
		heroAvailable: 'Відкритий для ',
		heroFreelance: 'фрилансу',

		whoText: 'Маленькі кроки ведуть до великих цілей',
		whoAuthor: '- Доктор Хто',

		projectsTitle: 'проєкти',
		viewAll: 'Переглянути всі →',

		liveDemo: 'Демо →',
		github: 'GitHub →',

		arctTitle: 'Сайт Arct',
		arctText:
			'Адаптивний сайт, створений за макетом Figma, з чистою структурою, повторно використовуваними компонентами та адаптацією під мобільні пристрої.',

		arikTitle: 'Сайт Arik',
		arikText:
			'Сучасний адаптивний лендінг із акцентом на візуальну подачу, плавні анімації та інтерактивні елементи.',

		gronbergTitle: 'Сайт Gronberg',
		gronbergText:
			'Повністю адаптивний сайт зі структурованими SCSS-стилями, адаптивною версткою та функціональністю JavaScript для кращого користувацького досвіду.',

		skillsTitle: 'навички',
		frontend: 'Frontend',
		tools: 'Інструменти',
		currentlyLearning: 'Зараз вивчаю',

		aboutTitle: 'про мене',
		aboutHello: 'Привіт, я Денис',
		aboutText1:
			'Я самостійно навчаюся frontend-розробці та знаходжуся в Україні. Створюю адаптивні сайти та лендінги з нуля, приділяючи увагу чистому коду, сучасному дизайну та зручності користування.',
		aboutText2:
			'Веб-розробка є моїм захопленням вже понад рік. Я постійно вдосконалюю свої навички, вивчаю нові технології та перетворюю ідеї на функціональні й зручні сайти.',
		readMore: 'Дізнатися більше →',

		contactsTitle: 'контакти',
		contactsText:
			'Зараз я відкритий до freelance-проєктів. Маєте ідею для проєкту або запитання? Буду радий поспілкуватися.',
		messageMe: 'Напишіть мені',

		footerText:
			'Frontend-розробник, який спеціалізується на адаптивних сайтах та лендінгах.',
		media: 'Соцмережі',
		copyright: '© 2026 Денис. Усі права захищені.',

		// ==================== СТОРІНКА ABOUT ====================

		aboutPageSubtitle: 'Хто я?',

		aboutPageHello: 'Привіт, я Денис',

		aboutPageText1:
			'Я прийшов у веб-розробку, тому що мені подобається створювати щось з нуля та бачити, як ідея перетворюється на справжній сайт. Я починав з HTML і CSS, а згодом перейшов до SCSS та JavaScript.',

		aboutPageText2:
			'Я приділяю особливу увагу деталям, адаптивній верстці та тому, наскільки зручно сайтом користуватися на різних пристроях. Поза програмуванням я люблю баскетбол, велосипед і механічні головоломки — вони підтримують мою цікавість і мотивують мене постійно вчитися.',

		aboutPageSkillsTitle: 'навички',
		aboutPageFrontend: 'Frontend',
		aboutPageTools: 'Інструменти',
		aboutPageCurrentlyLearning: 'Зараз вивчаю',

		aboutPageFactsTitle: 'цікаві факти про мене',

		factAutumn: 'Я люблю осінь більше, ніж літо',
		factCycling: 'У вільний час я часто катаюся на велосипеді',
		factPuzzles: 'Я збираю та розв’язую механічні головоломки',
		factLearning: 'Мені подобається дізнаватися щось нове',
		factBasketball: 'Маю спортивний розряд з баскетболу',
		factPizza: 'Я ніколи не відмовлюся від піци',
		factMovie: 'Мій улюблений фільм — «Джуманджі»',
		factHabits: 'У мене немає шкідливих звичок',
		factWorkStudy:
			'Я поєдную роботу та навчання із захопленням веб-розробкою',

		// ==================== WORKS PAGE ====================

		worksTitle: 'проєкти',
		worksSubtitle: 'Список моїх проєктів',
		completeSites: 'готові сайти',

		arctWorkTitle: 'Сайт Arct',
		arctWorkText:
			'Адаптивний сайт, створений за макетом Figma, з чистою структурою, повторно використовуваними компонентами та адаптацією під мобільні пристрої.',

		arikWorkTitle: 'Сайт Arik',
		arikWorkText:
			'Сучасний адаптивний лендінг із акцентом на візуальну подачу, плавні анімації та інтерактивні елементи.',

		gronbergWorkTitle: 'Сайт Gronberg',
		gronbergWorkText:
			'Повністю адаптивний сайт зі структурованими SCSS-стилями, адаптивною версткою та функціональністю JavaScript для кращого користувацького досвіду.',

		weebWorkTitle: 'Сайт Weeb',
		weebWorkText:
			'Чистий та адаптивний сайт із сучасним інтерфейсом, структурованими секціями та адаптацією під різні розміри екранів.',

		saulDesignWorkTitle: 'Сайт SaulDesign',
		saulDesignWorkText:
			'Адаптивний сайт у стилі портфоліо з чіткою візуальною ієрархією, повторно використовуваними елементами та плавними переходами між секціями.',

		minimalBlogWorkTitle: 'Сайт MinimalBlog',
		minimalBlogWorkText:
			'Мінімалістичний блог із фокусом на читабельності, чистій типографіці, структурованому контенті та адаптивності на різних пристроях.',

		freedomWorkTitle: 'Сайт Freedom',
		freedomWorkText:
			'Адаптивний лендінг зі структурованою версткою, увагою до відступів і типографіки та адаптивними секціями для мобільних пристроїв.',

		debonaireWorkTitle: 'Сайт The Debonaire',
		debonaireWorkText:
			'Анімований адаптивний сайт із акцентом на візуальну подачу, динамічні взаємодії та плавні переходи між елементами.',

		wildKingdomWorkTitle: 'Сайт The Wild Kingdom',
		wildKingdomWorkText:
			'Інтерактивний сайт з анімованими секціями, адаптивною версткою та яскравою візуальною концепцією.',

		growfyWorkTitle: 'Сайт Growfy',
		growfyWorkText:
			'Сучасний бізнес-лендінг з адаптивними секціями, анімованими елементами та чистою структурою для презентації послуг.',

		homeServicesWorkTitle: 'Сайт HomeServices',
		homeServicesWorkText:
			'Адаптивний сайт сервісної компанії зі структурованим контентом, анімованими елементами та адаптивною версткою.',

		lidiaWorkTitle: 'Сайт Lidia',
		lidiaWorkText:
			'Адаптивний сайт із сучасним дизайном, анімованими компонентами та структурованими секціями для комфортної взаємодії.'
	}
};


// ==================== ТЕКУЩИЙ ЯЗЫК ====================

// ВАЖНО:
// Английский всегда используется по умолчанию.
// При каждой перезагрузке страницы язык снова будет EN.
let currentLang = 'en';


// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

function setText(selector, text) {
	const element = document.querySelector(selector);

	if (element) {
		element.textContent = text;
	}
}


function setTextAll(selector, text) {
	const elements = document.querySelectorAll(selector);

	elements.forEach(element => {
		element.textContent = text;
	});
}


// ==================== ПРИМЕНЕНИЕ ПЕРЕВОДА ====================

function setLanguage(lang) {
	if (!translations[lang]) {
		lang = 'en';
	}

	const t = translations[lang];

	currentLang = lang;

	// НЕ сохраняем язык в localStorage.
	// Благодаря этому после перезагрузки всегда будет английский.
	document.documentElement.lang = lang;


	// ==================== HEADER ====================

	setText(
		'.menu__item:nth-child(1) [data-i18n="nav.home"]',
		t.navHome
	);

	setText(
		'.menu__item:nth-child(2) [data-i18n="nav.works"]',
		t.navWorks
	);

	setText(
		'.menu__item:nth-child(3) [data-i18n="nav.about"]',
		t.navAbout
	);

	setText(
		'.menu__item:nth-child(4) [data-i18n="nav.contacts"]',
		t.navContacts
	);


	// ==================== HERO ====================

	const heroTitle = document.querySelector('.main-section__title');

	if (heroTitle) {
		heroTitle.innerHTML = `
			${t.heroTitle}<span>${t.heroDeveloper}</span>
		`;
	}

	setText('.main-section__text p', t.heroText);
	setText('.main-section__button', t.heroButton);

	const heroSubtitle = document.querySelector(
		'.decor-main-section__subtitle'
	);

	if (heroSubtitle) {
		heroSubtitle.innerHTML = `
			${t.heroAvailable}<span>${t.heroFreelance}</span>
		`;
	}


	// ==================== WHO ====================

	setText('.who__text p', t.whoText);
	setText('.who__author', t.whoAuthor);


	// ==================== PROJECTS ====================

	const projectsTitle = document.querySelector('.projects__title');

	if (projectsTitle) {
		projectsTitle.innerHTML = `
			<span>#</span>${t.projectsTitle}
		`;
	}

	setText('.projects__link', t.viewAll);

	// Arct
	setText(
		'.projects__item:nth-child(1) .body-item-projects__link-title',
		t.arctTitle
	);

	setText(
		'.projects__item:nth-child(1) .body-item-projects__text p',
		t.arctText
	);

	// Arik
	setText(
		'.projects__item:nth-child(2) .body-item-projects__link-title',
		t.arikTitle
	);

	setText(
		'.projects__item:nth-child(2) .body-item-projects__text p',
		t.arikText
	);

	// Gronberg
	setText(
		'.projects__item:nth-child(3) .body-item-projects__link-title',
		t.gronbergTitle
	);

	setText(
		'.projects__item:nth-child(3) .body-item-projects__text p',
		t.gronbergText
	);

	// Кнопки проектов
	setTextAll(
		'.projects__item .item-projects__button.button__live:first-child',
		t.liveDemo
	);

	setTextAll(
		'.projects__item .item-projects__button.button__live:nth-child(2)',
		t.github
	);


	// ==================== SKILLS ====================

	const skillsTitle = document.querySelector('.skills__title');

	if (skillsTitle) {
		skillsTitle.innerHTML = `
			<span>#</span>${t.skillsTitle}
		`;
	}

	setText(
		'.item-skill__item:nth-child(1) .item-skill__item-title',
		t.frontend
	);

	setText(
		'.item-skill__item:nth-child(2) .item-skill__item-title',
		t.tools
	);

	setText(
		'.item-skill__item:nth-child(3) .item-skill__item-title',
		t.currentlyLearning
	);


	// ==================== ABOUT HOME ====================

	const aboutTitle = document.querySelector('.about__title');

	if (aboutTitle) {
		aboutTitle.innerHTML = `
			<span>#</span>${t.aboutTitle}
		`;
	}

	// Только на главной странице,
	// где используются обычные data-i18n о себе.
	const aboutParagraphs = document.querySelectorAll('.about__text p');

	if (aboutParagraphs.length >= 3) {
		aboutParagraphs[0].textContent = t.aboutHello;
		aboutParagraphs[1].textContent = t.aboutText1;
		aboutParagraphs[2].textContent = t.aboutText2;
	}

	setText('.about__button', t.readMore);


	// ==================== ABOUT PAGE ====================

	// Who am I?
	setText(
		'.about-me__header .sub-title',
		t.aboutPageSubtitle
	);

	// About page text
	setText(
		'[data-i18n="aboutPageHello"]',
		t.aboutPageHello
	);

	setText(
		'[data-i18n="aboutPageText1"]',
		t.aboutPageText1
	);

	setText(
		'[data-i18n="aboutPageText2"]',
		t.aboutPageText2
	);

	// About page title
	const aboutPageTitle = document.querySelector(
		'.about-me__header .title-big'
	);

	if (aboutPageTitle) {
		aboutPageTitle.innerHTML = `
			<span>/</span>${t.aboutTitle}
		`;
	}

	// About page skills title
	const aboutSkillsTitle = document.querySelector(
		'.skills-section__header .skills__title'
	);

	if (aboutSkillsTitle) {
		aboutSkillsTitle.innerHTML = `
			<span>#</span>${t.aboutPageSkillsTitle}
		`;
	}

	// About page skills
	setText(
		'.skills-section .item-skill__section-item:nth-child(1) .item-skill__item-title',
		t.aboutPageFrontend
	);

	setText(
		'.skills-section .item-skill__section-item:nth-child(2) .item-skill__item-title',
		t.aboutPageTools
	);

	setText(
		'.skills-section .item-skill__section-item:nth-child(3) .item-skill__item-title',
		t.aboutPageCurrentlyLearning
	);

	// About page facts title
	const factsTitle = document.querySelector('.facts__title');

	if (factsTitle) {
		factsTitle.innerHTML = `
			<span>#</span>${t.aboutPageFactsTitle}
		`;
	}

	// Fun facts
	setText(
		'.facts .content-fact__item:nth-child(1)',
		t.factAutumn
	);

	setText(
		'.facts .content-fact__item:nth-child(2)',
		t.factCycling
	);

	setText(
		'.facts .content-fact__item:nth-child(3)',
		t.factPuzzles
	);

	setText(
		'.facts .content-fact__item:nth-child(4)',
		t.factLearning
	);

	setText(
		'.facts .content-fact__item:nth-child(5)',
		t.factBasketball
	);

	setText(
		'.facts .content-fact__item:nth-child(6)',
		t.factPizza
	);

	setText(
		'.facts .content-fact__item:nth-child(7)',
		t.factMovie
	);

	setText(
		'.facts .content-fact__item:nth-child(8)',
		t.factHabits
	);

	setText(
		'.facts .content-fact__item:nth-child(9)',
		t.factWorkStudy
	);


	// ==================== CONTACTS ====================

	const contactsTitle = document.querySelector('.contacts__title');

	if (contactsTitle) {
		contactsTitle.innerHTML = `
			<span>#</span>${t.contactsTitle}
		`;
	}

	setText('.contacts__text p', t.contactsText);

	// У тебя в HTML используется .contacts__title,
	// поэтому переводим именно его, а не .contacts__subtitle.
	const contactMessageTitle = document.querySelector(
		'.contacts__content.action .contacts__title'
	);

	if (contactMessageTitle) {
		contactMessageTitle.textContent = t.messageMe;
	}


	// ==================== FOOTER ====================

	setText('.body-footer__text p', t.footerText);
	setText('.media-footer__title', t.media);
	setText('.footer__copy', t.copyright);


	// ==================== WORKS PAGE ====================

	const worksTitle = document.querySelector('.work .title-big');

	if (worksTitle) {
		worksTitle.innerHTML = `
			<span>/</span>${t.worksTitle}
		`;
	}

	setText(
		'.work .sub-title',
		t.worksSubtitle
	);

	const completeSites = document.querySelector(
		'.work .content-section__title'
	);

	if (completeSites) {
		completeSites.innerHTML = `
			<span>#</span>${t.completeSites}
		`;
	}


	// ==================== WORKS PROJECTS ====================

	// Arct
	setText(
		'.work .projects__item:nth-child(1) .body-item-projects__link-title',
		t.arctWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(1) .body-item-projects__text p',
		t.arctWorkText
	);

	// Arik
	setText(
		'.work .projects__item:nth-child(2) .body-item-projects__link-title',
		t.arikWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(2) .body-item-projects__text p',
		t.arikWorkText
	);

	// Gronberg
	setText(
		'.work .projects__item:nth-child(3) .body-item-projects__link-title',
		t.gronbergWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(3) .body-item-projects__text p',
		t.gronbergWorkText
	);

	// Weeb
	setText(
		'.work .projects__item:nth-child(4) .body-item-projects__link-title',
		t.weebWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(4) .body-item-projects__text p',
		t.weebWorkText
	);

	// SaulDesign
	setText(
		'.work .projects__item:nth-child(5) .body-item-projects__link-title',
		t.saulDesignWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(5) .body-item-projects__text p',
		t.saulDesignWorkText
	);

	// MinimalBlog
	setText(
		'.work .projects__item:nth-child(6) .body-item-projects__link-title',
		t.minimalBlogWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(6) .body-item-projects__text p',
		t.minimalBlogWorkText
	);

	// Freedom
	setText(
		'.work .projects__item:nth-child(7) .body-item-projects__link-title',
		t.freedomWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(7) .body-item-projects__text p',
		t.freedomWorkText
	);

	// The Debonaire
	setText(
		'.work .projects__item:nth-child(8) .body-item-projects__link-title',
		t.debonaireWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(8) .body-item-projects__text p',
		t.debonaireWorkText
	);

	// The Wild Kingdom
	setText(
		'.work .projects__item:nth-child(9) .body-item-projects__link-title',
		t.wildKingdomWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(9) .body-item-projects__text p',
		t.wildKingdomWorkText
	);

	// Growfy
	setText(
		'.work .projects__item:nth-child(10) .body-item-projects__link-title',
		t.growfyWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(10) .body-item-projects__text p',
		t.growfyWorkText
	);

	// HomeServices
	setText(
		'.work .projects__item:nth-child(11) .body-item-projects__link-title',
		t.homeServicesWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(11) .body-item-projects__text p',
		t.homeServicesWorkText
	);

	// Lidia
	setText(
		'.work .projects__item:nth-child(12) .body-item-projects__link-title',
		t.lidiaWorkTitle
	);

	setText(
		'.work .projects__item:nth-child(12) .body-item-projects__text p',
		t.lidiaWorkText
	);


	// ==================== WORKS BUTTONS ====================

	setTextAll(
		'.work .projects__item .item-projects__button.button__live:first-child',
		t.liveDemo
	);

	setTextAll(
		'.work .projects__item .item-projects__button.button__live:nth-child(2)',
		t.github
	);


	// ==================== SELECT ====================

	const select = document.getElementById('lang-select');

	if (select) {
		select.value = lang;
	}
}


// ==================== ИНИЦИАЛИЗАЦИЯ ====================

document.addEventListener('DOMContentLoaded', () => {

	const select = document.getElementById('lang-select');

	if (select) {
		select.addEventListener('change', function () {
			setLanguage(this.value);
		});
	}

	// Всегда начинаем с английского.
	// Даже если пользователь до этого выбрал UA.
	setLanguage('en');
});