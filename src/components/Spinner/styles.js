import styled, { css, keyframes } from "styled-components";

export const animationSpinner = () => css`
  animation: ${effect} 1.2s linear infinite;
`;
const effect = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ContainerSpinner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    color: var(--lightblue);
    margin-top: 20px;
  }
`;

export const LdsDualRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--lightblue);
    border-color: var(--lightblue) transparent var(--lightblue) transparent;
    ${animationSpinner()}
  }
`;
