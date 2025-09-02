import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10vw;
	position: relative;
	padding: 6vw 0 8vw 0;

	.sectionTitle {
		position: absolute;
		right: 0;
		top: 0;
		background-color: ${(props) => props.theme.gray_1};
		height: 100%;
		width: 15vw;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		border-bottom-left-radius: 2rem;
    /* min-height: 33vw; */

		.title {
			transform: rotate(-90deg);
			margin-left: 6vw;
			margin-top: 15vw;
			font-size: 2.5vw;
			font-weight: bold;
			letter-spacing: 0.1vw;
			white-space: nowrap;
		}

		a {
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 1vw 2vw;
			background-color: ${(props) => props.theme.primaryColor};
			border-bottom-left-radius: 2rem;
			text-decoration: none;
			width: 100%;
			color: ${(props) => props.theme.white};

      &:hover{
        opacity: .7;
      }
		}
	}
`;

const slideRightLeft = keyframes`
  0% {transform: translateX(-10%);}
  40% {transform: translateX(40px);}
  100% {transform: translateX(-10%);}
`

export const Project = styled.div`
	display: grid;
	grid-template-columns: 45% 55%;
	width: 100%;
	position: relative;
	width: 90%;
	transition: z-index 0.3s ease-in-out;

	&:hover .detailsCard {
		animation: ${slideRightLeft} .6s cubic-bezier(0.4, 0, 0.165, 1);
    z-index: 3;
	}

	.title {
		position: absolute;
		top: 3%;
		right: 25%;
		font-size: 1.5vw;
	}

	.links {
		position: absolute;
		bottom: 0;
		left: 15%;
		display: flex;
		align-items: center;
		gap: 1vw;

		.livePreviewButton {
			background-color: ${(props) => props.theme.primaryColor};
			color: ${(props) => props.theme.white};
			text-decoration: none;
			padding: 0.7vw 1vw;
			border-radius: 10vw;
			transition: opacity 0.3s ease;

			&:hover {
				opacity: 0.6;
			}
		}
	}
`;

export const SlideShowContainer = styled.div`
	max-height: 25vw;
	transform: translateX(10%);
	z-index: 2;
	border-radius: 1vw;
	overflow: hidden;
	box-shadow: 0 4px 26px rgba(0, 0, 0, 0.85);
	background-color: ${(props) => props.theme.gray_1};
  height: 20vw;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectsDetails = styled(Link)`
	background-color: ${(props) => props.theme.background};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 20vw;
	margin-top: 4vw;
	position: relative;
	z-index: 1;
	transition: z-index 0.3s;
	padding: 1vw;
	box-shadow: 0 4px 26px rgba(0, 0, 0, 0.25);
  border-radius: 1vw;
  transform: translateX(-10%);
	text-decoration: none;

  .details{
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }
`;

export const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5vw;

	.skill {
		padding: 0.3vw 1vw;
		border-radius: 2vw;
		display: flex;
		align-items: center;
		gap: 0.3vw;
		background-color: ${(props) => props.theme.gray_1};
    font-size: .8vw;
    white-space: nowrap;
	}
`;

export const ListItems = styled.ul`
	display: flex;
  flex-direction: column;
  gap: .5vw;
`;

export const ListItem = styled.li`
	display: grid;
  grid-template-columns: 2vw 1fr;
  opacity: .7;

`;



