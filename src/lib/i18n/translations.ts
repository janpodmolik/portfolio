export const translations = {
	cs: {
		nav: {
			about: 'O mně',
			projects: 'Projekty',
		},
		hero: {
			welcome: '👋 Vítejte na mém portfoliu',
			name: 'Jan Podmolík',
			position: 'iOS & Web Developer',
			description: 'Tvořím moderní iOS a webové aplikace s individuálním přístupem ke každému projektu. Kombinuji zkušenosti z nativního vývoje s moderními web technologiemi.',
			viewProjects: 'Zobrazit projekty',
			moreAbout: 'Více o mně',
		},
		about: {
			title: 'O mně',
			cleanCode: {
				title: 'iOS Development',
				description: 'Původně iOS developer s praxí ve vývoji nativních Swift aplikací pro App Store.',
			},
			modernDesign: {
				title: 'Individuální Přístup',
				description: 'Každý projekt je jedinečný. Zaměřuji se na pochopení vašich potřeb a vytvoření řešení na míru.',
			},
			fastDevelopment: {
				title: 'AI & Experimenty',
				description: 'Díky AI se nebojím experimentovat a zkoušet nové technologie. Rychle se učím a adaptuji.',
			},
			bio1: 'Původně jsem iOS developer a v poslední době i díky rozmachu AI jsem začal zkoušet nové technologie. Vytvářet webové stránky mě chytlo natolik, že chci jít chvíli i touto cestou.',
			bio2: 'Nemám za sebou velké množství projektů, ale jsem připraven na jakoukoliv výzvu a rád se učím novým věcem. Kombinuji zkušenosti z nativního vývoje s moderními web technologiemi.',
		},
		skills: {
			title: 'Technologie & Skills',
			subtitle: 'Technologie, se kterými pravidelně pracuji',
			frontend: '🎨 Frontend',
			backend: '⚙️ Backend',
			tools: '🛠️ Tools & DevOps',
			learning: '✨ Neustále se učím nové věci a rozšiřuji svůj tech stack',
		},
		projects: {
			title: 'Projekty',
			subtitle: 'Výběr projektů, na kterých pracuji',
			moreProjects: 'Více na GitHubu',
			viewApp: 'Zobrazit v App Store',
			viewWebsite: 'Navštívit web',
			items: {
				notino: {
					title: 'Notino - Beauty E-shop',
					description: 'iOS aplikace pro největší evropský e-shop s krásou. Pracuji na vývoji a údržbě Swift aplikace s miliony uživatelů.',
				},
				sova: {
					title: 'SOVA - Osobní App',
					description: 'Moje vlastní iOS aplikace publikovaná v App Store. Menší projekt, který jsem vytvořil pro vlastní potřebu.',
				},
				zdravicko: {
					title: 'Zdravíčko - Dětská Ordinace',
					description: 'První webový projekt pro dětskou lékařskou ordinaci. Moderní responzivní web s důrazem na přívětivý design.',
				},
			},
		},
		footer: {
			position: 'iOS & Web Developer',
			rights: 'Všechna práva vyhrazena.',
		},
	},
	en: {
		nav: {
			about: 'About',
			projects: 'Projects',
		},
		hero: {
			welcome: '👋 Welcome to my portfolio',
			name: 'Jan Podmolík',
			position: 'iOS & Web Developer',
			description: 'I create modern iOS and web applications with an individual approach to each project. Combining native development experience with modern web technologies.',
			viewProjects: 'View Projects',
			moreAbout: 'More About Me',
		},
		about: {
			title: 'About Me',
			cleanCode: {
				title: 'iOS Development',
				description: 'Originally an iOS developer with experience in native Swift application development for the App Store.',
			},
			modernDesign: {
				title: 'Individual Approach',
				description: 'Every project is unique. I focus on understanding your needs and creating tailored solutions.',
			},
			fastDevelopment: {
				title: 'AI & Experiments',
				description: 'Thanks to AI, I\'m not afraid to experiment and try new technologies. I learn and adapt quickly.',
			},
			bio1: 'I\'m originally an iOS developer, and recently, thanks to the rise of AI, I\'ve started trying new technologies. Creating websites caught my attention so much that I want to pursue this path for a while.',
			bio2: 'I don\'t have a huge number of projects behind me, but I\'m ready for any challenge and eager to learn new things. I combine experience from native development with modern web technologies.',
		},
		skills: {
			title: 'Technologies & Skills',
			subtitle: 'Technologies I work with regularly',
			frontend: '🎨 Frontend',
			backend: '⚙️ Backend',
			tools: '🛠️ Tools & DevOps',
			learning: '✨ Constantly learning new things and expanding my tech stack',
		},
		projects: {
			title: 'Projects',
			subtitle: 'Selection of projects I work on',
			moreProjects: 'More on GitHub',
			viewApp: 'View on App Store',
			viewWebsite: 'Visit Website',
			items: {
				notino: {
					title: 'Notino - Beauty E-shop',
					description: 'iOS application for the largest European beauty e-shop. Working on development and maintenance of Swift app with millions of users.',
				},
				sova: {
					title: 'SOVA - Personal App',
					description: 'My own iOS application published on the App Store. A smaller project I created for my own needs.',
				},
				zdravicko: {
					title: 'Zdravíčko - Pediatric Clinic',
					description: 'First web project for a pediatric medical clinic. Modern responsive website with focus on friendly design.',
				},
			},
		},
		footer: {
			position: 'iOS & Web Developer',
			rights: 'All rights reserved.',
		},
	},
} as const;

export type TranslationKey = typeof translations.cs;
