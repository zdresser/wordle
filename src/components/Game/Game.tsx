import React from "react";
import { StyledGame } from "./Game.styles";
import FormRow from "./FormRow";
import EmptyRow from "./EmptyRow";

interface GameProps {
  guesses: string[];
  currentGuess: string;
}
//use ternaries to switch between FormRow and CompleteRow based on guesses.length
const Game: React.FC<GameProps> = ({ guesses, currentGuess }): JSX.Element => {
  return (
    <StyledGame>
      <FormRow guesses={guesses} currentGuess={currentGuess} />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
      <EmptyRow />
    </StyledGame>
  );
};

export default Game;
