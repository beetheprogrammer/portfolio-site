"use client";

import { AppContext } from "@/components/AppWrapper/AppWrapper";
import { NotFoundPageContainer } from "@/components/AppWrapper/AppWrapper.styles";
import Link from "next/link";
import React, { useContext } from "react";
import { TbError404 } from "react-icons/tb";

const NotFoundPage = () => {
	const { languageTexts } = useContext(AppContext)!;
	return (
		<NotFoundPageContainer>
			<TbError404 size={"10vw"}/>
			{languageTexts.notFound.pageNotFound}
			<Link href={"/"}>{languageTexts.notFound.returnHome}</Link>
		</NotFoundPageContainer>
	);
};

export default NotFoundPage;
