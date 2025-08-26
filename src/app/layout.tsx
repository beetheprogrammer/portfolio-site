import AppWrapper from "@/components/AppWrapper/AppWrapper";
import { englishTexts } from "@/utils/text";
import type { Metadata } from "next";
import { Jim_Nightshade, Salsa } from "next/font/google";

const jim_Nightshade = Jim_Nightshade({
	weight: ["400"],
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const salsa = Salsa({
	weight: ["400"],
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: `${englishTexts.aboutMe.name} | Home`,
	description: "My awesome portfolio site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jim_Nightshade.className} ${salsa.className}`}>
				<AppWrapper>{children}</AppWrapper>
			</body>
		</html>
	);
}
