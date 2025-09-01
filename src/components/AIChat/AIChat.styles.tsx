import styled from "styled-components";

export const AiChatBox = styled.div`
	width: 100%;
	height: 100%;
	padding: 0.7vw 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
`;

export const LoadingIndicator = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	background-color: ${(props) => props.theme.white};
	opacity: 0.8;
	border-radius: 1vw;
`;

export const ChatHeader = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	gap: 1vw;
	border-bottom: 1px solid ${(props) => props.theme.gray_1};
	padding: 0 0.5vw 0.5vw 1vw;

	button {
		background-color: transparent;
	}
`;

export const ChatMessages = styled.div`
	width: 100%;
	height: 15vw;
	display: flex;
	flex-direction: column;
	gap: 1vw;
	padding: 1vw;
	overflow-y: scroll;

	.user-message {
		background-color: ${(props) => props.theme.primaryColorLight};
		color: ${(props) => props.theme.black};
		border-top-left-radius: 0.8vw;
		border-bottom-left-radius: 0.8vw;
		border-top-right-radius: 0.8vw;
		padding: 0.3vw 0.6vw;
		width: 80%;
		margin-left: auto;
	}

	.agent-message {
		background-color: ${(props) => props.theme.gray_1};
		border-top-right-radius: 0.8vw;
		border-bottom-right-radius: 0.8vw;
		border-top-left-radius: 0.8vw;
		padding: 0.3vw 0.6vw;
		width: 90%;
		justify-self: right;
	}
`;

export const AiChatForm = styled.form`
	width: 100%;
	height: auto;
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 2vw;
	border-radius: 100vw;
	padding: 0 0.7vw;

	input {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
		border-radius: 100vw;
		padding: 0.5vw;
		font-size: 0.8vw;
		font-family: inherit;
		width: 100%;
	}

	button {
		background-color: transparent;

		:hover {
			opacity: 0.8;
		}
	}
`;
