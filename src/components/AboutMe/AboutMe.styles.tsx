import styled from "styled-components";

export const AboutMeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;
	position: relative;

	.name {
		text-align: center;
		font-size: 1.9vw;
		margin-top: 1vw;
	}

	.title {
		text-align: center;
		font-size: 1.7vw;
		opacity: 0.6;
		font-weight: bold;
		font-family: "Jim Nightshade";
	}

	.summary {
		text-align: center;
		line-height: 2;
		width: 88%;
		margin: 1vw auto 2vw auto;
	}
`;

export const ProfilePicture = styled.div`
	width: 14vw;
	height: 14vw;
	position: relative;
	border-radius: 100%;
	border-bottom: 4px solid ${(props) => props.theme.primaryColor};
	border-right: 4px solid ${(props) => props.theme.primaryColor};
	

	img {
		border-radius: 100%;
		object-fit: cover;
		border-bottom: 4px solid ${(props) => props.theme.white};
		border-right: 4px solid ${(props) => props.theme.white};
		width: 100%;
		height: 100%;
	}
`;

export const SocailLink = styled("a")<{ $backgroundColor?: string }>`
	position: absolute;
	background-color: ${({ $backgroundColor, theme }) =>
		$backgroundColor || theme.white};
	border-radius: 50%;
	z-index: 10;
	width: 2.5vw;
	height: 2.5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 4px 8px rgba(0,0,0 .95);
	transition: transform .3s ease, box-shadow .3s ease;

	&:hover{
		transform: scale(1.2);
		box-shadow: 0 8px 16px rgba(0,0,0 .95);
	}

	&.socialLink_0{
		left: -10%;
		bottom: 28%;
	}
	&.socialLink_1{
		left: -6%;
		bottom: 62%;
	}
	&.socialLink_2{
		left: 17%;
		bottom: 86%;
	}
	&.socialLink_3{
		left: 48%;
		bottom: 93%;
	}
`;

export const CallToActionButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8vw;

	a {
		&:hover {
			opacity: 0.7;
		}
	}

	.icon {
		border: 2px solid ${(props) => props.theme.primaryColor};
    height: 3vw;
    width: 3vw;
    border-radius: 100vw;
    display: flex;
    justify-content: center;
	align-items: center;
	}

	button {
		background-color: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.white};
		height: 3vw;
		padding: 0 1.5vw;
		border-radius: 4vw;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

		&:hover {
			opacity: 0.7;
			cursor: pointer;
		}
	}
`;