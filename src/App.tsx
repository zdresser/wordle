import React, { useState, useEffect } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  // read https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e: KeyboardEvent) => {
    const alpha = /^[a-zA-Z]+$/;

    //check for enter or backspace press
    if (e.key === "Enter") {
      console.log(e.key);
      return;
    } else if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    //Limit to 5 chars and only letters
    if (currentGuess.length < 5 && e.keyCode > 64 && e.keyCode < 91) {
      setCurrentGuess((prev) => prev + e.key.toUpperCase());
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className='App'>
        <Header />
        <Game guesses={guesses} currentGuess={currentGuess} />
      </Wrapper>
    </>
  );
}

export default App;

/* Game logic
-Store current word in "currentGuess" variable. 
-Write function to handle key presses. If currentGuess.length < 5 && it's a letter, update the currentGuess
-Add event listener to track key presses
*/
