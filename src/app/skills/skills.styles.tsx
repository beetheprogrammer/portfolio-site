import styled from "styled-components";

export const SkillsIntegrationsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	padding: 7vw 2vw 7vw 2vw;
`;

export const SkillsDetails = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1vw;

	.title {
		font-size: 1.7vw;
	}

	.description {
		opacity: 0.6;
    margin: 0.5vw 0;
	}

	.linkButton {
		font-size: 1vw;
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primaryColor};
		text-decoration: none;
    width: fit-content;
    padding: .8vw 3vw;
    border-bottom-right-radius: 2vw;
		text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
	}
`;

export const SkillsBadgesContainer = styled.div`
	height: 30vw;
	position: relative;
	display: flex;
	flex-wrap: wrap;
`;

export const SkillBadge = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 1vw;
	width: 7vw;
	padding: 0.5vw;

	.icon {
		width: 5vw;
		height: 5vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		background-color: ${(props) => props.theme.background};
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
	}

	.skill {
		padding: 0.5vw;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
		font-size: 0.9vw;
		border-radius: 1vw;
		transform: translateY(-50%);
		opacity: 1;
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme.textColor};
		text-align: center;
		white-space: nowrap;

	}

	&.pos-1 {
		position: absolute;
		left: -20%;
		top: -10%;

		.icon {
			width: 8vw;
			height: 8vw;
		}
	}

	&.pos-2 {
		position: absolute;
		bottom: 0;
		left: -5%;
	}

	&.pos-3 {
		position: absolute;
		top: -5%;
		left: 50%;
		transform: translateX(-50%);
	}

	&.pos-4 {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	&.pos-5 {
		position: absolute;
		top: 47%;
		left: 47%;
		transform: translate(-50%, -50%);

		.icon {
			width: 8vw;
			height: 8vw;
		}
	}

	&.pos-6 {
		position: absolute;
		top: 45%;
		left: 6%;
		transform: translateY(-50%);

		.icon {
			width: 6.5vw;
			height: 6.5vw;;
		}
	}

	&.pos-7 {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}

	&.pos-8 {
		position: absolute;
		top: 14%;
		right: 18%;
	}

	&.pos-9 {
		position: absolute;
		bottom: -10%;
		right: 0;

		.icon {
			width: 8vw;
			height: 8vw;
		}
	}

	&.pos-10 {
		position: absolute;
		right: 0;
		top: 0;

		.icon {
			width: 4vw;
			height: 4vw;
		}
	}

	&.pos-11 {
		position: absolute;
		left: 10%;
		top: 0;

		.icon {
			width: 6vw;
			height: 6vw;
		}
	}

	&.pos-12 {
		position: absolute;
		left: 10%;
		top: 0;

		.icon {
			width: 6vw;
			height: 6vw;
		}
	}

	&.pos-13 {
		position: absolute;
		left: 18%;
		bottom: 13%;
	}

	&.pos-14 {
		position: absolute;
		right: 20%;
		bottom: 19%;
	}
`;

export const SkillsMenu = styled.div`
	display: flex;
	gap: 0.5vw;
	margin-top: 0.5vw;
`;

export const SkillsMenuItem = styled.button`
	background-color: ${(props) => props.theme.gray_1};
	color: ${(props) => props.theme.textColor};
	padding: 0.5vw 0.7vw;
	border-radius: 10vw;
	transition: opacity 0.3s ease;
	font-family: inherit;

	&:hover {
		opacity: 0.6;
		cursor: pointer;
	}

	&.active {
		background-color: ${(props) => props.theme.black};
		color: ${(props) => props.theme.white};
	}
`;
