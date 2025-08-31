"use client";

import { useContext, useEffect, useState } from "react";
import {
  SkillBadge,
	SkillsBadgesContainer,
	SkillsDetails,
	SkillsIntegrationsContainer,
	SkillsMenu,
	SkillsMenuItem,
} from "./skills.styles";
import { AppContext } from "@/components/AppWrapper/AppWrapper";
import Link from "next/link";
import { SKILLS } from "@/utils/skills";

export default function SkillsPage() {
	const [skillIndex, setSkillIndex] = useState(0);
	const { languageTexts, isHomePage } = useContext(AppContext)!;
	const SKILLS_MENU = languageTexts.skills.skillCategories;
	const currentSkillMenu = SKILLS_MENU[skillIndex];
  const skillsCategoriesToShow = isHomePage ? SKILLS_MENU.slice(0, 1) : SKILLS_MENU

  useEffect(() => {
    const interval = setInterval(()=> {
      if(skillIndex >= SKILLS_MENU.length - 1){
        setSkillIndex(0)
      }else{
        setSkillIndex((index) => index +1)
      }
    }, 3000)
    return () => clearInterval(interval);
  }, [skillIndex]);

	return (
		<>
			{skillsCategoriesToShow.map(({ description, name, id }, index) => (
				<SkillsIntegrationsContainer key={index}>
					<SkillsDetails>
						<h1 className="title">{isHomePage ? languageTexts.skills.title : name}</h1>
						{isHomePage && <SkillsMenu>
							{SKILLS_MENU.map(({ name }, index) => (
								<SkillsMenuItem
									onClick={() => setSkillIndex(index)}
									key={index}
									className={index === skillIndex ? "active" : ""}
								>
									{name}
								</SkillsMenuItem>
							))}
						</SkillsMenu>}
						<div
							className="description"
							dangerouslySetInnerHTML={{
								__html: isHomePage ? currentSkillMenu.description : description,
							}}
						/>
						{isHomePage && <Link href={"/skills"} className="linkButton">
							{languageTexts.skills.viewSkills}
						</Link>}
					</SkillsDetails>
					<SkillsBadgesContainer>
						{Object.values(SKILLS)
							.filter(({ type }) => {
                const selectedId = isHomePage ? currentSkillMenu.id : id
								return type === selectedId;
							})
							.slice(0, 14)
							.map(({ name, icon }, index) => {
								return (
									<SkillBadge key={index} className={`pos-${index + 1}`}>
										<div className="icon">{icon["large"]}</div>
										<p className="skill">{name}</p>
									</SkillBadge>
								);
							})}
					</SkillsBadgesContainer>
				</SkillsIntegrationsContainer>
			))}
		</>
	);
}
