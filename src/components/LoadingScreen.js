import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const Rotate = styled.div`
  display: inline-block;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default function LoadingScreen() {
  return (
    <Rotate>
      <span role="img" aria-label="wineglass">
        🍷
      </span>
    </Rotate>
  );
}
