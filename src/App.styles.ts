import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

html {
  background-color: #121213;
  color: #d7dadc;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
