"use client";

import { useContext } from "react";
import {
	JobHistoryItemDetails,
	JobHistoryItemSummary,
	WorkHistoryButton,
	WorkHistoryContainer,
	WorkHistoryItem,
} from "./WorkHistory.styles";
import { AppContext } from "@/components/AppWrapper/AppWrapper";
import { MdWorkOutline } from "react-icons/md";
import { ListItem, ListItems, SkillsContainer } from "../projects/projects.styles";
import { BsCircleFill } from "react-icons/bs";

export default function WorkHistoryPage() {
	const { languageTexts, isHomePage, theme } = useContext(AppContext)!;
	const WORK_HISTORY = languageTexts.workHistory.workHistoryList;
	const workHistoryToShow = isHomePage
		? WORK_HISTORY.slice(0, 1)
		: WORK_HISTORY;

	return (
		<WorkHistoryContainer>
			<div className="heading">
				<p className="headingText">{languageTexts.workHistory.title}</p>
			</div>
			{workHistoryToShow.map(
				(
					{
						companyName,
						companyLogo,
						jobTitle,
						startDate,
						endDate,
						companyDescription,
						responsibilities,
						technologies,
					},
					index
				) => (
					<WorkHistoryItem key={index}>
						<JobHistoryItemSummary>
							<h1 className="company">{companyName}</h1>
							<p className="role">{jobTitle}</p>
							<p className="date">
								{startDate} - {endDate}
							</p>
							<div className="marker">
								<MdWorkOutline color={theme.textColor} size={"1vw"} />
							</div>
						</JobHistoryItemSummary>
						<JobHistoryItemDetails>
							<p>{companyDescription}</p>
							<ListItems>
								{responsibilities.map((functionality, index) => (
									<ListItem key={index}>
										<BsCircleFill size={7} />
										<span>{functionality}</span>
									</ListItem>
								))}
							</ListItems>
							<SkillsContainer>
								{technologies.map(({ name, icon }, index) => (
									<p key={index} className="skill">
										{icon.normal} {name}
									</p>
								))}
							</SkillsContainer>
						</JobHistoryItemDetails>
					</WorkHistoryItem>
				)
			)}
			{isHomePage && (
				<WorkHistoryButton href={"/work-history"}>
					{languageTexts.workHistory.viewWorkHistory}
				</WorkHistoryButton>
			)}
		</WorkHistoryContainer>
	);
}
