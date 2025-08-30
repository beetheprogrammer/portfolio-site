import Link from "next/link";
import styled from "styled-components";

export const WorkHistoryContainer = styled.div`
	width: 100%;
	padding-right: 2vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	.heading {
		border-bottom: 2px solid ${(props) => props.theme.gray_1};
		width: fit-content;
		padding: 0 10vw;
		margin-bottom: 4vw;

		.headingText {
			font-size: 1.7vw;
			padding: 0 1vw;
			transform: translateY(50%);
			background-color: ${(props) => props.theme.background};
		}
	}
`;

export const WorkHistoryItem = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 25% 75%;
	
`;

export const JobHistoryItemSummary = styled.div`
	display: flex;
	flex-direction: column;
  gap: 0.3vw;
	align-items: flex-end;
	padding-right: 3vw;
	border-right: 1px solid ${(props) => props.theme.gray_1};
	position: relative;
	padding-top: 2vw;

	.company {
		font-size: 0.9rem;
		font-weight: 100;
	}

	.role {
		font-weight: bold;
		opacity: 0.6;
	}

	.date {
		font-size: 0.8rem;
		opacity: 0.6;
	}

	.marker{
		height: 2vw;
		width: 2vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: ${(props) => props.theme.gray_1};
		position: absolute;
		top: 0vw;
		right: 0;
		transform: translateX(50%);
	}
`;

export const JobHistoryItemDetails = styled.div`
	padding-left: 3vw;
	padding-top: 2vw;
	padding-bottom: 3vw;
	display: flex;
	flex-direction: column;
	gap: 2vw;
	position: relative;
`;

export const WorkHistoryButton = styled(Link)`
	position: absolute;
	left: 25%;
	bottom: -15%;
	text-decoration: none;
	padding: 1vw 2vw;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};
	border-bottom-right-radius: 2vw;
`;