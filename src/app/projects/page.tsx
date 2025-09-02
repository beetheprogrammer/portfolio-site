"use client"

import React, { useContext } from 'react'
import { ListItem, ListItems, Project, ProjectsContainer, ProjectsDetails, SkillsContainer } from './projects.styles';
import { AppContext } from '@/components/AppWrapper/AppWrapper';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import SlideShow from './SlideShow';
import { BsCircleFill } from 'react-icons/bs';

const Projects = () => {
  const { languageTexts, isHomePage, theme } = useContext(AppContext)!;
  const PROJECTS = languageTexts.projects.projectList;
  const projectsToShow = isHomePage ? PROJECTS.slice(0, 1) : PROJECTS;

  return (
		<ProjectsContainer>
			<div className="sectionTitle">
				<p className="title">{languageTexts.projects.title}</p>
				{isHomePage && (
					<Link href={"/projects"} className="viewAllButton">
						{languageTexts.projects.viewProjects}
					</Link>
				)}
			</div>
			{projectsToShow.map(
				(
					{
						name,
						livePreview,
						images,
						technologies,
						description,
						functionality,
						id
					},
					index
				) => (
					<Project key={index}>
						<h2 className="title">{name}</h2>
						<div className="links">
							<a href={livePreview} className="livePreviewButton">
								{languageTexts.projects.viewLivePreview}
							</a>
							<a href={livePreview}>
								<SiGithub size={"1.7vw"} color={theme.primaryColor} />
							</a>
						</div>
						<SlideShow images={images} />
						<ProjectsDetails href={`/projects/${id}`} className="detailsCard">
							<div className="details">
								<p>{description}</p>
								<ListItems>
									{functionality.map((functionality, index) => (
										<ListItem key={index}>
											<BsCircleFill size={7} />
											<span>{functionality}</span>
										</ListItem>
									))}
								</ListItems>
							</div>
							<SkillsContainer>
								{technologies.map(({ name, icon }, index) => (
									<p key={index} className="skill">
										{icon.normal} {name}
									</p>
								))}
							</SkillsContainer>
						</ProjectsDetails>
					</Project>
				)
			)}
		</ProjectsContainer>
	);
}

export default Projects;