import Link from "next/link";
import styled from "styled-components";

export const EducationHistory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 3vw 2vw ;

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

export const EducationContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	padding: 1vw 0;

	.date {
		opacity: 0.7;
		font-size: 0.8vw;
	}

	.program {
		font-weight: bold;
	}

	.school {
		opacity: 0.7;
	}

	.description {
    opacity: .7;
  }
  
  .icon {
		width: 2vw;
		height: 2vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		background-color: ${(props) => props.theme.gray_1};
		position: absolute;
		right: 50%;
		transform: translate(50%, -80%);
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.2vw;
		width: 50%;
		padding: 1vw 2vw 3vw 2vw;
		border-right: 1px dashed ${(props) => props.theme.gray_1};
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 50%;
		padding: 1vw 2vw 3vw 2vw;
		border-left: 1px dashed ${(props) => props.theme.gray_1};
	}

	&.reverse {
		flex-direction: row-reverse;

		.left {
			align-items: flex-start;
			border-left: 1px dashed ${(props) => props.theme.gray_1};
			border-right: none;
		}

		.right {
			align-items: flex-end;
			border-right: 1px dashed ${(props) => props.theme.gray_1};
			border-left: none;
			text-align: right;
		}

		.accomplishment {
			flex-direction: row-reverse;
		}
	}

	.accomplishment {
		display: flex;
		align-items: center;
		gap: 0.5vw;
		margin-bottom: 0.3vw;
		opacity: 0.7;
	}

	.sectionHeader {
		margin-bottom: 0.7vw;
		font-weight: 800;
		text-decoration: underline;
	}

	.certLink {
		text-decoration: underline;
		margin-top: 1.5vw;
		color: ${(props) => props.theme.primaryColor};
		font-weight: bold;
	}
`;



export const MoreEducationButton = styled(Link)`
	text-decoration: none;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};
  padding: .8vw 1.5vw;
  border-radius: 100vw;
`;
