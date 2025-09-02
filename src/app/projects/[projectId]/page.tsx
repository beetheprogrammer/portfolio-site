"use client";

import { AppContext } from "../../../components/AppWrapper/AppWrapper";
import React, { use, useContext, useEffect, useState } from "react";
import {
	ProjectContainer,
	ProjectInfo,
	ProjectThumbnails,
} from "./project.styles";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ListItem, ListItems, SkillsContainer } from "../projects.styles";
import { BsCircleFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const Project = ({ params }: { params: Promise<{ projectId: string }> }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const { languageTexts, theme } = useContext(AppContext)!;
	const projectId = use(params).projectId;
	const PROJECT = languageTexts.projects.projectList.find(
		({ id }) => id === projectId
	);

	useEffect(() => {
		const timer = setInterval(() => {
			if (imagesCount) {
				setCurrentImageIndex((prev) =>
					prev === imagesCount - 1 ? 0 : prev + 1
				);
			}
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	if (!PROJECT) {
		return notFound();
	}

	const imagesCount = PROJECT?.images.length;



	function getNextIndices(currentIndex: number, length: number) {
		const thumbnail1 = (currentIndex + 1) % length;
		const thumbnail2 = (currentIndex + 2) % length;

		return { thumbnail1, thumbnail2 };
	}

	const { thumbnail1, thumbnail2 } = getNextIndices(
		currentImageIndex,
		imagesCount
	);

	return (
		<ProjectContainer>
			<ProjectThumbnails>
				<Image
					src={PROJECT.images[currentImageIndex]}
					alt="Image one"
					width={800}
					height={600}
					className="enlargedImage"
				/>
				<div className="thumbnails">
					<Image
						src={PROJECT.images[thumbnail1]}
						alt="Image one"
						width={800}
						height={600}
						className="enlargedImage"
					/>
					<Image
						src={PROJECT.images[thumbnail2]}
						alt="Image one"
						width={800}
						height={600}
						className="enlargedImage"
					/>
				</div>
			</ProjectThumbnails>
			<ProjectInfo $backgroundColor={PROJECT.primaryColor}>
				<div className="details">
					<span>
						<h1 className="headingText">
							{languageTexts.projects.description}
						</h1>
						<p>{PROJECT.description}</p>
					</span>
					<span>
						<h1 className="headingText">
							{languageTexts.projects.functionalities}
						</h1>
						<ListItems>
							{PROJECT.functionality.map((functionality, index) => (
								<ListItem key={index}>
									<BsCircleFill size={7} />
									<span>{functionality}</span>
								</ListItem>
							))}
						</ListItems>
					</span>
					<span className="links">
						<a className="livePreviewButton" href={PROJECT.livePreview}>
							{languageTexts.projects.viewLivePreview}
						</a>
						<a href={PROJECT.github}>
							<SiGithub size={"1.7vw"} color={PROJECT.primaryColor} />
						</a>
					</span>
				</div>
				<div className="skillsList">
					<h1 className="headingText">{languageTexts.projects.technologies}</h1>
					<SkillsContainer>
						{PROJECT.technologies.map(({ icon, name }, index) => (
							<p key={index} className="skill">
								{icon.normal}
								{name}
							</p>
						))}
					</SkillsContainer>
				</div>
			</ProjectInfo>
		</ProjectContainer>
	);
};

export default Project;
