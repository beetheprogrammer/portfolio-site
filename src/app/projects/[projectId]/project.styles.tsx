import styled from "styled-components";

export const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow-y: scroll;

	.headingText {
		font-size: 1.2vw;
		margin: 0 0 0.5vw 0;
	}
`;

export const ProjectThumbnails = styled.div`
	position: relative;
	width: 100%;
	height: 70vh;
	overflow: hidden;

	.enlargedImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.thumbnails {
		display: flex;
		gap: 1.5vw;
		height: 20vh;
		position: absolute;
		bottom: 7%;
		right: -12%;

		img {
			height: 100%;
			width: 20vw;
			box-shadow: 0 4px 26px rgba(0, 0, 0, 1);
		}
	}
`;

export const ProjectInfo = styled.div<{ $backgroundColor?: string }>`
	display: grid;
	grid-template-columns: 65% 35%;
	min-height: 30vh;
	width: 100%;

	.details {
		padding: 4vh 0 1vh 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2vw;
		position: relative;

		.projectName {
			text-align: center;
			font-size: 2.9vw;
			width: 100%;
			font-family: "Jim Nightshade";
		}

		.links {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			gap: 1vw;

			.livePreviewButton {
				background-color: ${({ $backgroundColor, theme }) =>
					$backgroundColor || theme.primaryColor};
				color: ${({ theme }) => theme.white};
				padding: 1vw;
				text-decoration: none;
				border-radius: 3vw;
			}

			a {
				transition: box-shadow 0.3s ease;

				&:hover {
					box-shadow: 0 4px 26px rgba(0, 0, 0, 0.85);
				}
			}
		}
	}

	.skillsList {
		padding: 4vh 3vh 1vh 3vh;
		color: ${(props) => props.theme.white};
		background-color: ${({ $backgroundColor, theme }) =>
			$backgroundColor || theme.primaryColor};

		.headingText {
			color: ${(props) => props.theme.white};
			margin-bottom: 1vw;
		}
	}
`;
