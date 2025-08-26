export interface ITheme {
	black: string;
	white: string;
	primaryColor: string;
	primaryColorLight: string;
	gray_1: string;
	background: string;
	textColor: string;
}

export const LIGHT_THEME: ITheme = {
	black: "#000000",
	white: "#FFFFFF",
	primaryColor: "#8F193D",
	primaryColorLight: "#f3e8eb",
	gray_1: "#f2f2f2",
	background: "#FFFFFF",
	textColor: "#000000",
};

export const DARK_THEME: ITheme = {
	black: "#000000",
	white: "#FFFFFF",
	primaryColor: "#64112a",
	primaryColorLight: "#f3e8eb",
	gray_1: "#000000",
	background: "#1D1D1D",
	textColor: "#E0E0E0",
};

export const THEME = {
	light: LIGHT_THEME,
	dark: DARK_THEME,
};

declare module "styled-components" {
	// eslint-disable-next-line
	export interface DefaultTheme extends ITheme {}
}
