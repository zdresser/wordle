import React from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper className='App'>
        <Header />
      </Wrapper>
    </>
  );
}

export default App;
