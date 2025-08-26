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
  overflow: scroll;
`;
