import Link from "next/link";
import styled from "styled-components";

export const NavigationMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1vw;
	position: absolute;
	right: 0;
	top: 0;
	background-color: ${(props) => props.theme.gray_1};
	border-radius: 0 0 50vw 50vw;
	padding-top: 1.5vw;
	width: 3vw;
	z-index: 30 !important;
  transform: translateX(50%);

	.tooltip {
		position: absolute;
		left: 1vw;
		top: -0.3vw;
		display: none;
		padding: 0.5vw 1vw;
		background-color: ${(props) => props.theme.black};
		color: ${(props) => props.theme.white};
    font-size: .6vw;
    white-space: nowrap;
    border-radius: 50vw;
	}
`;

export const NavigationMenuAction = styled.button`
  background-color: transparent;
  opacity: .8;
  transition: transform .2s ease;

  &:hover{
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);

    .tooltip{
      position: absolute;
      display:flex;
      font-size: .6vw;
    }
  }
`

export const NavigationMenusBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5vw;
	border-top: 5px solid ${(props) => props.theme.background};
	background-color: ${(props) => props.theme.gray_1};
  width: 100%;
  padding: 1vw 0 1.5vw 0;
  border-radius: 50vw;
`;

export const NavigationMenuItem = styled(Link)`
	color: ${(props) => props.theme.black};
	opacity: 0.3;
	transition: transform 0.3s ease;
	position: relative;

	&:hover {
		cursor: pointer;
		opacity: 1;
		transform: scale(1.2);

		.tooltip {
			display: flex;
			font-size: 0.6vw;
		}
	}

	&.active {
    opacity: 1;
    transform: scale(1.5);
	}
`;

export const AiChatAction = styled("div")`
	background-color: ${(props) => props.theme.primaryColor};
	width: 100%;
	padding: 0.9vw 0 1vw 0;
	border-bottom-left-radius: 2vw;
	border-bottom-right-radius: 2vw;
	opacity: 1;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		transform: scale(1);
		cursor: pointer;
	}

	.chatBox {
		background-color: ${(props) => props.theme.background};
		width: 20vw;
		position: absolute;
		left: 120%;
		top: 20%;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.65);
		border-radius: 1vw;

		&:hover {
			cursor: default;
		}
	}

	.chatBox.chatBoxHidden {
		display: none;
	}
`;
