"use client";

import { ITheme, THEME } from "@/utils/theme";
import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
	AppContainer,
	ContentContainer,
	GlobalStyle,
} from "./AppWrapper.styles";
import AboutMe from "../AboutMe/AboutMe";
import { ILanguageTexts, LANGUAGE } from "@/utils/text";

interface IAppContext {
	theme: ITheme;
	toggleTheme: () => void;
	currentLanguage: "en" | "fr";
	toggleLanguage: () => void;
	languageTexts: ILanguageTexts;
	themeType: "light" | "dark";
}

export const AppContext = createContext<IAppContext | null>(null);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const [language, setLanguage] = useState<"en" | "fr">("en");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const toggleLanguage = () => {
		setLanguage(language === "fr" ? "en" : "fr");
	};

	const appContextValue = {
		theme: THEME[theme],
		themeType: theme,
		languageTexts: LANGUAGE[language],
		toggleTheme,
		toggleLanguage,
		currentLanguage: language,
	};

	return (
		<AppContext.Provider value={appContextValue}>
			<ThemeProvider theme={THEME[theme]}>
				<GlobalStyle />
				<AppContainer>
					<AboutMe />
					<ContentContainer>{children}</ContentContainer>
				</AppContainer>
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default AppWrapper;
