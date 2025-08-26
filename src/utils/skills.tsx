import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiCreatereactapp } from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";

// Back End
import { SiExpress, SiDjango, SiFlask, SiRubyonrails, SiDotnet, SiSpringboot, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiDocker } from "react-icons/si";

// Integrations
import { SiZapier, SiAmazon, SiGooglecloud, SiStripe, SiTwilio, SiFirebase, SiRabbitmq, SiApachekafka } from "react-icons/si";
import { FaKey } from "react-icons/fa"; // For OAuth
import { MdWebhook } from "react-icons/md"; // For Webhooks

 // AI
import { SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiScikitlearn, SiKeras, SiSpacy, SiOpencv, SiJupyter, SiFastapi } from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // For generic AI/ML platforms
import { FaBrain } from "react-icons/fa"; // For general AI

export const SKILLS = {
	react: {
		name: "React",
		icon: {
			normal: <FaReact size={"1.1vw"} color="#57C4DC" />,
			large: <FaReact size={"2vw"} color="#57C4DC" />,
		},
		type: "frontEnd",
	},
	styledComponnets: {
		name: "Styled Componnets",
		icon: {
			normal: <SiStyledcomponents size={"1.1vw"} color="#E38B87" />,
			large: <SiStyledcomponents size={"2vw"} color="#E38B87" />,
		},
		type: "frontEnd",
	},
	html: {
		name: "HTML",
		icon: {
			normal: <FaHtml5 size={"1.1vw"} color="#E96328" />,
			large: <FaHtml5 size={"2vw"} color="#E96328" />,
		},
		type: "frontEnd",
	},
	sass: {
		name: "Sass",
		icon: {
			normal: <IoLogoSass size={"1.1vw"} color="#CC6699" />,
			large: <IoLogoSass size={"2vw"} color="#CC6699" />,
		},
		type: "frontEnd",
	},
	javascipt: {
		name: "Javascipt",
		icon: {
			normal: <FaJs size={"1.1vw"} color="#F0DC55" />,
			large: <FaJs size={"2vw"} color="#F0DC55" />,
		},
		type: "frontEnd",
	},
	typescipt: {
		name: "Typescipt",
		icon: {
			normal: <SiTypescript size={"1.1vw"} color="#397CC9" />,
			large: <SiTypescript size={"2vw"} color="#397CC9" />,
		},
		type: "frontEnd",
	},
	redux: {
		name: "Redux",
		icon: {
			normal: <TbBrandRedux size={"1.1vw"} color="#7A50BE" />,
			large: <TbBrandRedux size={"2vw"} color="#7A50BE" />,
		},
		type: "frontEnd",
	},
	github: {
		name: "github",
		icon: {
			normal: <FaGithub size={"1.1vw"} color="#080808" />,
			large: <FaGithub size={"2vw"} color="#080808" />,
		},
		type: "other",
	},
	nodeJs: {
		name: "Node Js",
		icon: {
			normal: <RiNodejsLine size={"1.1vw"} color="#8EC618" />,
			large: <RiNodejsLine size={"2vw"} color="#8EC618" />,
		},
		type: "backEnd",
	},
	reactNative: {
		name: "React Native",
		icon: {
			normal: <SiCreatereactapp size={"1.1vw"} color="#33DFFE" />,
			large: <SiCreatereactapp size={"2vw"} color="#33DFFE" />,
		},
		type: "frontEnd",
	},
	android: {
		name: "Android",
		icon: {
			normal: <BsAndroid2 size={"1.1vw"} color="#A7C840" />,
			large: <BsAndroid2 size={"2vw"} color="#A7C840" />,
		},
		type: "frontEnd",
	},
	ios: {
		name: "IOS",
		icon: {
			normal: <FaApple size={"1.1vw"} color="#397CC9" />,
			large: <FaApple size={"2vw"} color="#397CC9" />,
		},
		type: "frontEnd",
	},
	vueJs: {
		name: "Vue Js",
		icon: {
			normal: <IoLogoVue size={"1.1vw"} color="#6DB586" />,
			large: <IoLogoVue size={"2vw"} color="#6DB586" />,
		},
		type: "frontEnd",
	},
	angularJs: {
		name: "Angular Js",
		icon: {
			normal: <FaAngular size={"1.1vw"} color="#B33335" />,
			large: <FaAngular size={"2vw"} color="#B33335" />,
		},
		type: "frontEnd",
	},
	jest: {
		name: "Jest",
		icon: {
			normal: <SiJest size={"1.1vw"} color="#C8431F" />,
			large: <SiJest size={"2vw"} color="#C8431F" />,
		},
		type: "frontEnd",
	},
	cypress: {
		name: "Cypress",
		icon: {
			normal: <TbBrandCypress size={"1.1vw"} color="#616163" />,
			large: <TbBrandCypress size={"2vw"} color="#616163" />,
		},
		type: "frontEnd",
	},

	// --- Back End ---
	express: {
		name: "Express",
		icon: {
			normal: <SiExpress size={"1.1vw"} color="#000000" />,
			large: <SiExpress size={"2vw"} color="#000000" />,
		},
		type: "backEnd",
	},
	django: {
		name: "Django",
		icon: {
			normal: <SiDjango size={"1.1vw"} color="#092E17" />,
			large: <SiDjango size={"2vw"} color="#092E17" />,
		},
		type: "backEnd",
	},
	flask: {
		name: "Flask",
		icon: {
			normal: <SiFlask size={"1.1vw"} color="#000000" />,
			large: <SiFlask size={"2vw"} color="#000000" />,
		},
		type: "backEnd",
	},
	rubyOnRails: {
		name: "Ruby on Rails",
		icon: {
			normal: <SiRubyonrails size={"1.1vw"} color="#CC0000" />,
			large: <SiRubyonrails size={"2vw"} color="#CC0000" />,
		},
		type: "backEnd",
	},
	dotnet: {
		name: ".NET",
		icon: {
			normal: <SiDotnet size={"1.1vw"} color="#512BD4" />,
			large: <SiDotnet size={"2vw"} color="#512BD4" />,
		},
		type: "backEnd",
	},
	springBoot: {
		name: "Spring Boot",
		icon: {
			normal: <SiSpringboot size={"1.1vw"} color="#6DB33F" />,
			large: <SiSpringboot size={"2vw"} color="#6DB33F" />,
		},
		type: "backEnd",
	},
	graphql: {
		name: "GraphQL",
		icon: {
			normal: <SiGraphql size={"1.1vw"} color="#E10098" />,
			large: <SiGraphql size={"2vw"} color="#E10098" />,
		},
		type: "backEnd",
	},
	postgresql: {
		name: "PostgreSQL",
		icon: {
			normal: <SiPostgresql size={"1.1vw"} color="#336791" />,
			large: <SiPostgresql size={"2vw"} color="#336791" />,
		},
		type: "backEnd",
	},
	mongodb: {
		name: "MongoDB",
		icon: {
			normal: <SiMongodb size={"1.1vw"} color="#47A248" />,
			large: <SiMongodb size={"2vw"} color="#47A248" />,
		},
		type: "backEnd",
	},
	redis: {
		name: "Redis",
		icon: {
			normal: <SiRedis size={"1.1vw"} color="#DC382D" />,
			large: <SiRedis size={"2vw"} color="#DC382D" />,
		},
		type: "backEnd",
	},
	docker: {
		name: "Docker",
		icon: {
			normal: <SiDocker size={"1.1vw"} color="#2496ED" />,
			large: <SiDocker size={"2vw"} color="#2496ED" />,
		},
		type: "backEnd",
	},
	elasticsearch: {
		name: "Elasticsearch",
		icon: {
			normal: <FaBrain size={"1.1vw"} color="#005571" />,
			large: <FaBrain size={"2vw"} color="#005571" />,
		},
		type: "backEnd",
	},
	rabbitmqBackend: {
		name: "RabbitMQ",
		icon: {
			normal: <SiRabbitmq size={"1.1vw"} color="#FF6600" />,
			large: <SiRabbitmq size={"2vw"} color="#FF6600" />,
		},
		type: "backEnd",
	},

	// --- Integrations ---
	zapier: {
		name: "Zapier",
		icon: {
			normal: <SiZapier size={"1.1vw"} color="#FF4F00" />,
			large: <SiZapier size={"2vw"} color="#FF4F00" />,
		},
		type: "integrations",
	},
	webhooks: {
		name: "Webhooks",
		icon: {
			normal: <MdWebhook size={"1.1vw"} color="#5A5A5A" />,
			large: <MdWebhook size={"2vw"} color="#5A5A5A" />,
		},
		type: "integrations",
	},
	oauth: {
		name: "OAuth",
		icon: {
			normal: <FaKey size={"1.1vw"} color="#4285F4" />,
			large: <FaKey size={"2vw"} color="#4285F4" />,
		},
		type: "integrations",
	},
	awsLambda: {
		name: "AWS Lambda",
		icon: {
			normal: <SiAmazon size={"1.1vw"} color="#FF9900" />,
			large: <SiAmazon size={"2vw"} color="#FF9900" />,
		},
		type: "integrations",
	},
	googleCloudFunctions: {
		name: "Google Cloud Functions",
		icon: {
			normal: <SiGooglecloud size={"1.1vw"} color="#4285F4" />,
			large: <SiGooglecloud size={"2vw"} color="#4285F4" />,
		},
		type: "integrations",
	},
	stripe: {
		name: "Stripe",
		icon: {
			normal: <SiStripe size={"1.1vw"} color="#635BFF" />,
			large: <SiStripe size={"2vw"} color="#635BFF" />,
		},
		type: "integrations",
	},
	twilio: {
		name: "Twilio",
		icon: {
			normal: <SiTwilio size={"1.1vw"} color="#F22F46" />,
			large: <SiTwilio size={"2vw"} color="#F22F46" />,
		},
		type: "integrations",
	},
	firebase: {
		name: "Firebase",
		icon: {
			normal: <SiFirebase size={"1.1vw"} color="#FFCA28" />,
			large: <SiFirebase size={"2vw"} color="#FFCA28" />,
		},
		type: "integrations",
	},
	rabbitmq: {
		name: "RabbitMQ",
		icon: {
			normal: <SiRabbitmq size={"1.1vw"} color="#FF6600" />,
			large: <SiRabbitmq size={"2vw"} color="#FF6600" />,
		},
		type: "integrations",
	},
	kafka: {
		name: "Kafka",
		icon: {
			normal: <SiApachekafka size={"1.1vw"} color="#231F17" />,
			large: <SiApachekafka size={"2vw"} color="#231F17" />,
		},
		type: "integrations",
	},
	slack: {
		name: "Slack",
		icon: {
			normal: <FaRobot size={"1.1vw"} color="#611f69" />,
			large: <FaRobot size={"2vw"} color="#611f69" />,
		},
		type: "integrations",
	},
	zendesk: {
		name: "Zendesk",
		icon: {
			normal: <FaRobot size={"1.1vw"} color="#03363d" />,
			large: <FaRobot size={"2vw"} color="#03363d" />,
		},
		type: "integrations",
	},
	mailgun: {
		name: "Mailgun",
		icon: {
			normal: <FaRobot size={"1.1vw"} color="#c17531" />,
			large: <FaRobot size={"2vw"} color="#c17531" />,
		},
		type: "integrations",
	},
	sendgrid: {
		name: "SendGrid",
		icon: {
			normal: <FaRobot size={"1.1vw"} color="#00B5E4" />,
			large: <FaRobot size={"2vw"} color="#00B5E4" />,
		},
		type: "integrations",
	},

	// --- AI ---
	tensorflow: {
		name: "TensorFlow",
		icon: {
			normal: <SiTensorflow size={"1.1vw"} color="#FF6F00" />,
			large: <SiTensorflow size={"2vw"} color="#FF6F00" />,
		},
		type: "ai",
	},
	pytorch: {
		name: "PyTorch",
		icon: {
			normal: <SiPytorch size={"1.1vw"} color="#EE4C2C" />,
			large: <SiPytorch size={"2vw"} color="#EE4C2C" />,
		},
		type: "ai",
	},
	openai: {
		name: "OpenAI",
		icon: {
			normal: <SiOpenai size={"1.1vw"} color="#412991" />,
			large: <SiOpenai size={"2vw"} color="#412991" />,
		},
		type: "ai",
	},
	huggingface: {
		name: "Hugging Face",
		icon: {
			normal: <SiHuggingface size={"1.1vw"} color="#FFD21F" />,
			large: <SiHuggingface size={"2vw"} color="#FFD21F" />,
		},
		type: "ai",
	},
	scikitlearn: {
		name: "scikit-learn",
		icon: {
			normal: <SiScikitlearn size={"1.1vw"} color="#F7931E" />,
			large: <SiScikitlearn size={"2vw"} color="#F7931E" />,
		},
		type: "ai",
	},
	keras: {
		name: "Keras",
		icon: {
			normal: <SiKeras size={"1.1vw"} color="#D00000" />,
			large: <SiKeras size={"2vw"} color="#D00000" />,
		},
		type: "ai",
	},
	spacy: {
		name: "spaCy",
		icon: {
			normal: <SiSpacy size={"1.1vw"} color="#09A3D5" />,
			large: <SiSpacy size={"2vw"} color="#09A3D5" />,
		},
		type: "ai",
	},
	nltk: {
		name: "NLTK",
		icon: {
			normal: <FaRobot size={"1.1vw"} color="#9CFF00" />,
			large: <FaRobot size={"2vw"} color="#9CFF00" />,
		},
		type: "ai",
	},
	opencv: {
		name: "OpenCV",
		icon: {
			normal: <SiOpencv size={"1.1vw"} color="#5C3EE8" />,
			large: <SiOpencv size={"2vw"} color="#5C3EE8" />,
		},
		type: "ai",
	},
	jupyter: {
		name: "Jupyter",
		icon: {
			normal: <SiJupyter size={"1.1vw"} color="#F37626" />,
			large: <SiJupyter size={"2vw"} color="#F37626" />,
		},
		type: "ai",
	},
	fastapi: {
		name: "FastAPI",
		icon: {
			normal: <SiFastapi size={"1.1vw"} color="#009688" />,
			large: <SiFastapi size={"2vw"} color="#009688" />,
		},
		type: "ai",
	},
	azureml: {
		name: "Azure ML",
		icon: {
			normal: <FaRobot size={"1.1vw"} color="#0078D4" />,
			large: <FaRobot size={"2vw"} color="#0078D4" />,
		},
		type: "ai",
	},
	awsSagemaker: {
		name: "AWS SageMaker",
		icon: {
			normal: <SiAmazon size={"1.1vw"} color="#FF9900" />,
			large: <SiAmazon size={"2vw"} color="#FF9900" />,
		},
		type: "ai",
	},
	googleAI: {
		name: "Google AI",
		icon: {
			normal: <SiGooglecloud size={"1.1vw"} color="#4285F4" />,
			large: <SiGooglecloud size={"2vw"} color="#4285F4" />,
		},
		type: "ai",
	},
	generalAI: {
		name: "General AI",
		icon: {
			normal: <FaBrain size={"1.1vw"} color="#FFB300" />,
			large: <FaBrain size={"2vw"} color="#FFB300" />,
		},
		type: "ai",
	},
};
