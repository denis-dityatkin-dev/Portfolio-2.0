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

		// ==================== CONTACTS HOME ====================

		contactsTitle: 'contacts',
		contactsText:
			"I'm currently available for freelance opportunities. Have a project in mind or a question? Feel free to get in touch with me.",
		messageMe: 'Message me here',

		// ==================== FOOTER ====================

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
			'Responsive website with a modern visual layout, animated components and carefully structured sections designed for an engaging user experience.',

		// ==================================================
		// CONTACTS PAGE
		// ==================================================

		contactsPageSubtitle: "Let's work together",

		contactsPageText:
			"Have a project in mind? Let’s turn your ideas into a fast, responsive and modern website. Feel free to get in touch and let’s discuss your project.",

		contactMessageTitle: 'Message me here',

		contactAvailabilityTitle: 'Availability',

		contactAvailability: 'Available for freelance',

		// ==================== SERVICES / PRICING ====================

		servicesTitle: 'services',

		servicesSubtitle: 'What I can do for you',

		// Landing Page

		landingPageTitle: 'Landing Page',

		landingPage1to4: '1–4 sections',

		landingPage5to7: '5–7 sections',

		landingPage8to10: '8–10 sections',

		from60: 'from $60',

		from100: 'from $100',

		from150: 'from $150',

		landingPageText:
			'Responsive landing page based on your Figma design with clean and structured HTML, SCSS and JavaScript.',

		estimatedTime: 'Estimated time:',

		landingPageTime: '2–8 days',

		// Multi-page Website

		multiPageTitle: 'Multi-page Website',

		multiPage2to3: '2–3 pages',

		multiPage4to5: '4–5 pages',

		multiPage6plus: '6+ pages',

		from200: 'from $200',

		from250: 'from $250',

		multiPageText:
			'Modern responsive website with multiple pages, adaptive layout, reusable components and interactive elements.',

		multiPageTime: '5–12 days',

		// Figma to Website

		figmaWebsiteTitle: 'Figma to Website',

		figmaWebsiteText:
			'Accurate conversion of Figma designs into a functional, responsive and modern website using HTML, SCSS and JavaScript.',

		pricingNote:
			'Final price depends on the number of sections or pages, design complexity, animations and required functionality.',

		// ==================== WHAT I DO ====================

		whatIDoTitle: 'what-i-do',

		whatIDoSubtitle: 'What you get',

		responsiveDesignTitle: 'Responsive Design',

		responsiveDesignText:
			'Websites adapted for desktop, tablet and mobile devices.',

		figmaToHtmlTitle: 'Figma to HTML',

		figmaToHtmlText:
			'Accurate implementation of Figma designs using HTML, SCSS and JavaScript.',

		cleanCodeTitle: 'Clean Code',

		cleanCodeText:
			'Structured and maintainable code using BEM and modern frontend practices.',

		animationsTitle: 'Animations',

		animationsText:
			'Subtle animations and interactive elements to make the website feel more dynamic.',

		crossBrowserTitle: 'Cross-browser',

		crossBrowserText:
			'Testing and adaptation for modern browsers and different screen sizes.',

		gitGithubTitle: 'Git & GitHub',

		gitGithubText:
			'Project version control and clean repository structure using Git and GitHub.',

		// ==================== HOW I WORK ====================

		howIWorkTitle: 'how-i-work',

		howIWorkSubtitle: 'Simple and transparent process',

		discussionTitle: 'Discussion',

		discussionText:
			'We discuss your requirements, design, deadlines and project details.',

		developmentTitle: 'Development',

		developmentText:
			'I turn the Figma design into a responsive and functional website.',

		testingTitle: 'Testing',

		testingText:
			'I check the website on different screen sizes and modern browsers.',

		deliveryTitle: 'Delivery',

		deliveryText:
			'You receive the finished website, source code and project files.',

		// ==================== FINAL CTA ====================

		finalCtaTitle: "let's work together",

		finalCtaText:
			"Have an idea or a project? Send me a message and let’s talk about it.",

		getInTouch: 'Get in touch →'
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

		// ==================== CONTACTS HOME ====================

		contactsTitle: 'контакти',

		contactsText:
			'Зараз я відкритий до freelance-проєктів. Маєте ідею для проєкту або запитання? Буду радий поспілкуватися.',

		messageMe: 'Напишіть мені',

		// ==================== FOOTER ====================

		footerText:
			'Frontend-розробник, який спеціалізується на адаптивних сайтах та лендінгах.',

		media: 'Соцмережі',

		copyright: '© 2026 Денис. Усі права захищені.',

		// ==================== ABOUT PAGE ====================

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
			'Адаптивний сайт із сучасним дизайном, анімованими компонентами та структурованими секціями для комфортної взаємодії.',

		// ==================================================
		// СТОРІНКА CONTACTS
		// ==================================================

		contactsPageSubtitle: 'Давайте працювати разом',

		contactsPageText:
			'Маєте проєкт? Давайте перетворимо ваші ідеї на швидкий, адаптивний і сучасний сайт. Зв’яжіться зі мною, і ми обговоримо ваш проєкт.',

		contactMessageTitle: 'Напишіть мені',

		contactAvailabilityTitle: 'Доступність',

		contactAvailability: 'Відкритий для фрилансу',

		// ==================== SERVICES / PRICING ====================

		servicesTitle: 'послуги',

		servicesSubtitle: 'Що я можу для вас зробити',

		// Landing Page

		landingPageTitle: 'Лендінг',

		landingPage1to4: '1–4 секції',

		landingPage5to7: '5–7 секцій',

		landingPage8to10: '8–10 секцій',

		from60: 'від 2 500 ₴',

		from100: 'від 4 200 ₴',

		from150: 'від 6 300 ₴',

		landingPageText:
			'Адаптивний лендінг за вашим макетом Figma з чистим і структурованим HTML, SCSS та JavaScript.',

		estimatedTime: 'Орієнтовний час:',

		landingPageTime: '2–8 днів',

		// Multi-page Website

		multiPageTitle: 'Багатосторінковий сайт',

		multiPage2to3: '2–3 сторінки',

		multiPage4to5: '4–5 сторінок',

		multiPage6plus: '6+ сторінок',

		from200: 'від 8 400 ₴',

		from250: 'від 10 500 ₴',

		multiPageText:
			'Сучасний адаптивний сайт із кількома сторінками, адаптивною версткою, повторно використовуваними компонентами та інтерактивними елементами.',

		multiPageTime: '5–12 днів',

		// Figma to Website

		figmaWebsiteTitle: 'Figma → Website',

		figmaWebsiteText:
			'Точне перетворення макетів Figma на функціональний, адаптивний і сучасний сайт з використанням HTML, SCSS та JavaScript.',

		pricingNote:
			'Фінальна ціна залежить від кількості секцій або сторінок, складності дизайну, анімацій та необхідного функціоналу.',

		// ==================== WHAT I DO ====================

		whatIDoTitle: 'що-я-роблю',

		whatIDoSubtitle: 'Що ви отримуєте',

		responsiveDesignTitle: 'Адаптивний дизайн',

		responsiveDesignText:
			'Сайти, адаптовані під комп’ютери, планшети та мобільні пристрої.',

		figmaToHtmlTitle: 'Figma → HTML',

		figmaToHtmlText:
			'Точна реалізація макетів Figma за допомогою HTML, SCSS та JavaScript.',

		cleanCodeTitle: 'Чистий код',

		cleanCodeText:
			'Структурований код, який легко підтримувати, з використанням BEM та сучасних frontend-практик.',

		animationsTitle: 'Анімації',

		animationsText:
			'Плавні анімації та інтерактивні елементи, які роблять сайт більш динамічним.',

		crossBrowserTitle: 'Кросбраузерність',

		crossBrowserText:
			'Тестування та адаптація сайту під сучасні браузери та різні розміри екранів.',

		gitGithubTitle: 'Git & GitHub',

		gitGithubText:
			'Контроль версій проєкту та чиста структура репозиторію з використанням Git і GitHub.',

		// ==================== HOW I WORK ====================

		howIWorkTitle: 'як-я-працюю',

		howIWorkSubtitle: 'Простий і прозорий процес',

		discussionTitle: 'Обговорення',

		discussionText:
			'Обговорюємо ваші вимоги, дизайн, терміни та деталі проєкту.',

		developmentTitle: 'Розробка',

		developmentText:
			'Перетворюю макет Figma на адаптивний та функціональний сайт.',

		testingTitle: 'Тестування',

		testingText:
			'Перевіряю сайт на різних розмірах екранів та в сучасних браузерах.',

		deliveryTitle: 'Передача',

		deliveryText:
			'Ви отримуєте готовий сайт, вихідний код та файли проєкту.',

		// ==================== FINAL CTA ====================

		finalCtaTitle: 'давайте працювати разом',

		finalCtaText:
			'Маєте ідею або проєкт? Напишіть мені, і ми все обговоримо.',

		getInTouch: 'Зв’язатися зі мною →'
	}
};

