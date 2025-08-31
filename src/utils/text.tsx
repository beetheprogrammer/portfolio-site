import { JSX } from "react";
import { SKILLS } from "./skills";
const { react, html, sass, typescipt, redux, github, jest, styledComponnets } =
	SKILLS;

export interface ILanguageTexts {
	aboutMe: {
		name: string;
		title: string;
		description: string;
		downloadResume: string;
	};
	education: {
		title: string;
		viewCertification: string;
		accomplishment: string;
		viewFullEducationHistory: string;
		educationHistory: {
			date: string;
			program: string;
			school: string;
			description: string;
			workload: string[];
		}[];
	};
	workHistory: {
		title: string;
		viewWorkHistory: string;
		workHistoryList: {
			companyName: string;
			companyLogo: JSX.Element | string;
			jobTitle: string;
			startDate: string;
			endDate: string;
			companyDescription: string;
			responsibilities: string[];
			technologies: {
				name: string;
				icon: {
					normal: JSX.Element;
					large: JSX.Element;
				};
				type: string;
			}[];
		}[];
	};
	skills: {
		title: string;
		viewSkills: string;
		skillCategories: {
			name: string;
			id: string;
			description: string;
		}[];
	};
	projects: {
		title: string;
		viewProjects: string;
		viewLivePreview: string;
		projectList: {
			id: string;
			name: string;
			description: string;
			images: string[];
			functionality: string[];
			technologies: {
				name: string;
				icon: {
					normal: JSX.Element;
					large: JSX.Element;
				};
				type: string;
			}[];
			livePreview?: string;
			github?: string;
		}[];
	};
	ai: {
		chatWithAi: string;
		textPlaceholder: string;
	};
}
export const englishTexts: ILanguageTexts = {
	aboutMe: {
		name: "John DoeReMi",
		title: "Front-End Developer",
		description:
			"As a passionate Full Stack Web and Mobile Developer, I bring over two years of comprehensive experience in the software development lifecycle, including project planning, UI/UX design, development, testing, deployment, and ongoing maintenance. My ability to quickly adapt and learn new technologies makes me a valuable asset to any team, and I am confident in my capacity to contribute effectively to your company's success.",
		downloadResume: "Download Resume",
	},

	// PROJECTS SECTION
	projects: {
		title: "Featured Projects",
		viewProjects: "View All Projects",
		viewLivePreview: "View Live Preview",
		projectList: [
			{
				id: "natour",
				name: "Natour",
				description:
					"A productivity app that uses AI to help users organize, prioritize, and automate their daily tasks in nature.",
				images: [
					"/images/natour/natour-1.png",
					"/images/natour/natour-2.png",
					"/images/natour/natour-3.png",
					"/images/natour/natour-4.png",
				],
				functionality: [
					"AI-powered task suggestions",
					"Calendar and reminders integration",
					"Automated task categorization",
					"Collaboration and shared task lists",
					"Progress tracking and analytics",
				],
				technologies: [
					SKILLS.react,
					SKILLS.nodeJs,
					SKILLS.mongodb,
					SKILLS.openai,
					SKILLS.redux,
					SKILLS.docker,
				],
				livePreview: "https://task-manager-ai.example.com",
				github: "#",
			},
			{
				id: "crown-clothing",
				name: "Crown Clothing",
				description:
					"An e-commerce platform for trendy apparel with seamless checkout and real-time inventory.",
				images: [
					"/images/crown-clothing/crown-clothing-1.png",
					"/images/crown-clothing/crown-clothing-2.png",
					"/images/crown-clothing/crown-clothing-3.png",
					"/images/crown-clothing/crown-clothing-4.png",
				],
				functionality: [
					"User authentication and profile management",
					"Shopping cart with Stripe payment integration",
					"Admin dashboard for product and order management",
					"Product search and filtering",
					"Order history and tracking",
				],
				technologies: [
					SKILLS.html,
					SKILLS.sass,
					SKILLS.javascipt,
					SKILLS.react,
					SKILLS.cypress,
					SKILLS.redux,
					SKILLS.styledComponnets,
					SKILLS.stripe,
				],
				livePreview: "https://crown-clothing.example.com",
				github: "#",
			},
			{
				id: "nexter",
				name: "Nexter",
				description:
					"A social platform for developers to share projects, collaborate, and find theri next job opportunities.",
				images: [
					"/images/nexter/nexter-1.png",
					"/images/nexter/nexter-2.png",
					"/images/nexter/nexter-3.png",
					"/images/nexter/nexter-4.png",
				],
				functionality: [
					"Real-time chat and messaging",
					"Project portfolio showcase",
					"Job board with application tracking",
					"Developer blog and article publishing",
					"Event and meetup organization",
				],
				technologies: [
					SKILLS.react,
					SKILLS.nodeJs,
					SKILLS.express,
					SKILLS.postgresql,
					SKILLS.redux,
					SKILLS.webhooks,
				],
				livePreview: "https://dev-connect.example.com",
				github: "#",
			},
		],
	},

	// EDUCATION SECTION
	education: {
		title: "Education",
		viewCertification: "View Certification",
		accomplishment: "Accomplishment",
		viewFullEducationHistory: "View Full Education History",
		educationHistory: [
			{
				date: "2022 - 2025",
				program: "B.S Honours with Specialization in Computer Science",
				school: "University Of Ottawa",
				description:
					"Completed an intensive program focused on advanced computer science concepts, software engineering, and research projects.",
				workload: [
					"Developed a full-stack web application as a capstone project",
					"Conducted research in artificial intelligence and machine learning",
					"Collaborated in team-based software engineering courses",
					"Maintained a GPA of 3.8/4.0",
					"Participated in the Computer Science Student Association",
				],
			},
			{
				date: "2019 - 2021",
				program: "Diploma in Computer Programming",
				school: "Algonquin College",
				description:
					"Gained practical experience in programming, databases, and application development through hands-on coursework.",
				workload: [
					"Built several CRUD applications using Java and C#",
					"Designed and implemented SQL database schemas",
					"Completed a co-op placement as a junior developer",
					"Led a group project to develop a mobile app",
					"Received Dean’s Honour List recognition",
				],
			},
			{
				date: "2017 - 2019",
				program: "High School Diploma",
				school: "Sir Robert Borden High School",
				description:
					"Graduated with honours, focusing on STEM courses and extracurricular technology activities.",
				workload: [
					"Graduated with honours",
					"Founded the school coding club",
					"Won 2nd place in a regional science fair",
					"Volunteered as a peer tutor in mathematics",
					"Participated in robotics competitions",
				],
			},
			{
				date: "2016",
				program: "Certificate in Data Analytics",
				school: "Coursera (Online)",
				description:
					"Completed an intensive online certificate program focused on data analysis, visualization, and statistical methods.",
				workload: [
					"Analyzed real-world datasets using Python and R",
					"Created interactive dashboards with Tableau",
					"Completed a capstone project on business data insights",
					"Earned a certificate with distinction",
					"Presented findings in a virtual symposium",
				],
			},
			{
				date: "2015",
				program: "Full Stack Web Development Bootcamp",
				school: "CodeCrafters Academy",
				description:
					"Participated in a fast-paced bootcamp covering modern web development technologies and agile methodologies.",
				workload: [
					"Built and deployed a MERN stack e-commerce site",
					"Worked in agile sprints with a cross-functional team",
					"Integrated RESTful APIs and third-party services",
					"Received 'Top Project' award for final demo",
					"Mentored new students as a teaching assistant",
				],
			},
		],
	},

	// WORK HISTORY SECTION
	workHistory: {
		title: "Work History",
		viewWorkHistory: "View Full Work History",
		workHistoryList: [
			{
				companyName: "Amazon, Inc",
				companyLogo: "🖌️",
				jobTitle: "Senior Frontend Engineer",
				startDate: "Jan 2019",
				endDate: "Present",
				companyDescription:
					"A wonderful startup charity focused on helping pregnant women throughout their pregnancy by supporting them with care packages tailored to each trimester.",
				responsibilities: [
					"A Complete authentication system; Login, Sign up, password reset / updater , route guarding, security, user roles, etc.",
					"Admin dashboard; To manage registrations, blog posts, subscribers newsletters, etc.",
					"Events calendar system; Users can register for various charity events, each event has a chat forum similar to reddit, etc.",
					"Real time chat; Users can join various groups and chat in real time.",
					"A full stack cross platform (iOs & Android) mobile app that satisfied the business requirements. Some of which includes; Users can track their diet , sleep, etc . View company news & blogs, Ask question and get replies in forums , etc",
					"Real time chat; Users can join various groups and chat in real time.",
				],
				technologies: [
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.redux,
					SKILLS.reactNative,
					SKILLS.android,
					SKILLS.ios,
					SKILLS.nodeJs,
					SKILLS.express,
					SKILLS.postgresql,
					SKILLS.oauth,
					SKILLS.twilio,
					SKILLS.firebase,
					SKILLS.docker,
					SKILLS.github,
					SKILLS.jest,
					SKILLS.cypress,
					SKILLS.webhooks,
				],
			},
			{
				companyName: "PixelForge Studios",
				companyLogo: "🖌️",
				jobTitle: "Lead UI/UX Developer",
				startDate: "Feb 2017",
				endDate: "Dec 2018",
				companyDescription:
					"A creative agency specializing in interactive web experiences and digital branding for startups and tech companies.",
				responsibilities: [
					"Designed and implemented interactive landing pages for high-profile clients.",
					"Led a team of 5 developers in building a reusable component library.",
					"Collaborated with designers to translate Figma prototypes into pixel-perfect React components.",
					"Optimized web applications for accessibility and performance.",
					"Introduced automated testing and CI/CD pipelines to the frontend workflow.",
				],
				technologies: [
					SKILLS.html,
					SKILLS.sass,
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.styledComponnets,
					SKILLS.redux,
					SKILLS.jest,
					SKILLS.cypress,
					SKILLS.github,
					SKILLS.webhooks,
				],
			},
			{
				companyName: "HealthSync Solutions",
				companyLogo: "💡",
				jobTitle: "Full Stack Developer",
				startDate: "Jun 2015",
				endDate: "Jan 2017",
				companyDescription:
					"Developed digital health platforms connecting patients and providers, focusing on secure data exchange and real-time communication.",
				responsibilities: [
					"Built secure patient portals with real-time messaging and appointment scheduling.",
					"Integrated third-party APIs for health data synchronization.",
					"Implemented role-based access control and data encryption.",
					"Worked closely with backend engineers to optimize RESTful APIs.",
					"Maintained comprehensive unit and integration test coverage.",
				],
				technologies: [
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.nodeJs,
					SKILLS.express,
					SKILLS.postgresql,
					SKILLS.redis,
					SKILLS.oauth,
					SKILLS.twilio,
					SKILLS.rabbitmqBackend,
					SKILLS.docker,
					SKILLS.jest,
					SKILLS.github,
				],
			},
			{
				companyName: "EcoTrack Analytics",
				companyLogo: "🌱",
				jobTitle: "Frontend Engineer",
				startDate: "Aug 2013",
				endDate: "May 2015",
				companyDescription:
					"Analytics SaaS startup providing environmental data dashboards and reporting tools for enterprise clients.",
				responsibilities: [
					"Developed interactive dashboards for visualizing environmental metrics.",
					"Implemented data filtering and export features for enterprise users.",
					"Collaborated with data scientists to display real-time analytics.",
					"Refactored legacy codebase to modern React and TypeScript.",
					"Presented technical workshops on frontend best practices.",
				],
				technologies: [
					SKILLS.html,
					SKILLS.sass,
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.styledComponnets,
					SKILLS.redux,
					SKILLS.elasticsearch,
					SKILLS.jest,
					SKILLS.cypress,
					SKILLS.webhooks,
					SKILLS.github,
				],
			},
		],
	},

	// SKILLS SECTION
	skills: {
		title: "Skills & Integrations",
		viewSkills: "View All Skills",
		skillCategories: [
			{
				name: "Front End",
				id: "frontEnd",
				description:
					"Crafting clean responsive and intuitive user interfaces that deliver seamless, engaging user experiences. I specialize in translating complex requirements into visually appealing layouts, ensuring accessibility and performance across all devices.<br /><br /> My approach combines modern frameworks, best practices, and a keen eye for design to create applications that users love to interact with.",
			},
			{
				name: "Back End",
				id: "backEnd",
				description:
					"Building agile robust server-side applications and APIs to power efficient, scalable solutions. My expertise includes designing secure data architectures, optimizing performance, and implementing business logic that drives real-world results.<br /><br /> I leverage the latest technologies and methodologies to ensure reliability, maintainability, and seamless integration with front-end systems.",
			},
			{
				name: "Integrations",
				id: "integrations",
				description:
					"Connecting systems and services through reliable, secure, and efficient integration solutions. I excel at orchestrating data flows between diverse platforms, automating workflows, and ensuring smooth communication across APIs and third-party services.<br /><br /> My focus is on delivering integrations that enhance productivity, reduce manual effort, and scale with evolving business needs.",
			},
			{
				name: "AI",
				id: "ai",
				description:
					"Leveraging artificial intelligence and machine learning to build intelligent, data-driven solutions. My experience includes developing and integrating AI models, automating decision-making processes, and enhancing applications with natural language processing, computer vision, and predictive analytics.<br /><br /> I focus on practical AI implementations that deliver measurable value, improve user experiences, and drive innovation.",
			},
		],
	},

	// AI SECTION
	ai: {
		chatWithAi: "Chat with AI assistant",
		textPlaceholder: "Ask something like 'Does he know React?'",
	},
};

