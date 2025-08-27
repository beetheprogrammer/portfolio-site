import { AiOutlineHome } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { DefaultTheme } from "styled-components";

export const NavigationMenus = (theme: DefaultTheme) => {
	return [
		{
			title: "Home",
			icon: <AiOutlineHome color={theme.textColor} size={"1vw"} />,
			href: "/",
		},
		{
			title: "Projects",
			icon: <BiCodeBlock color={theme.textColor} size={"1vw"} />,
			href: "/projects",
		},
		{
			title: "Work history",
			icon: <MdOutlineWorkOutline color={theme.textColor} size={"1vw"} />,
			href: "/work-history",
		},
		{
			title: "Skills",
			icon: <FaCode color={theme.textColor} size={"1vw"} />,
			href: "/skills",
		},
		{
			title: "Education",
			icon: <MdOutlineSchool color={theme.textColor} size={"1vw"} />,
			href: "/education",
		},
	];
};
