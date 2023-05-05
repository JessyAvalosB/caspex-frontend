import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderBase = styled.span`
  display: block;
  margin: auto;
  width: 80px;
  height: 80px;
  border: 10px solid #333333;
  border-top: 10px solid #1e1e1e;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
