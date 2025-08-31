"use client";

import { useContext } from "react";
import {
	EducationContainer,
	EducationHistory,
	MoreEducationButton,
} from "./Education.styles";
import { AppContext } from "@/components/AppWrapper/AppWrapper";
import { MdOutlineSchool } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export default function EducationPage() {
	const { languageTexts, isHomePage } = useContext(AppContext)!;
	const EDUCATION_HISTORY = languageTexts.education.educationHistory;
	const educationHistoryToShow = isHomePage
		? EDUCATION_HISTORY.slice(0, 2)
		: EDUCATION_HISTORY;

	return (
		<EducationHistory>
			<div className="heading">
				<h1 className="headingText">{languageTexts.education.title}</h1>
			</div>
			{educationHistoryToShow.map(
				({ date, program, school, description, workload }, index) => {
					const isOdd = index % 2 !== 0;
					const reverseClass = isOdd ? "reverse" : "";
					return (
						<EducationContainer key={index} className={reverseClass}>
							<div className="icon">
								<MdOutlineSchool size={"1.2vw"} />
							</div>
							<div className="left">
								<p className="date">{date}</p>
								<p className="program">{program}</p>
								<p className="school">{school}</p>
							</div>
							<div className="right">
								<p className="description">{description}</p>
								<br />
								<p className="sectionHeader">
									{languageTexts.education.accomplishment}
								</p>
								{workload.map((workload, index) => {
									return (
										<div className="accomplishment" key={index}>
											<BsCircleFill
												className="point"
												size={".5vw"}
												color="#565252"
											/>
											<span>{workload}</span>
										</div>
									);
								})}
								<a target="_blank" href="Resume.pdf" className="certLink">
									{languageTexts.education.viewCertification}
								</a>
							</div>
						</EducationContainer>
					);
				}
			)}
			{isHomePage && (
				<MoreEducationButton href={"/education"}>
					{languageTexts.education.viewFullEducationHistory}
				</MoreEducationButton>
			)}
		</EducationHistory>
	);
}
