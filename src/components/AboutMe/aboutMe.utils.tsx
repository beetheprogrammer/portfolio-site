import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaMediumM } from "react-icons/fa";

export const SOCIAL_LINKS = [
	{
		title: "Github",
		href: "https://github.com",
		icon: <FaGithub color="#FFF" size={"1.4vw"} />,
		backgroundColor: "#1D1D1C",
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com",
		icon: <FaLinkedinIn color="#FFF" size={"1.4vw"} />,
		backgroundColor: "#0E61BE",
	},
	{
		title: "Youtube",
		href: "https://www.youtube.com",
		icon: <FiYoutube color="#FFF" size={"1.4vw"} />,
		backgroundColor: "#ff0000",
	},
	{
		title: "Medium",
		href: "https://medium.com",
		icon: <FaMediumM color="#FFF" size={"1.4vw"} />,
		backgroundColor: "#1D1D1C",
	},
];