// ==================== ТЕКУЩИЙ ЯЗЫК ====================

// Английский используется по умолчанию.
// После перезагрузки страницы снова будет EN.

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

	// Не сохраняем язык в localStorage.
	// После перезагрузки снова будет английский.

	document.documentElement.lang = lang;

	// ==================================================
	// HEADER
	// ==================================================

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

	// ==================================================
	// HERO
	// ==================================================

	const heroTitle = document.querySelector('.main-section__title');

	if (heroTitle) {
		heroTitle.innerHTML = `
			${t.heroTitle}<span>${t.heroDeveloper}</span>
		`;
	}

	setText(
		'.main-section__text p',
		t.heroText
	);

	setText(
		'.main-section__button',
		t.heroButton
	);

	const heroSubtitle = document.querySelector(
		'.decor-main-section__subtitle'
	);

	if (heroSubtitle) {
		heroSubtitle.innerHTML = `
			${t.heroAvailable}<span>${t.heroFreelance}</span>
		`;
	}

	// ==================================================
	// WHO
	// ==================================================

	setText(
		'.who__text p',
		t.whoText
	);

	setText(
		'.who__author',
		t.whoAuthor
	);

	// ==================================================
	// PROJECTS
	// ==================================================

	const projectsTitle = document.querySelector(
		'.projects__title'
	);

	if (projectsTitle) {
		projectsTitle.innerHTML = `
			<span>#</span>${t.projectsTitle}
		`;
	}

	setText(
		'.projects__link',
		t.viewAll
	);

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

	// ==================================================
	// SKILLS
	// ==================================================

	const skillsTitle = document.querySelector(
		'.skills__title'
	);

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

	// ==================================================
	// ABOUT HOME
	// ==================================================

	const aboutTitle = document.querySelector(
		'.about__title'
	);

	if (aboutTitle) {
		aboutTitle.innerHTML = `
			<span>#</span>${t.aboutTitle}
		`;
	}

	const aboutParagraphs = document.querySelectorAll(
		'.about__text p'
	);

	if (aboutParagraphs.length >= 3) {

		aboutParagraphs[0].textContent =
			t.aboutHello;

		aboutParagraphs[1].textContent =
			t.aboutText1;

		aboutParagraphs[2].textContent =
			t.aboutText2;
	}

	setText(
		'.about__button',
		t.readMore
	);

	// ==================================================
	// CONTACTS HOME
	// ==================================================

	const homeContactsTitle = document.querySelector(
		'.contacts__header .contacts__title'
	);

	if (homeContactsTitle) {
		homeContactsTitle.innerHTML = `
			<span>#</span>${t.contactsTitle}
		`;
	}

	setText(
		'.contacts__text p',
		t.contactsText
	);

	setText(
		'.contacts__subtitle',
		t.messageMe
	);

	// ==================================================
	// ABOUT PAGE
	// ==================================================

	setText(
		'.about-me__header .sub-title',
		t.aboutPageSubtitle
	);

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

	const factsTitle = document.querySelector(
		'.facts__title'
	);

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

	// ==================================================
	// CONTACTS PAGE
	// ==================================================

	// Page title

	const contactsPageTitle = document.querySelector(
		'.contact__header .title-big'
	);

	if (contactsPageTitle) {
		contactsPageTitle.innerHTML = `
			<span>/</span>${t.contactsTitle}
		`;
	}

	// Page subtitle

	setText(
		'.contact__header .sub-title',
		t.contactsPageSubtitle
	);

	// Main contact text

	setText(
		'.contact-section__text p',
		t.contactsPageText
	);

	// Message me

	setText(
		'.contact-section__content:nth-child(1) .contacts__title',
		t.contactMessageTitle
	);

	// Availability

	setText(
		'.contact-section__content:nth-child(2) .contacts__title',
		t.contactAvailabilityTitle
	);

	setText(
		'.contact-section__content:nth-child(2) .contacts__item',
		t.contactAvailability
	);

	// ==================================================
	// SERVICES / PRICING
	// ==================================================

	const pricingTitle = document.querySelector(
		'.pricing__header .title-big'
	);

	if (pricingTitle) {
		pricingTitle.innerHTML = `
			<span>/</span>${t.servicesTitle}
		`;
	}

	setText(
		'.pricing__header .sub-title',
		t.servicesSubtitle
	);

	// --------------------------------------------------
	// LANDING PAGE
	// --------------------------------------------------

	setText(
		'.pricing__item:nth-child(1) .pricing__title',
		t.landingPageTitle
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__price-item:nth-child(1) span:nth-child(1)',
		t.landingPage1to4
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__price-item:nth-child(1) span:nth-child(2)',
		t.from60
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__price-item:nth-child(2) span:nth-child(1)',
		t.landingPage5to7
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__price-item:nth-child(2) span:nth-child(2)',
		t.from100
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__price-item:nth-child(3) span:nth-child(1)',
		t.landingPage8to10
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__price-item:nth-child(3) span:nth-child(2)',
		t.from150
	);

	setText(
		'.pricing__item:nth-child(1) .pricing__text p',
		t.landingPageText
	);

	// --------------------------------------------------
	// MULTI-PAGE WEBSITE
	// --------------------------------------------------

	setText(
		'.pricing__item:nth-child(2) .pricing__title',
		t.multiPageTitle
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__price-item:nth-child(1) span:nth-child(1)',
		t.multiPage2to3
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__price-item:nth-child(1) span:nth-child(2)',
		t.from150
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__price-item:nth-child(2) span:nth-child(1)',
		t.multiPage4to5
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__price-item:nth-child(2) span:nth-child(2)',
		t.from200
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__price-item:nth-child(3) span:nth-child(1)',
		t.multiPage6plus
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__price-item:nth-child(3) span:nth-child(2)',
		t.from250
	);

	setText(
		'.pricing__item:nth-child(2) .pricing__text p',
		t.multiPageText
	);

	// --------------------------------------------------
	// FIGMA TO WEBSITE
	// --------------------------------------------------

	setText(
		'.pricing__item:nth-child(3) .pricing__title',
		t.figmaWebsiteTitle
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__price-item:nth-child(1) span:nth-child(1)',
		t.landingPage1to4
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__price-item:nth-child(1) span:nth-child(2)',
		t.from60
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__price-item:nth-child(2) span:nth-child(1)',
		t.landingPage5to7
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__price-item:nth-child(2) span:nth-child(2)',
		t.from100
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__price-item:nth-child(3) span:nth-child(1)',
		t.landingPage8to10
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__price-item:nth-child(3) span:nth-child(2)',
		t.from150
	);

	setText(
		'.pricing__item:nth-child(3) .pricing__text p',
		t.figmaWebsiteText
	);

	// Pricing time

	const pricingTimes = document.querySelectorAll(
		'.pricing__time'
	);

	if (pricingTimes[0]) {
		pricingTimes[0].innerHTML = `
			<span>${t.estimatedTime}</span>
			${t.landingPageTime}
		`;
	}

	if (pricingTimes[1]) {
		pricingTimes[1].innerHTML = `
			<span>${t.estimatedTime}</span>
			${t.multiPageTime}
		`;
	}

	if (pricingTimes[2]) {
		pricingTimes[2].innerHTML = `
			<span>${t.estimatedTime}</span>
			${t.landingPageTime}
		`;
	}

	// Pricing note

	setText(
		'.pricing__note p',
		t.pricingNote
	);

	// ==================================================
	// WHAT I DO
	// ==================================================

	const whatIDoTitle = document.querySelector(
		'.services__header .title-big'
	);

	if (whatIDoTitle) {
		whatIDoTitle.innerHTML = `
			<span>/</span>${t.whatIDoTitle}
		`;
	}

	setText(
		'.services__header .sub-title',
		t.whatIDoSubtitle
	);

	const serviceItems = document.querySelectorAll(
		'.services__item'
	);

	const serviceTranslations = [

		[
			t.responsiveDesignTitle,
			t.responsiveDesignText
		],

		[
			t.figmaToHtmlTitle,
			t.figmaToHtmlText
		],

		[
			t.cleanCodeTitle,
			t.cleanCodeText
		],

		[
			t.animationsTitle,
			t.animationsText
		],

		[
			t.crossBrowserTitle,
			t.crossBrowserText
		],

		[
			t.gitGithubTitle,
			t.gitGithubText
		]

	];

	serviceItems.forEach((item, index) => {

		if (serviceTranslations[index]) {

			const title = item.querySelector('h3');

			const text = item.querySelector('p');

			if (title) {
				title.textContent =
					serviceTranslations[index][0];
			}

			if (text) {
				text.textContent =
					serviceTranslations[index][1];
			}

		}

	});

	// ==================================================
	// HOW I WORK
	// ==================================================

	const processTitle = document.querySelector(
		'.process__header .title-big'
	);

	if (processTitle) {
		processTitle.innerHTML = `
			<span>/</span>${t.howIWorkTitle}
		`;
	}

	setText(
		'.process__header .sub-title',
		t.howIWorkSubtitle
	);

	const processItems = document.querySelectorAll(
		'.process__item'
	);

	const processTranslations = [

		[
			t.discussionTitle,
			t.discussionText
		],

		[
			t.developmentTitle,
			t.developmentText
		],

		[
			t.testingTitle,
			t.testingText
		],

		[
			t.deliveryTitle,
			t.deliveryText
		]

	];

	processItems.forEach((item, index) => {

		if (processTranslations[index]) {

			const title = item.querySelector('h3');

			const text = item.querySelector('p');

			if (title) {
				title.textContent =
					processTranslations[index][0];
			}

			if (text) {
				text.textContent =
					processTranslations[index][1];
			}

		}

	});

	// ==================================================
	// FINAL CTA
	// ==================================================

	const finalCtaTitle = document.querySelector(
		'.contact-cta__content .title-big'
	);

	if (finalCtaTitle) {
		finalCtaTitle.innerHTML = `
			<span>/</span>${t.finalCtaTitle}
		`;
	}

	setText(
		'.contact-cta__content p',
		t.finalCtaText
	);

	setText(
		'.contact-cta__button',
		t.getInTouch
	);

	// ==================================================
	// FOOTER
	// ==================================================

	setText(
		'.body-footer__text p',
		t.footerText
	);

	setText(
		'.media-footer__title',
		t.media
	);

	setText(
		'.footer__copy',
		t.copyright
	);

	// ==================================================
	// WORKS PAGE
	// ==================================================

	const worksTitle = document.querySelector(
		'.work .title-big'
	);

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

	// ==================================================
	// WORKS PROJECTS
	// ==================================================

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

	// ==================================================
	// WORKS BUTTONS
	// ==================================================

	setTextAll(
		'.work .projects__item .item-projects__button.button__live:first-child',
		t.liveDemo
	);

	setTextAll(
		'.work .projects__item .item-projects__button.button__live:nth-child(2)',
		t.github
	);

	// ==================================================
	// SELECT
	// ==================================================

	const select = document.getElementById(
		'lang-select'
	);

	if (select) {
		select.value = lang;
	}
}

// ==================================================
// ИНИЦИАЛИЗАЦИЯ
// ==================================================

document.addEventListener(
	'DOMContentLoaded',
	() => {

		const select = document.getElementById(
			'lang-select'
		);

		if (select) {

			select.addEventListener(
				'change',
				function () {

					setLanguage(
						this.value
					);

				}
			);

		}

		// Всегда начинаем с английского

		setLanguage('en');

	}
);