export const frenchTexts: ILanguageTexts = {
	aboutMe: {
		name: "John DoeReMi",
		title: "Développeur Front-End",
		description:
			"En tant que développeur Full Stack Web et Mobile passionné, j'apporte plus de deux ans d'expérience complète dans le cycle de vie du développement logiciel, y compris la planification de projet, la conception UI/UX, le développement, les tests, le déploiement et la maintenance continue. Ma capacité à m'adapter rapidement et à apprendre de nouvelles technologies fait de moi un atout précieux pour toute équipe, et je suis confiant dans ma capacité à contribuer efficacement au succès de votre entreprise.",
		downloadResume: "Télécharger le CV",
	},
	projects: {
		title: "Projets en vedette",
		viewLivePreview: "Voir l'aperçu en direct",
		viewProjects: "Voir Tous les Projets",
		projectList: [
			{
				id: "natour",
				name: "Natour",
				description:
					"Une application de productivité qui utilise l'IA pour aider les utilisateurs à organiser, prioriser et automatiser leurs tâches quotidiennes dans la nature.",
				images: [
					"/images/natour/natour-1.png",
					"/images/natour/natour-2.png",
					"/images/natour/natour-3.png",
					"/images/natour/natour-4.png",
				],
				functionality: [
					"Suggestions de tâches alimentées par l'IA",
					"Intégration de calendrier et rappels",
					"Catégorisation automatique des tâches",
					"Collaboration et listes de tâches partagées",
					"Suivi des progrès et analyses",
				],
				technologies: [
					SKILLS.react,
					SKILLS.nodeJs,
					SKILLS.mongodb,
					SKILLS.openai,
					SKILLS.redux,
					SKILLS.docker,
				],
				livePreview: "https://task-manager-ai.example.com",
				github: "#",
			},
			{
				id: "crown-clothing",
				name: "Crown Clothing",
				description:
					"Une plateforme de commerce électronique pour des vêtements tendance avec un paiement transparent et un inventaire en temps réel.",
				images: [
					"/images/crown-clothing/crown-clothing-1.png",
					"/images/crown-clothing/crown-clothing-2.png",
					"/images/crown-clothing/crown-clothing-3.png",
					"/images/crown-clothing/crown-clothing-4.png",
				],
				functionality: [
					"Authentification des utilisateurs et gestion des profils",
					"Panier d'achat avec intégration de paiement Stripe",
					"Tableau de bord administrateur pour la gestion des produits et des commandes",
					"Recherche et filtrage de produits",
					"Historique et suivi des commandes",
				],
				technologies: [
					SKILLS.html,
					SKILLS.sass,
					SKILLS.javascipt,
					SKILLS.react,
					SKILLS.cypress,
					SKILLS.redux,
					SKILLS.styledComponnets,
					SKILLS.stripe,
				],
				livePreview: "https://crown-clothing.example.com",
				github: "#",
			},
			{
				id: "nexter",
				name: "Nexter",
				description:
					"Une plateforme sociale pour les développeurs pour partager des projets, collaborer et trouver leurs prochaines opportunités d'emploi.",
				images: [
					"/images/nexter/nexter-1.png",
					"/images/nexter/nexter-2.png",
					"/images/nexter/nexter-3.png",
					"/images/nexter/nexter-4.png",
				],
				functionality: [
					"Chat et messagerie en temps réel",
					"Présentation de portfolio de projets",
					"Tableau d'offres d'emploi avec suivi des candidatures",
					"Blog de développeurs et publication d'articles",
					"Organisation d'événements et de rencontres",
				],
				technologies: [
					SKILLS.react,
					SKILLS.nodeJs,
					SKILLS.express,
					SKILLS.postgresql,
					SKILLS.redux,
					SKILLS.webhooks,
				],
				livePreview: "https://dev-connect.example.com",
				github: "#",
			},
		],
	},
	workHistory: {
		title: "Historique de Travail",
		viewWorkHistory: "Voir l'historique complet",
		workHistoryList: [
			{
				companyName: "Amazon, Inc",
				companyLogo: "🖌️",
				jobTitle: "Ingénieur Frontend Senior",
				startDate: "Jan 2019",
				endDate: "Présent",
				companyDescription:
					"Une merveilleuse startup caritative axée sur l'aide aux femmes enceintes tout au long de leur grossesse en les soutenant avec des colis de soins adaptés à chaque trimestre.",
				responsibilities: [
					"Un système d'authentification complet; Connexion, Inscription, réinitialisation / mise à jour du mot de passe, protection des routes, sécurité, rôles des utilisateurs, etc.",
					"Tableau de bord administrateur; Pour gérer les inscriptions, les articles de blog, les newsletters des abonnés, etc.",
					"Système de calendrier d'événements; Les utilisateurs peuvent s'inscrire à divers événements caritatifs, chaque événement a un forum de discussion similaire à reddit, etc.",
					"Chat en temps réel; Les utilisateurs peuvent rejoindre divers groupes et discuter en temps réel.",
					"Une application mobile multiplateforme (iOS & Android) complète qui répondait aux exigences commerciales. Certaines d'entre elles incluent; Les utilisateurs peuvent suivre leur régime alimentaire, leur sommeil, etc. Voir les actualités et les blogs de l'entreprise, poser des questions et obtenir des réponses dans les forums, etc.",
					"Chat en temps réel; Les utilisateurs peuvent rejoindre divers groupes et discuter en temps réel.",
				],
				technologies: [
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.redux,
					SKILLS.reactNative,
					SKILLS.android,
					SKILLS.ios,
					SKILLS.nodeJs,
					SKILLS.express,
					SKILLS.postgresql,
					SKILLS.oauth,
					SKILLS.twilio,
					SKILLS.firebase,
					SKILLS.docker,
					SKILLS.github,
					SKILLS.jest,
					SKILLS.cypress,
					SKILLS.webhooks,
				],
			},
			{
				companyName: "PixelForge Studios",
				companyLogo: "🖌️",
				jobTitle: "Développeur UI/UX Principal",
				startDate: "Fév 2017",
				endDate: "Déc 2018",
				companyDescription:
					"Une agence créative spécialisée dans les expériences web interactives et le branding digital pour les startups et les entreprises technologiques.",
				responsibilities: [
					"Conception et mise en œuvre de pages d'atterrissage interactives pour des clients de premier plan.",
					"Dirigé une équipe de 5 développeurs pour créer une bibliothèque de composants réutilisables.",
					"Collaboration avec les designers pour traduire les prototypes Figma en composants React pixel-perfect.",
					"Optimisation des applications web pour l'accessibilité et la performance.",
					"Introduction de tests automatisés et de pipelines CI/CD dans le flux de travail frontend.",
				],
				technologies: [
					SKILLS.html,
					SKILLS.sass,
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.styledComponnets,
					SKILLS.redux,
					SKILLS.jest,
					SKILLS.cypress,
					SKILLS.github,
					SKILLS.webhooks,
				],
			},
			{
				companyName: "HealthSync Solutions",
				companyLogo: "💡",
				jobTitle: "Développeur Full Stack",
				startDate: "Juin 2015",
				endDate: "Jan 2017",
				companyDescription:
					"Développement de plateformes de santé numériques connectant patients et prestataires, axées sur l'échange sécurisé de données et la communication en temps réel.",
				responsibilities: [
					"Création de portails patients sécurisés avec messagerie en temps réel et planification de rendez-vous.",
					"Intégration d'API tierces pour la synchronisation des données de santé.",
					"Mise en œuvre du contrôle d'accès basé sur les rôles et du chiffrement des données.",
					"Travail en étroite collaboration avec les ingénieurs backend pour optimiser les API RESTful.",
					"Maintien d'une couverture complète des tests unitaires et d'intégration.",
				],
				technologies: [
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.nodeJs,
					SKILLS.express,
					SKILLS.postgresql,
					SKILLS.redis,
					SKILLS.oauth,
					SKILLS.twilio,
					SKILLS.rabbitmqBackend,
					SKILLS.docker,
					SKILLS.jest,
					SKILLS.github,
				],
			},
			{
				companyName: "EcoTrack Analytics",
				companyLogo: "🌱",
				jobTitle: "Ingénieur Frontend",
				startDate: "Août 2013",
				endDate: "Mai 2015",
				companyDescription:
					"Startup SaaS d'analytique fournissant des tableaux de bord de données environnementales et des outils de reporting pour les clients d'entreprise.",
				responsibilities: [
					"Développement de tableaux de bord interactifs pour visualiser les métriques environnementales.",
					"Mise en œuvre de fonctionnalités de filtrage et d'exportation de données pour les utilisateurs d'entreprise.",
					"Collaboration avec les data scientists pour afficher des analyses en temps réel.",
					"Refactorisation de la base de code héritée vers React et TypeScript modernes.",
					"Présentation d'ateliers techniques sur les meilleures pratiques frontend.",
				],
				technologies: [
					SKILLS.html,
					SKILLS.sass,
					SKILLS.react,
					SKILLS.typescipt,
					SKILLS.styledComponnets,
					SKILLS.redux,
					SKILLS.elasticsearch,
					SKILLS.jest,
					SKILLS.cypress,
					SKILLS.webhooks,
					SKILLS.github,
				],
			},
		],
	},
	education: {
		title: "Éducation",
		viewCertification: "Voir la Certification",
		accomplishment: "Accomplissement",
		viewFullEducationHistory: "Afficher l’historique complet de l’éducation",
		educationHistory: [
			{
				date: "2022 - 2025",
				program: "B.S Honours avec spécialisation en informatique",
				school: "Université d'Ottawa",
				description:
					"Programme intensif axé sur les concepts avancés en informatique, l'ingénierie logicielle et les projets de recherche.",
				workload: [
					"Développement d'une application web full-stack comme projet de fin d'études",
					"Recherche en intelligence artificielle et apprentissage automatique",
					"Collaboration dans des cours d'ingénierie logicielle en équipe",
					"Maintien d'une moyenne de 3.8/4.0",
					"Participation à l'Association des étudiants en informatique",
				],
			},
			{
				date: "2019 - 2021",
				program: "Diplôme en programmation informatique",
				school: "Collège Algonquin",
				description:
					"Expérience pratique en programmation, bases de données et développement d'applications à travers des cours pratiques.",
				workload: [
					"Création de plusieurs applications CRUD en Java et C#",
					"Conception et implémentation de schémas de bases de données SQL",
					"Stage coopératif en tant que développeur junior",
					"Direction d'un projet de groupe pour développer une application mobile",
					"Reconnaissance sur la liste d'honneur du doyen",
				],
			},
			{
				date: "2017 - 2019",
				program: "Diplôme d'études secondaires",
				school: "Lycée Sir Robert Borden",
				description:
					"Diplômé avec mention, axé sur les cours STEM et les activités technologiques parascolaires.",
				workload: [
					"Diplômé avec mention",
					"Fondation du club de codage de l'école",
					"2ème place dans une foire scientifique régionale",
					"Bénévolat en tant que tuteur en mathématiques",
					"Participation à des compétitions de robotique",
				],
			},
			{
				date: "2016",
				program: "Certificat en analyse de données",
				school: "Coursera (En ligne)",
				description:
					"Programme intensif en ligne axé sur l'analyse de données, la visualisation et les méthodes statistiques.",
				workload: [
					"Analyse de jeux de données réels avec Python et R",
					"Création de tableaux de bord interactifs avec Tableau",
					"Projet de fin d'études sur les insights de données commerciales",
					"Obtention d'un certificat avec distinction",
					"Présentation des résultats lors d'un symposium virtuel",
				],
			},
			{
				date: "2015",
				program: "Bootcamp de développement web full-stack",
				school: "CodeCrafters Academy",
				description:
					"Bootcamp intensif couvrant les technologies modernes de développement web et les méthodologies agiles.",
				workload: [
					"Création et déploiement d'un site e-commerce MERN",
					"Travail en sprints agiles avec une équipe interfonctionnelle",
					"Intégration d'API RESTful et de services tiers",
					"Réception du prix 'Top Project' pour la démonstration finale",
					"Mentorat des nouveaux étudiants en tant qu'assistant pédagogique",
				],
			},
		],
	},
	skills: {
		title: "Compétences & Intégrations",
		viewSkills: "Voir Toutes les Compétences",
		skillCategories: [
			{
				name: "Front End",
				id: "frontEnd",
				description:
					"Créer des interfaces utilisateur propres, réactives et intuitives qui offrent des expériences utilisateur fluides et engageantes. Je me spécialise dans la traduction de besoins complexes en mises en page visuellement attrayantes, garantissant l'accessibilité et la performance sur tous les appareils.<br /><br /> Mon approche combine des frameworks modernes, les meilleures pratiques et un œil attentif pour le design afin de créer des applications que les utilisateurs aiment utiliser.",
			},
			{
				name: "Back End",
				id: "backEnd",
				description:
					"Construire des applications côté serveur et des API agiles et robustes pour alimenter des solutions efficaces et évolutives. Mon expertise inclut la conception d'architectures de données sécurisées, l'optimisation des performances et la mise en œuvre de la logique métier qui génère des résultats concrets.<br /><br /> J'utilise les dernières technologies et méthodologies pour assurer la fiabilité, la maintenabilité et l'intégration transparente avec les systèmes front-end.",
			},
			{
				name: "Intégrations",
				id: "integrations",
				description:
					"Connecter des systèmes et des services grâce à des solutions d'intégration fiables, sécurisées et efficaces. J'excelle dans l'orchestration des flux de données entre des plateformes diverses, l'automatisation des workflows et l'assurance d'une communication fluide entre les API et les services tiers.<br /><br /> Mon objectif est de fournir des intégrations qui améliorent la productivité, réduisent l'effort manuel et évoluent avec les besoins changeants de l'entreprise.",
			},
			{
				name: "IA",
				id: "ai",
				description:
					"Tirer parti de l'intelligence artificielle et de l'apprentissage automatique pour construire des solutions intelligentes et basées sur les données. Mon expérience inclut le développement et l'intégration de modèles d'IA, l'automatisation des processus décisionnels et l'amélioration des applications avec le traitement du langage naturel, la vision par ordinateur et l'analyse prédictive.<br /><br /> Je me concentre sur des implémentations pratiques de l'IA qui apportent une valeur mesurable, améliorent les expériences utilisateur et stimulent l'innovation.",
			},
		],
	},
	ai: {
		chatWithAi: "Assistant IA",
		textPlaceholder: "Posez une question à l'assistant IA",
	},
};

export const LANGUAGE: { en: ILanguageTexts; fr: ILanguageTexts } = {
	en: englishTexts,
	fr: frenchTexts,
};
