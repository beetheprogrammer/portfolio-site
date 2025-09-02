import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box !important;
    font-size: .93vw;
  }

  ::-webkit-scrollbar{
    width: 0;
    background: transparent;
  }

  a,p,h1,h2, span, div,button{
    color: ${(props) => props.theme.textColor};
  }
`;

export const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 25% 75%;
	grid-template-rows: 100%;
	background-color: ${(props) => props.theme.background};
`;

export const ContentContainer = styled.div`
	width: 100%;
	padding: 0 0 0 2.5vw;
  overflow: auto;
`;

export const NotFoundPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 1.5vw;

	a {
		padding: 1vw 2vw;
		text-decoration: none;
		background-color: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.white};
    border-radius: 3vw;
	}
`;


