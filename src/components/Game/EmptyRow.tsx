import React from "react";
import styled from "styled-components";
import Box from "./Box";
function EmptyRow() {
  const n: number = 5;

  return (
    <StyledEmptyRow>
      {[...Array(n)].map((e, i) => {
        return <Box value={""} key={i} />;
      })}
    </StyledEmptyRow>
  );
}

export default EmptyRow;

const StyledEmptyRow = styled.div`
  display: flex;
  gap: 20px;
`;
