import React from "react";
import styled from "styled-components";

interface iBox {
  value?: string;
}

const Box: React.FC<iBox> = ({ value }): JSX.Element => {
  return <StyledBox>{value}</StyledBox>;
};

export default Box;

const StyledBox = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  outline: 1px solid grey;
  line-height: 60px;
  font-size: 40px;
  justify-content: center;
`;
