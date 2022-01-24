import React from "react";
import Box from "./Box";
import { StyledFormRow } from "./FormRow.styles";

interface iFormRow {
  guesses: string[];
  currentGuess: string;
}

const FormRow: React.FC<iFormRow> = ({ guesses, currentGuess }) => {
  const mapGuess = currentGuess.split("");

  return (
    <StyledFormRow>
      {mapGuess.map((letter, i) => {
        return <Box value={letter} key={i} />;
      })}
      {[...Array(5 - mapGuess.length)].map((e, i) => {
        return <Box value={""} key={i} />;
      })}
    </StyledFormRow>
  );
};

export default FormRow;
