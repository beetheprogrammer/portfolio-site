import React, { useContext } from "react";
import {
	NavigationMenuAction,
	NavigationMenuContainer,
	NavigationMenuItem,
	NavigationMenusBox,
} from "./NavigationMenu.styles";
import { AppContext } from "../AppWrapper/AppWrapper";
import { RxFontFamily } from "react-icons/rx";
import { RiEnglishInput } from "react-icons/ri";
import { TbBulb, TbBulbOff } from "react-icons/tb";
import { NavigationMenus } from "./NavigationMenu.utils";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
	const { currentLanguage, theme, toggleLanguage, themeType, toggleTheme } =
		useContext(AppContext)!;
	const pathname = usePathname();

	const languageIcon =
		currentLanguage === "en" ? (
			<RxFontFamily color={theme.textColor} size={"1vw"} />
		) : (
			<RiEnglishInput color={theme.textColor} size={"1vw"} />
		);

	const themeIcon =
		themeType === "light" ? (
			<TbBulb color={theme.textColor} size={"1.2vw"} />
		) : (
			<TbBulbOff color={theme.textColor} size={"1.2vw"} />
		);
	return (
		<NavigationMenuContainer>
			<NavigationMenuAction onClick={() => toggleLanguage()}>
				{languageIcon}
				<p className="tooltip">Change language</p>
			</NavigationMenuAction>
			<NavigationMenuAction onClick={() => toggleTheme()}>
				{themeIcon}
				<p className="tooltip">Change theme</p>
			</NavigationMenuAction>
			<NavigationMenusBox>
				{NavigationMenus(theme).map(({ href, icon, title }, index) => (
					<NavigationMenuItem
						className={pathname === href ? "active" : ""}
						href={href}
						key={index}
					>
						{icon}
						{pathname !== href && <p className="tooltip">{title}</p>}
					</NavigationMenuItem>
				))}
			</NavigationMenusBox>
		</NavigationMenuContainer>
	);
};

export default NavigationMenu;
